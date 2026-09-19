// ============================================================================
// HỆ THỐNG PHIÊN ÂM VÀ HƯỚNG DẪN CÁCH ĐỌC TIẾNG VIỆT CHO TẤT CẢ TỪ TIẾNG ANH
// Chuẩn xác theo cấu trúc ngữ âm Quốc tế (IPA) + Phiên âm bồi tiếng Việt dễ hiểu
// ============================================================================

const WORD_PRONUNCIATION_DB = {
  // --- Từ trong ảnh ví dụ của học viên ---
  "countries": {
    ipa: "/ˈkʌn.triz/",
    vi: "CAN-triz",
    notes: "Nhấn mạnh vào âm đầu 'CAN', 'tries' đọc nhẹ và nhanh, âm cuối 'z' chứ không phải 's'.",
    syllables: [
      { part: "CAN", desc: "giống 'can' trong tiếng Anh (không phải 'can' tiếng Việt)" },
      { part: "tries", desc: "đọc nhanh, gần giống 'chrịz'" }
    ]
  },
  "country": {
    ipa: "/ˈkʌn.tri/",
    vi: "CAN-tri",
    notes: "Nhấn trọng âm vào âm đầu 'CAN', 'tri' đọc nhanh.",
    syllables: [
      { part: "CAN", desc: "phát âm giống 'căn' lai 'can'" },
      { part: "tri", desc: "đọc nhanh, gần như 'chri'" }
    ]
  },
  "some": {
    ipa: "/sʌm/",
    vi: "săm",
    notes: "Đọc dứt khoát, âm 'ă' ngậm môi thành âm 'm'.",
    syllables: [
      { part: "some", desc: "đọc gần giống 'săm' trong tiếng Việt nhưng trầm và nhẹ hơn" }
    ]
  },
  "water": {
    ipa: "/ˈwɔː.tər/",
    vi: "OÁT-tờ",
    notes: "Nhấn mạnh âm 'OÁT', âm 'tờ' đọc nhẹ lướt nhanh.",
    syllables: [
      { part: "wa-", desc: "đọc là 'oát' tròn môi" },
      { part: "-ter", desc: "đọc là 'tờ' hoặc 'đờ' nhẹ (giọng Mỹ)" }
    ]
  },
  "in": {
    ipa: "/ɪn/",
    vi: "in",
    notes: "Đọc nhanh gọn, không kéo dài.",
    syllables: [
      { part: "in", desc: "giống 'in' trong tiếng Việt" }
    ]
  },
  "the": {
    ipa: "/ðə/",
    vi: "đơ / thơ",
    notes: "Đặt đầu lưỡi giữa hai hàm răng và thổi nhẹ âm 'đơ'.",
    syllables: [
      { part: "the", desc: "đặt lưỡi giữa 2 răng, phát âm lai giữa 'đơ' và 'thơ'" }
    ]
  },
  "lake": {
    ipa: "/leɪk/",
    vi: "lâyk",
    notes: "Kéo dài âm 'lây' và bật nhẹ âm gió 'k' ở cuống họng.",
    syllables: [
      { part: "lake", desc: "đọc là 'lây' rồi bật đuôi 'k'" }
    ]
  },
  "near": {
    ipa: "/nɪər/",
    vi: "ni-ơ",
    notes: "Âm 'ni' nối liền với âm 'ơ', uốn lưỡi nhẹ.",
    syllables: [
      { part: "near", desc: "đọc lướt nhanh từ 'ni' sang 'ơ'" }
    ]
  },
  "elephants": {
    ipa: "/ˈel.ɪ.fənts/",
    vi: "É-lơ-phừnts",
    notes: "Nhấn mạnh âm 'É', đuôi 'nts' bật xì gió nhẹ.",
    syllables: [
      { part: "e-", desc: "đọc dứt khoát 'é'" },
      { part: "-le-", desc: "đọc nhẹ 'lơ' hoặc 'li'" },
      { part: "-phants", desc: "đọc 'phừnt' rồi xì nhẹ 's'" }
    ]
  },
  "elephant": {
    ipa: "/ˈel.ɪ.fənt/",
    vi: "É-lơ-phừnt",
    notes: "Nhấn mạnh âm 'É', đuôi bật âm 't'.",
    syllables: [
      { part: "e-", desc: "đọc dứt khoát 'é'" },
      { part: "-le-", desc: "đọc nhẹ 'lơ'" },
      { part: "-phant", desc: "đọc 'phừnt' bật đuôi 't'" }
    ]
  },

  // --- Từ vựng các câu trắc nghiệm (Questions 1 - 10) ---
  "each": {
    ipa: "/iːtʃ/",
    vi: "ích-ch",
    notes: "Kéo dài âm 'i' và bật âm 'ch' dứt khoát.",
    syllables: [
      { part: "each", desc: "đọc 'i' dài rồi bật âm 'ch' như 'ích-ch'" }
    ]
  },
  "person": {
    ipa: "/ˈpɜː.sən/",
    vi: "PƠ-xừn",
    notes: "Nhấn mạnh âm 'PƠ' bật hơi, âm 'xừn' đọc nhẹ.",
    syllables: [
      { part: "per-", desc: "bật hơi âm 'p', đọc là 'pơ'" },
      { part: "-son", desc: "đọc lướt nhanh 'xừn'" }
    ]
  },
  "room": {
    ipa: "/ruːm/",
    vi: "rum",
    notes: "Kéo dài âm 'u' tròn môi, khép môi âm 'm'.",
    syllables: [
      { part: "room", desc: "đọc 'rum' kéo dài âm u" }
    ]
  },
  "turn": {
    ipa: "/tɜːn/",
    vi: "tơn",
    notes: "Kéo dài âm 'ơ' uốn lưỡi, kết thúc bằng âm 'n'.",
    syllables: [
      { part: "turn", desc: "đọc 'tơn' uốn lưỡi nhẹ" }
    ]
  },
  "turned": {
    ipa: "/tɜːnd/",
    vi: "tơn-đ",
    notes: "Đọc 'tơn' và bật nhẹ âm đuôi 'd' rung cổ họng.",
    syllables: [
      { part: "turned", desc: "đọc 'tơn' rồi bật đuôi 'đ'" }
    ]
  },
  "head": {
    ipa: "/hed/",
    vi: "hét-đ",
    notes: "Đọc như 'hét' nhưng bật nhẹ âm 'đ' cuối.",
    syllables: [
      { part: "head", desc: "đọc 'he' và chặn nhẹ âm 'đ'" }
    ]
  },
  "front": {
    ipa: "/frʌnt/",
    vi: "phrăn-t",
    notes: "Phát âm âm 'phr' liền mạch, bật đuôi 't'.",
    syllables: [
      { part: "front", desc: "đọc 'phrăn' bật nhẹ âm 't'" }
    ]
  },
  "when": {
    ipa: "/wen/",
    vi: "oen",
    notes: "Môi chụm lại phát âm 'oen' nhanh gọn.",
    syllables: [
      { part: "when", desc: "đọc là 'oen'" }
    ]
  },
  "teacher": {
    ipa: "/ˈtiː.tʃər/",
    vi: "TÍ-chờ",
    notes: "Nhấn mạnh âm 'TÍ' kéo dài, âm 'chờ' đọc nhẹ.",
    syllables: [
      { part: "tea-", desc: "đọc 'tí' kéo dài âm i" },
      { part: "-cher", desc: "đọc 'chờ' nhẹ uốn lưỡi" }
    ]
  },
  "entered": {
    ipa: "/ˈen.təd/",
    vi: "EN-tờ-đ",
    notes: "Nhấn âm 'EN', đuôi bật nhẹ 'đ'.",
    syllables: [
      { part: "en-", desc: "đọc 'en' dứt khoát" },
      { part: "-tered", desc: "đọc 'tờ' bật đuôi 'đ'" }
    ]
  },
  "me": {
    ipa: "/miː/",
    vi: "mi",
    notes: "Đọc 'mi' kéo dài âm i.",
    syllables: [{ part: "me", desc: "đọc là 'mi'" }]
  },
  "their": {
    ipa: "/ðeər/",
    vi: "đê-ơ",
    notes: "Đặt lưỡi giữa hai răng, thổi âm 'đ' rồi đọc 'e-ơ'.",
    syllables: [{ part: "their", desc: "đọc lai giữa 'đe-ơ' và 'the-ơ'" }]
  },
  "his": {
    ipa: "/hɪz/",
    vi: "hít-z",
    notes: "Đọc 'hít' nhưng đuôi rung âm 'z'.",
    syllables: [{ part: "his", desc: "đọc 'hi' rồi xì rung âm 'z'" }]
  },
  "her": {
    ipa: "/hɜːr/",
    vi: "hơ",
    notes: "Kéo dài âm 'hơ' và uốn cong đầu lưỡi.",
    syllables: [{ part: "her", desc: "đọc là 'hơ' uốn lưỡi" }]
  },
  "our": {
    ipa: "/aʊər/",
    vi: "ao-ơ",
    notes: "Đọc lướt nhanh từ 'ao' sang 'ơ'.",
    syllables: [{ part: "our", desc: "đọc là 'ao-ơ'" }]
  },
  "principal": {
    ipa: "/ˈprɪn.sə.pəl/",
    vi: "PRIN-sơ-pồ",
    notes: "Nhấn mạnh âm đầu 'PRIN', hai âm sau đọc nhẹ.",
    syllables: [
      { part: "prin-", desc: "đọc 'prin' bật hơi" },
      { part: "-ci-", desc: "đọc nhẹ 'sơ'" },
      { part: "-pal", desc: "đọc 'pồ' ngậm nhẹ môi" }
    ]
  },
  "speech": {
    ipa: "/spiːtʃ/",
    vi: "xpít-ch",
    notes: "Bắt đầu bằng tiếng xì 'x', 'pít' kéo dài rồi bật 'ch'.",
    syllables: [{ part: "speech", desc: "đọc 'x-pít' bật đuôi 'ch'" }]
  },
  "fainted": {
    ipa: "/ˈfeɪn.tɪd/",
    vi: "PHÊN-tịt",
    notes: "Nhấn âm 'PHÊN', đuôi 'tịt' đọc rõ.",
    syllables: [
      { part: "fain-", desc: "đọc 'phên' kéo dài âm ê" },
      { part: "-ted", desc: "đọc là 'tịt' nhẹ" }
    ]
  },
  "attentively": {
    ipa: "/əˈten.tɪv.li/",
    vi: "ờ-TEN-típ-li",
    notes: "Nhấn mạnh vào âm thứ hai 'TEN'.",
    syllables: [
      { part: "at-", desc: "đọc nhẹ 'ờ'" },
      { part: "-ten-", desc: "nhấn mạnh 'ten'" },
      { part: "-tive-", desc: "đọc 'típ'" },
      { part: "-ly", desc: "đọc 'li' nhẹ" }
    ]
  },
  "absent": {
    ipa: "/ˈæb.sənt/",
    vi: "ÉP-xừnt",
    notes: "Nhấn âm 'ÉP', đuôi 'xừnt' bật nhẹ 't'.",
    syllables: [
      { part: "ab-", desc: "đọc là 'ép'" },
      { part: "-sent", desc: "đọc 'xừnt' bật đuôi 't'" }
    ]
  },
  "present": {
    ipa: "/ˈprez.ənt/",
    vi: "PRE-zừnt",
    notes: "Nhấn âm 'PRE', âm 'zừnt' rung nhẹ.",
    syllables: [
      { part: "pre-", desc: "đọc là 'pre'" },
      { part: "-sent", desc: "đọc là 'zừnt'" }
    ]
  },
  "proud": {
    ipa: "/praʊd/",
    vi: "prao-đ",
    notes: "Đọc 'prao' rồi bật nhẹ âm 'đ' ở vòm họng.",
    syllables: [{ part: "proud", desc: "đọc 'prao' bật đuôi 'đ'" }]
  },
  "obedient": {
    ipa: "/əˈbiː.di.ənt/",
    vi: "ơ-BÍ-đi-ừnt",
    notes: "Nhấn mạnh âm 'BÍ' kéo dài.",
    syllables: [
      { part: "o-", desc: "đọc nhẹ 'ơ'" },
      { part: "-be-", desc: "nhấn 'bí' kéo dài" },
      { part: "-di-", desc: "đọc 'đi'" },
      { part: "-ent", desc: "đọc 'ừnt' nhẹ" }
    ]
  },
  "handsome": {
    ipa: "/ˈhæn.səm/",
    vi: "HĂN-xừm",
    notes: "Nhấn mạnh âm 'HĂN', âm d câm, 'xừm' nhẹ.",
    syllables: [
      { part: "hand-", desc: "đọc là 'hăn' (âm d câm)" },
      { part: "-some", desc: "đọc nhẹ 'xừm'" }
    ]
  },
  "good-looking": {
    ipa: "/ˌɡʊdˈlʊk.ɪŋ/",
    vi: "gút-LÚC-king",
    notes: "Nhấn vào 'LÚC', 'gút' đọc gọn.",
    syllables: [
      { part: "good", desc: "đọc 'gút' ngắn" },
      { part: "look-", desc: "nhấn 'lúc' bật k" },
      { part: "-ing", desc: "đọc 'king' nhẹ" }
    ]
  },
  "attractive": {
    ipa: "/əˈtræk.tɪv/",
    vi: "ơ-TRÁC-típ",
    notes: "Nhấn mạnh âm 'TRÁC', đuôi 'típ' nhẹ.",
    syllables: [
      { part: "at-", desc: "đọc nhẹ 'ơ'" },
      { part: "-trac-", desc: "nhấn mạnh 'trác'" },
      { part: "-tive", desc: "đọc 'típ' khép môi" }
    ]
  },
  "beautiful": {
    ipa: "/ˈbjuː.tɪ.fəl/",
    vi: "BIÚ-ti-phun",
    notes: "Nhấn mạnh âm 'BIÚ', đuôi 'phun' cong lưỡi nhẹ.",
    syllables: [
      { part: "beau-", desc: "nhấn mạnh 'biú'" },
      { part: "-ti-", desc: "đọc 'ti' hoặc 'đi'" },
      { part: "-ful", desc: "đọc 'phun' uốn lưỡi" }
    ]
  },
  "clever": {
    ipa: "/ˈklev.ər/",
    vi: "CLÉ-vờ",
    notes: "Nhấn âm 'CLÉ', âm 'vờ' đọc nhẹ uốn lưỡi.",
    syllables: [
      { part: "cle-", desc: "đọc 'clé'" },
      { part: "-ver", desc: "đọc 'vờ' nhẹ" }
    ]
  },
  "punctual": {
    ipa: "/ˈpʌŋk.tʃu.əl/",
    vi: "PĂNG-chu-ồ",
    notes: "Nhấn âm đầu 'PĂNG', âm giữa bật 'chu'.",
    syllables: [
      { part: "punc-", desc: "nhấn 'păng-k'" },
      { part: "-tu-", desc: "đọc 'chu'" },
      { part: "-al", desc: "đọc 'ồ' nhẹ" }
    ]
  },
  "educated": {
    ipa: "/ˈedʒ.u.keɪ.tɪd/",
    vi: "É-đu-cây-tịt",
    notes: "Nhấn âm 'É', âm 'cây' kéo dài, đuôi 'tịt'.",
    syllables: [
      { part: "ed-", desc: "nhấn 'é'" },
      { part: "-u-", desc: "đọc 'đu'" },
      { part: "-ca-", desc: "đọc 'cây'" },
      { part: "-ted", desc: "đọc 'tịt'" }
    ]
  },
  "mended": {
    ipa: "/ˈmen.dɪd/",
    vi: "MEN-địt",
    notes: "Nhấn âm 'MEN', đuôi 'địt' rõ ràng.",
    syllables: [
      { part: "men-", desc: "nhấn 'men'" },
      { part: "-ded", desc: "đọc 'địt'" }
    ]
  },
  "farmer": {
    ipa: "/ˈfɑː.mər/",
    vi: "PHA-mờ",
    notes: "Nhấn âm 'PHA' kéo dài, 'mờ' nhẹ.",
    syllables: [
      { part: "far-", desc: "đọc 'pha' kéo dài" },
      { part: "-mer", desc: "đọc 'mờ' uốn lưỡi" }
    ]
  },

  // --- Biển báo & Đọc hiểu (Questions 11 - 30) ---
  "supersaver": {
    ipa: "/ˈsuː.pəˌseɪ.vər/",
    vi: "XU-pơ-xây-vờ",
    notes: "Nhấn âm 'XU' và 'XÂY'.",
    syllables: [
      { part: "super-", desc: "đọc 'xu-pơ'" },
      { part: "-saver", desc: "đọc 'xây-vờ'" }
    ]
  },
  "ticket": {
    ipa: "/ˈtɪk.ɪt/",
    vi: "TÍC-kịt",
    notes: "Nhấn âm 'TÍC', 'kịt' đọc nhanh.",
    syllables: [
      { part: "tick-", desc: "nhấn 'tíc'" },
      { part: "-et", desc: "đọc 'kịt' nhẹ" }
    ]
  },
  "tickets": {
    ipa: "/ˈtɪk.ɪts/",
    vi: "TÍC-kịt-s",
    notes: "Đọc 'TÍC-kịt' rồi xì nhẹ âm s.",
    syllables: [
      { part: "tickets", desc: "đọc 'tíc-kịt' xì đuôi 's'" }
    ]
  },
  "machine": {
    ipa: "/məˈʃiːn/",
    vi: "mờ-SÍN",
    notes: "Nhấn mạnh âm hai 'SÍN', âm đầu 'mờ' lướt nhẹ.",
    syllables: [
      { part: "ma-", desc: "đọc nhẹ 'mờ'" },
      { part: "-chine", desc: "nhấn mạnh 'sín' kéo dài" }
    ]
  },
  "order": {
    ipa: "/ˈɔː.dər/",
    vi: "O-đờ",
    notes: "Nhấn âm đầu 'O' kéo dài, 'đờ' nhẹ.",
    syllables: [
      { part: "or-", desc: "nhấn 'o' sâu cổ họng" },
      { part: "-der", desc: "đọc 'đờ' nhẹ" }
    ]
  },
  "entrance": {
    ipa: "/ˈen.trəns/",
    vi: "EN-trừn-s",
    notes: "Nhấn âm 'EN', đuôi xì nhẹ âm s.",
    syllables: [
      { part: "en-", desc: "nhấn 'en'" },
      { part: "-trance", desc: "đọc 'trừn' rồi xì 's'" }
    ]
  },
  "library": {
    ipa: "/ˈlaɪ.brər.i/",
    vi: "LAI-brơ-ri",
    notes: "Nhấn âm 'LAI', hai âm sau lướt nhanh.",
    syllables: [
      { part: "li-", desc: "nhấn 'lai'" },
      { part: "-bra-", desc: "đọc 'brơ'" },
      { part: "-ry", desc: "đọc 'ri'" }
    ]
  },
  "librarian": {
    ipa: "/laɪˈbreə.ri.ən/",
    vi: "lai-BRE-ri-ừn",
    notes: "Nhấn mạnh vào âm 'BRE'.",
    syllables: [
      { part: "li-", desc: "đọc 'lai'" },
      { part: "-bra-", desc: "nhấn mạnh 'bre'" },
      { part: "-ri-an", desc: "đọc 'ri-ừn'" }
    ]
  },
  "drinks": {
    ipa: "/drɪŋks/",
    vi: "đrinh-ks",
    notes: "Đọc 'đrinh' rồi bật 'k' xì 's'.",
    syllables: [{ part: "drinks", desc: "đọc 'đrinh' bật đuôi 'ks'" }]
  },
  "clear": {
    ipa: "/klɪər/",
    vi: "cli-ơ",
    notes: "Đọc lướt nhanh 'cli-ơ' uốn lưỡi.",
    syllables: [{ part: "clear", desc: "đọc là 'cli-ơ'" }]
  },

  // --- Tên riêng & Địa danh ---
  "tony": {
    ipa: "/ˈtəʊ.ni/",
    vi: "TÂU-ni",
    notes: "Nhấn âm 'TÂU', âm 'ni' đọc nhẹ.",
    syllables: [{ part: "To-", desc: "nhấn 'tâu'" }, { part: "-ny", desc: "đọc 'ni'" }]
  },
  "anna": {
    ipa: "/ˈæn.ə/",
    vi: "AN-nơ",
    notes: "Nhấn âm 'AN', âm 'nơ' đọc lướt nhẹ.",
    syllables: [{ part: "An-", desc: "nhấn 'an'" }, { part: "-na", desc: "đọc 'nơ'" }]
  },
  "mexico": {
    ipa: "/ˈmek.sɪ.kəʊ/",
    vi: "MÉC-xi-câu",
    notes: "Nhấn âm đầu 'MÉC', hai âm sau nhẹ.",
    syllables: [{ part: "Mex-", desc: "nhấn 'méc'" }, { part: "-i-", desc: "đọc 'xi'" }, { part: "-co", desc: "đọc 'câu'" }]
  },
  "london": {
    ipa: "/ˈlʌn.dən/",
    vi: "LĂN-dừn",
    notes: "Nhấn âm 'LĂN', âm 'dừn' đọc nhẹ.",
    syllables: [{ part: "Lon-", desc: "nhấn 'lăn'" }, { part: "-don", desc: "đọc 'dừn'" }]
  },
  "english": {
    ipa: "/ˈɪŋ.ɡlɪʃ/",
    vi: "INH-glít-s",
    notes: "Nhấn âm 'INH', đuôi 'lít-s' cong lưỡi xì hơi dài.",
    syllables: [{ part: "Eng-", desc: "nhấn 'inh'" }, { part: "-lish", desc: "đọc 'glít' xì 'sh'" }]
  },
  "language": {
    ipa: "/ˈlæŋ.ɡwɪdʒ/",
    vi: "LĂNG-guỵt-d",
    notes: "Nhấn âm 'LĂNG', đuôi bật âm 'dʒ'.",
    syllables: [{ part: "lan-", desc: "nhấn 'lăng'" }, { part: "-guage", desc: "đọc 'guỵt-ch'" }]
  },

  // --- Tính từ miêu tả ngoại hình & tính cách ---
  "curly": {
    ipa: "/ˈkɜː.li/",
    vi: "CƠ-li",
    notes: "Nhấn âm 'CƠ' kéo dài uốn lưỡi, 'li' đọc nhẹ.",
    syllables: [{ part: "cur-", desc: "nhấn 'cơ'" }, { part: "-ly", desc: "đọc 'li'" }]
  },
  "straight": {
    ipa: "/streɪt/",
    vi: "xtrêyt",
    notes: "Đọc 'xtrêy' rồi bật đuôi 't' dứt khoát.",
    syllables: [{ part: "straight", desc: "đọc 'xtrêyt' bật âm 't'" }]
  },
  "tall": {
    ipa: "/tɔːl/",
    vi: "tho-ồ",
    notes: "Đọc 'tho' kéo dài rồi uốn lưỡi chạm hàm trên âm 'l'.",
    syllables: [{ part: "tall", desc: "đọc 'tho' uốn lưỡi 'l'" }]
  },
  "short": {
    ipa: "/ʃɔːt/",
    vi: "soát-t",
    notes: "Tròn môi âm 'sh' rồi đọc 'soát' bật đuôi 't'.",
    syllables: [{ part: "short", desc: "đọc 'soát' bật âm 't'" }]
  },
  "slim": {
    ipa: "/slɪm/",
    vi: "xlim",
    notes: "Đọc lướt 'x-lim' ngậm nhẹ môi.",
    syllables: [{ part: "slim", desc: "đọc là 'xlim'" }]
  },
  "fat": {
    ipa: "/fæt/",
    vi: "phét-t",
    notes: "Đặt răng hàm trên chạm môi dưới thổi âm 'ph', đọc 'phét' bật 't'.",
    syllables: [{ part: "fat", desc: "đọc 'phét' bật âm 't'" }]
  },
  "thin": {
    ipa: "/θɪn/",
    vi: "thin",
    notes: "Đặt đầu lưỡi giữa 2 răng rồi thổi nhẹ 'thin'.",
    syllables: [{ part: "thin", desc: "đặt lưỡi giữa 2 răng thổi 'thin'" }]
  },
  "blonde": {
    ipa: "/blɒnd/",
    vi: "blo-n-đ",
    notes: "Đọc 'blon' bật nhẹ đuôi 'đ'.",
    syllables: [{ part: "blonde", desc: "đọc 'blon' bật đuôi 'đ'" }]
  },
  "bald": {
    ipa: "/bɔːld/",
    vi: "bo-ừld",
    notes: "Đọc 'bo' kéo dài rồi cong lưỡi bật nhẹ 'ld'.",
    syllables: [{ part: "bald", desc: "đọc 'bo' kéo dài uốn lưỡi 'ld'" }]
  },
  "beard": {
    ipa: "/bɪəd/",
    vi: "bi-ơ-đ",
    notes: "Đọc 'bi-ơ' rồi bật nhẹ âm 'đ'.",
    syllables: [{ part: "beard", desc: "đọc 'bi-ơ' bật đuôi 'đ'" }]
  },
  "ponytail": {
    ipa: "/ˈpəʊ.ni.teɪl/",
    vi: "PÂU-ni-têyl",
    notes: "Nhấn âm 'PÂU' và 'TÊYL'.",
    syllables: [{ part: "po-ny-", desc: "đọc 'pâu-ni'" }, { part: "-tail", desc: "đọc 'têyl'" }]
  },
  "fringe": {
    ipa: "/frɪndʒ/",
    vi: "phrin-dʒ",
    notes: "Đọc 'phrin' rồi bật âm gió rung 'dʒ'.",
    syllables: [{ part: "fringe", desc: "đọc 'phrin' bật đuôi 'dʒ'" }]
  },
  "cheerful": {
    ipa: "/ˈtʃɪə.fəl/",
    vi: "CHÍ-ơ-phun",
    notes: "Nhấn mạnh âm 'CHÍ-ơ', đuôi 'phun' nhẹ.",
    syllables: [{ part: "cheer-", desc: "nhấn 'chí-ơ'" }, { part: "-ful", desc: "đọc 'phun'" }]
  },
  "optimistic": {
    ipa: "/ˌɒp.tɪˈmɪs.tɪk/",
    vi: "óp-ti-MÍT-xtic",
    notes: "Nhấn mạnh vào âm 'MÍT', đuôi 'xtic'.",
    syllables: [
      { part: "op-", desc: "đọc 'óp'" },
      { part: "-ti-", desc: "đọc 'ti'" },
      { part: "-mis-", desc: "nhấn mạnh 'mít'" },
      { part: "-tic", desc: "đọc 'xtic'" }
    ]
  },
  "pessimistic": {
    ipa: "/ˌpes.ɪˈmɪs.tɪk/",
    vi: "pét-xi-MÍT-xtic",
    notes: "Nhấn mạnh vào âm 'MÍT', đuôi 'xtic'.",
    syllables: [
      { part: "pes-", desc: "đọc 'pét'" },
      { part: "-si-", desc: "đọc 'xi'" },
      { part: "-mis-", desc: "nhấn mạnh 'mít'" },
      { part: "-tic", desc: "đọc 'xtic'" }
    ]
  },
  "stubborn": {
    ipa: "/ˈstʌb.ən/",
    vi: "XTẮP-bơn",
    notes: "Nhấn mạnh âm 'XTẮP', 'bơn' đọc nhẹ.",
    syllables: [{ part: "stub-", desc: "nhấn 'xtắp'" }, { part: "-born", desc: "đọc 'bơn'" }]
  },
  "selfish": {
    ipa: "/ˈsel.fɪʃ/",
    vi: "XÉO-phít-s",
    notes: "Nhấn âm 'XÉO', đuôi 'phít-s' chu môi thổi gió.",
    syllables: [{ part: "sel-", desc: "nhấn 'xéo'" }, { part: "-fish", desc: "đọc 'phít-sh'" }]
  },
  "generous": {
    ipa: "/ˈdʒen.ər.əs/",
    vi: "ĐEN-nơ-rợt",
    notes: "Nhấn âm 'ĐEN' bật hơi 'dʒ', hai âm sau nhẹ.",
    syllables: [{ part: "gen-", desc: "nhấn 'đen'" }, { part: "-er-", desc: "đọc 'nơ'" }, { part: "-ous", desc: "đọc 'rợt'" }]
  },
  "lazy": {
    ipa: "/ˈleɪ.zi/",
    vi: "LÂY-zi",
    notes: "Nhấn mạnh âm 'LÂY', âm 'zi' rung lưỡi.",
    syllables: [{ part: "la-", desc: "nhấn 'lây'" }, { part: "-zy", desc: "đọc 'zi'" }]
  },
  "miserable": {
    ipa: "/ˈmɪz.ər.ə.bəl/",
    vi: "MÍ-zơ-rơ-bồ",
    notes: "Nhấn âm đầu 'MÍ', các âm sau đọc lướt nhanh.",
    syllables: [{ part: "mi-", desc: "nhấn 'mí'" }, { part: "-ser-", desc: "đọc 'zơ'" }, { part: "-a-ble", desc: "đọc 'rơ-bồ'" }]
  },
  "confident": {
    ipa: "/ˈkɒn.fɪ.dənt/",
    vi: "CON-phi-đừnt",
    notes: "Nhấn mạnh âm 'CON', đuôi 'đừnt' bật t.",
    syllables: [{ part: "con-", desc: "nhấn 'con'" }, { part: "-fi-", desc: "đọc 'phi'" }, { part: "-dent", desc: "đọc 'đừnt'" }]
  },
  "extroverted": {
    ipa: "/ˈek.strə.vɜː.tɪd/",
    vi: "ÉC-xtrơ-vơ-tịt",
    notes: "Nhấn mạnh âm đầu 'ÉC'.",
    syllables: [{ part: "ex-", desc: "nhấn 'éc'" }, { part: "-tro-", desc: "đọc 'xtrơ'" }, { part: "-ver-", desc: "đọc 'vơ'" }, { part: "-ted", desc: "đọc 'tịt'" }]
  },
  "introverted": {
    ipa: "/ˈɪn.trə.vɜː.tɪd/",
    vi: "IN-trơ-vơ-tịt",
    notes: "Nhấn mạnh âm đầu 'IN'.",
    syllables: [{ part: "in-", desc: "nhấn 'in'" }, { part: "-tro-", desc: "đọc 'trơ'" }, { part: "-ver-", desc: "đọc 'vơ'" }, { part: "-ted", desc: "đọc 'tịt'" }]
  },
  "shy": {
    ipa: "/ʃaɪ/",
    vi: "sai",
    notes: "Chu môi thổi âm 'sh' rồi phát âm 'ai'.",
    syllables: [{ part: "shy", desc: "đọc 'sai' cong lưỡi" }]
  },
  "reliable": {
    ipa: "/rɪˈlaɪ.ə.bəl/",
    vi: "ri-LAI-ơ-bồ",
    notes: "Nhấn mạnh vào âm hai 'LAI'.",
    syllables: [{ part: "re-", desc: "đọc nhẹ 'ri'" }, { part: "-li-", desc: "nhấn mạnh 'lai'" }, { part: "-a-ble", desc: "đọc 'ơ-bồ'" }]
  }
};

