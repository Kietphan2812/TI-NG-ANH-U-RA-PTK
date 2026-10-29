const fs = require('fs');

let html = fs.readFileSync('self-intro.html', 'utf8');

// Section HTML for 11 sentences
const section11Html = `
  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- 🌟 PHẦN 1B: BÀI GIỚI THIỆU BẢN THÂN CHI TIẾT (11 CÂU MỚI)   -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <section class="intro-card" id="section-intro-11" data-category="intro11" style="border-color: rgba(56, 189, 248, 0.45); box-shadow: 0 8px 30px rgba(56, 189, 248, 0.15); margin-top: 10px;">
    <div class="intro-header" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(14, 165, 233, 0.15) 100%); border-bottom: 1px solid rgba(56, 189, 248, 0.3);">
      <div class="intro-header-left">
        <span class="intro-header-icon">🚀</span>
        <div>
          <div class="intro-title" style="color: #38bdf8;">
            INTRODUCE MYSELF – BẢN CHI TIẾT (11 CÂU HOÀN CHỈNH)
            <span>Bài Giới Thiệu Bản Thân Đầy Đủ: Ngành CNTT, Lớp D23CTC1, Quê Phú Hòa, Gia Đình & SĐT</span>
          </div>
        </div>
      </div>
      <div class="intro-header-actions">
        <span class="intro-badge" style="background: rgba(56, 189, 248, 0.2); border-color: rgba(56, 189, 248, 0.4); color: #7dd3fc;">11 câu hoàn chỉnh</span>
        <button class="btn-action-primary" style="background: linear-gradient(135deg, #0284c7, #06b6d4); color: #fff; padding:6px 14px; font-size:0.78rem" onclick="speakIntro11Sentences()">
          ▶ Nghe đọc 11 câu
        </button>
      </div>
    </div>

    <div class="intro-list">

      <!-- Câu 1 -->
      <div class="intro-item intro11-item" id="intro11-item-0" style="border-left-color: #38bdf8;" data-search="my name is phan tan kiet tên tôi là phan tấn kiệt">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#1</span>
          <span class="intro-en" onclick="speakEn('My name is Phan Tan Kiet.')">My name is Phan Tan Kiet.</span>
        </div>
        <div class="intro-phonetic">Mai nêm iz Phan Tấn Kiệt.</div>
        <div class="intro-vi">Tên tôi là Phan Tấn Kiệt.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('My name is Phan Tan Kiet.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tên tôi là Phan Tấn Kiệt.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 2 -->
      <div class="intro-item intro11-item" id="intro11-item-1" style="border-left-color: #38bdf8;" data-search="i'm 22 years old tôi 22 tuổi">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#2</span>
          <span class="intro-en" onclick="speakEn('I am twenty-two years old.')">I’m 22 years old.</span>
        </div>
        <div class="intro-phonetic">Ai-m twen-ti-tu ia-z ôld.</div>
        <div class="intro-vi">Tôi 22 tuổi.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I am twenty-two years old.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi 22 tuổi.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 3 -->
      <div class="intro-item intro11-item" id="intro11-item-2" style="border-left-color: #38bdf8;" data-search="i'm from phu hoa vietnam tôi quê ở phú hòa việt nam">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#3</span>
          <span class="intro-en" onclick="speakEn('I am from Phu Hoa, Vietnam.')">I’m from Phu Hoa, Vietnam.</span>
        </div>
        <div class="intro-phonetic">Ai-m phrơm Phu Hòa, Vi-ệt Nam.</div>
        <div class="intro-vi">Tôi quê ở Phú Hòa, Việt Nam.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I am from Phu Hoa, Vietnam.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi quê ở Phú Hòa, Việt Nam.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 4 -->
      <div class="intro-item intro11-item" id="intro11-item-3" style="border-left-color: #38bdf8;" data-search="there are five people in my family my parents two older brothers and me gia đình tôi có năm người ba mẹ hai anh trai và tôi">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#4</span>
          <span class="intro-en" onclick="speakEn('There are five people in my family: my parents, my two older brothers and me.')">There are five people in my family: my parents, my two older brothers and me.</span>
        </div>
        <div class="intro-phonetic">Đe-a a phai-v pi-pồ in mai phem-mơ-li: mai pe-rừn-ts, mai tu ôl-đơ brá-đơ-z en mi.</div>
        <div class="intro-vi">Gia đình tôi có năm người: ba mẹ, hai anh trai và tôi.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('There are five people in my family: my parents, my two older brothers and me.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Gia đình tôi có năm người: ba mẹ, hai anh trai và tôi.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 5 -->
      <div class="intro-item intro11-item" id="intro11-item-4" style="border-left-color: #38bdf8;" data-search="i'm a student at mien trung university of civil engineering 4 years sinh viên trường đại học xây dựng miền trung 4 năm">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#5</span>
          <span class="intro-en" onclick="speakEn('I am a student at Mien Trung University of Civil Engineering. I have studied here for 4 years.')">I’m a student at Mien Trung University of Civil Engineering. I have studied here for 4 years.</span>
        </div>
        <div class="intro-phonetic">Ai-m ơ xtiu-đần-t et Miền Trung Diu-ni-vơ-xi-ti ơv Xi-vồ En-gi-nia-rinh. Ai hev xta-địt hia pho pho ia-z.</div>
        <div class="intro-vi">Tôi là sinh viên Trường Đại học Xây dựng Miền Trung. Tôi đã học ở đây được 4 năm.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I am a student at Mien Trung University of Civil Engineering. I have studied here for four years.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi là sinh viên Trường Đại học Xây dựng Miền Trung. Tôi đã học ở đây được 4 năm.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 6 -->
      <div class="intro-item intro11-item" id="intro11-item-5" style="border-left-color: #38bdf8;" data-search="my major is information technology and my class is d23ctc1 ngành công nghệ thông tin lớp d23ctc1">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#6</span>
          <span class="intro-en" onclick="speakEn('My major is Information Technology, and my class is D23CTC1.')">My major is Information Technology, and my class is D23CTC1.</span>
        </div>
        <div class="intro-phonetic">Mai mê-giơ iz In-phơ-mê-sần Téc-nô-lơ-gi, en mai clát-s iz Đi-tu-thri-Xi-Ti-Xi-goăn.</div>
        <div class="intro-vi">Ngành của tôi là Công nghệ thông tin, lớp D23CTC1.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('My major is Information Technology, and my class is D 2 3 C T C 1.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Ngành của tôi là Công nghệ thông tin, lớp D 2 3 C T C 1.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 7 -->
      <div class="intro-item intro11-item" id="intro11-item-6" style="border-left-color: #38bdf8;" data-search="my phone number is 0338351410 zero three three eight three five one four one zero số điện thoại">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#7</span>
          <span class="intro-en" onclick="speakEn('My phone number is zero, three, three, eight, three, five, one, four, one, zero.')">My phone number is 0338351410: zero, three, three, eight, three, five, one, four, one, zero.</span>
        </div>
        <div class="intro-phonetic">Mai phôn năm-bơ iz di-rô, thri, thri, eit, thri, phai-v, goăn, pho, goăn, di-rô.</div>
        <div class="intro-vi">Số điện thoại của tôi là 0338351410: không, ba, ba, tám, ba, năm, một, bốn, một, không.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('My phone number is zero, three, three, eight, three, five, one, four, one, zero.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Số điện thoại của tôi là 0 3 3 8 3 5 1 4 1 0: không, ba, ba, tám, ba, năm, một, bốn, một, không.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 8 -->
      <div class="intro-item intro11-item" id="intro11-item-7" style="border-left-color: #38bdf8;" data-search="my hobbies are listening to music and drawing sport cycling relax exercise sở thích nghe nhạc vẽ đạp xe thư giãn">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#8</span>
          <span class="intro-en" onclick="speakEn('My hobbies are listening to music and drawing. I also play the sport of cycling because it helps me relax and exercise.')">My hobbies are listening to music and drawing. I also play the sport of cycling because it helps me relax and exercise.</span>
        </div>
        <div class="intro-phonetic">Mai hóp-bi-z a lít-sừn-inh tu miu-zic en dro-inh. Ai ôn-sâu plêi đơ xpo-t ơv xai-clinh bi-cơ-z ít help-s mi ri-léc-s en éc-xơ-xai-z.</div>
        <div class="intro-vi">Sở thích của tôi là nghe nhạc và vẽ. Tôi cũng chơi môn thể thao đạp xe vì nó giúp tôi thư giãn và tập thể dục.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('My hobbies are listening to music and drawing. I also play the sport of cycling because it helps me relax and exercise.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Sở thích của tôi là nghe nhạc và vẽ. Tôi cũng chơi môn thể thao đạp xe vì nó giúp tôi thư giãn và tập thể dục.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 9 -->
      <div class="intro-item intro11-item" id="intro11-item-8" style="border-left-color: #38bdf8;" data-search="in my free time watching youtube repairing electronic devices thời gian rảnh xem youtube sửa đồ điện tử">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#9</span>
          <span class="intro-en" onclick="speakEn('In my free time, I also like watching YouTube and repairing electronic devices.')">In my free time, I also like watching YouTube and repairing electronic devices.</span>
        </div>
        <div class="intro-phonetic">In mai phri tai-m, ai ôn-sâu lai-k goát-chinh Diu-túp en ri-pe-rinh i-léc-tró-nic đi-vai-xì-z.</div>
        <div class="intro-vi">Trong thời gian rảnh, tôi cũng thích xem YouTube và sửa đồ điện tử.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('In my free time, I also like watching YouTube and repairing electronic devices.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Trong thời gian rảnh, tôi cũng thích xem YouTube và sửa đồ điện tử.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 10 -->
      <div class="intro-item intro11-item" id="intro11-item-9" style="border-left-color: #38bdf8;" data-search="i study english because it is a popular and necessary language học tiếng anh ngôn ngữ phổ biến cần thiết">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#10</span>
          <span class="intro-en" onclick="speakEn('I study English because it is a popular and necessary language.')">I study English because it is a popular and necessary language.</span>
        </div>
        <div class="intro-phonetic">Ai xta-đi Inh-glít bi-cơ-z ít iz ơ pop-piu-lơ en né-sơ-xê-ri lang-guých.</div>
        <div class="intro-vi">Tôi học tiếng Anh vì nó là một ngôn ngữ phổ biến và cần thiết.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I study English because it is a popular and necessary language.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi học tiếng Anh vì nó là một ngôn ngữ phổ biến và cần thiết.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 11 -->
      <div class="intro-item intro11-item" id="intro11-item-10" style="border-left-color: #38bdf8;" data-search="thank you for listening cảm ơn đã lắng nghe">
        <div>
          <span class="intro-num" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">#11</span>
          <span class="intro-en" onclick="speakEn('Thank you for listening.')">Thank you for listening.</span>
        </div>
        <div class="intro-phonetic">Thanh-k diu pho lít-sừn-inh.</div>
        <div class="intro-vi">Cảm ơn đã lắng nghe.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('Thank you for listening.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Cảm ơn đã lắng nghe.')">🗣️ Nghe VI</button>
        </div>
      </div>

    </div>
  </section>
`;

