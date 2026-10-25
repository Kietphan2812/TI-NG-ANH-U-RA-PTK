const fs = require('fs');
const path = require('path');
const speakingCards = require('./speaking_cards_data.js');

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Generate HTML for all 10 speaking cards
function generateSpeakingCardsHTML() {
  let cardsHtml = `
  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- 🎴 PHẦN 3: BỘ 10 SPEAKING CARDS LUYỆN NÓI THEO CHỦ ĐỀ       -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <section class="speaking-cards-section" id="section-speaking-cards">
    <div class="speaking-cards-header">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:1.8rem;">🎴</span>
        <div>
          <div class="speaking-cards-title">
            BỘ 10 SPEAKING CARDS LUYỆN NÓI THEO CHỦ ĐỀ
            <span>Speaking Cards 1–10: Bài nói tiếng Anh kèm bản dịch tiếng Việt &amp; Cách đọc phát âm</span>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
        <span class="intro-badge" style="background:rgba(124,58,237,0.25);border-color:rgba(168,85,247,0.5);color:#d8b4fe">
          10 Thẻ · 73 Câu Hỏi &amp; Đáp
        </span>
        <button class="btn-action-primary" style="padding:7px 16px;font-size:0.8rem" onclick="speakAllSpeakingCards()">
          ▶ Đọc tuần tự 10 Thẻ
        </button>
      </div>
    </div>

    <!-- Quick Card Selector Navigation Bar -->
    <div class="card-nav-container" id="card-nav-container">
      <button class="card-nav-pill active" onclick="filterSpeakingCard('all', this)">
        <span>✨</span> Tất cả 10 Thẻ
      </button>
`;

  speakingCards.forEach(card => {
    cardsHtml += `      <button class="card-nav-pill" onclick="filterSpeakingCard(${card.num}, this)">
        <span>${card.icon}</span> Thẻ ${card.num}: ${escapeHtml(card.titleEn.replace('Talk about your ', '').replace('Talk about the ', '').replace('Talk about ', ''))}
      </button>\n`;
  });

  cardsHtml += `    </div>\n\n    <div id="speaking-cards-list">\n`;

  speakingCards.forEach(card => {
    cardsHtml += `
      <!-- ── SPEAKING CARD NO.${card.num} ── -->
      <div class="speaking-card-box" id="speaking-box-${card.num}" data-card-num="${card.num}">
        <div class="speaking-box-header" onclick="toggleSpeakingCard(${card.num})">
          <div class="speaking-box-header-left">
            <div class="speaking-box-icon">${card.icon}</div>
            <div>
              <div class="speaking-box-title">
                Speaking Card – No.${card.num}: ${escapeHtml(card.titleEn)}
                <span>Thẻ nói số ${card.num}: ${escapeHtml(card.titleVi)}</span>
              </div>
            </div>
          </div>
          <div class="speaking-box-actions" onclick="event.stopPropagation()">
            <span class="qa-badge" style="background:${card.badgeColor};border-color:${card.borderColor};color:#fff">
              ${card.items.length} câu hỏi &amp; đáp
            </span>
            <button class="btn-play-card" onclick="speakSpeakingCard(${card.num})" title="Nghe đọc tự động lần lượt thẻ này">
              ▶ Nghe đọc Thẻ này
            </button>
            <button class="btn-toggle-card" id="btn-toggle-card-${card.num}" onclick="toggleSpeakingCard(${card.num})" title="Thu gọn / Mở rộng">
              ▼ Thu gọn
            </button>
          </div>
        </div>

        <div class="speaking-box-body" id="speaking-box-body-${card.num}">
`;

    card.items.forEach((item, idx) => {
      const itemId = `speaking-item-${card.num}-${item.qNum}`;
      cardsHtml += `
          <!-- Q&A Item ${item.qNum} -->
          <div class="qa-item-card speaking-card-item" id="${itemId}" data-card-num="${card.num}" data-search="${escapeHtml(item.search)}">
            <div class="qa-card-header">
              <span class="qa-badge" style="background:${card.badgeColor};border-color:${card.borderColor}">CÂU ${item.qNum < 10 ? '0' + item.qNum : item.qNum} / ${card.items.length}</span>
              <span class="qa-group-tag">${card.icon} Thẻ ${card.num}: ${escapeHtml(card.tag)}</span>
            </div>
            <div class="q-block">
              <div class="q-label">❓ Q – CÂU HỎI</div>
              <div class="entry-en" onclick="speakCardItem(${card.num}, ${idx}, 'q')">${item.qNum}. ${escapeHtml(item.qEn)}</div>
              <div class="entry-phonetic">${escapeHtml(item.qPhonetic)}</div>
              <div class="entry-vi">${escapeHtml(item.qVi)}</div>
              <div class="tts-row">
                <button class="tts-btn tts-en" onclick="speakCardItem(${card.num}, ${idx}, 'q')">🔊 Nghe câu hỏi EN</button>
                <button class="tts-btn tts-vi" onclick="speakCardItem(${card.num}, ${idx}, 'q', 'vi')">🗣️ Nghe VI</button>
              </div>
            </div>
            <div class="a-block">
              <div class="a-label">💡 A – TRẢ LỜI</div>
              <div class="entry-en" onclick="speakCardItem(${card.num}, ${idx}, 'a')">${escapeHtml(item.aEn)}</div>
              <div class="entry-phonetic">${escapeHtml(item.aPhonetic)}</div>
              <div class="entry-vi">${escapeHtml(item.aVi)}</div>
              <div class="tts-row">
                <button class="tts-btn tts-en" onclick="speakCardItem(${card.num}, ${idx}, 'a')">🔊 Nghe câu trả lời EN</button>
                <button class="tts-btn tts-vi" onclick="speakCardItem(${card.num}, ${idx}, 'a', 'vi')">🗣️ Nghe VI</button>
              </div>
            </div>
          </div>
`;
    });

    cardsHtml += `        </div>\n      </div>\n`;
  });

  cardsHtml += `    </div>\n  </section>\n`;
  return cardsHtml;
}

