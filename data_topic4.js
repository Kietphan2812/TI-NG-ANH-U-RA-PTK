// TOPIC 4: JOBS AND WORK - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC4 = {
  "topicId": "topic4",
  "topicTitle": "TOPIC 4: JOBS AND WORK",
  "topicSubtitle": "Nghề nghiệp & Công việc (Từ vựng 54 nghề nghiệp, Thì tương lai, Đọc hiểu Đổi nghề & Sự nghiệp của ông)",
  "vocabulary": [
    {
      "word": "application",
      "ipa": "/ˌæplɪˈkeɪʃn/",
      "pos": "n.",
      "meaning": "đơn xin việc",
      "example": "I sent my job application to the company yesterday morning."
    },
    {
      "word": "apply",
      "ipa": "/əˈplaɪ/",
      "pos": "v.",
      "meaning": "xin việc, nộp đơn",
      "example": "He decided to apply for the position of IT technician."
    },
    {
      "word": "accountant",
      "ipa": "/əˈkaʊntənt/",
      "pos": "n.",
      "meaning": "kế toán",
      "example": "The accountant checks all the company financial records carefully."
    },
    {
      "word": "actor",
      "ipa": "/ˈæktə(r)/",
      "pos": "n.",
      "meaning": "nam diễn viên",
      "example": "The famous actor starred in a blockbuster science fiction movie."
    },
    {
      "word": "actress",
      "ipa": "/ˈæktrəs/",
      "pos": "n.",
      "meaning": "nữ diễn viên",
      "example": "The talented actress won an academy award for her outstanding performance."
    },
    {
      "word": "architect",
      "ipa": "/ˈɑːkɪtekt/",
      "pos": "n.",
      "meaning": "kiến trúc sư",
      "example": "The architect drew the blueprint for the new university library."
    },
    {
      "word": "artist",
      "ipa": "/ˈɑːtɪst/",
      "pos": "n.",
      "meaning": "nghệ sĩ, họa sĩ",
      "example": "The artist painted a beautiful landscape of the countryside."
    },
    {
      "word": "assistant",
      "ipa": "/əˈsɪstənt/",
      "pos": "n.",
      "meaning": "trợ lý, người phụ tá",
      "example": "She started work as an administrative assistant in the marketing department."
    },
    {
      "word": "athlete",
      "ipa": "/ˈæθliːt/",
      "pos": "n.",
      "meaning": "vận động viên",
      "example": "An Olympic athlete has to train with dedication every single day."
    },
    {
      "word": "babysitter",
      "ipa": "/ˈbeɪbisɪtə(r)/",
      "pos": "n.",
      "meaning": "người trông trẻ",
      "example": "We hired a reliable babysitter to look after our children on Saturday evening."
    },
    {
      "word": "boss",
      "ipa": "/bɒs/",
      "pos": "n.",
      "meaning": "sếp, ông/bà chủ",
      "example": "My boss is very supportive and encourages innovative ideas."
    },
    {
      "word": "businessman",
      "ipa": "/ˈbɪznəsmæn/",
      "pos": "n.",
      "meaning": "doanh nhân (nam)",
      "example": "He is a successful businessman who owns several technology companies."
    },
    {
      "word": "businesswoman",
      "ipa": "/ˈbɪznəswʊmən/",
      "pos": "n.",
      "meaning": "doanh nhân (nữ)",
      "example": "The inspiring businesswoman gave a speech on leadership."
    },
    {
      "word": "butcher",
      "ipa": "/ˈbʊtʃə(r)/",
      "pos": "n.",
      "meaning": "người bán thịt",
      "example": "I bought two kilograms of fresh beef from the local butcher."
    },
    {
      "word": "builder",
      "ipa": "/ˈbɪldə(r)/",
      "pos": "n.",
      "meaning": "thợ xây dựng",
      "example": "The builders are working diligently to complete the school on schedule."
    },
    {
      "word": "chef",
      "ipa": "/ʃef/",
      "pos": "n.",
      "meaning": "đầu bếp",
      "example": "The head chef prepared a delicious seafood dish for the guests."
    },
    {
      "word": "chemist",
      "ipa": "/ˈkemɪst/",
      "pos": "n.",
      "meaning": "nhà hóa học / dược sĩ",
      "example": "The chemist conducts lab experiments to develop new materials."
    },
    {
      "word": "colleague",
      "ipa": "/ˈkɒliːɡ/",
      "pos": "n.",
      "meaning": "đồng nghiệp",
      "example": "I get on really well with all my colleagues in the IT team."
    },
    {
      "word": "candidate",
      "ipa": "/ˈkændɪdeɪt/",
      "pos": "n.",
      "meaning": "ứng viên, thí sinh",
      "example": "Each candidate had to complete an interview and a technical test."
    },
    {
      "word": "career",
      "ipa": "/kəˈrɪə(r)/",
      "pos": "n.",
      "meaning": "nghề nghiệp, sự nghiệp",
      "example": "My grandpa had a long and very successful career as an engineer."
    },
    {
      "word": "conference",
      "ipa": "/ˈkɒnfərəns/",
      "pos": "n.",
      "meaning": "hội thảo, hội nghị",
      "example": "Scientists from around the world attended the international tech conference."
    },
    {
      "word": "contract",
      "ipa": "/ˈkɒntrækt/",
      "pos": "n.",
      "meaning": "hợp đồng",
      "example": "She signed a two-year employment contract with the firm."
    },
    {
      "word": "dustman",
      "ipa": "/ˈdʌstmən/",
      "pos": "n.",
      "meaning": "người thu gom rác",
      "example": "The dustmen collect the rubbish bins from our street twice a week."
    },
    {
      "word": "detective",
      "ipa": "/dɪˈtektɪv/",
      "pos": "n.",
      "meaning": "thám tử, trinh thám",
      "example": "She hired a private detective to uncover the truth."
    },
    {
      "word": "employ",
      "ipa": "/ɪmˈplɔɪ/",
      "pos": "v.",
      "meaning": "thuê, tuyển dụng",
      "example": "The enterprise plans to employ fifty new university graduates this year."
    },
    {
      "word": "unemployed",
      "ipa": "/ˌʌnɪmˈplɔɪd/",
      "pos": "adj.",
      "meaning": "bị thất nghiệp",
      "example": "He was unemployed for three months before securing a good job."
    },
    {
      "word": "employee",
      "ipa": "/ɪmˈplɔɪiː/",
      "pos": "n.",
      "meaning": "nhân viên, người lao động",
      "example": "The company has over three hundred full-time employees."
    },
    {
      "word": "employer",
      "ipa": "/ɪmˈplɔɪə(r)/",
      "pos": "n.",
      "meaning": "người chủ, người tuyển dụng",
      "example": "A good employer provides safe working conditions and fair wages."
    },
    {
      "word": "employment",
      "ipa": "/ɪmˈplɔɪmənt/",
      "pos": "n.",
      "meaning": "việc làm, sự tuyển dụng",
      "example": "Information technology is an area with high employment opportunities."
    },
    {
      "word": "explorer",
      "ipa": "/ɪkˈsplɔːrə(r)/",
      "pos": "n.",
      "meaning": "nhà thám hiểm",
      "example": "The brave explorer journeyed deep into the unexplored rainforest."
    },
    {
      "word": "editor",
      "ipa": "/ˈedɪtə(r)/",
      "pos": "n.",
      "meaning": "người biên tập, chủ bút",
      "example": "The newspaper editor reviewed the front-page article before printing."
    },
    {
      "word": "firefighter",
      "ipa": "/ˈfaɪəfaɪtə(r)/",
      "pos": "n.",
      "meaning": "lính cứu hỏa",
      "example": "The courageous firefighters put out the blaze in under an hour."
    },
    {
      "word": "hairdresser",
      "ipa": "/ˈherdresə(r)/",
      "pos": "n.",
      "meaning": "thợ làm tóc",
      "example": "My hairdresser gave me a modern haircut before the wedding."
    },
    {
      "word": "journalist",
      "ipa": "/ˈdʒɜːnəlɪst/",
      "pos": "n.",
      "meaning": "nhà báo",
      "example": "The investigative journalist wrote an expose on environmental issues."
    },
    {
      "word": "judge",
      "ipa": "/dʒʌdʒ/",
      "pos": "n.",
      "meaning": "thẩm phán",
      "example": "The judge listened to both sides before giving the final verdict."
    },
    {
      "word": "lecturer",
      "ipa": "/ˈlektʃərə(r)/",
      "pos": "n.",
      "meaning": "giảng viên đại học",
      "example": "Our computer science lecturer explains complex algorithms clearly."
    },
    {
      "word": "librarian",
      "ipa": "/laɪˈbreəriən/",
      "pos": "n.",
      "meaning": "cán bộ thư viện, thủ thư",
      "example": "The librarian assisted the students in finding reference books."
    },
    {
      "word": "mechanic",
      "ipa": "/məˈkænɪk/",
      "pos": "n.",
      "meaning": "thợ cơ khí, thợ sửa xe",
      "example": "The mechanic replaced the faulty brakes and tuned the car engine."
    },
    {
      "word": "musician",
      "ipa": "/mjuˈzɪʃn/",
      "pos": "n.",
      "meaning": "nhạc sĩ, nhạc công",
      "example": "A skilled musician played the classical guitar at the reception."
    },
    {
      "word": "surgeon",
      "ipa": "/ˈsɜːdʒən/",
      "pos": "n.",
      "meaning": "bác sỹ phẫu thuật",
      "example": "The surgeon performed a delicate heart operation that saved a life."
    },
    {
      "word": "salesman",
      "ipa": "/ˈseɪlzmən/",
      "pos": "n.",
      "meaning": "nhân viên bán hàng (nam)",
      "example": "The enthusiastic salesman demonstrated the features of the new laptop."
    },
    {
      "word": "saleswoman",
      "ipa": "/ˈseɪlzwʊmən/",
      "pos": "n.",
      "meaning": "nhân viên bán hàng (nữ)",
      "example": "The polite saleswoman helped us choose the most suitable model."
    },
    {
      "word": "scientist",
      "ipa": "/ˈsaɪəntɪst/",
      "pos": "n.",
      "meaning": "nhà khoa học",
      "example": "Scientists are researching renewable energy to combat climate change."
    },
    {
      "word": "secretary",
      "ipa": "/ˈsekrətri/",
      "pos": "n.",
      "meaning": "thư ký",
      "example": "The secretary scheduled the appointment and sent the invitation email."
    },
    {
      "word": "soldier",
      "ipa": "/ˈsəʊldʒə(r)/",
      "pos": "n.",
      "meaning": "quân nhân, người lính",
      "example": "The brave soldiers protected the peace and border of the nation."
    },
    {
      "word": "staff",
      "ipa": "/stɑːf/",
      "pos": "n.",
      "meaning": "nhân viên, đội ngũ nhân sự",
      "example": "The hotel staff were extremely polite, welcoming and helpful."
    },
    {
      "word": "security guard",
      "ipa": "/sɪˈkjʊərəti ɡɑːd/",
      "pos": "n.",
      "meaning": "nhân viên an ninh, bảo vệ",
      "example": "The security guard checked visitors' bags at the office building entrance."
    },
    {
      "word": "tour guide",
      "ipa": "/tʊə(r) ɡaɪd/",
      "pos": "n.",
      "meaning": "hướng dẫn viên du lịch",
      "example": "The enthusiastic tour guide showed us historical sights around the city."
    },
    {
      "word": "travel agent",
      "ipa": "/ˈtrævl ˈeɪdʒənt/",
      "pos": "n.",
      "meaning": "nhân viên đại lý du lịch",
      "example": "We visited the travel agent to book flights and hotel accommodation."
    },
    {
      "word": "waiter",
      "ipa": "/ˈweɪtə(r)/",
      "pos": "n.",
      "meaning": "bồi bàn (nam)",
      "example": "The waiter served our meals promptly and with a warm smile."
    },
    {
      "word": "waitress",
      "ipa": "/ˈweɪtrəs/",
      "pos": "n.",
      "meaning": "bồi bàn (nữ)",
      "example": "The attentive waitress refilled our water glasses throughout the dinner."
    },
    {
      "word": "vet",
      "ipa": "/vet/",
      "pos": "n.",
      "meaning": "bác sỹ thú y",
      "example": "We took our sick puppy to the vet for a health check and medicine."
    },
    {
      "word": "part-time",
      "ipa": "/pɑːt ˈtaɪm/",
      "pos": "adj./adv.",
      "meaning": "bán thời gian",
      "example": "He works part-time at a local bookstore while studying at university."
    },
    {
      "word": "full-time",
      "ipa": "/ˌfʊl ˈtaɪm/",
      "pos": "adj./adv.",
      "meaning": "toàn thời gian",
      "example": "She secured a full-time position with health insurance and paid leave."
    }
  ],
  "vocabularyQuestions": [
    {
      "id": "t4_v1",
      "number": 1,
      "section": "vocab",
      "question": "The politician promises that he ______ all of your questions in the conference next week.",
      "vietnameseTranslation": "Chính trị gia hứa rằng ông ấy sẽ trả lời tất cả các câu hỏi của các bạn trong buổi hội nghị vào tuần tới.",
      "options": [
        {
          "key": "A",
          "text": "will answer",
          "vietnameseSub": "sẽ trả lời (lời hứa trong tương lai - đúng)"
        },
        {
          "key": "B",
          "text": "is answering",
          "vietnameseSub": "đang trả lời"
        },
        {
          "key": "C",
          "text": "is going to answer",
          "vietnameseSub": "dự định trả lời"
        },
        {
          "key": "D",
          "text": "will be answering",
          "vietnameseSub": "sẽ đang trả lời"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. will answer. Động từ \"promise\" (hứa hẹn) diễn tả lời cam kết trong tương lai, quy tắc chuẩn ta dùng \"will + V_inf\"."
    },
    {
      "id": "t4_v2",
      "number": 2,
      "section": "vocab",
      "question": "I can't go to work this morning because I ______ to the doctor's.",
      "vietnameseTranslation": "Sáng nay tôi không thể đi làm vì tôi có lịch đi khám bác sĩ.",
      "options": [
        {
          "key": "A",
          "text": "will go",
          "vietnameseSub": "sẽ đi (quyết định tức thì)"
        },
        {
          "key": "B",
          "text": "will be going",
          "vietnameseSub": "sẽ đang đi"
        },
        {
          "key": "C",
          "text": "go",
          "vietnameseSub": "đi (thói quen)"
        },
        {
          "key": "D",
          "text": "am going",
          "vietnameseSub": "sắp đi / có lịch hẹn trước (Hiện tại tiếp diễn - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. am going. Diễn tả một kế hoạch/lịch trình đã thu xếp cố định trước với người khác (cuộc hẹn với bác sĩ: to the doctor's), ta dùng thì Hiện tại tiếp diễn mang nghĩa tương lai."
    },
    {
      "id": "t4_v3",
      "number": 3,
      "section": "vocab",
      "question": "Our ______ are ready to come to your home or office and fix your car.",
      "vietnameseTranslation": "Những người thợ sửa xe của chúng tôi sẵn sàng đến tận nhà hoặc văn phòng để sửa xe ô tô cho bạn.",
      "options": [
        {
          "key": "A",
          "text": "journalist",
          "vietnameseSub": "nhà báo (số ít)"
        },
        {
          "key": "B",
          "text": "vet",
          "vietnameseSub": "bác sĩ thú y (số ít)"
        },
        {
          "key": "C",
          "text": "mechanics",
          "vietnameseSub": "những thợ cơ khí / thợ sửa xe (số nhiều - đúng)"
        },
        {
          "key": "D",
          "text": "surgeon",
          "vietnameseSub": "bác sĩ phẫu thuật (số ít)"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. mechanics. Người có chuyên môn sửa xe (\"fix your car\") là thợ cơ khí / thợ sửa xe (mechanic). Động từ to be là \"are\" nên chủ ngữ phải là danh từ số nhiều \"mechanics\"."
    },
    {
      "id": "t4_v4",
      "number": 4,
      "section": "vocab",
      "question": "This time next year I ______ my own business in Mexico.",
      "vietnameseTranslation": "Vào thời điểm này năm sau, tôi sẽ đang điều hành công ty kinh doanh riêng của mình ở Mexico.",
      "options": [
        {
          "key": "A",
          "text": "will run",
          "vietnameseSub": "sẽ điều hành"
        },
        {
          "key": "B",
          "text": "will be running",
          "vietnameseSub": "sẽ đang điều hành (Tương lai tiếp diễn - đúng)"
        },
        {
          "key": "C",
          "text": "am running",
          "vietnameseSub": "đang điều hành"
        },
        {
          "key": "D",
          "text": "am going to run",
          "vietnameseSub": "dự định điều hành"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. will be running. Cụm từ chỉ thời gian xác định trong tương lai \"This time next year\" (vào đúng thời điểm này năm sau) là dấu hiệu điển hình của thì Tương lai tiếp diễn (Future Continuous: will be + V-ing)."
    },
    {
      "id": "t4_v5",
      "number": 5,
      "section": "vocab",
      "question": "______ must have at least one year of experience working in the area of education.",
      "vietnameseTranslation": "Các ứng viên phải có ít nhất một năm kinh nghiệm làm việc trong lĩnh vực giáo dục.",
      "options": [
        {
          "key": "A",
          "text": "Butchers",
          "vietnameseSub": "Những người bán thịt"
        },
        {
          "key": "B",
          "text": "Candidates",
          "vietnameseSub": "Các ứng viên xin việc (đúng)"
        },
        {
          "key": "C",
          "text": "Explorers",
          "vietnameseSub": "Các nhà thám hiểm"
        },
        {
          "key": "D",
          "text": "Dustmen",
          "vietnameseSub": "Những người thu gom rác"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. Candidates. Trong ngữ cảnh thông báo tuyển dụng việc làm, \"Candidates\" (các ứng viên) là người cần đáp ứng yêu cầu số năm kinh nghiệm làm việc."
    },
    {
      "id": "t4_v6",
      "number": 6,
      "section": "vocab",
      "question": "I believe that my favourite singer ______ the competition.",
      "vietnameseTranslation": "Tôi tin rằng ca sĩ yêu thích của tôi sẽ giành chiến thắng trong cuộc thi này.",
      "options": [
        {
          "key": "A",
          "text": "is winning",
          "vietnameseSub": "đang thắng"
        },
        {
          "key": "B",
          "text": "win",
          "vietnameseSub": "thắng (nguyên mẫu)"
        },
        {
          "key": "C",
          "text": "will win",
          "vietnameseSub": "sẽ chiến thắng (Tương lai đơn - đúng)"
        },
        {
          "key": "D",
          "text": "will be winning",
          "vietnameseSub": "sẽ đang thắng"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. will win. Sau các mệnh đề chỉ ý kiến, niềm tin cá nhân như \"I believe / I think\", ta dùng thì Tương lai đơn (will + V_inf) để đưa ra dự đoán về tương lai."
    },
    {
      "id": "t4_v7",
      "number": 7,
      "section": "vocab",
      "question": "After ordering few minutes, ______ will bring you your dinner. Remember to leave him a tip after your meal.",
      "vietnameseTranslation": "Sau khi gọi món vài phút, người bồi bàn sẽ mang bữa tối đến cho bạn. Hãy nhớ để lại tiền boa cho anh ấy sau bữa ăn.",
      "options": [
        {
          "key": "A",
          "text": "a scientist",
          "vietnameseSub": "một nhà khoa học"
        },
        {
          "key": "B",
          "text": "a salesman",
          "vietnameseSub": "một nhân viên bán hàng"
        },
        {
          "key": "C",
          "text": "a lawyer",
          "vietnameseSub": "một luật sư"
        },
        {
          "key": "D",
          "text": "a waiter",
          "vietnameseSub": "một người bồi bàn nam (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. a waiter. Trong nhà hàng, người phục vụ mang bữa ăn ra cho thực khách và nhận tiền tip (\"leave him a tip\") là bồi bàn nam (waiter)."
    },
    {
      "id": "t4_v8",
      "number": 8,
      "section": "vocab",
      "question": "After I graduate, I ______ medical school and become a doctor. I have wanted to be a doctor all my life.",
      "vietnameseTranslation": "Sau khi tốt nghiệp, tôi sẽ theo học trường y và trở thành bác sĩ. Cả đời tôi luôn ao ước được làm bác sĩ.",
      "options": [
        {
          "key": "A",
          "text": "will attend",
          "vietnameseSub": "sẽ tham gia"
        },
        {
          "key": "B",
          "text": "am going to attend",
          "vietnameseSub": "dự định theo học (Tương lai gần be going to - đúng)"
        },
        {
          "key": "C",
          "text": "will attended",
          "vietnameseSub": "sai ngữ pháp"
        },
        {
          "key": "D",
          "text": "will be attending",
          "vietnameseSub": "sẽ đang theo học"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. am going to attend. Câu sau giải thích \"I have wanted to be a doctor all my life\" chứng tỏ đây là một dự định, kế hoạch đã được ấp ủ từ lâu nên dùng \"be going to + V_inf\"."
    },
    {
      "id": "t4_v9",
      "number": 9,
      "section": "vocab",
      "question": "English123 centre offers a competitive ______ and a friendly working environment.",
      "vietnameseTranslation": "Trung tâm English123 mang đến mức lương cạnh tranh cùng một môi trường làm việc thân thiện.",
      "options": [
        {
          "key": "A",
          "text": "salary",
          "vietnameseSub": "tiền lương (cụm a competitive salary - đúng)"
        },
        {
          "key": "B",
          "text": "strike",
          "vietnameseSub": "cuộc đình công"
        },
        {
          "key": "C",
          "text": "contract",
          "vietnameseSub": "hợp đồng"
        },
        {
          "key": "D",
          "text": "application",
          "vietnameseSub": "đơn xin việc"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. salary. \"A competitive salary\" là cụm từ cố định trong thông báo tuyển dụng có nghĩa là \"mức lương cạnh tranh / hấp dẫn\"."
    },
    {
      "id": "t4_v10",
      "number": 10,
      "section": "vocab",
      "question": "She thinks that her spouse is cheating and she wants to hire a private ______ to find out the truth.",
      "vietnameseTranslation": "Cô ấy nghi ngờ người bạn đời ngoại tình nên muốn thuê một thám tử tư để tìm ra sự thật.",
      "options": [
        {
          "key": "A",
          "text": "physicist",
          "vietnameseSub": "nhà vật lý học"
        },
        {
          "key": "B",
          "text": "detective",
          "vietnameseSub": "thám tử (cụm private detective - đúng)"
        },
        {
          "key": "C",
          "text": "psychologist",
          "vietnameseSub": "nhà tâm lý học"
        },
        {
          "key": "D",
          "text": "explorer",
          "vietnameseSub": "nhà thám hiểm"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. detective. Cụm từ \"private detective\" có nghĩa là thám tử tư, người được thuê để điều tra theo dõi tìm ra sự thật bí mật."
    }
  ],
  "readingSignQuestions": [
    {
      "id": "t4_s1",
      "number": 11,
      "section": "signs",
      "signText": "All employees must carry their identity cards with them all the time.",
      "vietnameseSignTranslation": "Tất cả nhân viên phải mang theo thẻ căn cước/thẻ nhân viên bên mình mọi lúc.",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "You can get your identity card from security.",
          "vietnameseSub": "Bạn có thể nhận thẻ căn cước từ bảo vệ."
        },
        {
          "key": "B",
          "text": "You must show your identity card at all times.",
          "vietnameseSub": "Bạn phải luôn xuất trình thẻ căn cước mọi lúc."
        },
        {
          "key": "C",
          "text": "The company insists you always have your identity card with you.",
          "vietnameseSub": "Công ty yêu cầu bạn phải luôn mang thẻ căn cước bên mình (đúng)."
        },
        {
          "key": "D",
          "text": "The company keeps your identity card for a long time.",
          "vietnameseSub": "Công ty giữ thẻ căn cước của bạn trong thời gian dài."
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. The company insists you always have your identity card with you. Biển báo ghi \"must carry with them all the time\" tương đương với \"insists you always have with you\" (bắt buộc luôn mang theo người)."
    },
    {
      "id": "t4_s2",
      "number": 12,
      "section": "signs",
      "signText": "To: All maths students.\\nFrom: The secretary.\\nThis week's lecture will be in the main hall and not in the library as usual. Next week the lecture will be in the library, as normal. Please don't be late.",
      "vietnameseSignTranslation": "Gửi: Toàn thể sinh viên ngành Toán.\\nTừ: Thư ký.\\nBài giảng tuần này sẽ diễn ra tại Hội trường chính chứ không phải ở thư viện như thường lệ. Tuần sau bài giảng sẽ trở lại thư viện như bình thường. Vui lòng không đi muộn.",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "The location of the lecture has changed.",
          "vietnameseSub": "Địa điểm buổi giảng đã thay đổi (từ thư viện sang hội trường chính - đúng)."
        },
        {
          "key": "B",
          "text": "The time of the lecture has changed.",
          "vietnameseSub": "Thời gian buổi giảng đã thay đổi."
        },
        {
          "key": "C",
          "text": "The name of the lecturer has changed.",
          "vietnameseSub": "Tên của giảng viên đã thay đổi."
        },
        {
          "key": "D",
          "text": "The subject of the lecture has changed.",
          "vietnameseSub": "Môn học của buổi giảng đã thay đổi."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. The location of the lecture has changed. Thông báo nêu rõ địa điểm tuần này chuyển từ thư viện (library) sang hội trường chính (main hall), tức là thay đổi địa điểm (location)."
    },
    {
      "id": "t4_s3",
      "number": 13,
      "section": "signs",
      "signText": "If the ticket machine is out of order, please pay staff on the train.",
      "vietnameseSignTranslation": "Nếu máy bán vé bị hỏng, vui lòng thanh toán cho nhân viên trên tàu.",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "You can only buy tickets from a member of staff.",
          "vietnameseSub": "Bạn chỉ có thể mua vé từ một nhân viên."
        },
        {
          "key": "B",
          "text": "There is a ticket machine in this place.",
          "vietnameseSub": "Có một máy bán vé ở địa điểm này (chỉ khi nó hỏng mới trả tiền trên tàu - đúng)."
        },
        {
          "key": "C",
          "text": "You must always buy a ticket on the train.",
          "vietnameseSub": "Bạn luôn luôn phải mua vé trên tàu."
        },
        {
          "key": "D",
          "text": "Call staff if the ticket machine is out of order.",
          "vietnameseSub": "Gọi nhân viên nếu máy bán vé bị hỏng."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. There is a ticket machine in this place. Biển báo nói \"Nếu máy bán vé hỏng thì trả tiền trên tàu\", suy ra ở ga này vốn dĩ có máy bán vé."
    },
    {
      "id": "t4_s4",
      "number": 14,
      "section": "signs",
      "signText": "Please show the librarian all books when you leave the library",
      "vietnameseSignTranslation": "Vui lòng xuất trình cho thủ thư xem tất cả sách khi bạn rời khỏi thư viện",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "The librarian will show you where to put your books.",
          "vietnameseSub": "Thủ thư sẽ chỉ cho bạn nơi để sách."
        },
        {
          "key": "B",
          "text": "Return your books before you leave the library.",
          "vietnameseSub": "Hãy trả sách trước khi bạn rời thư viện."
        },
        {
          "key": "C",
          "text": "The librarian needs to see your books before you go.",
          "vietnameseSub": "Thủ thư cần xem sách của bạn trước khi bạn đi ra ngoài (đúng)."
        },
        {
          "key": "D",
          "text": "Make sure you take all your books with you.",
          "vietnameseSub": "Hãy chắc chắn bạn mang tất cả sách theo mình."
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. The librarian needs to see your books before you go. Cụm \"show the librarian all books when you leave\" đồng nghĩa với \"needs to see your books before you go\"."
    },
    {
      "id": "t4_s5",
      "number": 15,
      "section": "signs",
      "signText": "Manager's room. Workers please knock before entering.",
      "vietnameseSignTranslation": "Phòng Quản lý. Công nhân vui lòng gõ cửa trước khi vào.",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "Workers can enter the room freely.",
          "vietnameseSub": "Công nhân có thể tự do vào phòng."
        },
        {
          "key": "B",
          "text": "Workers must enter the room before knocking.",
          "vietnameseSub": "Công nhân phải vào phòng trước khi gõ cửa."
        },
        {
          "key": "C",
          "text": "Workers are not allowed to enter the manager's room.",
          "vietnameseSub": "Công nhân không được phép vào phòng quản lý."
        },
        {
          "key": "D",
          "text": "Workers can enter the manager's room after knocking.",
          "vietnameseSub": "Công nhân có thể vào phòng quản lý sau khi gõ cửa (đúng)."
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. Workers can enter the manager's room after knocking. Biển báo yêu cầu \"gõ cửa trước khi vào\", nghĩa là sau khi gõ cửa thì công nhân có thể vào trong."
    }
  ],
  "readingPassageBTitle": "CAREER CHANGE: GRAPHIC DESIGNER TO CAKE DESIGNER",
  "readingPassageBTag": "Passage B: Reading Comprehension",
  "readingTonyPassage": "I had been happily working in the same company as a graphics designer for over ten years, so it came as a huge surprise when one day, without warning I was made redundant. In fact, most of the people in my department lost their jobs that day. When the personnel manager gave me the bad news, she explained that the company had been taken over by a big multinational corporation and they were closing our department.\n\nI was given a reasonable redundancy payment, but finding another job was going to be difficult. I was nearly forty and the market was full of young, ambitious designers. For months, I looked through the classified ads every day, but all the jobs were in other parts of the country and paid much lower salaries than I was used to.\n\nThen, one day, an old school friend called Mike got in touch. He had started a small bakery business and needed someone to help him make and decorate cakes. He couldn't afford to pay me much at first, but I was so bored staying at home that I decided to give it a go.\n\nTo my surprise, I found that I loved the work. Creating beautiful patterns on cakes wasn't so different from designing graphics on a computer screen, but it was much more creative and satisfying. Three years later, Mike and I are equal partners, and our cake design business is thriving. Looking back, losing my job was probably the best thing that ever happened to me.",
  "readingTonyTranslation": "Tôi đã làm việc vui vẻ tại một công ty với tư cách là nhà thiết kế đồ họa hơn mười năm, vì vậy quả là một bất ngờ lớn khi một ngày nọ, tôi bị sa thải đột ngột mà không có cảnh báo trước. Thực tế, hầu hết mọi người trong phòng ban của tôi đều bị mất việc vào ngày hôm đó. Khi trưởng phòng nhân sự thông báo tin buồn này, bà giải thích rằng công ty đã bị một tập đoàn đa quốc gia lớn thâu tóm và họ đang đóng cửa bộ phận của chúng tôi.\n\nTôi nhận được một khoản tiền trợ cấp thôi việc hợp lý, nhưng việc tìm một công việc khác lại vô cùng khó khăn. Tôi đã gần bốn mươi tuổi và thị trường thì đầy rẫy những nhà thiết kế trẻ trung, đầy tham vọng. Trong nhiều tháng liền, ngày nào tôi cũng lật xem các mục tin rao vặt, nhưng tất cả các công việc đều ở những nơi xa xôi trên cả nước và mức lương thấp hơn rất nhiều so với mức tôi từng nhận.\n\nThế rồi, một ngày nọ, một người bạn học cũ tên là Mike đã liên lạc với tôi. Cậu ấy vừa khởi nghiệp một tiệm bánh nhỏ và cần người phụ giúp làm và trang trí bánh ngọt. Ban đầu cậu ấy không thể trả cho tôi mức lương cao, nhưng vì quá buồn chán khi phải ở nhà nên tôi quyết định thử một phen.\n\nThật bất ngờ, tôi nhận ra mình vô cùng yêu thích công việc này. Việc tạo ra những hoa văn họa tiết tuyệt đẹp trên bánh kem cũng chẳng khác là bao so với việc thiết kế đồ họa trên màn hình máy tính, nhưng nó lại sáng tạo và mang lại nhiều thỏa mãn hơn rất nhiều. Ba năm sau, Mike và tôi đã trở thành đối tác bình đẳng và công việc kinh doanh thiết kế bánh của chúng tôi đang cực kỳ phát đạt. Nhìn lại chặng đường đã qua, việc mất đi công việc cũ có lẽ là điều tuyệt vời nhất từng xảy ra với cuộc đời tôi.",
  "readingTonyQuestions": [
    {
      "id": "t4_r1",
      "number": 16,
      "section": "tony",
      "question": "What is the writer's main aim in writing the text?",
      "vietnameseTranslation": "Mục đích chính của tác giả khi viết bài này là gì?",
      "options": [
        {
          "key": "A",
          "text": "To advise people how to change the job",
          "vietnameseSub": "Để khuyên mọi người cách đổi nghề"
        },
        {
          "key": "B",
          "text": "To talk about his changes in career",
          "vietnameseSub": "Để kể về những bước ngoặt thay đổi trong sự nghiệp của mình (đúng)"
        },
        {
          "key": "C",
          "text": "To describe his new job",
          "vietnameseSub": "Để mô tả công việc mới"
        },
        {
          "key": "D",
          "text": "To talk about differences between two jobs",
          "vietnameseSub": "Để nói về sự khác biệt giữa hai công việc"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. To talk about his changes in career. Toàn bộ bài văn là lời tự sự của tác giả về bước ngoặt nghề nghiệp: từ một nhà thiết kế đồ họa bị sa thải chuyển hướng sang làm đối tác tiệm bánh và nhà thiết kế bánh thành công."
    },
    {
      "id": "t4_r2",
      "number": 17,
      "section": "tony",
      "question": "What does the writer say about his past job?",
      "vietnameseTranslation": "Tác giả nói gì về công việc trước đây của mình?",
      "options": [
        {
          "key": "A",
          "text": "It was a hard job but high salary.",
          "vietnameseSub": "Đó là một công việc vất vả nhưng lương cao."
        },
        {
          "key": "B",
          "text": "It was a part-time job with low salary.",
          "vietnameseSub": "Đó là công việc bán thời gian lương thấp."
        },
        {
          "key": "C",
          "text": "It was an interesting job at a big multinational corporation.",
          "vietnameseSub": "Đó là công việc thú vị tại tập đoàn đa quốc gia."
        },
        {
          "key": "D",
          "text": "It was a comfortable job with high salary.",
          "vietnameseSub": "Đó là một công việc thoải mái, dễ chịu với mức lương cao (đúng)."
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. It was a comfortable job with high salary. Tác giả nêu rằng mình \"had been happily working in the same company... for over ten years\" và các công việc sau đó \"paid much lower salaries than I was used to\" (trả lương thấp hơn nhiều so với mức lương cao trước đây)."
    },
    {
      "id": "t4_r3",
      "number": 18,
      "section": "tony",
      "question": "What did the writer do after losing his job?",
      "vietnameseTranslation": "Tác giả đã làm gì sau khi bị mất việc?",
      "options": [
        {
          "key": "A",
          "text": "He ran his own business.",
          "vietnameseSub": "Anh ấy tự mở công ty kinh doanh riêng."
        },
        {
          "key": "B",
          "text": "He asked his friend for a part-time job.",
          "vietnameseSub": "Anh ấy nhờ bạn cho việc làm thêm."
        },
        {
          "key": "C",
          "text": "He tried to find another job.",
          "vietnameseSub": "Anh ấy nỗ lực tìm kiếm một công việc khác (đúng)."
        },
        {
          "key": "D",
          "text": "He worked part-time job for Classified Ads.",
          "vietnameseSub": "Anh ấy làm việc bán thời gian cho trang rao vặt."
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. He tried to find another job. Đoạn 2 nêu rõ: \"For months, I looked through the classified ads every day, but all the jobs were in other parts...\" cho thấy anh đã nỗ lực tìm công việc khác."
    },
    {
      "id": "t4_r4",
      "number": 19,
      "section": "tony",
      "question": "What did the writer think about his current job at first?",
      "vietnameseTranslation": "Ban đầu tác giả cảm thấy thế nào về công việc hiện tại của mình?",
      "options": [
        {
          "key": "A",
          "text": "He really loved it.",
          "vietnameseSub": "Anh ấy thực sự rất yêu thích nó (đúng)."
        },
        {
          "key": "B",
          "text": "The salary was low.",
          "vietnameseSub": "Mức lương quá thấp."
        },
        {
          "key": "C",
          "text": "He was so interested.",
          "vietnameseSub": "Anh ấy rất thích thú."
        },
        {
          "key": "D",
          "text": "It was hard.",
          "vietnameseSub": "Nó rất vất vả khó khăn."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. He really loved it. Trong đoạn 4 bài đọc nêu: \"To my surprise, I found that I loved the work.\" (Thật bất ngờ, tôi nhận ra mình vô cùng yêu thích công việc này)."
    },
    {
      "id": "t4_r5",
      "number": 20,
      "section": "tony",
      "question": "What is the current job of the writer?",
      "vietnameseTranslation": "Công việc hiện tại của tác giả là gì?",
      "options": [
        {
          "key": "A",
          "text": "Graphics designer",
          "vietnameseSub": "Nhà thiết kế đồ họa"
        },
        {
          "key": "B",
          "text": "Cake designer",
          "vietnameseSub": "Nhà thiết kế bánh ngọt (đúng)"
        },
        {
          "key": "C",
          "text": "Personnel manager",
          "vietnameseSub": "Trưởng phòng nhân sự"
        },
        {
          "key": "D",
          "text": "Employee at the cake shop",
          "vietnameseSub": "Nhân viên tiệm bánh"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. Cake designer. Đoạn cuối khẳng định: \"Three years later, Mike and I are equal partners, and our cake design business is thriving.\" Tác giả hiện là đối tác và là nhà thiết kế bánh ngọt (Cake designer)."
    }
  ],
  "readingPassageCTitle": "MY GRANDPA HAD A LONG CAREER",
  "readingPassageCTag": "Passage C: Cloze Test (Điền từ vào chỗ trống)",
  "readingAnnaPassage": "My grandpa had a long career. After graduating from university, he started work as an assistant and worked his way to the top. He ran the company with over 300 (1) _______. He was very (2) _______, and he saved the company (3) _______ disaster many times. When he was in charge, he was never (4) _______. He understood people and all the employees (5) _______ him. My grandpa was an (6) _______, which is quite a difficult (7) _______, and for 40 years he worked on many projects. Finally, he reached 65, which was the official age of (8) _______ in his company. He was very (9) _______ to other engineers – you might even say he was famous! He was always very busy when he was working, but now he is (10) _______, he's got more time to spend with his grandchildren and to enjoy his hobby. He really likes fishing and collecting stamps.",
  "readingAnnaTranslation": "Ông của tôi đã có một sự nghiệp dài lâu. Sau khi tốt nghiệp đại học, ông bắt đầu công việc với vai trò là một trợ lý và nỗ lực vươn lên vị trí dẫn đầu. Ông đã điều hành công ty với hơn 300 nhân viên (1). Ông rất thành công (2) và đã cứu công ty thoát khỏi (3) thảm họa nhiều lần. Khi nắm quyền điều hành, ông không bao giờ hống hách, hách dịch (4). Ông thấu hiểu lòng người và tất cả nhân viên đều ngưỡng mộ (5) ông. Ông tôi từng là một kỹ sư (6), đây là một nghề nghiệp (7) khá khó khăn và trong suốt 40 năm ông đã làm việc trong rất nhiều dự án. Cuối cùng, ông đã chạm mốc 65 tuổi, đó là độ tuổi nghỉ hưu (8) chính thức tại công ty của ông. Ông rất nổi tiếng (9) đối với các kỹ sư khác – thậm chí bạn có thể nói rằng ông là một người nổi tiếng! Khi còn làm việc, ông luôn bận rộn, nhưng giờ đây khi ông đã nghỉ hưu (10), ông có nhiều thời gian hơn dành cho các cháu của mình và tận hưởng sở thích riêng. Ông rất thích đi câu cá và sưu tầm tem.",
  "readingAnnaQuestions": [
    {
      "id": "t4_c1",
      "number": 21,
      "section": "anna",
      "question": "Choose the best word for blank (1): \"He ran the company with over 300 (1) _______.\"",
      "options": [
        {
          "key": "A",
          "text": "employees",
          "vietnameseSub": "những nhân viên (đúng)"
        },
        {
          "key": "B",
          "text": "engineer",
          "vietnameseSub": "kỹ sư (số ít)"
        },
        {
          "key": "C",
          "text": "retirement",
          "vietnameseSub": "sự nghỉ hưu"
        },
        {
          "key": "D",
          "text": "employers",
          "vietnameseSub": "những người sử dụng lao động"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. employees. Một công ty có hơn 300 nhân viên làm việc dưới quyền người quản lý (\"over 300 employees\")."
    },
    {
      "id": "t4_c2",
      "number": 22,
      "section": "anna",
      "question": "Choose the best word for blank (2): \"He was very (2) _______, and he saved the company...\"",
      "options": [
        {
          "key": "A",
          "text": "retired",
          "vietnameseSub": "đã nghỉ hưu"
        },
        {
          "key": "B",
          "text": "bossy",
          "vietnameseSub": "hống hách"
        },
        {
          "key": "C",
          "text": "well-known",
          "vietnameseSub": "nổi tiếng"
        },
        {
          "key": "D",
          "text": "successful",
          "vietnameseSub": "thành công (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. successful. \"He was very successful\" (Ông rất thành công trong sự nghiệp của mình)."
    },
    {
      "id": "t4_c3",
      "number": 23,
      "section": "anna",
      "question": "Choose the best preposition for blank (3): \"...saved the company (3) _______ disaster many times.\"",
      "options": [
        {
          "key": "A",
          "text": "to",
          "vietnameseSub": "đến"
        },
        {
          "key": "B",
          "text": "into",
          "vietnameseSub": "vào trong"
        },
        {
          "key": "C",
          "text": "from",
          "vietnameseSub": "thoát khỏi (cấu trúc save sb/sth from sth - đúng)"
        },
        {
          "key": "D",
          "text": "for",
          "vietnameseSub": "cho"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. from. Đi với động từ save ta có cấu trúc: \"save something from disaster\" (cứu công ty thoát khỏi thảm họa phá sản)."
    },
    {
      "id": "t4_c4",
      "number": 24,
      "section": "anna",
      "question": "Choose the best word for blank (4): \"When he was in charge, he was never (4) _______.\"",
      "options": [
        {
          "key": "A",
          "text": "bossy",
          "vietnameseSub": "hống hách, hay ra oai (đúng)"
        },
        {
          "key": "B",
          "text": "well-known",
          "vietnameseSub": "nổi tiếng"
        },
        {
          "key": "C",
          "text": "retired",
          "vietnameseSub": "nghỉ hưu"
        },
        {
          "key": "D",
          "text": "successful",
          "vietnameseSub": "thành công"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. bossy. \"He was never bossy\" (Ông không bao giờ tỏ ra hách dịch hay lạm quyền với cấp dưới)."
    },
    {
      "id": "t4_c5",
      "number": 25,
      "section": "anna",
      "question": "Choose the best word for blank (5): \"He understood people and all the employees (5) _______ him.\"",
      "options": [
        {
          "key": "A",
          "text": "retired",
          "vietnameseSub": "nghỉ hưu"
        },
        {
          "key": "B",
          "text": "well-known",
          "vietnameseSub": "nổi tiếng"
        },
        {
          "key": "C",
          "text": "admired",
          "vietnameseSub": "ngưỡng mộ, kính trọng (đúng)"
        },
        {
          "key": "D",
          "text": "successful",
          "vietnameseSub": "thành công"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. admired. Vì ông thấu hiểu mọi người nên toàn thể nhân viên đều hết mực ngưỡng mộ và kính trọng ông (\"all the employees admired him\")."
    },
    {
      "id": "t4_c6",
      "number": 26,
      "section": "anna",
      "question": "Choose the best word for blank (6): \"My grandpa was an (6) _______...\"",
      "options": [
        {
          "key": "A",
          "text": "occupation",
          "vietnameseSub": "nghề nghiệp"
        },
        {
          "key": "B",
          "text": "employees",
          "vietnameseSub": "nhân viên"
        },
        {
          "key": "C",
          "text": "engineer",
          "vietnameseSub": "kỹ sư (danh từ chỉ người, bắt đầu bằng nguyên âm đi với an - đúng)"
        },
        {
          "key": "D",
          "text": "admired",
          "vietnameseSub": "ngưỡng mộ"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. engineer. Mạo từ \"an\" đi với danh từ chỉ nghề nghiệp bắt đầu bằng nguyên âm: \"an engineer\" (một kỹ sư)."
    },
    {
      "id": "t4_c7",
      "number": 27,
      "section": "anna",
      "question": "Choose the best word for blank (7): \"...which is quite a difficult (7) _______...\"",
      "options": [
        {
          "key": "A",
          "text": "occupation",
          "vietnameseSub": "nghề nghiệp (đúng)"
        },
        {
          "key": "B",
          "text": "employees",
          "vietnameseSub": "nhân viên"
        },
        {
          "key": "C",
          "text": "engineer",
          "vietnameseSub": "kỹ sư"
        },
        {
          "key": "D",
          "text": "admired",
          "vietnameseSub": "ngưỡng mộ"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. occupation. \"which is quite a difficult occupation\" (đây là một nghề nghiệp/ngành nghề khá khó và đòi hỏi cao)."
    },
    {
      "id": "t4_c8",
      "number": 28,
      "section": "anna",
      "question": "Choose the best word for blank (8): \"...which was the official age of (8) _______ in his company.\"",
      "options": [
        {
          "key": "A",
          "text": "occupation",
          "vietnameseSub": "nghề nghiệp"
        },
        {
          "key": "B",
          "text": "salary",
          "vietnameseSub": "tiền lương"
        },
        {
          "key": "C",
          "text": "retirement",
          "vietnameseSub": "sự nghỉ hưu (cụm age of retirement - đúng)"
        },
        {
          "key": "D",
          "text": "contract",
          "vietnameseSub": "hợp đồng"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. retirement. 65 tuổi là độ tuổi nghỉ hưu chính thức: \"the official age of retirement\"."
    },
    {
      "id": "t4_c9",
      "number": 29,
      "section": "anna",
      "question": "Choose the best word for blank (9): \"He was very (9) _______ to other engineers – you might even say he was famous!\"",
      "options": [
        {
          "key": "A",
          "text": "bossy",
          "vietnameseSub": "hách dịch"
        },
        {
          "key": "B",
          "text": "well-known",
          "vietnameseSub": "nổi tiếng, được biết đến rộng rãi (đúng)"
        },
        {
          "key": "C",
          "text": "retired",
          "vietnameseSub": "nghỉ hưu"
        },
        {
          "key": "D",
          "text": "successful",
          "vietnameseSub": "thành công"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. well-known. Vế sau giải thích \"you might even say he was famous\" nên từ đồng nghĩa phù hợp nhất là \"well-known\" (rất nổi tiếng)."
    },
    {
      "id": "t4_c10",
      "number": 30,
      "section": "anna",
      "question": "Choose the best word for blank (10): \"...but now he is (10) _______, he's got more time to spend with his grandchildren...\"",
      "options": [
        {
          "key": "A",
          "text": "bossy",
          "vietnameseSub": "hách dịch"
        },
        {
          "key": "B",
          "text": "well-known",
          "vietnameseSub": "nổi tiếng"
        },
        {
          "key": "C",
          "text": "retired",
          "vietnameseSub": "đã nghỉ hưu (tính từ sau to be - đúng)"
        },
        {
          "key": "D",
          "text": "successful",
          "vietnameseSub": "thành công"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. retired. \"now he is retired\" (giờ đây khi ông đã nghỉ hưu, ông có nhiều thời gian dành cho con cháu hơn)."
    }
  ],
  "sentenceTransformations": [
    {
      "id": "t4_w1",
      "number": 31,
      "originalSentence": "We haven't been to a concert for over a year.",
      "vietnameseTranslation": "Chúng tôi đã không đi xem buổi hòa nhạc nào hơn một năm nay rồi.",
      "prefix": "The last time",
      "modelAnswer": "The last time we went to a concert was over a year ago.",
      "vietnameseModelTranslation": "Lần cuối cùng chúng tôi đi xem buổi hòa nhạc là hơn một năm trước.",
      "acceptedAnswers": [
        "we went to a concert was over a year ago",
        "we went to a concert was over a year ago.",
        "we went to a concert was more than a year ago",
        "we went to a concert was more than a year ago."
      ],
      "grammarPoint": "Cấu trúc tương đương giữa thì Hiện tại hoàn thành và Quá khứ đơn: S + haven't/hasn't + V3/ed + for + time = The last time + S + V2/ed + was + time + ago."
    },
    {
      "id": "t4_w2",
      "number": 32,
      "originalSentence": "Her husband will not let her go on business trip with her boss.",
      "vietnameseTranslation": "Chồng cô ấy sẽ không để cô ấy đi công tác cùng với sếp.",
      "prefix": "Her husband will not allow",
      "modelAnswer": "Her husband will not allow her to go on a business trip with her boss.",
      "vietnameseModelTranslation": "Chồng cô ấy sẽ không cho phép cô ấy đi công tác với sếp.",
      "acceptedAnswers": [
        "her to go on a business trip with her boss",
        "her to go on a business trip with her boss.",
        "her to go on business trip with her boss",
        "her to go on business trip with her boss."
      ],
      "grammarPoint": "Chuyển đổi giữa động từ cho phép: let sb do sth = allow sb to do sth (cho phép ai làm việc gì)."
    },
    {
      "id": "t4_w3",
      "number": 33,
      "originalSentence": "People believed that somebody murdered Miss Stone.",
      "vietnameseTranslation": "Mọi người tin rằng ai đó đã sát hại cô Stone.",
      "prefix": "It was",
      "modelAnswer": "It was believed that Miss Stone had been murdered.",
      "vietnameseModelTranslation": "Người ta tin rằng cô Stone đã bị sát hại.",
      "acceptedAnswers": [
        "believed that Miss Stone had been murdered",
        "believed that Miss Stone had been murdered.",
        "believed that somebody had murdered Miss Stone",
        "believed that somebody had murdered Miss Stone.",
        "believed that somebody murdered Miss Stone",
        "believed that somebody murdered Miss Stone."
      ],
      "grammarPoint": "Bị động khách quan (impersonal passive): People believed that S + V2/ed -> It was believed that + S + had been V3/ed."
    },
    {
      "id": "t4_w4",
      "number": 34,
      "originalSentence": "Shall we go out and buy some sandwiches?",
      "vietnameseTranslation": "Chúng mình cùng ra ngoài mua mấy cái bánh mì kẹp nhé?",
      "prefix": "Why",
      "modelAnswer": "Why don't we go out and buy some sandwiches?",
      "vietnameseModelTranslation": "Tại sao chúng ta không ra ngoài mua bánh mì kẹp nhỉ?",
      "acceptedAnswers": [
        "don't we go out and buy some sandwiches?",
        "don't we go out and buy some sandwiches",
        "don't we go out and buy some sandwiches."
      ],
      "grammarPoint": "Cấu trúc câu đề nghị, rủ rê tương đương: Shall we + V_inf? = Why don't we + V_inf? (Chúng ta cùng làm gì nhé?)."
    },
    {
      "id": "t4_w5",
      "number": 35,
      "originalSentence": "It is important to wear a suit to the conference.",
      "vietnameseTranslation": "Việc mặc một bộ âu phục đến buổi hội nghị là rất quan trọng.",
      "prefix": "Wearing",
      "modelAnswer": "Wearing a suit to the conference is important.",
      "vietnameseModelTranslation": "Mặc âu phục đến buổi hội nghị là điều quan trọng.",
      "acceptedAnswers": [
        "a suit to the conference is important",
        "a suit to the conference is important."
      ],
      "grammarPoint": "Biến đổi từ cấu trúc giả định chủ ngữ It sang Danh động từ (Gerund V-ing) đứng đầu câu làm chủ ngữ: It is + adj + to V = V-ing + is + adj."
    }
  ],
  "letterWriting": {
    "prompt": "Write a letter (about 120 words) to your friend about your current job.\\nYour letter should include:\\n- What do you do?\\n- What are your duties?\\n- Do you like it? Why?\\n- Would you like to change anything in your job?",
    "vietnamesePrompt": "Viết một lá thư (khoảng 120 từ) gửi cho bạn của bạn kể về công việc hiện tại.\\nLá thư nên bao gồm:\\n- Bạn làm nghề gì?\\n- Nhiệm vụ/trách nhiệm hàng ngày của bạn là gì?\\n- Bạn có thích công việc đó không? Tại sao?\\n- Bạn có muốn thay đổi điều gì trong công việc không?",
    "requiredWordCount": "100 - 140 words",
    "sample1": {
      "title": "Bài mẫu 1: Nghề Kế toán (Mẫu chuẩn trong giáo trình)",
      "content": "Hello Henry,\n\nHow are you? I'm writing to tell you about my job. I work as a full-time accountant for a small company in Hanoi. In my department I work with 3 other colleagues 5 days per week and from 8 a.m to 5 p.m.\n\nI'm responsible for recording company income and expense daily as well as paying for the suppliers. At the end of month, I make salary reports for all staffs. My job is rather stressful, especially in tax season; I have to work overtime, probably 10 p.m. However, I love it because it gives me the opportunity to work with some talented colleagues and valuable experience.\n\nThere is nothing I want to change in my current job. I'll work for this company until my retirement.\n\nLove,"
    },
    "sample2": {
      "title": "Bài mẫu 2: Sinh viên CNTT trường ĐH Xây dựng Miền Trung (Phan Tấn Kiệt)",
      "content": "Hi Tom,\n\nHow are you? I'm writing to tell you about what I do now. I'm a full-time student at Mien Trung University of Civil Engineering, and my major is Information Technology.\n\nEvery day I go to class, learn programming and do my homework. In my free time, I practice writing code and repair electronic devices. I'm responsible for finishing my projects on time and studying for my exams. I like my life because I learn many useful things and I meet friendly classmates.\n\nHowever, some subjects are quite difficult and I sometimes stay up late to study. In the future, I would like to have more time to practice English and work on real projects.\n\nWrite back soon.\n\nBest wishes,\nPhan Tan Kiet"
    }
  },
  "speakingCard": {
    "cardTitle": "SPEAKING CARD No.4: Talk about your future plans",
    "cardSubtitle": "Nói về những kế hoạch trong tương lai của bạn",
    "questions": [
      {
        "q": "What job do you plan to do in the future?",
        "vi": "Bạn dự định làm nghề gì trong tương lai?"
      },
      {
        "q": "Why do you choose that job?",
        "vi": "Tại sao bạn lại chọn công việc đó?"
      },
      {
        "q": "How do you do to get that job?",
        "vi": "Bạn làm gì để có thể đạt được công việc đó?"
      },
      {
        "q": "What difficulties do you meet about your plans?",
        "vi": "Bạn gặp phải những khó khăn gì đối với các kế hoạch của mình?"
      }
    ],
    "sampleAnswers": [
      {
        "speaker": "Bài mẫu 1 (Theo giáo trình - Sinh viên ĐH Xây dựng Miền Trung)",
        "textEn": "I am the third year student of MT University of Civil Engineering. After graduating, I hope to find a good job with a good salary like a consulting engineer, a contracting engineer or sale man at a big building company. Because I want to develop my working skills and I also would like to earn a lot of money from my work to help my parents in the future. I try my best to finish my study with a good result. Moreover, I study English every day and attend the English Club to improve my speaking English. There are some difficult subjects for me to get good marks and I want to study English in the English centre but I don't have enough money.",
        "textVi": "Tôi là sinh viên năm thứ ba của Trường Đại học Xây dựng Miền Trung. Sau khi tốt nghiệp, tôi hy vọng sẽ tìm được một công việc tốt với mức lương cao như kỹ sư tư vấn, kỹ sư thi công hoặc nhân viên kinh doanh tại một công ty xây dựng lớn. Bởi vì tôi muốn phát triển các kỹ năng làm việc của mình và tôi cũng muốn kiếm được nhiều tiền từ công việc để giúp đỡ cha mẹ trong tương lai. Tôi nỗ lực hết mình để hoàn thành việc học với kết quả tốt. Hơn nữa, tôi học tiếng Anh mỗi ngày và tham gia Câu lạc bộ Tiếng Anh để nâng cao khả năng nói tiếng Anh. Có một số môn học khó đối với tôi để đạt điểm cao và tôi muốn học tiếng Anh ở trung tâm nhưng tôi không có đủ tiền."
      },
      {
        "speaker": "Bài mẫu 2 (Theo thông tin cá nhân - Phan Tấn Kiệt - Ngành CNTT)",
        "textEn": "I am a student at Mien Trung University of Civil Engineering, and my major is Information Technology. After graduating, I plan to work as a software developer at a technology company. I choose this job because I like computers and I enjoy writing code and repairing electronic devices. To get this job, I try my best to study well, practice programming every day and improve my English by listening and speaking. I also want to build some small projects to show to employers. However, I have some difficulties. Some programming subjects are hard for me, and my English is not very good yet. I will keep studying hard to reach my goal.",
        "textVi": "Tôi là sinh viên Trường Đại học Xây dựng Miền Trung, chuyên ngành của tôi là Công nghệ thông tin. Sau khi tốt nghiệp, tôi dự định làm việc với tư cách là một lập trình viên phần mềm tại một công ty công nghệ. Tôi chọn công việc này vì tôi yêu thích máy tính, thích viết code và sửa chữa các thiết bị điện tử. Để có được công việc này, tôi nỗ lực học tập tốt, luyện lập trình mỗi ngày và trau dồi tiếng Anh qua nghe và nói. Tôi cũng muốn xây dựng một số dự án nhỏ để giới thiệu với các nhà tuyển dụng. Tuy nhiên, tôi cũng gặp một số khó khăn. Một số môn lập trình khá khó đối với tôi và tiếng Anh của tôi vẫn chưa thật tốt. Tôi sẽ tiếp tục chăm chỉ học tập để đạt được mục tiêu của mình."
      }
    ]
  },
  "listeningPartA": [
    {
      "number": 1,
      "question": "What did the thieves steal?",
      "options": [
        "A: chest of drawers",
        "B: stereo",
        "C: TV"
      ],
      "answer": "B",
      "note": "Đáp án phán đoán B (stereo)"
    },
    {
      "number": 2,
      "question": "What present will they take?",
      "options": [
        "A: jug + glasses",
        "B: glasses + DVD",
        "C: jug + DVD"
      ],
      "answer": "B",
      "note": "Đáp án phán đoán B (glasses + DVD)"
    },
    {
      "number": 3,
      "question": "What will the woman eat tonight?",
      "options": [
        "A: pizza",
        "B: burger and chips",
        "C: sandwiches"
      ],
      "answer": "A",
      "note": "Đáp án phán đoán A (pizza)"
    },
    {
      "number": 4,
      "question": "How much will the girl's ticket cost?",
      "options": [
        "A: £10.15",
        "B: £10.45",
        "C: £12.65"
      ],
      "answer": "B",
      "note": "Đáp án phán đoán B (£10.45)"
    },
    {
      "number": 5,
      "question": "What is the grandmother's job now?",
      "options": [
        "A: teacher",
        "B: waitress",
        "C: shop cashier"
      ],
      "answer": "C",
      "note": "Đáp án phán đoán C (shop cashier)"
    },
    {
      "number": 6,
      "question": "Which button has the boy lost?",
      "options": [
        "A: collar",
        "B: cuff",
        "C: pocket"
      ],
      "answer": "B",
      "note": "Đáp án phán đoán B (cuff)"
    },
    {
      "number": 7,
      "question": "What will the man do first?",
      "options": [
        "A: sweep the floor",
        "B: clean the window",
        "C: mop with bucket"
      ],
      "answer": "B",
      "note": "Đáp án phán đoán B (clean the window)"
    }
  ],
  "listeningPartB": {
    "title": "SUNNINGTON SPORTS CAMP (Listen and fill in the missing information)",
    "items": [
      {
        "gap": 1,
        "text": "Choice of afternoon activity: Sign list outside ______ room.",
        "answer": "games"
      },
      {
        "gap": 2,
        "text": "Clothes: Wear track suit, but also bring ______ And a T-shirt.",
        "answer": "a towel"
      },
      {
        "gap": 3,
        "text": "2 pairs of sports ______",
        "answer": "shoes"
      },
      {
        "gap": 4,
        "text": "Food: Lunch served in canteen every half-hour between 12.15 and ______",
        "answer": "1.45 (13:45)"
      },
      {
        "gap": 5,
        "text": "Snack bar sells drinks, chocolate and ______",
        "answer": "fruit"
      }
    ],
    "note": "Lưu ý: Không có file audio gốc nên các đáp án trên dựa trên tài liệu ôn tập và phán đoán ngữ cảnh."
  }
};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC4 = EXAM_DATA_TOPIC4;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC4;
}
