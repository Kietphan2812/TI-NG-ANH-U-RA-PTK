// Script tạo tự động dữ liệu Topic 8: WEATHER
// Nguồn: Đề thi và tài liệu ôn tập chuẩn Tiếng Anh Đầu Ra
const fs = require('fs');

const topic8Data = {
  topicId: 'topic8',
  topicTitle: 'TOPIC 8: WEATHER',
  topicSubtitle: 'Thời tiết & Khí hậu (So sánh hơn, so sánh nhất, liên từ neither...nor, Đọc hiểu Thời tiết nước Anh & Quan hệ Thầy trò tại Mỹ)',

  vocabulary: [
    { word: 'lightning', ipa: '/ˈlaɪtnɪŋ/', pos: 'n.', meaning: 'sét, tia chớp', example: 'Don\'t stand under tall trees during a thunderstorm or you could get struck by lightning!' },
    { word: 'thunderstorm', ipa: '/ˈθʌndəstɔːm/', pos: 'n.', meaning: 'cơn dông bão có sấm sét', example: 'A sudden heavy thunderstorm caused localized flooding in the city streets.' },
    { word: 'global warming', ipa: '/ˌɡləʊbl ˈwɔːmɪŋ/', pos: 'n. phr.', meaning: 'sự nóng lên toàn cầu', example: 'Global warming is making the Earth\'s average surface temperature rise each year.' },
    { word: 'greenhouse effect', ipa: '/ˈɡriːnhaʊs ɪfekt/', pos: 'n. phr.', meaning: 'hiệu ứng nhà kính', example: 'Excess carbon dioxide emissions intensify the planet\'s greenhouse effect.' },
    { word: 'climate change', ipa: '/ˈklaɪmət tʃeɪndʒ/', pos: 'n. phr.', meaning: 'biến đổi khí hậu', example: 'Scientists warn that climate change causes extreme weather events worldwide.' },
    { word: 'humidity', ipa: '/hjuːˈmɪdəti/', pos: 'n.', meaning: 'độ ẩm không khí', example: 'High humidity in summer makes the afternoon heat feel much more oppressive.' },
    { word: 'hail', ipa: '/heɪl/', pos: 'n.', meaning: 'mưa đá', example: 'Small pellets of ice that fall from the sky during a violent storm are called hail.' },
    { word: 'breeze', ipa: '/briːz/', pos: 'n.', meaning: 'cơn gió nhẹ mát mẻ', example: 'A gentle sea breeze cooled the coastal town during the evening sunset.' },
    { word: 'shower', ipa: '/ˈʃaʊə(r)/', pos: 'n.', meaning: 'cơn mưa rào', example: 'Take an umbrella with you because there might be sudden rain showers this afternoon.' },
    { word: 'frost', ipa: '/frɒst/', pos: 'n.', meaning: 'sương giá, lớp băng tuyết mỏng', example: 'Towards the end of autumn, white frost begins to form on the cold ground.' },
    { word: 'puddle', ipa: '/ˈpʌdl/', pos: 'n.', meaning: 'vũng nước đọng', example: 'Children love wearing rubber boots and jumping into rainwater puddles.' },
    { word: 'changeable', ipa: '/ˈtʃeɪndʒəbl/', pos: 'adj.', meaning: 'dễ thay đổi, thất thường', example: 'The weather in the United Kingdom is famous for being highly changeable.' },
    { word: 'mild', ipa: '/maɪld/', pos: 'adj.', meaning: 'ôn hòa, ấm áp dễ chịu', example: 'The region enjoys a mild winter climate with very little snowfall.' },
    { word: 'temperature', ipa: '/ˈtemprətʃə(r)/', pos: 'n.', meaning: 'nhiệt độ', example: 'In winter, the temperature will often drop to zero degrees Celsius.' },
    { word: 'degrees Celsius', ipa: '/dɪˈɡriːz ˈselsiəs/', pos: 'n. phr.', meaning: 'độ C', example: 'Water freezes into ice at zero degrees Celsius.' },
    { word: 'forecast', ipa: '/ˈfɔːkɑːst/', pos: 'n./v.', meaning: 'dự báo thời tiết / dự đoán', example: 'The meteorological forecast predicts clear blue skies for the entire weekend.' },
    { word: 'drought', ipa: '/draʊt/', pos: 'n.', meaning: 'hạn hán', example: 'A prolonged drought caused severe water shortages and damaged crops.' },
    { word: 'flood', ipa: '/flʌd/', pos: 'n./v.', meaning: 'lũ lụt / ngập lụt', example: 'Heavy continuous rain caused the local river to overflow and flood the roads.' },
    { word: 'season', ipa: '/ˈsiːzn/', pos: 'n.', meaning: 'mùa trong năm', example: 'Spring is my favourite season because the weather is fresh and flowers bloom.' },
    { word: 'strike', ipa: '/straɪk/', pos: 'v.', meaning: 'đánh trúng, giáng xuống', example: 'Lightning can strike high metal towers during severe summer storms.' }
  ],

  vocabularyQuestions: [
    {
      id: 't8_v1',
      number: 1,
      section: 'vocab',
      question: 'Don\'t worry when you go with me. I drive much ______ than my husband.',
      vietnameseTranslation: 'Đừng lo lắng khi đi cùng tôi. Tôi lái xe cẩn thận hơn chồng tôi nhiều.',
      options: [
        { key: 'A', text: 'carefullier', vietnameseSub: 'sai ngữ pháp' },
        { key: 'B', text: 'more carefully', vietnameseSub: 'cẩn thận hơn (so sánh hơn của trạng từ dài - đúng)' },
        { key: 'C', text: 'carefulliest', vietnameseSub: 'sai ngữ pháp' },
        { key: 'D', text: 'the most carefully', vietnameseSub: 'cẩn thận nhất (so sánh nhất)' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. more carefully. Động từ thường "drive" được bổ nghĩa bởi trạng từ "carefully". "carefully" là trạng từ 3 âm tiết nên cấu trúc so sánh hơn với "than" là "more carefully than".'
    },
    {
      id: 't8_v2',
      number: 2,
      section: 'vocab',
      question: 'Susan hates people who tell lies and ______ do I.',
      vietnameseTranslation: 'Susan ghét những kẻ nói dối và tôi cũng vậy.',
      options: [
        { key: 'A', text: 'nor', vietnameseSub: 'cũng không (dùng với phủ định)' },
        { key: 'B', text: 'neither', vietnameseSub: 'cũng không' },
        { key: 'C', text: 'so', vietnameseSub: 'cũng vậy (đồng tình khẳng định: so + trợ động từ + S - đúng)' },
        { key: 'D', text: 'both', vietnameseSub: 'cả hai' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. so. Mệnh đề trước mang nghĩa khẳng định ("Susan hates..."), để đồng tình khẳng định ta dùng cấu trúc đảo ngữ: "So + trợ động từ + S" -> "so do I" (tôi cũng vậy).'
    },
    {
      id: 't8_v3',
      number: 3,
      section: 'vocab',
      question: 'I think my teacher explains the lessons ______ than your teacher.',
      vietnameseTranslation: 'Tôi nghĩ giáo viên của tôi giảng bài dễ hiểu và rõ ràng hơn giáo viên của bạn.',
      options: [
        { key: 'A', text: 'clearlier', vietnameseSub: 'sai ngữ pháp' },
        { key: 'B', text: 'more clearly', vietnameseSub: 'rõ ràng hơn (so sánh hơn trạng từ dài - đúng)' },
        { key: 'C', text: 'clearliest', vietnameseSub: 'sai ngữ pháp' },
        { key: 'D', text: 'the most clearly', vietnameseSub: 'rõ ràng nhất' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. more clearly. Bổ nghĩa cho động từ "explains" là trạng từ "clearly". So sánh hơn của trạng từ kết thúc bằng -ly đi với "than" là "more clearly than".'
    },
    {
      id: 't8_v4',
      number: 4,
      section: 'vocab',
      question: 'Nam and Hoa listened to Phong\'s explanation, but ______ of them believed him.',
      vietnameseTranslation: 'Nam và Hoa đã lắng nghe lời giải thích của Phong, nhưng không ai trong số hai người họ tin anh ấy.',
      options: [
        { key: 'A', text: 'both', vietnameseSub: 'cả hai người' },
        { key: 'B', text: 'no', vietnameseSub: 'không' },
        { key: 'C', text: 'either', vietnameseSub: 'một trong hai' },
        { key: 'D', text: 'neither', vietnameseSub: 'không ai trong hai người (neither of them - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. neither. "Nam and Hoa" là 2 người. Liên từ "but" diễn tả sự đối lập (lắng nghe nhưng không tin), cấu trúc phủ định giữa 2 người là "neither of them + V_khẳng định" (không ai trong số 2 người).'
    },
    {
      id: 't8_v5',
      number: 5,
      section: 'vocab',
      question: 'Don\'t go outside! You could get ______ by lightning!',
      vietnameseTranslation: 'Đừng ra ngoài! Bạn có thể bị sét đánh trúng đấy!',
      options: [
        { key: 'A', text: 'stroked', vietnameseSub: 'vuốt ve / bị đột quỵ' },
        { key: 'B', text: 'strike', vietnameseSub: 'đánh (nguyên mẫu)' },
        { key: 'C', text: 'struck', vietnameseSub: 'bị đánh trúng (V3 của strike - đúng)' },
        { key: 'D', text: 'stressed', vietnameseSub: 'căng thẳng' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. struck. Cấu trúc bị động: "get + V3/ed". Phân từ quá khứ (V3) của động từ "strike" là "struck": "get struck by lightning" (bị sét đánh trúng).'
    },
    {
      id: 't8_v6',
      number: 6,
      section: 'vocab',
      question: 'Ken, Peter and Bob went to school early this morning, but Ken arrived ______ of them all.',
      vietnameseTranslation: 'Ken, Peter và Bob sáng nay đều đến trường sớm, nhưng Ken là người đến sớm nhất trong số họ.',
      options: [
        { key: 'A', text: 'earlier', vietnameseSub: 'sớm hơn' },
        { key: 'B', text: 'more early', vietnameseSub: 'sai ngữ pháp' },
        { key: 'C', text: 'earliest', vietnameseSub: 'thiếu mạo từ the' },
        { key: 'D', text: 'the earliest', vietnameseSub: 'sớm nhất (so sánh nhất giữa 3 người - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. the earliest. So sánh giữa 3 đối tượng ("Ken, Peter and Bob") với cụm "of them all" bắt buộc dùng dạng so sánh nhất: "the earliest".'
    },
    {
      id: 't8_v7',
      number: 7,
      section: 'vocab',
      question: '______ is making Earth\'s average surface temperature higher. This is a type of greenhouse effect.',
      vietnameseTranslation: 'Hiện tượng nóng lên toàn cầu đang làm nhiệt độ bề mặt trung bình của Trái Đất tăng cao. Đây là một dạng của hiệu ứng nhà kính.',
      options: [
        { key: 'A', text: 'Global warming', vietnameseSub: 'Sự nóng lên toàn cầu (đúng)' },
        { key: 'B', text: 'Thunderstorm', vietnameseSub: 'Cơn dông bão' },
        { key: 'C', text: 'Climate change', vietnameseSub: 'Biến đổi khí hậu' },
        { key: 'D', text: 'Humidity', vietnameseSub: 'Độ ẩm' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Global warming. "Global warming" (hiện tượng nóng lên toàn cầu) là hiện tượng nhiệt độ trung bình của khí quyển và đại dương trên Trái Đất tăng lên do hiệu ứng nhà kính.'
    },
    {
      id: 't8_v8',
      number: 8,
      section: 'vocab',
      question: 'They were late, but they felt lucky because their teacher arrived ______.',
      vietnameseTranslation: 'Họ đã đến muộn, nhưng họ cảm thấy may mắn vì giáo viên của họ còn đến muộn hơn.',
      options: [
        { key: 'A', text: 'later', vietnameseSub: 'muộn hơn (so sánh hơn ngầm định - đúng)' },
        { key: 'B', text: 'the latest', vietnameseSub: 'muộn nhất' },
        { key: 'C', text: 'more late', vietnameseSub: 'sai ngữ pháp' },
        { key: 'D', text: 'latest', vietnameseSub: 'sai' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. later. So sánh hơn giữa thời điểm đến của giáo viên so với nhóm học sinh: giáo viên đến muộn hơn ("arrived later"), vì thế họ mới thấy may mắn.'
    },
    {
      id: 't8_v9',
      number: 9,
      section: 'vocab',
      question: 'Evi was ______ embarrassed nor angry when Victoria told her to shut up.',
      vietnameseTranslation: 'Evi không hề bối rối mà cũng chẳng tức giận khi Victoria bảo cô ấy im mồm.',
      options: [
        { key: 'A', text: 'both', vietnameseSub: 'cả hai (đi với and)' },
        { key: 'B', text: 'either', vietnameseSub: 'hoặc (đi với or)' },
        { key: 'C', text: 'neither', vietnameseSub: 'không... cũng không... (cặp neither... nor... - đúng)' },
        { key: 'D', text: 'so', vietnameseSub: 'vì vậy' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. neither. Cấu trúc liên từ tương hỗ bắt cặp cố định: "neither... nor..." (không... mà cũng không...).'
    },
    {
      id: 't8_v10',
      number: 10,
      section: 'vocab',
      question: 'Small pellets of ice that fall from the sky during a storm are called ______.',
      vietnameseTranslation: 'Những viên băng nhỏ rơi từ trên trời xuống trong một cơn bão được gọi là mưa đá.',
      options: [
        { key: 'A', text: 'rain', vietnameseSub: 'mưa nước' },
        { key: 'B', text: 'hail', vietnameseSub: 'mưa đá (đúng)' },
        { key: 'C', text: 'shower', vietnameseSub: 'mưa rào' },
        { key: 'D', text: 'breeze', vietnameseSub: 'gió nhẹ' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. hail. Định nghĩa khí tượng: "hail" (mưa đá) là hiện tượng nước đóng băng thành các viên đá nhỏ ("small pellets of ice") rơi từ trên mây xuống đất trong cơn dông.'
    }
  ],

  readingSignQuestions: [
    {
      id: 't8_s1',
      number: 11,
      section: 'signs',
      signText: 'If it\'s too cold for you, so is it for your pet. Bring them inside.',
      vietnameseSignTranslation: 'Nếu thời tiết quá lạnh đối với bạn thì với thú cưng của bạn cũng vậy. Hãy đưa chúng vào trong nhà.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'Stay at home in bad weather.', vietnameseSub: 'Ở nhà khi thời tiết xấu.' },
        { key: 'B', text: 'Go out with your pet when it\'s cold.', vietnameseSub: 'Đi ra ngoài cùng thú cưng khi trời lạnh.' },
        { key: 'C', text: 'You and your pet shouldn\'t go out together.', vietnameseSub: 'Bạn và thú cưng không nên ra ngoài cùng nhau.' },
        { key: 'D', text: 'Keep your pet at home.', vietnameseSub: 'Hãy giữ thú cưng trong nhà / mang thú cưng vào nhà (đúng).' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Keep your pet at home. Thông điệp kêu gọi "Bring them inside" (đưa thú cưng vào trong nhà khi trời rét buốt) đồng nghĩa với việc giữ thú cưng trong nhà (Keep your pet at home).'
    },
    {
      id: 't8_s2',
      number: 12,
      section: 'signs',
      signText: 'DO NOT DISTURB',
      vietnameseSignTranslation: 'XIN ĐỪNG LÀM PHIỀN',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'Don\'t go inside.', vietnameseSub: 'Đừng đi vào bên trong (đúng).' },
        { key: 'B', text: 'Don\'t close the door.', vietnameseSub: 'Đừng đóng cửa lại.' },
        { key: 'C', text: 'Go this way.', vietnameseSub: 'Đi theo lối này.' },
        { key: 'D', text: 'Come in, please.', vietnameseSub: 'Xin mời vào trong.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Don\'t go inside. Biển "Do not disturb" thường treo trước cửa phòng khách sạn yêu cầu người khác không làm phiền, tức là không được tự ý bước vào phòng (Don\'t go inside).'
    },
    {
      id: 't8_s3',
      number: 13,
      section: 'signs',
      signText: 'Jazz on summer evening\\nNo Tickets Left for Sunday Performance',
      vietnameseSignTranslation: 'Đêm nhạc Jazz vào buổi tối mùa hè\\nKhông Còn Vé Nào Cho Buổi Biểu Diễn Tối Chủ Nhật',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'You can buy tickets here for any evening.', vietnameseSub: 'Bạn có thể mua vé ở đây cho bất kỳ buổi tối nào.' },
        { key: 'B', text: 'A ticket is not necessary for Sunday evening.', vietnameseSub: 'Không cần vé cho tối Chủ Nhật.' },
        { key: 'C', text: 'All Sunday evening tickets have been sold out.', vietnameseSub: 'Tất cả vé buổi diễn tối Chủ Nhật đã được bán hết sạch (đúng).' },
        { key: 'D', text: 'No tickets are sold for Sunday.', vietnameseSub: 'Không có vé nào được bán cho ngày Chủ Nhật.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. All Sunday evening tickets have been sold out. Thông báo "No Tickets Left for Sunday Performance" có nghĩa là toàn bộ vé cho buổi biểu diễn này đã cháy vé / bán hết (sold out).'
    },
    {
      id: 't8_s4',
      number: 14,
      section: 'signs',
      signText: 'STAY OFF THE ROADS\\nNOT OUT IN THE WEATHER.',
      vietnameseSignTranslation: 'TRÁNH XA CÁC TUYẾN ĐƯỜNG\\nKHÔNG ĐI RA NGOÀI TRỜI MƯA BÃO.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'You should stay on the roads because of bad weather.', vietnameseSub: 'Bạn nên ở lại trên đường vì thời tiết xấu.' },
        { key: 'B', text: 'Don\'t go out, stay inside.', vietnameseSub: 'Đừng đi ra ngoài, hãy ở yên trong nhà (đúng).' },
        { key: 'C', text: 'The weather is good, let\'s go to the road.', vietnameseSub: 'Thời tiết đẹp, cùng ra đường nào.' },
        { key: 'D', text: 'Don\'t stay inside when the weather\'s nice.', vietnameseSub: 'Đừng ở trong nhà khi trời đẹp.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Don\'t go out, stay inside. Biển cảnh báo khuyên người dân tránh ra đường ("Stay off the roads") và không ra ngoài trời thời tiết xấu ("Not out in the weather"), tức là hãy ở yên trong nhà (stay inside).'
    },
    {
      id: 't8_s5',
      number: 15,
      section: 'signs',
      signText: 'FEMA CENTRE CLOSED DUE TO THE WEATHER.',
      vietnameseSignTranslation: 'TRUNG TÂM FEMA TẠM ĐÓNG CỬA DO THỜI TIẾT XẤU.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'When the weather is good, FEMA centre is opened.', vietnameseSub: 'Khi thời tiết đẹp trung tâm mới mở.' },
        { key: 'B', text: 'The weather is not suitable to go to FEMA centre.', vietnameseSub: 'Thời tiết không thích hợp để đến trung tâm.' },
        { key: 'C', text: 'FEMA centre is closed because of bad weather.', vietnameseSub: 'Trung tâm FEMA bị đóng cửa do thời tiết xấu (đúng).' },
        { key: 'D', text: 'The weather does not affect FEMA centre\'s activities.', vietnameseSub: 'Thời tiết không ảnh hưởng đến hoạt động.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. FEMA centre is closed because of bad weather. Cụm từ "due to the weather" tương đương với "because of bad weather" (đóng cửa vì thời tiết xấu).'
    }
  ],

  readingPassageBTitle: 'THE FOUR SEASONS AND WEATHER IN THE UK',
  readingPassageBTag: 'Passage B: Reading Comprehension',
  readingTonyPassage: `In the UK there are four seasons, spring, summer, autumn and winter; and the weather is different in each of them. However, there is not a sudden change between the seasons. It takes several weeks for the weather to change enough for people to notice the difference.

The summer is the season with the best weather. In general, it is hot and sunny with only a little rain sometimes. However, it can sometimes be cold and wet for one or two weeks at a time. After the summer is the autumn. In this season the weather gets colder and there are stronger winds, also it will rain more. All the leaves will start to fall off the trees as it is cold. Frost might start to form on the ground towards the end of the autumn.

Winter is the coldest season in the UK. The temperature will often be at zero degrees Celsius. This means that ice will often form on the ground overnight where there were puddles. This makes it difficult to walk sometimes. There might also be snow, but the UK does not get much snow, mainly just cold rain in the winter. Then when winter ends the spring starts. The temperature will start to get warmer and the winds will not be as strong. Plants start to grow again and new leaves form. Many people in the UK complain about the weather, but as the weather changes so much it is very interesting and gives the people something to talk about all year round.`,

  readingTonyTranslation: `Tại Vương quốc Anh có bốn mùa: mùa xuân, mùa hạ, mùa thu và mùa đông; và thời tiết ở mỗi mùa đều rất khác nhau. Tuy nhiên, sự chuyển giao giữa các mùa không diễn ra đột ngột. Phải mất vài tuần để thời tiết thay đổi đủ rõ rệt để mọi người nhận ra sự khác biệt.

Mùa hè là mùa có thời tiết đẹp nhất. Nhìn chung, trời nóng và có nắng, thỉnh thoảng mới có một chút mưa. Dẫu vậy, đôi khi trời cũng có thể lạnh và ẩm ướt kéo dài một hoặc hai tuần một lúc. Sau mùa hè là mùa thu. Vào mùa này, thời tiết trở nên lạnh hơn, gió thổi mạnh hơn và mưa cũng nhiều hơn. Tất cả lá cây bắt đầu rụng khỏi cành khi trời chuyển lạnh. Sương giá có thể bắt đầu hình thành trên mặt đất vào khoảng cuối mùa thu.

Mùa đông là mùa lạnh nhất ở Vương quốc Anh. Nhiệt độ thường xuyên ở mức 0 độ C. Điều này đồng nghĩa với việc băng sẽ thường hình thành trên mặt đất qua đêm ở những nơi có vũng nước đọng. Điều này đôi khi khiến việc đi bộ trở nên trơn trượt khó khăn. Trời cũng có thể có tuyết rơi, nhưng nước Anh không có quá nhiều tuyết, chủ yếu chỉ là những cơn mưa lạnh buốt trong mùa đông. Sau đó, khi mùa đông kết thúc thì mùa xuân bắt đầu. Nhiệt độ sẽ bắt đầu ấm áp dần lên và gió không còn mạnh như trước. Cây cối bắt đầu đâm chồi nảy lộc trở lại. Nhiều người ở Anh hay phàn nàn về thời tiết, nhưng vì thời tiết thay đổi liên tục thất thường nên nó lại rất thú vị và mang đến cho mọi người chủ đề để trò chuyện suốt cả năm.`,

  readingTonyQuestions: [
    {
      id: 't8_r1',
      number: 16,
      section: 'tony',
      question: 'How can the weather in the UK be described?',
      vietnameseTranslation: 'Thời tiết ở Vương quốc Anh có thể được mô tả như thế nào?',
      options: [
        { key: 'A', text: 'Mild', vietnameseSub: 'Ôn hòa' },
        { key: 'B', text: 'Humid', vietnameseSub: 'Ẩm ướt' },
        { key: 'C', text: 'Changeable', vietnameseSub: 'Hay thay đổi, thất thường (đúng)' },
        { key: 'D', text: 'Rainy', vietnameseSub: 'Mưa nhiều' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Changeable. Đoạn cuối khẳng định: "...as the weather changes so much it is very interesting" và cả bài mô tả thời tiết luôn biến chuyển giữa các mùa nên từ chính xác nhất là "Changeable" (hay thay đổi).'
    },
    {
      id: 't8_r2',
      number: 17,
      section: 'tony',
      question: 'What is the weather like in summer in the UK?',
      vietnameseTranslation: 'Thời tiết vào mùa hè ở nước Anh như thế nào?',
      options: [
        { key: 'A', text: 'It\'s hot and sunny', vietnameseSub: 'Trời nóng và có nắng (đúng)' },
        { key: 'B', text: 'It\'s rainy and wet', vietnameseSub: 'Mưa và ẩm ướt' },
        { key: 'C', text: 'It\'s cold and dry', vietnameseSub: 'Lạnh và khô' },
        { key: 'D', text: 'It\'s a little cold and windy', vietnameseSub: 'Hơi lạnh và có gió' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. It\'s hot and sunny. Đoạn 2 nêu: "The summer is the season with the best weather. In general, it is hot and sunny with only a little rain sometimes."'
    },
    {
      id: 't8_r3',
      number: 18,
      section: 'tony',
      question: 'When will frost first appear?',
      vietnameseTranslation: 'Sương giá xuất hiện lần đầu vào khi nào?',
      options: [
        { key: 'A', text: 'In spring', vietnameseSub: 'Vào mùa xuân' },
        { key: 'B', text: 'In summer', vietnameseSub: 'Vào mùa hè' },
        { key: 'C', text: 'In autumn', vietnameseSub: 'Vào mùa thu (cuối thu - đúng)' },
        { key: 'D', text: 'In winter', vietnameseSub: 'Vào mùa đông' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. In autumn. Câu cuối đoạn 2 viết rõ: "Frost might start to form on the ground towards the end of the autumn."'
    },
    {
      id: 't8_r4',
      number: 19,
      section: 'tony',
      question: 'What does the word "puddles" mean?',
      vietnameseTranslation: 'Từ "puddles" có nghĩa là gì?',
      options: [
        { key: 'A', text: 'water', vietnameseSub: 'vũng nước đọng (đúng)' },
        { key: 'B', text: 'frost', vietnameseSub: 'sương giá' },
        { key: 'C', text: 'stones', vietnameseSub: 'đá sỏi' },
        { key: 'D', text: 'snow', vietnameseSub: 'tuyết' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. water. "Puddle" là vũng nước mưa đọng lại trên mặt đường sau cơn mưa (small pool of water).'
    },
    {
      id: 't8_r5',
      number: 20,
      section: 'tony',
      question: 'Why do people like the spring?',
      vietnameseTranslation: 'Tại sao mọi người lại yêu thích mùa xuân?',
      options: [
        { key: 'A', text: 'It is not winter.', vietnameseSub: 'Vì nó không phải mùa đông.' },
        { key: 'B', text: 'It is the shortest season.', vietnameseSub: 'Vì nó là mùa ngắn nhất.' },
        { key: 'C', text: 'It only happens every other year.', vietnameseSub: 'Vì nó diễn ra cách năm.' },
        { key: 'D', text: 'It has really nice weather.', vietnameseSub: 'Vì nó có thời tiết ấm áp dễ chịu, cây cối đâm chồi (đúng).' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. It has really nice weather. Đoạn 3 miêu tả mùa xuân: "The temperature will start to get warmer and the winds will not be as strong. Plants start to grow again and new leaves form" thể hiện thời tiết rất đẹp và dễ chịu.'
    }
  ],

  readingPassageCTitle: 'STUDENT-TEACHER RELATIONSHIPS IN THE USA',
  readingPassageCTag: 'Passage C: Cloze Test (Điền từ vào chỗ trống)',
  readingAnnaPassage: `The relationship between students and teachers is (1) _______ formal in the USA than in many other countries, especially at the college level. American college students do not (2) _______ when their teacher enters the room. Students are generally (3) _______ to ask questions in class, to stop in the professor's office for extra help, and to phone if they are (4) _______ and need information. (5) _______ teachers allow students to enter class late or leave early, if necessary. (6) _______ the lack of formality, students are still expected to be (7) _______ to their teacher and fellow classmates. When students want to ask questions, they usually (8) _______ a hand and wait to be (9) _______ on. When the teacher or a student is speaking to the class, it is rude to begin whispering to another classmate. When a test is being given, talking to a classmate is not only rude but also risky. Most American teachers consider that students who are talking to each other during a test are (10) _______.`,

  readingAnnaTranslation: `Mối quan hệ giữa sinh viên và giảng viên tại Mỹ ít (1) mang tính trang nghiêm, hình thức hơn so với nhiều quốc gia khác, đặc biệt là ở bậc đại học. Sinh viên đại học Mỹ không đứng dậy (2) khi giáo viên bước vào lớp học. Sinh viên nhìn chung được khuyến khích (3) đặt câu hỏi trong lớp, ghé qua văn phòng của giáo sư để nhờ trợ giúp thêm, và gọi điện nếu họ vắng mặt (4) và cần tài liệu học tập. Đa số (5) giảng viên cho phép sinh viên vào lớp muộn hoặc ra sớm nếu có việc cần thiết. Mặc dù (6) không quá câu nệ hình thức, sinh viên vẫn được kỳ vọng phải cư xử lịch sự (7) với giáo viên và các bạn cùng lớp. Khi sinh viên muốn phát biểu, họ thường giơ (8) tay lên và chờ được gọi (9) tên. Khi giảng viên hoặc một sinh viên đang phát biểu trước lớp, việc thì thầm to nhỏ với bạn học khác bị xem là bất lịch sự. Khi đang làm bài kiểm tra, việc nói chuyện với bạn không chỉ bất lịch sự mà còn rất nguy hiểm. Hầu hết các giáo viên Mỹ đều coi những sinh viên nói chuyện với nhau trong giờ kiểm tra là đang gian lận (10).`,

  readingAnnaQuestions: [
    {
      id: 't8_c1',
      number: 21,
      section: 'anna',
      question: 'Choose the best word for blank (1): "The relationship is (1) _______ formal in the USA..."',
      options: [
        { key: 'A', text: 'much', vietnameseSub: 'nhiều' },
        { key: 'B', text: 'most', vietnameseSub: 'nhất' },
        { key: 'C', text: 'a little', vietnameseSub: 'một chút' },
        { key: 'D', text: 'less', vietnameseSub: 'ít hơn (so sánh kém: less formal than - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. less. Cấu trúc so sánh kém: "less + adj + than" (ít trang trọng hơn).'
    },
    {
      id: 't8_c2',
      number: 22,
      section: 'anna',
      question: 'Choose the best phrase for blank (2): "Students do not (2) _______ when their teacher enters the room."',
      options: [
        { key: 'A', text: 'sit up', vietnameseSub: 'ngồi dậy' },
        { key: 'B', text: 'stand up', vietnameseSub: 'đứng dậy (đúng)' },
        { key: 'C', text: 'go up', vietnameseSub: 'đi lên' },
        { key: 'D', text: 'stay up', vietnameseSub: 'thức khuya' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. stand up. Sinh viên Mỹ không đứng dậy chào ("stand up") khi giáo viên bước vào lớp.'
    },
    {
      id: 't8_c3',
      number: 23,
      section: 'anna',
      question: 'Choose the best form for blank (3): "Students are generally (3) _______ to ask questions in class..."',
      options: [
        { key: 'A', text: 'encouraged', vietnameseSub: 'được khuyến khích (thể bị động - đúng)' },
        { key: 'B', text: 'encouraging', vietnameseSub: 'mang tính khích lệ' },
        { key: 'C', text: 'to encourage', vietnameseSub: 'nguyên mẫu có to' },
        { key: 'D', text: 'encourage', vietnameseSub: 'nguyên mẫu' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. encouraged. Cấu trúc bị động: "be encouraged to do sth" (được khuyến khích làm điều gì).'
    },
    {
      id: 't8_c4',
      number: 24,
      section: 'anna',
      question: 'Choose the best word for blank (4): "...and to phone if they are (4) _______ and need information."',
      options: [
        { key: 'A', text: 'wanted', vietnameseSub: 'được mong muốn' },
        { key: 'B', text: 'present', vietnameseSub: 'có mặt' },
        { key: 'C', text: 'absent', vietnameseSub: 'vắng mặt (đúng)' },
        { key: 'D', text: 'healthy', vietnameseSub: 'khỏe mạnh' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. absent. Khi sinh viên nghỉ học / vắng mặt trên lớp ("absent") thì được phép gọi điện hỏi bài.'
    },
    {
      id: 't8_c5',
      number: 25,
      section: 'anna',
      question: 'Choose the best word for blank (5): "(5) _______ teachers allow students to enter class late..."',
      options: [
        { key: 'A', text: 'Most', vietnameseSub: 'Hầu hết (Most + N số nhiều - đúng)' },
        { key: 'B', text: 'Most of', vietnameseSub: 'phải có the/từ chỉ định' },
        { key: 'C', text: 'Many of', vietnameseSub: 'phải có the' },
        { key: 'D', text: 'Much of', vietnameseSub: 'đi với không đếm được' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Most. Trước danh từ số nhiều không có từ hạn định ("teachers"), dùng lượng từ "Most" (hầu hết giáo viên).'
    },
    {
      id: 't8_c6',
      number: 26,
      section: 'anna',
      question: 'Choose the best preposition for blank (6): "(6) _______ the lack of formality, students are still expected..."',
      options: [
        { key: 'A', text: 'Though', vietnameseSub: 'Mặc dù (cộng mệnh đề)' },
        { key: 'B', text: 'Although', vietnameseSub: 'Mặc dù (cộng mệnh đề)' },
        { key: 'C', text: 'In spite to', vietnameseSub: 'sai giới từ' },
        { key: 'D', text: 'Despite', vietnameseSub: 'Mặc dù (Despite + cụm danh từ - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Despite. Đứng trước một cụm danh từ ("the lack of formality"), ta dùng giới từ "Despite" (hoặc In spite of).'
    },
    {
      id: 't8_c7',
      number: 27,
      section: 'anna',
      question: 'Choose the best adjective for blank (7): "...students are still expected to be (7) _______ to their teacher..."',
      options: [
        { key: 'A', text: 'impolite', vietnameseSub: 'bất lịch sự' },
        { key: 'B', text: 'rude', vietnameseSub: 'thô lỗ' },
        { key: 'C', text: 'polite', vietnameseSub: 'lịch sự, lễ phép (đúng)' },
        { key: 'D', text: 'kind', vietnameseSub: 'tốt bụng' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. polite. Sinh viên dù thoải mái nhưng vẫn phải giữ thái độ lịch sự, tôn trọng ("polite to their teacher").'
    },
    {
      id: 't8_c8',
      number: 28,
      section: 'anna',
      question: 'Choose the best verb for blank (8): "...they usually (8) _______ a hand and wait..."',
      options: [
        { key: 'A', text: 'raise', vietnameseSub: 'giơ lên (raise a hand - đúng)' },
        { key: 'B', text: 'hold', vietnameseSub: 'cầm nắm' },
        { key: 'C', text: 'hang', vietnameseSub: 'treo' },
        { key: 'D', text: 'rise', vietnameseSub: 'tự mọc lên' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. raise. Cụm từ cố định trong lớp học: "raise a hand" (giơ tay phát biểu ý kiến).'
    },
    {
      id: 't8_c9',
      number: 29,
      section: 'anna',
      question: 'Choose the best past participle for blank (9): "...and wait to be (9) _______ on."',
      options: [
        { key: 'A', text: 'gone', vietnameseSub: 'đi' },
        { key: 'B', text: 'called', vietnameseSub: 'được gọi (call on sb: mời ai phát biểu - đúng)' },
        { key: 'C', text: 'invited', vietnameseSub: 'được mời' },
        { key: 'D', text: 'left', vietnameseSub: 'rời khỏi' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. called. Cụm động từ: "be called on" có nghĩa là được giáo viên gọi tên để trả lời / phát biểu.'
    },
    {
      id: 't8_c10',
      number: 30,
      section: 'anna',
      question: 'Choose the best participle for blank (10): "...students who are talking to each other during a test are (10) _______."',
      options: [
        { key: 'A', text: 'friendly', vietnameseSub: 'thân thiện' },
        { key: 'B', text: 'obedient', vietnameseSub: 'vâng lời' },
        { key: 'C', text: 'cheating', vietnameseSub: 'gian lận thi cử (đúng)' },
        { key: 'D', text: 'playing', vietnameseSub: 'chơi đùa' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. cheating. Việc trao đổi nói chuyện trong giờ làm bài thi bị coi là hành vi gian lận quay cóp ("cheating").'
    }
  ],

  sentenceTransformations: [
    {
      id: 't8_w1',
      number: 31,
      originalSentence: 'James plays football better than any other boys in the class.',
      vietnameseTranslation: 'James chơi bóng đá giỏi hơn bất kỳ cậu bé nào khác trong lớp.',
      prefix: 'James is the',
      modelAnswer: 'James is the best football player in the class.',
      vietnameseModelTranslation: 'James là cầu thủ bóng đá giỏi nhất trong lớp.',
      acceptedAnswers: [
        'best football player in the class',
        'best football player in the class.',
        'best at playing football in the class',
        'best at playing football in the class.'
      ],
      grammarPoint: 'Chuyển đổi từ so sánh hơn với "any other" sang so sánh nhất: S + V + better than any other boy = S is the best football player in the class.'
    },
    {
      id: 't8_w2',
      number: 32,
      originalSentence: 'She is more successful than her three sisters.',
      vietnameseTranslation: 'Cô ấy thành công hơn ba người chị em gái của mình.',
      prefix: 'She is the',
      modelAnswer: 'She is the most successful of the four sisters.',
      vietnameseModelTranslation: 'Cô ấy là người thành công nhất trong số bốn chị em.',
      acceptedAnswers: [
        'most successful of the four sisters',
        'most successful of the four sisters.',
        'most successful sister of all',
        'most successful sister of all.'
      ],
      grammarPoint: 'Chuyển từ so sánh hơn sang so sánh nhất: Cô ấy + 3 chị em = 4 chị em -> She is the most successful of the four sisters.'
    },
    {
      id: 't8_w3',
      number: 33,
      originalSentence: 'He has never scored so high in a test as he did in this one.',
      vietnameseTranslation: 'Anh ấy chưa bao giờ đạt điểm cao trong bài kiểm tra như trong bài thi lần này.',
      prefix: 'This is the',
      modelAnswer: 'This is the highest score he has ever got in a test.',
      vietnameseModelTranslation: 'Đây là số điểm cao nhất mà anh ấy từng đạt được trong một bài kiểm tra.',
      acceptedAnswers: [
        'highest score he has ever got in a test',
        'highest score he has ever got in a test.',
        'highest score he has ever scored in a test',
        'highest score he has ever scored in a test.'
      ],
      grammarPoint: 'Cấu trúc tương đương: S + have never V so adj as... = This is the most adj / est + S + have ever V.'
    },
    {
      id: 't8_w4',
      number: 34,
      originalSentence: 'We were told that the show was not very entertaining but it was.',
      vietnameseTranslation: 'Chúng tôi được bảo rằng buổi biểu diễn không thú vị lắm nhưng thực tế nó lại rất hay.',
      prefix: 'The show was',
      modelAnswer: 'The show was more entertaining than we were told.',
      vietnameseModelTranslation: 'Buổi biểu diễn thú vị hơn những gì chúng tôi được nghe kể.',
      acceptedAnswers: [
        'more entertaining than we were told',
        'more entertaining than we were told.'
      ],
      grammarPoint: 'Cấu trúc so sánh hơn biểu thị sự vượt trên mong đợi/lời đồn: S was more entertaining than we were told.'
    },
    {
      id: 't8_w5',
      number: 35,
      originalSentence: 'The shop is not very busy today compared to yesterday.',
      vietnameseTranslation: 'Cửa hàng hôm nay không đông khách lắm so với ngày hôm qua.',
      prefix: 'Yesterday the shop was',
      modelAnswer: 'Yesterday the shop was busier than it is today.',
      vietnameseModelTranslation: 'Ngày hôm qua cửa hàng đông đúc bận rộn hơn ngày hôm nay.',
      acceptedAnswers: [
        'busier than it is today',
        'busier than it is today.',
        'busier than today',
        'busier than today.'
      ],
      grammarPoint: 'Chuyển đổi câu so sánh: Hôm nay không đông bằng hôm qua = Hôm qua đông hơn hôm nay (Yesterday the shop was busier than it is today).'
    }
  ],

  letterWriting: {
    prompt: 'Write a letter (about 120 words) to your friend/colleague/parents/relatives inviting them to stay at your house.\\nYour letter should include:\\n- The reason for inviting them\\n- Information about the accommodation\\n- Things you can do together',
    vietnamesePrompt: 'Viết một lá thư (khoảng 120 từ) gửi cho bạn bè/người thân mời họ đến nghỉ lại nhà bạn.\\nLá thư nên bao gồm:\\n- Lý do gửi lời mời\\n- Thông tin về chỗ ở, tiện nghi trong nhà\\n- Những hoạt động các bạn có thể làm cùng nhau',
    requiredWordCount: '100 - 140 words',
    sample1: {
      title: 'Bài mẫu 1: Lời mời bạn đến chơi nhà (Tài liệu giáo trình)',
      content: `Dear Linda,

I'm very happy to hear that you are going to visit our city next month. I would like to invite you to stay at my house during your trip.

We have a spare room with a comfortable bed, so you can rest well after a long journey. My family is very friendly and they are looking forward to meeting you. You don't have to worry about food because my mother is a great cook.

Moreover, my house is close to the city centre, so it is easy to visit museums, parks and markets. I can also show you around at weekends.

Please let me know when you will arrive, and I will pick you up at the station. I can't wait to see you!

Best wishes,
Mai`
    },
    sample2: {
      title: 'Bài mẫu 2: Lời mời về thăm Phú Hòa (Phan Tấn Kiệt)',
      content: `Dear Tom,

How are you doing? I was thrilled to hear that you are planning to travel to my province next month. I would be delighted to invite you to stay at my home in Phu Hoa during your holiday.

Our house is very spacious and peaceful, with a spare bedroom and a cool front garden. My parents and my brothers are warm, hospitable people and would love to welcome you. My mother cooks fantastic local dishes, so you will definitely enjoy our home-cooked meals.

At the weekend, I can take you on a cycling tour around our beautiful countryside, visit the local river and explore the city center.

Please let me know your arrival schedule so I can come and pick you up at the station.

Warm regards,
Phan Tan Kiet`
    }
  },

  speakingCard: {
    cardTitle: 'SPEAKING CARD No.8: Talk about your favourite season in the year',
    cardSubtitle: 'Nói về mùa trong năm mà bạn yêu thích nhất',
    questions: [
      { q: 'How many seasons are there in your region?', vi: 'Có bao nhiêu mùa trong năm ở vùng của bạn?' },
      { q: 'What is your favourite season and when does it come?', vi: 'Mùa yêu thích của bạn là mùa nào và nó đến vào khoảng thời gian nào?' },
      { q: 'Why do you like it?', vi: 'Tại sao bạn lại yêu thích mùa đó?' },
      { q: 'What do you like doing in this season?', vi: 'Bạn thích làm những hoạt động gì trong mùa này?' }
    ],
    sampleAnswers: [
      {
        speaker: 'Bài mẫu 1 (Theo giáo trình - Mùa xuân)',
        textEn: `In my region there are four seasons in a year: spring, summer, autumn and winter. My favourite season is spring, which usually comes from February to April. I like spring because the weather is mild and fresh. It is not too hot or too cold, and flowers are blooming everywhere. Spring is also the time of Tet holiday, when my whole family gets together. In this season, I often go to the park with my friends, take photos of beautiful flowers and visit my grandparents. Spring always makes me feel happy and full of energy.`,
        textVi: `Ở vùng của tôi có bốn mùa trong một năm: mùa xuân, mùa hạ, mùa thu và mùa đông. Mùa yêu thích nhất của tôi là mùa xuân, thường kéo dài từ tháng Hai đến tháng Tư. Tôi thích mùa xuân vì thời tiết rất ôn hòa và mát mẻ. Trời không quá nóng cũng không quá lạnh, và muôn hoa đua nở khắp nơi. Mùa xuân cũng là dịp Tết cổ truyền, khi cả gia đình tôi được sum họp bên nhau. Vào mùa này, tôi thường cùng bạn bè ra công viên, chụp ảnh các loài hoa đẹp và đi chúc tết ông bà. Mùa xuân luôn mang lại cho tôi cảm giác hạnh phúc và ngập tràn năng lượng.`
      },
      {
        speaker: 'Bài mẫu 2 (Theo ngữ cảnh Phú Hòa - Phan Tấn Kiệt)',
        textEn: `In my province of Phu Yen, the climate has two distinct seasons: the dry season and the rainy season. My favourite time of year is the early dry season from January to April, which feels like a fresh and sunny spring. I love this season because the weather is pleasantly sunny with cool coastal breezes, making outdoor activities wonderful. During this time, I enjoy going cycling around the quiet countryside roads, spending time drawing landscapes, and gathering with my family during the traditional Tet holiday. The mild sunshine and blooming flowers always bring a refreshing start to the year.`,
        textVi: `Tại tỉnh Phú Yên quê tôi, khí hậu chia làm hai mùa rõ rệt: mùa khô và mùa mưa. Khoảng thời gian tôi yêu thích nhất trong năm là đầu mùa khô từ tháng Giêng đến tháng Tư, mang lại cảm giác tươi mới và ngập tràn ánh nắng như mùa xuân. Tôi yêu thích khoảng thời gian này vì thời tiết nắng ấm dễ chịu cùng những làn gió biển mát lành, rất thuận tiện cho các hoạt động ngoài trời. Trong mùa này, tôi thích đạp xe quanh những con đường làng yên bình, dành thời gian vẽ tranh phong cảnh và quây quần bên gia đình trong dịp Tết cổ truyền. Ánh nắng dịu nhẹ và hoa lá khoe sắc luôn mang lại một khởi đầu tươi mới cho cả năm.`
      }
    ]
  },

  listeningPartA: [
    { number: 1, question: 'When will Jack\'s mum pick him up?', options: ['A: 4:00', 'B: 4:30', 'C: 5:00'], answer: 'B', note: 'Phán đoán thời gian đón Jack' },
    { number: 2, question: 'Which postcard will they send?', options: ['A: Postcard with beach', 'B: Postcard with castle', 'C: Postcard with mountains'], answer: 'B', note: 'Phán đoán bưu thiếp gửi đi' },
    { number: 3, question: 'What do they decide to buy?', options: ['A: Scarf', 'B: Gloves', 'C: Hat'], answer: 'C', note: 'Phán đoán món đồ quyết định mua' },
    { number: 4, question: 'What has the girl forgotten to bring?', options: ['A: Umbrella', 'B: Camera', 'C: Keys'], answer: 'A', note: 'Phán đoán đồ vật để quên trong thời tiết xấu' },
    { number: 5, question: 'How does the man want his son to help him?', options: ['A: Washing the car', 'B: Mowing the lawn', 'C: Cleaning windows'], answer: 'A', note: 'Phán đoán công việc nhờ giúp đỡ' },
    { number: 6, question: 'Which TV programme is on at nine o\'clock tonight?', options: ['A: Football match', 'B: Nature documentary', 'C: News bulletin'], answer: 'B', note: 'Phán đoán chương trình thời sự / thế giới tự nhiên' },
    { number: 7, question: 'What will the boy do first?', options: ['A: Do homework', 'B: Walk the dog', 'C: Tidy bedroom'], answer: 'A', note: 'Phán đoán hành động làm trước tiên' }
  ],

  listeningPartB: {
    title: 'THE GOOD FOOD SHOW (Listen and fill in the missing information)',
    items: [
      { gap: 1, text: 'Buy Jane Adams\' new book about making ______', answer: 'bread' },
      { gap: 2, text: 'Get advice about buying ______', answer: 'kitchen equipment' },
      { gap: 3, text: 'Watch how to cook a lunch just with ______', answer: 'vegetables' },
      { gap: 4, text: 'Learn how to make a dessert in less than ______ minutes.', answer: '15' },
      { gap: 5, text: 'The food from ______ is specially recommended.', answer: 'Vietnam / Italy' }
    ],
    note: 'Lưu ý: Các đáp án phần nghe dựa trên tài liệu ôn tập chuẩn do không kèm file audio gốc.'
  }
};

// Ghi ra file data_topic8.js
const fileContent = `// TOPIC 8: WEATHER - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC8 = ${JSON.stringify(topic8Data, null, 2)};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC8 = EXAM_DATA_TOPIC8;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC8;
}
`;

fs.writeFileSync('data_topic8.js', fileContent, 'utf8');
console.log('✅ Created data_topic8.js successfully! Length:', fileContent.length);
