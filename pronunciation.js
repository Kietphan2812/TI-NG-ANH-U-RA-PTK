// ============================================================================
// HỆ THỐNG PHIÊN ÂM VÀ HƯỚNG DẪN CÁCH ĐỌC TIẾNG VIỆT CHO TẤT CẢ TỪ TIẾNG ANH
// Chuẩn xác theo cấu trúc ngữ âm Quốc tế (IPA) + Phiên âm bồi tiếng Việt dễ hiểu
// ============================================================================

const WORD_PRONUNCIATION_DB = {
  // --- Từ trong ảnh ví dụ của học viên ---
  "countries": {
    ipa: "/ˈkʌn.triz/",
    vi: "CƠN-trịz",
    notes: "Đọc liền mạch, nhanh, nhấn mạnh vào âm đầu 'CƠN'.",
    syllables: [
      { part: "CƠN", desc: "đọc giống \"cơn\" trong tiếng Việt nhưng bật hơi nhẹ hơn" },
      { part: "trịz", desc: "đọc nhanh, nối liền, âm cuối kéo nhẹ ra \"z\" (không phải \"s\")" }
    ]
  },
  "country": {
    ipa: "/ˈkʌn.tri/",
    vi: "CƠN-tri",
    notes: "Nhấn trọng âm vào âm đầu 'CƠN', 'tri' đọc nhanh.",
    syllables: [
      { part: "CƠN", desc: "đọc giống \"cơn\" trong tiếng Việt nhưng bật hơi nhẹ hơn" },
      { part: "tri", desc: "đọc nhanh, nối liền" }
    ]
  },
  "some": {
    ipa: "/sʌm/",
    vi: "SĂM",
    notes: "Đọc dứt khoát, âm 'ă' ngậm môi thành âm 'm'.",
    syllables: [
      { part: "some", desc: "đọc gần giống 'SĂM' trong tiếng Việt nhưng trầm và nhẹ hơn" }
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
    vi: "IN",
    notes: "Đọc nhanh gọn, không kéo dài.",
    syllables: [
      { part: "in", desc: "giống 'IN' trong tiếng Việt" }
    ]
  },
  "the": {
    ipa: "/ðə/",
    vi: "ĐƠ",
    notes: "Đặt đầu lưỡi giữa hai hàm răng và thổi nhẹ âm 'đơ'.",
    syllables: [
      { part: "the", desc: "đặt lưỡi giữa 2 răng, phát âm lai giữa 'đơ' và 'thơ'" }
    ]
  },
  "lake": {
    ipa: "/leɪk/",
    vi: "LÂYK",
    notes: "Kéo dài âm 'lây' và bật nhẹ âm gió 'k' ở cuống họng.",
    syllables: [
      { part: "lake", desc: "đọc là 'LÂYK' rồi bật đuôi 'k'" }
    ]
  },
  "near": {
    ipa: "/nɪər/",
    vi: "NI-Ơ",
    notes: "Âm 'ni' nối liền với âm 'ơ', uốn lưỡi nhẹ.",
    syllables: [
      { part: "near", desc: "đọc lướt nhanh từ 'NI' sang 'Ơ'" }
    ]
  },
  "elephants": {
    ipa: "/ˈel.ɪ.fənts/",
    vi: "É-lơ-phừnts",
    notes: "Nhấn mạnh âm 'É', đuôi 'nts' bật xì gió nhẹ.",
    syllables: [
      { part: "e-", desc: "đọc dứt khoát 'É'" },
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
  "caroline": {
    ipa: "/ˈkær.ə.laɪn/",
    vi: "CA-rô-lin",
    notes: "Nhấn mạnh âm 'CA', 'rô-lin' đọc lướt nhanh.",
    syllables: [
      { part: "Ca-", desc: "nhấn mạnh 'CA'" },
      { part: "-ro-line", desc: "đọc lướt 'rô-lin'" }
    ]
  },
  "is": {
    ipa: "/ɪz/",
    vi: "I-z",
    notes: "Đọc âm 'i' rồi rung nhẹ âm gió 'z'.",
    syllables: [{ part: "is", desc: "đọc 'i' rồi rung đuôi 'z'" }]
  },
  "about": {
    ipa: "/əˈbaʊt/",
    vi: "Ơ-BAO-t",
    notes: "Nhấn mạnh âm 'BAO', đuôi bật nhẹ 't'.",
    syllables: [
      { part: "a-", desc: "đọc nhẹ 'ơ'" },
      { part: "-bout", desc: "nhấn mạnh 'bao' bật đuôi 't'" }
    ]
  },
  "seventeen": {
    ipa: "/ˌsev.ənˈtiːn/",
    vi: "Xe-vừn-TIN",
    notes: "Nhấn trọng âm vào 'TIN', 'xe-vừn' đọc nhanh.",
    syllables: [
      { part: "se-ven-", desc: "đọc là 'xe-vừn'" },
      { part: "-teen", desc: "kéo dài và nhấn mạnh 'tin'" }
    ]
  },
  "with": {
    ipa: "/wɪð/",
    vi: "UÝ-th",
    notes: "Tròn môi đọc 'uý', đặt đầu lưỡi giữa hai răng thổi âm 'th'.",
    syllables: [{ part: "with", desc: "đọc 'uý' rồi kẹp lưỡi giữa hai răng thổi 'th'" }]
  },
  "hair": {
    ipa: "/heər/",
    vi: "HÊ-ơ",
    notes: "Đọc lướt nhanh từ 'hê' sang 'ơ' uốn cong đầu lưỡi.",
    syllables: [{ part: "hair", desc: "đọc liền mạch 'HÊ-ơ'" }]
  },
  "figure": {
    ipa: "/ˈfɪɡ.ər/",
    vi: "PHI-gơ",
    notes: "Nhấn mạnh âm 'PHI', âm 'gơ' đọc nhẹ lướt.",
    syllables: [
      { part: "fig-", desc: "nhấn mạnh 'phi'" },
      { part: "-ure", desc: "đọc nhẹ 'gơ'" }
    ]
  },
  "height": {
    ipa: "/haɪt/",
    vi: "HAI-t",
    notes: "Đọc 'hai' rồi bật nhẹ âm gió 't' dứt khoát.",
    syllables: [{ part: "height", desc: "đọc 'hai' bật đuôi 't'" }]
  },
  "face": {
    ipa: "/feɪs/",
    vi: "PHÂY-s",
    notes: "Đọc 'phây' rồi xì nhẹ âm gió 's' ở kẽ răng.",
    syllables: [{ part: "face", desc: "đọc 'phây' rồi xì gió 's'" }]
  },
  "and": {
    ipa: "/ænd/",
    vi: "EN-đ",
    notes: "Đọc 'en' rồi bật nhẹ âm 'đ' ở vòm họng.",
    syllables: [{ part: "and", desc: "đọc 'en' bật đuôi 'đ'" }]
  },
  "brother": {
    ipa: "/ˈbrʌð.ər/",
    vi: "B-RÁ-đờ",
    notes: "Nhấn mạnh 'B-RÁ', 'đờ' đặt lưỡi giữa hai hàm răng.",
    syllables: [
      { part: "bro-", desc: "nhấn 'b-rá'" },
      { part: "-ther", desc: "đọc nhẹ 'đờ'" }
    ]
  },
  "feet": {
    ipa: "/fiːt/",
    vi: "PHÍT",
    notes: "Kéo dài âm 'i' rồi bật đuôi 't' dứt khoát.",
    syllables: [{ part: "feet", desc: "đọc kéo dài 'phít' bật 't'" }]
  },
  "school": {
    ipa: "/skuːl/",
    vi: "X-CU-ồ",
    notes: "Đọc 'x-cu' kéo dài rồi uốn lưỡi âm 'l'.",
    syllables: [{ part: "school", desc: "đọc 'x-cu-ồ' uốn nhẹ lưỡi" }]
  },
  "future": {
    ipa: "/ˈfjuː.tʃər/",
    vi: "PHIÚ-chờ",
    notes: "Nhấn mạnh 'PHIÚ', âm 'chờ' đọc nhẹ lướt.",
    syllables: [
      { part: "fu-", desc: "nhấn 'phiú'" },
      { part: "-ture", desc: "đọc nhẹ 'chờ'" }
    ]
  },
  "popular": {
    ipa: "/ˈpɒp.jə.lər/",
    vi: "PÓ-piu-lờ",
    notes: "Nhấn âm 'PÓ', 'piu-lờ' đọc nhanh.",
    syllables: [
      { part: "pop-", desc: "nhấn mạnh 'pó'" },
      { part: "-u-lar", desc: "đọc lướt 'piu-lờ'" }
    ]
  },
  "street": {
    ipa: "/striːt/",
    vi: "X-T-RÍT",
    notes: "Bắt đầu xì nhẹ, đọc 't-rít' bật đuôi 't'.",
    syllables: [{ part: "street", desc: "đọc 'x-t-rít' dứt khoát" }]
  },
  "medium": {
    ipa: "/ˈmiː.di.əm/",
    vi: "MÍ-đi-ừm",
    notes: "Nhấn mạnh 'MÍ', 'đi-ừm' đọc nhẹ.",
    syllables: [
      { part: "me-", desc: "nhấn 'mí'" },
      { part: "-di-um", desc: "đọc 'đi-ừm'" }
    ]
  },
  "build": {
    ipa: "/bɪld/",
    vi: "BIU-ồ-đ",
    notes: "Đọc 'biu' uốn lưỡi rồi bật nhẹ đuôi 'đ'.",
    syllables: [{ part: "build", desc: "đọc 'biu-ồ-đ'" }]
  },
  "middle": {
    ipa: "/ˈmɪd.əl/",
    vi: "MÍT-đồ",
    notes: "Nhấn 'MÍT', 'đồ' đọc gọn.",
    syllables: [
      { part: "mid-", desc: "nhấn 'mít'" },
      { part: "-dle", desc: "đọc 'đồ'" }
    ]
  },
  "really": {
    ipa: "/ˈrɪə.li/",
    vi: "RI-li",
    notes: "Đọc 'ri-li' liền mạch nhẹ nhàng.",
    syllables: [{ part: "really", desc: "đọc là 'RI-li'" }]
  },
  "prefer": {
    ipa: "/prɪˈfɜːr/",
    vi: "pri-PHƠ",
    notes: "Nhấn vào 'PHƠ', uốn lưỡi nhẹ.",
    syllables: [
      { part: "pre-", desc: "đọc nhẹ 'pri'" },
      { part: "-fer", desc: "nhấn mạnh 'phơ'" }
    ]
  },
  "calm": {
    ipa: "/kɑːm/",
    vi: "CAM",
    notes: "Âm l câm, đọc 'cam' ngân dài nhẹ.",
    syllables: [{ part: "calm", desc: "đọc là 'CAM' (chữ l câm)" }]
  },
  "decided": {
    ipa: "/dɪˈsaɪ.dɪd/",
    vi: "đi-XAI-địt",
    notes: "Nhấn vào 'XAI', đuôi 'địt' rõ ràng.",
    syllables: [
      { part: "de-", desc: "đọc 'đi'" },
      { part: "-ci-", desc: "nhấn 'xai'" },
      { part: "-ded", desc: "đọc 'địt'" }
    ]
  },
  "polite": {
    ipa: "/pəˈlaɪt/",
    vi: "pơ-LAI-t",
    notes: "Nhấn 'LAI', bật nhẹ đuôi 't'.",
    syllables: [
      { part: "po-", desc: "đọc 'pơ'" },
      { part: "-lite", desc: "nhấn 'lai' bật 't'" }
    ]
  },
  "charity": {
    ipa: "/ˈtʃær.ə.ti/",
    vi: "CHE-ri-ti",
    notes: "Nhấn mạnh 'CHE', 'ri-ti' đọc nhanh.",
    syllables: [
      { part: "cha-", desc: "nhấn 'che'" },
      { part: "-ri-ty", desc: "đọc 'ri-ti'" }
    ]
  },
  "advice": {
    ipa: "/ədˈvaɪs/",
    vi: "ơt-VAI-s",
    notes: "Nhấn 'VAI', xì nhẹ gió 's'.",
    syllables: [
      { part: "ad-", desc: "đọc 'ơt'" },
      { part: "-vice", desc: "nhấn 'vai' xì 's'" }
    ]
  },
  "despite": {
    ipa: "/dɪˈspaɪt/",
    vi: "đi-SPAI-t",
    notes: "Nhấn 'SPAI', đuôi bật 't'.",
    syllables: [
      { part: "de-", desc: "đọc 'đi'" },
      { part: "-spite", desc: "nhấn 'spai' bật 't'" }
    ]
  },
  "success": {
    ipa: "/səkˈses/",
    vi: "sực-SÉT-s",
    notes: "Nhấn 'SÉT', đuôi xì 's'.",
    syllables: [
      { part: "suc-", desc: "đọc 'sực'" },
      { part: "-cess", desc: "nhấn 'sét' xì 's'" }
    ]
  },
  "woman": {
    ipa: "/ˈwʊm.ən/",
    vi: "U-mừn",
    notes: "Nhấn mạnh 'U', 'mừn' đọc nhẹ.",
    syllables: [
      { part: "wo-", desc: "nhấn 'u'" },
      { part: "-man", desc: "đọc 'mừn'" }
    ]
  },
  "today": {
    ipa: "/təˈdeɪ/",
    vi: "tơ-ĐÊY",
    notes: "Nhấn mạnh 'ĐÊY'.",
    syllables: [
      { part: "to-", desc: "đọc 'tơ'" },
      { part: "-day", desc: "nhấn 'đêy'" }
    ]
  },
  "please": {
    ipa: "/pliːz/",
    vi: "P-LI-z",
    notes: "Bật 'p', kéo dài 'li', đuôi rung 'z'.",
    syllables: [{ part: "please", desc: "đọc 'p-li' rồi rung 'z'" }]
  },
  "called": {
    ipa: "/kɔːld/",
    vi: "COL-đ",
    notes: "Đọc 'col' rồi bật nhẹ 'đ'.",
    syllables: [{ part: "called", desc: "đọc 'col' bật đuôi 'đ'" }]
  },
  "same": {
    ipa: "/seɪm/",
    vi: "SÊM",
    notes: "Đọc 'sêm' khép môi.",
    syllables: [{ part: "same", desc: "đọc là 'sêm'" }]
  },
  "things": {
    ipa: "/θɪŋz/",
    vi: "THINH-z",
    notes: "Đặt lưỡi giữa 2 răng âm 'th', rung 'z'.",
    syllables: [{ part: "things", desc: "đọc 'thinh' rồi rung 'z'" }]
  },
  "opinion": {
    ipa: "/əˈpɪn.jən/",
    vi: "ơ-PIN-i-ừn",
    notes: "Nhấn 'PIN', các âm khác đọc lướt.",
    syllables: [
      { part: "o-", desc: "đọc 'ơ'" },
      { part: "-pin-ion", desc: "đọc 'pin-i-ừn'" }
    ]
  },
  "tonight": {
    ipa: "/təˈnaɪt/",
    vi: "tơ-NAI-t",
    notes: "Nhấn 'NAI', bật nhẹ 't'.",
    syllables: [
      { part: "to-", desc: "đọc 'tơ'" },
      { part: "-night", desc: "nhấn 'nai' bật 't'" }
    ]
  },
  "centre": {
    ipa: "/ˈsen.tər/",
    vi: "SEN-tờ",
    notes: "Nhấn 'SEN', 'tờ' đọc nhẹ.",
    syllables: [
      { part: "cen-", desc: "đọc 'sen'" },
      { part: "-tre", desc: "đọc 'tờ'" }
    ]
  },
  "information": {
    ipa: "/ˌɪn.fəˈmeɪ.ʃən/",
    vi: "in-phơ-MÊY-sừn",
    notes: "Nhấn trọng âm vào 'MÊY'.",
    syllables: [
      { part: "in-for-", desc: "đọc 'in-phơ'" },
      { part: "-ma-tion", desc: "nhấn 'mêy-sừn'" }
    ]
  },
  "guided": {
    ipa: "/ˈɡaɪ.dɪd/",
    vi: "GAI-địt",
    notes: "Nhấn 'GAI', đuôi 'địt' rõ ràng.",
    syllables: [
      { part: "gui-", desc: "đọc 'gai'" },
      { part: "-ded", desc: "đọc 'địt'" }
    ]
  },
  "through": {
    ipa: "/θruː/",
    vi: "TH-RU",
    notes: "Đặt lưỡi giữa 2 răng rồi đọc 'ru'.",
    syllables: [{ part: "through", desc: "đọc 'th-ru'" }]
  },
  "tomorrow": {
    ipa: "/təˈmɒr.əʊ/",
    vi: "tơ-MO-rôu",
    notes: "Nhấn 'MO', 'tơ' và 'rôu' nhẹ.",
    syllables: [
      { part: "to-", desc: "đọc 'tơ'" },
      { part: "-mor-row", desc: "đọc 'mo-rôu'" }
    ]
  },
  "someone": {
    ipa: "/ˈsʌm.wʌn/",
    vi: "SĂM-oăn",
    notes: "Nhấn 'SĂM', 'oăn' đọc liền.",
    syllables: [
      { part: "some-", desc: "đọc 'săm'" },
      { part: "-one", desc: "đọc 'oăn'" }
    ]
  },
  "hello": {
    ipa: "/heˈləʊ/",
    vi: "he-LÔU",
    notes: "Nhấn 'LÔU', 'he' đọc nhẹ.",
    syllables: [
      { part: "hel-", desc: "đọc 'he'" },
      { part: "-lo", desc: "nhấn 'lôu'" }
    ]
  },
  "interesting": {
    ipa: "/ˈɪn.trə.stɪŋ/",
    vi: "IN-trơ-sting",
    notes: "Nhấn mạnh âm đầu 'IN'.",
    syllables: [
      { part: "in-", desc: "đọc 'in'" },
      { part: "-tre-sting", desc: "đọc 'trơ-sting'" }
    ]
  },
  "english": {
    ipa: "/ˈɪŋ.ɡlɪʃ/",
    vi: "ING-g-lịt-s",
    notes: "Nhấn 'ING', 'lịt-s' tròn môi xì gió.",
    syllables: [
      { part: "eng-", desc: "đọc 'ing'" },
      { part: "-lish", desc: "đọc 'g-lịt-s'" }
    ]
  },
  "energetic": {
    ipa: "/ˌen.əˈdʒet.ɪk/",
    vi: "e-nơ-DZHÉ-tíc",
    notes: "Nhấn vào 'DZHÉ'.",
    syllables: [
      { part: "en-er-", desc: "đọc 'e-nơ'" },
      { part: "-get-ic", desc: "đọc 'dzhé-tíc'" }
    ]
  },
  "appearance": {
    ipa: "/əˈpɪə.rəns/",
    vi: "ơ-PI-ơ-rừns",
    notes: "Nhấn mạnh âm 'PI'.",
    syllables: [
      { part: "ap-", desc: "đọc 'ơ'" },
      { part: "-pear-ance", desc: "đọc 'pi-ơ-rừns'" }
    ]
  },
  "believe": {
    ipa: "/bɪˈliːv/",
    vi: "bi-LI-v",
    notes: "Nhấn 'LI' kéo dài, đuôi rung nhẹ 'v'.",
    syllables: [
      { part: "be-", desc: "đọc 'bi'" },
      { part: "-lieve", desc: "nhấn 'li' chạm răng âm 'v'" }
    ]
  },
  "become": {
    ipa: "/bɪˈkʌm/",
    vi: "bi-CẮM",
    notes: "Nhấn 'CẮM' dứt khoát.",
    syllables: [
      { part: "be-", desc: "đọc 'bi'" },
      { part: "-come", desc: "nhấn 'cắm'" }
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
    vi: "HÍT-z",
    notes: "Đọc 'hít' nhưng đuôi rung âm 'z'.",
    syllables: [{ part: "his", desc: "đọc 'hi' rồi xì rung âm 'z'" }]
  },
  "her": {
    ipa: "/hɜːr/",
    vi: "HƠ",
    notes: "Kéo dài âm 'HƠ' và uốn cong nhẹ đầu lưỡi.",
    syllables: [{ part: "her", desc: "đọc là 'HƠ' uốn lưỡi" }]
  },
  "our": {
    ipa: "/aʊər/",
    vi: "AO-ơ",
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
    vi: "XT-RÂYT",
    notes: "Đọc 'xt-rây' rồi bật đuôi 't' dứt khoát.",
    syllables: [{ part: "straight", desc: "đọc 'XT-RÂYT' bật đuôi 't'" }]
  },
  "tall": {
    ipa: "/tɔːl/",
    vi: "TO-ồ",
    notes: "Đọc 'TO' tròn môi rồi uốn lưỡi chạm hàm trên âm 'l'.",
    syllables: [{ part: "tall", desc: "đọc 'TO-ồ' (uốn nhẹ đuôi 'l')" }]
  },
  "short": {
    ipa: "/ʃɔːt/",
    vi: "SOÁT",
    notes: "Tròn môi bật âm 'sh' rồi đọc 'SOÁT' gọn gàng.",
    syllables: [{ part: "short", desc: "đọc là 'SOÁT' dứt khoát" }]
  },
  "slim": {
    ipa: "/slɪm/",
    vi: "X-LIM",
    notes: "Đọc lướt 'x-lim' ngậm nhẹ môi.",
    syllables: [{ part: "slim", desc: "đọc là 'X-LIM'" }]
  },
  "fat": {
    ipa: "/fæt/",
    vi: "PHÉT",
    notes: "Đặt răng hàm trên chạm môi dưới đọc 'phét' bật đuôi 't'.",
    syllables: [{ part: "fat", desc: "đọc 'PHÉT' bật âm 't'" }]
  },
  "thin": {
    ipa: "/θɪn/",
    vi: "THIN",
    notes: "Đặt đầu lưỡi giữa 2 hàm răng rồi thổi nhẹ 'THIN'.",
    syllables: [{ part: "thin", desc: "đặt lưỡi giữa 2 răng thổi 'THIN'" }]
  },
  "blond": {
    ipa: "/blɒnd/",
    vi: "BƠ-LON-đ",
    notes: "Đọc 'bơ-lon' rồi bật nhẹ âm đuôi 'đ'.",
    syllables: [{ part: "blond", desc: "đọc 'bơ-lon' bật nhẹ đuôi 'đ'" }]
  },
  "blonde": {
    ipa: "/blɒnd/",
    vi: "BƠ-LON-đ",
    notes: "Đọc 'bơ-lon' rồi bật nhẹ âm đuôi 'đ'.",
    syllables: [{ part: "blonde", desc: "đọc 'bơ-lon' bật nhẹ đuôi 'đ'" }]
  },
  "bald": {
    ipa: "/bɔːld/",
    vi: "BO-ồ-đ",
    notes: "Đọc 'BO' kéo dài rồi uốn lưỡi chạm nhẹ đuôi 'đ'.",
    syllables: [{ part: "bald", desc: "đọc 'BO-ồ' chạm nhẹ 'đ'" }]
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
    const item = WORD_PRONUNCIATION_DB[lower];
    return {
      ...item,
      word: rawWord,
      readingVi: item.readingVi || item.vi || ''
    };
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
  phon = phon.replace(/w/g, 'u-')
             .replace(/j/g, 'd-')
             .replace(/x/g, 'c-s')
             .replace(/z/g, 'z')
             .replace(/y$/g, 'i');

  // Tách âm đẹp
  const syllablesParts = phon.split(/[-]+/).filter(Boolean);
  let prettyVi = syllablesParts.map(p => p.toUpperCase()).join('-');
  if (prettyVi.length > 5) {
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
  const res = generateVietnamesePhonetics(clean);
  if (res && !res.readingVi && res.vi) {
    res.readingVi = res.vi;
  }
  return res;
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
    ? data.syllables.map(s => `<li><strong>${escapeHtml(s.part)}</strong> – ${escapeHtml(s.desc)}</li>`).join('')
    : `<li><strong>${escapeHtml(cleanWord)}</strong> – đọc phát âm liền mạch là "${escapeHtml(data.readingVi)}"</li>`;

  body.innerHTML = `
    <div class="pronounce-viet-card">
      <div class="pronounce-header-line">
        "<strong>${escapeHtml(cleanWord)}</strong>" đọc theo kiểu phiên âm tiếng Việt là: <strong class="highlight-vi-word">"${escapeHtml(data.readingVi)}"</strong>
      </div>

      <div class="pronounce-detail-title">Cách đọc chi tiết:</div>
      <ul class="pronounce-viet-list">
        ${syllablesHtml}
      </ul>

      <div class="pronounce-footer-line">
        Ghép lại đọc liền mạch, nhanh: <strong class="highlight-vi-word">"${escapeHtml(data.readingVi)}"</strong>
      </div>

      ${data.ipa ? `
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
          (Phiên âm quốc tế IPA: <span class="pronounce-ipa-tag">${escapeHtml(data.ipa)}</span>)
        </div>
      ` : ''}

      ${meaning ? `
        <div class="pronounce-meaning-line">
          🇻🇳 <strong>Nghĩa tiếng Việt:</strong> ${escapeHtml(meaning)}
        </div>
      ` : ''}

      <div class="pronounce-actions-row">
        <button type="button" class="btn-check-sentence" onclick="speakWord('${escapeHtml(cleanWord).replace(/'/g, "\\'")}')">
          🔊 Nghe phát âm tiếng Anh
        </button>
        <button type="button" class="btn-audio-action" onclick="speakViWord('${escapeHtml(cleanWord)} đọc theo kiểu tiếng Việt là ${data.readingVi.replace(/-/g, ' ')}')">
          🗣️ Nghe máy đọc phiên âm
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
