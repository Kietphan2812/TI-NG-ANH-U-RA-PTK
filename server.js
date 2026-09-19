const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Cấu hình kết nối Neon PostgreSQL
let pool = null;
if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  // Tự động khởi tạo bảng lưu bài thi trong PostgreSQL nếu chưa có
  const initDb = async () => {
    try {
      const client = await pool.connect();
      await client.query(`
        CREATE TABLE IF NOT EXISTS exam_submissions (
          id SERIAL PRIMARY KEY,
          student_name VARCHAR(255) DEFAULT 'Thí sinh',
          student_code VARCHAR(100),
          topic_id VARCHAR(100) DEFAULT 'topic1',
          score INT NOT NULL,
          total_questions INT NOT NULL,
          percentage INT NOT NULL,
          rating VARCHAR(255),
          breakdown JSONB,
          essay_text TEXT,
          submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      client.release();
      console.log('✅ Đã kết nối và khởi tạo bảng PostgreSQL trên Neon Tech thành công!');
    } catch (err) {
      console.error('⚠️ Không thể kết nối cơ sở dữ liệu PostgreSQL:', err.message);
    }
  };
  initDb();
} else {
  console.log('ℹ️ DATABASE_URL chưa được cấu hình. Hệ thống đang chạy ở chế độ offline (bài thi lưu cục bộ trên trình duyệt).');
}

// API lưu kết quả bài thi vào PostgreSQL
app.post('/api/submit', async (req, res) => {
  const { studentName, studentCode, topicId, score, totalQuestions, percentage, rating, breakdown, essayText } = req.body;

  if (!pool) {
    return res.json({
      success: true,
      mode: 'local',
      message: 'Chưa cấu hình DATABASE_URL trên Render. Kết quả được lưu tạm thời trên trình duyệt.'
    });
  }

  try {
    const query = `
      INSERT INTO exam_submissions 
      (student_name, student_code, topic_id, score, total_questions, percentage, rating, breakdown, essay_text)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id, submitted_at;
    `;
    const values = [
      studentName || 'Thí sinh',
      studentCode || 'N/A',
      topicId || 'topic1',
      score,
      totalQuestions,
      percentage,
      rating,
      JSON.stringify(breakdown || {}),
      essayText || ''
    ];

    const result = await pool.query(query, values);
    res.json({
      success: true,
      mode: 'neon_postgres',
      message: 'Đã lưu kết quả thi thành công vào cơ sở dữ liệu Neon PostgreSQL!',
      submissionId: result.rows[0].id,
      submittedAt: result.rows[0].submitted_at
    });
  } catch (err) {
    console.error('Lỗi khi lưu bài thi vào PostgreSQL:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// API lấy danh sách bài thi gần nhất
app.get('/api/submissions', async (req, res) => {
  if (!pool) {
    return res.json({ success: true, submissions: [] });
  }

  try {
    const result = await pool.query(`
      SELECT id, student_name, student_code, topic_id, score, total_questions, percentage, rating, submitted_at
      FROM exam_submissions
      ORDER BY submitted_at DESC
      LIMIT 30;
    `);
    res.json({ success: true, submissions: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API phát âm tự nhiên (Proxy Google Cloud TTS - Không bao giờ lỗi CORS hay 403)
app.get('/api/tts', async (req, res) => {
  const { text, lang } = req.query;
  if (!text) return res.status(400).send('Text is required');

  try {
    const safeText = encodeURIComponent(text.substring(0, 200));
    const targetLang = lang || 'vi';
    const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${targetLang}&q=${safeText}`;

    const response = await fetch(googleUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://translate.google.com/'
      }
    });

    if (!response.ok) {
      throw new Error(`TTS service status: ${response.status}`);
    }

    res.set({
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*'
    });

    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('Lỗi khi lấy TTS audio:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// API tra nghĩa từng từ linh hoạt (Google Translate API Proxy)
app.get('/api/translate-word', async (req, res) => {
  const { word } = req.query;
  if (!word) return res.json({ translation: '' });

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(word.trim())}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Translate service error');
    const data = await response.json();
    const translation = (data && data[0] && data[0][0] && data[0][0][0]) || word;
    res.json({ word, translation: translation.toLowerCase() });
  } catch (err) {
    console.error('Translate word error:', err.message);
    res.json({ word, translation: word });
  }
});

// Endpoint kiểm tra trạng thái máy chủ
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    databaseConnected: Boolean(pool),
    timestamp: new Date().toISOString()
  });
});

// Phục vụ giao diện người dùng
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Máy chủ Tiếng Anh Đầu Ra đang chạy tại http://localhost:${PORT}`);
});