// 1. Add toolbar button if not exists
const oldToolbarTarget = `<button class="btn-action-primary" onclick="speakIntro7Sentences()" title="Nghe đọc tự động lần lượt 7 câu bài giới thiệu bản thân">
      🎤 Đọc 7 câu Giới Thiệu
    </button>`;

const newToolbarTarget = `<button class="btn-action-primary" style="background:linear-gradient(135deg,#0284c7,#06b6d4);color:#fff" onclick="speakIntro11Sentences()" title="Nghe đọc tự động lần lượt 11 câu bài giới thiệu bản thân chi tiết">
      🎤 Đọc 11 câu Giới Thiệu
    </button>
    <button class="btn-action-primary" onclick="speakIntro7Sentences()" title="Nghe đọc tự động lần lượt 7 câu bài giới thiệu bản thân">
      🎤 Đọc 7 câu Giới Thiệu
    </button>`;

if (html.includes(oldToolbarTarget) && !html.includes('speakIntro11Sentences()')) {
  html = html.replace(oldToolbarTarget, newToolbarTarget);
}

// 2. Add filter tab if not exists
const oldFilterTabTarget = `<button class="tab-pill" onclick="filterCategory('intro', this)">🌟 Giới thiệu (7 câu)</button>`;
const newFilterTabTarget = `<button class="tab-pill" onclick="filterCategory('intro11', this)">🌟 Giới thiệu Mới (11 câu)</button>
      <button class="tab-pill" onclick="filterCategory('intro', this)">🌟 Giới thiệu (7 câu)</button>`;