// Read current self-intro.html to extract the parts we want to keep
const originalHtml = fs.readFileSync('self-intro.html', 'utf8');

// Build the CSS addition
const speakingCardsCSS = `
/* ── SPEAKING CARDS MASTER SECTION ── */
.speaking-cards-section {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
.speaking-cards-header {
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(249,115,22,0.15) 100%);
}
.speaking-cards-title {
  font-size: 1.18rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.3px;
}
.speaking-cards-title span {
  display: block;
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--text-muted);
  margin-top: 3px;
}
/* Quick Card Selector Navigation Bar */
.card-nav-container {
  padding: 14px 20px;
  background: rgba(0,0,0,0.22);
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
}
.card-nav-container::-webkit-scrollbar { height: 6px; }
.card-nav-container::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.18); border-radius: 4px; }
.card-nav-pill {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 7px 14px;
  border-radius: 30px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.card-nav-pill:hover, .card-nav-pill.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-color: var(--primary-light);
  color: #fff;
  box-shadow: 0 2px 12px rgba(124,58,237,0.4);
}
/* Individual Speaking Card Box */
.speaking-card-box {
  margin: 20px;
  background: rgba(255,255,255,0.018);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.25s;
}
.speaking-card-box:hover {
  border-color: rgba(168,85,247,0.35);
  box-shadow: 0 4px 24px rgba(0,0,0,0.35);
}
.speaking-card-box.speaking {
  border-color: #f59e0b !important;
  box-shadow: 0 0 25px rgba(245,158,11,0.28);
}
.speaking-box-header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  cursor: pointer;
  user-select: none;
}
.speaking-box-header:hover {
  background: rgba(255,255,255,0.05);
}
.speaking-box-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.speaking-box-icon {
  font-size: 1.6rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.06);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  flex-shrink: 0;
}
.speaking-box-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
}
.speaking-box-title span {
  display: block;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  margin-top: 2px;
}
.speaking-box-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-play-card {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff;
  border: none;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.77rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-play-card:hover {
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  transform: translateY(-1px);
}
.btn-toggle-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.77rem;
  font-weight: 600;
  cursor: pointer;
}
.btn-toggle-card:hover {
  color: #fff;
  background: rgba(255,255,255,0.12);
}
.speaking-box-body {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.speaking-card-box.collapsed .speaking-box-body {
  display: none;
}
.speaking-card-box.collapsed .speaking-box-header {
  border-bottom: none;
}
`;

