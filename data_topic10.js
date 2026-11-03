// TOPIC 10: HEALTH - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC10 = {
  "topicId": "topic10",
  "topicTitle": "TOPIC 10: HEALTH",
  "topicSubtitle": "Sức khỏe & Đời sống (Câu điều kiện loại 1 & 2, Liên từ Unless, Đọc hiểu Yoga cười Laughter Yoga & Kỳ nghỉ tai nạn, Lợi ích chế độ ăn uống lành mạnh)",
  "vocabulary": [
    {
      "word": "toothache",
      "ipa": "/ˈtuːθeɪk/",
      "pos": "n.",
      "meaning": "chứng đau răng",
      "example": "You should make an immediate dental appointment if you suffer from a severe toothache."
    },
    {
      "word": "dentist",
      "ipa": "/ˈdentɪst/",
      "pos": "n.",
      "meaning": "nha sĩ",
      "example": "Visiting your dentist every six months helps keep your teeth healthy and clean."
    },
    {
      "word": "medicine",
      "ipa": "/ˈmedsn/",
      "pos": "n.",
      "meaning": "thuốc uống, dược phẩm",
      "example": "Store all prescribed medicines in a dry cabinet well out of the reach of young children."
    },
    {
      "word": "prescription",
      "ipa": "/prɪˈskrɪpʃn/",
      "pos": "n.",
      "meaning": "đơn thuốc, toa thuốc bác sĩ",
      "example": "The doctor wrote a prescription for antibiotics to treat the throat infection."
    },
    {
      "word": "close down",
      "ipa": "/kləʊz daʊn/",
      "pos": "phrasal v.",
      "meaning": "đóng cửa vĩnh viễn, ngừng hoạt động",
      "example": "Many workers would lose their jobs if the local manufacturing plant closed down."
    },
    {
      "word": "fine",
      "ipa": "/faɪn/",
      "pos": "n.",
      "meaning": "tiền phạt vi phạm",
      "example": "Drivers who run red lights face a heavy fine from traffic officers."
    },
    {
      "word": "allergy",
      "ipa": "/ˈælədʒi/",
      "pos": "n.",
      "meaning": "chứng dị ứng (allergy to)",
      "example": "Patients with a known allergy to penicillin must inform the attending nurse beforehand."
    },
    {
      "word": "vaccine",
      "ipa": "/ˈvæksiːn/",
      "pos": "n.",
      "meaning": "vắc-xin phòng bệnh",
      "example": "Getting annual flu vaccines protects vulnerable community members from sickness."
    },
    {
      "word": "unless",
      "ipa": "/ənˈles/",
      "pos": "conj.",
      "meaning": "trừ khi, nếu không (if ... not)",
      "example": "Children should not swim in the deep pool unless supervised by responsible adults."
    },
    {
      "word": "heal",
      "ipa": "/hiːl/",
      "pos": "v.",
      "meaning": "lành lặn, làm lành (vết thương)",
      "example": "Following the physician's instructions carefully will help surgical wounds heal faster."
    },
    {
      "word": "scar",
      "ipa": "/skɑː(r)/",
      "pos": "n.",
      "meaning": "vết sẹo",
      "example": "Applying vitamin E cream can minimize the appearance of a healing scar."
    },
    {
      "word": "injure",
      "ipa": "/ˈɪndʒə(r)/",
      "pos": "v.",
      "meaning": "làm bị thương, gây tổn thương",
      "example": "Athletes who skip proper warm-ups may easily injure their knees or ankles."
    },
    {
      "word": "ankle",
      "ipa": "/ˈæŋkl/",
      "pos": "n.",
      "meaning": "mắt cá chân",
      "example": "He twisted his left ankle while playing basketball on the slippery court."
    },
    {
      "word": "die",
      "ipa": "/daɪ/",
      "pos": "v.",
      "meaning": "chết, qua đời",
      "example": "Biological studies indicate that the human body cannot survive and will die without water for three days."
    },
    {
      "word": "external use",
      "ipa": "/ɪkˈstɜːnl juːs/",
      "pos": "n. phr.",
      "meaning": "dùng ngoài da (không được uống)",
      "example": "This antiseptic ointment is manufactured strictly for external use on surface skin only."
    },
    {
      "word": "come down with",
      "ipa": "/kʌm daʊn wɪð/",
      "pos": "phrasal v.",
      "meaning": "bị nhiễm, phát bệnh (cúm, ốm)",
      "example": "I think I might be coming down with the flu because my throat feels very sore."
    },
    {
      "word": "flu",
      "ipa": "/fluː/",
      "pos": "n.",
      "meaning": "bệnh cảm cúm",
      "example": "Drink plenty of warm liquids and get bed rest when you contract seasonal flu."
    },
    {
      "word": "doctor's appointment",
      "ipa": "/ˈdɒktəz əˌpɔɪntmənt/",
      "pos": "n. phr.",
      "meaning": "lịch hẹn khám bệnh",
      "example": "Please notify the clinic receptionist if you need to reschedule your doctor's appointment."
    },
    {
      "word": "laughter yoga",
      "ipa": "/ˈlɑːftə ˈjəʊɡə/",
      "pos": "n. phr.",
      "meaning": "bộ môn yoga cười",
      "example": "Practicing laughter yoga in an enthusiastic group relieves mental stress and lifts mood."
    },
    {
      "word": "breathing",
      "ipa": "/ˈbriːðɪŋ/",
      "pos": "n.",
      "meaning": "hơi thở, sự hô hấp",
      "example": "Deep yogic breathing exercises increase vital oxygen levels throughout your bloodstream."
    },
    {
      "word": "ambulance",
      "ipa": "/ˈæmbjələns/",
      "pos": "n.",
      "meaning": "xe cứu thương, xe cấp cứu",
      "example": "The hotel manager immediately dialed the emergency hotline to call an ambulance."
    },
    {
      "word": "bruised",
      "ipa": "/bruːzd/",
      "pos": "adj.",
      "meaning": "bị bầm tím",
      "example": "Fortunately his leg was only heavily bruised and no bones were fractured."
    },
    {
      "word": "wrist",
      "ipa": "/rɪst/",
      "pos": "n.",
      "meaning": "cổ tay",
      "example": "He accidentally fell off his bed and fractured his right wrist."
    },
    {
      "word": "temperature",
      "ipa": "/ˈtemprətʃə(r)/",
      "pos": "n.",
      "meaning": "nhiệt độ cơ thể, cơn sốt",
      "example": "A child with a high temperature should be kept hydrated with cool water."
    },
    {
      "word": "stomachache",
      "ipa": "/ˈstʌməkeɪk/",
      "pos": "n.",
      "meaning": "chứng đau dạ dày / đau bụng",
      "example": "Eating spoiled seafood can cause an acute stomachache and food poisoning."
    },
    {
      "word": "healthy diet",
      "ipa": "/ˈhelθi ˈdaɪət/",
      "pos": "n. phr.",
      "meaning": "chế độ ăn uống lành mạnh",
      "example": "Maintaining a healthy diet rich in leafy vegetables shields you against chronic ailments."
    },
    {
      "word": "balanced",
      "ipa": "/ˈbælənst/",
      "pos": "adj.",
      "meaning": "cân bằng, điều độ",
      "example": "A well-balanced meal provides the ideal proportion of proteins, vitamins, and minerals."
    }
  ],
  "vocabularyQuestions": [
    {
      "id": "t10_v1",
      "number": 1,
      "section": "vocab",
      "question": "If you have a ______, it is best to seek immediate advice from a dentist before the problem worsens.",
      "vietnameseTranslation": "Nếu bạn bị đau răng, tốt nhất là hãy tìm lời khuyên ngay lập tức từ nha sĩ trước khi tình trạng trở nên tồi tệ hơn.",
      "options": [
        {
          "key": "A",
          "text": "cold",
          "vietnameseSub": "cảm lạnh"
        },
        {
          "key": "B",
          "text": "headache",
          "vietnameseSub": "đau đầu"
        },
        {
          "key": "C",
          "text": "toothache",
          "vietnameseSub": "đau răng (đúng)"
        },
        {
          "key": "D",
          "text": "stomach ache",
          "vietnameseSub": "đau bụng, đau dạ dày"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. toothache. \"dentist\" là nha sĩ chuyên chữa các bệnh lý về răng hàm mặt, vì vậy khi bị đau răng (toothache) thì người bệnh đến gặp nha sĩ."
    },
    {
      "id": "t10_v2",
      "number": 2,
      "section": "vocab",
      "question": "It is important to keep your ______ in a high, dry place out of the reach of children.",
      "vietnameseTranslation": "Điều quan trọng là phải cất giữ thuốc của bạn ở nơi cao ráo, khô thoáng và xa tầm với của trẻ nhỏ.",
      "options": [
        {
          "key": "A",
          "text": "medicines",
          "vietnameseSub": "thuốc, dược phẩm (đúng)"
        },
        {
          "key": "B",
          "text": "operation",
          "vietnameseSub": "ca phẫu thuật"
        },
        {
          "key": "C",
          "text": "injection",
          "vietnameseSub": "mũi tiêm"
        },
        {
          "key": "D",
          "text": "prescription",
          "vietnameseSub": "đơn thuốc"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. medicines. Cụm chỉ dẫn y tế an toàn: \"keep medicines out of the reach of children\" (để thuốc xa tầm tay trẻ em để tránh ngộ độc thuốc)."
    },
    {
      "id": "t10_v3",
      "number": 3,
      "section": "vocab",
      "question": "A lot of people would be out of work if the car factory ______.",
      "vietnameseTranslation": "Rất nhiều người sẽ bị mất việc nếu nhà máy sản xuất ô tô đóng cửa.",
      "options": [
        {
          "key": "A",
          "text": "close down",
          "vietnameseSub": "hiện tại đơn nguyên mẫu"
        },
        {
          "key": "B",
          "text": "closing down",
          "vietnameseSub": "dạng danh động từ V-ing"
        },
        {
          "key": "C",
          "text": "closes down",
          "vietnameseSub": "hiện tại đơn ngôi thứ ba"
        },
        {
          "key": "D",
          "text": "closed down",
          "vietnameseSub": "thì quá khứ đơn (điều kiện loại 2 - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. closed down. Mệnh đề chính dùng \"would be\" (would + V-inf), giả định tình huống không có thật ở hiện tại (câu điều kiện loại 2) -> Mệnh đề If chia ở thì quá khứ đơn (closed down)."
    },
    {
      "id": "t10_v4",
      "number": 4,
      "section": "vocab",
      "question": "If drivers don't stop when the traffic lights turn red, the traffic policeman ______ them a fine.",
      "vietnameseTranslation": "Nếu các tài xế không dừng lại khi đèn giao thông chuyển sang màu đỏ, cảnh sát giao thông sẽ phạt tiền họ.",
      "options": [
        {
          "key": "A",
          "text": "give",
          "vietnameseSub": "động từ nguyên mẫu"
        },
        {
          "key": "B",
          "text": "should give",
          "vietnameseSub": "nên phạt"
        },
        {
          "key": "C",
          "text": "will give",
          "vietnameseSub": "sẽ phạt tiền (điều kiện loại 1 - đúng)"
        },
        {
          "key": "D",
          "text": "would give",
          "vietnameseSub": "điều kiện loại 2"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. will give. Mệnh đề If chia ở thì hiện tại đơn \"don't stop\" diễn tả một khả năng hoàn toàn có thể xảy ra trong thực tế (câu điều kiện loại 1) -> Mệnh đề chính dùng \"will + V-inf\" (will give)."
    },
    {
      "id": "t10_v5",
      "number": 5,
      "section": "vocab",
      "question": "Anyone who has a severe ______ to any vaccine component should not get a dose.",
      "vietnameseTranslation": "Bất kỳ ai bị dị ứng nghiêm trọng với bất kỳ thành phần nào của vắc-xin thì không nên tiêm liều thuốc đó.",
      "options": [
        {
          "key": "A",
          "text": "stroke",
          "vietnameseSub": "cơn đột quỵ"
        },
        {
          "key": "B",
          "text": "heart attack",
          "vietnameseSub": "cơn nhồi máu cơ tim"
        },
        {
          "key": "C",
          "text": "allergy",
          "vietnameseSub": "chứng dị ứng (allergy to - đúng)"
        },
        {
          "key": "D",
          "text": "lung cancer",
          "vietnameseSub": "bệnh ung thư phổi"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. allergy. Giới từ \"to\" đi kèm danh từ y khoa: \"have an allergy to something\" nghĩa là bị phản ứng dị ứng với chất gì đó."
    },
    {
      "id": "t10_v6",
      "number": 6,
      "section": "vocab",
      "question": "Children are not allowed to use the swimming pool ______ they are with adults.",
      "vietnameseTranslation": "Trẻ em không được phép sử dụng hồ bơi trừ phi các em đi cùng với người lớn.",
      "options": [
        {
          "key": "A",
          "text": "when",
          "vietnameseSub": "khi"
        },
        {
          "key": "B",
          "text": "provided",
          "vietnameseSub": "với điều kiện là"
        },
        {
          "key": "C",
          "text": "if",
          "vietnameseSub": "nếu"
        },
        {
          "key": "D",
          "text": "unless",
          "vietnameseSub": "trừ khi (unless = if not - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. unless. \"unless they are with adults\" tương đương với \"if they are not with adults\" (trừ phi có người lớn đi kèm bảo hộ)."
    },
    {
      "id": "t10_v7",
      "number": 7,
      "section": "vocab",
      "question": "If you don't follow the doctor's advice, the wound will take longer to ______ and the scar it leaves may be worse.",
      "vietnameseTranslation": "Nếu bạn không tuân theo lời dặn của bác sĩ, vết thương sẽ lâu lành hơn và vết sẹo để lại có thể sẽ tệ hơn.",
      "options": [
        {
          "key": "A",
          "text": "heal",
          "vietnameseSub": "lành lặn, hồi phục (vết thương - đúng)"
        },
        {
          "key": "B",
          "text": "inject",
          "vietnameseSub": "tiêm thuốc"
        },
        {
          "key": "C",
          "text": "examine",
          "vietnameseSub": "khám bệnh"
        },
        {
          "key": "D",
          "text": "operate",
          "vietnameseSub": "làm phẫu thuật"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. heal. Động từ \"heal\" chỉ quá trình vết thương (wound) tự lành hoặc được điều trị bình phục."
    },
    {
      "id": "t10_v8",
      "number": 8,
      "section": "vocab",
      "question": "People whose favourite sport is running or jumping may ______ their ankles or knees.",
      "vietnameseTranslation": "Những người có môn thể thao yêu thích là chạy hoặc nhảy có thể làm chấn thương mắt cá chân hoặc đầu gối của họ.",
      "options": [
        {
          "key": "A",
          "text": "sneeze",
          "vietnameseSub": "hắt hơi"
        },
        {
          "key": "B",
          "text": "recover",
          "vietnameseSub": "bình phục, hồi phục"
        },
        {
          "key": "C",
          "text": "injure",
          "vietnameseSub": "làm bị thương, gây chấn thương (đúng)"
        },
        {
          "key": "D",
          "text": "burn",
          "vietnameseSub": "làm bỏng"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. injure. Cụm từ \"injure one's ankles / knees\" nghĩa là gây chấn thương các khớp mắt cá chân hoặc đầu gối do vận động mạnh."
    },
    {
      "id": "t10_v9",
      "number": 9,
      "section": "vocab",
      "question": "Do you think there would be less conflict in the world if all people ______ the same language?",
      "vietnameseTranslation": "Bạn có nghĩ rằng sẽ có ít xung đột hơn trên thế giới nếu tất cả mọi người cùng nói chung một ngôn ngữ không?",
      "options": [
        {
          "key": "A",
          "text": "speak",
          "vietnameseSub": "thì hiện tại đơn"
        },
        {
          "key": "B",
          "text": "are speaking",
          "vietnameseSub": "thì hiện tại tiếp diễn"
        },
        {
          "key": "C",
          "text": "were spoken",
          "vietnameseSub": "thể bị động quá khứ"
        },
        {
          "key": "D",
          "text": "spoke",
          "vietnameseSub": "thì quá khứ đơn (điều kiện loại 2 - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. spoke. Mệnh đề chính có dạng nghi vấn của câu điều kiện loại 2: \"would there be\", giả định điều trái với thực tế hiện tại -> Mệnh đề If dùng thì quá khứ đơn (spoke)."
    },
    {
      "id": "t10_v10",
      "number": 10,
      "section": "vocab",
      "question": "According to some studies, if you don't drink water in three days, you ______.",
      "vietnameseTranslation": "Theo một số nghiên cứu khoa học, nếu bạn không uống nước trong ba ngày, bạn sẽ chết.",
      "options": [
        {
          "key": "A",
          "text": "are dying",
          "vietnameseSub": "đang chết dần"
        },
        {
          "key": "B",
          "text": "die",
          "vietnameseSub": "chết (sự thật hiển nhiên, điều kiện loại 0 - đúng)"
        },
        {
          "key": "C",
          "text": "died",
          "vietnameseSub": "quá khứ đơn"
        },
        {
          "key": "D",
          "text": "would die",
          "vietnameseSub": "điều kiện loại 2"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. die. Đây là một chân lý sinh học tự nhiên mang tính quy luật hiển nhiên (Zero Conditional): If + Present Simple, Present Simple."
    }
  ],
  "readingSignQuestions": [
    {
      "id": "t10_s1",
      "number": 11,
      "section": "signs",
      "signText": "FOR EXTERNAL USE ONLY",
      "vietnameseSignTranslation": "CHỈ ĐƯỢC DÙNG NGOÀI DA (KHÔNG ĐƯỢC UỐNG)",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "It can be swallowed, eaten or drunk.",
          "vietnameseSub": "Nó có thể nuốt, ăn hoặc uống vào bụng."
        },
        {
          "key": "B",
          "text": "It needs to be on the outer skin.",
          "vietnameseSub": "Nó cần được bôi/sử dụng ở bề mặt ngoài da (đúng)."
        },
        {
          "key": "C",
          "text": "It can only be used for special people.",
          "vietnameseSub": "Nó chỉ dùng riêng cho nhóm người đặc biệt."
        },
        {
          "key": "D",
          "text": "It can only be used when we have doctor's prescription.",
          "vietnameseSub": "Chỉ được dùng khi có đơn thuốc của bác sĩ."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. It needs to be on the outer skin. Nhãn cảnh báo \"FOR EXTERNAL USE ONLY\" trên các lọ thuốc bôi/sát trùng nghĩa là chỉ thoa ngoài da, tuyệt đối không được uống hay nuốt."
    },
    {
      "id": "t10_s2",
      "number": 12,
      "section": "signs",
      "signText": "From: Sam\nTo: Kim\nWe all missed you at school today. Are you feeling any better now?\nDo you think you will join my birthday party on Sunday?\nGet better soon.\nSam",
      "vietnameseSignTranslation": "Người gửi: Sam\nNgười nhận: Kim\nHôm nay ở trường mọi người đều rất nhớ bạn. Bây giờ bạn đã thấy đỡ hơn chút nào chưa?\nBạn có nghĩ là bạn sẽ tham dự bữa tiệc sinh nhật của mình vào Chủ nhật không?\nMong bạn mau chóng bình phục nhé.\nSam",
      "question": "Look at the text in the question. What does Sam mainly want to know?",
      "options": [
        {
          "key": "A",
          "text": "Whether Kim will be coming to her party on Sunday.",
          "vietnameseSub": "Liệu Kim có đến tham dự bữa tiệc sinh nhật của cô ấy vào Chủ nhật hay không (đúng)."
        },
        {
          "key": "B",
          "text": "Whether Kim will be at school tomorrow.",
          "vietnameseSub": "Liệu ngày mai Kim có đi học trở lại hay không."
        },
        {
          "key": "C",
          "text": "Why Kim wasn't at school today.",
          "vietnameseSub": "Tại sao hôm nay Kim lại vắng mặt ở lớp."
        },
        {
          "key": "D",
          "text": "How Kim feels now.",
          "vietnameseSub": "Cảm giác sức khỏe hiện tại của Kim thế nào."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. Whether Kim will be coming to her party on Sunday. Lời thăm hỏi sức khỏe là mở đầu, mục đích chính của lá thư là hỏi xem Kim có thể đến dự sinh nhật vào Chủ nhật hay không: \"Do you think you will join my birthday party on Sunday?\"."
    },
    {
      "id": "t10_s3",
      "number": 13,
      "section": "signs",
      "signText": "Workers must wash hands before returning to work.",
      "vietnameseSignTranslation": "Công nhân viên bắt buộc phải rửa tay sạch sẽ trước khi quay trở lại vị trí làm việc.",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "Workers don't have to wash hands but it is safe to do so.",
          "vietnameseSub": "Công nhân không bắt buộc phải rửa tay."
        },
        {
          "key": "B",
          "text": "Workers are allowed to work if their hands are dirty.",
          "vietnameseSub": "Công nhân được phép làm việc dù tay bị bẩn."
        },
        {
          "key": "C",
          "text": "Workers only wash hands after they work.",
          "vietnameseSub": "Công nhân chỉ rửa tay sau khi ca làm kết thúc."
        },
        {
          "key": "D",
          "text": "Workers are not allowed to work without washing hands.",
          "vietnameseSub": "Công nhân viên không được phép làm việc nếu chưa rửa tay sạch sẽ (đúng)."
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. Workers are not allowed to work without washing hands. Động từ khiếm khuyết mang tính bắt buộc \"must wash hands\" đồng nghĩa với việc không được phép làm việc nếu chưa rửa tay."
    },
    {
      "id": "t10_s4",
      "number": 14,
      "section": "signs",
      "signText": "This medication should be taken with plenty of water.",
      "vietnameseSignTranslation": "Loại thuốc này nên được uống cùng với thật nhiều nước.",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "Put this medication into plenty of water and then drink.",
          "vietnameseSub": "Bỏ thuốc này vào chậu nước rồi uống."
        },
        {
          "key": "B",
          "text": "Mix this meditation with plenty of water before using.",
          "vietnameseSub": "Khuấy thuốc này với nhiều nước trước khi dùng."
        },
        {
          "key": "C",
          "text": "It's important to take this medicine with plenty of water.",
          "vietnameseSub": "Điều quan trọng là phải uống loại thuốc này cùng với nhiều nước (đúng)."
        },
        {
          "key": "D",
          "text": "It is impossible to take this medication with water.",
          "vietnameseSub": "Không thể uống thuốc này chung với nước."
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. It's important to take this medicine with plenty of water. \"should be taken with plenty of water\" nhấn mạnh việc uống nhiều nước khi dùng thuốc là điều rất quan trọng."
    },
    {
      "id": "t10_s5",
      "number": 15,
      "section": "signs",
      "signText": "From: Mark\nTo: Bella\nBella, I think that I might come down with the flu. Can you tell teacher I can't go to the dancing class on this Sunday morning? I have a doctor's appointment at that time.\nSee you next week.",
      "vietnameseSignTranslation": "Người gửi: Mark\nNgười nhận: Bella\nBella ơi, mình nghĩ là mình sắp bị ốm cúm rồi. Bạn có thể nhắn với cô giáo là mình không thể đến lớp học nhảy vào sáng Chủ nhật này được không? Mình có lịch hẹn khám bác sĩ vào lúc đó rồi.\nHẹn gặp bạn vào tuần sau nhé.",
      "question": "Look at the text in the question. Mark wants Bella to:",
      "options": [
        {
          "key": "A",
          "text": "Visit him at home",
          "vietnameseSub": "Đến thăm cậu ấy tại nhà riêng"
        },
        {
          "key": "B",
          "text": "Give somebody a message",
          "vietnameseSub": "Chuyển lời/nhắn tin nhắn cho ai đó (cho cô giáo - đúng)"
        },
        {
          "key": "C",
          "text": "Inform his doctor's appointment",
          "vietnameseSub": "Báo cáo lịch hẹn khám bác sĩ"
        },
        {
          "key": "D",
          "text": "Give him some medicine for the flu",
          "vietnameseSub": "Đưa cho cậu ấy ít thuốc trị cúm"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. Give somebody a message. Mark nhờ Bella: \"Can you tell teacher I can't go to the dancing class...\", tức là nhờ cô ấy nhắn lại một lời nhắn xin phép nghỉ học cho giáo viên."
    }
  ],
  "readingPassageBTitle": "LAUGHTER YOGA AND ITS REMARKABLE BENEFITS",
  "readingPassageBTag": "Passage B: Reading Comprehension",
  "readingTonyPassage": "You've probably heard the expression 'Laughter is the best medicine'. Well, scientists and medical doctors now agree that laughter can help people deal with stress and anger. Research has also shown that people who feel happy and relaxed are healthier and have better relationships. Laughter yoga is a series of exercises which teaches you to laugh for no reason. You don't need to have a sense of humour, or understand funny jokes. You just have to laugh. When you do laughter yoga in a group, you laugh and do yoga breathing, so that you increase the amount of oxygen in your body. Soon the laughter exercises turn into real laughter. After a laughter yoga class, you feel calm and relaxed, but also happy and full of energy. Laughter yoga was developed by a medical doctor from India, Dr Madan Kataria. He started the first laughter yoga classes in a park in Mumbai in 1995 with just five people, and now there are over six thousand laughter clubs in sixty different countries.\n\nCompanies who have run laughter yoga workshops find that they have advantages for both employers and employees. People who are happy at work are more hard working and make more money for the company. Also, people who can laugh together, communicate more successfully. In general, people do better at work when they feel happy and relaxed.",
  "readingTonyTranslation": "Có lẽ bạn đã từng nghe câu nói nổi tiếng \"Một nụ cười bằng mười thang thuốc bổ\". Giờ đây, cả các nhà khoa học lẫn các bác sĩ y khoa đều đồng thuận rằng tiếng cười có thể giúp con người giải tỏa căng thẳng và chế ngự cơn giận dữ. Các công trình nghiên cứu cũng chứng minh rằng những ai cảm thấy vui tươi và thư thái sẽ có sức khỏe dẻo dai hơn và thiết lập được các mối quan hệ xã hội tốt đẹp hơn. Yoga cười là một chuỗi các bài tập hướng dẫn bạn cách cất tiếng cười mà không cần bất kỳ lý do gì. Bạn chẳng cần phải có khiếu hài hước, cũng không cần phải hiểu những mẩu chuyện cười dí dỏm. Bạn chỉ đơn giản là cất tiếng cười. Khi bạn luyện tập yoga cười trong một tập thể, bạn vừa cười vừa kết hợp hít thở sâu theo phương pháp yoga, nhờ đó làm tăng đáng kể lượng oxy đi vào cơ thể. Chẳng mấy chốc, các bài tập gượng cười ban đầu sẽ chuyển hóa thành những tràng cười sảng khoái thực sự. Sau mỗi buổi tập yoga cười, bạn sẽ thấy tâm hồn bình yên và tĩnh tại, nhưng đồng thời cũng ngập tràn niềm vui sướng và dồi dào năng lượng. Bộ môn yoga cười được sáng lập bởi một bác sĩ y khoa người Ấn Độ, tiến sĩ Madan Kataria. Ông bắt đầu những lớp học yoga cười đầu tiên tại một công viên ở Mumbai vào năm 1995 chỉ với 5 học viên, và cho đến nay đã phát triển thành hơn 6.000 câu lạc bộ yoga cười tại 60 quốc gia khác nhau trên khắp thế giới.\n\nNhững công ty từng tổ chức các buổi hội thảo yoga cười nhận thấy rằng hoạt động này đem lại lợi ích to lớn cho cả ban lãnh đạo lẫn nhân viên. Những người làm việc trong tâm trạng hạnh phúc sẽ chăm chỉ hơn và tạo ra nhiều lợi nhuận hơn cho doanh nghiệp. Hơn nữa, những người có thể cùng cười đùa với nhau sẽ giao tiếp cởi mở và hiệu quả hơn. Nhìn chung, mọi người đều hoàn thành công việc xuất sắc hơn khi họ cảm thấy vui vẻ và thư thái.",
  "readingTonyQuestions": [
    {
      "id": "t10_r1",
      "number": 16,
      "section": "passageB",
      "question": "What is the writer's main aim in writing the text?",
      "options": [
        {
          "key": "A",
          "text": "To confirm that laughter is the best medicine",
          "vietnameseSub": "Để khẳng định lại câu tục ngữ tiếng cười là liều thuốc tốt nhất"
        },
        {
          "key": "B",
          "text": "To introduce laughter yoga",
          "vietnameseSub": "Để giới thiệu về bộ môn yoga cười và lợi ích của nó (đúng)"
        },
        {
          "key": "C",
          "text": "To investigate the feeling of people",
          "vietnameseSub": "Để điều tra cảm xúc của con người"
        },
        {
          "key": "D",
          "text": "To advise people not to laugh too much",
          "vietnameseSub": "Để khuyên mọi người không nên cười quá nhiều"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. To introduce laughter yoga. Toàn bộ đoạn văn từ nguồn gốc, người sáng lập, phương pháp tập luyện đến lợi ích đều nhằm mục đích giới thiệu bộ môn yoga cười."
    },
    {
      "id": "t10_r2",
      "number": 17,
      "section": "passageB",
      "question": "According to research, which statement below is right?",
      "options": [
        {
          "key": "A",
          "text": "Laughter makes people look younger.",
          "vietnameseSub": "Tiếng cười giúp con người trông trẻ hơn."
        },
        {
          "key": "B",
          "text": "Laughter can improve people's health.",
          "vietnameseSub": "Tiếng cười có thể nâng cao và cải thiện sức khỏe con người (đúng)."
        },
        {
          "key": "C",
          "text": "People will feel angry without laughter yoga.",
          "vietnameseSub": "Người ta sẽ tức giận nếu không tập yoga cười."
        },
        {
          "key": "D",
          "text": "People who don't laugh cannot build relationships.",
          "vietnameseSub": "Người không cười thì không thể xây dựng quan hệ."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. Laughter can improve people's health. Đoạn đầu nêu rõ: \"Research has also shown that people who feel happy and relaxed are healthier...\""
    },
    {
      "id": "t10_r3",
      "number": 18,
      "section": "passageB",
      "question": "What do people do in the laughter yoga class?",
      "options": [
        {
          "key": "A",
          "text": "Laugh and do yoga breathing",
          "vietnameseSub": "Cười và thực hành các bài tập thở yoga (đúng)"
        },
        {
          "key": "B",
          "text": "Tell funny jokes and laugh",
          "vietnameseSub": "Kể chuyện cười rồi cười cùng nhau"
        },
        {
          "key": "C",
          "text": "Do exercise for strictly medical purpose",
          "vietnameseSub": "Tập thể dục chỉ thuần túy vì mục đích y tế"
        },
        {
          "key": "D",
          "text": "Join outdoor activities for charity",
          "vietnameseSub": "Tham gia các hoạt động từ thiện ngoài trời"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. Laugh and do yoga breathing. Đoạn văn khẳng định: \"When you do laughter yoga in a group, you laugh and do yoga breathing, so that you increase the amount of oxygen in your body.\""
    },
    {
      "id": "t10_r4",
      "number": 19,
      "section": "passageB",
      "question": "According to the text, what are benefits of laughter yoga?",
      "options": [
        {
          "key": "A",
          "text": "Feel calm and relaxed",
          "vietnameseSub": "Cảm thấy bình tâm và thư thái"
        },
        {
          "key": "B",
          "text": "Feel happy and full of energy",
          "vietnameseSub": "Cảm thấy vui sướng và ngập tràn năng lượng"
        },
        {
          "key": "C",
          "text": "Work and communicate more successfully",
          "vietnameseSub": "Làm việc và giao tiếp thành công hơn"
        },
        {
          "key": "D",
          "text": "All are correct",
          "vietnameseSub": "Tất cả các đáp án trên đều đúng (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. All are correct. Cả ba lợi ích A, B, C đều được nêu cụ thể trong bài: vừa giúp cá nhân bình tĩnh, vui vẻ, tràn đầy năng lượng, vừa giúp giao tiếp và làm việc hiệu quả hơn."
    },
    {
      "id": "t10_r5",
      "number": 20,
      "section": "passageB",
      "question": "Today, laughter yoga ______.",
      "options": [
        {
          "key": "A",
          "text": "is still popular only in India.",
          "vietnameseSub": "vẫn chỉ phổ biến duy nhất tại Ấn Độ."
        },
        {
          "key": "B",
          "text": "has spread to different countries all over the world.",
          "vietnameseSub": "đã lan rộng ra nhiều quốc gia trên khắp thế giới (đúng)."
        },
        {
          "key": "C",
          "text": "is popular only among young people.",
          "vietnameseSub": "chỉ phổ biến trong giới trẻ."
        },
        {
          "key": "D",
          "text": "has become a favourite pastime of many company directors.",
          "vietnameseSub": "đã trở thành trò tiêu khiển yêu thích của nhiều giám đốc."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. has spread to different countries all over the world. Bài viết nêu dẫn chứng: \"...now there are over six thousand laughter clubs in sixty different countries.\""
    }
  ],
  "readingPassageCTitle": "A DISASTROUS HOLIDAY AT THE ALMARA BEACH HOTEL",
  "readingPassageCTag": "Passage C: Cloze Test",
  "readingAnnaPassage": "A disastrous holiday\nThe day Gerald arrived at the Almara Beach Hotel, he fell (1)........ the stairs. The manager called a/an (2)........, but fortunately Gerald's leg was only badly (3)........, and not broken. The doctor (4)........ swimming as further (5)........ but gave Gerald a prescription for some tablets in case his leg became (6)........ . The next day Gerald sunbathed by the pool, and then took a deep (7)........ and dived into the water. There was not very much water in the pool, and he (8)........ one of his arms when he hit the bottom. This time he complained to the hotel manager, who sent a special meal to Gerald's room. Later that night, Gerald was (9)........ from a sunburnt back, the injuries to his arm and leg, and also had a terrible stomachache. He had a high (10)........ and felt terrible. Luckily he had the tablets the doctor had given him to reduce the pain. As he reached for them, he fell out of bed and broke his wrist. He spent the rest of his holiday in bed.",
  "readingAnnaTranslation": "Một kỳ nghỉ thảm họa\nVào ngày Gerald đặt chân tới Khách sạn Almara Beach, anh đã bị ngã trượt chân xuống cầu thang. Người quản lý khách sạn lập tức gọi xe cấp cứu, nhưng may mắn thay chân của Gerald chỉ bị bầm dập tím tái nặng chứ không hề bị gãy xương. Bác sĩ khuyên anh nên đi bơi như một liệu pháp điều trị bổ sung, nhưng vẫn kê đơn một vài viên thuốc giảm đau phòng trường hợp chân anh bị đau nhức. Ngày hôm sau Gerald nằm tắm nắng cạnh hồ bơi, sau đó anh hít một hơi thật sâu rồi nhảy cắm đầu xuống nước. Không may là hồ bơi lại không có nhiều nước, và anh đã bị thương một cánh tay khi đập mạnh vào đáy hồ. Lần này anh gay gắt phàn nàn với người quản lý khách sạn, và người này đã gửi một bữa ăn thịnh soạn đến tận phòng riêng của Gerald để tạ lỗi. Tối muộn hôm đó, Gerald vừa phải chịu đựng cơn bỏng rát do cháy nắng ở lưng, các vết thương ở tay và chân, lại vừa lên cơn đau dạ dày dữ dội. Anh lên cơn sốt cao và cảm thấy vô cùng tồi tệ. May mắn là anh vẫn còn những viên thuốc mà bác sĩ đã kê đơn để giảm bớt cơn đau. Nhưng khi anh vừa rướn người với tay lấy vỉ thuốc, anh lại ngã lăn khỏi giường và bị gãy cổ tay. Rốt cuộc, anh phải nằm liệt giường suốt cả kỳ nghỉ còn lại.",
  "readingAnnaQuestions": [
    {
      "id": "t10_c1",
      "number": 21,
      "section": "cloze",
      "question": "Choose the best word for blank (1):",
      "options": [
        {
          "key": "A",
          "text": "down",
          "vietnameseSub": "xuống (fell down the stairs - đúng)"
        },
        {
          "key": "B",
          "text": "to",
          "vietnameseSub": "đến"
        },
        {
          "key": "C",
          "text": "with",
          "vietnameseSub": "với"
        },
        {
          "key": "D",
          "text": "for",
          "vietnameseSub": "cho"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. down. Cụm từ miêu tả tai nạn ngã cầu thang: \"fall down the stairs\" (quá khứ là \"fell down the stairs\")."
    },
    {
      "id": "t10_c2",
      "number": 22,
      "section": "cloze",
      "question": "Choose the best word for blank (2):",
      "options": [
        {
          "key": "A",
          "text": "stretcher",
          "vietnameseSub": "chiếc cáng cứu thương"
        },
        {
          "key": "B",
          "text": "prescription",
          "vietnameseSub": "đơn thuốc"
        },
        {
          "key": "C",
          "text": "ambulance",
          "vietnameseSub": "xe cứu thương (called an ambulance - đúng)"
        },
        {
          "key": "D",
          "text": "emergency",
          "vietnameseSub": "tình trạng khẩn cấp"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. ambulance. Khi xảy ra tai nạn chấn thương nghiêm trọng, gọi xe cấp cứu dùng cụm: \"call an ambulance\"."
    },
    {
      "id": "t10_c3",
      "number": 23,
      "section": "cloze",
      "question": "Choose the best word for blank (3):",
      "options": [
        {
          "key": "A",
          "text": "sick",
          "vietnameseSub": "bị ốm"
        },
        {
          "key": "B",
          "text": "bruised",
          "vietnameseSub": "bị bầm tím (badly bruised and not broken - đúng)"
        },
        {
          "key": "C",
          "text": "hurt",
          "vietnameseSub": "bị đau"
        },
        {
          "key": "D",
          "text": "infected",
          "vietnameseSub": "bị nhiễm trùng"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. bruised. Cụm đối lập giữa vết thương phần mềm và xương: \"badly bruised, and not broken\" (chỉ bị bầm giập tím tái chứ không gãy xương)."
    },
    {
      "id": "t10_c4",
      "number": 24,
      "section": "cloze",
      "question": "Choose the best word for blank (4):",
      "options": [
        {
          "key": "A",
          "text": "went",
          "vietnameseSub": "đã đi"
        },
        {
          "key": "B",
          "text": "prevented",
          "vietnameseSub": "đã ngăn chặn"
        },
        {
          "key": "C",
          "text": "said",
          "vietnameseSub": "đã nói"
        },
        {
          "key": "D",
          "text": "recommended",
          "vietnameseSub": "đã khuyên, khuyến nghị (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. recommended. Bác sĩ đưa ra lời khuyên trị liệu: \"The doctor recommended swimming as further treatment\"."
    },
    {
      "id": "t10_c5",
      "number": 25,
      "section": "cloze",
      "question": "Choose the best word for blank (5):",
      "options": [
        {
          "key": "A",
          "text": "medicine",
          "vietnameseSub": "thuốc"
        },
        {
          "key": "B",
          "text": "cure",
          "vietnameseSub": "phương thuốc chữa khỏi"
        },
        {
          "key": "C",
          "text": "drugs",
          "vietnameseSub": "dược phẩm"
        },
        {
          "key": "D",
          "text": "treatment",
          "vietnameseSub": "phương pháp điều trị (further treatment - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. treatment. Cụm danh từ y khoa: \"as further treatment\" (như một phương pháp điều trị hồi phục chức năng tiếp theo)."
    },
    {
      "id": "t10_c6",
      "number": 26,
      "section": "cloze",
      "question": "Choose the best word for blank (6):",
      "options": [
        {
          "key": "A",
          "text": "painful",
          "vietnameseSub": "đau đớn, nhức nhối (tính từ sau became - đúng)"
        },
        {
          "key": "B",
          "text": "pained",
          "vietnameseSub": "thể hiện nỗi đau"
        },
        {
          "key": "C",
          "text": "painless",
          "vietnameseSub": "không đau đớn"
        },
        {
          "key": "D",
          "text": "pain",
          "vietnameseSub": "danh từ cơn đau"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. painful. Sau động từ nối \"became\" cần một tính từ miêu tả tình trạng: \"became painful\" (trở nên đau đớn)."
    },
    {
      "id": "t10_c7",
      "number": 27,
      "section": "cloze",
      "question": "Choose the best word for blank (7):",
      "options": [
        {
          "key": "A",
          "text": "end",
          "vietnameseSub": "kết thúc"
        },
        {
          "key": "B",
          "text": "breath",
          "vietnameseSub": "hơi thở (took a deep breath - đúng)"
        },
        {
          "key": "C",
          "text": "mouthful",
          "vietnameseSub": "một ngụm đầy miệng"
        },
        {
          "key": "D",
          "text": "water",
          "vietnameseSub": "nước"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. breath. Thành ngữ quen thuộc: \"take a deep breath\" (hít một hơi thật sâu trước khi lặn xuống nước)."
    },
    {
      "id": "t10_c8",
      "number": 28,
      "section": "cloze",
      "question": "Choose the best word for blank (8):",
      "options": [
        {
          "key": "A",
          "text": "hurt",
          "vietnameseSub": "làm bị thương (quá khứ đơn của hurt - đúng)"
        },
        {
          "key": "B",
          "text": "injury",
          "vietnameseSub": "danh từ vết thương"
        },
        {
          "key": "C",
          "text": "ached",
          "vietnameseSub": "nhức nhối (nội động từ, không có tân ngữ)"
        },
        {
          "key": "D",
          "text": "sore",
          "vietnameseSub": "tính từ đau rát"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. hurt. Ngoại động từ cần chia thì quá khứ đơn đi kèm tân ngữ: \"he hurt one of his arms\" (anh ấy làm bị thương một cánh tay)."
    },
    {
      "id": "t10_c9",
      "number": 29,
      "section": "cloze",
      "question": "Choose the best word for blank (9):",
      "options": [
        {
          "key": "A",
          "text": "ill",
          "vietnameseSub": "bị ốm"
        },
        {
          "key": "B",
          "text": "injuried",
          "vietnameseSub": "từ sai chính tả"
        },
        {
          "key": "C",
          "text": "suffering",
          "vietnameseSub": "chịu đựng (was suffering from - đúng)"
        },
        {
          "key": "D",
          "text": "damaged",
          "vietnameseSub": "bị hư hỏng (dành cho đồ vật)"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. suffering. Cấu trúc thì Quá khứ tiếp diễn đi cùng giới từ \"from\": \"was suffering from a sunburnt back...\" (đang phải chịu đựng nỗi đau do vết cháy nắng)."
    },
    {
      "id": "t10_c10",
      "number": 30,
      "section": "cloze",
      "question": "Choose the best word for blank (10):",
      "options": [
        {
          "key": "A",
          "text": "pain",
          "vietnameseSub": "cơn đau"
        },
        {
          "key": "B",
          "text": "temperature",
          "vietnameseSub": "nhiệt độ cơ thể / cơn sốt (a high temperature - đúng)"
        },
        {
          "key": "C",
          "text": "ache",
          "vietnameseSub": "cơn nhức mỏi"
        },
        {
          "key": "D",
          "text": "degree",
          "vietnameseSub": "độ Celsius"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. temperature. Cụm từ chỉ triệu chứng bệnh sốt: \"have a high temperature\" (bị sốt cao)."
    }
  ],
  "sentenceTransformations": [
    {
      "id": "t10_w1",
      "number": 31,
      "originalSentence": "Sam will be very upset if I don't get back tomorrow.",
      "vietnameseTranslation": "Sam sẽ rất buồn nếu ngày mai tôi không quay lại.",
      "prefix": "Unless I get back tomorrow,",
      "modelAnswer": "Unless I get back tomorrow, Sam will be very upset.",
      "vietnameseModelTranslation": "Trừ khi ngày mai tôi quay lại, bằng không Sam sẽ rất buồn.",
      "acceptedAnswers": [
        "Sam will be very upset.",
        "Sam will be very upset",
        "Sam will get very upset.",
        "Sam will get very upset"
      ],
      "grammarPoint": "Chuyển đổi câu điều kiện If ... not sang Unless: Unless + khẳng định = If + phủ định."
    },
    {
      "id": "t10_w2",
      "number": 32,
      "originalSentence": "It is ages Alan visited his parents.",
      "vietnameseTranslation": "Đã lâu lắm rồi Alan chưa về thăm bố mẹ anh ấy.",
      "prefix": "Alan hasn't",
      "modelAnswer": "Alan hasn't visited his parents for ages.",
      "vietnameseModelTranslation": "Alan đã không về thăm bố mẹ trong một thời gian rất dài rồi.",
      "acceptedAnswers": [
        "visited his parents for ages.",
        "visited his parents for ages",
        "seen his parents for ages.",
        "seen his parents for ages"
      ],
      "grammarPoint": "Chuyển từ cấu trúc \"It is ages since...\" sang Hiện tại hoàn thành phủ định: S + have/has not + V3/ed + for ages."
    },
    {
      "id": "t10_w3",
      "number": 33,
      "originalSentence": "Mrs. Taylor does not like living in such a small house.",
      "vietnameseTranslation": "Bà Taylor không thích sống trong một ngôi nhà nhỏ như vậy.",
      "prefix": "Mrs. Taylor wishes",
      "modelAnswer": "Mrs. Taylor wishes she lived in a bigger house.",
      "vietnameseModelTranslation": "Bà Taylor ước gì bà sống trong một ngôi nhà rộng hơn.",
      "acceptedAnswers": [
        "she lived in a bigger house.",
        "she lived in a bigger house",
        "she didn't live in such a small house.",
        "she didn't live in such a small house"
      ],
      "grammarPoint": "Câu ước cho hiện tại (present wish): S + wish(es) + S + V2/ed (lùi một thì so với thực tế)."
    },
    {
      "id": "t10_w4",
      "number": 34,
      "originalSentence": "The keeper feed the lions at 3 p.m. every day.",
      "vietnameseTranslation": "Người trông coi cho những con sư tử ăn vào lúc 3 giờ chiều hằng ngày.",
      "prefix": "The lions are",
      "modelAnswer": "The lions are fed by the keeper at 3 p.m. every day.",
      "vietnameseModelTranslation": "Những con sư tử được người trông coi cho ăn vào lúc 3 giờ chiều hằng ngày.",
      "acceptedAnswers": [
        "fed by the keeper at 3 p.m. every day.",
        "fed by the keeper at 3 p.m. every day",
        "fed at 3 p.m. every day by the keeper.",
        "fed at 3 p.m. every day by the keeper"
      ],
      "grammarPoint": "Chuyển câu chủ động sang bị động thì Hiện tại đơn: S + am/is/are + V3/ed (feed -> fed)."
    },
    {
      "id": "t10_w5",
      "number": 35,
      "originalSentence": "“Where is the station car park?” Mrs. Smith asked.",
      "vietnameseTranslation": "“Bãi đỗ xe của nhà ga nằm ở đâu vậy?” bà Smith hỏi.",
      "prefix": "Mrs. Smith asked me",
      "modelAnswer": "Mrs. Smith asked me where the station car park was.",
      "vietnameseModelTranslation": "Bà Smith đã hỏi tôi bãi đỗ xe của nhà ga nằm ở đâu.",
      "acceptedAnswers": [
        "where the station car park was.",
        "where the station car park was",
        "where the station car park was located.",
        "where the station car park was located"
      ],
      "grammarPoint": "Chuyển câu hỏi Wh- trực tiếp sang gián tiếp: S + asked (me) + Wh-word + S + V (lùi thì, không đảo ngữ)."
    }
  ],
  "letterWriting": {
    "prompt": "Write a letter (about 120 words) to your friend/colleague/parents/relatives how to keep fit and healthy.\\n- Should he reduce the food each meal?\\n- What activities should he take?\\n- Does he need to change any habits?",
    "vietnamesePrompt": "Viết một lá thư (khoảng 120 từ) gửi cho bạn bè/đồng nghiệp/bố mẹ/người thân hướng dẫn cách giữ gìn vóc dáng và sức khỏe tốt.\\n- Cậu ấy có nên cắt giảm bớt lượng thức ăn ở mỗi bữa ăn không?\\n- Cậu ấy nên tham gia những hoạt động thể thao nào?\\n- Cậu ấy có cần thay đổi thói quen xấu nào trong sinh hoạt không?",
    "requiredWordCount": "100 - 140 words",
    "sample1": {
      "title": "Bài mẫu 1: Lời khuyên giữ gìn sức khỏe gửi bạn Tim (Tài liệu giáo trình)",
      "content": "Hello Tim,\n\nI'm glad you asked me how to keep fit and healthy. Here is my advice.\n\nFirst, you don't need to eat much less at each meal. Just change your menu. Eat more vegetables and fruit instead of fast food, and have meals on time.\n\nSecond, you should do exercise regularly. Swimming, cycling or jogging in the park for thirty minutes a day is a good choice.\n\nFinally, you should change some bad habits. Try not to stay up late, and avoid smoking and drinking too much soft drink. Sleeping eight hours a night will also help you a lot.\n\nI hope you will feel better soon. Write to me and tell me how it goes!\n\nBest wishes,\nLan"
    },
    "sample2": {
      "title": "Bài mẫu 2: Lời khuyên lối sống năng động và lành mạnh (Phan Tấn Kiệt)",
      "content": "Dear Alex,\n\nI was glad to receive your email asking for tips on how to stay healthy and fit. Here are a few practical recommendations from my personal routine.\n\nFirst, rather than skipping meals or starving yourself, you should balance your daily nutrition. Try eating more green vegetables, fresh fruit and lean fish while cutting back on oily fast food and sugary soft drinks.\n\nSecond, maintaining regular physical exercise is crucial. Jogging for thirty minutes each morning or cycling around the park will greatly boost your stamina and improve your cardiovascular health.\n\nLastly, you must adjust your daily routine. Make sure to get at least seven to eight hours of sound sleep every night and minimize late-night screen time on smartphones or computers.\n\nI hope these suggestions work well for you. Keep in touch!\n\nBest regards,\nPhan Tan Kiet"
    }
  },
  "speakingCard": {
    "cardTitle": "SPEAKING CARD – No.10: Talk about the benefits of a healthy diet",
    "cardSubtitle": "Nói về những lợi ích của một chế độ ăn uống lành mạnh và cân bằng",
    "questions": [
      {
        "q": "What is a healthy diet?",
        "vi": "Thế nào là một chế độ ăn uống lành mạnh?"
      },
      {
        "q": "What are the benefits of a healthy diet?",
        "vi": "Những lợi ích to lớn của một chế độ ăn uống lành mạnh là gì?"
      },
      {
        "q": "How could parents encourage their children to have a healthy diet?",
        "vi": "Cha mẹ có thể khuyến khích con cái duy trì thói quen ăn uống lành mạnh bằng cách nào?"
      }
    ],
    "sampleAnswers": [
      {
        "speaker": "Bài mẫu 1 (Theo tài liệu giáo trình)",
        "textEn": "A healthy diet means eating a balanced variety of food in the right amounts. It includes plenty of fruits, vegetables, fish and whole grains, and less sugar, salt and fried food.\nThere are many benefits. A healthy diet gives you more energy, helps you control your weight and keeps your heart strong. It can also lower the risk of diseases such as diabetes and cancer, and it improves your mood and concentration at school or at work.\nTo encourage children to eat healthily, parents should be good role models and eat healthy food themselves. They can cook meals together with their children, keep fruit at home instead of sweets, and teach them not to skip meals. In this way, children will form good eating habits for life.",
        "textVi": "Một chế độ ăn lành mạnh nghĩa là tiêu thụ đa dạng các nhóm thực phẩm một cách cân bằng và điều độ. Chế độ này bao gồm nhiều trái cây tươi, rau củ quả, cá và ngũ cốc nguyên hạt, đồng thời hạn chế đường, muối và thức ăn chiên rán nhiều dầu mỡ.\nLợi ích mang lại là vô cùng to lớn. Chế độ ăn khoa học cung cấp dồi dào năng lượng, giúp bạn kiểm soát cân nặng hợp lý và giữ cho trái tim luôn khỏe mạnh. Nó cũng làm giảm nguy cơ mắc các căn bệnh mãn tính như tiểu đường, ung thư, đồng thời cải thiện tâm trạng và sự tập trung trong học tập cũng như công việc.\nĐể khuyến khích con trẻ ăn uống lành mạnh, các bậc phụ huynh nên là tấm gương sáng bằng việc tự mình ăn thực phẩm tốt cho sức khỏe. Cha mẹ có thể cùng con vào bếp chuẩn bị bữa cơm, tích trữ hoa quả tươi trong nhà thay vì bánh kẹo ngọt, và dạy con không bao giờ được bỏ bữa. Bằng cách đó, trẻ em sẽ hình thành thói quen ăn uống tốt suốt đời."
      },
      {
        "speaker": "Bài mẫu 2 (Theo ngữ cảnh sinh viên - Phan Tấn Kiệt)",
        "textEn": "In my view, following a wholesome, balanced diet is the cornerstone of long-term wellness.\nA healthy diet provides essential vitamins, proteins and fiber from vegetables, fresh fruit and lean meats, while significantly reducing processed junk food and sugary soda.\nThe advantages are evident: it strengthens our immune defenses, sharpens our mental alertness during demanding study sessions, and prevents chronic cardiovascular illnesses.\nParents can effectively guide children by preparing colorful home-cooked dishes, involving kids in meal preparation, and minimizing fast-food treats. When children learn to enjoy natural foods from an early age, they develop strong habits that protect their health for a lifetime.",
        "textVi": "Theo quan điểm của tôi, tuân theo một chế độ ăn uống lành mạnh và cân bằng là nền tảng cốt lõi cho sức khỏe lâu dài.\nMột chế độ ăn tốt cung cấp đầy đủ vitamin, protein và chất xơ từ rau củ, trái cây tươi và thịt nạc, đồng thời cắt giảm tối đa đồ ăn nhanh chế biến sẵn và nước ngọt có gas.\nNhững lợi ích mang lại rất rõ ràng: nó củng cố hệ thống miễn dịch, tăng cường sự minh mẫn của trí não trong các kỳ thi học tập căng thẳng, và ngăn ngừa các bệnh lý tim mạch mãn tính.\nCha mẹ có thể định hướng cho con một cách hiệu quả bằng việc tự tay nấu những bữa ăn gia đình ấm cúng và đầy màu sắc, cho con cùng tham gia chuẩn bị thức ăn, và hạn chế chiều chuộng con bằng thức ăn nhanh. Khi trẻ nhỏ học được cách yêu thích các món ăn tự nhiên từ bé, các em sẽ xây dựng được thói quen vững chắc bảo vệ sức khỏe trọn đời."
      }
    ]
  },
  "listeningPartA": [
    {
      "number": 1,
      "question": "Which sport will the woman learn on holiday?",
      "options": [
        "A: Water skiing",
        "B: Windsurfing",
        "C: Scuba diving"
      ],
      "answer": "B",
      "note": "Phán đoán môn thể thao dưới nước người phụ nữ chọn học"
    },
    {
      "number": 2,
      "question": "What does the girl's penfriend look like now?",
      "options": [
        "A: Long curly hair",
        "B: Short straight hair with glasses",
        "C: Medium straight hair without glasses"
      ],
      "answer": "B",
      "note": "Phán đoán đặc điểm ngoại hình của người bạn qua thư"
    },
    {
      "number": 3,
      "question": "Which animals did the children see?",
      "options": [
        "A: Playful monkeys",
        "B: Large elephants",
        "C: Swimming dolphins"
      ],
      "answer": "C",
      "note": "Phán đoán loài động vật các em nhỏ nhìn thấy"
    },
    {
      "number": 4,
      "question": "Which TV programme is on first?",
      "options": [
        "A: Wildlife documentary",
        "B: Music talent show",
        "C: Live football match"
      ],
      "answer": "A",
      "note": "Phán đoán chương trình truyền hình phát sóng trước tiên"
    },
    {
      "number": 5,
      "question": "What does the boy decide to buy for his grandmother?",
      "options": [
        "A: Warm woollen scarf",
        "B: Indoor potted plant",
        "C: Box of chocolates"
      ],
      "answer": "B",
      "note": "Phán đoán món quà bạn nam quyết định mua cho bà"
    },
    {
      "number": 6,
      "question": "What time is the man's appointment?",
      "options": [
        "A: 9:15 AM",
        "B: 9:30 AM",
        "C: 10:00 AM"
      ],
      "answer": "B",
      "note": "Phán đoán thời gian chính xác của cuộc hẹn khám bệnh"
    },
    {
      "number": 7,
      "question": "What has the woman lost?",
      "options": [
        "A: Leather handbag",
        "B: Gold wristwatch",
        "C: Folding umbrella"
      ],
      "answer": "A",
      "note": "Phán đoán đồ vật người phụ nữ bị thất lạc"
    }
  ],
  "listeningPartB": {
    "title": "SINGING FOR BEGINNERS - BROWN STOKE COLLEGE (Listen and fill in the missing information)",
    "items": [
      {
        "gap": 1,
        "text": "Lena Phipps, a very good former (1)........ singer is the tutor",
        "answer": "opera"
      },
      {
        "gap": 2,
        "text": "The maximum number of students per course is (2)........",
        "answer": "20"
      },
      {
        "gap": 3,
        "text": "All classes start with exercises that help students to (3)........",
        "answer": "relax"
      },
      {
        "gap": 4,
        "text": "Students learn to sing (4)........, modern and pop songs",
        "answer": "traditional"
      },
      {
        "gap": 5,
        "text": "There's a very good lunch, especially (5)........",
        "answer": "pasta"
      },
      {
        "gap": 6,
        "text": "Date the next course starts: (6)........, 24th September",
        "answer": "Friday"
      }
    ],
    "note": "Lưu ý: Các câu hỏi điền từ vào chỗ trống dựa trên chương trình khóa học hát cho người mới bắt đầu tại trường Cao đẳng Brown stoke."
  }
};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC10 = EXAM_DATA_TOPIC10;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC10;
}
