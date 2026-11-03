// TOPIC 11: ENVIRONMENT - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC11 = {
  "topicId": "topic11",
  "topicTitle": "TOPIC 11: ENVIRONMENT",
  "topicSubtitle": "Môi trường & Biến đổi khí hậu (Liên từ chỉ nguyên nhân/kết quả/nhượng bộ, Đọc hiểu Các loại ô nhiễm & Chiến dịch cấm xe trong thành phố, Thư về vấn nạn rác thải nhựa)",
  "vocabulary": [
    {
      "word": "exhaust fumes",
      "ipa": "/ɪɡˈzɔːst fjuːmz/",
      "pos": "n. phr.",
      "meaning": "khói thải độc hại từ xe cộ",
      "example": "Harmful exhaust fumes emitted by older cars destroy the protective ozone layer."
    },
    {
      "word": "ozone layer",
      "ipa": "/ˈəʊzəʊn ˌleɪə(r)/",
      "pos": "n. phr.",
      "meaning": "tầng ô-dôn bảo vệ Trái Đất",
      "example": "The ozone layer shields all living creatures from ultraviolet solar radiation."
    },
    {
      "word": "raw sewage",
      "ipa": "/rɔː ˈsuːɪdʒ/",
      "pos": "n. phr.",
      "meaning": "nước thải sinh hoạt chưa qua xử lý",
      "example": "Discharging raw sewage directly into the local river poisons aquatic life."
    },
    {
      "word": "fossil fuel",
      "ipa": "/ˈfɒsl fjuːəl/",
      "pos": "n. phr.",
      "meaning": "nhiên liệu hóa thạch (than đá, dầu mỏ)",
      "example": "Burning fossil fuels accelerates global warming and atmospheric pollution."
    },
    {
      "word": "pesticide",
      "ipa": "/ˈpestɪsaɪd/",
      "pos": "n.",
      "meaning": "thuốc trừ sâu hóa học",
      "example": "Excessive use of agricultural pesticides contaminates farmland soil and groundwater."
    },
    {
      "word": "cut down",
      "ipa": "/kʌt daʊn/",
      "pos": "phrasal v.",
      "meaning": "đốn hạ, chặt hạ (cây cối, rừng)",
      "example": "Illegal loggers cut down massive areas of primary rainforest every single month."
    },
    {
      "word": "use up",
      "ipa": "/juːz ʌp/",
      "pos": "phrasal v.",
      "meaning": "dùng hết sạch, làm cạn kiệt",
      "example": "We must switch to renewable solar power before we completely use up fossil reserves."
    },
    {
      "word": "die out",
      "ipa": "/daɪ aʊt/",
      "pos": "phrasal v.",
      "meaning": "chết dần, tuyệt chủng hoàn toàn",
      "example": "Rare wildlife species will die out if their natural habitats continue to be destroyed."
    },
    {
      "word": "habitat",
      "ipa": "/ˈhæbɪtæt/",
      "pos": "n.",
      "meaning": "môi trường sống tự nhiên",
      "example": "Deforestation leaves native tigers and wild elephants without an adequate habitat."
    },
    {
      "word": "chemical",
      "ipa": "/ˈkemɪkl/",
      "pos": "n.",
      "meaning": "hóa chất",
      "example": "A toxic chemical utilized in industrial plastic manufacturing poses serious health hazards."
    },
    {
      "word": "polluted",
      "ipa": "/pəˈluːtɪd/",
      "pos": "adj.",
      "meaning": "bị ô nhiễm",
      "example": "Residents living in polluted metropolitan zones suffer higher rates of respiratory disease."
    },
    {
      "word": "contamination",
      "ipa": "/kənˌtæmɪˈneɪʃn/",
      "pos": "n.",
      "meaning": "sự làm nhiễm độc, sự ô nhiễm",
      "example": "Industrial leakage leads to catastrophic chemical contamination of river basins."
    },
    {
      "word": "inhabitant",
      "ipa": "/ɪnˈhæbɪtənt/",
      "pos": "n.",
      "meaning": "cư dân sinh sống, sinh vật quần cư",
      "example": "Severe water pollution directly threatens the health of all river basin inhabitants."
    },
    {
      "word": "emission",
      "ipa": "/ɪˈmɪʃn/",
      "pos": "n.",
      "meaning": "sự phát thải, lượng khí thải",
      "example": "Strict national regulations aim to reduce vehicle exhaust emissions by fifty percent."
    },
    {
      "word": "leakage",
      "ipa": "/ˈliːkɪdʒ/",
      "pos": "n.",
      "meaning": "sự rò rỉ (hóa chất, dầu mỏ)",
      "example": "An accidental leakage from the underground chemical storage tank poisoned the well water."
    },
    {
      "word": "oil spill",
      "ipa": "/ˈɔɪl spɪl/",
      "pos": "n. phr.",
      "meaning": "sự cố tràn dầu trên biển/sông",
      "example": "The massive tanker oil spill coated coastal beaches in thick black sludge."
    },
    {
      "word": "extinct",
      "ipa": "/ɪkˈstɪŋkt/",
      "pos": "adj.",
      "meaning": "tuyệt chủng",
      "example": "Several vulnerable bird species have become completely extinct due to climate shifts."
    },
    {
      "word": "ban",
      "ipa": "/bæn/",
      "pos": "v.",
      "meaning": "cấm đoán, ban lệnh cấm",
      "example": "Environmentalists advocate that diesel cars should be banned from historic city centers."
    },
    {
      "word": "unbearable",
      "ipa": "/ʌnˈbeərəbl/",
      "pos": "adj.",
      "meaning": "không thể chịu đựng nổi",
      "example": "During summer rush hours, traffic noise and exhaust stench become totally unbearable."
    },
    {
      "word": "at risk",
      "ipa": "/æt rɪsk/",
      "pos": "idiom",
      "meaning": "gặp nguy hiểm, chịu rủi ro cao",
      "example": "Pedestrians trying to cross unmanaged intersections are constantly at risk."
    },
    {
      "word": "face up to",
      "ipa": "/feɪs ʌp tuː/",
      "pos": "phrasal v.",
      "meaning": "dũng cảm đối mặt với thực tế",
      "example": "City administrators must face up to the escalating traffic and smog crisis."
    },
    {
      "word": "demonstration",
      "ipa": "/ˌdemənˈstreɪʃn/",
      "pos": "n.",
      "meaning": "cuộc biểu tình, tuần hành tuần lễ",
      "example": "Youth activists held a peaceful demonstration in front of city hall demanding clean air."
    },
    {
      "word": "plastic waste",
      "ipa": "/ˈplæstɪk weɪst/",
      "pos": "n. phr.",
      "meaning": "rác thải nhựa khó phân hủy",
      "example": "Non-biodegradable plastic waste clogs stormwater canals and litters coastal beaches."
    },
    {
      "word": "clean-up",
      "ipa": "/ˈkliːn ʌp/",
      "pos": "n.",
      "meaning": "chiến dịch dọn vệ sinh môi trường",
      "example": "Community volunteers organized a weekend beach clean-up to collect plastic bags."
    }
  ],
  "vocabularyQuestions": [
    {
      "id": "t11_v1",
      "number": 1,
      "section": "vocab",
      "question": "The car ______ destroy the ozone layer which protects the Earth from the dangerous light of the Sun.",
      "vietnameseTranslation": "Khí thải xe ô tô phá hủy tầng ô-dôn, tấm lá chắn bảo vệ Trái Đất khỏi những tia sáng nguy hiểm của Mặt Trời.",
      "options": [
        {
          "key": "A",
          "text": "exhaust fumes",
          "vietnameseSub": "khói thải xe cộ (đúng)"
        },
        {
          "key": "B",
          "text": "raw sewages",
          "vietnameseSub": "nước thải chưa xử lý"
        },
        {
          "key": "C",
          "text": "fossil fuels",
          "vietnameseSub": "nhiên liệu hóa thạch"
        },
        {
          "key": "D",
          "text": "pesticides",
          "vietnameseSub": "thuốc trừ sâu"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. exhaust fumes. Cụm từ \"car exhaust fumes\" (khí thải xe hơi) thải ra các khí nhà kính phá hủy tầng ô-dôn."
    },
    {
      "id": "t11_v2",
      "number": 2,
      "section": "vocab",
      "question": "Over time, humans have ______ or damaged at least 75% of the world's forests.",
      "vietnameseTranslation": "Theo thời gian, con người đã chặt phá hoặc làm tổn hại ít nhất 75% diện tích rừng trên thế giới.",
      "options": [
        {
          "key": "A",
          "text": "recycled",
          "vietnameseSub": "tái chế"
        },
        {
          "key": "B",
          "text": "dumped",
          "vietnameseSub": "vứt bỏ rác"
        },
        {
          "key": "C",
          "text": "cut down",
          "vietnameseSub": "đốn hạ, chặt phá (rừng - đúng)"
        },
        {
          "key": "D",
          "text": "conserved",
          "vietnameseSub": "bảo tồn"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. cut down. Cụm \"cut down forests\" chỉ hành động chặt đốn phá rừng."
    },
    {
      "id": "t11_v3",
      "number": 3,
      "section": "vocab",
      "question": "We can also look for different natural resources to use so that we don't ______ one kind.",
      "vietnameseTranslation": "Chúng ta cũng có thể tìm kiếm các nguồn tài nguyên thiên nhiên khác nhau để sử dụng nhằm không làm cạn kiệt một loại duy nhất.",
      "options": [
        {
          "key": "A",
          "text": "recycle",
          "vietnameseSub": "tái chế"
        },
        {
          "key": "B",
          "text": "use up",
          "vietnameseSub": "dùng hết sạch, cạn kiệt (đúng)"
        },
        {
          "key": "C",
          "text": "die out",
          "vietnameseSub": "tuyệt chủng"
        },
        {
          "key": "D",
          "text": "dry up",
          "vietnameseSub": "khô cạn nước"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. use up. Cụm động từ \"use up something\" nghĩa là dùng cạn kiệt, xài hết nhẵn một nguồn tài nguyên nào đó."
    },
    {
      "id": "t11_v4",
      "number": 4,
      "section": "vocab",
      "question": "Tigers have a huge habitat ______ they are able to adapt to different types of environments.",
      "vietnameseTranslation": "Loài hổ có môi trường sống rất rộng lớn bởi vì chúng có khả năng thích nghi với nhiều kiểu môi trường khác nhau.",
      "options": [
        {
          "key": "A",
          "text": "because",
          "vietnameseSub": "bởi vì (+ mệnh đề nguyên nhân - đúng)"
        },
        {
          "key": "B",
          "text": "but",
          "vietnameseSub": "nhưng"
        },
        {
          "key": "C",
          "text": "although",
          "vietnameseSub": "mặc dù"
        },
        {
          "key": "D",
          "text": "because of",
          "vietnameseSub": "bởi vì (+ cụm danh từ)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. because. Đằng sau chỗ trống là một mệnh đề hoàn chỉnh \"they are able to adapt...\" nên dùng liên từ \"because\"."
    },
    {
      "id": "t11_v5",
      "number": 5,
      "section": "vocab",
      "question": "A ______ which is used in the manufacture of household products may be associated with an increased risk of heart disease.",
      "vietnameseTranslation": "Một loại hóa chất được sử dụng trong việc sản xuất các sản phẩm gia dụng có thể liên quan đến nguy cơ gia tăng bệnh tim.",
      "options": [
        {
          "key": "A",
          "text": "litter",
          "vietnameseSub": "rác thải bừa bãi"
        },
        {
          "key": "B",
          "text": "bottle bank",
          "vietnameseSub": "thùng thu gom chai lọ tái chế"
        },
        {
          "key": "C",
          "text": "chemical",
          "vietnameseSub": "hóa chất độc hại (đúng)"
        },
        {
          "key": "D",
          "text": "fossil fuel",
          "vietnameseSub": "nhiên liệu hóa thạch"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. chemical. Danh từ \"chemical\" (chất hóa học) dùng trong sản xuất hàng tiêu dùng gia dụng (household products)."
    },
    {
      "id": "t11_v6",
      "number": 6,
      "section": "vocab",
      "question": "Big tobacco companies have known that cigarettes are deadly, ______ for decades the harmful effects of smoking have been their best kept secret.",
      "vietnameseTranslation": "Các tập đoàn thuốc lá lớn đều biết thuốc lá gây chết người, nhưng trong suốt nhiều thập kỷ, tác hại nguy hiểm của việc hút thuốc luôn là bí mật được họ giữ kín nhất.",
      "options": [
        {
          "key": "A",
          "text": "because",
          "vietnameseSub": "bởi vì"
        },
        {
          "key": "B",
          "text": "but",
          "vietnameseSub": "nhưng (liên từ tương phản - đúng)"
        },
        {
          "key": "C",
          "text": "when",
          "vietnameseSub": "khi"
        },
        {
          "key": "D",
          "text": "so",
          "vietnameseSub": "vì vậy"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. but. Hai vế câu mang ý nghĩa tương phản (biết là chết người nhưng vẫn giấu kín bí mật) -> Dùng liên từ \"but\"."
    },
    {
      "id": "t11_v7",
      "number": 7,
      "section": "vocab",
      "question": "______ you're finished using your computer, it's important to turn it off properly to save energy.",
      "vietnameseTranslation": "Khi bạn đã sử dụng máy tính xong, việc tắt máy đúng cách là rất quan trọng để tiết kiệm năng lượng.",
      "options": [
        {
          "key": "A",
          "text": "Before",
          "vietnameseSub": "Trước khi"
        },
        {
          "key": "B",
          "text": "But",
          "vietnameseSub": "Nhưng"
        },
        {
          "key": "C",
          "text": "Due to",
          "vietnameseSub": "Do bởi (+ cụm danh từ)"
        },
        {
          "key": "D",
          "text": "When",
          "vietnameseSub": "Khi mà (+ mệnh đề thời gian - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. When. Mệnh đề chỉ thời gian: \"When you are finished using your computer\" (Khi bạn sử dụng máy tính xong thì tắt đi)."
    },
    {
      "id": "t11_v8",
      "number": 8,
      "section": "vocab",
      "question": "According to a number of studies, health state of the people living in ______ areas, is getting worsened.",
      "vietnameseTranslation": "Theo nhiều nghiên cứu, tình trạng sức khỏe của những người dân sống tại các khu vực bị ô nhiễm đang ngày càng chuyển biến xấu hơn.",
      "options": [
        {
          "key": "A",
          "text": "conserved",
          "vietnameseSub": "được bảo tồn"
        },
        {
          "key": "B",
          "text": "polluted",
          "vietnameseSub": "bị ô nhiễm (polluted areas - đúng)"
        },
        {
          "key": "C",
          "text": "endangered",
          "vietnameseSub": "có nguy cơ tuyệt chủng"
        },
        {
          "key": "D",
          "text": "environmental",
          "vietnameseSub": "thuộc về môi trường"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. polluted. Tính từ \"polluted\" bổ nghĩa cho \"areas\" -> \"polluted areas\" (các vùng bị ô nhiễm môi trường sống)."
    },
    {
      "id": "t11_v9",
      "number": 9,
      "section": "vocab",
      "question": "______ environment, health and sustainability costs, farmers continue to use pesticides to increase quantities.",
      "vietnameseTranslation": "Bất chấp những tổn hại đối với môi trường, sức khỏe và tính bền vững, người nông dân vẫn tiếp tục lạm dụng thuốc trừ sâu để tăng sản lượng.",
      "options": [
        {
          "key": "A",
          "text": "Despite",
          "vietnameseSub": "Bất chấp (+ cụm danh từ - đúng)"
        },
        {
          "key": "B",
          "text": "Even though",
          "vietnameseSub": "Mặc dù (+ mệnh đề)"
        },
        {
          "key": "C",
          "text": "Although",
          "vietnameseSub": "Mặc dù (+ mệnh đề)"
        },
        {
          "key": "D",
          "text": "Because of",
          "vietnameseSub": "Bởi vì"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. Despite. \"environment, health and sustainability costs\" là một cụm danh từ mang nghĩa nhượng bộ (bất chấp tổn thất) -> Chọn \"Despite\"."
    },
    {
      "id": "t11_v10",
      "number": 10,
      "section": "vocab",
      "question": "Every year more and more trees are being cut down for paper; ______, it is everyone's responsibility to reduce the amount of paper that they use and waste.",
      "vietnameseTranslation": "Mỗi năm ngày càng có nhiều cây cối bị chặt hạ để làm giấy; vì vậy, giảm bớt lượng giấy sử dụng và thải bỏ là trách nhiệm của mỗi người.",
      "options": [
        {
          "key": "A",
          "text": "however",
          "vietnameseSub": "tuy nhiên"
        },
        {
          "key": "B",
          "text": "therefore",
          "vietnameseSub": "vì vậy, do đó (trạng từ liên kết hệ quả - đúng)"
        },
        {
          "key": "C",
          "text": "when",
          "vietnameseSub": "khi"
        },
        {
          "key": "D",
          "text": "so",
          "vietnameseSub": "vì thế (không đứng sau dấu chấm phẩy đi kèm dấu phẩy)"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. therefore. Cấu trúc liên kết hai mệnh đề nhân quả độc lập: \"; therefore, \" (chính vì thế, do đó)."
    }
  ],
  "readingSignQuestions": [
    {
      "id": "t11_s1",
      "number": 11,
      "section": "signs",
      "signText": "SAFARI – Hours Open:\n9 A.M. till 5.30 P.M. Weekdays\n9:30 A.M. till 1 P.M. Saturday",
      "vietnameseSignTranslation": "KHU BẢO TỒN HOANG DÃ SAFARI – Giờ mở cửa:\n9:00 sáng đến 5:30 chiều các ngày trong tuần (T2–T6)\n9:30 sáng đến 1:00 chiều thứ Bảy",
      "question": "The safari ______.",
      "options": [
        {
          "key": "A",
          "text": "is open 5 days a week",
          "vietnameseSub": "mở cửa 5 ngày một tuần"
        },
        {
          "key": "B",
          "text": "closes later on Saturday",
          "vietnameseSub": "đóng cửa muộn hơn vào thứ Bảy"
        },
        {
          "key": "C",
          "text": "is not open on Sunday",
          "vietnameseSub": "không mở cửa vào Chủ nhật (đúng)"
        },
        {
          "key": "D",
          "text": "open longer on Saturday",
          "vietnameseSub": "mở cửa lâu hơn vào thứ Bảy"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. is not open on Sunday. Bảng giờ mở cửa chỉ ghi Weekdays (thứ Hai đến thứ Sáu) và Saturday (thứ Bảy), không liệt kê Chủ nhật (Sunday) nghĩa là Chủ nhật đóng cửa nghỉ."
    },
    {
      "id": "t11_s2",
      "number": 12,
      "section": "signs",
      "signText": "DOG MUST BE KEPT ON LEADS",
      "vietnameseSignTranslation": "CHÓ BẮT BUỘC PHẢI ĐƯỢC XÍCH DẮT BẰNG DÂY",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "You can let your dog run away.",
          "vietnameseSub": "Bạn có thể để chó chạy lung tung."
        },
        {
          "key": "B",
          "text": "You must keep your dog under control.",
          "vietnameseSub": "Bạn phải giữ và kiểm soát chó của mình (đúng)."
        },
        {
          "key": "C",
          "text": "You must tie your dog to the post.",
          "vietnameseSub": "Bạn phải cột chặt chó vào cột."
        },
        {
          "key": "D",
          "text": "You cannot bring dog here.",
          "vietnameseSub": "Bạn không được mang chó tới đây."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. You must keep your dog under control. Biển báo yêu cầu \"DOG MUST BE KEPT ON LEADS\" (phải dắt xích chó) đồng nghĩa với việc luôn kiểm soát thú cưng dưới tầm tay."
    },
    {
      "id": "t11_s3",
      "number": 13,
      "section": "signs",
      "signText": "PLEASE CLEAN UP AFTER YOUR DOG\nMaximum penalty $500",
      "vietnameseSignTranslation": "XIN VUI LÒNG DỌN DẸP SẠCH PHÂN THÚ CƯNG CỦA BẠN\nMức phạt tối đa 500 đô la",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "Your dog mustn't run free here.",
          "vietnameseSub": "Chó không được chạy tự do tại đây."
        },
        {
          "key": "B",
          "text": "If you walk the dog here, you will pay 500 pounds.",
          "vietnameseSub": "Nếu dắt chó đi dạo ở đây bạn phải nộp 500 bảng."
        },
        {
          "key": "C",
          "text": "You have to clean your dog before walking here.",
          "vietnameseSub": "Bạn phải tắm rửa cho chó trước khi đi dạo."
        },
        {
          "key": "D",
          "text": "You can play with your dog here but you must collect your dog's poop.",
          "vietnameseSub": "Bạn có thể chơi với chó ở đây nhưng phải thu dọn phân của chó (đúng)."
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. You can play with your dog here but you must collect your dog's poop. \"Clean up after your dog\" nghĩa là nhặt và dọn sạch phân thú nuôi sau khi đi vệ sinh để giữ gìn vệ sinh chung."
    },
    {
      "id": "t11_s4",
      "number": 14,
      "section": "signs",
      "signText": "NO ACCESS – Tree falling in progress – Monday to Friday",
      "vietnameseSignTranslation": "CẤM VÀO – Đang tiến hành đốn hạ cây nguy hiểm – Từ thứ Hai đến thứ Sáu",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "You are not allowed to enter the forest because of falling trees.",
          "vietnameseSub": "Bạn không được phép đi vào rừng do nguy cơ cây ngã/chặt cây (đúng)."
        },
        {
          "key": "B",
          "text": "You can enter the forest on Thursday.",
          "vietnameseSub": "Bạn có thể vào rừng vào thứ Năm."
        },
        {
          "key": "C",
          "text": "You are not allowed to cut down trees here.",
          "vietnameseSub": "Bạn không được phép tự ý chặt cây ở đây."
        },
        {
          "key": "D",
          "text": "You are allowed to enter but watch out falling trees.",
          "vietnameseSub": "Bạn được phép vào nhưng phải cẩn thận cây đổ."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. You are not allowed to enter the forest because of falling trees. \"NO ACCESS\" nghĩa là cấm vào hoàn toàn vì khu vực đang đốn ngã cây nguy hiểm."
    },
    {
      "id": "t11_s5",
      "number": 15,
      "section": "signs",
      "signText": "Chemical spraying in progress",
      "vietnameseSignTranslation": "Đang trong quá trình phun xịt hóa chất",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "You must spray chemicals.",
          "vietnameseSub": "Bạn phải phun xịt hóa chất."
        },
        {
          "key": "B",
          "text": "Chemicals are not dangerous here.",
          "vietnameseSub": "Hóa chất ở đây không nguy hiểm."
        },
        {
          "key": "C",
          "text": "Chemicals are being sprayed here.",
          "vietnameseSub": "Khu vực này hiện đang được phun hóa chất (đúng)."
        },
        {
          "key": "D",
          "text": "Chemicals shouldn't been sprayed here",
          "vietnameseSub": "Hóa chất không nên được phun ở đây."
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. Chemicals are being sprayed here. Cụm \"in progress\" (đang được tiến hành) tương đương với thì hiện tại tiếp diễn thể bị động \"are being sprayed\"."
    }
  ],
  "readingPassageBTitle": "POLLUTION: CAUSES AND SEVERE ENVIRONMENTAL EFFECTS",
  "readingPassageBTag": "Passage B: Reading Comprehension",
  "readingTonyPassage": "Pollution is any contamination of the environment which causes harm to the environment or the inhabitants of the environment. There are three main kinds of pollution.\nAir pollution can be caused by liquids, or gases that make the air harmful to breathe. There are two main types of air pollution: primary and secondary. Primary pollutants enter the air directly, like smoke from factories and car exhaust. Secondary pollutants are chemicals that mix together to pollute the air, like mixtures of emissions from vehicles and factory smoke that change to form more dangerous pollutants in the air and sunlight.\nSoil pollution can be caused by pesticides, leakage from chemical tanks, oil spills, and other chemicals which get into the soil by dumping or accidental contamination. Soil pollution can also cause water pollution when underground water becomes contaminated by coming into contact with the polluted soil. Water pollution can be caused by waste products, sewage, oil spills, and litter in streams, rivers, lakes, and oceans. Some scientists believe that water pollution is the largest cause of death and disease in the world, causing about 14,000 deaths in the world each day.\nIt is not possible for anyone to predict the exact timing and effects of global pollution and global climate change brought about by pollution. There is general agreement by scientists that the global climate will continue to change, the intensity of weather effects will continue to increase, and some species of animals will become extinct.",
  "readingTonyTranslation": "Ô nhiễm môi trường là bất kỳ sự nhiễm độc nào gây tổn hại cho môi trường sinh thái hoặc các cư dân sinh sống trong môi trường đó. Có ba loại ô nhiễm chủ yếu.\nÔ nhiễm không khí có thể xuất phát từ chất lỏng hoặc các loại khí thể khiến không khí trở nên độc hại khi hít thở. Ô nhiễm không khí bao gồm hai nhóm chính: chất gây ô nhiễm sơ cấp và thứ cấp. Các chất ô nhiễm sơ cấp đi trực tiếp vào không khí, chẳng hạn như khói từ các nhà máy công nghiệp và khí thải xe cộ. Chất ô nhiễm thứ cấp là những hóa chất phản ứng kết hợp với nhau trong bầu khí quyển, ví dụ như hỗn hợp khí thải xe cộ hòa trộn với khói nhà máy biến đổi dưới ánh nắng mặt trời tạo thành các hợp chất độc hại nguy hiểm hơn.\nÔ nhiễm đất có thể gây ra bởi thuốc trừ sâu nông nghiệp, sự rò rỉ từ các bể chứa hóa chất, sự cố tràn dầu và các chất hóa học khác ngấm vào lòng đất do xả rác bừa bãi hoặc sự cố rò rỉ. Ô nhiễm đất cũng có thể dẫn đến ô nhiễm nguồn nước khi mạch nước ngầm bị nhiễm độc do tiếp xúc trực tiếp với lớp đất ô nhiễm. Ô nhiễm nước sinh ra bởi chất thải công nghiệp, nước cống rãnh, tràn dầu và rác thải xả xuống các dòng suối, sông ngòi, ao hồ và đại dương. Một số nhà khoa học nhận định rằng ô nhiễm nguồn nước là nguyên nhân hàng đầu gây tử vong và dịch bệnh trên thế giới, cướp đi sinh mạng của khoảng 14.000 người mỗi ngày.\nHiện nay con người chưa thể dự báo chính xác thời điểm và mức độ tác động toàn diện của ô nhiễm toàn cầu và biến đổi khí hậu. Tuy nhiên, giới khoa học đều thống nhất rằng khí hậu toàn cầu sẽ tiếp tục biến chuyển khó lường, cường độ của các hiện tượng thời tiết cực đoan sẽ ngày càng dữ dội hơn, và nhiều loài sinh vật sẽ hoàn toàn biến mất khỏi Trái Đất do tuyệt chủng.",
  "readingTonyQuestions": [
    {
      "id": "t11_r1",
      "number": 16,
      "section": "passageB",
      "question": "According to the passage, what is the most suitable title?",
      "options": [
        {
          "key": "A",
          "text": "Solutions to pollution",
          "vietnameseSub": "Các giải pháp đối phó ô nhiễm"
        },
        {
          "key": "B",
          "text": "Environmental issues",
          "vietnameseSub": "Các vấn đề môi trường"
        },
        {
          "key": "C",
          "text": "Causes and effects of pollution",
          "vietnameseSub": "Nguyên nhân và hậu quả của ô nhiễm (đúng)"
        },
        {
          "key": "D",
          "text": "Environmental impacts",
          "vietnameseSub": "Các tác động môi trường"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. Causes and effects of pollution. Xuyên suốt bài viết phân tích chi tiết nguyên nhân (nguồn phát sinh khí thải, rác thải, hóa chất) và các hậu quả nghiêm trọng đối với sức khỏe con người và khí hậu toàn cầu."
    },
    {
      "id": "t11_r2",
      "number": 17,
      "section": "passageB",
      "question": "What kind of pollution is considered as the cause of the most death and disease?",
      "options": [
        {
          "key": "A",
          "text": "Air pollution",
          "vietnameseSub": "Ô nhiễm không khí"
        },
        {
          "key": "B",
          "text": "Water pollution",
          "vietnameseSub": "Ô nhiễm nguồn nước (đúng)"
        },
        {
          "key": "C",
          "text": "Soil pollution",
          "vietnameseSub": "Ô nhiễm đất đai"
        },
        {
          "key": "D",
          "text": "None of the above",
          "vietnameseSub": "Không có đáp án nào đúng"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. Water pollution. Bài đọc nêu rõ: \"Some scientists believe that water pollution is the largest cause of death and disease in the world, causing about 14,000 deaths in the world each day.\""
    },
    {
      "id": "t11_r3",
      "number": 18,
      "section": "passageB",
      "question": "What is NOT a cause of soil pollution?",
      "options": [
        {
          "key": "A",
          "text": "Chemicals",
          "vietnameseSub": "Hóa chất độc hại"
        },
        {
          "key": "B",
          "text": "Exhaust fumes",
          "vietnameseSub": "Khói khí thải xe cộ (gây ô nhiễm không khí - đúng)"
        },
        {
          "key": "C",
          "text": "Pesticides",
          "vietnameseSub": "Thuốc trừ sâu"
        },
        {
          "key": "D",
          "text": "Oil spills",
          "vietnameseSub": "Sự cố tràn dầu"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. Exhaust fumes. Khói thải xe cộ (exhaust fumes) là nguyên nhân chính gây ô nhiễm không khí (air pollution), không phải ô nhiễm đất."
    },
    {
      "id": "t11_r4",
      "number": 19,
      "section": "passageB",
      "question": "What kind of pollution may oil spills cause?",
      "options": [
        {
          "key": "A",
          "text": "Air pollution",
          "vietnameseSub": "Ô nhiễm không khí"
        },
        {
          "key": "B",
          "text": "Water pollution",
          "vietnameseSub": "Ô nhiễm nguồn nước"
        },
        {
          "key": "C",
          "text": "Soil pollution",
          "vietnameseSub": "Ô nhiễm đất đai"
        },
        {
          "key": "D",
          "text": "Both B and C are correct",
          "vietnameseSub": "Cả B và C đều đúng (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. Both B and C are correct. Dầu tràn vừa ngấm vào lòng đất gây ô nhiễm đất (Soil pollution can be caused by... oil spills), vừa loang trên sông hồ biển gây ô nhiễm nước (Water pollution can be caused by... oil spills)."
    },
    {
      "id": "t11_r5",
      "number": 20,
      "section": "passageB",
      "question": "According to the agreement of scientists, what is NOT environmental effect caused by pollution?",
      "options": [
        {
          "key": "A",
          "text": "Global climate change",
          "vietnameseSub": "Biến đổi khí hậu toàn cầu (có nhắc)"
        },
        {
          "key": "B",
          "text": "Intensity of weather effects",
          "vietnameseSub": "Gia tăng cường độ thời tiết khắc nghiệt (có nhắc)"
        },
        {
          "key": "C",
          "text": "Animal extinction",
          "vietnameseSub": "Nhiều loài động vật tuyệt chủng (có nhắc)"
        },
        {
          "key": "D",
          "text": "Disappearance of the rainforests",
          "vietnameseSub": "Sự biến mất của các cánh rừng mưa nhiệt đới (không được nhắc - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. Disappearance of the rainforests. Đoạn cuối khẳng định sự đồng thuận của các nhà khoa học gồm 3 điểm: biến đổi khí hậu, hiện tượng thời tiết cực đoan tăng, động vật tuyệt chủng; hoàn toàn không đề cập đến \"Disappearance of the rainforests\"."
    }
  ],
  "readingPassageCTitle": "CITIES FOR PEOPLE: BANNING CARS FROM CITY CENTRES",
  "readingPassageCTag": "Passage C: Cloze Test",
  "readingAnnaPassage": "Dear Sir,\nWe are writing to suggest that all cars should be (1)______ from the centre of the city as soon as possible. The amount of (2)______ from car exhaust fumes is now unbearable and we believe that the public must be (3)______. Apart from this, the streets are crowded (4)______ cars, and our lives are at (5)______ when we try to cross the road! There has been a huge increase in the amount of traffic recently, and the government just seems to put off the problem, instead of (6)______ it. Unless we (7)______ the traffic problem, and seriously consider some of the solutions, life in our city will become (8)______. Our organization, Cities for People, has been set up to make the government do something! We are holding a (9)______ next week in the city centre, and hope that many people will (10)______ us.\nYours faithfully,",
  "readingAnnaTranslation": "Kính gửi Tòa soạn,\nChúng tôi viết thư này nhằm đề xuất rằng tất cả xe ô tô cá nhân cần phải bị cấm lưu thông tại khu vực trung tâm thành phố càng sớm càng tốt. Mức độ ô nhiễm do khói thải xe hơi gây ra hiện nay đã tới mức không thể chịu đựng nổi, và chúng tôi tin chắc rằng sức khỏe cộng đồng phải được bảo vệ. Bên cạnh đó, đường phố thì chật ních xe cộ, và tính mạng của chúng tôi luôn bị đe dọa mỗi khi cố gắng sang đường! Lượng phương tiện giao thông đã tăng đột biến trong thời gian gần đây, vậy mà chính quyền dường như chỉ trì hoãn vấn đề thay vì bắt tay vào giải quyết dứt điểm. Trừ khi chúng ta dũng cảm đối mặt với bài toán giao thông nan giải này và nghiêm túc cân nhắc các giải pháp khả thi, bằng không cuộc sống tại thành phố này sẽ trở nên bất khả thi. Tổ chức \"Vì Những Thành Phố Cho Con Người\" của chúng tôi được thành lập nhằm thúc giục chính quyền phải hành động! Chúng tôi sẽ tổ chức một cuộc tuần hành tuần tới tại trung tâm thành phố và hy vọng đông đảo người dân sẽ tham gia cùng chúng tôi.\nKính thư,",
  "readingAnnaQuestions": [
    {
      "id": "t11_c1",
      "number": 21,
      "section": "cloze",
      "question": "Choose the best word for blank (1):",
      "options": [
        {
          "key": "A",
          "text": "stopped",
          "vietnameseSub": "bị chặn lại"
        },
        {
          "key": "B",
          "text": "banned",
          "vietnameseSub": "bị cấm (banned from the centre - đúng)"
        },
        {
          "key": "C",
          "text": "removed",
          "vietnameseSub": "bị gỡ bỏ"
        },
        {
          "key": "D",
          "text": "altered",
          "vietnameseSub": "bị thay đổi"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. banned. Đề xuất cấm phương tiện đi vào khu vực trung tâm: \"cars should be banned from the centre\"."
    },
    {
      "id": "t11_c2",
      "number": 22,
      "section": "cloze",
      "question": "Choose the best word for blank (2):",
      "options": [
        {
          "key": "A",
          "text": "this",
          "vietnameseSub": "điều này"
        },
        {
          "key": "B",
          "text": "problem",
          "vietnameseSub": "vấn đề"
        },
        {
          "key": "C",
          "text": "driving",
          "vietnameseSub": "việc lái xe"
        },
        {
          "key": "D",
          "text": "pollution",
          "vietnameseSub": "sự ô nhiễm (amount of pollution - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. pollution. \"The amount of pollution from car exhaust fumes\" (mức độ ô nhiễm sinh ra từ khói xả xe hơi)."
    },
    {
      "id": "t11_c3",
      "number": 23,
      "section": "cloze",
      "question": "Choose the best word for blank (3):",
      "options": [
        {
          "key": "A",
          "text": "preserved",
          "vietnameseSub": "được bảo tồn"
        },
        {
          "key": "B",
          "text": "saved",
          "vietnameseSub": "được tiết kiệm / cứu rỗi"
        },
        {
          "key": "C",
          "text": "exhausted",
          "vietnameseSub": "bị kiệt sức"
        },
        {
          "key": "D",
          "text": "protected",
          "vietnameseSub": "được bảo vệ an toàn (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. protected. Người dân và cộng đồng công chúng cần được che chở bảo vệ sức khỏe: \"the public must be protected\"."
    },
    {
      "id": "t11_c4",
      "number": 24,
      "section": "cloze",
      "question": "Choose the best word for blank (4):",
      "options": [
        {
          "key": "A",
          "text": "from",
          "vietnameseSub": "từ"
        },
        {
          "key": "B",
          "text": "in",
          "vietnameseSub": "trong"
        },
        {
          "key": "C",
          "text": "with",
          "vietnameseSub": "với (crowded with - đúng)"
        },
        {
          "key": "D",
          "text": "between",
          "vietnameseSub": "ở giữa"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. with. Giới từ cố định đi kèm tính từ đông đúc: \"crowded with cars\" (đông nghẹt đầy ắp xe cộ)."
    },
    {
      "id": "t11_c5",
      "number": 25,
      "section": "cloze",
      "question": "Choose the best word for blank (5):",
      "options": [
        {
          "key": "A",
          "text": "risk",
          "vietnameseSub": "rủi ro nguy hiểm (at risk - đúng)"
        },
        {
          "key": "B",
          "text": "danger",
          "vietnameseSub": "mối nguy (in danger)"
        },
        {
          "key": "C",
          "text": "urgent",
          "vietnameseSub": "khẩn cấp"
        },
        {
          "key": "D",
          "text": "problem",
          "vietnameseSub": "vấn đề"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. risk. Thành ngữ cố định chỉ tình trạng hiểm nguy: \"our lives are at risk\" (tính mạng gặp nguy hiểm)."
    },
    {
      "id": "t11_c6",
      "number": 26,
      "section": "cloze",
      "question": "Choose the best word for blank (6):",
      "options": [
        {
          "key": "A",
          "text": "going through",
          "vietnameseSub": "trải qua"
        },
        {
          "key": "B",
          "text": "dealing with",
          "vietnameseSub": "giải quyết, xử lý (đúng)"
        },
        {
          "key": "C",
          "text": "closing down",
          "vietnameseSub": "đóng cửa"
        },
        {
          "key": "D",
          "text": "keeping up with",
          "vietnameseSub": "bắt kịp"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. dealing with. \"dealing with it\" (bắt tay vào xử lý giải quyết vấn nạn giao thông)."
    },
    {
      "id": "t11_c7",
      "number": 27,
      "section": "cloze",
      "question": "Choose the best word for blank (7):",
      "options": [
        {
          "key": "A",
          "text": "look for",
          "vietnameseSub": "tìm kiếm"
        },
        {
          "key": "B",
          "text": "make out",
          "vietnameseSub": "nhận ra"
        },
        {
          "key": "C",
          "text": "face up to",
          "vietnameseSub": "dũng cảm nhìn nhận, đối mặt (đúng)"
        },
        {
          "key": "D",
          "text": "come round to",
          "vietnameseSub": "thay đổi ý kiến theo"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. face up to. Cụm phrasal verb \"face up to the traffic problem\" nghĩa là thẳng thắn nhìn nhận và đối diện với thực trạng khó khăn."
    },
    {
      "id": "t11_c8",
      "number": 28,
      "section": "cloze",
      "question": "Choose the best word for blank (8):",
      "options": [
        {
          "key": "A",
          "text": "lifeless",
          "vietnameseSub": "vô hồn"
        },
        {
          "key": "B",
          "text": "uninhabitable",
          "vietnameseSub": "không thể cư ngụ"
        },
        {
          "key": "C",
          "text": "impossible",
          "vietnameseSub": "bất khả thi, không thể sống nổi (đúng)"
        },
        {
          "key": "D",
          "text": "destruction",
          "vietnameseSub": "sự phá hủy"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. impossible. Trong ngữ cảnh giao thông tắc nghẽn ô nhiễm, thành ngữ \"life will become impossible\" diễn tả cuộc sống sẽ trở nên quá ngột ngạt, bế tắc."
    },
    {
      "id": "t11_c9",
      "number": 29,
      "section": "cloze",
      "question": "Choose the best word for blank (9):",
      "options": [
        {
          "key": "A",
          "text": "pile-up",
          "vietnameseSub": "vụ đâm xe liên hoàn"
        },
        {
          "key": "B",
          "text": "riot",
          "vietnameseSub": "cuộc bạo loạn"
        },
        {
          "key": "C",
          "text": "organization",
          "vietnameseSub": "tổ chức"
        },
        {
          "key": "D",
          "text": "demonstration",
          "vietnameseSub": "cuộc biểu tình, tuần hành ôn hòa (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. demonstration. Cụm \"holding a demonstration\" nghĩa là tổ chức một cuộc mít-tinh, tuần hành kêu gọi cộng đồng hành động."
    },
    {
      "id": "t11_c10",
      "number": 30,
      "section": "cloze",
      "question": "Choose the best word for blank (10):",
      "options": [
        {
          "key": "A",
          "text": "join",
          "vietnameseSub": "tham gia cùng (join us - đúng)"
        },
        {
          "key": "B",
          "text": "bear",
          "vietnameseSub": "chịu đựng"
        },
        {
          "key": "C",
          "text": "increase",
          "vietnameseSub": "gia tăng"
        },
        {
          "key": "D",
          "text": "agree",
          "vietnameseSub": "đồng ý (agree with us)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. join. Động từ \"join us\" (tham gia hòa vào cùng đoàn biểu tình)."
    }
  ],
  "sentenceTransformations": [
    {
      "id": "t11_w1",
      "number": 31,
      "originalSentence": "She wasn't wearing the coat although the weather was quite cold.",
      "vietnameseTranslation": "Cô ấy đã không mặc áo khoác mặc dù thời tiết khá lạnh.",
      "prefix": "Despite",
      "modelAnswer": "Despite the cold weather, she wasn't wearing the coat.",
      "vietnameseModelTranslation": "Bất chấp thời tiết giá lạnh, cô ấy vẫn không mặc áo khoác.",
      "acceptedAnswers": [
        "the cold weather, she wasn't wearing the coat.",
        "the cold weather, she wasn't wearing the coat",
        "the weather being quite cold, she wasn't wearing the coat.",
        "the weather being quite cold, she wasn't wearing the coat",
        "the quite cold weather, she wasn't wearing the coat.",
        "the quite cold weather, she wasn't wearing the coat"
      ],
      "grammarPoint": "Chuyển đổi từ Although + clause sang Despite + Noun phrase / V-ing: Although the weather was cold = Despite the cold weather."
    },
    {
      "id": "t11_w2",
      "number": 32,
      "originalSentence": "The water here cannot be used for drinking because it's polluted.",
      "vietnameseTranslation": "Nguồn nước ở đây không thể dùng để uống bởi vì nó bị ô nhiễm.",
      "prefix": "Because of",
      "modelAnswer": "Because of the pollution, the water here cannot be used for drinking.",
      "vietnameseModelTranslation": "Bởi vì sự ô nhiễm, nguồn nước ở đây không thể dùng để uống được.",
      "acceptedAnswers": [
        "the pollution, the water here cannot be used for drinking.",
        "the pollution, the water here cannot be used for drinking",
        "the polluted water, it cannot be used for drinking.",
        "the polluted water, it cannot be used for drinking",
        "being polluted, the water here cannot be used for drinking.",
        "being polluted, the water here cannot be used for drinking"
      ],
      "grammarPoint": "Chuyển đổi từ Because + clause sang Because of + Noun phrase: Because it's polluted = Because of the pollution."
    },
    {
      "id": "t11_w3",
      "number": 33,
      "originalSentence": "Mick sold his laptop to Patrick for $500.",
      "vietnameseTranslation": "Mick đã bán chiếc máy tính xách tay của mình cho Patrick với giá 500 đô la.",
      "prefix": "Patrick",
      "modelAnswer": "Patrick bought Mick's laptop for $500.",
      "vietnameseModelTranslation": "Patrick đã mua lại chiếc máy tính xách tay của Mick với giá 500 đô la.",
      "acceptedAnswers": [
        "bought Mick's laptop for $500.",
        "bought Mick's laptop for $500",
        "bought the laptop from Mick for $500.",
        "bought the laptop from Mick for $500",
        "bought his laptop from Mick for $500.",
        "bought his laptop from Mick for $500"
      ],
      "grammarPoint": "Chuyển đổi cặp động từ đối lập Bán - Mua: S1 + sold + sth + to S2 = S2 + bought + sth + from S1."
    },
    {
      "id": "t11_w4",
      "number": 34,
      "originalSentence": "The boy is so young that he can't go to school alone.",
      "vietnameseTranslation": "Cậu bé còn quá nhỏ đến nỗi không thể tự một mình đi đến trường.",
      "prefix": "The boy is too",
      "modelAnswer": "The boy is too young to go to school alone.",
      "vietnameseModelTranslation": "Cậu bé quá nhỏ để có thể tự một mình đi đến trường.",
      "acceptedAnswers": [
        "young to go to school alone.",
        "young to go to school alone"
      ],
      "grammarPoint": "Chuyển đổi cấu trúc So... that sang Too... to: S + be + so + adj + that + S + cannot + V = S + be + too + adj + to V."
    },
    {
      "id": "t11_w5",
      "number": 35,
      "originalSentence": "\"Why don't you put a better lock on the door, Tan?\" Hung asked.",
      "vietnameseTranslation": "“Sao cậu không lắp một chiếc khóa tốt hơn ở cửa đi, Tân?” Hùng hỏi.",
      "prefix": "Hung suggested",
      "modelAnswer": "Hung suggested that Tan put a better lock on the door.",
      "vietnameseModelTranslation": "Hùng đã gợi ý rằng Tân nên lắp một chiếc khóa tốt hơn ở cửa.",
      "acceptedAnswers": [
        "that Tan put a better lock on the door.",
        "that Tan put a better lock on the door",
        "that Tan should put a better lock on the door.",
        "that Tan should put a better lock on the door",
        "putting a better lock on the door.",
        "putting a better lock on the door"
      ],
      "grammarPoint": "Chuyển đổi câu đề nghị \"Why don't you...\": S + suggested that + S + (should) + V-inf."
    }
  ],
  "letterWriting": {
    "prompt": "Write a letter (about 120 words) to your friend/colleague/parents/relatives about one environmental problem that your city is facing and what people are doing to solve it.\\nYour letter should include:\\n- What environmental problem is your city facing?\\n- What is the cause of the problem?\\n- What are local people doing to solve the problem?\\nNOTE: Write the body of the letter only. Do NOT write your name, your address and your signature in the letter!",
    "vietnamesePrompt": "Viết một lá thư (khoảng 120 từ) gửi cho bạn bè/đồng nghiệp/bố mẹ/người thân về một vấn nạn môi trường mà thành phố bạn đang đối mặt và những việc người dân đang làm để giải quyết.\\nNội dung lá thư cần bao gồm:\\n- Thành phố bạn đang đối mặt với vấn nạn môi trường nào?\\n- Đâu là nguyên nhân chính gây ra vấn nạn đó?\\n- Người dân địa phương đang làm gì để giải quyết?\\nLƯU Ý: Chỉ viết phần thân lá thư. Không ghi họ tên, địa chỉ hoặc chữ ký cá nhân!",
    "requiredWordCount": "100 - 140 words",
    "sample1": {
      "title": "Bài mẫu 1: Vấn nạn rác thải nhựa tại bờ biển và chợ (Tài liệu giáo trình)",
      "content": "Dear Lan,\n\nHow are you? I'm writing to tell you about a problem in my city. The biggest environmental problem here is plastic waste, especially along the beach and the streets near the markets.\n\nI think the main cause is that many people and tourists throw bags and bottles away carelessly. There are also not enough rubbish bins in some areas.\n\nLocal people are doing a lot to solve it. Students and volunteers organise beach clean-up days every month. The authorities have put more bins in public places and encourage shoppers to use cloth bags instead of plastic ones. I hope the city will become much cleaner soon.\n\nWrite back soon and tell me about your hometown!\n\nLove,"
    },
    "sample2": {
      "title": "Bài mẫu 2: Ô nhiễm rác thải nhựa tại Tuy Hòa, Phú Yên (Phan Tấn Kiệt)",
      "content": "Dear Nam,\n\nHow have you been? I am writing to share with you an urgent environmental issue facing my hometown of Tuy Hoa: the excessive accumulation of single-use plastic waste along coastal fishing villages and public canals.\n\nThe primary culprit is the indiscriminate littering by visitors and local vendors who discard plastic bags and styrofoam boxes instead of disposing of them responsibly. Moreover, public trash cans are often overburdened during festival weekends.\n\nFortunately, our community has taken decisive action. Youth unions and college students regularly organize weekend clean-up campaigns to scour beaches. Local shopkeepers have also begun replacing non-biodegradable plastics with reusable cloth totes and paper straws.\n\nI firmly believe these joint efforts will restore our coastal landscape.\n\nWarm wishes,"
    }
  },
  "speakingCard": {
    "cardTitle": "SPEAKING CARD – No.11: Talk about environmental problems in your province/city",
    "cardSubtitle": "Nói về các vấn đề ô nhiễm môi trường tại tỉnh/thành phố của bạn",
    "questions": [
      {
        "q": "What are environmental problems?",
        "vi": "Các vấn đề ô nhiễm môi trường phổ biến là gì?"
      },
      {
        "q": "What are the causes?",
        "vi": "Những nguyên nhân chính gây ra tình trạng đó là gì?"
      },
      {
        "q": "What are impacts of those environmental problems on community?",
        "vi": "Những tác động tiêu cực của các vấn đề môi trường đối với cộng đồng là gì?"
      },
      {
        "q": "What are solutions to those problems?",
        "vi": "Các giải pháp khắc phục những vấn đề đó là gì?"
      }
    ],
    "sampleAnswers": [
      {
        "speaker": "Bài mẫu 1 (Theo tài liệu giáo trình - Thành phố Tuy Hòa)",
        "textEn": "In recent years, environmental pollution has become a serious problem in big cities in our country. In my hometown, Tuy Hoa city, air pollution and litter are two common problems that local people have to face.\nThere are a lot of factories in my city and they release a large amount of smoke with toxic chemicals that pollute the atmosphere. Air pollution has dangerous consequences for people's health, like causing serious diseases, for example lung cancer, and it also severely affects natural ecosystems. About littering, there is an increasing amount of litter on streets around outdoor markets, fast food stands or factories. Most litter is plastic bags and food wrapping. In several areas, people throw litter on streets or in canals and rivers. This not only threatens our health but also negatively affects the image of the city.\nAs for solutions, I think the factories should be moved into industrial areas. We also need to raise people's awareness of the impacts of litter, or maybe pass laws on illegal littering. In addition, we should put more litter bins in public areas and encourage people to travel by public transport. I myself can save the environment by planting trees, using less energy, and reducing waste.",
        "textVi": "Trong những năm gần đây, ô nhiễm môi trường đã trở thành một bài toán nan giải tại các đô thị lớn ở nước ta. Tại quê hương tôi, thành phố Tuy Hòa, ô nhiễm không khí và nạn xả rác bừa bãi là hai vấn đề nổi cộm mà người dân địa phương đang phải đối mặt.\nTrong thành phố có nhiều nhà máy xí nghiệp xả ra lượng khói lớn chứa hóa chất độc hại làm ô nhiễm bầu khí quyển. Ô nhiễm không khí để lại những hậu quả khôn lường cho sức khỏe cộng đồng, gây ra các căn bệnh hiểm nghèo như ung thư phổi, đồng thời hủy hoại hệ sinh thái tự nhiên. Về nạn xả rác, rác thải xuất hiện ngày càng nhiều trên đường phố xung quanh các khu chợ ngoài trời, quầy thức ăn nhanh hay xưởng sản xuất, phần lớn là túi nilon và bao bì thực phẩm. Ở một số nơi, người dân vô tư vứt rác xuống lòng đường hoặc kênh rạch, vừa đe dọa sức khỏe vừa làm xấu đi mỹ quan đô thị.\nVề giải pháp, tôi cho rằng các nhà máy cần được di dời vào các khu công nghiệp tập trung. Chúng ta cũng cần nâng cao ý thức người dân về tác hại của rác thải, xử phạt nghiêm hành vi xả rác bừa bãi, bố trí thêm nhiều thùng rác công cộng và khuyến khích đi lại bằng phương tiện công cộng. Bản thân tôi có thể góp phần bảo vệ môi trường bằng cách trồng thêm cây xanh, tiết kiệm điện nước và giảm thiểu rác thải sinh hoạt."
      },
      {
        "speaker": "Bài mẫu 2 (Theo ngữ cảnh sinh viên - Phan Tấn Kiệt)",
        "textEn": "As an IT student at Mien Trung University of Civil Engineering, I observe that urbanization in Tuy Hoa has brought alarming environmental challenges, primarily plastic debris and untreated wastewater.\nUncollected plastic packaging blocks drainage canals, creating breeding grounds for mosquitoes and spoiling our coastal tourism appeal. Furthermore, dust and exhaust from expanding construction transport degrade our air quality.\nTo combat this, technological solutions such as smart recycling apps and sensor-monitored waste management should be implemented. On a personal level, young people must adopt green habits: minimizing single-use plastics, participating in weekend beach clean-ups, and riding bicycles whenever possible. Protecting our environment requires immediate, persistent collective dedication.",
        "textVi": "Là một sinh viên ngành Công nghệ thông tin tại Trường Đại học Xây dựng Miền Trung, tôi nhận thấy quá trình đô thị hóa tại Tuy Hòa đang kéo theo những thách thức môi trường đáng lo ngại, chủ yếu là rác thải nhựa và nước thải sinh hoạt.\nRác thải nhựa không được thu gom gây tắc nghẽn các tuyến kênh mương thoát nước, tạo nơi sinh sôi cho muỗi mòng và làm mất đi vẻ đẹp thơ mộng của bờ biển du lịch quê hương. Thêm vào đó, khói bụi từ các xe vận tải vật liệu xây dựng cũng làm suy giảm chất lượng không khí.\nĐể giải quyết vấn đề này, các ứng dụng công nghệ như phân loại rác thông minh và quản lý rác thải bằng cảm biến nên được áp dụng. Ở góc độ cá nhân, người trẻ cần duy trì lối sống xanh: hạn chế đồ nhựa dùng một lần, tích cực tham gia các chiến dịch làm sạch bờ biển vào cuối tuần và ưu tiên đi lại bằng xe đạp. Bảo vệ môi trường là trách nhiệm đòi hỏi sự chung tay bền bỉ của tất cả chúng ta."
      }
    ]
  },
  "listeningPartA": [
    {
      "number": 1,
      "question": "What is the weather forecast for tomorrow?",
      "options": [
        "A: Heavy rain with thunderstorm",
        "B: Sunny and warm",
        "C: Windy and cloudy"
      ],
      "answer": "B",
      "note": "Phán đoán dự báo thời tiết ngày mai"
    },
    {
      "number": 2,
      "question": "What will they buy at the supermarket?",
      "options": [
        "A: Fresh fruits and vegetables",
        "B: Bread and cheese",
        "C: Meat and fish"
      ],
      "answer": "A",
      "note": "Phán đoán thực phẩm quyết định mua"
    },
    {
      "number": 3,
      "question": "Which T-shirt does the woman buy?",
      "options": [
        "A: Striped T-shirt with V-neck",
        "B: Plain white T-shirt",
        "C: Patterned shirt with collar"
      ],
      "answer": "A",
      "note": "Phán đoán kiểu áo thun người phụ nữ chọn mua"
    },
    {
      "number": 4,
      "question": "What will the girl take with her on holiday?",
      "options": [
        "A: Digital camera",
        "B: Heavy jacket",
        "C: Swimming goggles"
      ],
      "answer": "A",
      "note": "Phán đoán đồ vật bạn nữ mang theo trong kỳ nghỉ"
    },
    {
      "number": 5,
      "question": "Which exercise is the teacher describing?",
      "options": [
        "A: Stretching arms upward",
        "B: Touching toes bending down",
        "C: Jogging on the spot"
      ],
      "answer": "B",
      "note": "Phán đoán động tác thể dục giáo viên đang miêu tả"
    },
    {
      "number": 6,
      "question": "What time will the train to London leave?",
      "options": [
        "A: 04:30",
        "B: 04:45",
        "C: 04:50"
      ],
      "answer": "B",
      "note": "Phán đoán giờ tàu hỏa khởi hành đi London"
    },
    {
      "number": 7,
      "question": "Which sport will the boy do soon at the centre?",
      "options": [
        "A: Windsurfing",
        "B: Scuba diving",
        "C: Sailing"
      ],
      "answer": "A",
      "note": "Phán đoán môn thể thao dưới nước bạn nam sẽ tập luyện"
    }
  ],
  "listeningPartB": {
    "title": "ATHLETICS CHAMPIONSHIPS IN BIRMINGHAM (Listen and fill in the missing information)",
    "items": [
      {
        "gap": 1,
        "text": "Date of college trip: (1) 15th ______",
        "answer": "July"
      },
      {
        "gap": 2,
        "text": "Number of sportspeople who will compete: (2) ______",
        "answer": "450"
      },
      {
        "gap": 3,
        "text": "How the group will travel to Birmingham: by (3) ______",
        "answer": "coach"
      },
      {
        "gap": 4,
        "text": "What group members should take on the day: (4) ______",
        "answer": "packed lunch"
      },
      {
        "gap": 5,
        "text": "Name of the website page: (5) ______",
        "answer": "athletics-today"
      },
      {
        "gap": 6,
        "text": "Which day other details will be available to students: (6) ______",
        "answer": "Friday"
      }
    ],
    "note": "Lưu ý: Các câu hỏi điền từ vào chỗ trống dựa trên bài giới thiệu chuyến tham quan sự kiện điền kinh tại Birmingham."
  }
};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC11 = EXAM_DATA_TOPIC11;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC11;
}
