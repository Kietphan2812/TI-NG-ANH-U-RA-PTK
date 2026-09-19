// Logic tương tác hệ thống ôn thi Tiếng Anh Đầu Ra
// Tác giả: Antigravity IDE
// Dữ liệu: NoiDungDayDu.docx (Topic 1: Describe People)

// State toàn cục
const AppState = {
  mode: 'practice', // 'practice' hoặc 'exam'
  userAnswers: {},  // { qId: answerValue }
  flagged: new Set(),
  isSubmitted: false,
  timerSeconds: 30 * 60, // 30 phút
  timerInterval: null,
  isTimerRunning: true,
  mediaRecorder: null,
  audioChunks: [],
  isRecording: false
};

// Đăng ký danh sách 35 câu hỏi chuẩn để vẽ bảng điều hướng
const QUESTION_LIST = [
  // 1-10: Vocab
  ...EXAM_DATA.vocabularyQuestions.map((q, idx) => ({ ...q, globalIndex: idx + 1, type: 'mcq' })),
  // 11-15: Reading Signs
  ...EXAM_DATA.readingSignQuestions.map((q, idx) => ({ ...q, globalIndex: 10 + idx + 1, type: 'mcq' })),
  // 16-20: Reading Tony
  ...EXAM_DATA.readingTonyQuestions.map((q, idx) => ({ ...q, globalIndex: 15 + idx + 1, type: 'mcq' })),
  // 21-30: Reading Anna
  ...EXAM_DATA.readingAnnaQuestions.map((q, idx) => ({ ...q, globalIndex: 20 + idx + 1, type: 'mcq' })),
  // 31-35: Writing Sentence Transformations
  ...EXAM_DATA.sentenceTransformations.map((q, idx) => ({ ...q, globalIndex: 30 + idx + 1, type: 'writing_transform' }))
];

// Khởi chạy ứng dụng khi DOM tải xong
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  initTheme();
  renderAllSections();
  renderVocabularyStudy();
  renderSpeakingSample();
  renderListeningSections();
  renderQuestionNav();
  startTimer();
  updateProgressCounters();
  initTextSelectionAndCopyFeatures();
});

// Lưu và khôi phục trạng thái từ LocalStorage
function saveState() {
  try {
    localStorage.setItem('tienganh_answers', JSON.stringify(AppState.userAnswers));
    localStorage.setItem('tienganh_flags', JSON.stringify(Array.from(AppState.flagged)));
    const essayEl = document.getElementById('essay-input');
    if (essayEl) {
      localStorage.setItem('tienganh_essay', essayEl.value);
    }
  } catch (e) {
    console.error("Không thể lưu trạng thái:", e);
  }
}

function loadSavedState() {
  try {
    const savedAns = localStorage.getItem('tienganh_answers');
    if (savedAns) AppState.userAnswers = JSON.parse(savedAns);

    const savedFlags = localStorage.getItem('tienganh_flags');
    if (savedFlags) AppState.flagged = new Set(JSON.parse(savedFlags));

    const savedEssay = localStorage.getItem('tienganh_essay');
    if (savedEssay) {
      setTimeout(() => {
        const essayEl = document.getElementById('essay-input');
        if (essayEl) {
          essayEl.value = savedEssay;
          updateWordCount();
        }
      }, 100);
    }
  } catch (e) {
    console.error("Lỗi đọc LocalStorage:", e);
  }
}

// Chuyển đổi tab
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));

  const targetTab = document.getElementById(tabId);
  if (targetTab) targetTab.classList.add('active');

  // Active button
  const matchingBtn = Array.from(document.querySelectorAll('.tab-link')).find(btn => 
    btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)
  );
  if (matchingBtn) matchingBtn.classList.add('active');

  // Scroll to top of content
  window.scrollTo({ top: 70, behavior: 'smooth' });
}

// Chuyển đổi chế độ Luyện tập / Thi thử
function setExamMode(mode) {
  AppState.mode = mode;
  document.getElementById('mode-practice-btn').classList.toggle('active', mode === 'practice');
  document.getElementById('mode-exam-btn').classList.toggle('active', mode === 'exam');

  renderAllSections();
  renderQuestionNav();

  alert(mode === 'practice' 
    ? "Chế độ LUYỆN TẬP: Đáp án đúng sẽ đổi sang MÀU XANH, đáp án sai đổi sang MÀU ĐỎ và hiển thị giải thích ngay lập tức!" 
    : "Chế độ THI THỬ: Đáp án và lời giải sẽ được ẩn cho đến khi bạn bấm 'Nộp bài'!");
}

// Đổi màu nền Dark / Light
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('tienganh_theme', newTheme);
  document.getElementById('theme-toggle-btn').innerText = newTheme === 'dark' ? '☀️' : '🌙';
}