if (html.includes(oldFilterTabTarget) && !html.includes("filterCategory('intro11'")) {
  html = html.replace(oldFilterTabTarget, newFilterTabTarget);
}

// 3. Insert Section 1B right after section-intro
const endOfSectionIntro = `  </section>\n\n  <!-- ══════════════════════════════════════════════════════════ -->\n  <!-- 🎯 PHẦN 2: 15 CÂU HỎI & TRẢ LỜI ĐÃ CẬP NHẬT THEO BẠN      -->`;

if (html.includes(endOfSectionIntro) && !html.includes('section-intro-11')) {
  html = html.replace(endOfSectionIntro, `  </section>\n${section11Html}\n  <!-- ══════════════════════════════════════════════════════════ -->\n  <!-- 🎯 PHẦN 2: 15 CÂU HỎI & TRẢ LỜI ĐÃ CẬP NHẬT THEO BẠN      -->`);
}

// 4. Add JS for 11 sentences & update filterCategory and handleSearch
const jsIntro11 = `
// ── AUTOPLAY 11 CÂU INTRODUCE MYSELF (CHI TIẾT MỚI) ──
var intro11Sentences = [
  "My name is Phan Tan Kiet.",
  "I'm twenty-two years old.",
  "I'm from Phu Hoa, Vietnam.",
  "There are five people in my family: my parents, my two older brothers and me.",
  "I'm a student at Mien Trung University of Civil Engineering. I have studied here for four years.",
  "My major is Information Technology, and my class is D23CTC1.",
  "My phone number is zero, three, three, eight, three, five, one, four, one, zero.",
  "My hobbies are listening to music and drawing. I also play the sport of cycling because it helps me relax and exercise.",
  "In my free time, I also like watching YouTube and repairing electronic devices.",
  "I study English because it is a popular and necessary language.",
  "Thank you for listening."
];

function speakIntro11Sentences() {
  stopSpeaking();
  isSpeaking = true;
  var pCard = document.getElementById('progress-card');
  var pTitle = document.getElementById('progress-title');
  var pStatus = document.getElementById('progress-status');
  var pFill = document.getElementById('progress-fill');
  pCard.style.display = 'block';
  pTitle.textContent = '🌟 Đang đọc 11 câu Giới Thiệu Bản Thân Chi Tiết';

  var idx = 0;
  var total = intro11Sentences.length;

  function next() {
    if (!isSpeaking || idx >= total) {
      isSpeaking = false;
      pStatus.textContent = '✅ Đã đọc xong toàn bộ 11 câu!';
      pFill.style.width = '100%';
      document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
      setTimeout(function() { if (!isSpeaking) pCard.style.display = 'none'; }, 3000);
      return;
    }

    document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
    var itemEl = document.getElementById('intro11-item-' + idx);
    if (itemEl) {
      itemEl.classList.add('speaking');
      itemEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    pFill.style.width = ((idx / total) * 100) + '%';
    pStatus.textContent = 'Đang đọc câu ' + (idx + 1) + '/' + total + '...';

    speakEn(intro11Sentences[idx], true, function() {
      idx++;
      autoplayTimer = setTimeout(next, 700);
    });
  }
  next();
}
`;

