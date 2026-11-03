// TOPIC 9: TRAVEL AND TRANSPORT - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC9 = {
  "topicId": "topic9",
  "topicTitle": "TOPIC 9: TRAVEL AND TRANSPORT",
  "topicSubtitle": "Du lịch & Giao thông (Phương tiện đi lại, Giới từ di chuyển, Đọc hiểu Tránh bệnh khi du lịch & Lựa chọn hình thức du lịch, Lợi ích giao thông công cộng)",
  "vocabulary": [
    {
      "word": "helicopter",
      "ipa": "/ˈhelɪkɒptə(r)/",
      "pos": "n.",
      "meaning": "máy bay trực thăng",
      "example": "Rescue helicopters were immediately dispatched to airlift the stranded mountaineers."
    },
    {
      "word": "coach",
      "ipa": "/kəʊtʃ/",
      "pos": "n.",
      "meaning": "xe khách đường dài",
      "example": "We booked seats on an overnight express coach to travel from Ho Chi Minh City to Nha Trang."
    },
    {
      "word": "tram",
      "ipa": "/træm/",
      "pos": "n.",
      "meaning": "xe điện chạy trên đường ray",
      "example": "A modern electric tram provides convenient public transport through the historic center."
    },
    {
      "word": "ferry",
      "ipa": "/ˈferi/",
      "pos": "n.",
      "meaning": "phà, tàu phà",
      "example": "We took the passenger ferry across the river to reach the island."
    },
    {
      "word": "petrol station",
      "ipa": "/ˈpetrəl ˌsteɪʃn/",
      "pos": "n. phr.",
      "meaning": "trạm xăng, cây xăng",
      "example": "Always switch off your vehicle engine before refueling at a petrol station."
    },
    {
      "word": "carry on",
      "ipa": "/ˈkæri ɒn/",
      "pos": "phrasal v.",
      "meaning": "tiếp tục làm việc gì (carry on with)",
      "example": "Please carry on with your assignment while the teacher is briefly away."
    },
    {
      "word": "get off",
      "ipa": "/ɡet ɒf/",
      "pos": "phrasal v.",
      "meaning": "xuống xe (xe buýt, tàu hỏa)",
      "example": "Press the signal button early if you need to get off at the next bus stop."
    },
    {
      "word": "get on",
      "ipa": "/ɡet ɒn/",
      "pos": "phrasal v.",
      "meaning": "lên xe (xe đạp, xe máy, xe buýt)",
      "example": "Hop on and get on my motorbike, and I will give you a quick ride to school."
    },
    {
      "word": "departure lounge",
      "ipa": "/dɪˈpɑːtʃə laʊndʒ/",
      "pos": "n. phr.",
      "meaning": "phòng chờ khởi hành / lên máy bay",
      "example": "After passing airport security, international travelers wait in the departure lounge."
    },
    {
      "word": "boarding pass",
      "ipa": "/ˈbɔːdɪŋ pɑːs/",
      "pos": "n. phr.",
      "meaning": "thẻ lên máy bay",
      "example": "You must show your valid passport and printed boarding pass at the boarding gate."
    },
    {
      "word": "leave sb out of",
      "ipa": "/liːv aʊt ʌv/",
      "pos": "phrasal v.",
      "meaning": "loại ai ra ngoài, không cho tham gia",
      "example": "It felt unfair when they decided to leave him out of the summer travel plans."
    },
    {
      "word": "take over",
      "ipa": "/teɪk ˈəʊvə(r)/",
      "pos": "phrasal v.",
      "meaning": "tiếp quản, đảm đương trách nhiệm",
      "example": "She is preparing to take over the family tourism business after graduating from university."
    },
    {
      "word": "traffic jam",
      "ipa": "/ˈtræfɪk dʒæm/",
      "pos": "n. phr.",
      "meaning": "sự ùn tắc giao thông, kẹt xe",
      "example": "Commuters were stuck in a massive traffic jam during rush hour this morning."
    },
    {
      "word": "package tour",
      "ipa": "/ˈpækɪdʒ tʊə(r)/",
      "pos": "n. phr.",
      "meaning": "chuyến du lịch trọn gói",
      "example": "Booking a package tour takes the stress out of planning flights and hotels yourself."
    },
    {
      "word": "travel agent",
      "ipa": "/ˈtrævl ˈeɪdʒənt/",
      "pos": "n. phr.",
      "meaning": "đại lý lữ hành, nhân viên du lịch",
      "example": "The travel agent helped us customize an unforgettable two-week European itinerary."
    },
    {
      "word": "itinerary",
      "ipa": "/aɪˈtɪnərəri/",
      "pos": "n.",
      "meaning": "lịch trình chi tiết chuyến đi",
      "example": "Our detailed holiday itinerary includes visiting historical museums and coastal islands."
    },
    {
      "word": "destination",
      "ipa": "/ˌdestɪˈneɪʃn/",
      "pos": "n.",
      "meaning": "điểm đến du lịch",
      "example": "Da Nang has consistently ranked among the most attractive holiday destinations."
    },
    {
      "word": "book in advance",
      "ipa": "/bʊk ɪn ədˈvɑːns/",
      "pos": "v. phr.",
      "meaning": "đặt chỗ trước",
      "example": "During high season, you should always book hotels in advance to secure good rates."
    },
    {
      "word": "vacancy",
      "ipa": "/ˈveɪkənsi/",
      "pos": "n.",
      "meaning": "phòng trống (khách sạn), vị trí trống",
      "example": "The front desk receptionist informed us that the motel had no vacancy left tonight."
    },
    {
      "word": "fortnight",
      "ipa": "/ˈfɔːtnaɪt/",
      "pos": "n.",
      "meaning": "khoảng thời gian hai tuần",
      "example": "They spent a restful fortnight exploring the mountain landscapes of Sapa."
    },
    {
      "word": "trip",
      "ipa": "/trɪp/",
      "pos": "n.",
      "meaning": "chuyến đi ngắn, cuộc dạo chơi",
      "example": "We took a weekend road trip to the scenic countryside."
    },
    {
      "word": "hitch-hike",
      "ipa": "/ˈhɪtʃ haɪk/",
      "pos": "v.",
      "meaning": "đi nhờ xe, xin đi quá giang",
      "example": "Backpacking students often hitch-hike along coastal highways to save travel expenses."
    },
    {
      "word": "motion sickness",
      "ipa": "/ˈməʊʃn ˌsɪknəs/",
      "pos": "n. phr.",
      "meaning": "chứng say xe, say sóng",
      "example": "People prone to motion sickness should avoid reading books while riding in a car."
    },
    {
      "word": "ginger capsule",
      "ipa": "/ˈdʒɪndʒə ˈkæpsjuːl/",
      "pos": "n. phr.",
      "meaning": "viên nang gừng trị say tàu xe",
      "example": "Taking natural ginger capsules is a proven herbal remedy for settling motion sickness."
    },
    {
      "word": "first-aid kit",
      "ipa": "/ˌfɜːst ˈeɪd kɪt/",
      "pos": "n. phr.",
      "meaning": "hộp dụng cụ sơ cứu y tế",
      "example": "Every vehicle should carry a compact first-aid kit stocked with antiseptic cream and bandages."
    },
    {
      "word": "public transport",
      "ipa": "/ˌpʌblɪk ˈtrænspɔːt/",
      "pos": "n. phr.",
      "meaning": "phương tiện giao thông công cộng",
      "example": "Relying on public transport significantly cuts urban traffic congestion and carbon emissions."
    }
  ],
  "vocabularyQuestions": [
    {
      "id": "t9_v1",
      "number": 1,
      "section": "vocab",
      "question": "Guides and climbers waited for ______ to rescue them during nine hours after the earthquake.",
      "vietnameseTranslation": "Các hướng dẫn viên và người leo núi đã chờ trực thăng đến cứu hộ trong suốt 9 giờ sau trận động đất.",
      "options": [
        {
          "key": "A",
          "text": "helicopters",
          "vietnameseSub": "máy bay trực thăng (dùng cứu hộ - đúng)"
        },
        {
          "key": "B",
          "text": "coaches",
          "vietnameseSub": "xe khách đường dài"
        },
        {
          "key": "C",
          "text": "trams",
          "vietnameseSub": "xe điện"
        },
        {
          "key": "D",
          "text": "ferries",
          "vietnameseSub": "phà, tàu phà"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. helicopters. Trực thăng (helicopter) là phương tiện đường không cơ động dùng cứu hộ cứu nạn ở vùng núi hiểm trở hoặc sau thiên tai."
    },
    {
      "id": "t9_v2",
      "number": 2,
      "section": "vocab",
      "question": "The warnings at the ______ always tell you to turn off your engine before filling up.",
      "vietnameseTranslation": "Các biển cảnh báo tại trạm xăng luôn yêu cầu bạn tắt máy trước khi đổ xăng.",
      "options": [
        {
          "key": "A",
          "text": "platforms",
          "vietnameseSub": "sân ga tàu hỏa"
        },
        {
          "key": "B",
          "text": "railways",
          "vietnameseSub": "đường ray"
        },
        {
          "key": "C",
          "text": "petrol stations",
          "vietnameseSub": "cây xăng, trạm xăng (đúng)"
        },
        {
          "key": "D",
          "text": "routes",
          "vietnameseSub": "tuyến đường di chuyển"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. petrol stations. Cụm từ \"filling up\" (đổ xăng, tiếp nhiên liệu) chỉ nơi diễn ra hành động này là trạm xăng (petrol station)."
    },
    {
      "id": "t9_v3",
      "number": 3,
      "section": "vocab",
      "question": "I want you to ______ with the project while I go on business in Singapore.",
      "vietnameseTranslation": "Tôi muốn bạn tiếp tục triển khai dự án trong khi tôi đi công tác tại Singapore.",
      "options": [
        {
          "key": "A",
          "text": "have on",
          "vietnameseSub": "mặc đồ / trêu đùa ai"
        },
        {
          "key": "B",
          "text": "turn on",
          "vietnameseSub": "bật thiết bị lên"
        },
        {
          "key": "C",
          "text": "get on with",
          "vietnameseSub": "hòa hợp với ai"
        },
        {
          "key": "D",
          "text": "carry on",
          "vietnameseSub": "tiếp tục (carry on with = tiếp tục làm - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. carry on. Cụm phrasal verb \"carry on with something\" nghĩa là tiếp tục công việc đang làm."
    },
    {
      "id": "t9_v4",
      "number": 4,
      "section": "vocab",
      "question": "Press the stop button if you want to ______ the bus at the next stop.",
      "vietnameseTranslation": "Hãy bấm nút dừng nếu bạn muốn xuống xe buýt ở trạm dừng tiếp theo.",
      "options": [
        {
          "key": "A",
          "text": "get up",
          "vietnameseSub": "thức dậy"
        },
        {
          "key": "B",
          "text": "get over",
          "vietnameseSub": "vượt qua cú sốc, khỏi ốm"
        },
        {
          "key": "C",
          "text": "get off",
          "vietnameseSub": "xuống xe (xe buýt, xe lửa - đúng)"
        },
        {
          "key": "D",
          "text": "get out of",
          "vietnameseSub": "bước ra khỏi (xe ô tô nhỏ)"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. get off. Đối với các phương tiện giao thông công cộng cỡ lớn như xe buýt, tàu hỏa, máy bay, dùng cụm \"get off\" để chỉ hành động xuống xe."
    },
    {
      "id": "t9_v5",
      "number": 5,
      "section": "vocab",
      "question": "______ my bike and I will give you a ride home.",
      "vietnameseTranslation": "Lên xe đạp của mình đi, mình sẽ chở bạn về nhà.",
      "options": [
        {
          "key": "A",
          "text": "Go on",
          "vietnameseSub": "tiếp tục"
        },
        {
          "key": "B",
          "text": "Try on",
          "vietnameseSub": "mặc thử đồ"
        },
        {
          "key": "C",
          "text": "Get off",
          "vietnameseSub": "xuống xe"
        },
        {
          "key": "D",
          "text": "Get on",
          "vietnameseSub": "lên xe (xe đạp, xe máy - đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. Get on. Dùng cụm \"Get on + bike / motorbike / horse\" để chỉ hành động bước lên, ngồi lên xe hai bánh hoặc cưỡi ngựa."
    },
    {
      "id": "t9_v6",
      "number": 6,
      "section": "vocab",
      "question": "All passengers must pass through airport security control after check-in and before entering the ______ at Noi Bai Airport.",
      "vietnameseTranslation": "Tất cả hành khách phải qua cửa kiểm tra an ninh sân bay sau khi làm thủ tục và trước khi vào phòng chờ lên máy bay tại Sân bay Nội Bài.",
      "options": [
        {
          "key": "A",
          "text": "terminal",
          "vietnameseSub": "nhà ga sân bay"
        },
        {
          "key": "B",
          "text": "departure lounge",
          "vietnameseSub": "phòng chờ khởi hành / phòng chờ lên máy bay (đúng)"
        },
        {
          "key": "C",
          "text": "platform",
          "vietnameseSub": "sân ga đường sắt"
        },
        {
          "key": "D",
          "text": "embassy",
          "vietnameseSub": "đại sứ quán"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. departure lounge. \"departure lounge\" là sảnh/phòng chờ khởi hành nơi hành khách ngồi đợi trước giờ lên máy bay sau khi đã soi chiếu an ninh."
    },
    {
      "id": "t9_v7",
      "number": 7,
      "section": "vocab",
      "question": "A ______ is what you will show the staff when entering the plane.",
      "vietnameseTranslation": "Thẻ lên máy bay là giấy tờ bạn sẽ xuất trình cho nhân viên hàng không khi bước vào máy bay.",
      "options": [
        {
          "key": "A",
          "text": "travel brochure",
          "vietnameseSub": "tờ gấp quảng cáo du lịch"
        },
        {
          "key": "B",
          "text": "fare",
          "vietnameseSub": "tiền giá vé"
        },
        {
          "key": "C",
          "text": "boarding pass",
          "vietnameseSub": "thẻ lên máy bay (đúng)"
        },
        {
          "key": "D",
          "text": "guidebook",
          "vietnameseSub": "sách hướng dẫn du lịch"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. boarding pass. \"boarding pass\" là thẻ lên tàu bay, được quét mã tại cửa ra máy bay (boarding gate)."
    },
    {
      "id": "t9_v8",
      "number": 8,
      "section": "vocab",
      "question": "Why did your parents ______ of their vacation plan? They left you home alone.",
      "vietnameseTranslation": "Tại sao bố mẹ bạn lại không cho bạn tham gia vào kế hoạch kỳ nghỉ của họ? Họ đã để bạn ở nhà một mình.",
      "options": [
        {
          "key": "A",
          "text": "get you up",
          "vietnameseSub": "gọi bạn thức dậy"
        },
        {
          "key": "B",
          "text": "let you down",
          "vietnameseSub": "làm bạn thất vọng"
        },
        {
          "key": "C",
          "text": "keep you out",
          "vietnameseSub": "ngăn bạn ở ngoài"
        },
        {
          "key": "D",
          "text": "leave you out",
          "vietnameseSub": "bỏ rơi bạn, loại bạn ra ngoài (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. leave you out. Cấu trúc \"leave somebody out of something\" nghĩa là loại trừ ai, không cho ai tham gia cùng kế hoạch."
    },
    {
      "id": "t9_v9",
      "number": 9,
      "section": "vocab",
      "question": "Who is going to ______ the family business when Tom's father dies?",
      "vietnameseTranslation": "Ai sẽ là người tiếp quản việc kinh doanh của gia đình khi cha của Tom qua đời?",
      "options": [
        {
          "key": "A",
          "text": "take over",
          "vietnameseSub": "tiếp quản, đảm đương trách nhiệm (đúng)"
        },
        {
          "key": "B",
          "text": "set up",
          "vietnameseSub": "thành lập, dựng nghiệp"
        },
        {
          "key": "C",
          "text": "take off",
          "vietnameseSub": "cất cánh / cởi đồ"
        },
        {
          "key": "D",
          "text": "take up",
          "vietnameseSub": "bắt đầu học một sở thích"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. take over. Cụm động từ \"take over\" nghĩa là tiếp quản quyền điều hành một cơ sở kinh doanh hay công việc."
    },
    {
      "id": "t9_v10",
      "number": 10,
      "section": "vocab",
      "question": "Although Abu Dhabi is one of the most modern cities in the world, it is facing a problem of ______.",
      "vietnameseTranslation": "Mặc dù Abu Dhabi là một trong những thành phố hiện đại nhất thế giới, nó đang phải đối mặt với vấn nạn kẹt xe.",
      "options": [
        {
          "key": "A",
          "text": "traffic light",
          "vietnameseSub": "cột đèn tín hiệu giao thông"
        },
        {
          "key": "B",
          "text": "traffic jam",
          "vietnameseSub": "sự ùn tắc giao thông, kẹt xe (đúng)"
        },
        {
          "key": "C",
          "text": "traffic sign",
          "vietnameseSub": "biển báo giao thông"
        },
        {
          "key": "D",
          "text": "public transport",
          "vietnameseSub": "giao thông công cộng"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. traffic jam. Cụm danh từ \"problem of traffic jam\" (vấn nạn tắc nghẽn giao thông do quá nhiều xe cộ lưu thông)."
    }
  ],
  "readingSignQuestions": [
    {
      "id": "t9_s1",
      "number": 11,
      "section": "signs",
      "signText": "Parking form\nComplete and give it to security\nCar registration..........\nDate..........",
      "vietnameseSignTranslation": "Mẫu đơn gửi xe\nĐiền đầy đủ và nộp cho bảo vệ\nBiển số đăng ký xe..........\nNgày..........",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "Register your car here by filling in this form.",
          "vietnameseSub": "Đăng ký xe của bạn tại đây bằng cách điền vào mẫu này."
        },
        {
          "key": "B",
          "text": "Go to security to fill in this form.",
          "vietnameseSub": "Đến gặp bảo vệ để điền mẫu đơn này."
        },
        {
          "key": "C",
          "text": "Bring the completed form to security.",
          "vietnameseSub": "Mang mẫu đơn đã điền hoàn chỉnh nộp cho bảo vệ (đúng)."
        },
        {
          "key": "D",
          "text": "Ask security to give this form before parking car.",
          "vietnameseSub": "Yêu cầu bảo vệ đưa mẫu này trước khi đỗ xe."
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. Bring the completed form to security. Lệnh \"Complete and give it to security\" nghĩa là sau khi hoàn thành điền phiếu, hãy đem nộp lại cho nhân viên an ninh bảo vệ."
    },
    {
      "id": "t9_s2",
      "number": 12,
      "section": "signs",
      "signText": "Allow at least two hours for your visit to the museum.",
      "vietnameseSignTranslation": "Hãy dành ra ít nhất hai tiếng đồng hồ cho chuyến tham quan viện bảo tàng.",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "Each tour of the museum lasts less than two hours.",
          "vietnameseSub": "Mỗi chuyến tham quan bảo tàng kéo dài ít hơn 2 tiếng."
        },
        {
          "key": "B",
          "text": "Two hours is the minimum time recommended for a visit to the museum.",
          "vietnameseSub": "Hai tiếng là thời lượng tối thiểu được khuyến nghị cho chuyến tham quan bảo tàng (đúng)."
        },
        {
          "key": "C",
          "text": "Visitors only have two hours to visit the museum.",
          "vietnameseSub": "Du khách chỉ có đúng 2 tiếng để tham quan."
        },
        {
          "key": "D",
          "text": "Visitors are only allowed to spend two hours inside the museum.",
          "vietnameseSub": "Du khách chỉ được phép ở trong bảo tàng tối đa 2 tiếng."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. \"at least two hours\" nghĩa là tối thiểu 2 giờ (minimum time recommended)."
    },
    {
      "id": "t9_s3",
      "number": 13,
      "section": "signs",
      "signText": "More parking spaces behind the hotel",
      "vietnameseSignTranslation": "Có thêm nhiều chỗ đỗ xe ở phía sau khách sạn",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "It is better to park behind the hotel.",
          "vietnameseSub": "Tốt hơn là nên đỗ xe ở phía sau khách sạn (đúng)."
        },
        {
          "key": "B",
          "text": "Don't park in front of this hotel.",
          "vietnameseSub": "Không được đỗ xe ở phía trước khách sạn này."
        },
        {
          "key": "C",
          "text": "A new hotel car park is opening soon.",
          "vietnameseSub": "Bãi đỗ xe mới sắp khai trương."
        },
        {
          "key": "D",
          "text": "Parking car has been moved behind the hotel.",
          "vietnameseSub": "Chỗ đỗ xe đã được chuyển ra phía sau."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. It is better to park behind the hotel. Biển thông báo nhằm hướng dẫn tài xế rằng phía sau khách sạn còn nhiều chỗ rộng rãi hơn, do đó nên đỗ xe ở phía sau."
    },
    {
      "id": "t9_s4",
      "number": 14,
      "section": "signs",
      "signText": "City buses\nPlease have ready the exact fare for your journey",
      "vietnameseSignTranslation": "Xe buýt thành phố\nXin vui lòng chuẩn bị sẵn đúng số tiền vé cho chuyến đi của bạn",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "You need the right ticket for your journey.",
          "vietnameseSub": "Bạn cần đúng vé cho hành trình của mình."
        },
        {
          "key": "B",
          "text": "You need to keep your ticket ready for checking.",
          "vietnameseSub": "Bạn cần chuẩn bị sẵn vé để nhân viên soát vé kiểm tra."
        },
        {
          "key": "C",
          "text": "Ticket must be bought before boarding the bus.",
          "vietnameseSub": "Vé phải được mua trước khi bước lên xe."
        },
        {
          "key": "D",
          "text": "You need to have the correct money when you board the bus.",
          "vietnameseSub": "Bạn cần có sẵn đúng số tiền xu/tiền vé lẻ khi lên xe buýt (đúng)."
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. You need to have the correct money when you board the bus. \"exact fare\" (tiền vé chính xác) đồng nghĩa với \"the correct money\", tài xế xe buýt không có tiền thừa thối lại."
    },
    {
      "id": "t9_s5",
      "number": 15,
      "section": "signs",
      "signText": "Nothing of value is left in this car at night",
      "vietnameseSignTranslation": "Không để lại bất kỳ vật dụng có giá trị nào trong chiếc xe này vào ban đêm",
      "question": "Look at the text in the question. What does it say?",
      "options": [
        {
          "key": "A",
          "text": "This car is not available at night.",
          "vietnameseSub": "Xe này không hoạt động vào ban đêm."
        },
        {
          "key": "B",
          "text": "Valuable objects are removed at night.",
          "vietnameseSub": "Các vật dụng có giá trị đều được dọn/mang ra khỏi xe vào ban đêm (đúng)."
        },
        {
          "key": "C",
          "text": "This car is locked at night.",
          "vietnameseSub": "Chiếc xe này bị khóa chặt vào ban đêm."
        },
        {
          "key": "D",
          "text": "This car contains nothing of value.",
          "vietnameseSub": "Chiếc xe này tự nó không có giá trị gì."
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. Valuable objects are removed at night. Biển dán trên cửa kính xe để cảnh báo kẻ trộm rằng mọi đồ đạc quý giá đều đã được chủ xe mang ra ngoài cất giữ."
    }
  ],
  "readingPassageBTitle": "AVOIDING TRAVEL AILMENTS",
  "readingPassageBTag": "Passage B: Reading Comprehension",
  "readingTonyPassage": "People who traveled frequently on business or pleasure often suffer from health problems, yet over half of these problems can be easily prevented. The most common ailment, a headache, can be avoided by taking along an ample supply of aspirins or other pain relievers. Another common affliction is motion sickness caused by the constant movement of a vehicle. Ginger capsules, sold in most health-food stores, have been found effective as remedy. Other familiar problems include sunburn, which can be prevented by using an effective sunscreen, and insect bites, which can be controlled with a repellent spray or ointment. For everyday cuts and scratches, a first-aid kit containing bandages and antiseptic cream is recommended.",
  "readingTonyTranslation": "Những người thường xuyên đi công tác hoặc du lịch thường hay gặp phải các vấn đề về sức khỏe, thế nhưng hơn một nửa số vấn đề này có thể phòng tránh được một cách dễ dàng. Căn bệnh phổ biến nhất là chứng đau đầu, có thể tránh được bằng cách mang theo một lượng dự trữ thuốc aspirin hoặc các loại thuốc giảm đau khác. Một chứng bệnh phiền toái phổ biến khác là say tàu xe do sự chuyển động liên tục của phương tiện. Viên nang gừng, được bày bán ở hầu hết các cửa hàng thực phẩm chức năng, đã được chứng minh là một bài thuốc chữa trị rất hiệu nghiệm. Những vấn đề quen thuộc khác bao gồm cháy nắng, có thể ngăn ngừa bằng cách sử dụng kem chống nắng chất lượng, và côn trùng cắn, có thể kiểm soát bằng bình xịt hoặc thuốc mỡ chống côn trùng. Đối với các vết cắt và vết trầy xước thông thường hằng ngày, một hộp sơ cứu nhỏ chứa băng dán cá nhân và kem sát trùng là vật dụng luôn được khuyên mang theo.",
  "readingTonyQuestions": [
    {
      "id": "t9_r1",
      "number": 16,
      "section": "passageB",
      "question": "What is the best title for the passage?",
      "options": [
        {
          "key": "A",
          "text": "Common Health Problems",
          "vietnameseSub": "Các vấn đề sức khỏe thường gặp"
        },
        {
          "key": "B",
          "text": "Frequent Travelers",
          "vietnameseSub": "Những hành khách đi lại thường xuyên"
        },
        {
          "key": "C",
          "text": "Avoiding Travel Ailments",
          "vietnameseSub": "Cách phòng tránh các chứng bệnh khi đi du lịch (đúng)"
        },
        {
          "key": "D",
          "text": "Traveling for Business or Pleasure",
          "vietnameseSub": "Du lịch vì công vụ hay giải trí"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. Avoiding Travel Ailments. Xuyên suốt bài viết tập trung hướng dẫn người đi du lịch các biện pháp phòng ngừa những bệnh thường gặp (đau đầu, say xe, cháy nắng, côn trùng cắn)."
    },
    {
      "id": "t9_r2",
      "number": 17,
      "section": "passageB",
      "question": "According to the passage, travelers are most commonly bothered by ______.",
      "options": [
        {
          "key": "A",
          "text": "sunburn",
          "vietnameseSub": "cháy nắng"
        },
        {
          "key": "B",
          "text": "insect bites",
          "vietnameseSub": "côn trùng cắn"
        },
        {
          "key": "C",
          "text": "headaches",
          "vietnameseSub": "chứng đau đầu (đúng)"
        },
        {
          "key": "D",
          "text": "motion sickness",
          "vietnameseSub": "say tàu xe"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. headaches. Đoạn văn khẳng định rõ: \"The most common ailment, a headache, can be avoided...\""
    },
    {
      "id": "t9_r3",
      "number": 18,
      "section": "passageB",
      "question": "The word affliction can best be replaced by ______.",
      "options": [
        {
          "key": "A",
          "text": "ailment",
          "vietnameseSub": "bệnh tật, chứng bệnh (đúng)"
        },
        {
          "key": "B",
          "text": "result",
          "vietnameseSub": "kết quả"
        },
        {
          "key": "C",
          "text": "experience",
          "vietnameseSub": "trải nghiệm"
        },
        {
          "key": "D",
          "text": "supply",
          "vietnameseSub": "nguồn cung ứng"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. ailment. Trong ngữ cảnh y học mô tả bệnh tật say xe, \"affliction\" (nỗi khổ sở, bệnh tật gây phiền toái) đồng nghĩa với \"ailment\" (chứng ốm vặt, bệnh tật)."
    },
    {
      "id": "t9_r4",
      "number": 19,
      "section": "passageB",
      "question": "According to the passage, what can be used to remedy to motion sickness?",
      "options": [
        {
          "key": "A",
          "text": "A moving vehicle",
          "vietnameseSub": "Một phương tiện đang di chuyển"
        },
        {
          "key": "B",
          "text": "Pain-killers",
          "vietnameseSub": "Thuốc giảm đau thông thường"
        },
        {
          "key": "C",
          "text": "Ginger capsules",
          "vietnameseSub": "Viên nang gừng (đúng)"
        },
        {
          "key": "D",
          "text": "A first-aid kit",
          "vietnameseSub": "Bộ dụng cụ sơ cứu"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. Ginger capsules. Bài viết nêu rõ: \"Ginger capsules, sold in most health-food stores, have been found effective as remedy.\""
    },
    {
      "id": "t9_r5",
      "number": 20,
      "section": "passageB",
      "question": "Which of the following is NOT mentioned in the passage as a solution to a health problem?",
      "options": [
        {
          "key": "A",
          "text": "sunscreen",
          "vietnameseSub": "kem chống nắng (có nhắc để ngừa cháy nắng)"
        },
        {
          "key": "B",
          "text": "repellent spray",
          "vietnameseSub": "thuốc xịt chống côn trùng (có nhắc)"
        },
        {
          "key": "C",
          "text": "cold cream",
          "vietnameseSub": "kem dưỡng làm mát da (không hề được nhắc tới - đúng)"
        },
        {
          "key": "D",
          "text": "aspirin",
          "vietnameseSub": "thuốc aspirin (có nhắc để trị đau đầu)"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. cold cream. Bài viết nhắc đến: aspirin, ginger capsules, sunscreen, repellent spray, antiseptic cream, nhưng hoàn toàn KHÔNG nhắc đến \"cold cream\"."
    }
  ],
  "readingPassageCTitle": "HOLIDAYS: PACKAGE TOUR OR ON YOUR OWN?",
  "readingPassageCTag": "Passage C: Cloze Test",
  "readingAnnaPassage": "HOLIDAYS\nIs it better to go on a package tour, or to (1)........ on your own? I suppose the answer depends on what kind of (2)........ you are. A complicated tour organized by a travel (3)........ has some advantages. You have an itinerary, which gives you definite (4)........ and arrival dates, and a list of all your (5)........ . The accommodation may be cheaper, as it has been (6)........ in advance, so you spend less time worrying about where are you going to (7)........ . If you book your own hotel, you might have trouble finding a/an vacancy, unless you are going to stay for a (8)........, for example. On the other hand, organizing your own (9)........ can be fun. Many students (10)........ or buy cheap train tickets, and spend the night in students hostels or guest-houses.",
  "readingAnnaTranslation": "KỲ NGHỈ: DU LỊCH TRỌN GÓI HAY TỰ TÚC?\nĐi theo một chuyến du lịch trọn gói hay tự mình đi du lịch thì tốt hơn? Tôi cho rằng câu trả lời tùy thuộc vào việc bạn là kiểu khách du lịch nào. Một chuyến du ngoạn phức tạp được tổ chức bởi một đại lý lữ hành mang lại một vài lợi thế rõ rệt. Bạn có một lịch trình chi tiết cung cấp chính xác ngày khởi hành và ngày đến, cùng một danh sách tất cả các điểm đến của bạn. Chỗ ở có thể rẻ hơn do đã được đặt trước với số lượng lớn, vì thế bạn tốn ít thời gian lo lắng về việc mình sẽ ở đâu. Nếu bạn tự đặt khách sạn cho riêng mình, bạn có thể gặp khó khăn trong việc tìm phòng trống, trừ phi bạn dự định ở lại trong khoảng thời gian hai tuần, chẳng hạn. Mặt khác, việc tự mình lên kế hoạch cho một chuyến đi cũng có thể rất hào hứng. Rất nhiều sinh viên chọn cách đi nhờ xe quá giang hoặc săn vé tàu giá rẻ, rồi nghỉ đêm trong các khu nhà trọ sinh viên hoặc nhà khách gia đình.",
  "readingAnnaQuestions": [
    {
      "id": "t9_c1",
      "number": 21,
      "section": "cloze",
      "question": "Choose the best word for blank (1):",
      "options": [
        {
          "key": "A",
          "text": "travel",
          "vietnameseSub": "đi du lịch (travel on your own - đúng)"
        },
        {
          "key": "B",
          "text": "trip",
          "vietnameseSub": "danh từ chuyến đi"
        },
        {
          "key": "C",
          "text": "voyage",
          "vietnameseSub": "chuyến hải trình"
        },
        {
          "key": "D",
          "text": "tourist",
          "vietnameseSub": "du khách"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. travel. Cấu trúc song hành với \"to go on a package tour\": \"or to travel on your own\" (hoặc tự mình đi du lịch)."
    },
    {
      "id": "t9_c2",
      "number": 22,
      "section": "cloze",
      "question": "Choose the best word for blank (2):",
      "options": [
        {
          "key": "A",
          "text": "voyager",
          "vietnameseSub": "người đi biển"
        },
        {
          "key": "B",
          "text": "passenger",
          "vietnameseSub": "hành khách đi xe"
        },
        {
          "key": "C",
          "text": "tourist",
          "vietnameseSub": "khách du lịch (đúng)"
        },
        {
          "key": "D",
          "text": "mover",
          "vietnameseSub": "người vận chuyển"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. tourist. Cụm \"what kind of tourist you are\" (bạn là mẫu người/du khách như thế nào)."
    },
    {
      "id": "t9_c3",
      "number": 23,
      "section": "cloze",
      "question": "Choose the best word for blank (3):",
      "options": [
        {
          "key": "A",
          "text": "office",
          "vietnameseSub": "văn phòng"
        },
        {
          "key": "B",
          "text": "agent",
          "vietnameseSub": "đại lý (travel agent - đúng)"
        },
        {
          "key": "C",
          "text": "tour",
          "vietnameseSub": "chuyến tham quan"
        },
        {
          "key": "D",
          "text": "operation",
          "vietnameseSub": "hoạt động điều hành"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. agent. Cụm danh từ cố định \"travel agent\" (công ty/đại lý lữ hành du lịch)."
    },
    {
      "id": "t9_c4",
      "number": 24,
      "section": "cloze",
      "question": "Choose the best word for blank (4):",
      "options": [
        {
          "key": "A",
          "text": "departure",
          "vietnameseSub": "sự khởi hành (departure and arrival dates - đúng)"
        },
        {
          "key": "B",
          "text": "parting",
          "vietnameseSub": "sự chia tay"
        },
        {
          "key": "C",
          "text": "leave",
          "vietnameseSub": "nghỉ phép"
        },
        {
          "key": "D",
          "text": "quitting",
          "vietnameseSub": "sự từ bỏ"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. departure. Cặp từ đối lập quen thuộc trong lịch trình vé xe/vé máy bay: \"departure and arrival dates\" (ngày khởi hành và ngày đến)."
    },
    {
      "id": "t9_c5",
      "number": 25,
      "section": "cloze",
      "question": "Choose the best word for blank (5):",
      "options": [
        {
          "key": "A",
          "text": "cancellations",
          "vietnameseSub": "sự hủy chuyến"
        },
        {
          "key": "B",
          "text": "expeditions",
          "vietnameseSub": "các cuộc thám hiểm"
        },
        {
          "key": "C",
          "text": "organisations",
          "vietnameseSub": "các tổ chức"
        },
        {
          "key": "D",
          "text": "destinations",
          "vietnameseSub": "các điểm đến du lịch (đúng)"
        }
      ],
      "correctAnswer": "D",
      "explanation": "Đáp án D. destinations. \"a list of all your destinations\" (danh sách toàn bộ các điểm dừng chân tham quan)."
    },
    {
      "id": "t9_c6",
      "number": 26,
      "section": "cloze",
      "question": "Choose the best word for blank (6):",
      "options": [
        {
          "key": "A",
          "text": "preserved",
          "vietnameseSub": "được bảo tồn"
        },
        {
          "key": "B",
          "text": "booked",
          "vietnameseSub": "được đặt trước (has been booked in advance - đúng)"
        },
        {
          "key": "C",
          "text": "reservation",
          "vietnameseSub": "danh từ sự đặt chỗ"
        },
        {
          "key": "D",
          "text": "hotels",
          "vietnameseSub": "khách sạn"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. booked. Thể bị động thì Hiện tại hoàn thành: \"has been booked in advance\" (đã được đặt trước)."
    },
    {
      "id": "t9_c7",
      "number": 27,
      "section": "cloze",
      "question": "Choose the best word for blank (7):",
      "options": [
        {
          "key": "A",
          "text": "stay",
          "vietnameseSub": "lưu trú, ở lại (where you are going to stay - đúng)"
        },
        {
          "key": "B",
          "text": "pass",
          "vietnameseSub": "đi ngang qua"
        },
        {
          "key": "C",
          "text": "live",
          "vietnameseSub": "sống lâu dài"
        },
        {
          "key": "D",
          "text": "cross",
          "vietnameseSub": "băng qua"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. stay. Đi du lịch nghỉ lại khách sạn dùng động từ \"stay\" (lưu trú tạm thời)."
    },
    {
      "id": "t9_c8",
      "number": 28,
      "section": "cloze",
      "question": "Choose the best word for blank (8):",
      "options": [
        {
          "key": "A",
          "text": "fortnight",
          "vietnameseSub": "hai tuần lễ (a fortnight - đúng)"
        },
        {
          "key": "B",
          "text": "daytime",
          "vietnameseSub": "ban ngày"
        },
        {
          "key": "C",
          "text": "fifteen days",
          "vietnameseSub": "15 ngày (không đi với mạo từ \"a\")"
        },
        {
          "key": "D",
          "text": "passage",
          "vietnameseSub": "lối đi"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Đáp án A. fortnight. Danh từ đếm được số ít \"a fortnight\" (khoảng thời gian 14 ngày/2 tuần)."
    },
    {
      "id": "t9_c9",
      "number": 29,
      "section": "cloze",
      "question": "Choose the best word for blank (9):",
      "options": [
        {
          "key": "A",
          "text": "voyage",
          "vietnameseSub": "chuyến hải hành dài ngày"
        },
        {
          "key": "B",
          "text": "expedition",
          "vietnameseSub": "chuyến thám hiểm khoa học"
        },
        {
          "key": "C",
          "text": "trip",
          "vietnameseSub": "chuyến đi chơi, chuyến du hành (đúng)"
        },
        {
          "key": "D",
          "text": "package",
          "vietnameseSub": "gói hàng"
        }
      ],
      "correctAnswer": "C",
      "explanation": "Đáp án C. trip. Cụm diễn đạt thông dụng: \"organizing your own trip\" (tự lên kế hoạch cho chuyến đi của chính mình)."
    },
    {
      "id": "t9_c10",
      "number": 30,
      "section": "cloze",
      "question": "Choose the best word for blank (10):",
      "options": [
        {
          "key": "A",
          "text": "auto-stop",
          "vietnameseSub": "từ vựng vay mượn tiếng Pháp"
        },
        {
          "key": "B",
          "text": "hitch-hike",
          "vietnameseSub": "đi nhờ xe, xin đi quá giang (đúng)"
        },
        {
          "key": "C",
          "text": "lift",
          "vietnameseSub": "cho đi nhờ (give a lift)"
        },
        {
          "key": "D",
          "text": "journey",
          "vietnameseSub": "cuộc hành trình"
        }
      ],
      "correctAnswer": "B",
      "explanation": "Đáp án B. hitch-hike. Động từ \"hitch-hike\" nghĩa là đứng bên đường vẫy tay xin đi nhờ xe miễn phí của người đi đường."
    }
  ],
  "sentenceTransformations": [
    {
      "id": "t9_w1",
      "number": 31,
      "originalSentence": "How much are these earrings?",
      "vietnameseTranslation": "Đôi hoa tai này giá bao nhiêu tiền?",
      "prefix": "What is",
      "modelAnswer": "What is the price of these earrings?",
      "vietnameseModelTranslation": "Giá của đôi hoa tai này là bao nhiêu?",
      "acceptedAnswers": [
        "the price of these earrings?",
        "the price of these earrings",
        "the cost of these earrings?",
        "the cost of these earrings"
      ],
      "grammarPoint": "Chuyển đổi câu hỏi giá tiền: How much + be + S? = What is the price/cost of + S?"
    },
    {
      "id": "t9_w2",
      "number": 32,
      "originalSentence": "I went to the zoo last year and that was where I saw a real tiger for the first time.",
      "vietnameseTranslation": "Năm ngoái tôi đến sở thú và đó là nơi đầu tiên tôi được nhìn thấy một con hổ thật.",
      "prefix": "Before I went to the zoo last year, I had",
      "modelAnswer": "Before I went to the zoo last year, I had never seen a real tiger.",
      "vietnameseModelTranslation": "Trước khi đến sở thú vào năm ngoái, tôi chưa từng bao giờ nhìn thấy một con hổ thật.",
      "acceptedAnswers": [
        "never seen a real tiger.",
        "never seen a real tiger",
        "not seen a real tiger before.",
        "not seen a real tiger before"
      ],
      "grammarPoint": "Diễn tả trải nghiệm lần đầu tiên bằng thì Quá khứ hoàn thành: S + had never + V3/ed + before."
    },
    {
      "id": "t9_w3",
      "number": 33,
      "originalSentence": "The man was poor so he could not afford accommodation.",
      "vietnameseTranslation": "Người đàn ông đó nghèo nên anh ta không có đủ khả năng chi trả tiền chỗ ở.",
      "prefix": "If the man had not been poor, he could",
      "modelAnswer": "If the man had not been poor, he could have afforded accommodation.",
      "vietnameseModelTranslation": "Nếu người đàn ông đó không nghèo, anh ta đã có thể chi trả được tiền chỗ ở.",
      "acceptedAnswers": [
        "have afforded accommodation.",
        "have afforded accommodation",
        "have paid for accommodation.",
        "have paid for accommodation"
      ],
      "grammarPoint": "Câu điều kiện loại 3 (giả định trái với quá khứ): If + S + had (not) + V3/ed, S + could/would + have + V3/ed."
    },
    {
      "id": "t9_w4",
      "number": 34,
      "originalSentence": "My teacher gave me a lot of homework.",
      "vietnameseTranslation": "Giáo viên của tôi đã giao cho tôi rất nhiều bài tập về nhà.",
      "prefix": "I wish my teacher",
      "modelAnswer": "I wish my teacher hadn't given me a lot of homework.",
      "vietnameseModelTranslation": "Tôi ước gì giáo viên đã không giao cho tôi nhiều bài tập về nhà như thế.",
      "acceptedAnswers": [
        "hadn't given me a lot of homework.",
        "hadn't given me a lot of homework",
        "had not given me a lot of homework.",
        "had not given me a lot of homework"
      ],
      "grammarPoint": "Câu ước cho sự việc đã xảy ra trong quá khứ (past regret): S + wish + S + had(n't) + V3/ed."
    },
    {
      "id": "t9_w5",
      "number": 35,
      "originalSentence": "He didn't obey with his parents.",
      "vietnameseTranslation": "Cậu ấy đã không vâng lời cha mẹ.",
      "prefix": "I'd rather he had",
      "modelAnswer": "I'd rather he had obeyed his parents.",
      "vietnameseModelTranslation": "Tôi muốn cậu ấy đã vâng lời cha mẹ mình hơn.",
      "acceptedAnswers": [
        "obeyed his parents.",
        "obeyed his parents",
        "listened to his parents.",
        "listened to his parents"
      ],
      "grammarPoint": "Cấu trúc would rather mong muốn người khác đã làm việc gì trong quá khứ: S + would rather + S + had + V3/ed."
    }
  ],
  "letterWriting": {
    "prompt": "Write a letter (about 120 words) to your friend/colleague/parents/relatives about your last holiday.\\n- Where did you go?\\n- What did you do?\\n- Who did you spend your holiday with?\\n- Did you enjoy it? Why/Why not?",
    "vietnamesePrompt": "Viết một lá thư (khoảng 120 từ) gửi cho bạn bè/đồng nghiệp/bố mẹ/người thân kể về kỳ nghỉ gần đây nhất của bạn.\\n- Bạn đã đi đâu?\\n- Bạn đã làm những gì?\\n- Bạn đã trải qua kỳ nghỉ cùng với ai?\\n- Bạn có thích kỳ nghỉ đó không? Tại sao có/tại sao không?",
    "requiredWordCount": "100 - 140 words",
    "sample1": {
      "title": "Bài mẫu 1: Kỳ nghỉ hè tại Nha Trang (Tài liệu giáo trình)",
      "content": "Hello John,\n\nLast summer, my family and I spent our holiday in Nha Trang. We went there by coach and stayed in a small hotel near the beach.\n\nDuring the trip, we swam in the sea every morning and walked along the beach in the evening. We also visited some islands by boat and tried many kinds of fresh seafood. On the last day, we went shopping for souvenirs.\n\nI really enjoyed the holiday because the weather was great, the people were friendly and I spent wonderful time with my family. It helped us relax after a long school year.\n\nI hope we can travel together next time. Write soon!\n\nLove,\nNam"
    },
    "sample2": {
      "title": "Bài mẫu 2: Kỳ nghỉ khám phá Phú Yên cùng bạn bè (Phan Tấn Kiệt)",
      "content": "Dear David,\n\nHow are you doing? I am writing to tell you about my wonderful holiday last month. My friends and I took a trip to explore the coastal attractions around my home province, Phu Yen.\n\nWe traveled mainly by motorbike and stayed at a peaceful homestay right next to the beach. Every morning, we woke up early to watch the sunrise at Dai Lanh Cape, which was absolutely breathtaking. In the afternoons, we went swimming in the clear blue sea and enjoyed delicious local specialties like fresh ocean tuna and seafood pancakes.\n\nI enjoyed this trip tremendously because the natural scenery was magnificent and it gave me a great opportunity to unwind after stressful exams at university.\n\nI hope you can visit me soon so we can travel together!\n\nWarm regards,\nPhan Tan Kiet"
    }
  },
  "speakingCard": {
    "cardTitle": "SPEAKING CARD – No.9: Talk about the advantages of public transport in big cities",
    "cardSubtitle": "Nói về những lợi ích của phương tiện giao thông công cộng ở các thành phố lớn",
    "questions": [
      {
        "q": "What are social advantages of public transport?",
        "vi": "Những lợi ích về mặt xã hội của giao thông công cộng là gì?"
      },
      {
        "q": "What are economic advantages of public transport?",
        "vi": "Những lợi ích về mặt kinh tế của giao thông công cộng là gì?"
      },
      {
        "q": "What are environmental advantages of public transport?",
        "vi": "Những lợi ích về mặt môi trường của giao thông công cộng là gì?"
      }
    ],
    "sampleAnswers": [
      {
        "speaker": "Bài mẫu 1 (Theo tài liệu giáo trình)",
        "textEn": "Public transport plays an important role in big cities, and it brings many benefits to people and society.\nFirst, about the social advantages. Public transport gives people the chance to meet and talk to others. It is also safer and more relaxing than driving in heavy traffic, and people can walk to the bus stop, which is good for their health.\nSecond, it is cheaper. You don't have to pay for parking, insurance, repairs or petrol, so you can save a lot of money. The city also spends less on building new roads.\nFinally, there are environmental benefits. When more people take buses, trains or trams, there are fewer cars and motorbikes on the road, so there is less traffic, air pollution and noise. In short, public transport makes our cities cleaner and more comfortable.",
        "textVi": "Giao thông công cộng đóng một vai trò hết sức quan trọng tại các thành phố lớn và nó mang lại vô vàn lợi ích cho người dân cũng như toàn xã hội.\nThứ nhất, xét về lợi ích xã hội: Phương tiện công cộng tạo cơ hội để mọi người gặp gỡ, trò chuyện với nhau. Đi xe công cộng cũng an toàn và thư thái hơn nhiều so với việc phải tự lái xe căng thẳng giữa dòng xe cộ đông đúc, hơn nữa việc đi bộ ra trạm xe buýt cũng rất tốt cho sức khỏe.\nThứ hai, nó tiết kiệm chi phí hơn rất nhiều. Bạn không phải trả tiền gửi xe, phí bảo hiểm, tiền bảo dưỡng hay tiền xăng xe, vì thế bạn tiết kiệm được một khoản tiền đáng kể. Thành phố cũng giảm bớt gánh nặng chi phí xây dựng thêm đường sá mới.\nCuối cùng là lợi ích về môi trường. Khi có thêm nhiều người đi xe buýt, tàu hỏa hoặc tàu điện, số lượng ô tô và xe máy cá nhân trên đường sẽ giảm đi, nhờ đó giảm bớt ùn tắc, ô nhiễm không khí và tiếng ồn. Tóm lại, giao thông công cộng làm cho các thành phố của chúng ta trở nên xanh sạch và tiện nghi hơn."
      },
      {
        "speaker": "Bài mẫu 2 (Theo ngữ cảnh sinh viên - Phan Tấn Kiệt)",
        "textEn": "In my view, investing in public transport is a vital requirement for any developing urban area.\nFrom a social standpoint, reliable buses and commuter trains make travel accessible and safe for everyone, especially students and elderly residents who cannot drive.\nFrom an economic viewpoint, taking public transit saves a great deal of personal money on fuel, parking fees, and motorbike maintenance every single month.\nMost importantly, from an environmental perspective, buses and trains transport dozens of passengers at once, substantially cutting down exhaust fumes and urban traffic jams. Therefore, using public transit is a smart and sustainable choice for modern life.",
        "textVi": "Theo góc nhìn của tôi, việc phát triển giao thông công cộng là một đòi hỏi vô cùng quan trọng đối với mọi đô thị đang phát triển.\nVề mặt xã hội, các tuyến xe buýt và tàu đô thị mang lại phương tiện đi lại an toàn và thuận tiện cho tất cả mọi người, đặc biệt là sinh viên và người cao tuổi.\nVề mặt kinh tế, sử dụng phương tiện công cộng giúp tiết kiệm một khoản chi phí đáng kể mỗi tháng cho xăng dầu, phí gửi xe và bảo dưỡng xe máy cá nhân.\nQuan trọng nhất, về mặt môi trường, việc di chuyển tập thể giúp cắt giảm đáng kể lượng khí thải độc hại và giải quyết tình trạng kẹt xe đô thị. Do đó, đi lại bằng phương tiện công cộng là một lựa chọn thông minh và bền vững cho cuộc sống hiện đại."
      }
    ]
  },
  "listeningPartA": [
    {
      "number": 1,
      "question": "What was damaged in the storm?",
      "options": [
        "A: Roof of the house",
        "B: Fallen tree",
        "C: Garden fence"
      ],
      "answer": "A",
      "note": "Phán đoán hư hại sau cơn bão"
    },
    {
      "number": 2,
      "question": "What present does the man decide to take?",
      "options": [
        "A: Bunch of flowers",
        "B: Box of chocolates",
        "C: Bottle of wine"
      ],
      "answer": "B",
      "note": "Phán đoán món quà người đàn ông mang theo"
    },
    {
      "number": 3,
      "question": "Which is the woman's jacket?",
      "options": [
        "A: Short light jacket",
        "B: Long coat",
        "C: Patterned jacket"
      ],
      "answer": "A",
      "note": "Phán đoán chiếc áo khoác của người phụ nữ"
    },
    {
      "number": 4,
      "question": "Which sport is not included in the price of the holiday?",
      "options": [
        "A: Water skiing",
        "B: Tennis",
        "C: Sailing"
      ],
      "answer": "A",
      "note": "Phán đoán môn thể thao tính phí phụ thu ngoài tour"
    },
    {
      "number": 5,
      "question": "Which postcard will they send?",
      "options": [
        "A: City postcard",
        "B: Beach postcard",
        "C: Castle postcard"
      ],
      "answer": "B",
      "note": "Phán đoán bưu thiếp họ chọn gửi"
    },
    {
      "number": 6,
      "question": "Where do they decide to go?",
      "options": [
        "A: Cinema",
        "B: Restaurant",
        "C: Park"
      ],
      "answer": "A",
      "note": "Phán đoán địa điểm họ quyết định đến"
    },
    {
      "number": 7,
      "question": "What will the boy do first?",
      "options": [
        "A: Finish his homework",
        "B: Phone his friend",
        "C: Eat lunch"
      ],
      "answer": "A",
      "note": "Phán đoán hành động bạn nam sẽ làm trước tiên"
    }
  ],
  "listeningPartB": {
    "title": "HISTORIC PLACES TO VISIT (Listen and fill in the missing information)",
    "items": [
      {
        "gap": 1,
        "text": "Black Rock Caves: For half a million years, people and animals, especially (1)........, lived here",
        "answer": "bears"
      },
      {
        "gap": 2,
        "text": "Black Rock Caves: Special evening tours during the month of (2)........",
        "answer": "August"
      },
      {
        "gap": 3,
        "text": "Salter House: Built in the year (3)........",
        "answer": "1765"
      },
      {
        "gap": 4,
        "text": "Salter House: All visitors want to see Dorothy's (4)........",
        "answer": "bedroom"
      },
      {
        "gap": 5,
        "text": "The Old Port: Have a ride on an old tram to the (5)........ village",
        "answer": "fishing"
      },
      {
        "gap": 6,
        "text": "The Old Port: In the factory, find out how people used to make (6)........",
        "answer": "ropes"
      }
    ],
    "note": "Lưu ý: Các câu hỏi điền từ vào chỗ trống dựa trên chương trình giới thiệu địa danh lịch sử (Black Rock Caves, Salter House, The Old Port)."
  }
};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC9 = EXAM_DATA_TOPIC9;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC9;
}