// ============================================================================
// BỘ SINH PHIÊN ÂM TIẾNG VIỆT TỰ ĐỘNG THÔNG MINH CHO TẤT CẢ CÁC TỪ TIẾNG ANH (100%)
// Giúp bất kỳ từ tiếng Anh nào cũng có cách đọc bồi tiếng Việt dễ hiểu
// ============================================================================
function generateVietnamesePhonetics(rawWord) {
  if (!rawWord) return { ipa: "/.../", readingVi: "...", notes: "Chưa có dữ liệu" };
  const lower = rawWord.toLowerCase().trim();

  // 1. Kiểm tra từ điển có sẵn
  if (WORD_PRONUNCIATION_DB[lower]) {
    return { ...WORD_PRONUNCIATION_DB[lower], word: rawWord };
  }

  // 2. Xử lý các từ biến thể: số nhiều (-s, -es), quá khứ (-ed), tiếp diễn (-ing)
  if (lower.endsWith('ing') && lower.length > 4) {
    const root = lower.slice(0, -3);
    const rootData = WORD_PRONUNCIATION_DB[root] || WORD_PRONUNCIATION_DB[root + 'e'];
    if (rootData) {
      return {
        word: rawWord,
        ipa: rootData.ipa.replace(/\/$/, '') + ".ɪŋ/",
        readingVi: `${rootData.vi}-ing`,
        notes: `Đọc từ gốc '${rootData.vi}' rồi thêm đuôi 'ing' nhẹ.`,
        syllables: [
          { part: root, desc: `đọc là '${rootData.vi}'` },
          { part: "-ing", desc: "đọc lướt nhẹ 'ing'" }
        ]
      };
    }
  }

  if (lower.endsWith('ed') && lower.length > 3) {
    const root = lower.slice(0, -2);
    const rootData = WORD_PRONUNCIATION_DB[root] || WORD_PRONUNCIATION_DB[root + 'e'];
    if (rootData) {
      const isTeed = root.endsWith('t') || root.endsWith('d');
      const tail = isTeed ? "tịt" : "đ";
      return {
        word: rawWord,
        ipa: rootData.ipa.replace(/\/$/, '') + (isTeed ? "ɪd/" : "d/"),
        readingVi: `${rootData.vi}-${tail}`,
        notes: `Đọc từ gốc '${rootData.vi}' rồi bật nhẹ đuôi '${tail}'.`,
        syllables: [
          { part: root, desc: `đọc là '${rootData.vi}'` },
          { part: "-ed", desc: `bật nhẹ âm đuôi '${tail}'` }
        ]
      };
    }
  }

  if (lower.endsWith('s') && lower.length > 3 && !lower.endsWith('ss')) {
    const root = lower.slice(0, -1);
    const rootData = WORD_PRONUNCIATION_DB[root];
    if (rootData) {
      return {
        word: rawWord,
        ipa: rootData.ipa.replace(/\/$/, '') + "s/",
        readingVi: `${rootData.vi}-s`,
        notes: `Đọc từ gốc '${rootData.vi}' rồi xì nhẹ âm đuôi 's'.`,
        syllables: [
          { part: root, desc: `đọc là '${rootData.vi}'` },
          { part: "-s", desc: "xì nhẹ gió 's'" }
        ]
      };
    }
  }

  // 3. Quy tắc phát âm ngữ âm (Phonetic Rule-Engine) theo chuẩn tiếng Việt
  let phon = lower;
  
  // Các tổ hợp âm phổ biến
  phon = phon.replace(/tion/g, '-sừn')
             .replace(/sion/g, '-zhừn')
             .replace(/ture/g, '-chờ')
             .replace(/ment/g, '-mừnt')
             .replace(/able/g, '-ây-bồ')
             .replace(/ible/g, '-i-bồ')
             .replace(/ful/g, '-phun')
             .replace(/less/g, '-lịt')
             .replace(/ness/g, '-nịt')
             .replace(/ight/g, 'ait')
             .replace(/ought/g, 'oát')
             .replace(/aught/g, 'oát')
             .replace(/ould/g, 'u-đ')
             .replace(/ph/g, 'ph')
             .replace(/sh/g, 's')
             .replace(/ch/g, 'ch')
             .replace(/th/g, 'th')
             .replace(/wh/g, 'o-')
             .replace(/ea/g, 'i')
             .replace(/ee/g, 'i')
             .replace(/oo/g, 'u')
             .replace(/ou/g, 'ao')
             .replace(/ow/g, 'ao')
             .replace(/ai/g, 'êy')
             .replace(/ay/g, 'êy')
             .replace(/oi/g, 'oi')
             .replace(/oy/g, 'oi')
             .replace(/ck/g, 'c')
             .replace(/qu/g, 'cu-');

  // Đổi chữ cái đơn
  phon = phon.replace(/w/g, 'o-')
             .replace(/j/g, 'd-')
             .replace(/x/g, 'c-s')
             .replace(/z/g, 'z')
             .replace(/y$/g, 'i');

  // Tách âm đẹp
  const syllablesParts = phon.split(/[-]+/).filter(Boolean);
  let prettyVi = syllablesParts.join('-').toUpperCase();
  if (prettyVi.length > 6) {
    const parts = prettyVi.split('-');
    if (parts.length > 1) {
      prettyVi = parts[0] + '-' + parts.slice(1).map(p => p.toLowerCase()).join('-');
    }
  }

  return {
    word: rawWord,
    ipa: `/${lower}/`,
    readingVi: prettyVi || rawWord,
    notes: `Phát âm tự nhiên theo phiên âm '${prettyVi}'. Nhấn giọng ở âm đầu tiên.`,
    syllables: [
      { part: rawWord, desc: `đọc gần đúng tiếng Việt là: "${prettyVi}"` }
    ]
  };
}

