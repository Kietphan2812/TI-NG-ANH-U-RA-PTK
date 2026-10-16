const fs = require('fs');

// Create the updated self-intro.html with rich aesthetics, full audio, phonetics, and interactive features
const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Giới Thiệu Bản Thân – Phan Tấn Kiệt | Ôn Thi Tiếng Anh Đầu Ra MUCE</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
<style>
:root {
  --primary: #7c3aed;
  --primary-light: #a855f7;
  --primary-dark: #5b21b6;
  --accent: #f97316;
  --accent-light: #fb923c;
  --q-color: #2563eb;
  --q-light: #3b82f6;
  --a-color: #16a34a;
  --a-light: #22c55e;
  --phonetic-color: #ef4444;
  --bg: #0b0c16;
  --surface: #131424;
  --surface2: #191a32;
  --card: #1c1d36;
  --card-hover: #222342;
  --border: #2d2e52;
  --border-light: rgba(168, 85, 247, 0.3);
  --text: #e2e8f0;
  --text-muted: #94a3b8;
  --full-color: #f59e0b;
  --radius: 16px;
  --shadow: 0 8px 32px rgba(0,0,0,0.45);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.7;
}

/* ── HEADER ── */
header {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 100%);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(124,58,237,0.45);
}
.header-inner {
  max-width: 980px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  gap: 12px;
}
.back-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,0.16);
  border: 1px solid rgba(255,255,255,0.28);
  color: #fff;
  padding: 8px 16px;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
}
.back-btn:hover { background: rgba(255,255,255,0.3); transform: translateY(-1px); }
.header-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  flex: 1;
}
.header-title span { display: block; font-size: 0.72rem; font-weight: 400; opacity: 0.85; margin-top: 2px; }

/* ── HERO ── */
.hero {
  background: linear-gradient(135deg, #180833 0%, #291557 50%, #15062b 100%);
  padding: 40px 20px 32px;
  text-align: center;
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: -60px; left: 50%; transform: translateX(-50%);
  width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%);
  pointer-events: none;
}
.avatar {
  width: 80px; height: 80px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.2rem;
  margin: 0 auto 14px;
  box-shadow: 0 0 35px rgba(168,85,247,0.5);
  border: 3px solid rgba(255,255,255,0.2);
}
.hero h1 { font-size: 1.85rem; font-weight: 800; color: #fff; margin-bottom: 6px; letter-spacing: -0.5px; }
.hero p { color: rgba(255,255,255,0.75); font-size: 0.92rem; }

/* ── LEGEND ── */
.legend {
  max-width: 980px;
  margin: 22px auto 0;
  padding: 0 16px;
}
.legend-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
}
.legend-card h3 { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); width: 100%; margin-bottom: 4px; }
.legend-item { display: flex; align-items: center; gap: 8px; font-size: 0.83rem; }
.legend-dot { width: 14px; height: 14px; border-radius: 4px; flex-shrink: 0; }
.dot-q { background: var(--q-color); }
.dot-a { background: var(--a-color); }
.dot-phonetic { background: var(--phonetic-color); }
.dot-vi { background: #64748b; }
.phonetic-sample { color: var(--phonetic-color); font-style: italic; font-size: 0.83rem; font-weight: 500; }

/* ── NAVIGATION & TOOLBAR ── */
.control-hub {
  max-width: 980px;
  margin: 18px auto 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
.btn-action-primary {
  display: inline-flex; align-items: center; gap: 7px;
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: #0b0c16;
  border: none;
  padding: 10px 20px;
  border-radius: 40px;
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(245,158,11,0.35);
}
.btn-action-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(245,158,11,0.5); }

.btn-action-purple {
  display: inline-flex; align-items: center; gap: 7px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 40px;
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(124,58,237,0.35);
}
.btn-action-purple:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(124,58,237,0.55); }

