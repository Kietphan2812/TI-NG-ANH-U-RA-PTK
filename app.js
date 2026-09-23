// Logic tương tác hệ thống ôn thi Tiếng Anh Đầu Ra
// Tác giả: Antigravity IDE
// Hỗ trợ đồng thời: Topic 1 (Describe People) & Topic 2 (Leisure and Free Time)

// Quản lý đa Topic ôn thi - tra cứu động để tránh lỗi timing khi script load
function getTopicData(topicId) {
  if (topicId === 'topic1') {
    return window.EXAM_DATA_TOPIC1 || window.EXAM_DATA || null;
  }
  if (topicId === 'topic2') {
    return window.EXAM_DATA_TOPIC2 || null;
  }
  return null;
}

// Danh sách topic hợp lệ
const VALID_TOPICS = ['topic1', 'topic2'];

let currentTopicId = 'topic1';
try {
  const savedTId = localStorage.getItem('active_topic_id');
  if (savedTId && VALID_TOPICS.includes(savedTId)) {
    currentTopicId = savedTId;
  }
} catch (e) {}

// EXAM_DATA đã được khai báo global bởi data.js (var EXAM_DATA), chỉ gán lại
EXAM_DATA = getTopicData(currentTopicId) || getTopicData('topic1');

// State toàn cục
const AppState = {
  mode: 'practice', // 'practice' hoặc 'exam'
  userAnswers: {},  // { qId: answerValue }
  revealedQuestions: new Set(), // Set các câu hỏi trắc nghiệm đã bấm "Xem kết quả"
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
let QUESTION_LIST = [];
function buildQuestionList() {
  QUESTION_LIST = [
    // 1-10: Vocab
    ...EXAM_DATA.vocabularyQuestions.map((q, idx) => ({ ...q, globalIndex: idx + 1, type: 'mcq' })),
    // 11-15: Reading Signs
    ...EXAM_DATA.readingSignQuestions.map((q, idx) => ({ ...q, globalIndex: 10 + idx + 1, type: 'mcq' })),
    // 16-20: Reading Tony / Jack
    ...EXAM_DATA.readingTonyQuestions.map((q, idx) => ({ ...q, globalIndex: 15 + idx + 1, type: 'mcq' })),
    // 21-30: Reading Anna / Drawing
    ...EXAM_DATA.readingAnnaQuestions.map((q, idx) => ({ ...q, globalIndex: 20 + idx + 1, type: 'mcq' })),
    // 31-35: Writing Sentence Transformations
    ...EXAM_DATA.sentenceTransformations.map((q, idx) => ({ ...q, globalIndex: 30 + idx + 1, type: 'writing_transform' }))
  ];
}
buildQuestionList();

// Khởi chạy ứng dụng khi DOM tải xong
document.addEventListener('DOMContentLoaded', () => {
  // Đồng bộ dropdown chọn topic
  const topicSelect = document.getElementById('topic-select');
  if (topicSelect) topicSelect.value = currentTopicId;

  loadSavedState();
  initTheme();
  updateTopicUIInfo();
  renderAllSections();
  renderVocabularyStudy();
  renderSpeakingSample();
  renderListeningSections();
  renderQuestionNav();
  startTimer();
  updateProgressCounters();
  initTextSelectionAndCopyFeatures();
});

// Lưu và khôi phục trạng thái từ LocalStorage theo từng Topic riêng biệt
function saveState() {
  try {
    localStorage.setItem(`tienganh_answers_${currentTopicId}`, JSON.stringify(AppState.userAnswers));
    localStorage.setItem(`tienganh_revealed_${currentTopicId}`, JSON.stringify(Array.from(AppState.revealedQuestions)));
    localStorage.setItem(`tienganh_flags_${currentTopicId}`, JSON.stringify(Array.from(AppState.flagged)));
    const essayEl = document.getElementById('essay-input');
    if (essayEl) {
      localStorage.setItem(`tienganh_essay_${currentTopicId}`, essayEl.value);
    }
  } catch (e) {
    console.error("Không thể lưu trạng thái:", e);
  }
}

function loadSavedState() {
  try {
    let savedAns = localStorage.getItem(`tienganh_answers_${currentTopicId}`);
    if (!savedAns && currentTopicId === 'topic1') {
      savedAns = localStorage.getItem('tienganh_answers');
    }
    AppState.userAnswers = savedAns ? JSON.parse(savedAns) : {};

    let savedRevealed = localStorage.getItem(`tienganh_revealed_${currentTopicId}`);
    if (!savedRevealed && currentTopicId === 'topic1') {
      savedRevealed = localStorage.getItem('tienganh_revealed');
    }
    AppState.revealedQuestions = savedRevealed ? new Set(JSON.parse(savedRevealed)) : new Set();

    let savedFlags = localStorage.getItem(`tienganh_flags_${currentTopicId}`);
    if (!savedFlags && currentTopicId === 'topic1') {
      savedFlags = localStorage.getItem('tienganh_flags');
    }
    AppState.flagged = savedFlags ? new Set(JSON.parse(savedFlags)) : new Set();

    let savedEssay = localStorage.getItem(`tienganh_essay_${currentTopicId}`);
    if (!savedEssay && currentTopicId === 'topic1') {
      savedEssay = localStorage.getItem('tienganh_essay');
    }
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

// Chức năng chuyển đổi Topic
function switchTopic(newTopicId) {
  if (newTopicId === 'self-intro') {
    window.location.href = 'self-intro.html';
    return;
  }
  const newData = getTopicData(newTopicId);
  if (!newData) {
    console.warn('switchTopic: Không tìm thấy dữ liệu cho topic:', newTopicId);
    return;
  }
  currentTopicId = newTopicId;
  EXAM_DATA = newData;
  try {
    localStorage.setItem('active_topic_id', newTopicId);
  } catch (e) {}

  const topicSelect = document.getElementById('topic-select');
  if (topicSelect) topicSelect.value = newTopicId;

  // Reset trạng thái nộp bài theo topic mới
  AppState.isSubmitted = false;

  buildQuestionList();
  loadSavedState();

  updateTopicUIInfo();
  renderAllSections();
  renderVocabularyStudy();
  renderSpeakingSample();
  renderListeningSections();
  renderQuestionNav();
  restoreAnswerInputs();
  updateProgressCounters();

  const sampleBox = document.getElementById('sample-letter-box');
  if (sampleBox) sampleBox.style.display = 'none';

  switchTab('tab-all');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cập nhật thông tin giao diện theo Topic đang chọn
function updateTopicUIInfo() {
  const badge = document.getElementById('topic-badge');
  if (badge) badge.innerText = EXAM_DATA.topicTitle;

  const bannerTitle = document.getElementById('banner-topic-title');
  if (bannerTitle) bannerTitle.innerText = EXAM_DATA.topicTitle;

  const bannerDesc = document.getElementById('banner-topic-desc');
  if (bannerDesc) {
    if (EXAM_DATA.topicId === 'topic2') {
      bannerDesc.innerText = 'Hệ thống ôn thi toàn diện gồm: 36 từ vựng chủ đề Thời gian rảnh & Sở thích, 10 câu trắc nghiệm từ vựng & ngữ pháp, 20 câu đọc hiểu (biển báo, Jack & Gloria, điền từ Drawing), 5 câu viết lại tương đương và bài viết thư 120 từ.';
    } else {
      bannerDesc.innerText = 'Hệ thống ôn thi toàn diện gồm: 53 từ vựng miêu tả ngoại hình & tính cách, 10 câu trắc nghiệm từ vựng, 20 câu đọc hiểu (biển báo, đoạn văn Tony, điền từ Anna), 5 câu viết lại tương đương và bài viết thư 120 từ.';
    }
  }

  const bannerVocabCount = document.getElementById('banner-vocab-count');
  if (bannerVocabCount) bannerVocabCount.innerText = `📖 ${EXAM_DATA.vocabulary.length} từ vựng tra cứu`;

  // Cập nhật tổng số câu hỏi trong tab badge và sidebar
  const totalQ = QUESTION_LIST.length;
  const totalQBadge = document.getElementById('total-q-badge');
  if (totalQBadge) totalQBadge.innerText = `${totalQ} câu`;

  // Cập nhật stat chip trên banner
  const bannerStatChips = document.querySelectorAll('.stat-chip');
  if (bannerStatChips.length > 0) {
    bannerStatChips[0].innerText = `✨ ${totalQ} câu hỏi trắc nghiệm & tự luận`;
  }

  const navVocab = document.getElementById('nav-vocab-tab-title');
  if (navVocab) navVocab.innerText = `📖 Từ vựng (${EXAM_DATA.vocabulary.length} từ)`;

  const vocabStudyTitle = document.getElementById('vocab-study-card-title');
  if (vocabStudyTitle) {
    const subtitle = EXAM_DATA.topicTitle.includes(':') ? EXAM_DATA.topicTitle.split(':')[1].trim() : EXAM_DATA.topicTitle;
    vocabStudyTitle.innerText = `📖 Sổ tay từ vựng: ${subtitle}`;
  }
  const vocabStudyTag = document.getElementById('vocab-study-card-tag');
  if (vocabStudyTag) {
    vocabStudyTag.innerText = `${EXAM_DATA.vocabulary.length} từ vựng & ví dụ`;
  }

  const readingBTitle = document.getElementById('reading-b-card-title');
  if (readingBTitle) {
    readingBTitle.innerText = `📰 Phần II.b: Bài đọc "${EXAM_DATA.readingPassageBTitle || 'Passage B'}"`;
  }
  const readingCTitle = document.getElementById('reading-c-card-title');
  if (readingCTitle) {
    readingCTitle.innerText = `📰 Phần II.c: ${EXAM_DATA.readingPassageCTitle || 'Cloze Test'}`;
  }

  // Cập nhật phần đề bài Viết Thư
  const letterPrompt = document.getElementById('letter-prompt-container');
  if (letterPrompt && EXAM_DATA.letterWriting) {
    letterPrompt.innerHTML = `
      <h4>Đề bài:</h4>
      <p><strong>${escapeHtml(EXAM_DATA.letterWriting.topic)}</strong></p>
      ${EXAM_DATA.letterWriting.vietnameseTranslation ? `<p style="color: var(--text-secondary); margin: 6px 0 10px; font-style: italic;">🇻🇳 ${escapeHtml(EXAM_DATA.letterWriting.vietnameseTranslation)}</p>` : ''}
      <br>
      <p>Your letter should include:</p>
      <ul>
        ${EXAM_DATA.letterWriting.requirements.map(r => `<li>${escapeHtml(r)}</li>`).join('')}
      </ul>
      <p><em>⚠️ LƯU Ý: ${escapeHtml(EXAM_DATA.letterWriting.note || 'Write the body of the letter only. Do NOT write your name, your address and your signature in the letter!')}</em></p>
    `;
  }

  const sampleLetterContent = document.getElementById('sample-letter-content');
  if (sampleLetterContent && EXAM_DATA.letterWriting) {
    sampleLetterContent.innerHTML = `
      <div style="white-space: pre-wrap; font-family: inherit; line-height: 1.6; margin-bottom: 12px;">${escapeHtml(EXAM_DATA.letterWriting.sample)}</div>
      ${EXAM_DATA.letterWriting.sampleTranslation ? `
        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color); color: var(--text-secondary); font-style: italic; white-space: pre-wrap;">
          <strong>🇻🇳 Dịch Tiếng Việt tham khảo:</strong><br>${escapeHtml(EXAM_DATA.letterWriting.sampleTranslation)}
        </div>
      ` : ''}
    `;
  }

  // Cập nhật phần đề bài Luyện Nói
  const speakingHeader = document.getElementById('speaking-card-header-title');
  if (speakingHeader && EXAM_DATA.speakingCard) {
    speakingHeader.innerText = `🗣️ Phần III: Luyện nói (${EXAM_DATA.speakingCard.title})`;
  }
  const speakingPrompt = document.getElementById('speaking-prompt-box');
  if (speakingPrompt && EXAM_DATA.speakingCard) {
    speakingPrompt.innerHTML = `
      <h4 style="color: var(--primary);">${escapeHtml(EXAM_DATA.speakingCard.title)}: ${escapeHtml(EXAM_DATA.speakingCard.task)}</h4>
      ${EXAM_DATA.speakingCard.vietnameseTranslation ? `<p style="color: var(--text-secondary); margin: 6px 0 10px; font-style: italic;">🇻🇳 ${escapeHtml(EXAM_DATA.speakingCard.vietnameseTranslation)}</p>` : ''}
      <ul>
        ${EXAM_DATA.speakingCard.prompts.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
      </ul>
    `;
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
    ? "Chế độ LUYỆN TẬP: Chọn đáp án và bấm nút 'Xem kết quả' ở từng câu để kiểm tra đúng/sai và xem giải thích!" 
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
          <h3 class="section-card-title">📰 Phần II.b: Bài đọc "${escapeHtml(EXAM_DATA.readingPassageBTitle || 'Passage B')}" (5 câu)</h3>
          <span class="section-tag">Câu 16 - 20</span>
        </div>
        ${renderTonyPassageCardHtml('tony-all')}
        ${tonyHTML}
      </div>

      <div class="section-card">
        <div class="section-card-header">
          <h3 class="section-card-title">📰 Phần II.c: ${escapeHtml(EXAM_DATA.readingPassageCTitle || 'Điền từ vào đoạn văn')} (10 câu)</h3>
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
  "the": "cái / người đó (mạo từ)",
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
  "there": "ở đó / có",

  // Toàn bộ từ vựng bổ trợ cho câu hỏi, bài đọc & đoạn văn
  "started": "đã bắt đầu",
  "go": "đi / trở nên",
  "natural": "tự nhiên",
  "compared": "so với / đối chiếu",
  "brother": "anh / em trai",
  "tied": "buộc / thắt lại",
  "back": "phía sau / quay lại",
  "over": "hơn / ở trên",
  "six": "sáu (6)",
  "feet": "bước chân / đơn vị feet (30cm)",
  "disposition": "tính tình / tâm tính",
  "well": "tốt / giỏi",
  "school": "trường học",
  "out": "ra ngoài",
  "of": "của / trong số",
  "bed": "chiếc giường",
  "boy": "cậu bé / con trai",
  "looked": "trông có vẻ / đã nhìn",
  "cold": "lạnh lùng / cảm lạnh",
  "future": "tương lai",
  "don": "đừng / không",
  "be": "thì / là / ở",
  "mule": "con la / người bướng bỉnh",
  "going": "sắp / đang đi",
  "popular": "được yêu thích / phổ biến",
  "lose": "đánh mất / thua",
  "crossing": "băng qua đường",
  "street": "con đường / đường phố",
  "argue": "tranh cãi / tranh luận",
  "dress": "váy đầm / ăn mặc",
  "young": "trẻ tuổi",
  "man": "người đàn ông",
  "an": "một (mạo từ)",
  "smile": "nụ cười / mỉm cười",
  "medium": "trung bình / vừa phải",
  "build": "vóc dáng / thể hình",
  "middle": "ở giữa",
  "aged": "tuổi / trung niên",
  "too": "quá / cũng",
  "much": "nhiều",
  "maintains": "duy trì / giữ gìn",
  "jogging": "chạy bộ tập thể dục",
  "more": "nhiều hơn",
  "built": "được xây dựng / vóc người",
  "felt": "đã cảm thấy",
  "passing": "vượt qua / thi đỗ",
  "test": "bài kiểm tra / bài thi",
  "hard": "chăm chỉ / khó khăn",
  "really": "thực sự / rất",
  "ask": "hỏi / nhờ vả",
  "loves": "rất thích / yêu",
  "meeting": "gặp gỡ / buổi họp",
  "prefer": "thích hơn",
  "calm": "bình tĩnh / yên lặng",
  "environments": "các môi trường",
  "decided": "đã quyết định",
  "grow": "để mọc / lớn lên / nuôi",
  "sharp": "gọn gàng / sắc sảo / rõ nét",
  "cut": "cắt / tỉa",
  "neat": "gọn gàng / ngăn nắp",
  "across": "ngang qua",
  "forehead": "vầng trán",
  "suggested": "đã gợi ý / cho thấy",
  "been": "đã từng / đã ở",
  "ill": "bị ốm / bị bệnh",
  "looking": "trông có vẻ",
  "polite": "lịch sự / lễ phép",
  "becomes": "trở nên / trở thành",
  "treat": "đối xử / cư xử",
  "way": "cách thức / con đường",
  "behavior": "hành vi / cách cư xử",
  "tolerated": "được chấp nhận / chịu đựng",
  "donating": "quyên góp / từ thiện",
  "charity": "hội từ thiện",
  "coffee": "cà phê",
  "thank": "cảm ơn",
  "being": "sự hiện diện / việc là",
  "count": "trông cậy / đếm",
  "listen": "lắng nghe",
  "advice": "lời khuyên",
  "despite": "mặc dù / bất chấp",
  "huge": "to lớn / khổng lồ",
  "success": "thành công",
  "remains": "vẫn giữ / vẫn là",
  "woman": "người phụ nữ",
  "principles": "các nguyên tắc",
  "stand": "đứng / giữ vững",
  "up": "lên / đứng dậy",
  "front": "phía trước",
  "object": "đồ vật / đối tượng",
  "prefers": "thích hơn",
  "today": "hôm nay",
  "later": "sau đó / muộn hơn",
  "cm": "xen-ti-mét",
  "please": "xin vui lòng",
  "next": "tiếp theo / kế bên",
  "use": "sử dụng",
  "used": "đã dùng / từng làm",
  "called": "được gọi là",
  "sit": "ngồi",
  "same": "cùng / giống nhau",
  "side": "phía / bên",
  "share": "chia sẻ",
  "things": "mọi thứ / đồ vật",
  "comes": "đến",
  "also": "cũng",
  "dressed": "ăn mặc",
  "behaved": "cư xử / hành xử",
  "opinion": "ý kiến / quan điểm",
  "part": "phần / vai trò",
  "secures": "đạt được / đảm bảo",
  "top": "hàng đầu / cao nhất",
  "harder": "chăm chỉ hơn / khó hơn",
  "any": "bất kỳ",
  "commit": "cam kết / tận tụy",
  "name": "tên gọi",
  "want": "muốn",
  "think": "suy nghĩ",
  "goes": "đi",
  "forgotten": "đã quên",
  "tv": "ti vi",
  "programme": "chương trình",
  "clock": "đồng hồ",
  "tonight": "tối nay",
  "winter": "mùa đông",
  "plymouth": "Plymouth (thành phố)",
  "sea": "biển",
  "life": "cuộc sống / sinh vật",
  "centre": "trung tâm",
  "talking": "đang nói chuyện",
  "conversation": "cuộc hội thoại",
  "fill": "điền vào",
  "missing": "còn thiếu",
  "information": "thông tin",
  "cost": "chi phí / giá vé",
  "adults": "người lớn",
  "prices": "các mức giá",
  "sixties": "người từ 60 tuổi",
  "groups": "các đoàn / nhóm",
  "fed": "được cho ăn",
  "slide": "cầu trượt / trình chiếu",
  "guided": "có người hướng dẫn",
  "tours": "các tour tham quan",
  "attraction": "điểm du lịch thu hút",
  "walk": "đi bộ",
  "through": "xuyên qua",
  "big": "to lớn",
  "glass": "kính / thủy tinh",
  "tomorrow": "ngày mai",
  "forward": "về phía trước / mong đợi",
  "ve": "đã (viết tắt have)",
  "someone": "ai đó",
  "having": "có / đang có",
  "didn": "đã không (did not)",
  "wish": "ước / chúc",
  "hello": "xin chào",
  "glad": "vui mừng",
  "hear": "nghe tin",
  "know": "biết",
  "met": "đã gặp",
  "interesting": "thú vị",
  "english": "tiếng Anh",
  "guy": "chàng trai / anh chàng",
  "nearsighted": "cận thị",
  "active": "năng động",
  "energetic": "giàu năng lượng",
  "football": "bóng đá",
  "basketball": "bóng rổ",
  "table": "cái bàn",
  "tennis": "quần vợt",
  "social": "xã hội",
  "activities": "các hoạt động",
  "impression": "ấn tượng",
  "helping": "giúp đỡ",
  "introduce": "giới thiệu",
  "impress": "gây ấn tượng",
  "love": "yêu mến",
  "talk": "nói chuyện",
  "appearance": "ngoại hình",
  "quality": "phẩm chất",
  "ability": "khả năng",
  "doing": "đang làm",
  "building": "tòa nhà",
  "known": "được biết đến",
  "round": "tròn",
  "face": "khuôn mặt",
  "small": "nhỏ nhắn",
  "bright": "sáng sủa / thông minh",
  "smiling": "hay cười",
  "helpful": "tốt bụng, hay giúp",
  "feel": "cảm thấy",
  "bored": "chán nản",
  "jokes": "những chuyện vui đùa",
  "laugh": "cười",
  "musical": "âm nhạc",
  "acts": "hành động / diễn",
  "actor": "diễn viên nam",
  "grows": "lớn lên",
  "believe": "tin tưởng",
  "become": "trở thành",
  "jackie": "Jackie (Thành Long)",
  "chan": "Chan (họ Trần)",
  "seventeen": "mười bảy tuổi",
  "blond": "vàng hoe (tóc)",
  "blonde": "vàng hoe (tóc)",
  "figure": "vóc dáng / thân hình",
  "hair": "mái tóc",
  "height": "chiều cao",
  "thin": "mảnh mai / gầy",
  "caroline": "Caroline (tên riêng)",
  "is": "thì / là",
  "about": "khoảng / về",
  "with": "với / cùng với",
  "short": "ngắn / thấp",
  "tall": "cao ráo"
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

// Bảng dịch tiếng Việt đầy đủ cho 100% các lựa chọn trắc nghiệm trong đề thi
const OPTION_TRANSLATIONS = {
  'me': 'tôi / mình',
  'their': 'của họ',
  'his': 'của anh ấy / cậu ấy',
  'our': 'của chúng tôi / chúng ta',
  'are': 'thì / là (số nhiều)',
  'is': 'thì / là (số ít)',
  'am': 'thì / là (đi với I)',
  '∅': 'không điền từ',
  'we': 'chúng tôi / chúng ta',
  'they': 'họ / chúng nó',
  'there': 'ở đó / có',
  'she': 'cô ấy',
  'there is': 'có (số ít)',
  'there are': 'có (số nhiều)',
  'this is': 'đây là (số ít)',
  'this are': 'đây là (sai ngữ pháp)',
  'these are': 'đây là những (số nhiều)',
  'your': 'của bạn',
  'mine': 'của tôi',
  'wrong-built': 'vóc người không chuẩn',
  'well-built': 'vóc dáng vạm vỡ, săn chắc',
  'good-built': 'vóc dáng tốt (sai ngữ pháp)',
  'nice-built': 'vóc dáng đẹp (sai ngữ pháp)',
  'tall': 'cao ráo',
  'height': 'chiều cao',
  'weight': 'cân nặng',
  'high': 'cao (độ cao)',
  'hair': 'mái tóc',
  'figure': 'vóc dáng / thân hình',
  'personality': 'tính cách',
  'permission is needed to park here.': 'Cần có sự cho phép để đỗ xe ở đây.',
  'always keep this door open.': 'Luôn luôn giữ cánh cửa này mở.',
  'only use this entrance in an emergency.': 'Chỉ sử dụng lối vào này trong trường hợp khẩn cấp.',
  'do not park in front of this entrance': 'Không được đỗ xe ở phía trước lối vào này.',
  'this room cannot be used at present.': 'Căn phòng này hiện tại không thể sử dụng.',
  'keep the key to this door in the room.': 'Để chìa khóa của cánh cửa này ở trong phòng.',
  'this door must always be kept locked.': 'Cánh cửa này phải luôn luôn được khóa.',
  'lock the room when it is not being used.': 'Khóa căn phòng lại khi không có ai đang dùng.',
  'the librarian needs to see your books before you go.': 'Người thủ thư cần xem sách của bạn trước khi bạn đi.',
  'return your books before you leave the library.': 'Hãy trả sách trước khi bạn rời khỏi thư viện.',
  'the librarian will show you where to put your books.': 'Thủ thư sẽ chỉ cho bạn nơi để sách.',
  'make sure you take all your books with you.': 'Hãy chắc chắn bạn mang theo tất cả sách của mình.',
  'supersaver tickets can be used every day except fridays.': 'Vé siêu tiết kiệm có thể dùng mọi ngày trừ thứ Sáu.',
  'you can save money by travelling on a friday.': 'Bạn có thể tiết kiệm tiền bằng cách đi lại vào thứ Sáu.',
  'you need a special ticket to travel on a friday.': 'Bạn cần một vé đặc biệt để đi lại vào thứ Sáu.',
  'supersaver tickets cannot be bought before the weekend.': 'Vé siêu tiết kiệm không thể mua trước cuối tuần.',
  'drinks can not be ordered at the bar.': 'Không thể gọi đồ uống tại quầy bar.',
  'this machine isn\'t working at the moment.': 'Chiếc máy này hiện tại đang không hoạt động.',
  'use this machine when the bar is closed.': 'Sử dụng chiếc máy này khi quầy bar đóng cửa.',
  'there is a drinks machine in the bar.': 'Có một chiếc máy bán đồ uống ở trong quầy bar.',
  'a farmer': 'Một người nông dân',
  'a teacher': 'Một giáo viên',
  'a guitar player': 'Một người chơi đàn ghi-ta',
  'a school principal': 'Một hiệu trưởng trường học',
  'he is tall and slim.': 'Bạn ấy cao ráo và thon thả.',
  'he is tall and fat.': 'Bạn ấy cao và béo.',
  'he is friendly and honest.': 'Bạn ấy thân thiện và trung thực.',
  'he likes to play the guitar.': 'Bạn ấy thích chơi đàn ghi-ta.',
  'straight blonde hair and blue eyes': 'Mái tóc vàng thẳng và đôi mắt xanh lam',
  'green eyes and curly brown hair': 'Mắt xanh lá và tóc xoăn màu nâu',
  'curly brown hair and blue eyes': 'Tóc xoăn màu nâu và mắt xanh lam',
  'blue eyes and curly blonde hair': 'Mắt xanh lam và tóc xoăn màu vàng',
  'he is tall and thin.': 'Bạn ấy cao và gầy.',
  'he likes sports.': 'Bạn ấy thích thể thao.',
  'he is friendly, clever and honest.': 'Bạn ấy thân thiện, thông minh và thật thà.',
  'he loves to listen to guitar music.': 'Bạn ấy rất thích nghe nhạc ghi-ta.',
  'honest': 'trung thực / thật thà',
  'well-behaved': 'ngoan ngoãn / biết cư xử',
  'humorous': 'hài hước / vui tính',
  'hard-working': 'chăm chỉ / cần cù',
  'children': 'trẻ em / con cái',
  'neighborhood': 'khu phố / hàng xóm',
  'generous': 'hào phóng / rộng lượng',
  'extroverted': 'hướng ngoại',
  'beautiful': 'xinh đẹp',
  'smart': 'thông minh / khôn ngoan',
  'ponytail': 'tóc buộc đuôi ngựa',
  'travel': 'đi du lịch',
  'country': 'đất nước / quốc gia',
  'learn': 'học hỏi / học tập',
  'child': 'đứa trẻ',
  'family': 'gia đình',
  'house': 'ngôi nhà',
  'gifts': 'quà tặng',
  'university': 'trường đại học',
  'coutry': 'đất nước',
  'a (café with tables and lamps)': 'Quán cà phê có bàn và đèn',
  'b (in front of building entrance)': 'Phía trước lối vào tòa nhà',
  'c (people waiting at bus/train)': 'Người đang chờ ở xe buýt/tàu hỏa',
  'a (pen)': 'Cây bút mực',
  'b (keys)': 'Chùm chìa khóa',
  'c (papers/documents)': 'Giấy tờ, tài liệu',
  'a (ski jumping)': 'Môn nhảy trượt tuyết',
  'b (dolphins/underwater)': 'Cá heo dưới nước',
  'c (cooking, wok)': 'Nấu ăn, chảo xào',
  'a (magazine/booklet)': 'Tạp chí / cuốn sổ nhỏ',
  'b (mobile phone)': 'Điện thoại di động',
  'c (computer/internet)': 'Máy tính / Mạng Internet',
  'a (gardening)': 'Làm vườn',
  'b (shopping/supermarket)': 'Mua sắm tại siêu thị',
  'c (bricklaying outdoors)': 'Xây gạch ngoài trời',
  'a (painting a window/ladder)': 'Sơn cửa sổ trên thang',
  'b (car with roof rack/ladder)': 'Ô tô có giá nóc chở thang',
  'c (two people carrying a ladder)': 'Hai người đang khiêng thang',
  'a (house with tree in front, no pool)': 'Ngôi nhà có cây phía trước, không có hồ bơi',
  'b (house with pool)': 'Ngôi nhà có hồ bơi',
  'c (house with pool, different angle)': 'Ngôi nhà có hồ bơi nhìn từ góc khác'
};

// Tra cứu nhanh bản dịch tiếng Việt của lựa chọn trắc nghiệm
function getOptionTranslation(optText) {
  if (!optText) return '';
  const clean = optText.toLowerCase().trim();
  if (OPTION_TRANSLATIONS[clean]) return OPTION_TRANSLATIONS[clean];
  const dictMeaning = typeof getWordMeaning === 'function' ? getWordMeaning(clean) : '';
  if (dictMeaning && dictMeaning !== '(tên riêng)') return dictMeaning.split('/')[0].trim();
  return '';
}

// Hàm tạo thanh phân tích từng từ tiếng Anh sang tiếng Việt (Không bao giờ bị 'từ vựng'!)
function renderWordBreakdownHtml(sentenceText) {
  if (!sentenceText) return '';
  // Xóa các dấu gạch dưới, dấu câu và tách từ
  const words = sentenceText
    .replace(/_+/g, ' ')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?\"'“”’–—]/g, ' ')
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
    const pronData = typeof getWordPronounceData === 'function' ? getWordPronounceData(w) : { ipa: '', readingVi: '' };

    if (!viMeaning) {
      viMeaning = '...';
      // Tự động tải bản dịch online
      setTimeout(() => fetchMissingWordTranslation(w, chipId), 10);
    }

    return `
      <div class="word-chip" onclick="showWordPronounceDetail('${escapeHtml(w)}')" title="Bấm xem cách đọc chi tiết của từ: ${escapeHtml(w)}">
        <div class="chip-en" onclick="event.stopPropagation(); speakWord('${escapeHtml(w)}')" title="Bấm nghe phát âm tiếng Anh: ${escapeHtml(w)}">🔊 ${escapeHtml(w)}</div>
        <div class="chip-vi-reading" title="Cách đọc phiên âm tiếng Việt: ${escapeHtml(pronData.readingVi)}">"${escapeHtml(pronData.readingVi)}"</div>
        <span class="chip-vi" id="${chipId}" onclick="event.stopPropagation(); speakViWord(this.innerText)" title="Bấm nghe nghĩa tiếng Việt">${escapeHtml(viMeaning)}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="word-by-word-container">
      <div class="word-by-word-header">
        <span>🔍 Bảng đối chiếu nghĩa & cách đọc từng từ (Bấm vào từ để xem hướng dẫn phát âm chi tiết):</span>
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
    const isRevealed = AppState.isSubmitted || (AppState.revealedQuestions && AppState.revealedQuestions.has(q.id));
    let badgeClass = 'filled-blank-badge';
    if (isRevealed) {
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
// showBreakdown=true chỉ khi người dùng bấm nút Dịch (lazy render để tránh chậm)
function renderTranslationBoxContent(q, showBreakdown) {
  const selectedKey = AppState.userAnswers[q.id];
  const selectedOpt = (q.options && selectedKey) ? q.options.find(o => o.key === selectedKey) : null;
  let chosenCallout = '';
  if (selectedOpt) {
    const isCorrect = selectedKey === q.correctAnswer;
    const isRevealed = AppState.isSubmitted || (AppState.revealedQuestions && AppState.revealedQuestions.has(q.id));
    const meaning = getWordMeaning(selectedOpt.text);
    const meaningStr = (meaning && meaning !== '(tên riêng)') ? ` (Nghĩa: ${meaning.split('/')[0].trim()})` : '';

    let calloutClass = 'selected-ans-callout';
    let statusPrefix = '';
    let correctHint = '';

    if (isRevealed) {
      calloutClass += isCorrect ? ' correct-callout' : ' wrong-callout';
      statusPrefix = isCorrect ? '✅ <strong>CHÍNH XÁC!</strong> ' : '❌ <strong>CHƯA ĐÚNG!</strong> ';
      if (!isCorrect) {
        const correctOpt = q.options.find(o => o.key === q.correctAnswer);
        const correctText = correctOpt ? ` (${correctOpt.text})` : '';
        correctHint = ` — Đáp án đúng là <strong>${q.correctAnswer}${escapeHtml(correctText)}</strong>`;
      }
    }

    chosenCallout = `
      <div class="${calloutClass}">
        <span>${statusPrefix}🎯 <strong>Đáp án bạn chọn:</strong> <strong>${selectedOpt.key}. ${escapeHtml(selectedOpt.text)}</strong>${escapeHtml(meaningStr)}${correctHint}</span>
      </div>
    `;
  }

  const isSign = Boolean(q.signText);
  const textToBreakdown = isSign ? q.signText : (q.question + (selectedOpt && selectedOpt.text !== '∅' ? ' ' + selectedOpt.text : ''));
  const headerTitle = isSign ? '🇻🇳 Dịch nội dung trong ô biển báo:' : '🇻🇳 Dịch cả câu:';

  // Word breakdown chỉ render khi người dùng bấm nút Dịch
  const breakdownHtml = showBreakdown ? renderWordBreakdownHtml(textToBreakdown) : '';

  return `
    <div style="font-size: 0.98rem; font-weight: 600; margin-bottom: 6px; cursor: pointer;" onclick="speakQuestion('${q.id}', 'vi')" title="Bấm để nghe đọc bản dịch tiếng Việt">
      ${headerTitle} ${escapeHtml(q.vietnameseTranslation || '')}
    </div>
    ${chosenCallout}
    ${breakdownHtml}
  `;
}

// Render danh sách câu hỏi trắc nghiệm
function renderMCQList(questions, offsetIndex) {
  return questions.map((q, idx) => {
    const globalNumber = offsetIndex + idx + 1;
    const isFlagged = AppState.flagged.has(q.id);
    const selectedChoice = AppState.userAnswers[q.id];
    const isRevealed = AppState.isSubmitted || (AppState.revealedQuestions && AppState.revealedQuestions.has(q.id));

    let signHtml = '';
    if (q.signText) {
      signHtml = `
        <div class="sign-display ${q.signType || 'notice'}" onclick="speakSmart('${escapeHtml(q.signText).replace(/'/g, "\\'")}', 'en-US')" style="cursor:pointer;" title="Bấm vào ô biển báo để nghe phát âm tiếng Anh">
          ${escapeHtml(q.signText)}
          <span style="display:block; font-size:0.75rem; font-weight:600; opacity:0.8; margin-top:4px;">🔊 Bấm vào ô biển báo để nghe phát âm tiếng Anh</span>
        </div>
      `;
    }

    const optionsHtml = q.options.map(opt => {
      const isSelected = selectedChoice === opt.key;
      let statusClass = '';
      if (isSelected) statusClass = 'selected';

      if (isRevealed) {
        if (opt.key === q.correctAnswer) {
          statusClass += ' correct-choice';
        } else if (isSelected) {
          statusClass += ' wrong-choice';
        }
      }

      const optVi = getOptionTranslation(opt.text);

      return `
        <div class="option-item ${statusClass}" onclick="selectOption('${q.id}', '${opt.key}')" data-qid="${q.id}" data-key="${opt.key}">
          <div class="option-key">${opt.key}</div>
          <div class="option-content">
            <div class="option-text">${escapeHtml(opt.text)}</div>
          </div>
          <div style="display: flex; gap: 6px; align-items: center; flex-shrink: 0;">
            <button type="button" class="btn-opt-audio" onclick="event.stopPropagation(); speakSmart('${escapeHtml(opt.text).replace(/'/g, "\\'")}', 'en-US')" title="Nghe tiếng Anh: ${opt.key}">🔊</button>
            <button type="button" class="btn-opt-audio btn-opt-vi" onclick="event.stopPropagation(); speakOptionVi('${escapeHtml(opt.text).replace(/'/g, "\\'")}')" title="Nghe tiếng Việt: ${opt.key}">🗣️</button>
          </div>
        </div>
      `;
    }).join('');

    const showExp = isRevealed;

    let boxStatusClass = selectedChoice ? 'answered' : '';
    if (isRevealed) {
      boxStatusClass += (selectedChoice === q.correctAnswer) ? ' correct' : ' incorrect';
    }

    let checkBtnText = '🔍 Xem kết quả';
    let checkBtnClass = 'btn-audio-action btn-check-mcq';
    if (isRevealed && selectedChoice) {
      const isCorrect = selectedChoice === q.correctAnswer;
      checkBtnClass += isCorrect ? ' revealed correct' : ' revealed wrong';
      checkBtnText = isCorrect ? '✅ Đã xem (Đúng)' : '❌ Đã xem (Sai)';
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
          <button class="${checkBtnClass}" id="btn-check-${q.id}" data-qid="${q.id}" onclick="checkMCQResult('${q.id}')" title="Bấm để kiểm tra đáp án đúng hay sai">
            ${checkBtnText}
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

        <div class="translation-box" id="trans-${q.id}" data-writing-qid="${q.id}">
          <div style="margin-bottom: 6px;">
            <div style="cursor: pointer; margin-bottom: 3px;" onclick="speakWriting('${q.id}', 'vi')" title="Bấm để nghe đọc bản dịch câu gốc">
              <strong>🇻🇳 Dịch câu gốc:</strong> ${escapeHtml(q.vietnameseTranslation || '')}
            </div>
            <div style="cursor: pointer;" onclick="speakSmart('${escapeHtml(q.vietnameseModelTranslation || '').replace(/'/g, "\\'")}', 'vi-VN')" title="Bấm để nghe đọc câu dịch hoàn chỉnh">
              <strong>🇻🇳 Dịch câu hoàn chỉnh:</strong> ${escapeHtml(q.vietnameseModelTranslation || '')}
            </div>
          </div>
          <div class="writing-breakdown-placeholder" data-sentence="${escapeHtml(q.originalSentence)}"></div>
        </div>

        <div class="input-row-container" style="margin-top: 14px;">
          <span class="sentence-prefix">${escapeHtml(q.prefix)}</span>
          <input type="text" class="sentence-input" id="input-${q.id}" 
            value="${escapeHtml(userVal)}" 
            placeholder="Nhập phần câu viết tiếp..." 
            oninput="handleWritingInput('${q.id}', this.value)"
            onkeydown="if(event.key==='Enter') checkSentence('${q.id}')">
          <button class="btn-check-sentence" onclick="checkSentence('${q.id}')" title="Kiểm tra câu trả lời của bạn">✔ Kiểm tra</button>
          <button class="btn-reveal-sentence" onclick="revealSentenceAnswer('${q.id}')" title="Xem đáp án chuẩn ngay">👁 Xem đáp án</button>
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
  // Khi chọn hoặc đổi đáp án: NẾU CHƯA BẤM "XEM KẾT QUẢ", KHÔNG HIỆN ĐÚNG SAI!
  AppState.revealedQuestions.delete(qId);
  saveState();

  const qData = QUESTION_LIST.find(q => q.id === qId);

  // Chỉ đánh dấu đáp án đang chọn (selected), TUYỆT ĐỐI KHÔNG hiện màu xanh / đỏ
  document.querySelectorAll(`[data-qid="${qId}"]`).forEach(opt => {
    const optKey = opt.getAttribute('data-key');
    opt.classList.remove('selected', 'correct-choice', 'wrong-choice');
    if (optKey === key) {
      opt.classList.add('selected');
    }
  });

  // Cập nhật câu hỏi điền từ vào ô trống (màu tím trung tính) và khung dịch
  if (qData) {
    const formattedHtml = renderQuestionContentHtml(qData);
    document.querySelectorAll(`[id="qtext-${qId}"]`).forEach(el => {
      el.innerHTML = formattedHtml;
    });
    // Chỉ cập nhật nội dung trans-box nếu đang mở, không render word breakdown
    document.querySelectorAll(`[id="trans-${qId}"]`).forEach(el => {
      const isOpen = el.classList.contains('show');
      el.innerHTML = renderTranslationBoxContent(qData, isOpen);
    });
  }

  // Đánh dấu ô câu hỏi là đã trả lời (answered), KHÔNG hiện viền xanh / đỏ
  document.querySelectorAll(`#qbox-${qId}`).forEach(box => {
    box.classList.add('answered');
    box.classList.remove('correct', 'incorrect');
  });

  // Ẩn giải thích chi tiết vì chưa bấm nút Xem kết quả
  document.querySelectorAll(`#exp-${qId}`).forEach(exp => exp.classList.remove('show'));

  // Reset nút Xem kết quả về trạng thái sẵn sàng
  document.querySelectorAll(`[id="btn-check-${qId}"]`).forEach(btn => {
    btn.className = 'btn-audio-action btn-check-mcq';
    btn.innerHTML = '🔍 Xem kết quả';
  });

  updateQuestionNav();
  updateProgressCounters();
}