// Build the JS addition
const speakingCardsJS = `
// ── SPEAKING CARDS DATA & PLAYBACK ENGINE ──
var speakingCardsData = ${JSON.stringify(speakingCards, null, 2)};

// Helper to speak item by card number and item index
function speakCardItem(cardNum, itemIdx, type, lang) {
  var card = speakingCardsData.find(function(c) { return c.num === cardNum; });
  if (!card || !card.items[itemIdx]) return;
  var it = card.items[itemIdx];

  if (lang === 'vi') {
    var viText = type === 'q' ? it.qVi : it.aVi;
    speakVi(viText);
  } else {
    var enText = type === 'q' ? it.qEn : it.aEn;
    speakEn(enText);
  }
}

// Toggle collapse/expand of a speaking card
function toggleSpeakingCard(cardNum) {
  var box = document.getElementById('speaking-box-' + cardNum);
  var btn = document.getElementById('btn-toggle-card-' + cardNum);
  if (!box) return;
  box.classList.toggle('collapsed');
  if (btn) {
    btn.textContent = box.classList.contains('collapsed') ? '▶ Mở rộng' : '▼ Thu gọn';
  }
}

// Filter specific speaking card or view all
function filterSpeakingCard(cardNum, btnEl) {
  document.querySelectorAll('.card-nav-pill').forEach(function(p) { p.classList.remove('active'); });
  if (btnEl) btnEl.classList.add('active');

  var allBoxes = document.querySelectorAll('.speaking-card-box');
  if (cardNum === 'all') {
    allBoxes.forEach(function(b) {
      b.style.display = 'block';
      b.classList.remove('collapsed');
      var bNum = b.getAttribute('data-card-num');
      var btn = document.getElementById('btn-toggle-card-' + bNum);
      if (btn) btn.textContent = '▼ Thu gọn';
    });
  } else {
    allBoxes.forEach(function(b) {
      if (parseInt(b.getAttribute('data-card-num')) === cardNum) {
        b.style.display = 'block';
        b.classList.remove('collapsed');
        var btn = document.getElementById('btn-toggle-card-' + cardNum);
        if (btn) btn.textContent = '▼ Thu gọn';
        b.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        b.style.display = 'none';
      }
    });
  }
}

// Autoplay a single speaking card
function speakSpeakingCard(cardNum) {
  var card = speakingCardsData.find(function(c) { return c.num === cardNum; });
  if (!card) return;

  stopSpeaking();
  isSpeaking = true;

  // Make sure the card is visible and expanded
  var box = document.getElementById('speaking-box-' + cardNum);
  if (box) {
    box.style.display = 'block';
    box.classList.remove('collapsed');
    var btn = document.getElementById('btn-toggle-card-' + cardNum);
    if (btn) btn.textContent = '▼ Thu gọn';
  }

  var pCard = document.getElementById('progress-card');
  var pTitle = document.getElementById('progress-title');
  var pStatus = document.getElementById('progress-status');
  var pFill = document.getElementById('progress-fill');
  pCard.style.display = 'block';
  pTitle.textContent = '🎴 Thẻ ' + card.num + ': ' + card.titleEn;

  var idx = 0;
  var total = card.items.length;

  function next() {
    if (!isSpeaking || idx >= total) {
      isSpeaking = false;
      pStatus.textContent = '✅ Đã đọc xong Thẻ số ' + card.num + '!';
      pFill.style.width = '100%';
      document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
      setTimeout(function() { if (!isSpeaking) pCard.style.display = 'none'; }, 3000);
      return;
    }

    document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
    var itemEl = document.getElementById('speaking-item-' + card.num + '-' + card.items[idx].qNum);
    if (itemEl) {
      itemEl.classList.add('speaking');
      itemEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    pFill.style.width = ((idx / total) * 100) + '%';
    pStatus.textContent = 'Thẻ ' + card.num + ' · Câu ' + (idx + 1) + '/' + total + ': Đang đọc câu hỏi...';

    // Đọc câu hỏi tiếng Anh
    speakEn(card.items[idx].qEn, true, function() {
      if (!isSpeaking) return;
      pStatus.textContent = 'Thẻ ' + card.num + ' · Câu ' + (idx + 1) + '/' + total + ': Đang đọc câu trả lời...';
      autoplayTimer = setTimeout(function() {
        if (!isSpeaking) return;
        // Đọc câu trả lời tiếng Anh
        speakEn(card.items[idx].aEn, true, function() {
          idx++;
          autoplayTimer = setTimeout(next, 900);
        });
      }, 500);
    });
  }
  next();
}

// Autoplay all 10 speaking cards in sequence
function speakAllSpeakingCards() {
  stopSpeaking();
  isSpeaking = true;

  var pCard = document.getElementById('progress-card');
  var pTitle = document.getElementById('progress-title');
  var pStatus = document.getElementById('progress-status');
  var pFill = document.getElementById('progress-fill');
  pCard.style.display = 'block';
  pTitle.textContent = '🎴 Đang đọc tự động Bộ 10 Speaking Cards';

  // Flatten all items across 10 cards
  var allList = [];
  speakingCardsData.forEach(function(c) {
    c.items.forEach(function(item) {
      allList.push({ cardNum: c.num, cardTitle: c.titleEn, item: item });
    });
  });

  var idx = 0;
  var total = allList.length;

  function next() {
    if (!isSpeaking || idx >= total) {
      isSpeaking = false;
      pStatus.textContent = '✅ Đã đọc xong toàn bộ 10 Speaking Cards!';
      pFill.style.width = '100%';
      document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
      setTimeout(function() { if (!isSpeaking) pCard.style.display = 'none'; }, 4000);
      return;
    }

    var curr = allList[idx];
    document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });

    // Make sure its card box is visible & expanded
    var box = document.getElementById('speaking-box-' + curr.cardNum);
    if (box) {
      box.style.display = 'block';
      box.classList.remove('collapsed');
    }

    var itemEl = document.getElementById('speaking-item-' + curr.cardNum + '-' + curr.item.qNum);
    if (itemEl) {
      itemEl.classList.add('speaking');
      itemEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    pFill.style.width = ((idx / total) * 100) + '%';
    pStatus.textContent = 'Thẻ ' + curr.cardNum + ' · Câu ' + curr.item.qNum + ' (' + (idx + 1) + '/' + total + '): Đang đọc câu hỏi...';

    speakEn(curr.item.qEn, true, function() {
      if (!isSpeaking) return;
      pStatus.textContent = 'Thẻ ' + curr.cardNum + ' · Câu ' + curr.item.qNum + ' (' + (idx + 1) + '/' + total + '): Đang đọc câu trả lời...';
      autoplayTimer = setTimeout(function() {
        if (!isSpeaking) return;
        speakEn(curr.item.aEn, true, function() {
          idx++;
          autoplayTimer = setTimeout(next, 900);
        });
      }, 500);
    });
  }
  next();
}
`;

