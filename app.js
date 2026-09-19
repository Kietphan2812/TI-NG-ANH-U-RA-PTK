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

  // Cập nhật giao diện giải thích
  document.querySelectorAll('.explanation-box').forEach(box => {
    if (mode === 'exam' && !AppState.isSubmitted) {
      box.classList.remove('show');
    }
  });

  alert(mode === 'practice' 
    ? "Chế độ LUYỆN TẬP: Bạn có thể xem giải thích ngay khi chọn đáp án!" 
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

  // Render Tony Passage text
  const tonyPassageEl = document.getElementById('tony-passage-text');
  if (tonyPassageEl) {
    tonyPassageEl.innerHTML = `<div class="passage-title">MY BEST FRIEND</div>${escapeHtml(EXAM_DATA.readingTonyPassage.replace('MY BEST FRIEND\n', ''))}`;
  }
  const tonyHTML = renderMCQList(EXAM_DATA.readingTonyQuestions, 15);
  if (tonyContainer) tonyContainer.innerHTML = tonyHTML;

  // Render Anna Passage text
  const annaPassageEl = document.getElementById('anna-passage-text');
  if (annaPassageEl) {
    annaPassageEl.innerHTML = `<div class="passage-title">CLOZE PASSAGE - ANNA</div>${escapeHtml(EXAM_DATA.readingAnnaPassage)}`;
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
        <div class="passage-card">
          <div class="passage-title">MY BEST FRIEND</div>
          ${escapeHtml(EXAM_DATA.readingTonyPassage.replace('MY BEST FRIEND\n', ''))}
        </div>
        ${tonyHTML}
      </div>

      <div class="section-card">
        <div class="section-card-header">
          <h3 class="section-card-title">📰 Phần II.c: Điền từ vào đoạn văn (Anna - 10 câu)</h3>
          <span class="section-tag">Câu 21 - 30</span>
        </div>
        <div class="passage-card">
          <div class="passage-title">CLOZE PASSAGE - ANNA</div>
          ${escapeHtml(EXAM_DATA.readingAnnaPassage)}
        </div>
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

// TỪ ĐIỂN SONG NGỮ TRA NGHĨA TỪNG TỪ CHI TIẾT
const WORD_DICTIONARY = {
  "each": "mỗi",
  "person": "người / cá nhân",
  "in": "trong",
  "the": "(mạo từ xác định)",
  "room": "căn phòng",
  "turned": "quay / ngoảnh",
  "their": "của họ",
  "head": "đầu",
  "to": "về phía / tới",
  "front": "phía trước",
  "when": "khi / vào lúc",
  "teacher": "giáo viên / thầy cô",
  "entered": "bước vào",
  "maria": "Maria (tên riêng)",
  "prefers": "thích hơn / chuộng hơn",
  "serious": "nghiêm túc / chính kịch",
  "films": "những bộ phim",
  "film": "bộ phim",
  "that": "mà (đại từ quan hệ)",
  "are": "thì / là (số nhiều)",
  "is": "thì / là (số ít)",
  "am": "thì / là (đi với I)",
  "about": "nói về / liên quan đến",
  "people": "con người / mọi người",
  "and": "và",
  "relationships": "các mối quan hệ",
  "relationship": "mối quan hệ",
  "sarah": "Sarah (tên riêng)",
  "enjoys": "thích thú / tận hưởng",
  "watching": "xem / theo dõi",
  "scare": "làm sợ hãi",
  "her": "cô ấy / của cô ấy",
  "if": "nếu / miễn là",
  "they": "chúng / họ",
  "well": "tốt / hay",
  "made": "được làm / dàn dựng",
  "many": "nhiều",
  "visiting": "đang thăm quan",
  "animals": "các loài động vật",
  "animal": "động vật",
  "today": "ngày hôm nay",
  "there": "có / ở đó",
  "some": "một ít / một vài",
  "water": "nước",
  "lake": "hồ nước",
  "near": "ở gần",
  "elephants": "những con voi",
  "elephant": "con voi",
  "my": "của tôi",
  "telephone": "điện thoại",
  "out of order": "bị hỏng / ngưng hoạt động",
  "out": "ngoài",
  "order": "thứ tự",
  "but": "nhưng",
  "his": "của anh ấy",
  "working": "đang hoạt động / làm việc",
  "junko": "Junko (tên riêng)",
  "has": "đã",
  "eaten": "đã ăn xong",
  "lunch": "bữa ăn trưa",
  "already": "rồi / xong",
  "saving": "đang để dành / cất",
  "mine": "phần của tôi",
  "until": "cho đến khi",
  "later": "lát nữa / sau này",
  "ken": "Ken (tên riêng)",
  "middle-aged": "trung niên (độ tuổi)",
  "height": "chiều cao",
  "average": "trung bình",
  "well-built": "vạm vỡ / cường tráng",
  "wrong-built": "sai cấu trúc",
  "good-built": "sai chuẩn ngữ",
  "nice-built": "sai chuẩn ngữ",
  "emma": "Emma (tên riêng)",
  "late": "cuối (độ tuổi)",
  "thirties": "những năm 30 tuổi",
  "tall": "cao (người)",
  "high": "cao (núi/nhà)",
  "weight": "cân nặng",
  "short": "ngắn / thấp",
  "wavy": "lượn sóng (tóc)",
  "blonde": "vàng hoe (màu tóc)",
  "hair": "mái tóc",
  "wears": "đeo / mặc",
  "glasses": "kính mắt",
  "caroline": "Caroline (tên riêng)",
  "seventeen": "mười bảy tuổi",
  "figure": "vóc dáng / thân hình",
  "personality": "tính cách",
  "thin": "gầy / mảnh mai",
  "please": "xin vui lòng / làm ơn",
  "keep": "giữ gìn",
  "this": "này",
  "entrance": "lối vào / cửa vào",
  "clear": "thông thoáng / trống",
  "door": "cánh cửa",
  "locked": "được khóa",
  "room": "căn phòng",
  "not": "không",
  "use": "sử dụng",
  "show": "xuất trình / cho xem",
  "librarian": "người thủ thư",
  "all": "tất cả",
  "books": "những cuốn sách",
  "leave": "rời khỏi",
  "library": "thư viện",
  "supersaver": "siêu tiết kiệm",
  "tickets": "những tấm vé",
  "cannot": "không thể",
  "used": "được sử dụng",
  "fridays": "các ngày thứ Sáu",
  "machine": "chiếc máy",
  "drinks": "các loại đồ uống",
  "available": "có sẵn",
  "bar": "quầy bar / quán nước",
  "heat": "sức nóng / cái nóng",
  "such": "đến nỗi mà",
  "nearly": "gần như / suýt nữa",
  "fainted": "ngất xỉu / xỉu",
  "hot": "nóng bức",
  "going": "sắp đi / đang đi",
  "theatre": "nhà hát",
  "tomorrow": "ngày mai",
  "looking": "đang mong",
  "forward": "về phía trước",
  "looking forward to": "rất mong chờ",
  "never": "chưa bao giờ",
  "first": "lần đầu tiên",
  "time": "thời gian / lần",
  "getting": "đang nhờ / thuê",
  "someone": "ai đó",
  "mend": "sửa chữa",
  "windows": "những chiếc cửa sổ",
  "having": "nhờ làm cái gì",
  "mended": "được sửa chữa",
  "pity": "điều đáng tiếc",
  "didn't": "đã không",
  "tell": "nói cho",
  "told": "đã nói",
  "wish": "ước gì / mong ước",
  "had": "đã (quá khứ hoàn thành)"
};

// Hàm tạo thanh phân tích từng từ tiếng Anh sang tiếng Việt
function renderWordBreakdownHtml(sentenceText) {
  if (!sentenceText) return '';
  // Xóa các dấu câu và tách từ
  const words = sentenceText
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, ' ')
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
    const lower = w.toLowerCase();
    // Tra cứu trong từ điển hoặc danh sách 53 từ vựng
    let viMeaning = WORD_DICTIONARY[lower];
    if (!viMeaning) {
      const vocabFound = EXAM_DATA.vocabulary.find(v => v.word.toLowerCase() === lower);
      if (vocabFound) viMeaning = vocabFound.meaning;
    }
    // Nếu từ số nhiều, thử tìm dạng số ít (bỏ 's')
    if (!viMeaning && lower.endsWith('s')) {
      const singular = lower.slice(0, -1);
      viMeaning = WORD_DICTIONARY[singular];
    }
    if (!viMeaning) viMeaning = 'từ vựng';

    return `
      <div class="word-chip" onclick="speakWord('${escapeHtml(w)}')" title="Bấm để nghe phát âm từ: ${escapeHtml(w)}">
        <span class="chip-en">${escapeHtml(w)}</span>
        <span class="chip-vi">${escapeHtml(viMeaning)}</span>
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

// Render danh sách câu hỏi trắc nghiệm
function renderMCQList(questions, offsetIndex) {
  return questions.map((q, idx) => {
    const globalNumber = offsetIndex + idx + 1;
    const isFlagged = AppState.flagged.has(q.id);
    const selectedChoice = AppState.userAnswers[q.id];

    let signHtml = '';
    if (q.signText) {
      signHtml = `<div class="sign-display ${q.signType || 'notice'}">${escapeHtml(q.signText)}</div>`;
    }

    const optionsHtml = q.options.map(opt => {
      const isSelected = selectedChoice === opt.key;
      let statusClass = '';
      if (isSelected) statusClass = 'selected';

      if (AppState.isSubmitted) {
        if (opt.key === q.correctAnswer) statusClass += ' correct-choice';
        else if (isSelected) statusClass += ' wrong-choice';
      }

      return `
        <div class="option-item ${statusClass}" onclick="selectOption('${q.id}', '${opt.key}')" data-qid="${q.id}" data-key="${opt.key}">
          <div class="option-key">${opt.key}</div>
          <div class="option-text">${escapeHtml(opt.text)}</div>
        </div>
      `;
    }).join('');

    const showExp = (AppState.mode === 'practice' && selectedChoice) || AppState.isSubmitted;

    return `
      <div class="question-box ${selectedChoice ? 'answered' : ''}" id="qbox-${q.id}" data-global-idx="${globalNumber}">
        <div class="q-header">
          <div class="q-title">
            <span class="q-number-badge">Câu ${globalNumber}</span>
            <div>${escapeHtml(q.question)}</div>
          </div>
          <button class="btn-flag ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag('${q.id}')" title="Đánh dấu xem lại">
            ${isFlagged ? '🚩 Đã đánh dấu' : '🏳️ Đánh dấu'}
          </button>
        </div>

        ${signHtml}

        <div class="q-actions-bar">
          <button class="btn-audio-action" onclick="speakQuestion('${q.id}', 'en')" title="Nghe đọc câu hỏi bằng Tiếng Anh">
            🔊 Đọc Tiếng Anh
          </button>
          <button class="btn-audio-action" onclick="toggleTranslation('${q.id}')" title="Dịch câu hỏi sang Tiếng Việt & tra từng từ">
            🌐 Dịch Tiếng Việt & Tra từ
          </button>
          <button class="btn-audio-action" onclick="speakQuestion('${q.id}', 'vi')" title="Nghe đọc câu dịch bằng Tiếng Việt">
            🗣️ Đọc Tiếng Việt
          </button>
        </div>

        <div class="translation-box" id="trans-${q.id}">
          <div style="font-size: 0.98rem; font-weight: 600; margin-bottom: 4px;">
            🇻🇳 Dịch cả câu: ${escapeHtml(q.vietnameseTranslation || '')}
          </div>
          ${renderWordBreakdownHtml(q.question)}
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
        <div class="original-sentence">${escapeHtml(q.originalSentence)}</div>

        <div class="q-actions-bar">
          <button class="btn-audio-action" onclick="speakWriting('${q.id}', 'en')" title="Nghe đọc câu tiếng Anh">
            🔊 Đọc Tiếng Anh
          </button>
          <button class="btn-audio-action" onclick="toggleTranslation('${q.id}')" title="Dịch câu sang Tiếng Việt & tra từng từ">
            🌐 Dịch Tiếng Việt & Tra từ
          </button>
          <button class="btn-audio-action" onclick="speakWriting('${q.id}', 'vi')" title="Nghe đọc bản dịch Tiếng Việt">
            🗣️ Đọc Tiếng Việt
          </button>
        </div>

        <div class="translation-box" id="trans-${q.id}">
          <div style="margin-bottom: 6px;">
            <strong>🇻🇳 Dịch câu gốc:</strong> ${escapeHtml(q.vietnameseTranslation || '')}<br>
            <strong>🇻🇳 Dịch câu hoàn chỉnh:</strong> ${escapeHtml(q.vietnameseModelTranslation || '')}
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
          <strong>🔑 Đáp án chuẩn:</strong> <span class="model-answer-highlight">${escapeHtml(q.modelAnswer)}</span><br>
          <strong>📖 Ngữ pháp:</strong> ${escapeHtml(q.grammarPoint)}
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

  // Cập nhật giao diện của tất cả các câu có id này (do render ở tab All và tab riêng)
  document.querySelectorAll(`[data-qid="${qId}"]`).forEach(opt => {
    opt.classList.toggle('selected', opt.getAttribute('data-key') === key);
  });

  // Đánh dấu câu đã trả lời
  document.querySelectorAll(`#qbox-${qId}`).forEach(box => {
    box.classList.add('answered');
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
          <span class="vocab-word">${escapeHtml(v.word)}</span>
          <button class="btn-speak" onclick="speakWord('${escapeHtml(v.word)}')" title="Phát âm">🔊</button>
        </div>
        <div class="vocab-ipa">${escapeHtml(v.ipa)} <span class="vocab-pos">(${escapeHtml(v.pos)})</span></div>
        <div class="vocab-meaning">${escapeHtml(v.meaning)}</div>
      </div>
      <div class="vocab-example">"${escapeHtml(v.example)}"</div>
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
  speakSmart(word, 'en-US');
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

// Đọc 1 câu trắc nghiệm (Tiếng Anh hoặc Tiếng Việt)
function speakQuestion(qId, lang = 'en') {
  const qData = QUESTION_LIST.find(q => q.id === qId);
  if (!qData) return;

  const box = document.getElementById(`qbox-${qId}`);
  if (box) {
    document.querySelectorAll('.question-box').forEach(b => b.classList.remove('reading-highlight'));
    box.classList.add('reading-highlight');
    setTimeout(() => box.classList.remove('reading-highlight'), 6000);
  }

  if (lang === 'en') {
    // Đọc tiếng Anh: đọc câu hỏi và các lựa chọn A, B, C, D
    let speechContent = qData.question;
    if (qData.options && qData.options.length) {
      speechContent += ". Options: " + qData.options.map(o => `Option ${o.key}: ${o.text}`).join(". ");
    }
    speakSmart(speechContent, 'en-US');
  } else {
    // Đọc tiếng Việt: đọc bản dịch câu hỏi
    const viText = qData.vietnameseTranslation || "Chưa có bản dịch cho câu này.";
    speakSmart(viText, 'vi-VN');
  }
}

// Đọc câu tự luận viết lại (Tiếng Anh hoặc Tiếng Việt)
function speakWriting(qId, lang = 'en') {
  const qData = EXAM_DATA.sentenceTransformations.find(q => q.id === qId);
  if (!qData) return;

  const box = document.getElementById(`qbox-${qId}`);
  if (box) {
    document.querySelectorAll('.question-box').forEach(b => b.classList.remove('reading-highlight'));
    box.classList.add('reading-highlight');
    setTimeout(() => box.classList.remove('reading-highlight'), 6000);
  }

  if (lang === 'en') {
    const speechContent = `Original sentence: ${qData.originalSentence}. Model sentence: ${qData.modelAnswer}`;
    speakSmart(speechContent, 'en-US');
  } else {
    const viText = `Câu gốc: ${qData.vietnameseTranslation}. Câu hoàn chỉnh: ${qData.vietnameseModelTranslation}`;
    speakSmart(viText, 'vi-VN');
  }
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