// Insert jsIntro11 before var introSentences
if (!html.includes('var intro11Sentences')) {
  html = html.replace('var introSentences = [', `${jsIntro11}\nvar introSentences = [`);
}

// Update filterCategory to handle 'intro11'
const targetFilterFnOld = `function filterCategory(cat, btnEl) {
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
  } else if (cat === 'cards') {`;

const targetFilterFnNew = `function filterCategory(cat, btnEl) {
  document.querySelectorAll('.tab-pill').forEach(function(b) { b.classList.remove('active'); });
  if (btnEl) btnEl.classList.add('active');

  var introSec = document.getElementById('section-intro');
  var intro11Sec = document.getElementById('section-intro-11');
  var examSec = document.getElementById('section-15-qa');
  var cardsSec = document.getElementById('section-speaking-cards');
  var qaCards = document.querySelectorAll('#section-15-qa .qa-item-card');
  var speakingBoxes = document.querySelectorAll('.speaking-card-box');

  if (cat === 'all') {
    if (introSec) introSec.style.display = 'block';
    if (intro11Sec) intro11Sec.style.display = 'block';
    if (examSec) examSec.style.display = 'block';
    if (cardsSec) cardsSec.style.display = 'block';
    qaCards.forEach(function(c) { c.style.display = 'block'; });
    speakingBoxes.forEach(function(b) { b.style.display = 'block'; });
  } else if (cat === 'intro11') {
    if (introSec) introSec.style.display = 'none';
    if (intro11Sec) intro11Sec.style.display = 'block';
    if (examSec) examSec.style.display = 'none';
    if (cardsSec) cardsSec.style.display = 'none';
    intro11Sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (cat === 'intro') {
    if (introSec) introSec.style.display = 'block';
    if (intro11Sec) intro11Sec.style.display = 'none';
    if (examSec) examSec.style.display = 'none';
    if (cardsSec) cardsSec.style.display = 'none';
    introSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (cat === 'cards') {`;