// Modify the HTML content
let newHtml = originalHtml;

// 1. Add CSS before </style>
newHtml = newHtml.replace('</style>', `${speakingCardsCSS}\n</style>`);

// 2. Add toolbar button and filter tab
const oldToolbarBtns = `<button class="btn-action-purple" onclick="speak15QA()" title="Nghe đọc tự động lần lượt 15 câu hỏi và câu trả lời">
      🔊 Đọc toàn bộ 15 câu Q&A
    </button>`;

const newToolbarBtns = `<button class="btn-action-purple" onclick="speak15QA()" title="Nghe đọc tự động lần lượt 15 câu hỏi và câu trả lời">
      🔊 Đọc 15 câu Q&A
    </button>
    <button class="btn-action-primary" style="background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff" onclick="speakAllSpeakingCards()" title="Nghe đọc tự động lần lượt 10 Thẻ Nói Speaking Cards">
      🎴 Đọc 10 Speaking Cards
    </button>`;

newHtml = newHtml.replace(oldToolbarBtns, newToolbarBtns);

// Add filter tab for Speaking Cards
const oldFilterTabs = `<button class="tab-pill" onclick="filterCategory('intro', this)">🌟 Giới thiệu (7 câu)</button>`;
const newFilterTabs = `<button class="tab-pill" onclick="filterCategory('intro', this)">🌟 Giới thiệu (7 câu)</button>
      <button class="tab-pill" onclick="filterCategory('cards', this)">🎴 10 Speaking Cards (1-10)</button>
      <button class="tab-pill" onclick="filterCategory('exam15', this)">🎯 15 câu Q&A Vấn Đáp</button>`;

newHtml = newHtml.replace(oldFilterTabs, newFilterTabs);

// 3. Insert the 10 Speaking Cards section right before the collapsible advanced section
const collapsibleHeader = `<!-- ══════════════════════════════════════════════════════════ -->\n  <!-- 📚 PHẦN 3: NỘI DUNG MỞ RỘNG (Gia đình, Ngoại hình, Ước mơ)  -->`;
const speakingCardsContent = generateSpeakingCardsHTML();