function initTheme() {
  const savedTheme = localStorage.getItem('tienganh_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('theme-toggle-btn').innerText = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Đồng hồ đếm ngược
function startTimer() {
  updateTimerDisplay();
  AppState.timerInterval = setInterval(() => {
    if (AppState.isTimerRunning && !AppState.isSubmitted) {
      if (AppState.timerSeconds > 0) {
        AppState.timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(AppState.timerInterval);
        alert("⏰ Hết thời gian làm bài! Hệ thống đang tự động nộp bài của bạn.");
        submitExam();
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(AppState.timerSeconds / 60);
  const secs = AppState.timerSeconds % 60;
  const text = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  const el = document.getElementById('timer-text');
  if (el) el.innerText = text;

  const widget = document.getElementById('timer-display');
  if (widget) {
    if (AppState.timerSeconds < 300) { // Dưới 5 phút
      widget.classList.add('warning');
    } else {
      widget.classList.remove('warning');
    }
  }
}

function toggleTimer() {
  AppState.isTimerRunning = !AppState.isTimerRunning;
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) btn.innerText = AppState.isTimerRunning ? '⏸️' : '▶️';
}

// RENDER TOÀN BỘ NỘI DUNG VÀO TAB "TẤT CẢ" VÀ CÁC TAB TƯƠNG ỨNG
function renderAllSections() {
  const allContainer = document.getElementById('all-sections-container');
  const vocabContainer = document.getElementById('vocab-questions-container');
  const signsContainer = document.getElementById('reading-signs-container');
  const tonyContainer = document.getElementById('reading-tony-container');
  const annaContainer = document.getElementById('reading-anna-container');
  const writingContainer = document.getElementById('writing-transform-container');

  // Render Section 1: Vocab Questions (1-10)
  const vocabHTML = renderMCQList(EXAM_DATA.vocabularyQuestions, 0);
  if (vocabContainer) vocabContainer.innerHTML = vocabHTML;

  // Render Section 2: Reading Signs (11-15)
  const signsHTML = renderMCQList(EXAM_DATA.readingSignQuestions, 10);
  if (signsContainer) signsContainer.innerHTML = signsHTML;

  // Render Tony Passage text & controls
  const tonyCardHtml = renderTonyPassageCardHtml('tony-tab');
  const tonyPassageEl = document.getElementById('tony-passage-text');
  if (tonyPassageEl) {
    tonyPassageEl.innerHTML = tonyCardHtml;
  }
  const tonyHTML = renderMCQList(EXAM_DATA.readingTonyQuestions, 15);
  if (tonyContainer) tonyContainer.innerHTML = tonyHTML;

  // Render Anna Passage text & controls
  const annaCardHtml = renderAnnaPassageCardHtml('anna-tab');
  const annaPassageEl = document.getElementById('anna-passage-text');
  if (annaPassageEl) {
    annaPassageEl.innerHTML = annaCardHtml;
  }
  const annaHTML = renderMCQList(EXAM_DATA.readingAnnaQuestions, 20);
  if (annaContainer) annaContainer.innerHTML = annaHTML;

  // Render Writing Transformations (31-35)
  const writingHTML = renderWritingTransformList(EXAM_DATA.sentenceTransformations, 30);
  if (writingContainer) writingContainer.innerHTML = writingHTML;

  // Ghép tất cả vào tab Tất Cả Bài Tập
  if (allContainer) {
    allContainer.innerHTML = `
      <div class="section-card">
        <div class="section-card-header">
          <h3 class="section-card-title">📝 Phần I: Trắc nghiệm Từ vựng (10 câu)</h3>
          <span class="section-tag">Câu 1 - 10</span>
        </div>
        ${vocabHTML}
      </div>

      <div class="section-card">
        <div class="section-card-header">
          <h3 class="section-card-title">📰 Phần II.a: Đọc hiểu biển báo (5 câu)</h3>
          <span class="section-tag">Câu 11 - 15</span>
        </div>
        ${signsHTML}
      </div>

      <div class="section-card">
        <div class="section-card-header">
          <h3 class="section-card-title">📰 Phần II.b: Bài đọc "MY BEST FRIEND" (Tony - 5 câu)</h3>
          <span class="section-tag">Câu 16 - 20</span>
        </div>
        ${renderTonyPassageCardHtml('tony-all')}
        ${tonyHTML}
      </div>

      <div class="section-card">
        <div class="section-card-header">
          <h3 class="section-card-title">📰 Phần II.c: Điền từ vào đoạn văn (Anna - 10 câu)</h3>
          <span class="section-tag">Câu 21 - 30</span>
        </div>
        ${renderAnnaPassageCardHtml('anna-all')}
        ${annaHTML}
      </div>

      <div class="section-card">
        <div class="section-card-header">
          <h3 class="section-card-title">✍️ Phần V.a: Viết lại câu tương đương (5 câu Tự Luận)</h3>
          <span class="section-tag">Câu 31 - 35</span>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 16px;">
          Tự luận trực tiếp: Nhập phần câu viết tiếp vào ô trống và nhấn "Kiểm tra" để đối chiếu đáp án thông minh.
        </p>
        ${writingHTML}
      </div>
    `;
  }

  // Khôi phục các câu trả lời đã lưu
  restoreAnswerInputs();
}

// TỪ ĐIỂN SONG NGỮ TRA NGHĨA TỪNG TỪ TOÀN DIỆN
const WORD_DICTIONARY = {
  // Từ để hỏi & Trợ động từ
  "what": "cái gì / gì",
  "where": "ở đâu / nơi nào",
  "who": "ai / người nào",
  "which": "cái nào / điều nào",
  "how": "như thế nào / làm sao",
  "why": "tại sao / vì sao",
  "when": "khi nào / khi",
  "does": "trợ động từ (thì hiện tại)",
  "do": "làm / trợ động từ",
  "did": "đã / trợ động từ (quá khứ)",
  "is": "thì / là (số ít)",
  "are": "thì / là (số nhiều)",
  "am": "thì / là (đi với I)",
  "was": "đã là / đã ở (số ít)",
  "were": "đã là / đã ở (số nhiều)",
  "have": "có",
  "has": "có / đã",
  "had": "đã có / đã từng",
  "can": "có thể",
  "cannot": "không thể",
  "could": "đã có thể",
  "will": "sẽ",
  "would": "sẽ / muốn",
  "must": "phải / chắc hẳn",
  "should": "nên",

  // Động từ & Cụm động từ
  "look": "trông / nhìn",
  "looks": "trông có vẻ",
  "like": "như thế nào / giống như / thích",
  "likes": "thích thú",
  "look like": "trông như thế nào (ngoại hình)",
  "mean": "có nghĩa là / keo kiệt",
  "means": "nghĩa là",
  "say": "nói",
  "says": "nói rằng",
  "circle": "khoanh tròn",
  "choose": "hãy chọn",
  "complete": "hoàn thành",
  "read": "đọc",
  "describe": "miêu tả / tả về",
  "describes": "miêu tả",
  "show": "xuất trình / cho xem",
  "shows": "cho thấy / trình chiếu",
  "tell": "nói / kể cho",
  "tells": "kể",
  "told": "đã nói / kể",
  "make": "làm / chế tạo",
  "makes": "khiến cho / làm cho",
  "made": "được làm / dàn dựng",
  "take": "cầm / lấy / tham gia",
  "takes": "tham gia / lấy",
  "took": "đã lấy / đã tham gia",
  "get": "nhận / trở nên / nhờ",
  "gets": "nhận",
  "got": "đã nhận",
  "getting": "đang nhờ / thuê",
  "give": "cho / tặng",
  "gives": "đưa cho",
  "giving": "đang cho mượn / đưa",
  "keep": "giữ gìn / duy trì",
  "keeps": "giữ",
  "stay": "ở lại / lưu trú",
  "stayed": "đã ở",
  "visit": "ghé thăm / thăm quan",
  "visiting": "đang thăm quan",
  "visited": "đã đi thăm",
  "travel": "đi du lịch / đi lại",
  "travelling": "việc đi lại / du lịch",
  "inspire": "truyền cảm hứng",
  "inspires": "truyền cảm hứng",
  "correct": "sửa lỗi / chính xác",
  "corrects": "sửa lỗi cho",
  "help": "giúp đỡ",
  "helps": "giúp đỡ",
  "need": "cần",
  "needs": "cần thiết",
  "needed": "được cần",
  "play": "chơi (thể thao/nhạc cụ)",
  "plays": "chơi",
  "work": "làm việc / hoạt động",
  "works": "làm việc",
  "working": "đang hoạt động / làm việc",
  "eat": "ăn",
  "eats": "ăn",
  "eaten": "đã ăn xong",
  "save": "tiết kiệm / dành dụm",
  "saving": "đang để dành",
  "wear": "mặc / đeo (kính)",
  "wears": "đeo / mặc",
  "turn": "quay / xoay",
  "turned": "đã quay đầu / ngoảnh",
  "enter": "bước vào",
  "entered": "đã bước vào",
  "faint": "ngất xỉu",
  "fainted": "đã ngất xỉu",
  "mend": "sửa chữa",
  "mended": "được sửa chữa",
  "see": "nhìn thấy / kiểm tra",
  "leave": "rời khỏi",
  "put": "đặt / để",
  "bring": "mang lại",
  "brings": "mang về",
  "meet": "gặp gỡ",
  "live": "sinh sống",
  "lives": "sinh sống",
  "study": "học tập",
  "studying": "đang theo học",
  "studies": "việc học / ngành học",
  "enjoy": "thích thú / tận hưởng",
  "enjoys": "thích thú",
  "watching": "xem / theo dõi",
  "scare": "làm sợ hãi",
  "order": "gọi món / thứ tự / hỏng",
  "ordered": "được gọi món / đặt mua",
  "out of order": "bị hỏng / ngưng hoạt động",
  "lock": "khóa",
  "locked": "được khóa",
  "park": "đỗ xe / công viên",
  "return": "trả lại / quay về",
  "buy": "mua",
  "bought": "được mua",

  // Tên riêng
  "tony": "Tony (tên riêng)",
  "maria": "Maria (tên riêng)",
  "anna": "Anna (tên riêng)",
  "sarah": "Sarah (tên riêng)",
  "jim": "Jim (tên riêng)",
  "ken": "Ken (tên riêng)",
  "emma": "Emma (tên riêng)",
  "caroline": "Caroline (tên riêng)",
  "junko": "Junko (tên riêng)",
  "jessica": "Jessica (tên riêng)",
  "minh": "Minh (tên riêng)",
  "mexico": "nước Mê-hi-cô",
  "london": "thành phố Luân Đôn",

  // Danh từ phổ biến
  "mother": "mẹ",
  "father": "bố / cha",
  "parents": "bố mẹ",
  "family": "gia đình",
  "principal": "hiệu trưởng",
  "teacher": "giáo viên / thầy cô",
  "teachers": "các thầy cô giáo",
  "farmer": "nông dân",
  "player": "người chơi / nhạc công",
  "guitar": "đàn ghi-ta",
  "classmate": "bạn cùng lớp",
  "classmates": "những người bạn cùng lớp",
  "friend": "người bạn",
  "friends": "những người bạn",
  "best friend": "bạn thân nhất",
  "adjective": "tính từ",
  "passage": "đoạn văn",
  "questions": "các câu hỏi",
  "question": "câu hỏi",
  "answers": "các câu trả lời",
  "answer": "câu trả lời / đáp án",
  "text": "đoạn văn / văn bản",
  "letter": "chữ cái / lá thư",
  "explanation": "lời giải thích",
  "entrance": "lối vào / cửa vào",
  "door": "cánh cửa",
  "room": "căn phòng",
  "key": "chìa khóa",
  "librarian": "người thủ thư",
  "library": "thư viện",
  "book": "cuốn sách",
  "books": "những cuốn sách",
  "ticket": "tấm vé",
  "tickets": "những tấm vé",
  "supersaver": "siêu tiết kiệm",
  "machine": "chiếc máy",
  "drink": "đồ uống",
  "drinks": "các loại đồ uống",
  "bar": "quầy bar / quán nước",
  "head": "cái đầu",
  "film": "bộ phim",
  "films": "những bộ phim",
  "people": "con người / mọi người",
  "person": "người / cá nhân",
  "relationship": "mối quan hệ",
  "relationships": "các mối quan hệ",
  "animal": "loài động vật",
  "animals": "các loài động vật",
  "water": "nước",
  "lake": "hồ nước",
  "elephant": "con voi",
  "elephants": "những con voi",
  "telephone": "điện thoại",
  "lunch": "bữa ăn trưa",
  "height": "chiều cao",
  "weight": "cân nặng",
  "figure": "vóc dáng / thân hình",
  "body": "cơ thể / vóc người",
  "personality": "tính cách",
  "eyes": "đôi mắt",
  "eye": "con mắt",
  "hair": "mái tóc",
  "beard": "bộ râu",
  "nose": "chiếc mũi",
  "fringe": "tóc mái bằng",
  "ponytail": "tóc đuôi ngựa / đuôi gà",
  "skin": "làn da",
  "sports": "các môn thể thao",
  "sport": "thể thao",
  "music": "âm nhạc",
  "heart": "trái tim / tấm lòng",
  "manners": "cách cư xử / lễ độ",
  "marks": "điểm số",
  "class": "lớp học",
  "bench": "bàn học / ghế dài",
  "examinations": "các kỳ thi",
  "examination": "kỳ thi",
  "exam": "bài thi",
  "notebook": "vở ghi bài",
  "mistake": "lỗi lầm / sai sót",
  "heat": "sức nóng / cái nóng",
  "theatre": "nhà hát",
  "window": "cửa sổ",
  "windows": "những chiếc cửa sổ",
  "time": "thời gian / lần",
  "pity": "điều đáng tiếc",
  "day": "ngày",
  "days": "các ngày",
  "friday": "thứ Sáu",
  "fridays": "các ngày thứ Sáu",
  "weekend": "cuối tuần",
  "money": "tiền bạc",
  "emergency": "trường hợp khẩn cấp",
  "permission": "sự cho phép",
  "children": "những đứa trẻ",
  "child": "đứa trẻ",
  "neighborhood": "khu phố / hàng xóm",
  "house": "ngôi nhà",
  "girl": "cô gái",
  "medicine": "ngành y / y khoa",
  "university": "trường đại học",
  "country": "đất nước / quốc gia",
  "countries": "các quốc gia",
  "world": "thế giới",
  "gift": "món quà",
  "gifts": "những món quà",
  "glasses": "kính mắt",
  "thirties": "những năm 30 tuổi",
  "years": "năm / tuổi",
  "year": "năm",

  // Tính từ & Trạng từ
  "good": "tốt / hay",
  "best": "tốt nhất / chuẩn nhất",
  "humorous": "hài hước / hóm hỉnh",
  "funny": "buồn cười / vui vẻ",
  "honest": "trung thực / thật thà",
  "well-behaved": "ngoan ngoãn / cư xử tốt",
  "hard-working": "chăm chỉ / siêng năng",
  "well-dressed": "ăn mặc chỉn chu / đẹp",
  "well-built": "vạm vỡ / cường tráng",
  "wrong-built": "sai cấu trúc",
  "good-built": "sai chuẩn từ",
  "nice-built": "sai chuẩn từ",
  "middle-aged": "trung niên (độ tuổi)",
  "tall": "cao ráo",
  "short": "ngắn / thấp",
  "slim": "thon thả / mảnh mai",
  "thin": "gầy / thanh mảnh",
  "skinny": "gầy nhom",
  "fat": "béo / mập",
  "straight": "thẳng (tóc)",
  "curly": "xoăn (tóc)",
  "wavy": "lượn sóng (tóc)",
  "blonde": "vàng hoe (màu tóc)",
  "blond": "vàng hoe",
  "blue": "màu xanh lam",
  "green": "màu xanh lá",
  "brown": "màu nâu",
  "black": "màu đen",
  "fair": "trắng sáng / công bằng",
  "pale": "nhợt nhạt / xanh xao",
  "beautiful": "xinh đẹp",
  "pretty": "đẹp / xinh xắn",
  "handsome": "đẹp trai",
  "attractive": "quyến rũ / hấp dẫn",
  "good-looking": "ưa nhìn / sáng sủa",
  "punctual": "đúng giờ",
  "educated": "có giáo dục / học thức",
  "friendly": "thân thiện",
  "clever": "thông minh / khéo léo",
  "smart": "thông minh",
  "attentively": "chăm chú / tập trung",
  "obedient": "vâng lời / biết nghe lời",
  "proud": "tự hào",
  "ready": "sẵn sàng",
  "happy": "hạnh phúc / vui mừng",
  "absent": "vắng mặt / nghỉ học",
  "clear": "thông thoáng / rõ ràng",
  "open": "mở cửa",
  "closed": "đóng cửa",
  "locked": "đã khóa",
  "available": "có sẵn / còn trống",
  "special": "đặc biệt",
  "hot": "nóng bức",
  "serious": "nghiêm túc / chính kịch",
  "scary": "đáng sợ",
  "easy": "dễ dàng",
  "sure": "chắc chắn",
  "close": "gần gũi / thân thiết",
  "grown": "đã lớn / trưởng thành",
  "extroverted": "hướng ngoại",
  "introverted": "hướng nội",
  "generous": "hào phóng / rộng lượng",
  "kind": "tốt bụng / tử tế",
  "new": "mới",
  "old": "cũ / già / tuổi",
  "seventeen": "mười bảy tuổi",
  "first": "đầu tiên",
  "high": "cao (đánh giá/núi)",
  "average": "trung bình",
  "late": "cuối / muộn",
  "nearly": "gần như / suýt nữa",
  "already": "rồi / đã xong",
  "never": "chưa bao giờ",
  "always": "luôn luôn",
  "usually": "thường xuyên",
  "whenever": "bất cứ khi nào",
  "anytime": "bất cứ lúc nào",
  "originally": "ban đầu / vốn dĩ",
  "now": "bây giờ / hiện tại",
  "still": "vẫn còn",
  "quite": "khá là / tương đối",
  "very": "rất / lắm",
  "so": "quá / rất / vì thế",
  "such": "đến mức mà / như vậy",

  // Đại từ, giới từ, liên từ
  "each": "mỗi / từng",
  "every": "mọi / mỗi",
  "all": "tất cả",
  "some": "một ít / một vài",
  "many": "nhiều",
  "both": "cả hai",
  "other": "khác / lẫn nhau",
  "i": "tôi",
  "me": "tôi (tân ngữ)",
  "my": "của tôi",
  "mine": "phần của tôi",
  "you": "bạn / các bạn",
  "your": "của bạn",
  "yours": "của bạn",
  "he": "anh ấy / cậu ấy",
  "him": "anh ấy (tân ngữ)",
  "his": "của anh ấy",
  "she": "cô ấy",
  "her": "cô ấy / của cô ấy",
  "hers": "của cô ấy",
  "it": "nó",
  "its": "của nó",
  "we": "chúng tôi / chúng ta",
  "us": "chúng tôi (tân ngữ)",
  "our": "của chúng tôi",
  "ours": "của chúng tôi",
  "they": "họ / chúng nó",
  "them": "họ (tân ngữ)",
  "their": "của họ",
  "theirs": "của họ",
  "this": "này / cái này",
  "that": "đó / mà (đại từ quan hệ)",
  "these": "những cái này",
  "those": "những cái kia",
  "in": "trong",
  "on": "trên / vào (ngày)",
  "at": "tại / vào lúc",
  "to": "đến / tới / để",
  "from": "từ / đến từ",
  "for": "cho / dành cho / vì",
  "with": "với / cùng với",
  "without": "không có",
  "about": "nói về / khoảng",
  "near": "gần",
  "by": "bởi / cạnh",
  "before": "trước khi",
  "after": "sau khi",
  "between": "ở giữa",
  "around": "xung quanh",
  "under": "dưới",
  "into": "vào trong",
  "until": "cho đến khi",
  "since": "kể từ khi",
  "and": "và",
  "or": "hoặc / hay là",
  "but": "nhưng",
  "because": "bởi vì",
  "although": "mặc dù",
  "if": "nếu / miễn là",
  "as": "như / khi",
  "than": "hơn",
  "not": "không",
  "here": "ở đây",
  "there": "ở đó / có"
};

// Hàm tra nghĩa từ linh hoạt (Kết hợp Từ điển Offline + Smart Lemma + Online Proxy)
function getWordMeaning(rawWord) {
  if (!rawWord) return '';
  const lower = rawWord.toLowerCase().trim();

  // 1. Tra cứu trực tiếp trong WORD_DICTIONARY
  if (WORD_DICTIONARY[lower]) return WORD_DICTIONARY[lower];

  // 2. Tra cứu trong danh sách 53 từ vựng của bài thi
  const vocabFound = EXAM_DATA.vocabulary.find(v => v.word.toLowerCase() === lower);
  if (vocabFound) return vocabFound.meaning;

  // 3. Xử lý các dạng biến thể hình thái (Lemmatization)
  // Bỏ 's' hoặc 'es' (số nhiều)
  if (lower.endsWith('es') && WORD_DICTIONARY[lower.slice(0, -2)]) {
    return WORD_DICTIONARY[lower.slice(0, -2)];
  }
  if (lower.endsWith('s') && WORD_DICTIONARY[lower.slice(0, -1)]) {
    return WORD_DICTIONARY[lower.slice(0, -1)];
  }
  // Bỏ 'ing'
  if (lower.endsWith('ing')) {
    const base = lower.slice(0, -3);
    if (WORD_DICTIONARY[base]) return WORD_DICTIONARY[base];
    if (WORD_DICTIONARY[base + 'e']) return WORD_DICTIONARY[base + 'e'];
  }
  // Bỏ 'ed'
  if (lower.endsWith('ed')) {
    const base = lower.slice(0, -2);
    if (WORD_DICTIONARY[base]) return WORD_DICTIONARY[base];
    if (WORD_DICTIONARY[base + 'd']) return WORD_DICTIONARY[base + 'd'];
  }

  // 4. Kiểm tra tên riêng viết hoa
  if (/^[A-Z][a-z]+$/.test(rawWord)) {
    return '(tên riêng)';
  }

  // Nếu là số đo, chữ số
  if (/^\d+/.test(rawWord)) {
    return rawWord;
  }

  return ''; // Trả về rỗng để gọi API dịch tự động
}

// Tự động tải bản dịch online cho các từ chưa có trong từ điển
async function fetchMissingWordTranslation(word, chipId) {
  try {
    const isOnline = window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    const apiBase = isOnline ? '' : (window.location.protocol.startsWith('http') ? '' : 'https://tieng-anh-dau-ra-ptk.onrender.com');
    const res = await fetch(`${apiBase}/api/translate-word?word=${encodeURIComponent(word)}`);
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.translation) {
      const el = document.getElementById(chipId);
      if (el) el.innerText = data.translation;
      // Lưu lại vào bộ nhớ đệm
      WORD_DICTIONARY[word.toLowerCase()] = data.translation;
    }
  } catch (e) {
    // Không làm gián đoạn UI
  }
}

// Hàm tạo thanh phân tích từng từ tiếng Anh sang tiếng Việt (Không bao giờ bị 'từ vựng'!)
function renderWordBreakdownHtml(sentenceText) {
  if (!sentenceText) return '';
  // Xóa các dấu gạch dưới, dấu câu và tách từ
  const words = sentenceText
    .replace(/_+/g, ' ')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length > 0 && !w.includes('blank'));

  // Lọc trùng lặp từ nhưng giữ nguyên thứ tự
  const seen = new Set();
  const uniqueWords = [];
  words.forEach(w => {
    const lower = w.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      uniqueWords.push(w);
    }
  });

  const chipsHtml = uniqueWords.map(w => {
    let viMeaning = getWordMeaning(w);
    const chipId = 'chip-' + Math.random().toString(36).substr(2, 9);

    if (!viMeaning) {
      viMeaning = '...';
      // Tự động tải bản dịch online
      setTimeout(() => fetchMissingWordTranslation(w, chipId), 10);
    }

    return `
      <div class="word-chip" onclick="speakWord('${escapeHtml(w)}')" title="Bấm để nghe phát âm từ: ${escapeHtml(w)}">
        <span class="chip-en" onclick="event.stopPropagation(); speakWord('${escapeHtml(w)}')" title="Bấm nghe phát âm tiếng Anh: ${escapeHtml(w)}">🔊 ${escapeHtml(w)}</span>
        <span class="chip-vi" id="${chipId}" onclick="event.stopPropagation(); speakViWord(this.innerText)" title="Bấm nghe nghĩa tiếng Việt">${escapeHtml(viMeaning)}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="word-by-word-container">
      <div class="word-by-word-header">
        <span>🔍 Bảng đối chiếu nghĩa từng từ (Nhấp vào từ để nghe phát âm riêng):</span>
      </div>
      <div class="word-chips-grid">
        ${chipsHtml}
      </div>
    </div>
  `;
}

// Lấy văn bản câu hỏi hoàn chỉnh khi đã chọn đáp án
function getCompletedQuestionText(qData) {
  const selectedKey = AppState.userAnswers[qData.id];
  const selectedOpt = (qData.options && selectedKey) ? qData.options.find(o => o.key === selectedKey) : null;
  const rawQuestion = qData.question;

  if (!selectedOpt) {
    return {
      sentence: rawQuestion,
      hasSelection: false,
      selectedKey: null,
      selectedText: null
    };
  }

  const wordToFill = selectedOpt.text === '∅' ? '' : selectedOpt.text;
  let filledSentence = rawQuestion;

  if (/(_{2,}|…+|\.{3,}|\(\d+\)[….]*)/.test(rawQuestion)) {
    filledSentence = rawQuestion.replace(/(_{2,}|…+|\.{3,}|\(\d+\)[….]*)/, wordToFill).replace(/\s+/g, ' ').trim();
  } else {
    filledSentence = `${rawQuestion} ${wordToFill}`.trim();
  }

  return {
    sentence: filledSentence,
    hasSelection: true,
    selectedKey: selectedOpt.key,
    selectedText: selectedOpt.text,
    wordToFill: wordToFill,
    originalQuestion: rawQuestion
  };
}

// Định dạng HTML câu hỏi: khi đã chọn đáp án thì điền từ đó vào chỗ trống
function renderQuestionContentHtml(q) {
  const selectedKey = AppState.userAnswers[q.id];
  const selectedOpt = (q.options && selectedKey) ? q.options.find(o => o.key === selectedKey) : null;
  const rawQuestion = q.question;

  if (selectedOpt) {
    const shouldShowResult = (AppState.mode === 'practice' && selectedKey) || AppState.isSubmitted;
    let badgeClass = 'filled-blank-badge';
    if (shouldShowResult) {
      badgeClass += (selectedKey === q.correctAnswer) ? ' correct' : ' wrong';
    }

    const wordText = selectedOpt.text === '∅' ? '(để trống)' : selectedOpt.text;
    const badgeHtml = `<span class="${badgeClass}" title="Từ bạn đã chọn: ${escapeHtml(selectedOpt.text)}">${escapeHtml(wordText)}</span>`;

    if (/(_{2,}|…+|\.{3,}|\(\d+\)[….]*)/.test(rawQuestion)) {
      return escapeHtml(rawQuestion).replace(/(_{2,}|…+|\.{3,}|\(\d+\)[….]*)/, badgeHtml);
    } else {
      return `${escapeHtml(rawQuestion)} <span class="${badgeClass}" style="margin-left: 8px;">[Đã chọn: ${selectedOpt.key}. ${escapeHtml(selectedOpt.text)}]</span>`;
    }
  }

  return escapeHtml(rawQuestion);
}

// Định dạng nội dung khung dịch tiếng Việt: cập nhật đáp án đã chọn
function renderTranslationBoxContent(q) {
  const selectedKey = AppState.userAnswers[q.id];
  const selectedOpt = (q.options && selectedKey) ? q.options.find(o => o.key === selectedKey) : null;
  let chosenCallout = '';
  if (selectedOpt) {
    const isCorrect = selectedKey === q.correctAnswer;
    const shouldShowResult = (AppState.mode === 'practice' && selectedKey) || AppState.isSubmitted;
    const meaning = getWordMeaning(selectedOpt.text);
    const meaningStr = (meaning && meaning !== '(tên riêng)') ? ` (Nghĩa: ${meaning.split('/')[0].trim()})` : '';

    let calloutClass = 'selected-ans-callout';
    let statusPrefix = '';
    if (shouldShowResult) {
      calloutClass += isCorrect ? ' correct-callout' : ' wrong-callout';
      statusPrefix = isCorrect ? '✅ <strong>CHÍNH XÁC!</strong> ' : '❌ <strong>CHƯA ĐÚNG!</strong> ';
    }

    let correctHint = '';
    if (shouldShowResult && !isCorrect) {
      const correctOpt = q.options.find(o => o.key === q.correctAnswer);
      const correctText = correctOpt ? ` (${correctOpt.text})` : '';
      correctHint = ` — Đáp án đúng là <strong>${q.correctAnswer}${escapeHtml(correctText)}</strong>`;
    }

    chosenCallout = `
      <div class="${calloutClass}">
        <span>${statusPrefix}🎯 <strong>Đáp án bạn chọn:</strong> <strong>${selectedOpt.key}. ${escapeHtml(selectedOpt.text)}</strong>${escapeHtml(meaningStr)}${correctHint}</span>
      </div>
    `;
  }

  return `
    <div style="font-size: 0.98rem; font-weight: 600; margin-bottom: 6px; cursor: pointer;" onclick="speakQuestion('${q.id}', 'vi')" title="Bấm để nghe đọc câu dịch tiếng Việt kèm đáp án">
      🇻🇳 Dịch cả câu: ${escapeHtml(q.vietnameseTranslation || '')}
    </div>
    ${chosenCallout}
    ${renderWordBreakdownHtml(q.question + (selectedOpt && selectedOpt.text !== '∅' ? ' ' + selectedOpt.text : ''))}
  `;
}

// Render danh sách câu hỏi trắc nghiệm
function renderMCQList(questions, offsetIndex) {
  return questions.map((q, idx) => {
    const globalNumber = offsetIndex + idx + 1;
    const isFlagged = AppState.flagged.has(q.id);
    const selectedChoice = AppState.userAnswers[q.id];
    const shouldShowResult = (AppState.mode === 'practice' && selectedChoice) || AppState.isSubmitted;

    let signHtml = '';
    if (q.signText) {
      signHtml = `<div class="sign-display ${q.signType || 'notice'}">${escapeHtml(q.signText)}</div>`;
    }

    const optionsHtml = q.options.map(opt => {
      const isSelected = selectedChoice === opt.key;
      let statusClass = '';
      if (isSelected) statusClass = 'selected';

      if (shouldShowResult) {
        if (opt.key === q.correctAnswer) {
          statusClass += ' correct-choice';
        } else if (isSelected) {
          statusClass += ' wrong-choice';
        }
      }

      return `
        <div class="option-item ${statusClass}" onclick="selectOption('${q.id}', '${opt.key}')" data-qid="${q.id}" data-key="${opt.key}">
          <div class="option-key">${opt.key}</div>
          <div class="option-text">${escapeHtml(opt.text)}</div>
          <div style="display: flex; gap: 6px; align-items: center; flex-shrink: 0;">
            <button type="button" class="btn-opt-audio" onclick="event.stopPropagation(); speakSmart('${escapeHtml(opt.text).replace(/'/g, "\\'")}', 'en-US')" title="Nghe tiếng Anh: ${opt.key}">🔊</button>
            <button type="button" class="btn-opt-audio btn-opt-vi" onclick="event.stopPropagation(); speakOptionVi('${escapeHtml(opt.text).replace(/'/g, "\\'")}')" title="Nghe tiếng Việt: ${opt.key}">🗣️</button>
          </div>
        </div>
      `;
    }).join('');

    const showExp = shouldShowResult;

    let boxStatusClass = selectedChoice ? 'answered' : '';
    if (shouldShowResult) {
      boxStatusClass += (selectedChoice === q.correctAnswer) ? ' correct' : ' incorrect';
    }

    return `
      <div class="question-box ${boxStatusClass}" id="qbox-${q.id}" data-global-idx="${globalNumber}">
        <div class="q-header">
          <div class="q-title">
            <span class="q-number-badge">Câu ${globalNumber}</span>
            <div class="q-sentence-text" id="qtext-${q.id}" onclick="speakQuestion('${q.id}', 'en')" title="Bấm vào câu hỏi để nghe phát âm tiếng Anh">${renderQuestionContentHtml(q)}</div>
          </div>
          <button class="btn-flag ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag('${q.id}')" title="Đánh dấu xem lại">
            ${isFlagged ? '🚩 Đã đánh dấu' : '🏳️ Đánh dấu'}
          </button>
        </div>

        ${signHtml}

        <div class="q-actions-bar">
          <button class="btn-audio-action" onclick="speakQuestion('${q.id}', 'en')" title="Nghe phát âm câu hỏi hoàn chỉnh kèm từ đã chọn">
            🔊 Đọc Tiếng Anh
          </button>
          <button class="btn-audio-action" onclick="toggleTranslation('${q.id}')" title="Dịch câu hỏi sang Tiếng Việt & tra từng từ">
            🌐 Dịch Tiếng Việt & Tra từ
          </button>
          <button class="btn-audio-action" onclick="speakQuestion('${q.id}', 'vi')" title="Nghe đọc câu dịch tiếng Việt kèm đáp án đã chọn">
            🗣️ Đọc Tiếng Việt
          </button>
        </div>

        <div class="translation-box" id="trans-${q.id}">
          ${renderTranslationBoxContent(q)}
        </div>

        <div class="options-list">
          ${optionsHtml}
        </div>

        <div class="explanation-box ${showExp ? 'show' : ''}" id="exp-${q.id}">
          <strong>💡 Giải thích chi tiết:</strong> ${escapeHtml(q.explanation)}
        </div>
      </div>
    `;
  }).join('');
}

// Render danh sách câu tự luận viết lại câu
function renderWritingTransformList(questions, offsetIndex) {
  return questions.map((q, idx) => {
    const globalNumber = offsetIndex + idx + 1;
    const isFlagged = AppState.flagged.has(q.id);
    const userVal = AppState.userAnswers[q.id] || '';

    return `
      <div class="question-box sentence-transform-item ${userVal ? 'answered' : ''}" id="qbox-${q.id}" data-global-idx="${globalNumber}">
        <div class="q-header">
          <div class="q-title">
            <span class="q-number-badge">Câu ${globalNumber}</span>
            <div>Viết lại câu sao cho nghĩa không đổi:</div>
          </div>
          <button class="btn-flag ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag('${q.id}')" title="Đánh dấu xem lại">
            ${isFlagged ? '🚩 Đã đánh dấu' : '🏳️ Đánh dấu'}
          </button>
        </div>

        <div class="original-sentence-badge">Câu gốc:</div>
        <div class="original-sentence" style="cursor: pointer;" onclick="speakWriting('${q.id}', 'en')" title="Bấm vào để nghe phát âm câu gốc tiếng Anh">${escapeHtml(q.originalSentence)}</div>

        <div class="q-actions-bar">
          <button class="btn-audio-action" onclick="speakWriting('${q.id}', 'en')" title="Nghe phát âm riêng câu tiếng Anh này">
            🔊 Đọc Tiếng Anh
          </button>
          <button class="btn-audio-action" onclick="toggleTranslation('${q.id}')" title="Dịch câu sang Tiếng Việt & tra từng từ">
            🌐 Dịch Tiếng Việt & Tra từ
          </button>
          <button class="btn-audio-action" onclick="speakWriting('${q.id}', 'vi')" title="Nghe đọc riêng bản dịch Tiếng Việt của câu này">
            🗣️ Đọc Tiếng Việt
          </button>
        </div>

        <div class="translation-box" id="trans-${q.id}">
          <div style="margin-bottom: 6px;">
            <div style="cursor: pointer; margin-bottom: 3px;" onclick="speakWriting('${q.id}', 'vi')" title="Bấm để nghe đọc bản dịch câu gốc">
              <strong>🇻🇳 Dịch câu gốc:</strong> ${escapeHtml(q.vietnameseTranslation || '')}
            </div>
            <div style="cursor: pointer;" onclick="speakSmart('${escapeHtml(q.vietnameseModelTranslation || '').replace(/'/g, "\\'")}', 'vi-VN')" title="Bấm để nghe đọc câu dịch hoàn chỉnh">
              <strong>🇻🇳 Dịch câu hoàn chỉnh:</strong> ${escapeHtml(q.vietnameseModelTranslation || '')}
            </div>
          </div>
          ${renderWordBreakdownHtml(q.originalSentence)}
        </div>

        <div class="input-row-container" style="margin-top: 14px;">
          <span class="sentence-prefix">${escapeHtml(q.prefix)}</span>
          <input type="text" class="sentence-input" id="input-${q.id}" 
            value="${escapeHtml(userVal)}" 
            placeholder="Nhập phần câu viết tiếp..." 
            oninput="handleWritingInput('${q.id}', this.value)"
            onkeydown="if(event.key==='Enter') checkSentence('${q.id}')">
          <button class="btn-check-sentence" onclick="checkSentence('${q.id}')">Kiểm tra</button>
        </div>

        <div class="transform-feedback" id="feedback-${q.id}"></div>

        <div class="explanation-box ${AppState.isSubmitted ? 'show' : ''}" id="exp-${q.id}">
          <div style="display: flex; align-items: center; gap: 8px;">
            <strong>🔑 Đáp án chuẩn:</strong> <span class="model-answer-highlight">${escapeHtml(q.modelAnswer)}</span>
            <button type="button" class="btn-opt-audio" onclick="speakSmart('${escapeHtml(q.modelAnswer).replace(/'/g, "\\'")}', 'en-US')" title="Nghe phát âm câu đáp án chuẩn">🔊</button>
          </div>
          <div style="margin-top: 4px;">
            <strong>📖 Ngữ pháp:</strong> ${escapeHtml(q.grammarPoint)}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Chọn đáp án trắc nghiệm
function selectOption(qId, key) {
  if (AppState.isSubmitted && AppState.mode === 'exam') return; // Khóa khi đã nộp bài thi

  AppState.userAnswers[qId] = key;
  saveState();

  const qData = QUESTION_LIST.find(q => q.id === qId);
  const shouldShowResult = (AppState.mode === 'practice') || AppState.isSubmitted;
  const isCorrect = qData && key === qData.correctAnswer;

  // Cập nhật màu sắc các lựa chọn: đúng chuyển xanh, sai chuyển đỏ
  document.querySelectorAll(`[data-qid="${qId}"]`).forEach(opt => {
    const optKey = opt.getAttribute('data-key');
    opt.classList.remove('selected', 'correct-choice', 'wrong-choice');

    if (optKey === key) {
      opt.classList.add('selected');
      if (shouldShowResult) {
        opt.classList.add(isCorrect ? 'correct-choice' : 'wrong-choice');
      }
    }
    // Nếu chọn sai, hiển thị luôn đáp án đúng màu xanh để người học đối chiếu
    if (shouldShowResult && !isCorrect && qData && optKey === qData.correctAnswer) {
      opt.classList.add('correct-choice');
    }
  });

  // Cập nhật câu hỏi hiển thị điền từ vào chỗ trống và khung dịch
  if (qData) {
    const formattedHtml = renderQuestionContentHtml(qData);
    document.querySelectorAll(`[id="qtext-${qId}"]`).forEach(el => {
      el.innerHTML = formattedHtml;
    });
    const transHtml = renderTranslationBoxContent(qData);
    document.querySelectorAll(`[id="trans-${qId}"]`).forEach(el => {
      el.innerHTML = transHtml;
    });
  }

  // Đánh dấu câu đã trả lời và đổi màu viền ô câu hỏi (xanh nếu đúng, đỏ nếu sai)
  document.querySelectorAll(`#qbox-${qId}`).forEach(box => {
    box.classList.add('answered');
    box.classList.remove('correct', 'incorrect');
    if (shouldShowResult && qData) {
      box.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
  });

  // Nếu ở chế độ Luyện tập, hiện ngay giải thích
  if (AppState.mode === 'practice') {
    document.querySelectorAll(`#exp-${qId}`).forEach(exp => exp.classList.add('show'));
  }

  updateQuestionNav();
  updateProgressCounters();
}

// Nhập câu tự luận viết lại câu
function handleWritingInput(qId, val) {
  AppState.userAnswers[qId] = val.trim();
  saveState();

  document.querySelectorAll(`#qbox-${qId}`).forEach(box => {
    box.classList.toggle('answered', Boolean(val.trim()));
  });

  updateQuestionNav();
  updateProgressCounters();
}

// Kiểm tra thông minh câu tự luận viết lại câu
function checkSentence(qId) {
  const qData = EXAM_DATA.sentenceTransformations.find(q => q.id === qId);
  if (!qData) return;

  const inputEl = document.getElementById(`input-${qId}`);
  const userText = (inputEl ? inputEl.value : (AppState.userAnswers[qId] || '')).trim();

  if (!userText) {
    alert("Vui lòng nhập câu trả lời trước khi kiểm tra!");
    if (inputEl) inputEl.focus();
    return;
  }

  // Chuẩn hóa văn bản: xóa khoảng trắng thừa, xóa dấu câu cuối câu, so sánh chữ thường
  const normalize = (str) => {
    return str
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const normalizedUser = normalize(userText);
  // Hỗ trợ cả trường hợp học sinh gõ lại cả tiền tố hoặc chỉ gõ phần sau
  const normalizedPrefix = normalize(qData.prefix);
  const normalizedModel = normalize(qData.modelAnswer);

  let isMatch = false;

  // Kiểm tra danh sách chấp nhận
  for (const accepted of qData.acceptedAnswers) {
    if (normalizedUser === normalize(accepted)) {
      isMatch = true;
      break;
    }
  }

  // Nếu học viên nhập luôn cả câu bao gồm tiền tố
  if (!isMatch && normalizedUser === normalizedModel) {
    isMatch = true;
  }

  // Cập nhật UI phản hồi
  const feedbackBoxes = document.querySelectorAll(`#feedback-${qId}`);
  feedbackBoxes.forEach(fb => {
    fb.classList.add('show');
    if (isMatch) {
      fb.className = 'transform-feedback show success';
      fb.innerHTML = `✅ <strong>Chính xác!</strong> Câu trả lời của bạn đúng cấu trúc ngữ pháp.`;
    } else {
      fb.className = 'transform-feedback show error';
      fb.innerHTML = `❌ <strong>Chưa chính xác.</strong><br>
        • Câu của bạn: <em>${escapeHtml(userText)}</em><br>
        • Đáp án chuẩn gợi ý: <strong>${escapeHtml(qData.modelAnswer)}</strong><br>
        • Ngữ pháp: ${escapeHtml(qData.grammarPoint)}`;
    }
  });

  // Đổi màu input
  document.querySelectorAll(`#input-${qId}`).forEach(inp => {
    inp.classList.remove('correct', 'incorrect');
    inp.classList.add(isMatch ? 'correct' : 'incorrect');
  });

  // Mở box giải thích
  document.querySelectorAll(`#exp-${qId}`).forEach(exp => exp.classList.add('show'));

  // Đánh dấu đúng/sai trong state nếu thi thử
  AppState.userAnswers[qId] = userText;
  updateQuestionNav();
}

// Bật / tắt cờ đánh dấu câu hỏi
function toggleFlag(qId) {
  if (AppState.flagged.has(qId)) {
    AppState.flagged.delete(qId);
  } else {
    AppState.flagged.add(qId);
  }
  saveState();

  document.querySelectorAll(`#qbox-${qId} .btn-flag`).forEach(btn => {
    const isFl = AppState.flagged.has(qId);
    btn.classList.toggle('flagged', isFl);
    btn.innerHTML = isFl ? '🚩 Đã đánh dấu' : '🏳️ Đánh dấu';
  });

  updateQuestionNav();
}

// Khôi phục giá trị đã điền khi load lại trang
function restoreAnswerInputs() {
  for (const [qId, val] of Object.entries(AppState.userAnswers)) {
    // Trắc nghiệm
    document.querySelectorAll(`[data-qid="${qId}"][data-key="${val}"]`).forEach(opt => {
      opt.classList.add('selected');
    });

    const qData = QUESTION_LIST.find(q => q.id === qId);
    if (qData && qData.type === 'mcq') {
      document.querySelectorAll(`[id="qtext-${qId}"]`).forEach(el => {
        el.innerHTML = renderQuestionContentHtml(qData);
      });
      document.querySelectorAll(`[id="trans-${qId}"]`).forEach(el => {
        el.innerHTML = renderTranslationBoxContent(qData);
      });
    }

    // Tự luận
    document.querySelectorAll(`#input-${qId}`).forEach(inp => {
      inp.value = val;
    });

    document.querySelectorAll(`#qbox-${qId}`).forEach(box => {
      box.classList.add('answered');
    });
  }

  // Khôi phục cờ đánh dấu
  AppState.flagged.forEach(qId => {
    document.querySelectorAll(`#qbox-${qId} .btn-flag`).forEach(btn => {
      btn.classList.add('flagged');
      btn.innerHTML = '🚩 Đã đánh dấu';
    });
  });
}

// Vẽ bảng Question Navigator (Sidebar)
function renderQuestionNav() {
  const navContainer = document.getElementById('question-nav-grid');
  if (!navContainer) return;

  navContainer.innerHTML = QUESTION_LIST.map(q => {
    const isAnswered = Boolean(AppState.userAnswers[q.id]);
    const isFlagged = AppState.flagged.has(q.id);

    let statusClass = '';
    if (isFlagged) statusClass = 'flagged';
    else if (isAnswered) statusClass = 'answered';

    if (AppState.isSubmitted) {
      const isCorrect = checkQuestionCorrect(q);
      statusClass = isCorrect ? 'correct' : 'incorrect';
    }

    return `
      <button class="q-nav-btn ${statusClass}" id="nav-btn-${q.id}" onclick="jumpToQuestion('${q.id}')">
        ${q.globalIndex}
      </button>
    `;
  }).join('');
}

function updateQuestionNav() {
  QUESTION_LIST.forEach(q => {
    const btn = document.getElementById(`nav-btn-${q.id}`);
    if (!btn) return;

    const isAnswered = Boolean(AppState.userAnswers[q.id]);
    const isFlagged = AppState.flagged.has(q.id);

    btn.className = 'q-nav-btn';
    if (AppState.isSubmitted) {
      const isCorrect = checkQuestionCorrect(q);
      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
    } else if (isFlagged) {
      btn.classList.add('flagged');
    } else if (isAnswered) {
      btn.classList.add('answered');
    }
  });
}

// Nhảy đến vị trí câu hỏi
function jumpToQuestion(qId) {
  // Đảm bảo tab chứa câu hỏi đang hiển thị (hoặc tab All)
  const box = document.getElementById(`qbox-${qId}`);
  if (box) {
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    box.classList.add('current');
    setTimeout(() => box.classList.remove('current'), 2000);
  } else {
    // Nếu đang ở tab khác, chuyển về tab All rồi cuộn
    switchTab('tab-all');
    setTimeout(() => {
      const target = document.getElementById(`qbox-${qId}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('current');
        setTimeout(() => target.classList.remove('current'), 2000);
      }
    }, 150);
  }
}

// Kiểm tra tính đúng đắn của một câu hỏi
function checkQuestionCorrect(q) {
  const userVal = AppState.userAnswers[q.id];
  if (!userVal) return false;

  if (q.type === 'mcq') {
    return userVal === q.correctAnswer;
  } else if (q.type === 'writing_transform') {
    const normalize = (str) => str.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ").trim();
    const normUser = normalize(userVal);
    if (normUser === normalize(q.modelAnswer)) return true;
    return q.acceptedAnswers.some(ans => normUser === normalize(ans));
  }
  return false;
}

// Cập nhật bộ đếm tiến độ
function updateProgressCounters() {
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const total = QUESTION_LIST.length;
  const counterEl = document.getElementById('answered-counter');
  if (counterEl) {
    counterEl.innerText = `${answeredCount}/${total} đã làm`;
  }
}

// NỘP BÀI & CHẤM ĐIỂM TOÀN DIỆN
function submitExam() {
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const total = QUESTION_LIST.length;

  if (answeredCount < total && !AppState.isSubmitted) {
    const confirmSubmit = confirm(`Bạn mới trả lời ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài không?`);
    if (!confirmSubmit) return;
  }

  AppState.isSubmitted = true;
  clearInterval(AppState.timerInterval);

  // Tính điểm từng phần
  let vocabCorrect = 0;
  let signsCorrect = 0;
  let tonyCorrect = 0;
  let annaCorrect = 0;
  let writingCorrect = 0;

  EXAM_DATA.vocabularyQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correctAnswer) vocabCorrect++;
  });

  EXAM_DATA.readingSignQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correctAnswer) signsCorrect++;
  });

  EXAM_DATA.readingTonyQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correctAnswer) tonyCorrect++;
  });

  EXAM_DATA.readingAnnaQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correctAnswer) annaCorrect++;
  });

  EXAM_DATA.sentenceTransformations.forEach(q => {
    if (checkQuestionCorrect(q)) writingCorrect++;
  });

  const totalScore = vocabCorrect + signsCorrect + tonyCorrect + annaCorrect + writingCorrect;
  const percentage = Math.round((totalScore / total) * 100);

  // Hiển thị modal kết quả
  document.getElementById('modal-score-number').innerText = `${totalScore}/${total}`;
  document.getElementById('modal-percentage').innerText = `${percentage}%`;

  let ratingText = '';
  let ratingColor = '';
  if (percentage >= 80) {
    ratingText = '🎉 XUẤT SẮC! Bạn đã nắm rất vững kiến thức Topic 1.';
    ratingColor = 'var(--success)';
  } else if (percentage >= 60) {
    ratingText = '👍 ĐẠT YÊU CẦU! Cần củng cố thêm một số câu tự luận hoặc từ vựng.';
    ratingColor = 'var(--primary)';
  } else {
    ratingText = '⚠️ CẦN ÔN TẬP LẠI! Hãy xem kỹ lời giải chi tiết bên dưới.';
    ratingColor = 'var(--danger)';
  }

  const ratingEl = document.getElementById('modal-rating');
  ratingEl.innerText = ratingText;
  ratingEl.style.color = ratingColor;

  // Render bảng breakdown
  const breakdownBody = document.getElementById('modal-breakdown-body');
  breakdownBody.innerHTML = `
    <tr>
      <td>I. Trắc nghiệm Từ vựng</td>
      <td><strong>${vocabCorrect}/10</strong></td>
      <td>${Math.round(vocabCorrect / 10 * 100)}%</td>
    </tr>
    <tr>
      <td>II.a. Đọc hiểu biển báo</td>
      <td><strong>${signsCorrect}/5</strong></td>
      <td>${Math.round(signsCorrect / 5 * 100)}%</td>
    </tr>
    <tr>
      <td>II.b. Đọc hiểu bài Tony</td>
      <td><strong>${tonyCorrect}/5</strong></td>
      <td>${Math.round(tonyCorrect / 5 * 100)}%</td>
    </tr>
    <tr>
      <td>II.c. Điền từ bài Anna</td>
      <td><strong>${annaCorrect}/10</strong></td>
      <td>${Math.round(annaCorrect / 10 * 100)}%</td>
    </tr>
    <tr>
      <td>V.a. Tự luận viết lại câu</td>
      <td><strong>${writingCorrect}/5</strong></td>
      <td>${Math.round(writingCorrect / 5 * 100)}%</td>
    </tr>
  `;

  // Mở modal
  document.getElementById('result-modal').classList.add('show');

  // Gửi lưu kết quả vào Neon PostgreSQL qua Backend
  syncSubmissionToSql({
    score: totalScore,
    totalQuestions: total,
    percentage: percentage,
    rating: ratingText,
    breakdown: {
      vocab: `${vocabCorrect}/10`,
      signs: `${signsCorrect}/5`,
      tony: `${tonyCorrect}/5`,
      anna: `${annaCorrect}/10`,
      writing: `${writingCorrect}/5`
    }
  });

  // Cập nhật tất cả các câu hỏi hiển thị đáp án đúng/sai
  renderAllSections();
  updateQuestionNav();
}

// Đồng bộ kết quả thi vào Neon PostgreSQL
async function syncSubmissionToSql(examStats) {
  const studentName = (document.getElementById('student-name-input')?.value || 'Thí sinh').trim();
  const studentCode = (document.getElementById('student-code-input')?.value || 'N/A').trim();
  const essayText = (document.getElementById('essay-input')?.value || '').trim();

  const payload = {
    studentName,
    studentCode,
    topicId: EXAM_DATA.topicId || 'topic1',
    score: examStats.score,
    totalQuestions: examStats.totalQuestions,
    percentage: examStats.percentage,
    rating: examStats.rating,
    breakdown: examStats.breakdown,
    essayText
  };

  const statusBadge = document.getElementById('db-status-badge');
  if (statusBadge) {
    statusBadge.innerText = '⏳ Đang lưu SQL...';
    statusBadge.style.background = '#fef3c7';
    statusBadge.style.color = '#b45309';
  }

  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (statusBadge) {
      if (data.mode === 'neon_postgres') {
        statusBadge.innerText = `✅ Đã lưu SQL (#${data.submissionId})`;
        statusBadge.style.background = '#ecfdf5';
        statusBadge.style.color = '#059669';
      } else {
        statusBadge.innerText = '💾 Lưu cục bộ (Browser)';
      }
    }
  } catch (err) {
    console.warn("Không kết nối được backend SQL:", err.message);
    if (statusBadge) {
      statusBadge.innerText = '💾 Đã lưu cục bộ';
    }
  }
}

// Xem bảng điểm danh sách bài thi lưu trong SQL
async function loadSqlSubmissions() {
  const modal = document.getElementById('sql-submissions-modal');
  const tbody = document.getElementById('sql-submissions-body');
  if (!modal || !tbody) return;

  modal.classList.add('show');
  tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Đang tải danh sách từ Neon PostgreSQL...</td></tr>';

  try {
    const res = await fetch('/api/submissions');
    if (!res.ok) throw new Error('Không thể lấy dữ liệu');
    const data = await res.json();

    if (!data.submissions || data.submissions.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color: var(--text-muted);">Chưa có bài thi nào được ghi nhận trong SQL. Hãy hoàn thành bài thi để lưu điểm nhé!</td></tr>';
      return;
    }

    tbody.innerHTML = data.submissions.map(s => {
      const timeStr = s.submitted_at ? new Date(s.submitted_at).toLocaleString('vi-VN') : 'N/A';
      return `
        <tr>
          <td><strong>#${s.id}</strong></td>
          <td>${escapeHtml(s.student_name || 'Thí sinh')}</td>
          <td>${escapeHtml(s.student_code || '---')}</td>
          <td><span style="font-weight: 700; color: var(--primary);">${s.score}/${s.total_questions}</span></td>
          <td>${s.percentage}%</td>
          <td style="font-size: 0.8rem; color: var(--text-muted);">${timeStr}</td>
        </tr>
      `;
    }).join('');
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--danger);">Chưa thể kết nối tới server: ${escapeHtml(err.message)}</td></tr>`;
  }
}

function closeResultModal() {
  document.getElementById('result-modal').classList.remove('show');
}

// Reset làm lại toàn bộ bài thi
function resetExam() {
  if (!confirm("Bạn có muốn xóa toàn bộ bài làm hiện tại và bắt đầu thi lại từ đầu?")) return;

  AppState.userAnswers = {};
  AppState.flagged.clear();
  AppState.isSubmitted = false;
  AppState.timerSeconds = 30 * 60;
  localStorage.removeItem('tienganh_answers');
  localStorage.removeItem('tienganh_flags');

  const essayInput = document.getElementById('essay-input');
  if (essayInput) {
    essayInput.value = '';
    localStorage.removeItem('tienganh_essay');
    updateWordCount();
  }

  renderAllSections();
  renderQuestionNav();
  updateProgressCounters();
  startTimer();
  closeResultModal();
  alert("Hệ thống đã thiết lập lại bài thi! Chúc bạn làm bài tốt.");
}

// Hiện/Ẩn tất cả lời giải
function toggleExplanations() {
  const boxes = document.querySelectorAll('.explanation-box');
  const anyHidden = Array.from(boxes).some(b => !b.classList.contains('show'));
  boxes.forEach(b => b.classList.toggle('show', anyHidden));
}

// SỔ TAY TỪ VỰNG & PHÁT ÂM
function renderVocabularyStudy() {
  const container = document.getElementById('vocab-grid-container');
  if (!container) return;

  container.innerHTML = EXAM_DATA.vocabulary.map(v => `
    <div class="vocab-card" data-word="${v.word.toLowerCase()}" data-meaning="${v.meaning.toLowerCase()}">
      <div>
        <div class="vocab-word-row">
          <span class="vocab-word" onclick="speakWord('${escapeHtml(v.word)}')" style="cursor:pointer;" title="Bấm nghe phát âm tiếng Anh: ${escapeHtml(v.word)}">${escapeHtml(v.word)}</span>
          <div style="display: flex; gap: 4px;">
            <button class="btn-speak" onclick="speakWord('${escapeHtml(v.word)}')" title="Phát âm tiếng Anh">🔊</button>
            <button class="btn-speak" onclick="speakViWord('${escapeHtml(v.meaning)}')" title="Đọc nghĩa tiếng Việt" style="background: #fdf4ff; border-color: #d946ef; color: #a21caf;">🗣️</button>
          </div>
        </div>
        <div class="vocab-ipa">${escapeHtml(v.ipa)} <span class="vocab-pos">(${escapeHtml(v.pos)})</span></div>
        <div class="vocab-meaning" onclick="speakViWord('${escapeHtml(v.meaning)}')" style="cursor:pointer;" title="Bấm nghe nghĩa tiếng Việt: ${escapeHtml(v.meaning)}">${escapeHtml(v.meaning)}</div>
      </div>
      <div class="vocab-example" onclick="speakSmart('${escapeHtml(v.example).replace(/'/g, "\\'")}', 'en-US')" style="cursor:pointer;" title="Bấm nghe câu ví dụ tiếng Anh">"${escapeHtml(v.example)}"</div>
    </div>
  `).join('');
}

function filterVocabulary() {
  const query = (document.getElementById('vocab-search').value || '').toLowerCase().trim();
  document.querySelectorAll('.vocab-card').forEach(card => {
    const w = card.getAttribute('data-word');
    const m = card.getAttribute('data-meaning');
    card.style.display = (!query || w.includes(query) || m.includes(query)) ? 'flex' : 'none';
  });
}

// HỆ THỐNG PHÁT ÂM SONG NGỮ CHUẨN XÁC (DUAL-ENGINE: WEB SPEECH API + CLOUD NATURAL TTS)
let availableVoices = [];
let isReadingSequence = false;
let cloudAudioPlayer = null;

function initVoices() {
  if ('speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      availableVoices = window.speechSynthesis.getVoices();
    };
  }
}
initVoices();

// Chuẩn hóa văn bản trước khi đọc để tự nhiên, không đọc 'underscore' hay ký tự lạ
function cleanTextForSpeech(rawText, lang = 'en') {
  if (!rawText) return '';
  return rawText
    .replace(/_+/g, lang === 'en' ? ' blank ' : ' chỗ trống ')
    .replace(/…+/g, lang === 'en' ? ' blank ' : ' chỗ trống ')
    .replace(/\.{3,}/g, lang === 'en' ? ' blank ' : ' chỗ trống ')
    .replace(/\(1\)\s*……+/g, lang === 'en' ? 'blank' : 'chỗ trống số 1')
    .replace(/\(\d+\)/g, '')
    .replace(/[*#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Kiểm tra xem trình duyệt có giọng Tiếng Việt thực thụ không
function hasTrueVietnameseVoice() {
  if (!availableVoices || availableVoices.length === 0) {
    if ('speechSynthesis' in window) availableVoices = window.speechSynthesis.getVoices();
  }
  return availableVoices.some(v => 
    v.lang.toLowerCase().startsWith('vi') || 
    v.name.toLowerCase().includes('vietnamese') ||
    v.name.toLowerCase().includes('hoaimy') ||
    v.name.toLowerCase().includes('namminh')
  );
}

// Lấy giọng tốt nhất theo ngôn ngữ
function getBestVoice(lang) {
  if (!availableVoices || availableVoices.length === 0) {
    if ('speechSynthesis' in window) availableVoices = window.speechSynthesis.getVoices();
  }
  if (lang.startsWith('vi')) {
    return availableVoices.find(v => v.lang.toLowerCase().startsWith('vi') || v.name.toLowerCase().includes('vietnamese')) || null;
  } else {
    return availableVoices.find(v => v.name.includes('Natural') && v.lang.startsWith('en'))
      || availableVoices.find(v => v.name.includes('Google') && v.lang.startsWith('en'))
      || availableVoices.find(v => v.lang.startsWith('en-US'))
      || availableVoices.find(v => v.lang.startsWith('en'))
      || null;
  }
}

// Trình phát âm thanh đám mây (Cloud TTS Proxy qua Render) chuẩn xác 100% giọng tiếng Việt tự nhiên
function playCloudTTS(text, langCode, onEndCallback = null) {
  if (!cloudAudioPlayer) {
    cloudAudioPlayer = new Audio();
  } else {
    cloudAudioPlayer.pause();
  }

  // Cắt ngắn nếu quá dài để tránh lỗi URL
  const safeText = text.length > 200 ? text.substring(0, 195) + '...' : text;
  
  // Xác định domain backend để gọi API proxy không bao giờ bị CORS hay 403
  const isOnline = window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
  const apiBase = isOnline ? '' : (window.location.protocol.startsWith('http') ? '' : 'https://tieng-anh-dau-ra-ptk.onrender.com');
  const url = `${apiBase}/api/tts?lang=${langCode}&text=${encodeURIComponent(safeText)}`;

  cloudAudioPlayer.src = url;
  cloudAudioPlayer.onended = () => {
    if (onEndCallback) onEndCallback();
  };
  cloudAudioPlayer.onerror = (e) => {
    console.warn("Cloud proxy error, trying native SpeechSynthesis fallback:", e);
    speakViaWebSpeech(text, langCode === 'vi' ? 'vi-VN' : 'en-US', onEndCallback);
  };

  const playPromise = cloudAudioPlayer.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.warn("Autoplay blocked or network error, fallback to Web Speech:", err);
      speakViaWebSpeech(text, langCode === 'vi' ? 'vi-VN' : 'en-US', onEndCallback);
    });
  }
}

// Phát âm thanh qua Web Speech API của trình duyệt
function speakViaWebSpeech(text, lang, onEndCallback = null) {
  if (!('speechSynthesis' in window)) {
    if (onEndCallback) onEndCallback();
    return;
  }
  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = lang.startsWith('vi') ? 0.95 : 0.88;

    const voice = getBestVoice(lang);
    if (voice) utterance.voice = voice;

    window._activeSpeechUtterance = utterance;

    utterance.onend = () => {
      window._activeSpeechUtterance = null;
      if (onEndCallback) onEndCallback();
    };
    utterance.onerror = (e) => {
      console.warn("WebSpeech error:", e);
      window._activeSpeechUtterance = null;
      if (onEndCallback) onEndCallback();
    };

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.error("speakViaWebSpeech exception:", e);
    if (onEndCallback) onEndCallback();
  }
}

// Hàm phát âm thông minh kết hợp Dual-Engine
function speakSmart(text, lang = 'en-US', onEndCallback = null) {
  stopSpeaking();
  const isVi = lang.startsWith('vi');
  const clean = cleanTextForSpeech(text, isVi ? 'vi' : 'en');
  if (!clean) {
    if (onEndCallback) onEndCallback();
    return;
  }

  // Nếu là Tiếng Việt: Luôn ưu tiên dùng Cloud TTS chất lượng cao (giọng chị Google chuẩn 100% tiếng Việt)
  // Nếu Cloud gặp sự cố mạng thì tự động rơi về Web Speech API
  if (isVi) {
    playCloudTTS(clean, 'vi', onEndCallback);
    return;
  }

  // Nếu là Tiếng Anh: Dùng Web Speech API giọng chuẩn máy tính
  if ('speechSynthesis' in window) {
    speakViaWebSpeech(clean, 'en-US', onEndCallback);
    return;
  }

  // Fallback tiếng Anh sang Cloud TTS
  playCloudTTS(clean, 'en', onEndCallback);
}

function speakWord(word) {
  if (!word) return;
  const clean = word.replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '').trim();
  if (clean) speakSmart(clean, 'en-US');
}

function speakViWord(meaning) {
  if (!meaning || meaning === '...' || meaning.includes('Đang tải')) return;
  const clean = meaning.split('/')[0].replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '').trim();
  if (clean) speakSmart(clean, 'vi-VN');
}

// Phát âm bản dịch Tiếng Việt của lựa chọn trắc nghiệm
async function speakOptionVi(optText) {
  if (!optText) return;
  if (optText === '∅') {
    speakSmart("Không điền từ", 'vi-VN');
    return;
  }

  // 1. Tra cứu nhanh từ điển offline và 53 từ vựng
  let meaning = getWordMeaning(optText);
  if (meaning && meaning !== '(tên riêng)') {
    const cleanVi = meaning.split('/')[0].replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '').trim();
    if (cleanVi) {
      speakSmart(cleanVi, 'vi-VN');
      return;
    }
  }

  // 2. Tra cứu online nếu là cụm từ chưa có trong từ điển
  try {
    const isOnline = window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    const apiBase = isOnline ? '' : (window.location.protocol.startsWith('http') ? '' : 'https://tieng-anh-dau-ra-ptk.onrender.com');
    const res = await fetch(`${apiBase}/api/translate-word?word=${encodeURIComponent(optText)}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.translation) {
        WORD_DICTIONARY[optText.toLowerCase()] = data.translation;
        const cleanVi = data.translation.split('/')[0].replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '').trim();
        speakSmart(cleanVi, 'vi-VN');
        return;
      }
    }
  } catch (e) {
    console.warn("Lỗi tra dịch lựa chọn:", e);
  }

  // 3. Fallback đọc
  speakSmart(optText, 'vi-VN');
}

function speakText(text, lang = 'en-US', rate = 0.88, onEndCallback = null) {
  speakSmart(text, lang, onEndCallback);
}

function stopSpeaking() {
  isReadingSequence = false;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (cloudAudioPlayer) {
    cloudAudioPlayer.pause();
    cloudAudioPlayer.currentTime = 0;
  }
  document.querySelectorAll('.question-box').forEach(b => b.classList.remove('reading-highlight'));
  const statusEl = document.getElementById('global-speech-status');
  if (statusEl) statusEl.style.display = 'none';
}

// Bật / tắt hiển thị bản dịch của 1 câu
function toggleTranslation(qId) {
  document.querySelectorAll(`#trans-${qId}`).forEach(box => {
    box.classList.toggle('show');
  });
}

// Bật / tắt hiển thị tất cả bản dịch trên toàn trang
function toggleAllTranslations() {
  const boxes = document.querySelectorAll('.translation-box');
  const anyHidden = Array.from(boxes).some(b => !b.classList.contains('show'));
  boxes.forEach(b => b.classList.toggle('show', anyHidden));
}

// Đọc 1 câu trắc nghiệm (Tiếng Anh hoặc Tiếng Việt) - Khi đã chọn đáp án thì đọc trọn vẹn cả câu kèm từ đã chọn!
function speakQuestion(qId, lang = 'en') {
  const qData = QUESTION_LIST.find(q => q.id === qId);
  if (!qData) return;

  const box = document.getElementById(`qbox-${qId}`);
  if (box) {
    document.querySelectorAll('.question-box').forEach(b => b.classList.remove('reading-highlight'));
    box.classList.add('reading-highlight');
    setTimeout(() => box.classList.remove('reading-highlight'), 5000);
  }

  const completed = getCompletedQuestionText(qData);

  if (lang === 'en') {
    if (completed.hasSelection) {
      // Đọc toàn bộ câu hoàn chỉnh đã điền từ kết quả, sau đó đọc lại từ kết quả đó để nhấn mạnh
      let speech = `${completed.sentence}. Selected answer: ${completed.selectedText}.`;
      speakSmart(speech, 'en-US');
    } else {
      speakSmart(qData.question, 'en-US');
    }
  } else {
    // Đọc tiếng Việt: bản dịch câu và kết quả đã chọn kèm nghĩa
    let viText = qData.vietnameseTranslation || "Chưa có bản dịch cho câu này.";
    if (completed.hasSelection) {
      const optMeaning = getWordMeaning(completed.selectedText);
      let meaningStr = '';
      if (optMeaning && optMeaning !== '(tên riêng)') {
        meaningStr = ` nghĩa là ${optMeaning.split('/')[0].trim()}`;
      }
      viText += `. Đáp án bạn đã chọn là ${completed.selectedKey}: ${completed.selectedText}${meaningStr}.`;
    }
    speakSmart(viText, 'vi-VN');
  }
}

// Đọc câu tự luận viết lại (Tiếng Anh hoặc Tiếng Việt) - CHỈ ĐỌC ĐÚNG CÂU ĐƯỢC CHỌN
function speakWriting(qId, lang = 'en') {
  const qData = EXAM_DATA.sentenceTransformations.find(q => q.id === qId);
  if (!qData) return;

  const box = document.getElementById(`qbox-${qId}`);
  if (box) {
    document.querySelectorAll('.question-box').forEach(b => b.classList.remove('reading-highlight'));
    box.classList.add('reading-highlight');
    setTimeout(() => box.classList.remove('reading-highlight'), 5000);
  }

  if (lang === 'en') {
    // Đọc chính xác duy nhất câu gốc tiếng Anh
    speakSmart(qData.originalSentence, 'en-US');
  } else {
    // Đọc chính xác duy nhất câu dịch tiếng Việt
    const viText = qData.vietnameseTranslation || "Chưa có bản dịch cho câu này.";
    speakSmart(viText, 'vi-VN');
  }
}

// ============================================================================
// BÀI ĐỌC TONY & ANNA: GIAO DIỆN BẢN DỊCH VÀ PHÁT ÂM TOÀN BÀI
// ============================================================================

// Render HTML thẻ bài đọc Tony kèm thanh công cụ Dịch & Phát âm
function renderTonyPassageCardHtml(cardId = 'tony') {
  return `
    <div class="passage-card" id="passage-card-${cardId}">
      <div class="passage-header-flex">
        <div class="passage-title">📖 BÀI ĐỌC: MY BEST FRIEND (TONY)</div>
        <div class="passage-actions-bar">
          <button type="button" class="btn-audio-action" onclick="togglePassageTranslation('${cardId}')" title="Hiện hoặc ẩn bản dịch tiếng Việt trọn vẹn của bài đọc">
            🌐 Dịch bài đọc sang Tiếng Việt
          </button>
          <button type="button" class="btn-audio-action" onclick="speakPassage('tony', 'en')" title="Nghe đọc toàn bộ bài tiếng Anh">
            🔊 Đọc Tiếng Anh
          </button>
          <button type="button" class="btn-audio-action" onclick="speakPassage('tony', 'vi')" title="Nghe đọc toàn bộ bản dịch tiếng Việt">
            🗣️ Đọc Tiếng Việt
          </button>
          <button type="button" class="btn-audio-action" style="color: var(--danger); border-color: var(--danger-border);" onclick="stopSpeaking()" title="Dừng đọc">
            ⏹️ Dừng
          </button>
        </div>
      </div>

      <div class="passage-body-en" id="passage-body-${cardId}">
        ${escapeHtml(EXAM_DATA.readingTonyPassage.replace('MY BEST FRIEND\n', ''))}
      </div>

      <div class="passage-translation-box" id="trans-passage-${cardId}" style="display: none;">
        <div class="passage-trans-header">
          <strong>🇻🇳 BẢN DỊCH TIẾNG VIỆT TOÀN VĂN:</strong>
        </div>
        <div class="passage-trans-body">
          ${escapeHtml(EXAM_DATA.readingTonyTranslation.replace('BẠN THÂN CỦA TÔI\n', ''))}
        </div>
      </div>
    </div>
  `;
}

// Render HTML thẻ bài đọc Anna kèm thanh công cụ Dịch & Phát âm
function renderAnnaPassageCardHtml(cardId = 'anna') {
  return `
    <div class="passage-card" id="passage-card-${cardId}">
      <div class="passage-header-flex">
        <div class="passage-title">📖 ĐOẠN VĂN ĐIỀN TỪ: ANNA</div>
        <div class="passage-actions-bar">
          <button type="button" class="btn-audio-action" onclick="togglePassageTranslation('${cardId}')" title="Hiện hoặc ẩn bản dịch tiếng Việt trọn vẹn của bài đọc">
            🌐 Dịch đoạn văn sang Tiếng Việt
          </button>
          <button type="button" class="btn-audio-action" onclick="speakPassage('anna', 'en')" title="Nghe đọc toàn bộ đoạn văn tiếng Anh">
            🔊 Đọc Tiếng Anh
          </button>
          <button type="button" class="btn-audio-action" onclick="speakPassage('anna', 'vi')" title="Nghe đọc toàn bộ bản dịch tiếng Việt">
            🗣️ Đọc Tiếng Việt
          </button>
          <button type="button" class="btn-audio-action" style="color: var(--danger); border-color: var(--danger-border);" onclick="stopSpeaking()" title="Dừng đọc">
            ⏹️ Dừng
          </button>
        </div>
      </div>

      <div class="passage-body-en" id="passage-body-${cardId}">
        ${escapeHtml(EXAM_DATA.readingAnnaPassage)}
      </div>

      <div class="passage-translation-box" id="trans-passage-${cardId}" style="display: none;">
        <div class="passage-trans-header">
          <strong>🇻🇳 BẢN DỊCH TIẾNG VIỆT TOÀN VĂN:</strong>
        </div>
        <div class="passage-trans-body">
          ${escapeHtml(EXAM_DATA.readingAnnaTranslation)}
        </div>
      </div>
    </div>
  `;
}

// Bật / tắt hiển thị bản dịch của bài đọc Tony hoặc Anna
function togglePassageTranslation(cardId) {
  const prefix = cardId.includes('tony') ? 'tony' : 'anna';
  const boxes = document.querySelectorAll(`[id^="trans-passage-${prefix}"]`);
  const anyHidden = Array.from(boxes).some(b => b.style.display !== 'block');
  boxes.forEach(box => {
    box.style.display = anyHidden ? 'block' : 'none';
  });
}

// Đọc toàn bộ bài đọc Tony hoặc Anna (Tiếng Anh hoặc Tiếng Việt)
function speakPassage(type, lang = 'en') {
  stopSpeaking();
  let text = '';
  if (type === 'tony') {
    text = (lang === 'en')
      ? EXAM_DATA.readingTonyPassage.replace('MY BEST FRIEND\n', '')
      : EXAM_DATA.readingTonyTranslation.replace('BẠN THÂN CỦA TÔI\n', '');
  } else if (type === 'anna') {
    text = (lang === 'en')
      ? EXAM_DATA.readingAnnaPassage
      : EXAM_DATA.readingAnnaTranslation;
  }

  // Tự động mở khung dịch nếu người dùng bấm nghe bản dịch tiếng Việt
  if (lang === 'vi') {
    document.querySelectorAll(`[id^="trans-passage-${type}"]`).forEach(box => {
      box.style.display = 'block';
    });
  }

  // Tách câu để đọc tự nhiên từng câu
  const sentences = text
    .replace(/([.?!])\s+/g, '$1|')
    .split('|')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (sentences.length === 0) return;

  isReadingSequence = true;
  const statusEl = document.getElementById('global-speech-status');
  if (statusEl) {
    statusEl.style.display = 'inline-flex';
    statusEl.innerHTML = (lang === 'en') 
      ? `🔊 Đang đọc bài (${type === 'tony' ? 'Tony' : 'Anna'})...` 
      : `🗣️ Đang đọc bản dịch (${type === 'tony' ? 'Tony' : 'Anna'})...`;
  }

  let idx = 0;
  function readNext() {
    if (!isReadingSequence || idx >= sentences.length) {
      stopSpeaking();
      return;
    }
    const current = sentences[idx];
    idx++;

    speakSmart(current, lang === 'en' ? 'en-US' : 'vi-VN', () => {
      if (isReadingSequence) {
        setTimeout(readNext, 400);
      }
    });
  }

  readNext();
}

// ============================================================================
// TÍNH NĂNG BÔI ĐEN (SELECTION) & SAO CHÉP (COPY): HIỆN NÚT DỊCH + ĐỌC TA + ĐỌC TV
// ============================================================================
let currentSelectedText = '';
let currentTranslatedText = '';
let copyToastTimeout = null;

function initTextSelectionAndCopyFeatures() {
  const toolbar = document.getElementById('selection-quick-toolbar');
  const previewEl = document.getElementById('sel-text-preview');
  const transResultEl = document.getElementById('sel-trans-result');
  const btnTrans = document.getElementById('sel-btn-trans');
  const btnEn = document.getElementById('sel-btn-en');
  const btnVi = document.getElementById('sel-btn-vi');
  const btnCopy = document.getElementById('sel-btn-copy');
  const btnClose = document.getElementById('sel-btn-close');

  if (!toolbar) return;

  function handleSelection(e) {
    if (toolbar.contains(e.target)) return;

    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : '';

    if (!text || text.length < 1) {
      hideSelectionToolbar();
      return;
    }

    currentSelectedText = text;
    currentTranslatedText = '';
    if (transResultEl) {
      transResultEl.style.display = 'none';
      transResultEl.innerHTML = '';
    }

    if (previewEl) {
      const displaySnippet = text.length > 25 ? text.substring(0, 24) + '...' : text;
      previewEl.innerText = `"${displaySnippet}"`;
      previewEl.title = text;
    }

    try {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      toolbar.style.display = 'flex';

      let top = rect.top + scrollY - toolbar.offsetHeight - 12;
      let left = rect.left + scrollX + (rect.width / 2) - (toolbar.offsetWidth / 2);

      if (rect.top < 60) {
        top = rect.bottom + scrollY + 8;
      }
      if (left < 10) left = 10;
      if (left + toolbar.offsetWidth > window.innerWidth - 10) {
        left = window.innerWidth - toolbar.offsetWidth - 10;
      }

      toolbar.style.top = `${top}px`;
      toolbar.style.left = `${left}px`;
    } catch (err) {
      // fallback
    }
  }

  document.addEventListener('mouseup', (e) => {
    setTimeout(() => handleSelection(e), 40);
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift' || e.key.startsWith('Arrow')) {
      setTimeout(() => handleSelection(e), 40);
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (!toolbar.contains(e.target)) {
      hideSelectionToolbar();
    }
  });

  if (btnTrans) {
    btnTrans.onclick = async (e) => {
      e.stopPropagation();
      if (!currentSelectedText) return;

      if (transResultEl) {
        transResultEl.style.display = 'block';
        transResultEl.innerHTML = '<em>⏳ Đang dịch sang Tiếng Việt...</em>';
      }

      const trans = await fetchTranslationForText(currentSelectedText);
      currentTranslatedText = trans;

      if (transResultEl) {
        transResultEl.innerHTML = `<strong>🇻🇳 Dịch:</strong> ${escapeHtml(trans)}`;
      }
    };
  }

  if (btnEn) {
    btnEn.onclick = (e) => {
      e.stopPropagation();
      if (currentSelectedText) {
        speakSmart(currentSelectedText, 'en-US');
      }
    };
  }

  if (btnVi) {
    btnVi.onclick = async (e) => {
      e.stopPropagation();
      if (!currentSelectedText) return;

      if (!currentTranslatedText) {
        if (transResultEl) {
          transResultEl.style.display = 'block';
          transResultEl.innerHTML = '<em>⏳ Đang dịch và phát âm...</em>';
        }
        currentTranslatedText = await fetchTranslationForText(currentSelectedText);
        if (transResultEl) {
          transResultEl.innerHTML = `<strong>🇻🇳 Dịch:</strong> ${escapeHtml(currentTranslatedText)}`;
        }
      }

      speakSmart(currentTranslatedText, 'vi-VN');
    };
  }

  if (btnCopy) {
    btnCopy.onclick = (e) => {
      e.stopPropagation();
      if (currentSelectedText) {
        navigator.clipboard.writeText(currentSelectedText).then(() => {
          btnCopy.innerText = '✅ Đã copy';
          setTimeout(() => { btnCopy.innerText = '📋 Copy'; }, 2000);
          showCopyToast(currentSelectedText);
        });
      }
    };
  }

  if (btnClose) {
    btnClose.onclick = (e) => {
      e.stopPropagation();
      hideSelectionToolbar();
    };
  }

  // Lắng nghe phím tắt Copy (Ctrl+C) hoặc Copy trên trình duyệt
  document.addEventListener('copy', () => {
    const text = window.getSelection() ? window.getSelection().toString().trim() : '';
    if (text) {
      showCopyToast(text);
    }
  });
}

function hideSelectionToolbar() {
  const toolbar = document.getElementById('selection-quick-toolbar');
  if (toolbar) toolbar.style.display = 'none';
}

// Hàm gọi API lấy bản dịch cho một câu hoặc từ bất kỳ
async function fetchTranslationForText(text) {
  if (!text) return '';

  const words = text.trim().split(/\s+/);
  if (words.length === 1) {
    const directMeaning = getWordMeaning(words[0]);
    if (directMeaning && directMeaning !== '(tên riêng)') {
      return directMeaning;
    }
  }

  try {
    const isOnline = window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    const apiBase = isOnline ? '' : (window.location.protocol.startsWith('http') ? '' : 'https://tieng-anh-dau-ra-ptk.onrender.com');
    const res = await fetch(`${apiBase}/api/translate-word?word=${encodeURIComponent(text)}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.translation) {
        return data.translation;
      }
    }
  } catch (err) {
    console.warn("Lỗi dịch văn bản:", err);
  }

  return text;
}

let toastCopiedText = '';
let toastCopiedTranslation = '';

function showCopyToast(text) {
  toastCopiedText = text;
  toastCopiedTranslation = '';

  const toast = document.getElementById('copy-action-toast');
  const snippetEl = document.getElementById('toast-text-snippet');
  const transEl = document.getElementById('toast-trans-snippet');
  if (!toast) return;

  if (snippetEl) {
    snippetEl.innerText = `"${text.length > 80 ? text.substring(0, 77) + '...' : text}"`;
  }
  if (transEl) {
    transEl.style.display = 'none';
    transEl.innerHTML = '';
  }

  toast.style.display = 'block';

  if (copyToastTimeout) clearTimeout(copyToastTimeout);
  copyToastTimeout = setTimeout(() => {
    hideCopyToast();
  }, 10000);
}

function hideCopyToast() {
  const toast = document.getElementById('copy-action-toast');
  if (toast) toast.style.display = 'none';
  if (copyToastTimeout) clearTimeout(copyToastTimeout);
}

async function handleToastTranslate() {
  if (!toastCopiedText) return;
  const transEl = document.getElementById('toast-trans-snippet');
  if (transEl) {
    transEl.style.display = 'block';
    transEl.innerHTML = '<em>⏳ Đang dịch nghĩa...</em>';
  }
  toastCopiedTranslation = await fetchTranslationForText(toastCopiedText);
  if (transEl) {
    transEl.innerHTML = `<strong>🇻🇳 Dịch:</strong> ${escapeHtml(toastCopiedTranslation)}`;
  }
}

function handleToastSpeakEn() {
  if (toastCopiedText) {
    speakSmart(toastCopiedText, 'en-US');
  }
}

async function handleToastSpeakVi() {
  if (!toastCopiedText) return;
  if (!toastCopiedTranslation) {
    const transEl = document.getElementById('toast-trans-snippet');
    if (transEl) {
      transEl.style.display = 'block';
      transEl.innerHTML = '<em>⏳ Đang dịch và phát âm...</em>';
    }
    toastCopiedTranslation = await fetchTranslationForText(toastCopiedText);
    if (transEl) {
      transEl.innerHTML = `<strong>🇻🇳 Dịch:</strong> ${escapeHtml(toastCopiedTranslation)}`;
    }
  }
  speakSmart(toastCopiedTranslation, 'vi-VN');
}

// TÍNH NĂNG ĐỌC TUẦN TỰ TOÀN BỘ BÀI THI BẰNG TIẾNG ANH
function readAllQuestionsEnglish() {
  stopSpeaking();
  isReadingSequence = true;
  switchTab('tab-all');

  const statusEl = document.getElementById('global-speech-status');
  if (statusEl) {
    statusEl.style.display = 'inline-flex';
    statusEl.innerHTML = '🔊 Đang đọc toàn bộ bằng Tiếng Anh...';
  }

  let index = 0;
  function readNext() {
    if (!isReadingSequence || index >= QUESTION_LIST.length) {
      stopSpeaking();
      alert("Đã hoàn thành đọc tất cả câu hỏi trong bài thi!");
      return;
    }

    const q = QUESTION_LIST[index];
    index++;

    // Cuộn tới câu đang đọc
    const box = document.getElementById(`qbox-${q.id}`);
    if (box) {
      document.querySelectorAll('.question-box').forEach(b => b.classList.remove('reading-highlight'));
      box.classList.add('reading-highlight');
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    let speechText = `Question ${q.globalIndex}. ${q.question || q.originalSentence || ''}`;
    if (q.options) {
      speechText += ". " + q.options.map(o => `${o.key}: ${o.text}`).join(". ");
    }

    speakSmart(speechText, 'en-US', () => {
      setTimeout(readNext, 1200);
    });
  }

  readNext();
}

// TÍNH NĂNG ĐỌC TUẦN TỰ TOÀN BỘ BÀI THI BẰNG TIẾNG VIỆT
function readAllQuestionsVietnamese() {
  stopSpeaking();
  isReadingSequence = true;
  switchTab('tab-all');
  // Mở tất cả bản dịch để người học vừa nghe vừa nhìn
  document.querySelectorAll('.translation-box').forEach(b => b.classList.add('show'));

  const statusEl = document.getElementById('global-speech-status');
  if (statusEl) {
    statusEl.style.display = 'inline-flex';
    statusEl.innerHTML = '🗣️ Đang đọc toàn bộ bằng Tiếng Việt...';
  }

  let index = 0;
  function readNextVi() {
    if (!isReadingSequence || index >= QUESTION_LIST.length) {
      stopSpeaking();
      alert("Đã hoàn thành đọc toàn bộ bản dịch tiếng Việt!");
      return;
    }

    const q = QUESTION_LIST[index];
    index++;

    // Cuộn tới câu đang đọc
    const box = document.getElementById(`qbox-${q.id}`);
    if (box) {
      document.querySelectorAll('.question-box').forEach(b => b.classList.remove('reading-highlight'));
      box.classList.add('reading-highlight');
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    let viSpeechText = `Câu số ${q.globalIndex}. ${q.vietnameseTranslation || ''}`;
    if (q.vietnameseModelTranslation) {
      viSpeechText += ". Đáp án dịch hoàn chỉnh: " + q.vietnameseModelTranslation;
    }

    speakSmart(viSpeechText, 'vi-VN', () => {
      setTimeout(readNextVi, 1200);
    });
  }

  readNextVi();
}

// SPEAKING SAMPLE & RECORDING
function renderSpeakingSample() {
  const sampleEl = document.getElementById('speaking-sample-text');
  if (sampleEl) {
    sampleEl.innerText = EXAM_DATA.speakingCard.sample;
  }
}

async function toggleAudioRecording() {
  const recordBtn = document.getElementById('record-btn');
  const statusEl = document.getElementById('recording-status');
  const audioEl = document.getElementById('audio-playback');

  if (!AppState.isRecording) {
    // Bắt đầu ghi âm
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      AppState.mediaRecorder = new MediaRecorder(stream);
      AppState.audioChunks = [];

      AppState.mediaRecorder.ondataavailable = e => {
        if (e.data.size > 0) AppState.audioChunks.push(e.data);
      };

      AppState.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(AppState.audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioEl.src = audioUrl;
        audioEl.style.display = 'block';
        statusEl.innerText = "✅ Đã ghi âm xong! Bạn có thể bấm Play bên dưới để nghe lại.";
      };

      AppState.mediaRecorder.start();
      AppState.isRecording = true;
      recordBtn.classList.add('recording');
      recordBtn.innerHTML = '⏹️ Dừng ghi âm';
      statusEl.innerText = "🔴 Đang ghi âm... Hãy nói to và tự tin!";
    } catch (err) {
      alert("Không thể truy cập Microphone: " + err.message);
    }
  } else {
    // Dừng ghi âm
    if (AppState.mediaRecorder && AppState.mediaRecorder.state !== 'inactive') {
      AppState.mediaRecorder.stop();
      AppState.mediaRecorder.stream.getTracks().forEach(t => t.stop());
    }
    AppState.isRecording = false;
    recordBtn.classList.remove('recording');
    recordBtn.innerHTML = '🔴 Bắt đầu ghi âm mới';
  }
}

// LISTENING SECTIONS
function renderListeningSections() {
  const partAContainer = document.getElementById('listening-part-a-container');
  const partBContainer = document.getElementById('listening-part-b-container');

  if (partAContainer) {
    partAContainer.innerHTML = EXAM_DATA.listeningPartA.map(q => `
      <div class="question-box" style="margin-bottom: 16px;">
        <div class="q-header">
          <div class="q-title">
            <span class="q-number-badge">Nghe ${q.number}</span>
            <div>${escapeHtml(q.question)}</div>
          </div>
        </div>
        <div class="options-list">
          ${q.options.map(opt => `
            <div class="option-item" onclick="this.classList.toggle('selected')">
              <div class="option-key">${opt.key}</div>
              <div class="option-text">${escapeHtml(opt.text)}</div>
              <div style="display: flex; gap: 6px; align-items: center; flex-shrink: 0;">
                <button type="button" class="btn-opt-audio" onclick="event.stopPropagation(); speakSmart('${escapeHtml(opt.text).replace(/'/g, "\\'")}', 'en-US')" title="Nghe tiếng Anh: ${opt.key}">🔊</button>
                <button type="button" class="btn-opt-audio btn-opt-vi" onclick="event.stopPropagation(); speakOptionVi('${escapeHtml(opt.text).replace(/'/g, "\\'")}')" title="Nghe tiếng Việt: ${opt.key}">🗣️</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">
          📌 Gợi ý nhận diện: <em>${escapeHtml(q.suggestedAnswer)}</em> (${escapeHtml(q.note || '')})
        </div>
      </div>
    `).join('');
  }

  if (partBContainer) {
    partBContainer.innerHTML = `
      <div class="passage-card" style="margin-bottom: 16px;">
        <div class="passage-title">${escapeHtml(EXAM_DATA.listeningPartB.title)}</div>
        <p style="margin-bottom: 10px;">${escapeHtml(EXAM_DATA.listeningPartB.intro)}</p>
        <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 14px;">
          ${EXAM_DATA.listeningPartB.blanks.map(b => `
            <div style="background: var(--bg-card); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <div style="font-weight: 600; margin-bottom: 6px;">${escapeHtml(b.label)}</div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <input type="text" class="sentence-input" style="max-width: 260px;" placeholder="${escapeHtml(b.hint)}" id="lblank-${b.blankIndex}">
                <button class="btn-check-sentence" onclick="checkListeningBlank(${b.blankIndex})">Kiểm tra</button>
              </div>
              <div id="lfeedback-${b.blankIndex}" style="margin-top: 6px; font-size: 0.88rem; display: none;"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function checkListeningBlank(idx) {
  const bData = EXAM_DATA.listeningPartB.blanks.find(b => b.blankIndex === idx);
  if (!bData) return;

  const inputEl = document.getElementById(`lblank-${idx}`);
  const userVal = (inputEl ? inputEl.value : '').toLowerCase().trim();
  const fbEl = document.getElementById(`lfeedback-${idx}`);

  if (!userVal) {
    alert("Vui lòng nhập từ bạn nghe được!");
    return;
  }

  const isCorrect = bData.acceptableAnswers.some(ans => ans.toLowerCase() === userVal);
  fbEl.style.display = 'block';
  if (isCorrect) {
    fbEl.innerHTML = `<span style="color: var(--success); font-weight: 600;">✅ Đúng rồi! (${escapeHtml(bData.acceptableAnswers.join(' / '))})</span>`;
    inputEl.className = 'sentence-input correct';
  } else {
    fbEl.innerHTML = `<span style="color: var(--danger); font-weight: 600;">❌ Chưa đúng. Đáp án gợi ý: <em>${escapeHtml(bData.acceptableAnswers.join(' / '))}</em></span>`;
    inputEl.className = 'sentence-input incorrect';
  }
}

// BỘ ĐẾM TỪ CHO PHẦN VIẾT THƯ (ESSAY)
function updateWordCount() {
  const text = (document.getElementById('essay-input').value || '').trim();
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  
  const countEl = document.getElementById('word-count-val');
  if (countEl) countEl.innerText = words;

  const fillEl = document.getElementById('word-progress-fill');
  if (fillEl) {
    const pct = Math.min(100, Math.round((words / 120) * 100));
    fillEl.style.width = `${pct}%`;
    if (words >= 110 && words <= 135) {
      fillEl.style.background = 'var(--success)';
    } else if (words > 135) {
      fillEl.style.background = 'var(--warning)';
    } else {
      fillEl.style.background = 'linear-gradient(90deg, var(--secondary), var(--primary))';
    }
  }

  saveState();
}

function toggleSampleLetter() {
  const box = document.getElementById('sample-letter-box');
  const content = document.getElementById('sample-letter-content');
  if (box && content) {
    content.innerText = EXAM_DATA.letterWriting.sample;
    box.classList.toggle('show');
  }
}

// Hàm hỗ trợ escape HTML tránh injection
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