if (html.includes(targetFilterFnOld)) {
  html = html.replace(targetFilterFnOld, targetFilterFnNew);
}

// Update handleSearch to include intro11
const targetHandleSearchOld = `  var introSec = document.getElementById('section-intro');
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
  if (introSec) introSec.style.display = introMatchCount > 0 ? 'block' : 'none';`;

const targetHandleSearchNew = `  var introSec = document.getElementById('section-intro');
  var intro11Sec = document.getElementById('section-intro-11');
  var examSec = document.getElementById('section-15-qa');
  var cardsSec = document.getElementById('section-speaking-cards');
  var intro7Items = document.querySelectorAll('#section-intro .intro-item');
  var intro11Items = document.querySelectorAll('#section-intro-11 .intro-item');
  var examQaCards = document.querySelectorAll('#section-15-qa .qa-item-card');
  var speakingBoxes = document.querySelectorAll('.speaking-card-box');

  if (!query) {
    if (introSec) introSec.style.display = 'block';
    if (intro11Sec) intro11Sec.style.display = 'block';
    if (examSec) examSec.style.display = 'block';
    if (cardsSec) cardsSec.style.display = 'block';
    intro7Items.forEach(function(item) { item.style.display = 'block'; });
    intro11Items.forEach(function(item) { item.style.display = 'block'; });
    examQaCards.forEach(function(c) { c.style.display = 'block'; });
    speakingBoxes.forEach(function(box) {
      box.style.display = 'block';
      box.querySelectorAll('.speaking-card-item').forEach(function(it) { it.style.display = 'block'; });
    });
    return;
  }

  // 1. Search Intro 7 Items
  var introMatchCount = 0;
  intro7Items.forEach(function(item) {
    var searchStr = (item.getAttribute('data-search') || '') + ' ' + item.innerText.toLowerCase();
    if (searchStr.indexOf(query) !== -1) {
      item.style.display = 'block';
      introMatchCount++;
    } else {
      item.style.display = 'none';
    }
  });
  if (introSec) introSec.style.display = introMatchCount > 0 ? 'block' : 'none';

  // 1b. Search Intro 11 Items
  var intro11MatchCount = 0;
  intro11Items.forEach(function(item) {
    var searchStr = (item.getAttribute('data-search') || '') + ' ' + item.innerText.toLowerCase();
    if (searchStr.indexOf(query) !== -1) {
      item.style.display = 'block';
      intro11MatchCount++;
    } else {
      item.style.display = 'none';
    }
  });
  if (intro11Sec) intro11Sec.style.display = intro11MatchCount > 0 ? 'block' : 'none';`;

if (html.includes(targetHandleSearchOld)) {
  html = html.replace(targetHandleSearchOld, targetHandleSearchNew);
}

fs.writeFileSync('self-intro.html', html, 'utf8');
console.log('✅ Updated self-intro.html with 11-sentence section! New size:', html.length);

// Also sync gen_self_intro.js
const genContent = `const fs = require('fs');\n\nconst htmlContent = ${JSON.stringify(html)};\n\nfs.writeFileSync('self-intro.html', htmlContent, 'utf8');\nconsole.log('✅ Updated self-intro.html successfully! Size: ' + htmlContent.length + ' bytes');\n`;
fs.writeFileSync('gen_self_intro.js', genContent, 'utf8');
console.log('✅ Synced gen_self_intro.js!');