if (newHtml.includes(collapsibleHeader)) {
  newHtml = newHtml.replace(collapsibleHeader, `${speakingCardsContent}\n  ${collapsibleHeader}`);
} else {
  // If exact string not found, insert before id="collapsible-advanced"
  newHtml = newHtml.replace('<div class="collapsible-wrapper" id="collapsible-advanced">', `${speakingCardsContent}\n  <div class="collapsible-wrapper" id="collapsible-advanced">`);
}

// 4. Update filterCategory and handleSearch in JS
const oldFilterCategoryCode = `function filterCategory(cat, btnEl) {
  document.querySelectorAll('.tab-pill').forEach(function(b) { b.classList.remove('active'); });
  if (btnEl) btnEl.classList.add('active');

  var introSec = document.getElementById('section-intro');
  var qaCards = document.querySelectorAll('.qa-item-card');
  var examSec = document.getElementById('section-15-qa');

  if (cat === 'all') {
    if (introSec) introSec.style.display = 'block';
    if (examSec) examSec.style.display = 'block';
    qaCards.forEach(function(c) { c.style.display = 'block'; });
  } else if (cat === 'intro') {
    if (introSec) introSec.style.display = 'block';
    if (examSec) examSec.style.display = 'none';
    introSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    if (introSec) introSec.style.display = 'none';
    if (examSec) examSec.style.display = 'block';
    qaCards.forEach(function(c) {
      var grp = c.getAttribute('data-group');
      if (grp === cat) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
    examSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}`;

const newFilterCategoryCode = `function filterCategory(cat, btnEl) {
  document.querySelectorAll('.tab-pill').forEach(function(b) { b.classList.remove('active'); });
  if (btnEl) btnEl.classList.add('active');

  var introSec = document.getElementById('section-intro');
  var examSec = document.getElementById('section-15-qa');
  var cardsSec = document.getElementById('section-speaking-cards');
  var qaCards = document.querySelectorAll('#section-15-qa .qa-item-card');
  var speakingBoxes = document.querySelectorAll('.speaking-card-box');

  if (cat === 'all') {
    if (introSec) introSec.style.display = 'block';
    if (examSec) examSec.style.display = 'block';
    if (cardsSec) cardsSec.style.display = 'block';
    qaCards.forEach(function(c) { c.style.display = 'block'; });
    speakingBoxes.forEach(function(b) { b.style.display = 'block'; });
  } else if (cat === 'intro') {
    if (introSec) introSec.style.display = 'block';
    if (examSec) examSec.style.display = 'none';
    if (cardsSec) cardsSec.style.display = 'none';
    introSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (cat === 'cards') {
    if (introSec) introSec.style.display = 'none';
    if (examSec) examSec.style.display = 'none';
    if (cardsSec) cardsSec.style.display = 'block';
    speakingBoxes.forEach(function(b) { b.style.display = 'block'; });
    cardsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (cat === 'exam15') {
    if (introSec) introSec.style.display = 'none';
    if (examSec) examSec.style.display = 'block';
    if (cardsSec) cardsSec.style.display = 'none';
    qaCards.forEach(function(c) { c.style.display = 'block'; });
    examSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    if (introSec) introSec.style.display = 'none';
    if (examSec) examSec.style.display = 'block';
    if (cardsSec) cardsSec.style.display = 'none';
    qaCards.forEach(function(c) {
      var grp = c.getAttribute('data-group');
      if (grp === cat) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
    examSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}`;

newHtml = newHtml.replace(oldFilterCategoryCode, newFilterCategoryCode);

// Update handleSearch code to also search speaking cards
const oldHandleSearchCode = `function handleSearch() {
  var input = document.getElementById('search-input');
  var query = (input ? input.value : '').toLowerCase().trim();

  var introSec = document.getElementById('section-intro');
  var introItems = document.querySelectorAll('.intro-item');
  var qaCards = document.querySelectorAll('.qa-item-card');

  if (!query) {
    if (introSec) introSec.style.display = 'block';
    introItems.forEach(function(item) { item.style.display = 'block'; });
    qaCards.forEach(function(c) { c.style.display = 'block'; });
    return;
  }

  var introMatchCount = 0;
  introItems.forEach(function(item) {
    var searchStr = (item.getAttribute('data-search') || '') + ' ' + item.innerText.toLowerCase();
    if (searchStr.indexOf(query) !== -1) {
      item.style.display = 'block';
      introMatchCount++;
    } else {
      item.style.display = 'none';
    }
  });
  if (introSec) introSec.style.display = introMatchCount > 0 ? 'block' : 'none';

  qaCards.forEach(function(c) {
    var searchStr = (c.getAttribute('data-search') || '') + ' ' + c.innerText.toLowerCase();
    if (searchStr.indexOf(query) !== -1) {
      c.style.display = 'block';
    } else {
      c.style.display = 'none';
    }
  });
}`;