// Lấy thông tin phát âm đầy đủ của một từ
function getWordPronounceData(word) {
  if (!word) return { ipa: '', readingVi: '', notes: '', syllables: [] };
  const clean = word.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '').trim();
  return generateVietnamesePhonetics(clean);
}

// Hiển thị modal hướng dẫn cách đọc chi tiết theo chuẩn ảnh người dùng yêu cầu
function showWordPronounceDetail(word) {
  if (!word) return;
  const cleanWord = word.trim().replace(/[.,/#!$%^&*;:{}=\-_`~()?"]/g, '');
  const data = getWordPronounceData(cleanWord);
  const meaning = typeof getWordMeaning === 'function' ? getWordMeaning(cleanWord) : '';

  const modal = document.getElementById('pronounce-detail-modal');
  const body = document.getElementById('pronounce-modal-body');
  if (!modal || !body) return;

  const syllablesHtml = (data.syllables && data.syllables.length > 0)
    ? data.syllables.map(s => `<li><strong>${escapeHtml(s.part)}:</strong> ${escapeHtml(s.desc)}</li>`).join('')
    : `<li><strong>${escapeHtml(cleanWord)}:</strong> phát âm liền mạch là "${escapeHtml(data.readingVi)}"</li>`;

  body.innerHTML = `
    <div class="pronounce-card-modal">
      <div class="pronounce-word-title">
        "<strong>${escapeHtml(cleanWord)}</strong>" đọc là: <span class="pronounce-ipa-tag">${escapeHtml(data.ipa)}</span>
      </div>
      <div class="pronounce-vi-box">
        Phiên âm gần đúng theo cách đọc tiếng Việt: <strong class="highlight-vi-word">"${escapeHtml(data.readingVi)}"</strong>
        ${data.notes ? `<div class="pronounce-notes-text">(${escapeHtml(data.notes)})</div>` : ''}
      </div>
      <div class="pronounce-syllables-wrap">
        <div style="font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">📌 Hướng dẫn chi tiết từng âm:</div>
        <ul class="pronounce-syllables-list">
          ${syllablesHtml}
        </ul>
      </div>
      ${meaning ? `
        <div class="pronounce-meaning-callout">
          🇻🇳 <strong>Nghĩa tiếng Việt:</strong> ${escapeHtml(meaning)}
        </div>
      ` : ''}
      <div class="pronounce-actions-row">
        <button type="button" class="btn-check-sentence" onclick="speakWord('${escapeHtml(cleanWord).replace(/'/g, "\\'")}')">
          🔊 Nghe phát âm tiếng Anh chuẩn
        </button>
        <button type="button" class="btn-audio-action" onclick="speakViWord('Từ ${cleanWord} đọc là ${data.readingVi.replace(/-/g, ' ')}')">
          🗣️ Nghe hướng dẫn tiếng Việt
        </button>
      </div>
    </div>
  `;

  modal.classList.add('show');
}

function closePronounceModal() {
  const modal = document.getElementById('pronounce-detail-modal');
  if (modal) modal.classList.remove('show');
}