.btn-stop {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(239,68,68,0.14);
  border: 1px solid rgba(239,68,68,0.4);
  color: #f87171;
  padding: 10px 18px;
  border-radius: 40px;
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-stop:hover { background: rgba(239,68,68,0.28); color: #fff; }

/* Filter Tabs & Search Bar */
.filter-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.filter-tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tab-pill {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.tab-pill:hover, .tab-pill.active {
  background: var(--primary);
  border-color: var(--primary-light);
  color: #fff;
  box-shadow: 0 2px 10px rgba(124,58,237,0.35);
}
.search-box-wrap {
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 320px;
}
.search-input {
  width: 100%;
  background: var(--surface2);
  border: 1px solid var(--border);
  color: #fff;
  padding: 7px 14px 7px 32px;
  border-radius: 20px;
  font-size: 0.82rem;
  outline: none;
  transition: border-color 0.2s;
}
.search-input:focus { border-color: var(--primary-light); }
.search-icon-deco {
  position: absolute;
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
  pointer-events: none;
  opacity: 0.6;
}

/* Status toast / live status bar */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 20px;
  background: rgba(168,85,247,0.12);
  border: 1px solid rgba(168,85,247,0.3);
  color: #d8b4fe;
  font-size: 0.8rem;
  font-weight: 500;
}

/* ── MAIN CONTENT ── */
main {
  max-width: 980px;
  margin: 22px auto 60px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

/* ── INTRODUCE MYSELF SECTION (GOLD CARD) ── */
.intro-card {
  background: linear-gradient(180deg, #1f1c2e 0%, var(--card) 100%);
  border: 2px solid rgba(245, 158, 11, 0.45);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.15);
  transition: transform 0.2s;
}
.intro-header {
  background: linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(249,115,22,0.15) 100%);
  padding: 16px 20px;
  border-bottom: 1px solid rgba(245,158,11,0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.intro-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.intro-header-icon { font-size: 1.5rem; }
.intro-title { font-size: 1.12rem; font-weight: 800; color: var(--full-color); letter-spacing: -0.2px; }
.intro-title span { display: block; font-size: 0.76rem; font-weight: 400; color: rgba(255,255,255,0.7); margin-top: 2px; }
.intro-header-actions { display: flex; gap: 8px; align-items: center; }
.intro-badge {
  background: rgba(245, 158, 11, 0.18);
  border: 1px solid rgba(245, 158, 11, 0.4);
  color: #fbbf24;
  font-size: 0.74rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
}

.intro-list {
  padding: 16px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.intro-item {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-left: 4px solid var(--full-color);
  border-radius: 0 12px 12px 0;
  padding: 14px 16px;
  transition: all 0.2s;
  position: relative;
}
.intro-item:hover {
  background: rgba(245, 158, 11, 0.05);
  border-color: rgba(245, 158, 11, 0.35);
  transform: translateX(3px);
}
.intro-item.speaking {
  background: rgba(245, 158, 11, 0.15) !important;
  border-left-color: #fbbf24 !important;
  border-color: rgba(245, 158, 11, 0.6) !important;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
}

.intro-num {
  display: inline-block;
  background: rgba(245, 158, 11, 0.2);
  color: #fde68a;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 6px;
  margin-right: 8px;
  vertical-align: middle;
}
.intro-en {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  line-height: 1.5;
  transition: color 0.15s;
}
.intro-en:hover { color: #fde68a; }
.intro-phonetic {
  color: var(--phonetic-color);
  font-style: italic;
  font-size: 0.88rem;
  margin-top: 4px;
  line-height: 1.5;
}
.intro-vi {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-top: 3px;
  line-height: 1.5;
}

/* ── 15 EXAM QUESTIONS SECTION ── */
.exam-section-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
.exam-section-header {
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.12) 100%);
}
.exam-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.exam-header-icon { font-size: 1.6rem; }
.exam-section-title { font-size: 1.15rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; }
.exam-section-title span { display: block; font-size: 0.77rem; font-weight: 400; color: var(--text-muted); margin-top: 2px; }

.qa-grid {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* Individual Q&A item card */
.qa-item-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
  transition: all 0.25s;
}
.qa-item-card:hover {
  background: rgba(255,255,255,0.035);
  border-color: rgba(168,85,247,0.4);
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
.qa-item-card.speaking {
  border-color: var(--accent) !important;
  background: rgba(249, 115, 22, 0.08) !important;
  box-shadow: 0 0 25px rgba(249, 115, 22, 0.25);
}

.qa-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  gap: 8px;
}
.qa-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2));
  border: 1px solid rgba(168,85,247,0.4);
  color: #c084fc;
  font-size: 0.76rem;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 12px;
  letter-spacing: 0.5px;
}
.qa-group-tag {
  font-size: 0.72rem;
  color: var(--text-muted);
  background: rgba(255,255,255,0.05);
  padding: 2px 8px;
  border-radius: 8px;
}

/* Q & A Blocks */
.q-block {
  background: rgba(37,99,235,0.08);
  border-left: 4px solid var(--q-color);
  border-radius: 0 10px 10px 0;
  padding: 12px 16px;
  margin-bottom: 10px;
}
.q-label {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #60a5fa;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.a-block {
  background: rgba(22,163,74,0.08);
  border-left: 4px solid var(--a-color);
  border-radius: 0 10px 10px 0;
  padding: 12px 16px;
}
.a-label {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #4ade80;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.entry-en {
  font-size: 1.02rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s;
  margin-bottom: 5px;
  line-height: 1.5;
}
.entry-en:hover { color: var(--primary-light); }
.entry-phonetic {
  color: var(--phonetic-color);
  font-style: italic;
  font-size: 0.88rem;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: 500;
}
.entry-vi {
  color: var(--text-muted);
  font-size: 0.86rem;
  line-height: 1.5;
}

/* TTS Button Row */
.tts-row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
}
.tts-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.77rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.15s;
}
.tts-en {
  background: rgba(37,99,235,0.12);
  border-color: rgba(37,99,235,0.4);
  color: #93c5fd;
}
.tts-en:hover { background: rgba(37,99,235,0.28); color: #fff; }
.tts-vi {
  background: rgba(22,163,74,0.12);
  border-color: rgba(22,163,74,0.4);
  color: #86efac;
}
.tts-vi:hover { background: rgba(22,163,74,0.28); color: #fff; }

/* ── PROGRESS BAR DURING AUTOPLAY ── */
.progress-card {
  position: sticky;
  bottom: 16px;
  z-index: 90;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
  display: none;
}
.progress-inner {
  background: #111827;
  border: 1px solid rgba(245,158,11,0.5);
  border-radius: var(--radius);
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
}
.progress-info { flex: 1; }
.progress-title { font-size: 0.88rem; font-weight: 700; color: var(--full-color); }
.progress-status { font-size: 0.76rem; color: var(--text-muted); margin-top: 2px; }
.progress-track {
  width: 100%;
  height: 6px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
}
.progress-fill {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  transition: width 0.3s;
}

/* ── COLLAPSIBLE ADVANCED SECTION ── */
.collapsible-wrapper {
  background: var(--surface);
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.collapsible-header {
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  background: rgba(255,255,255,0.02);
  transition: background 0.2s;
}
.collapsible-header:hover { background: rgba(255,255,255,0.05); }
.collapsible-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-muted);
}
.collapsible-title span { font-size: 0.75rem; font-weight: 400; color: #64748b; margin-left: 6px; }
.collapsible-arrow { font-size: 0.85rem; color: var(--text-muted); transition: transform 0.25s; }
.collapsible-wrapper.open .collapsible-arrow { transform: rotate(180deg); }
.collapsible-content {
  display: none;
  padding: 20px;
  border-top: 1px solid var(--border);
}
.collapsible-wrapper.open .collapsible-content { display: block; }

/* ── FLOATING SELECTION TOOLBAR ── */
.selection-floating-bar {
  position: fixed;
  z-index: 9999;
  background: #18192b;
  border: 1px solid rgba(168,85,247,0.5);
  box-shadow: 0 12px 36px rgba(0,0,0,0.6);
  border-radius: 12px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 290px;
  max-width: 90vw;
  animation: popIn 0.15s ease-out;
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}
.selection-bar-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--text-muted);
}
.selection-badge {
  background: rgba(124,58,237,0.3);
  color: #c084fc;
  padding: 1px 6px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.7rem;
}
.selection-text-preview {
  color: #fff;
  font-weight: 600;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.selection-actions {
  display: flex;
  gap: 6px;
  align-items: center;
}
.sel-btn {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: #e2e8f0;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.sel-btn:hover { background: var(--primary); border-color: var(--primary-light); color: #fff; }
.sel-btn-trans { background: rgba(37,99,235,0.25); border-color: rgba(37,99,235,0.5); color: #93c5fd; }
.sel-btn-close { margin-left: auto; background: transparent; border: none; color: #94a3b8; font-size: 0.9rem; padding: 2px 6px; }

.selection-trans-result {
  font-size: 0.8rem;
  background: rgba(0,0,0,0.3);
  border-radius: 6px;
  padding: 6px 10px;
  color: #a7f3d0;
  max-height: 100px;
  overflow-y: auto;
}

/* Footer */
footer {
  text-align: center;
  padding: 30px 20px;
  color: var(--text-muted);
  font-size: 0.84rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 640px) {
  .hero h1 { font-size: 1.5rem; }
  .exam-section-header, .intro-header { flex-direction: column; align-items: flex-start; }
  .filter-row { flex-direction: column; align-items: stretch; }
  .search-box-wrap { max-width: 100%; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header>
  <div class="header-inner">
    <a href="index.html" class="back-btn" id="btn-back">⬅ Quay lại</a>
    <div class="header-title">
      🗣️ Giới Thiệu Bản Thân
      <span>Self Introduction – English Practice</span>
    </div>
  </div>
</header>

<!-- HERO -->
<div class="hero">
  <div class="avatar">👤</div>
  <h1>Phan Tấn Kiệt</h1>
  <p>Luyện nói tiếng Anh – Bài Giới Thiệu Bản Thân</p>
</div>

<!-- LEGEND -->
<div class="legend">
  <div class="legend-card">
    <h3>📖 Hướng dẫn đọc màu sắc</h3>
    <div class="legend-item"><div class="legend-dot dot-q"></div> Câu hỏi (Q – Question)</div>
    <div class="legend-item"><div class="legend-dot dot-a"></div> Câu trả lời (A – Answer)</div>
    <div class="legend-item"><div class="legend-dot dot-phonetic"></div> <span class="phonetic-sample">Cách đọc gần đúng tiếng Việt (đỏ nghiêng)</span></div>
    <div class="legend-item"><div class="legend-dot dot-vi"></div> Nghĩa tiếng Việt</div>
  </div>
</div>

<!-- CONTROL HUB: TOOLBAR + FILTER + SEARCH -->
<div class="control-hub">
  <div class="toolbar">
    <button class="btn-action-primary" onclick="speakIntro7Sentences()" title="Nghe đọc tự động lần lượt 7 câu bài giới thiệu bản thân">
      🎤 Đọc 7 câu Giới Thiệu
    </button>
    <button class="btn-action-purple" onclick="speak15QA()" title="Nghe đọc tự động lần lượt 15 câu hỏi và câu trả lời">
      🔊 Đọc toàn bộ 15 câu Q&A
    </button>
    <button class="btn-stop" onclick="stopSpeaking()">
      ⏹ Dừng đọc
    </button>
    <span class="status-pill" id="global-status-pill">
      💡 Nhấp vào câu bất kỳ để nghe phát âm
    </span>
  </div>

  <div class="filter-row">
    <div class="filter-tabs">
      <button class="tab-pill active" onclick="filterCategory('all', this)">Tất cả nội dung</button>
      <button class="tab-pill" onclick="filterCategory('intro', this)">🌟 Giới thiệu (7 câu)</button>
      <button class="tab-pill" onclick="filterCategory('g1', this)">👤 Cá nhân & MUCE (1-5)</button>
      <button class="tab-pill" onclick="filterCategory('g2', this)">🌏 Quê & Cuối tuần (6-9)</button>
      <button class="tab-pill" onclick="filterCategory('g3', this)">🎮 Sở thích & Thể thao (10-12)</button>
      <button class="tab-pill" onclick="filterCategory('g4', this)">☀️ Thời tiết (13-15)</button>
    </div>
    <div class="search-box-wrap">
      <span class="search-icon-deco">🔍</span>
      <input type="text" class="search-input" id="search-input" placeholder="Tìm câu hỏi, từ vựng hoặc nghĩa..." oninput="handleSearch()">
    </div>
  </div>
</div>

<!-- MAIN CONTENT -->
<main id="main-content">

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- 🌟 PHẦN 1: INTRODUCE MYSELF (BẢN SONG NGỮ TỪNG CÂU)        -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <section class="intro-card" id="section-intro" data-category="intro">
    <div class="intro-header">
      <div class="intro-header-left">
        <span class="intro-header-icon">🌟</span>
        <div>
          <div class="intro-title">
            INTRODUCE MYSELF (bản song ngữ từng câu)
            <span>Đoạn Giới Thiệu Bản Thân – Luyện phát âm & đọc lưu loát</span>
          </div>
        </div>
      </div>
      <div class="intro-header-actions">
        <span class="intro-badge">7 câu hoàn chỉnh</span>
        <button class="btn-action-primary" style="padding:6px 14px;font-size:0.78rem" onclick="speakIntro7Sentences()">
          ▶ Nghe đọc 7 câu
        </button>
      </div>
    </div>

    <div class="intro-list">

      <!-- Câu 1 -->
      <div class="intro-item" id="intro-item-0" data-search="name phan tan kiet tên tôi là phan tấn kiệt">
        <div>
          <span class="intro-num">#1</span>
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
      <div class="intro-item" id="intro-item-1" data-search="vietnam vietnam tôi đến từ việt nam">
        <div>
          <span class="intro-num">#2</span>
          <span class="intro-en" onclick="speakEn('I am from Vietnam.')">I’m from Vietnam.</span>
        </div>
        <div class="intro-phonetic">Ai-m phrơm Vi-ệt Nam.</div>
        <div class="intro-vi">Tôi đến từ Việt Nam.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I am from Vietnam.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi đến từ Việt Nam.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 3 -->
      <div class="intro-item" id="intro-item-2" data-search="22 years old tôi 22 tuổi">
        <div>
          <span class="intro-num">#3</span>
          <span class="intro-en" onclick="speakEn('I am twenty-two years old.')">I’m 22 years old.</span>
        </div>
        <div class="intro-phonetic">Ai-m twen-ti-tu ia-z ôld.</div>
        <div class="intro-vi">Tôi 22 tuổi.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I am twenty-two years old.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi 22 tuổi.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 4 -->
      <div class="intro-item" id="intro-item-3" data-search="student mien trung university of civil engineering muce 4 years đại học xây dựng miền trung 4 năm">
        <div>
          <span class="intro-num">#4</span>
          <span class="intro-en" onclick="speakEn('I am a student at Mien Trung University of Civil Engineering. I have studied here for 4 years.')">I’m a student at Mien Trung University of Civil Engineering. I have studied here for 4 years.</span>
        </div>
        <div class="intro-phonetic">Ai-m ơ xtiu-đần-t et Miền Trung Diu-ni-vơ-xi-ti ơv Xi-vồ En-gi-nia-rinh. Ai hev xta-địt hia pho pho ia-z.</div>
        <div class="intro-vi">Tôi là sinh viên Trường Đại học Xây dựng Miền Trung. Tôi đã học ở đây được 4 năm.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I am a student at Mien Trung University of Civil Engineering. I have studied here for four years.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi là sinh viên Trường Đại học Xây dựng Miền Trung. Tôi đã học ở đây được 4 năm.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 5 -->
      <div class="intro-item" id="intro-item-4" data-search="hobbies listening to music drawing sở thích nghe nhạc và vẽ">
        <div>
          <span class="intro-num">#5</span>
          <span class="intro-en" onclick="speakEn('My hobbies are listening to music and drawing.')">My hobbies are listening to music and drawing.</span>
        </div>
        <div class="intro-phonetic">Mai hóp-bi-z a lít-sừn-inh tu miu-zic en dro-inh.</div>
        <div class="intro-vi">Sở thích riêng của tôi là nghe nhạc và vẽ.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('My hobbies are listening to music and drawing.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Sở thích riêng của tôi là nghe nhạc và vẽ.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 6 -->
      <div class="intro-item" id="intro-item-5" data-search="free time watching movies cleaning house watching youtube writing code xem phim dọn dẹp nhà cửa xem youtube viết code">
        <div>
          <span class="intro-num">#6</span>
          <span class="intro-en" onclick="speakEn('In my free time, I also like watching movies, cleaning the house, watching YouTube and writing code.')">In my free time, I also like watching movies, cleaning the house, watching YouTube and writing code.</span>
        </div>
        <div class="intro-phonetic">In mai phri tai-m, ai ôn-sâu lai-k goát-chinh mu-vi-z, cli-ninh đơ hao-s, goát-chinh Diu-túp en rai-tinh cốt.</div>
        <div class="intro-vi">Trong thời gian rảnh, tôi cũng thích xem phim, dọn dẹp nhà cửa, xem YouTube và viết code.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('In my free time, I also like watching movies, cleaning the house, watching YouTube and writing code.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Trong thời gian rảnh, tôi cũng thích xem phim, dọn dẹp nhà cửa, xem YouTube và viết code.')">🗣️ Nghe VI</button>
        </div>
      </div>

      <!-- Câu 7 -->
      <div class="intro-item" id="intro-item-6" data-search="learn english popular necessary language phổ biến cần thiết">
        <div>
          <span class="intro-num">#7</span>
          <span class="intro-en" onclick="speakEn('I study English because it is a popular and necessary language.')">I study English because it is a popular and necessary language.</span>
        </div>
        <div class="intro-phonetic">Ai xta-đi Inh-glít bi-cơ-z ít iz ơ pop-piu-lơ en né-sơ-xê-ri lang-guých.</div>
        <div class="intro-vi">Tôi học tiếng Anh vì nó là một ngôn ngữ phổ biến và cần thiết.</div>
        <div class="tts-row">
          <button class="tts-btn tts-en" onclick="speakEn('I study English because it is a popular and necessary language.')">🔊 Nghe EN</button>
          <button class="tts-btn tts-vi" onclick="speakVi('Tôi học tiếng Anh vì nó là một ngôn ngữ phổ biến và cần thiết.')">🗣️ Nghe VI</button>
        </div>
      </div>

    </div>
  </section>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- 🎯 PHẦN 2: 15 CÂU HỎI & TRẢ LỜI ĐÃ CẬP NHẬT THEO BẠN      -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <section class="exam-section-card" id="section-15-qa">
    <div class="exam-section-header">
      <div class="exam-header-left">
        <span class="exam-header-icon">🎯</span>
        <div>
          <div class="exam-section-title">
            15 CÂU HỎI & TRẢ LỜI VẤN ĐÁP THI ĐẦU RA
            <span>Đã cập nhật chính xác theo thông tin cá nhân – Chuẩn đề thi MUCE</span>
          </div>
        </div>
      </div>
      <div>
        <button class="btn-action-purple" style="padding:7px 16px;font-size:0.8rem" onclick="speak15QA()">
          🔊 Đọc tự động 15 câu
        </button>
      </div>
    </div>

    <div class="qa-grid" id="qa-container">

      <!-- ── CÂU 1 ── -->
      <div class="qa-item-card" id="qa-card-0" data-group="g1" data-search="what is your full name my full name is phan tan kiet họ và tên đầy đủ">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 01</span>
          <span class="qa-group-tag">👤 Thông tin cá nhân</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What is your full name?')">1. What’s your full name?</div>
          <div class="entry-phonetic">Goát-s dơ phun nêm?</div>
          <div class="entry-vi">Họ và tên đầy đủ của bạn là gì?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What is your full name?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Họ và tên đầy đủ của bạn là gì?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('My full name is Phan Tan Kiet.')">My full name is Phan Tan Kiet.</div>
          <div class="entry-phonetic">Mai phun nêm iz Phan Tấn Kiệt.</div>
          <div class="entry-vi">Họ và tên đầy đủ của tôi là Phan Tấn Kiệt.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('My full name is Phan Tan Kiet.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Họ và tên đầy đủ của tôi là Phan Tấn Kiệt.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 2 ── -->
      <div class="qa-item-card" id="qa-card-1" data-group="g1" data-search="how do you spell your first name kiet k i e t đánh vần tên">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 02</span>
          <span class="qa-group-tag">👤 Thông tin cá nhân</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('How do you spell your first name?')">2. How do you spell your first name?</div>
          <div class="entry-phonetic">Hao đu diu xpel dơ phớt-s-t nêm?</div>
          <div class="entry-vi">Bạn đánh vần tên của mình như thế nào?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('How do you spell your first name?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn đánh vần tên của mình như thế nào?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('K, I, E, T.')">K - I - E - T.</div>
          <div class="entry-phonetic">Kê - Ai - I - Ti. (K - I - E - T)</div>
          <div class="entry-vi">K - I - E - T.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('K, I, E, T.')">🔊 Nghe phát âm EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('K, I, E, T')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 3 ── -->
      <div class="qa-item-card" id="qa-card-2" data-group="g1" data-search="how long have you studied in this university 4 years học ở trường đại học này được bao lâu 4 năm">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 03</span>
          <span class="qa-group-tag">🎓 Học tập & Đại học</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('How long have you studied in this university?')">3. How long have you studied in this university?</div>
          <div class="entry-phonetic">Hao long hev diu xta-địt in đít-s diu-ni-vơ-xi-ti?</div>
          <div class="entry-vi">Bạn đã học ở trường đại học này được bao lâu?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('How long have you studied in this university?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn đã học ở trường đại học này được bao lâu?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('I have studied here for 4 years.')">I’ve studied here for 4 years.</div>
          <div class="entry-phonetic">Aiv xta-địt hia pho pho ia-z.</div>
          <div class="entry-vi">Tôi đã học ở đây được 4 năm.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('I have studied here for four years.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Tôi đã học ở đây được 4 năm.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 4 ── -->
      <div class="qa-item-card" id="qa-card-3" data-group="g1" data-search="what do the letters muce mean mien trung university of civil engineering chữ cái muce nghĩa là gì">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 04</span>
          <span class="qa-group-tag">🎓 Học tập & Đại học</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What do the letters M, U, C, E mean?')">4. What do the letters MUCE mean?</div>
          <div class="entry-phonetic">Goát đu đơ lét-tơ-z Em-U-Xi-I min?</div>
          <div class="entry-vi">Các chữ cái MUCE có nghĩa là gì?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What do the letters M, U, C, E mean?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Các chữ cái M U C E có nghĩa là gì?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('Mien Trung University of Civil Engineering.')">Mien Trung University of Civil Engineering.</div>
          <div class="entry-phonetic">Miền Trung Diu-ni-vơ-xi-ti ơv Xi-vồ En-gi-nia-rinh.</div>
          <div class="entry-vi">Trường Đại học Xây dựng Miền Trung.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Mien Trung University of Civil Engineering.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Trường Đại học Xây dựng Miền Trung.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 5 ── -->
      <div class="qa-item-card" id="qa-card-4" data-group="g1" data-search="what is your phone number 033831410 zero three three eight three one four one zero số điện thoại">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 05</span>
          <span class="qa-group-tag">👤 Thông tin cá nhân</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What is your phone number?')">5. What’s your phone number?</div>
          <div class="entry-phonetic">Goát-s dơ phôn năm-bơ?</div>
          <div class="entry-vi">Số điện thoại của bạn là gì?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What is your phone number?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Số điện thoại của bạn là gì?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('Zero, three, three, eight, three, one, four, one, zero.')">033831410: zero - three - three - eight - three - one - four - one - zero.</div>
          <div class="entry-phonetic">Di-rô - thri - thri - eit - thri - goăn - pho - goăn - di-rô.</div>
          <div class="entry-vi">033831410: không - ba - ba - tám - ba - một - bốn - một - không.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Zero, three, three, eight, three, one, four, one, zero.')">🔊 Đọc số điện thoại EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('không, ba, ba, tám, ba, một, bốn, một, không.')">🗣️ Đọc số VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 6 ── -->
      <div class="qa-item-card" id="qa-card-5" data-group="g2" data-search="where are you from i am from vietnam bạn đến từ đâu việt nam">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 06</span>
          <span class="qa-group-tag">🌏 Quê quán & Nơi ở</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('Where are you from?')">6. Where are you from?</div>
          <div class="entry-phonetic">Guê-a a diu phrơm?</div>
          <div class="entry-vi">Bạn đến từ đâu?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Where are you from?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn đến từ đâu?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('I am from Vietnam.')">I’m from Vietnam.</div>
          <div class="entry-phonetic">Ai-m phrơm Vi-ệt Nam.</div>
          <div class="entry-vi">Tôi đến từ Việt Nam.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('I am from Vietnam.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Tôi đến từ Việt Nam.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 7 ── -->
      <div class="qa-item-card" id="qa-card-6" data-group="g2" data-search="why do you learn english popular necessary language tại sao học tiếng anh phổ biến cần thiết">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 07</span>
          <span class="qa-group-tag">📚 Ngoại ngữ</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('Why do you learn English?')">7. Why do you learn English?</div>
          <div class="entry-phonetic">Guai đu diu lơn Inh-glít?</div>
          <div class="entry-vi">Tại sao bạn học tiếng Anh?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Why do you learn English?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Tại sao bạn học tiếng Anh?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('Because it is a popular and necessary language.')">Because it is a popular and necessary language.</div>
          <div class="entry-phonetic">Bi-cơ-z ít iz ơ pop-piu-lơ en né-sơ-xê-ri lang-guých.</div>
          <div class="entry-vi">Vì nó là một ngôn ngữ phổ biến và cần thiết.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Because it is a popular and necessary language.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Vì nó là một ngôn ngữ phổ biến và cần thiết.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 8 ── -->
      <div class="qa-item-card" id="qa-card-7" data-group="g2" data-search="what do you often do at the weekend listen to music watch movies clean house cuối tuần nghe nhạc xem phim dọn dẹp nhà cửa">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 08</span>
          <span class="qa-group-tag">☕ Cuối tuần & Thư giãn</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What do you often do at the weekend?')">8. What do you often do at the weekend?</div>
          <div class="entry-phonetic">Goát đu diu óp-phần đu et đơ guy-k-en-đ?</div>
          <div class="entry-vi">Bạn thường làm gì vào cuối tuần?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What do you often do at the weekend?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn thường làm gì vào cuối tuần?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('At the weekend, I often listen to music, watch movies and clean the house.')">At the weekend, I often listen to music, watch movies and clean the house.</div>
          <div class="entry-phonetic">Et đơ guy-k-en-đ, ai óp-phần lít-sừn tu miu-zic, goát-ch mu-vi-z en clin đơ hao-s.</div>
          <div class="entry-vi">Vào cuối tuần, tôi thường nghe nhạc, xem phim và dọn dẹp nhà cửa.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('At the weekend, I often listen to music, watch movies and clean the house.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Vào cuối tuần, tôi thường nghe nhạc, xem phim và dọn dẹp nhà cửa.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 9 ── -->
      <div class="qa-item-card" id="qa-card-8" data-group="g2" data-search="do you like your weekend why free time do what i want thích cuối tuần nhiều thời gian rảnh">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 09</span>
          <span class="qa-group-tag">☕ Cuối tuần & Thư giãn</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('Do you like your weekend? Why?')">9. Do you like your weekend? Why?</div>
          <div class="entry-phonetic">Đu diu lai-k dơ guy-k-en-đ? Guai?</div>
          <div class="entry-vi">Bạn có thích cuối tuần của mình không? Tại sao?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Do you like your weekend? Why?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn có thích cuối tuần của mình không? Tại sao?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('Yes, I do. Because I have a lot of free time to do what I want.')">Yes, I do. Because I have a lot of free time to do what I want.</div>
          <div class="entry-phonetic">Dét, ai đu. Bi-cơ-z ai hev ơ lót ơv phri tai-m tu đu goát ai goán-t.</div>
          <div class="entry-vi">Có. Vì tôi có nhiều thời gian rảnh để làm những gì mình muốn.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Yes, I do. Because I have a lot of free time to do what I want.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Có, tôi thích. Vì tôi có nhiều thời gian rảnh để làm những gì mình muốn.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 10 ── -->
      <div class="qa-item-card" id="qa-card-9" data-group="g3" data-search="what do you like doing in your free time listen to music watch youtube write code thời gian rảnh nghe nhạc xem youtube viết code">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 10</span>
          <span class="qa-group-tag">🎯 Sở thích cá nhân</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What do you like doing in your free time?')">10. What do you like doing in your free time?</div>
          <div class="entry-phonetic">Goát đu diu lai-k đu-inh in dơ phri tai-m?</div>
          <div class="entry-vi">Bạn thích làm gì trong thời gian rảnh?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What do you like doing in your free time?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn thích làm gì trong thời gian rảnh?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('I like listening to music, watching YouTube and writing code.')">I like listening to music, watching YouTube and writing code.</div>
          <div class="entry-phonetic">Ai lai-k lít-sừn-inh tu miu-zic, goát-chinh Diu-túp en rai-tinh cốt.</div>
          <div class="entry-vi">Tôi thích nghe nhạc, xem YouTube và viết code.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('I like listening to music, watching YouTube and writing code.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Tôi thích nghe nhạc, xem YouTube và viết code.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 11 ── -->
      <div class="qa-item-card" id="qa-card-10" data-group="g3" data-search="which sports can you play football volleyball tennis pickleball môn thể thao bóng đá bóng chuyền quần vợt pickleball">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 11</span>
          <span class="qa-group-tag">⚽ Thể thao</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('Which sports can you play?')">11. Which sports can you play?</div>
          <div class="entry-phonetic">Guých xpo-ts ken diu plêi?</div>
          <div class="entry-vi">Bạn có thể chơi những môn thể thao nào?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Which sports can you play?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn có thể chơi những môn thể thao nào?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('I can play football, volleyball, tennis and pickleball.')">I can play football, volleyball, tennis and pickleball.</div>
          <div class="entry-phonetic">Ai ken plêi phút-bol, vo-li-bol, ten-nít en píc-cồ-bol.</div>
          <div class="entry-vi">Tôi có thể chơi bóng đá, bóng chuyền, quần vợt và pickleball.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('I can play football, volleyball, tennis and pickleball.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Tôi có thể chơi bóng đá, bóng chuyền, quần vợt và pickleball.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 12 ── -->
      <div class="qa-item-card" id="qa-card-11" data-group="g3" data-search="why do you play football fun good exercise tại sao chơi bóng đá vui tập thể dục tốt">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 12</span>
          <span class="qa-group-tag">⚽ Thể thao</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('Why do you play football?')">12. Why do you play football?</div>
          <div class="entry-phonetic">Guai đu diu plêi phút-bol?</div>
          <div class="entry-vi">Tại sao bạn chơi bóng đá?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Why do you play football?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Tại sao bạn chơi bóng đá?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('Because it is fun and it is good exercise.')">Because it’s fun and it’s good exercise.</div>
          <div class="entry-phonetic">Bi-cơ-z ít-s phăn en ít-s gút éc-xơ-xai-z.</div>
          <div class="entry-vi">Vì nó vui và là một cách tập thể dục tốt.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Because it is fun and it is good exercise.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Vì nó vui và là một cách tập thể dục tốt.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 13 ── -->
      <div class="qa-item-card" id="qa-card-12" data-group="g4" data-search="what is the weather like today sunny hot thời tiết hôm nay nắng nóng">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 13</span>
          <span class="qa-group-tag">☀️ Thời tiết</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What is the weather like today?')">13. What’s the weather like today?</div>
          <div class="entry-phonetic">Goát-s đơ guyê-đơ lai-k tu-đê?</div>
          <div class="entry-vi">Hôm nay thời tiết như thế nào?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What is the weather like today?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Hôm nay thời tiết như thế nào?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('It is sunny and hot.')">It’s sunny and hot.</div>
          <div class="entry-phonetic">Ít-s xăn-ni en hót.</div>
          <div class="entry-vi">Trời nắng và nóng.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('It is sunny and hot.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Trời nắng và nóng.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 14 ── -->
      <div class="qa-item-card" id="qa-card-13" data-group="g4" data-search="how many seasons are there in a year spring summer autumn winter một năm có bao nhiêu mùa xuân hạ thu đông">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 14</span>
          <span class="qa-group-tag">☀️ Thời tiết & Mùa</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('How many seasons are there in a year? What are they?')">14. How many seasons are there in a year? What are they?</div>
          <div class="entry-phonetic">Hao me-ni xi-zừn-z a đe-a in ơ ia? Goát a đê?</div>
          <div class="entry-vi">Một năm có bao nhiêu mùa? Đó là những mùa nào?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('How many seasons are there in a year? What are they?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Một năm có bao nhiêu mùa? Đó là những mùa nào?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('There are four seasons: Spring, Summer, Autumn and Winter.')">There are four seasons: Spring, Summer, Autumn and Winter.</div>
          <div class="entry-phonetic">Đe-a a pho xi-zừn-z: Xpring, Xăm-mơ, O-từm en Guyn-tơ.</div>
          <div class="entry-vi">Có bốn mùa: Xuân, Hạ, Thu và Đông.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('There are four seasons: Spring, Summer, Autumn and Winter.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Có bốn mùa: Xuân, Hạ, Thu và Đông.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- ── CÂU 15 ── -->
      <div class="qa-item-card" id="qa-card-14" data-group="g4" data-search="what do you usually do on rainy days stay at home watch tv read books ngày mưa ở nhà xem tv đọc sách">
        <div class="qa-card-header">
          <span class="qa-badge">CÂU 15</span>
          <span class="qa-group-tag">🌧️ Ngày mưa</span>
        </div>
        <div class="q-block">
          <div class="q-label">❓ Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What do you usually do on rainy days?')">15. What do you usually do on rainy days?</div>
          <div class="entry-phonetic">Goát đu diu diu-giu-ơ-li đu on rê-ni đây-z?</div>
          <div class="entry-vi">Bạn thường làm gì vào những ngày mưa?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What do you usually do on rainy days?')">🔊 Nghe câu hỏi EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn thường làm gì vào những ngày mưa?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">💡 A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('I usually stay at home, watch TV or read books.')">I usually stay at home, watch TV or read books.</div>
          <div class="entry-phonetic">Ai diu-giu-ơ-li xtê et hôm, goát-ch Ti-Vi o rít buc-s.</div>
          <div class="entry-vi">Tôi thường ở nhà, xem TV hoặc đọc sách.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('I usually stay at home, watch TV or read books.')">🔊 Nghe câu trả lời EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Tôi thường ở nhà, xem TV hoặc đọc sách.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- 📚 PHẦN 3: NỘI DUNG MỞ RỘNG (Gia đình, Ngoại hình, Ước mơ)  -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="collapsible-wrapper" id="collapsible-advanced">
    <div class="collapsible-header" onclick="toggleCollapsible()">
      <div class="collapsible-title">
        <span>📖</span>
        Luyện Nói Mở Rộng: Gia Đình, Ngoại Hình, Tính Cách & Tương Lai
        <span>(Nhấp để xem hoặc đóng)</span>
      </div>
      <div class="collapsible-arrow">▼</div>
    </div>
    <div class="collapsible-content">
      <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:16px;">
        💡 Đây là các nội dung mở rộng chuyên sâu (gia đình, ngoại hình, tính cách, điểm mạnh/yếu và ước mơ kinh doanh) để bạn luyện tập thêm nếu giám khảo hỏi sâu.
      </p>

      <!-- Advanced Group 1: Family -->
      <div class="qa-item-card" style="margin-bottom:16px;">
        <div class="qa-card-header">
          <span class="qa-badge" style="background:rgba(234,179,8,0.2);color:#fde047;border-color:rgba(234,179,8,0.4)">MỞ RỘNG</span>
          <span class="qa-group-tag">👨‍👩‍👦 Gia đình</span>
        </div>
        <div class="q-block">
          <div class="q-label">Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('Can you tell me about your family?')">Can you tell me about your family?</div>
          <div class="entry-phonetic">Ken diu ten mi ơ-bao-t dơ pham-li?</div>
          <div class="entry-vi">Bạn có thể kể về gia đình mình không?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('Can you tell me about your family?')">🔊 Nghe EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Bạn có thể kể về gia đình mình không?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('There are five people in my family: my father, my mother, my two older brothers and me. My father is a carpenter, and my mother is a farmer. Although their jobs are quite hard, they always work hard to support our family, and I really admire them for that.')">There are five people in my family: my father, my mother, my two older brothers and me. My father is a carpenter, and my mother is a farmer. Although their jobs are quite hard, they always work hard to support our family, and I really admire them for that.</div>
          <div class="entry-phonetic">Đe-a a phai pi-pồ in mai pham-li: mai pha-đơ, mai mơ-đơ, mai tu ôl-đơ brơ-đơ-z en mi...</div>
          <div class="entry-vi">Gia đình tôi có năm người: ba tôi làm nghề thợ mộc, mẹ tôi làm nông, hai anh trai của tôi và tôi. Tôi rất ngưỡng mộ ba mẹ vì họ luôn làm việc chăm chỉ.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('There are five people in my family: my father, my mother, my two older brothers and me.')">🔊 Nghe EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Gia đình tôi có năm người: ba tôi, mẹ tôi, hai anh trai và tôi.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

      <!-- Advanced Group 2: Strengths & Weaknesses -->
      <div class="qa-item-card">
        <div class="qa-card-header">
          <span class="qa-badge" style="background:rgba(234,179,8,0.2);color:#fde047;border-color:rgba(234,179,8,0.4)">MỞ RỘNG</span>
          <span class="qa-group-tag">⚡ Điểm mạnh & Điểm yếu</span>
        </div>
        <div class="q-block">
          <div class="q-label">Q – CÂU HỎI</div>
          <div class="entry-en" onclick="speakEn('What are your strengths and weaknesses?')">What are your strengths and weaknesses?</div>
          <div class="entry-phonetic">Goát a dơ xtreng-th-x en guy-c-nít-xịt?</div>
          <div class="entry-vi">Điểm mạnh và điểm yếu của bạn là gì?</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('What are your strengths and weaknesses?')">🔊 Nghe EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Điểm mạnh và điểm yếu của bạn là gì?')">🗣️ Nghe VI</button>
          </div>
        </div>
        <div class="a-block">
          <div class="a-label">A – TRẢ LỜI</div>
          <div class="entry-en" onclick="speakEn('My strengths are solving problems quickly and being creative. My weakness is English, which I am actively practicing to improve.')">My strengths are solving problems quickly and being creative. My weakness is English, which I am actively practicing to improve.</div>
          <div class="entry-phonetic">Mai xtreng-th-x a xon-vinh prọ-blờm-z quíc-li en bi-inh cri-ê-tiv. Mai guy-c-nít iz Inh-glít...</div>
          <div class="entry-vi">Điểm mạnh của tôi là giải quyết vấn đề nhanh và sáng tạo. Điểm yếu là tiếng Anh, và tôi đang tích cực luyện tập để nâng cao.</div>
          <div class="tts-row">
            <button class="tts-btn tts-en" onclick="speakEn('My strengths are solving problems quickly and being creative.')">🔊 Nghe EN</button>
            <button class="tts-btn tts-vi" onclick="speakVi('Điểm mạnh của tôi là giải quyết vấn đề nhanh và sáng tạo.')">🗣️ Nghe VI</button>
          </div>
        </div>
      </div>

    </div>
  </div>

</main>

<!-- PROGRESS BAR DOCK (Khi autoplay đọc lần lượt) -->
<div class="progress-card" id="progress-card">
  <div class="progress-inner">
    <div class="progress-info">
      <div class="progress-title" id="progress-title">🎧 Đang đọc tự động...</div>
      <div class="progress-status" id="progress-status">Vui lòng lắng nghe phát âm chuẩn</div>
      <div class="progress-track">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
    </div>
    <div>
      <button class="btn-stop" onclick="stopSpeaking()" style="padding:8px 16px;font-size:0.8rem">⏹ Dừng</button>
    </div>
  </div>
</div>

<!-- Floating Selection Quick-Action Toolbar (Bôi đen bất kỳ để dịch & phát âm) -->
<div id="selection-quick-toolbar" class="selection-floating-bar" style="display: none;">
  <div class="selection-bar-header">
    <span class="selection-badge">abc</span>
    <span>Đã chọn:</span>
    <span class="selection-text-preview" id="sel-text-preview"></span>
  </div>
  <div class="selection-actions">
    <button type="button" class="sel-btn sel-btn-trans" id="sel-btn-trans" title="Dịch đoạn văn này sang Tiếng Việt">🌐 Dịch</button>
    <button type="button" class="sel-btn" id="sel-btn-en" title="Nghe phát âm Tiếng Anh">🔊 Đọc TA</button>
    <button type="button" class="sel-btn" id="sel-btn-vi" title="Nghe đọc bản dịch Tiếng Việt">🗣️ Đọc TV</button>
    <button type="button" class="sel-btn" id="sel-btn-copy" title="Sao chép văn bản">📋 Copy</button>
    <button type="button" class="sel-btn sel-btn-close" id="sel-btn-close" title="Đóng">✖</button>
  </div>
  <div class="selection-trans-result" id="sel-trans-result" style="display: none;"></div>
</div>

<!-- FOOTER -->
<footer>
  <p>🎓 Luyện thi Tiếng Anh Đầu Ra – Phan Tấn Kiệt | Đại học Xây dựng Miền Trung (MUCE)</p>
  <p style="margin-top:6px">
    <a href="index.html" style="color:var(--primary-light);text-decoration:none;font-weight:600">← Về trang ôn tập trắc nghiệm chính</a>
  </p>
</footer>

<script>
// ── TTS ENGINES ──
var synth = window.speechSynthesis;
var isSpeaking = false;
var autoplayTimer = null;
var cloudAudioPlayer = null;

function playCloudTTS(text, langCode, onEndCallback) {
  if (!cloudAudioPlayer) {
    cloudAudioPlayer = new Audio();
  } else {
    cloudAudioPlayer.pause();
  }

  var safeText = text.length > 200 ? text.substring(0, 195) + '...' : text;
  var isOnline = window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
  var apiBase = isOnline ? '' : (window.location.protocol.startsWith('http') ? '' : 'https://tieng-anh-dau-ra-ptk.onrender.com');
  var url = apiBase + '/api/tts?lang=' + langCode + '&text=' + encodeURIComponent(safeText);

  cloudAudioPlayer.src = url;
  cloudAudioPlayer.onended = function() {
    if (onEndCallback) onEndCallback();
  };
  cloudAudioPlayer.onerror = function() {
    if (synth) {
      var u = new SpeechSynthesisUtterance(text);
      u.lang = langCode === 'vi' ? 'vi-VN' : 'en-US';
      u.rate = 0.9;
      if (onEndCallback) u.onend = onEndCallback;
      synth.speak(u);
    } else if (onEndCallback) {
      onEndCallback();
    }
  };

  var p = cloudAudioPlayer.play();
  if (p !== undefined) {
    p.catch(function() {
      if (synth) {
        var u = new SpeechSynthesisUtterance(text);
        u.lang = langCode === 'vi' ? 'vi-VN' : 'en-US';
        u.rate = 0.9;
        if (onEndCallback) u.onend = onEndCallback;
        synth.speak(u);
      } else if (onEndCallback) {
        onEndCallback();
      }
    });
  }
}

function speakEn(text, force, onEndCallback) {
  if (!force) {
    var sel = window.getSelection ? window.getSelection().toString().trim() : '';
    if (sel.length > 0) return;
  }
  stopSpeaking(false);
  if (!synth) {
    if (onEndCallback) onEndCallback();
    return;
  }
  var u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.84;
  u.pitch = 1.0;
  if (onEndCallback) {
    u.onend = onEndCallback;
    u.onerror = onEndCallback;
  }
  synth.speak(u);
}

function speakVi(text, force) {
  if (!force) {
    var sel = window.getSelection ? window.getSelection().toString().trim() : '';
    if (sel.length > 0) return;
  }
  stopSpeaking(false);
  playCloudTTS(text, 'vi');
}

function stopSpeaking(resetStatus) {
  if (resetStatus === undefined) resetStatus = true;
  if (synth) synth.cancel();
  if (cloudAudioPlayer) cloudAudioPlayer.pause();
  if (autoplayTimer) { clearTimeout(autoplayTimer); autoplayTimer = null; }
  isSpeaking = false;

  var pCard = document.getElementById('progress-card');
  if (pCard && resetStatus) pCard.style.display = 'none';

  var pill = document.getElementById('global-status-pill');
  if (pill && resetStatus) pill.textContent = '⏹ Đã dừng phát âm';

  document.querySelectorAll('.speaking').forEach(function(el) {
    el.classList.remove('speaking');
  });
}

// ── AUTOPLAY 7 CÂU INTRODUCE MYSELF ──
var introSentences = [
  "My name is Phan Tan Kiet.",
  "I am from Vietnam.",
  "I am twenty-two years old.",
  "I am a student at Mien Trung University of Civil Engineering. I have studied here for four years.",
  "My hobbies are listening to music and drawing.",
  "In my free time, I also like watching movies, cleaning the house, watching YouTube and writing code.",
  "I study English because it is a popular and necessary language."
];

function speakIntro7Sentences() {
  stopSpeaking();
  isSpeaking = true;
  var pCard = document.getElementById('progress-card');
  var pTitle = document.getElementById('progress-title');
  var pStatus = document.getElementById('progress-status');
  var pFill = document.getElementById('progress-fill');
  pCard.style.display = 'block';
  pTitle.textContent = '🌟 Đang đọc 7 câu Giới Thiệu Bản Thân';

  var idx = 0;
  var total = introSentences.length;

  function next() {
    if (!isSpeaking || idx >= total) {
      isSpeaking = false;
      pStatus.textContent = '✅ Đã đọc xong toàn bộ 7 câu!';
      pFill.style.width = '100%';
      document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
      setTimeout(function() { if (!isSpeaking) pCard.style.display = 'none'; }, 3000);
      return;
    }

    document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
    var itemEl = document.getElementById('intro-item-' + idx);
    if (itemEl) {
      itemEl.classList.add('speaking');
      itemEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    pFill.style.width = ((idx / total) * 100) + '%';
    pStatus.textContent = 'Đang đọc câu ' + (idx + 1) + '/' + total + '...';

    speakEn(introSentences[idx], true, function() {
      idx++;
      autoplayTimer = setTimeout(next, 700);
    });
  }
  next();
}

// ── AUTOPLAY 15 CÂU Q&A ──
var exam15QA = [
  { q: "What is your full name?", a: "My full name is Phan Tan Kiet." },
  { q: "How do you spell your first name?", a: "K, I, E, T." },
  { q: "How long have you studied in this university?", a: "I have studied here for four years." },
  { q: "What do the letters M, U, C, E mean?", a: "Mien Trung University of Civil Engineering." },
  { q: "What is your phone number?", a: "Zero, three, three, eight, three, one, four, one, zero." },
  { q: "Where are you from?", a: "I am from Vietnam." },
  { q: "Why do you learn English?", a: "Because it is a popular and necessary language." },
  { q: "What do you often do at the weekend?", a: "At the weekend, I often listen to music, watch movies and clean the house." },
  { q: "Do you like your weekend? Why?", a: "Yes, I do. Because I have a lot of free time to do what I want." },
  { q: "What do you like doing in your free time?", a: "I like listening to music, watching YouTube and writing code." },
  { q: "Which sports can you play?", a: "I can play football, volleyball, tennis and pickleball." },
  { q: "Why do you play football?", a: "Because it is fun and it is good exercise." },
  { q: "What is the weather like today?", a: "It is sunny and hot." },
  { q: "How many seasons are there in a year? What are they?", a: "There are four seasons: Spring, Summer, Autumn and Winter." },
  { q: "What do you usually do on rainy days?", a: "I usually stay at home, watch TV or read books." }
];

function speak15QA() {
  stopSpeaking();
  isSpeaking = true;
  var pCard = document.getElementById('progress-card');
  var pTitle = document.getElementById('progress-title');
  var pStatus = document.getElementById('progress-status');
  var pFill = document.getElementById('progress-fill');
  pCard.style.display = 'block';
  pTitle.textContent = '🎯 Đang đọc 15 câu Hỏi & Đáp Vấn Đáp MUCE';

  var idx = 0;
  var total = exam15QA.length;

  function next() {
    if (!isSpeaking || idx >= total) {
      isSpeaking = false;
      pStatus.textContent = '✅ Đã hoàn thành 15 câu Q&A!';
      pFill.style.width = '100%';
      document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
      setTimeout(function() { if (!isSpeaking) pCard.style.display = 'none'; }, 3000);
      return;
    }

    document.querySelectorAll('.speaking').forEach(function(el) { el.classList.remove('speaking'); });
    var cardEl = document.getElementById('qa-card-' + idx);
    if (cardEl) {
      cardEl.classList.add('speaking');
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    pFill.style.width = ((idx / total) * 100) + '%';
    pStatus.textContent = 'Câu ' + (idx + 1) + '/' + total + ': Đang đọc câu hỏi...';

    // Đọc câu hỏi trước
    speakEn(exam15QA[idx].q, true, function() {
      if (!isSpeaking) return;
      pStatus.textContent = 'Câu ' + (idx + 1) + '/' + total + ': Đang đọc câu trả lời...';
      autoplayTimer = setTimeout(function() {
        if (!isSpeaking) return;
        // Đọc tiếp câu trả lời
        speakEn(exam15QA[idx].a, true, function() {
          idx++;
          autoplayTimer = setTimeout(next, 900);
        });
      }, 500);
    });
  }
  next();
}

// ── FILTER TABS ──
function filterCategory(cat, btnEl) {
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
}

// ── SEARCH LOGIC ──
function handleSearch() {
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
}

// ── TOGGLE COLLAPSIBLE ──
function toggleCollapsible() {
  var wrap = document.getElementById('collapsible-advanced');
  if (wrap) wrap.classList.toggle('open');
}

// ── FLOATING SELECTION TOOLBAR LOGIC (Bôi đen từ để dịch & phát âm) ──
var currentSelectedText = '';
var currentTranslatedText = '';

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function fetchTranslationForText(text) {
  if (!text) return '';
  var trimmed = text.trim();
  try {
    var isOnline = window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    var apiBase = isOnline ? '' : (window.location.protocol.startsWith('http') ? '' : 'https://tieng-anh-dau-ra-ptk.onrender.com');
    var res = await fetch(apiBase + '/api/translate-word?word=' + encodeURIComponent(trimmed));
    if (res.ok) {
      var data = await res.json();
      if (data && data.translation && data.translation.toLowerCase() !== trimmed.toLowerCase()) {
        return data.translation;
      }
    }
  } catch (err) {}

  try {
    var gtxUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=' + encodeURIComponent(trimmed);
    var gtxRes = await fetch(gtxUrl);
    if (gtxRes.ok) {
      var data2 = await gtxRes.json();
      if (data2 && data2[0] && Array.isArray(data2[0])) {
        var trans = data2[0].map(function(item) { return (item && item[0]) || ''; }).join(' ').trim();
        if (trans) return trans;
      }
    }
  } catch (err2) {}

  return trimmed;
}

function initSelectionToolbar() {
  var toolbar = document.getElementById('selection-quick-toolbar');
  var previewEl = document.getElementById('sel-text-preview');
  var transResultEl = document.getElementById('sel-trans-result');
  var btnTrans = document.getElementById('sel-btn-trans');
  var btnEn = document.getElementById('sel-btn-en');
  var btnVi = document.getElementById('sel-btn-vi');
  var btnCopy = document.getElementById('sel-btn-copy');
  var btnClose = document.getElementById('sel-btn-close');

  if (!toolbar) return;

  function handleSelection(e) {
    if (toolbar.contains(e.target)) return;
    var selection = window.getSelection();
    var text = selection ? selection.toString().trim() : '';

    if (!text || text.length < 1) {
      toolbar.style.display = 'none';
      return;
    }

    currentSelectedText = text;
    currentTranslatedText = '';
    if (transResultEl) {
      transResultEl.style.display = 'none';
      transResultEl.innerHTML = '';
    }

    if (previewEl) {
      var snippet = text.length > 28 ? text.substring(0, 26) + '...' : text;
      previewEl.innerText = '"' + snippet + '"';
    }

    try {
      var range = selection.getRangeAt(0);
      var rect = range.getBoundingClientRect();
      if (!rect || (rect.width === 0 && rect.height === 0)) return;

      toolbar.style.display = 'flex';
      var tbWidth = toolbar.offsetWidth || 300;
      var tbHeight = toolbar.offsetHeight || 75;
      var top = rect.top - tbHeight - 12;
      var left = rect.left + (rect.width / 2) - (tbWidth / 2);

      if (top < 70) top = rect.bottom + 10;
      if (left < 10) left = 10;
      if (left + tbWidth > window.innerWidth - 10) left = window.innerWidth - tbWidth - 10;

      toolbar.style.top = top + 'px';
      toolbar.style.left = left + 'px';
    } catch (err) {}
  }

  document.addEventListener('mouseup', function(e) { setTimeout(function() { handleSelection(e); }, 40); });
  document.addEventListener('mousedown', function(e) {
    if (!toolbar.contains(e.target)) toolbar.style.display = 'none';
  });

  if (btnTrans) {
    btnTrans.onclick = async function(e) {
      e.stopPropagation();
      if (!currentSelectedText) return;
      if (transResultEl) {
        transResultEl.style.display = 'block';
        transResultEl.innerHTML = '<em>⏳ Đang dịch...</em>';
      }
      var trans = await fetchTranslationForText(currentSelectedText);
      currentTranslatedText = trans;
      if (transResultEl) {
        transResultEl.innerHTML = '<strong>🇻🇳 Dịch:</strong> ' + escapeHtml(trans);
      }
    };
  }

  if (btnEn) {
    btnEn.onclick = function(e) {
      e.stopPropagation();
      if (currentSelectedText) speakEn(currentSelectedText, true);
    };
  }

  if (btnVi) {
    btnVi.onclick = async function(e) {
      e.stopPropagation();
      if (!currentSelectedText) return;
      if (!currentTranslatedText) {
        currentTranslatedText = await fetchTranslationForText(currentSelectedText);
      }
      speakVi(currentTranslatedText, true);
    };
  }

  if (btnCopy) {
    btnCopy.onclick = function(e) {
      e.stopPropagation();
      if (currentSelectedText) {
        navigator.clipboard.writeText(currentSelectedText).then(function() {
          btnCopy.innerText = '✅ Đã copy';
          setTimeout(function() { btnCopy.innerText = '📋 Copy'; }, 2000);
        });
      }
    };
  }

  if (btnClose) {
    btnClose.onclick = function(e) {
      e.stopPropagation();
      toolbar.style.display = 'none';
    };
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initSelectionToolbar);
} else {
  initSelectionToolbar();
}
</script>
</body>
</html>
`;

fs.writeFileSync('self-intro.html', htmlContent, 'utf8');
console.log('✅ Updated self-intro.html successfully! Size: ' + htmlContent.length + ' bytes');