const newHandleSearchCode = `function handleSearch() {
  var input = document.getElementById('search-input');
  var query = (input ? input.value : '').toLowerCase().trim();

  var introSec = document.getElementById('section-intro');
  var examSec = document.getElementById('section-15-qa');
  var cardsSec = document.getElementById('section-speaking-cards');
  var introItems = document.querySelectorAll('.intro-item');
  var examQaCards = document.querySelectorAll('#section-15-qa .qa-item-card');
  var speakingBoxes = document.querySelectorAll('.speaking-card-box');

  if (!query) {
    if (introSec) introSec.style.display = 'block';
    if (examSec) examSec.style.display = 'block';
    if (cardsSec) cardsSec.style.display = 'block';
    introItems.forEach(function(item) { item.style.display = 'block'; });
    examQaCards.forEach(function(c) { c.style.display = 'block'; });
    speakingBoxes.forEach(function(box) {
      box.style.display = 'block';
      box.querySelectorAll('.speaking-card-item').forEach(function(it) { it.style.display = 'block'; });
    });
    return;
  }

  // 1. Search Intro Items
  var introMatchCount = 0;
  introItems.forEach(function(item) {
    var searchStr = (item.getAttribute('data-search') || '') + ' ' + item.innerText.toLowerCase();
    if (searchStr.indexOf(query) !== -1) {
      item.style.display = 'block';
      introMatchCount++;
    } else {
      item.style.display = 'none';
    }
  });
  if (introSec) introSec.style.display = introMatchCount > 0 ? 'block' : 'none';

  // 2. Search Exam QA Cards
  var examMatchCount = 0;
  examQaCards.forEach(function(c) {
    var searchStr = (c.getAttribute('data-search') || '') + ' ' + c.innerText.toLowerCase();
    if (searchStr.indexOf(query) !== -1) {
      c.style.display = 'block';
      examMatchCount++;
    } else {
      c.style.display = 'none';
    }
  });
  if (examSec) examSec.style.display = examMatchCount > 0 ? 'block' : 'none';

  // 3. Search Speaking Cards Items
  var totalCardsMatch = 0;
  speakingBoxes.forEach(function(box) {
    var boxMatchCount = 0;
    var items = box.querySelectorAll('.speaking-card-item');
    items.forEach(function(it) {
      var searchStr = (it.getAttribute('data-search') || '') + ' ' + it.innerText.toLowerCase();
      if (searchStr.indexOf(query) !== -1) {
        it.style.display = 'block';
        boxMatchCount++;
      } else {
        it.style.display = 'none';
      }
    });

    if (boxMatchCount > 0) {
      box.style.display = 'block';
      box.classList.remove('collapsed');
      totalCardsMatch += boxMatchCount;
    } else {
      box.style.display = 'none';
    }
  });
  if (cardsSec) cardsSec.style.display = totalCardsMatch > 0 ? 'block' : 'none';
}`;

newHtml = newHtml.replace(oldHandleSearchCode, newHandleSearchCode);

// Add the Speaking Cards JavaScript before </script>
newHtml = newHtml.replace('</script>', `${speakingCardsJS}\n</script>`);

// Write out to self-intro.html
fs.writeFileSync('self-intro.html', newHtml, 'utf8');
console.log('✅ Updated self-intro.html successfully! New size: ' + newHtml.length + ' bytes');

// Also update gen_self_intro.js so the build script stays in sync
const genContent = `const fs = require('fs');\n\nconst htmlContent = ${JSON.stringify(newHtml)};\n\nfs.writeFileSync('self-intro.html', htmlContent, 'utf8');\nconsole.log('✅ Updated self-intro.html successfully! Size: ' + htmlContent.length + ' bytes');\n`;
fs.writeFileSync('gen_self_intro.js', genContent, 'utf8');
console.log('✅ Updated gen_self_intro.js as well!');