// Bấm nút "Xem kết quả" để kiểm tra đúng/sai và hiện giải thích
function checkMCQResult(qId) {
  const selectedKey = AppState.userAnswers[qId];
  if (!selectedKey) {
    alert("Vui lòng chọn một đáp án (A, B, C hoặc D) trước khi xem kết quả!");
    return;
  }

  const qData = QUESTION_LIST.find(q => q.id === qId);
  if (!qData) return;

  const isCorrect = selectedKey === qData.correctAnswer;
  AppState.revealedQuestions.add(qId);
  saveState();

  // Đổi màu các đáp án: đáp án chọn đúng -> xanh, sai -> đỏ, đáp án chuẩn -> xanh
  document.querySelectorAll(`[data-qid="${qId}"]`).forEach(opt => {
    const optKey = opt.getAttribute('data-key');
    opt.classList.remove('correct-choice', 'wrong-choice');

    if (optKey === selectedKey) {
      opt.classList.add(isCorrect ? 'correct-choice' : 'wrong-choice');
    }
    if (!isCorrect && optKey === qData.correctAnswer) {
      opt.classList.add('correct-choice');
    }
  });

  // Cập nhật câu hỏi điền từ (badge chuyển màu xanh/đỏ) và khung dịch
  const formattedHtml = renderQuestionContentHtml(qData);
  document.querySelectorAll(`[id="qtext-${qId}"]`).forEach(el => {
    el.innerHTML = formattedHtml;
  });
  // Chỉ render word breakdown nếu trans-box đang mở
  document.querySelectorAll(`[id="trans-${qId}"]`).forEach(el => {
    const isOpen = el.classList.contains('show');
    el.innerHTML = renderTranslationBoxContent(qData, isOpen);
  });

  // Đổi màu viền câu hỏi: xanh nếu đúng, đỏ nếu sai
  document.querySelectorAll(`#qbox-${qId}`).forEach(box => {
    box.classList.remove('correct', 'incorrect');
    box.classList.add(isCorrect ? 'correct' : 'incorrect');
  });

  // Hiển thị khung giải thích chi tiết
  document.querySelectorAll(`#exp-${qId}`).forEach(exp => exp.classList.add('show'));

  // Cập nhật nút Xem kết quả sang trạng thái đã xem
  document.querySelectorAll(`[id="btn-check-${qId}"]`).forEach(btn => {
    btn.className = `btn-audio-action btn-check-mcq revealed ${isCorrect ? 'correct' : 'wrong'}`;
    btn.innerHTML = isCorrect ? '✅ Đã xem (Đúng)' : '❌ Đã xem (Sai)';
  });

  updateQuestionNav();
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
  // Đọc từ DOM trước, nếu rỗng thì đọc từ state đã lưu
  const userText = ((inputEl ? inputEl.value : '') || AppState.userAnswers[qId] || '').trim();

  if (!userText) {
    // Hiện lỗi inline thay vì alert popup
    const feedbackEls = document.querySelectorAll(`#feedback-${qId}`);
    feedbackEls.forEach(fb => {
      fb.className = 'transform-feedback show error';
      fb.innerHTML = '⚠️ <strong>Vui lòng nhập câu trả lời trước!</strong> Hãy gõ vào ô bên trên rồi bấm Kiểm tra.';
    });
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

// Xem đáp án trực tiếp (không cần nhập)
function revealSentenceAnswer(qId) {
  const qData = EXAM_DATA.sentenceTransformations.find(q => q.id === qId);
  if (!qData) return;

  // Hiện box đáp án chuẩn
  document.querySelectorAll(`#exp-${qId}`).forEach(exp => exp.classList.add('show'));

  // Hiện feedback thông báo đã xem đáp án
  document.querySelectorAll(`#feedback-${qId}`).forEach(fb => {
    fb.className = 'transform-feedback show reveal';
    fb.innerHTML = `👁 <strong>Đáp án chuẩn:</strong> <em>${escapeHtml(qData.prefix)} ${escapeHtml(qData.modelAnswer)}</em>
      <button type="button" class="btn-opt-audio" style="margin-left:8px;" onclick="speakSmart('${escapeHtml(qData.modelAnswer).replace(/'/g, "\\'")}','en-US')" title="Nghe đọc đáp án">🔊</button>
      <br><small style="color:var(--text-muted);">📖 Ngữ pháp: ${escapeHtml(qData.grammarPoint)}</small>`;
  });

  // Đặt cursor vào input nếu chưa điền
  const inputEl = document.getElementById(`input-${qId}`);
  if (inputEl && !inputEl.value.trim()) {
    inputEl.focus();
  }
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
    const isRevealed = AppState.isSubmitted || (AppState.revealedQuestions && AppState.revealedQuestions.has(qId));
    const qData = QUESTION_LIST.find(q => q.id === qId);
    const isCorrect = qData && val === qData.correctAnswer;

    // Trắc nghiệm
    document.querySelectorAll(`[data-qid="${qId}"][data-key="${val}"]`).forEach(opt => {
      opt.classList.add('selected');
      if (isRevealed) {
        opt.classList.add(isCorrect ? 'correct-choice' : 'wrong-choice');
      }
    });

    if (isRevealed && !isCorrect && qData && qData.type === 'mcq') {
      document.querySelectorAll(`[data-qid="${qId}"][data-key="${qData.correctAnswer}"]`).forEach(opt => {
        opt.classList.add('correct-choice');
      });
    }

    if (qData && qData.type === 'mcq') {
      document.querySelectorAll(`[id="qtext-${qId}"]`).forEach(el => {
        el.innerHTML = renderQuestionContentHtml(qData);
      });
      // Không render word breakdown khi restore (tránh chậm)
      document.querySelectorAll(`[id="trans-${qId}"]`).forEach(el => {
        el.innerHTML = renderTranslationBoxContent(qData, false);
      });
      if (isRevealed) {
        document.querySelectorAll(`[id="btn-check-${qId}"]`).forEach(btn => {
          btn.className = `btn-audio-action btn-check-mcq revealed ${isCorrect ? 'correct' : 'wrong'}`;
          btn.innerHTML = isCorrect ? '✅ Đã xem (Đúng)' : '❌ Đã xem (Sai)';
        });
        document.querySelectorAll(`#exp-${qId}`).forEach(exp => exp.classList.add('show'));
      }
    }

    // Tự luận
    document.querySelectorAll(`#input-${qId}`).forEach(inp => {
      inp.value = val;
    });

    document.querySelectorAll(`#qbox-${qId}`).forEach(box => {
      box.classList.add('answered');
      if (isRevealed && qData && qData.type === 'mcq') {
        box.classList.add(isCorrect ? 'correct' : 'incorrect');
      }
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
    const isRevealed = AppState.isSubmitted || (AppState.revealedQuestions && AppState.revealedQuestions.has(q.id));

    let statusClass = '';
    if (isRevealed) {
      const isCorrect = checkQuestionCorrect(q);
      statusClass = isCorrect ? 'correct' : 'incorrect';
    } else if (isFlagged) {
      statusClass = 'flagged';
    } else if (isAnswered) {
      statusClass = 'answered';
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
    const isRevealed = AppState.isSubmitted || (AppState.revealedQuestions && AppState.revealedQuestions.has(q.id));

    btn.className = 'q-nav-btn';
    if (isRevealed) {
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
  AppState.revealedQuestions.clear();
  AppState.flagged.clear();
  AppState.isSubmitted = false;
  AppState.timerSeconds = 30 * 60;
  localStorage.removeItem('tienganh_answers');
  localStorage.removeItem('tienganh_revealed');
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

  container.innerHTML = EXAM_DATA.vocabulary.map(v => {
    const pronData = typeof getWordPronounceData === 'function' ? getWordPronounceData(v.word) : { ipa: v.ipa, readingVi: '' };
    return `
      <div class="vocab-card" data-word="${v.word.toLowerCase()}" data-meaning="${v.meaning.toLowerCase()}">
        <div>
          <div class="vocab-word-row">
            <span class="vocab-word" onclick="speakWord('${escapeHtml(v.word)}')" style="cursor:pointer;" title="Bấm nghe phát âm tiếng Anh: ${escapeHtml(v.word)}">${escapeHtml(v.word)}</span>
            <div style="display: flex; gap: 4px;">
              <button class="btn-speak" onclick="speakWord('${escapeHtml(v.word)}')" title="Phát âm tiếng Anh">🔊</button>
              <button class="btn-speak" onclick="speakViWord('${escapeHtml(v.meaning)}')" title="Đọc nghĩa tiếng Việt" style="background: #fdf4ff; border-color: #d946ef; color: #a21caf;">🗣️</button>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span class="vocab-ipa">${escapeHtml(v.ipa)}</span>
            <span class="vocab-pos">(${escapeHtml(v.pos)})</span>
          </div>
          ${pronData.readingVi ? `
            <div class="vocab-vi-pronounce" onclick="showWordPronounceDetail('${escapeHtml(v.word)}')" title="Bấm để xem hướng dẫn cách đọc chi tiết">
              🗣️ Đọc tiếng Việt: <strong>[${escapeHtml(pronData.readingVi)}]</strong> 🔍
            </div>
          ` : ''}
          <div class="vocab-meaning" onclick="speakViWord('${escapeHtml(v.meaning)}')" style="cursor:pointer;" title="Bấm nghe nghĩa tiếng Việt: ${escapeHtml(v.meaning)}">${escapeHtml(v.meaning)}</div>
        </div>
        <div class="vocab-example" onclick="speakSmart('${escapeHtml(v.example).replace(/'/g, "\\'")}', 'en-US')" style="cursor:pointer;" title="Bấm nghe câu ví dụ tiếng Anh">"${escapeHtml(v.example)}"</div>
      </div>
    `;
  }).join('');
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

// Phát âm bản dịch Tiếng Việt của lựa chọn trắc nghiệm (Tức thì 0ms, không độ trễ)
function speakOptionVi(optText) {
  if (!optText) return;
  if (optText === '∅') {
    speakSmart("Không điền từ", 'vi-VN');
    return;
  }

  // 1. Tra cứu nhanh từ điển dịch lựa chọn (tức thời)
  const trans = getOptionTranslation(optText);
  if (trans) {
    const cleanVi = trans.split('/')[0].replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '').trim();
    if (cleanVi) {
      speakSmart(cleanVi, 'vi-VN');
      return;
    }
  }

  // 2. Tra cứu nhanh từ điển từ vựng
  let meaning = getWordMeaning(optText);
  if (meaning && meaning !== '(tên riêng)') {
    const cleanVi = meaning.split('/')[0].replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '').trim();
    if (cleanVi) {
      speakSmart(cleanVi, 'vi-VN');
      return;
    }
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

// Bật / tắt hiển thị bản dịch của 1 câu (lazy render word breakdown khi mở lần đầu)
function toggleTranslation(qId) {
  document.querySelectorAll(`#trans-${qId}`).forEach(box => {
    const wasOpen = box.classList.contains('show');
    box.classList.toggle('show');
    // Lazy render word breakdown lần đầu khi mở
    if (!wasOpen && !box.dataset.breakdownRendered) {
      // MCQ questions
      const qData = QUESTION_LIST.find(q => q.id === qId);
      if (qData) {
        box.innerHTML = renderTranslationBoxContent(qData, true);
        box.dataset.breakdownRendered = '1';
      } else {
        // Writing transform questions: render placeholder
        const placeholder = box.querySelector('.writing-breakdown-placeholder');
        if (placeholder) {
          const sentence = placeholder.getAttribute('data-sentence') || '';
          placeholder.innerHTML = renderWordBreakdownHtml(sentence);
          box.dataset.breakdownRendered = '1';
        }
      }
    }
  });
}

// Bật / tắt hiển thị tất cả bản dịch trên toàn trang
function toggleAllTranslations() {
  const boxes = document.querySelectorAll('.translation-box');
  const anyHidden = Array.from(boxes).some(b => !b.classList.contains('show'));
  boxes.forEach(b => {
    b.classList.toggle('show', anyHidden);
    // Lazy render word breakdown lần đầu khi mở
    if (anyHidden && !b.dataset.breakdownRendered) {
      const qId = b.id ? b.id.replace('trans-', '') : null;
      if (qId) {
        const qData = QUESTION_LIST.find(q => q.id === qId);
        if (qData) {
          b.innerHTML = renderTranslationBoxContent(qData, true);
          b.dataset.breakdownRendered = '1';
        }
      }
    }
  });
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
    if (qData.signText) {
      // Đối với câu hỏi biển báo: Đọc chính xác nội dung trong ô biển báo trước
      let signSpeech = qData.signText;
      if (completed.hasSelection) {
        signSpeech += `. Selected answer: ${completed.selectedText}.`;
      }
      speakSmart(signSpeech, 'en-US');
      return;
    }

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
      const optMeaning = getOptionTranslation(completed.selectedText) || getWordMeaning(completed.selectedText);
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
  const pTitle = EXAM_DATA.readingPassageBTitle || 'MY BEST FRIEND';
  // Strip leading title line if present (e.g. "MY BEST FRIEND\n") for clean display
  const passageText = (EXAM_DATA.readingTonyPassage || '').replace(/^[A-ZÀÁÂĂẠẢẤẦẨẪẬẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ ]+\n/, '');
  const translationText = (EXAM_DATA.readingTonyTranslation || '').replace(/^[A-ZÀÁÂĂẠẢẤẦẨẪẬẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ &]+\n/, '');
  return `
    <div class="passage-card" id="passage-card-${cardId}">
      <div class="passage-header-flex">
        <div class="passage-title">📖 BÀI ĐỌC: ${escapeHtml(pTitle)}</div>
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
        ${escapeHtml(passageText)}
      </div>

      <div class="passage-translation-box" id="trans-passage-${cardId}" style="display: none;">
        <div class="passage-trans-header">
          <strong>🇻🇳 BẢN DỊCH TIẾNG VIỆT TOÀN VĂN:</strong>
        </div>
        <div class="passage-trans-body">
          ${escapeHtml(translationText)}
        </div>
      </div>
    </div>
  `;
}

// Render HTML thẻ bài đọc Anna kèm thanh công cụ Dịch & Phát âm
function renderAnnaPassageCardHtml(cardId = 'anna') {
  const pTitle = EXAM_DATA.readingPassageCTitle || 'ĐIỀN TỪ VÀO ĐOẠN VĂN';
  return `
    <div class="passage-card" id="passage-card-${cardId}">
      <div class="passage-header-flex">
        <div class="passage-title">📖 ĐOẠN VĂN ĐIỀN TỪ: ${escapeHtml(pTitle)}</div>
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
    const raw = (lang === 'en') ? (EXAM_DATA.readingTonyPassage || '') : (EXAM_DATA.readingTonyTranslation || '');
    // Strip optional leading all-caps title line
    text = raw.replace(/^[A-ZÀÁÂĂẠẢẤẦẨẪẬẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ &]+\n/, '');
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
  if (sampleEl && EXAM_DATA.speakingCard) {
    sampleEl.innerHTML = `
      <div style="margin-bottom: 12px; line-height: 1.6;">${escapeHtml(EXAM_DATA.speakingCard.sample)}</div>
      ${EXAM_DATA.speakingCard.sampleTranslation ? `
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--border-color); color: var(--text-secondary); font-style: normal; font-size: 0.95rem;">
          <strong>🇻🇳 Dịch Tiếng Việt bài mẫu:</strong><br>${escapeHtml(EXAM_DATA.speakingCard.sampleTranslation)}
        </div>
      ` : ''}
    `;
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
          ${q.options.map(opt => {
            return `
              <div class="option-item" onclick="this.classList.toggle('selected')">
                <div class="option-key">${opt.key}</div>
                <div class="option-content">
                  <div class="option-text">${escapeHtml(opt.text)}</div>
                </div>
                <div style="display: flex; gap: 6px; align-items: center; flex-shrink: 0;">
                  <button type="button" class="btn-opt-audio" onclick="event.stopPropagation(); speakSmart('${escapeHtml(opt.text).replace(/'/g, "\\'")}', 'en-US')" title="Nghe tiếng Anh: ${opt.key}">🔊</button>
                  <button type="button" class="btn-opt-audio btn-opt-vi" onclick="event.stopPropagation(); speakOptionVi('${escapeHtml(opt.text).replace(/'/g, "\\'")}')" title="Nghe tiếng Việt: ${opt.key}">🗣️</button>
                </div>
              </div>
            `;
          }).join('')}
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
