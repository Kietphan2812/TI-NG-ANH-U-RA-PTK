// Script tạo tự động dữ liệu Đề Thạc Sĩ 2025 - Mã đề 02
// BỘ XÂY DỰNG - TRƯỜNG ĐẠI HỌC XÂY DỰNG MIỀN TRUNG
const fs = require('fs');

const thacsi2Data = {
  topicId: 'thacsi2',
  topicTitle: 'ĐỀ THI THẠC SĨ 2025 – MÃ ĐỀ 02',
  topicSubtitle: 'Đánh giá năng lực Tiếng Anh đầu vào Trình độ Thạc sĩ – ĐH Xây dựng Miền Trung (90 phút)',
  examDurationMinutes: 90,

  // Sổ tay từ vựng học tập chất lượng cao trích xuất từ đề thi
  vocabulary: [
    { word: 'recommend', ipa: '/ˌrekəˈmend/', pos: 'v.', meaning: 'giới thiệu, đề xuất', example: 'She asked me if I had read the book she had recommended the week before.' },
    { word: 'site', ipa: '/saɪt/', pos: 'n.', meaning: 'khu đất, địa điểm xây dựng', example: 'The new shopping mall will be built on the site of the old factory.' },
    { word: 'give someone a lift', ipa: '/ɡɪv ˈsʌmwʌn ə lɪft/', pos: 'idiom', meaning: 'cho ai đi nhờ xe', example: 'I do not mind walking, but I would rather you gave me a lift.' },
    { word: 'survey', ipa: '/ˈsɜːveɪ/', pos: 'n.', meaning: 'cuộc khảo sát, thăm dò ý kiến', example: 'The results of the survey show that students prefer online learning.' },
    { word: 'global warming', ipa: '/ˌɡləʊbl ˈwɔːmɪŋ/', pos: 'n. phr.', meaning: 'hiện tượng nóng lên toàn cầu', example: 'Global warming is making Earth\'s average surface temperature higher.' },
    { word: 'greenhouse effect', ipa: '/ˈɡriːnhaʊs ɪˌfekt/', pos: 'n. phr.', meaning: 'hiệu ứng nhà kính', example: 'Carbon dioxide emissions strengthen the global greenhouse effect.' },
    { word: 'neither ... nor ...', ipa: '/ˈnaɪðər ... nɔːr .../', pos: 'conj.', meaning: 'không ... mà cũng không ...', example: 'Evi was neither embarrassed nor angry when Victoria told her to shut up.' },
    { word: 'hail', ipa: '/heɪl/', pos: 'n.', meaning: 'mưa đá (những viên băng nhỏ)', example: 'Small pellets of ice that fall from the sky during a storm are called hail.' },
    { word: 'thunderstorm', ipa: '/ˈθʌndəstɔːm/', pos: 'n.', meaning: 'cơn dông bão sấm sét', example: 'The violent thunderstorm caused power cuts across the entire district.' },
    { word: 'breeze', ipa: '/briːz/', pos: 'n.', meaning: 'làn gió nhẹ mát mẻ', example: 'A gentle sea breeze blew across the sunny beach.' },
    { word: 'leftovers', ipa: '/ˈleftəʊvəz/', pos: 'n. pl.', meaning: 'thức ăn thừa sau bữa ăn', example: 'Please put the dinner leftovers in the fridge after eating.' },
    { word: 'warm up', ipa: '/wɔːm ʌp/', pos: 'phr. v.', meaning: 'hâm nóng thức ăn', example: 'The soup is in the fridge and just needs warming up before serving.' },
    { word: 'until further notice', ipa: '/ənˈtɪl ˈfɜːðər ˈnəʊtɪs/', pos: 'idiom', meaning: 'cho đến khi có thông báo mới', example: 'The supermarket will remain closed until further notice for building work.' },
    { word: 'equator', ipa: '/ɪˈkweɪtər/', pos: 'n.', meaning: 'đường xích đạo Trái Đất', example: 'Indonesia is close to the equator, so it never gets freezing cold.' },
    { word: 'rainforest', ipa: '/ˈreɪnfɒrɪst/', pos: 'n.', meaning: 'rừng mưa nhiệt đới', example: 'Indonesia is covered with vast and lush tropical rainforests.' },
    { word: 'shortage', ipa: '/ˈʃɔːtɪdʒ/', pos: 'n.', meaning: 'sự khan hiếm, thiếu hụt', example: 'Excessive logging has led to a serious shortage of timber trees.' },
    { word: 'stilt (house on stilts)', ipa: '/stɪlt/', pos: 'n.', meaning: 'cột chống, nhà sàn', example: 'Houses are built on stilts to keep living areas off wet soil and floods.' },
    { word: 'afford', ipa: '/əˈfɔːd/', pos: 'v.', meaning: 'có đủ khả năng tài chính để chi trả', example: 'Poor families cannot afford to improve their humble housing conditions.' },
    { word: 'landlord', ipa: '/ˈlændlɔːd/', pos: 'n.', meaning: 'chủ nhà trọ, chủ cho thuê', example: 'Many landlords are hesitant to rent their apartments to low-income tenants.' },
    { word: 'natural disaster', ipa: '/ˌnætʃrəl dɪˈzɑːstər/', pos: 'n. phr.', meaning: 'thảm họa thiên tai', example: 'Natural disasters such as floods and droughts leave thousands homeless.' },
    { word: 'formal / informal', ipa: '/ˈfɔːml / ɪnˈfɔːml/', pos: 'adj.', meaning: 'trang trọng / thân mật, thoải mái', example: 'Student-teacher relationships are less formal in the United States.' },
    { word: 'encouraged', ipa: '/ɪnˈkʌrɪdʒd/', pos: 'adj./v. pii', meaning: 'được khuyến khích, động viên', example: 'Students are actively encouraged to ask questions during lectures.' },
    { word: 'absent', ipa: '/ˈæbsənt/', pos: 'adj.', meaning: 'vắng mặt, nghỉ học', example: 'Please phone the professor if you are absent from class and need assignments.' },
    { word: 'despite', ipa: '/dɪˈspaɪt/', pos: 'prep.', meaning: 'mặc dù, bất chấp (= in spite of)', example: 'Despite the relaxed atmosphere, students are expected to be polite.' },
    { word: 'raise a hand', ipa: '/reɪz ə hænd/', pos: 'idiom', meaning: 'giơ tay phát biểu ý kiến', example: 'When students want to speak, they usually raise a hand in class.' },
    { word: 'call on', ipa: '/kɔːl ɒn/', pos: 'phr. v.', meaning: 'gọi tên phát biểu', example: 'The student raised his hand and waited to be called on by the teacher.' },
    { word: 'cheating', ipa: '/ˈtʃiːtɪŋ/', pos: 'n./adj.', meaning: 'gian lận trong thi cử', example: 'Talking to a classmate during an examination is considered cheating.' }
  ],

  // I. VOCABULARY & GRAMMAR (10 câu - Questions 1-10)
  vocabularyQuestions: [
    {
      id: 'ts2_q1',
      number: 1,
      section: 'vocab',
      question: 'The teacher asked me if I ______ the book she had recommended the week before.',
      vietnameseTranslation: 'Cô giáo hỏi tôi xem liệu tôi đã đọc cuốn sách mà cô ấy đã giới thiệu vào tuần trước đó hay chưa.',
      options: [
        { key: 'A', text: 'have read', vietnameseSub: 'Hiện tại hoàn thành (chưa lùi thì)' },
        { key: 'B', text: 'was reading', vietnameseSub: 'Quá khứ tiếp diễn' },
        { key: 'C', text: 'had read', vietnameseSub: 'Quá khứ hoàn thành (lùi thì chuẩn)' },
        { key: 'D', text: 'read', vietnameseSub: 'Quá khứ đơn' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. had read. Đây là câu tường thuật gián tiếp dạng câu hỏi Yes/No (The teacher asked me if...). Hành động đọc cuốn sách xảy ra trước thời điểm cô giáo hỏi ("the week before"), theo quy tắc lùi thì của câu gián tiếp ta phải dùng thì Quá khứ hoàn thành: S + had + PII -> had read.'
    },
    {
      id: 'ts2_q2',
      number: 2,
      section: 'vocab',
      question: 'The new shopping mall will be built on the ______ of the old factory.',
      vietnameseTranslation: 'Trung tâm thương mại mới sẽ được xây dựng trên khu đất của nhà máy cũ.',
      options: [
        { key: 'A', text: 'place', vietnameseSub: 'nơi chốn nói chung' },
        { key: 'B', text: 'site', vietnameseSub: 'khu đất, địa điểm xây dựng' },
        { key: 'C', text: 'position', vietnameseSub: 'vị trí tọa độ / chức vụ' },
        { key: 'D', text: 'situation', vietnameseSub: 'tình huống, hoàn cảnh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. site. Trong tiếng Anh xây dựng và quy hoạch, "site" là danh từ chuyên dụng chỉ khu đất / địa điểm dùng để thi công xây dựng công trình (building site / on the site of the old factory).'
    },
    {
      id: 'ts2_q3',
      number: 3,
      section: 'vocab',
      question: "I don't mind walking to the station, but I'd rather you ______ me a lift.",
      vietnameseTranslation: 'Tôi không ngại đi bộ ra nhà ga, nhưng tôi muốn bạn cho tôi đi nhờ xe hơn.',
      options: [
        { key: 'A', text: 'give', vietnameseSub: 'Hiện tại đơn nguyên mẫu' },
        { key: 'B', text: 'gave', vietnameseSub: 'Quá khứ đơn (cấu trúc would rather chủ ngữ khác)' },
        { key: 'C', text: 'had given', vietnameseSub: 'Quá khứ hoàn thành' },
        { key: 'D', text: 'will give', vietnameseSub: 'Tương lai đơn' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. gave. Cấu trúc câu mong muốn ở hiện tại hoặc tương lai với hai chủ ngữ khác nhau: S1 + would rather (\'d rather) + S2 + V(quá khứ đơn). Cụm từ "give someone a lift" nghĩa là cho ai đi nhờ xe, khi chia quá khứ biến thành "gave me a lift".'
    },
    {
      id: 'ts2_q4',
      number: 4,
      section: 'vocab',
      question: 'The results of the survey ______ that many students prefer online learning to face-to-face classes.',
      vietnameseTranslation: 'Kết quả của cuộc khảo sát cho thấy nhiều sinh viên thích học trực tuyến hơn là học trực tiếp tại lớp.',
      options: [
        { key: 'A', text: 'show', vietnameseSub: 'cho thấy (Hiện tại đơn số nhiều - đúng)' },
        { key: 'B', text: 'are shown', vietnameseSub: 'bị động' },
        { key: 'C', text: 'are showing', vietnameseSub: 'Hiện tại tiếp diễn' },
        { key: 'D', text: 'showed', vietnameseSub: 'Quá khứ đơn' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. show. Khi trình bày một kết quả nghiên cứu hoặc khảo sát mang tính quy luật/chân lý thực tế, ta dùng thì Hiện tại đơn chủ động. Chủ ngữ "The results of the survey" có danh từ chính là số nhiều "The results", do đó động từ giữ nguyên mẫu là "show".'
    },
    {
      id: 'ts2_q5',
      number: 5,
      section: 'vocab',
      question: 'My little sister has been playing the piano for only a year, but she can play quite ______ now.',
      vietnameseTranslation: 'Em gái nhỏ của tôi mới chơi đàn piano được một năm, nhưng giờ em ấy có thể chơi khá hay.',
      options: [
        { key: 'A', text: 'well', vietnameseSub: 'trạng từ (quite well: khá hay/khá tốt)' },
        { key: 'B', text: 'good', vietnameseSub: 'tính từ (không bổ nghĩa cho động từ play)' },
        { key: 'C', text: 'better', vietnameseSub: 'so sánh hơn' },
        { key: 'D', text: 'best', vietnameseSub: 'so sánh nhất' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. well. Bổ nghĩa cho động từ hành động "play (the piano)" cần một trạng từ (adverb). "good" là tính từ, chuyển thành trạng từ là "well". Cụm "quite well" nghĩa là khá hay, khá tốt.'
    },
    {
      id: 'ts2_q6',
      number: 6,
      section: 'vocab',
      question: 'Ken, Peter and Bob went to school early this morning, but Ken arrived ______ of them all.',
      vietnameseTranslation: 'Ken, Peter và Bob đã đến trường sớm sáng nay, nhưng Ken là người đến sớm nhất trong số họ.',
      options: [
        { key: 'A', text: 'earlier', vietnameseSub: 'so sánh hơn giữa 2 đối tượng' },
        { key: 'B', text: 'more early', vietnameseSub: 'sai dạng so sánh hơn' },
        { key: 'C', text: 'earliest', vietnameseSub: 'thiếu mạo từ the' },
        { key: 'D', text: 'the earliest', vietnameseSub: 'so sánh nhất chuẩn ngữ pháp' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. the earliest. So sánh nhất giữa ba người (Ken, Peter và Bob) với cụm từ chỉ phạm vi "of them all". Trạng từ "early" tận cùng bằng "y", dạng so sánh nhất là "the earliest".'
    },
    {
      id: 'ts2_q7',
      number: 7,
      section: 'vocab',
      question: "______ is making Earth's average surface temperature higher. This is a type of greenhouse effect.",
      vietnameseTranslation: 'Hiện tượng nóng lên toàn cầu đang làm cho nhiệt độ bề mặt trung bình của Trái Đất tăng cao. Đây là một dạng của hiệu ứng nhà kính.',
      options: [
        { key: 'A', text: 'Global warming', vietnameseSub: 'Hiện tượng nóng lên toàn cầu' },
        { key: 'B', text: 'Thunderstorm', vietnameseSub: 'Cơn bão sấm sét' },
        { key: 'C', text: 'Climate change', vietnameseSub: 'Biến đổi khí hậu' },
        { key: 'D', text: 'Humidity', vietnameseSub: 'Độ ẩm không khí' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Global warming. "Global warming" (hiện tượng Trái Đất ấm lên / nóng lên toàn cầu) trực tiếp làm nhiệt độ bề mặt Trái Đất tăng cao và là một hệ quả điển hình của hiệu ứng nhà kính (greenhouse effect).'
    },
    {
      id: 'ts2_q8',
      number: 8,
      section: 'vocab',
      question: 'They were late, but they felt lucky because their teacher arrived ______.',
      vietnameseTranslation: 'Họ đã đến muộn, nhưng họ cảm thấy may mắn vì giáo viên của họ còn đến muộn hơn.',
      options: [
        { key: 'A', text: 'later', vietnameseSub: 'muộn hơn (so sánh hơn)' },
        { key: 'B', text: 'the latest', vietnameseSub: 'muộn nhất' },
        { key: 'C', text: 'more late', vietnameseSub: 'sai dạng so sánh' },
        { key: 'D', text: 'latest', vietnameseSub: 'thiếu the' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. later. So sánh hơn giữa hai thời điểm đến (học sinh đến muộn, nhưng giáo viên đến sau / muộn hơn): late -> later.'
    },
    {
      id: 'ts2_q9',
      number: 9,
      section: 'vocab',
      question: 'Evi was ______ embarrassed nor angry when Victoria told her to shut up.',
      vietnameseTranslation: 'Evi không hề cảm thấy xấu hổ mà cũng chẳng hề tức giận khi Victoria bảo cô ấy hãy im miệng.',
      options: [
        { key: 'A', text: 'both', vietnameseSub: 'đi với and (both... and...)' },
        { key: 'B', text: 'either', vietnameseSub: 'đi với or (either... or...)' },
        { key: 'C', text: 'neither', vietnameseSub: 'đi với nor (neither... nor...)' },
        { key: 'D', text: 'so', vietnameseSub: 'do đó / quá' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. neither. Cặp liên từ tương quan phủ định cố định: "neither ... nor ..." (không ... mà cũng không ...). Vế sau có từ "nor" nên từ còn thiếu bắt buộc phải là "neither".'
    },
    {
      id: 'ts2_q10',
      number: 10,
      section: 'vocab',
      question: 'Small pellets of ice that fall from the sky during a storm are called ______.',
      vietnameseTranslation: 'Những viên băng nhỏ rơi từ trên bầu trời xuống trong cơn giông bão được gọi là mưa đá.',
      options: [
        { key: 'A', text: 'rain', vietnameseSub: 'mưa nước bình thường' },
        { key: 'B', text: 'hail', vietnameseSub: 'mưa đá (pellets of ice)' },
        { key: 'C', text: 'shower', vietnameseSub: 'mưa rào thoáng qua' },
        { key: 'D', text: 'breeze', vietnameseSub: 'cơn gió nhẹ' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. hail. Định nghĩa khí tượng: "hail" nghĩa là mưa đá (những hạt/viên băng đá hình thành từ các đám mây dông rơi xuống đất trong cơn bão).'
    }
  ],

  // II. READING SIGNS & NOTES (5 câu - Questions 11-15)
  readingSignQuestions: [
    {
      id: 'ts2_rs1',
      number: 11,
      section: 'reading_sign',
      signText: "Sam, dinner's in the oven. Please put the leftovers in the fridge and your dirty dishes in the dishwasher.\nLove,",
      signType: 'notice',
      question: 'Look at the text. What does it say? Choose the best answer.',
      vietnameseTranslation: 'Lời nhắn: "Sam ơi, bữa tối có sẵn trong lò nướng. Hãy nhớ cất thức ăn thừa vào tủ lạnh và cho bát đĩa bẩn vào máy rửa bát nhé. Yêu thương,"',
      options: [
        { key: 'A', text: 'Sam should heat up her food before she eats it.', vietnameseSub: 'Sam nên hâm nóng thức ăn trước khi ăn.' },
        { key: 'B', text: "Sam should clean up after she's eaten.", vietnameseSub: 'Sam nên dọn dẹp sạch sẽ sau khi ăn xong.' },
        { key: 'C', text: 'Sam should take the food out of the fridge and eat it.', vietnameseSub: 'Sam nên lấy đồ ăn trong tủ lạnh ra ăn.' },
        { key: 'D', text: 'Sam should take the food out of the oven and put it in the fridge.', vietnameseSub: 'Sam nên lấy thức ăn từ lò nướng cất vào tủ lạnh.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Mẩu giấy dặn Sam cất đồ ăn thừa vào tủ lạnh ("put the leftovers in the fridge") và xếp bát đĩa bẩn vào máy rửa bát ("dirty dishes in the dishwasher"), nghĩa là Sam cần dọn dẹp sau khi ăn xong (Sam should clean up after she\'s eaten).'
    },
    {
      id: 'ts2_rs2',
      number: 12,
      section: 'reading_sign',
      signText: "Jeff,\nI have to work till 9 p.m. today. Could you get dinner ready? It's in the fridge and just needs warming up.\nJane",
      signType: 'info',
      question: 'Look at the text. What does it say? Choose the best answer.',
      vietnameseTranslation: 'Lời nhắn: "Jeff ơi, hôm nay em phải làm việc đến 9 giờ tối. Anh có thể chuẩn bị bữa tối được không? Thức ăn ở trong tủ lạnh rồi, chỉ cần hâm nóng lại thôi nhé. Jane"',
      options: [
        { key: 'A', text: 'Jane needs to think about food for dinner.', vietnameseSub: 'Jane cần nghĩ về món ăn cho bữa tối.' },
        { key: 'B', text: 'Jeff will buy something for dinner.', vietnameseSub: 'Jeff sẽ đi mua đồ cho bữa tối.' },
        { key: 'C', text: 'Jeff needs to prepare dinner.', vietnameseSub: 'Jeff cần chuẩn bị bữa tối.' },
        { key: 'D', text: 'Jane needs to cook food when she finishes work.', vietnameseSub: 'Jane cần nấu ăn khi tan làm.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Jane nhờ Jeff: "Could you get dinner ready?" (Anh có thể chuẩn bị bữa tối được không?), tương đương với "Jeff needs to prepare dinner". Đồ ăn đã có sẵn trong tủ lạnh, chỉ cần hâm nóng.'
    },
    {
      id: 'ts2_rs3',
      number: 13,
      section: 'reading_sign',
      signText: "Dave, there's no milk left. I'll get some on my way home. Buy some eggs and tell Mary to make herself a salad.\nBetty",
      signType: 'info',
      question: 'Look at the text. What does it say? Choose the best answer.',
      vietnameseTranslation: 'Lời nhắn: "Dave à, nhà hết sữa rồi. Em sẽ mua một ít trên đường về nhà. Anh nhớ mua ít trứng và bảo Mary tự làm món salad cho con bé nhé. Betty"',
      options: [
        { key: 'A', text: 'Dave will go to buy some milk.', vietnameseSub: 'Dave sẽ đi mua sữa.' },
        { key: 'B', text: "There's some milk in the fridge.", vietnameseSub: 'Còn một ít sữa trong tủ lạnh.' },
        { key: 'C', text: 'Betty will buy some eggs for Mary.', vietnameseSub: 'Betty sẽ mua trứng cho Mary.' },
        { key: 'D', text: 'Mary knows how to make a salad.', vietnameseSub: 'Mary biết cách tự làm món salad.' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Betty dặn Dave bảo Mary: "tell Mary to make herself a salad" (bảo Mary tự làm món salad ăn), điều này khẳng định rằng Mary có thể tự làm salad (Mary knows how to make a salad). Sữa do Betty mua trên đường về, còn Dave được nhờ mua trứng.'
    },
    {
      id: 'ts2_rs4',
      number: 14,
      section: 'reading_sign',
      signText: 'Special offer for two days only!\nFood items at very, very low prices!',
      signType: 'notice',
      question: 'Look at the text. What does it say? Choose the best answer.',
      vietnameseTranslation: 'Biển quảng cáo: "Ưu đãi đặc biệt chỉ trong 2 ngày! Các mặt hàng thực phẩm với mức giá cực kỳ, cực kỳ rẻ!"',
      options: [
        { key: 'A', text: 'All food items are half price.', vietnameseSub: 'Tất cả thực phẩm đều giảm nửa giá.' },
        { key: 'B', text: "The supermarket doesn't offer low price every day.", vietnameseSub: 'Siêu thị không áp dụng mức giá rẻ này vào tất cả các ngày.' },
        { key: 'C', text: 'Kitchen items are very cheap.', vietnameseSub: 'Đồ dùng nhà bếp rất rẻ.' },
        { key: 'D', text: 'Food will be sold in two days only.', vietnameseSub: 'Thực phẩm chỉ được bán trong 2 ngày.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Biển ghi rõ "Special offer for two days only" (Ưu đãi đặc biệt chỉ duy nhất trong 2 ngày), điều này có nghĩa mức giá rẻ đặc biệt này không phải ngày nào cũng có (The supermarket doesn\'t offer low price every day).'
    },
    {
      id: 'ts2_rs5',
      number: 15,
      section: 'reading_sign',
      signText: 'Dear customers,\nBecause of building work, the supermarket will be closed until further notice.\nSorry for the inconvenience!',
      signType: 'alert',
      question: 'Look at the text. What does it say? Choose the best answer.',
      vietnameseTranslation: 'Thông báo: "Kính gửi quý khách, Do hoạt động thi công xây dựng, siêu thị sẽ tạm thời đóng cửa cho đến khi có thông báo tiếp theo. Thành thật xin lỗi vì sự bất tiện này!"',
      options: [
        { key: 'A', text: 'The supermarket will be opened next week.', vietnameseSub: 'Siêu thị sẽ mở cửa lại vào tuần tới.' },
        { key: 'B', text: 'Customers can go to the supermarket as usual.', vietnameseSub: 'Khách hàng có thể đến siêu thị như thường lệ.' },
        { key: 'C', text: 'The supermarket will not be opened again.', vietnameseSub: 'Siêu thị sẽ không bao giờ mở cửa nữa.' },
        { key: 'D', text: "Customers don't know when the supermarket will be opened again.", vietnameseSub: 'Khách hàng chưa biết khi nào siêu thị sẽ mở cửa trở lại.' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Cụm từ "until further notice" nghĩa là "cho đến khi có thông báo mới". Vì chưa có ngày ấn định mở cửa lại cụ thể nên khách hàng không biết chính xác khi nào siêu thị mở cửa trở lại (Customers don\'t know when the supermarket will be opened again).'
    }
  ],

  // III. READING COMPREHENSION: PASSAGE B (5 câu - Questions 16-20)
  readingPassageBTitle: 'INDONESIAN HOUSING & NATURAL CHALLENGES',
  readingPassageBTag: '5 câu đọc hiểu trắc nghiệm (Câu 16 - 20)',
  readingTonyPassage: `Indonesia is a group of islands, located between Asia and Australia. It is close to the equator, so it never gets cold. Every day, the temperature is between 21°C and 32°C. Indonesia is covered with tropical rainforests. For many years, Indonesians have used wood to build their homes. Most of the old houses have wooden frames, walls and floors. Local people have cleared land for farming, and loggers have cut down miles of trees to sell the wood to other countries. Now there is a serious shortage of trees.

Nowadays, in Indonesia's rural areas, many of the houses are built on stilts. They raise the houses up, keep the living area off the wet soil, and also keep the houses from flooding during the rainy season. Some people still live in houses with only one room, and some of these houses do not have electricity or running water, but they cannot afford to improve their housing.

In Indonesian cities, more and more people live in crowded apartment buildings. However, it is hard for people to find good housing. The electricity often goes out throughout these whole buildings. Moreover, landlords do not want to rent their property to poor people, and banks do not want to lend them money to buy homes.

Because of its location, natural disasters such as floods, droughts, earthquakes and forest fires frequently occur, which destroys buildings and leaves people homeless. These disasters affect people both in the city and in the country.`,

  readingTonyTranslation: `NHÀ Ở VÀ NHỮNG THÁCH THỨC TỰ NHIÊN TẠI INDONESIA
Indonesia là một quốc gia quần đảo nằm giữa châu Á và châu Úc. Nơi đây nằm rất gần đường xích đạo nên khí hậu không bao giờ bị lạnh buốt. Nhiệt độ hàng ngày luôn dao động trong khoảng từ 21°C đến 32°C. Indonesia được bao phủ bởi những cánh rừng mưa nhiệt đới trù phú. Trong nhiều thế kỷ, người dân Indonesia đã sử dụng gỗ để xây dựng nhà cửa. Hầu hết các ngôi nhà cổ xưa đều có hệ khung cột, vách tường và sàn hoàn toàn bằng gỗ. Người dân địa phương đã phá rừng lấy đất làm nông nghiệp, còn lâm tặc và những đơn vị khai thác gỗ đã đốn hạ hàng dặm cây cối để xuất khẩu gỗ sang các quốc gia khác. Hiện nay, đất nước này đang phải đối mặt với tình trạng thiếu hụt tài nguyên rừng và cây gỗ trầm trọng.

Ngày nay, tại các vùng nông thôn của Indonesia, nhiều ngôi nhà được xây dựng trên những chiếc cọc chống cao (nhà sàn). Những chiếc cọc này nâng toàn bộ ngôi nhà lên khỏi mặt đất, giúp khu vực sinh hoạt tránh khỏi nền đất ẩm thấp, đồng thời ngăn nước lũ tràn vào nhà trong suốt mùa mưa lũ. Một bộ phận người dân vẫn phải sống trong những ngôi nhà chật chội chỉ có duy nhất một phòng; một số căn nhà thậm chí không có điện thắp sáng hay nước sạch sinh hoạt, nhưng họ không có đủ tiền để nâng cấp hay cải tạo điều kiện nhà ở của mình.

Tại các đô thị và thành phố của Indonesia, ngày càng có nhiều người dân chuyển đến sinh sống trong các khu chung cư đông đúc chật chội. Tuy nhiên, việc tìm kiếm một chỗ ở tốt là vô cùng khó khăn. Tình trạng mất điện xảy ra thường xuyên trên khắp các tòa nhà chung cư này. Hơn nữa, các chủ nhà trọ không muốn cho người nghèo thuê tài sản của họ, và các ngân hàng cũng từ chối cho họ vay tiền để mua nhà.

Do vị trí địa lý đặc thù, các thảm họa thiên tai như lũ lụt, hạn hán, động đất và cháy rừng diễn ra rất thường xuyên, phá hủy nhiều công trình nhà cửa và đẩy hàng ngàn người vào cảnh vô gia cư. Những thảm họa thiên nhiên này gây ảnh hưởng nặng nề đến đời sống của người dân ở cả thành thị lẫn nông thôn.`,

  readingTonyQuestions: [
    {
      id: 'ts2_rt1',
      number: 16,
      section: 'reading_tony',
      question: 'According to the passage, what causes the shortage of trees in Indonesia?',
      vietnameseTranslation: 'Theo đoạn văn, nguyên nhân nào gây ra tình trạng thiếu hụt cây rừng ở Indonesia?',
      options: [
        { key: 'A', text: 'Clearing land for farming', vietnameseSub: 'Phá rừng lấy đất canh tác nông nghiệp' },
        { key: 'B', text: 'Building wooden houses', vietnameseSub: 'Khai thác gỗ để xây nhà cửa' },
        { key: 'C', text: 'Smuggling wood', vietnameseSub: 'Đốn hạ và buôn bán gỗ sang nước khác' },
        { key: 'D', text: 'A, B, C are correct.', vietnameseSub: 'Cả ba đáp án A, B, C đều đúng' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. A, B, C are correct. Trong đoạn 1 bài đọc nêu rõ: người dân dùng gỗ xây nhà ("used wood to build their homes" -> B), phá đất làm nông nghiệp ("cleared land for farming" -> A), và tiều phu đốn hạ cây để bán sang nước khác ("cut down miles of trees to sell the wood to other countries" -> C). Do đó cả A, B và C đều là các nguyên nhân.'
    },
    {
      id: 'ts2_rt2',
      number: 17,
      section: 'reading_tony',
      question: 'What does the word "They" in paragraph 2 refer to?',
      vietnameseTranslation: 'Từ "They" trong đoạn 2 ám chỉ đến điều gì?',
      options: [
        { key: 'A', text: 'A kind of material', vietnameseSub: 'Một loại vật liệu xây dựng' },
        { key: 'B', text: 'A part of house', vietnameseSub: 'Một bộ phận cấu thành ngôi nhà (những chiếc cọc sàn - stilts)' },
        { key: 'C', text: 'A type of house', vietnameseSub: 'Một kiểu nhà' },
        { key: 'D', text: 'A name of place', vietnameseSub: 'Một địa danh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. A part of house. Trong đoạn 2: "...many of the houses are built on stilts. They raise the houses up..." -> "They" thay thế cho danh từ "stilts" (những chiếc cọc nhà sàn) có tác dụng nâng ngôi nhà lên cao, và cọc sàn là một bộ phận của ngôi nhà (a part of house).'
    },
    {
      id: 'ts2_rt3',
      number: 18,
      section: 'reading_tony',
      question: 'What natural disaster is NOT mentioned in the passage?',
      vietnameseTranslation: 'Thảm họa thiên nhiên nào KHÔNG được nhắc đến trong bài đọc?',
      options: [
        { key: 'A', text: 'Floods', vietnameseSub: 'Lũ lụt (có nhắc trong bài)' },
        { key: 'B', text: 'Droughts', vietnameseSub: 'Hạn hán (có nhắc trong bài)' },
        { key: 'C', text: 'Storms', vietnameseSub: 'Bão tố (KHÔNG được nhắc đến)' },
        { key: 'D', text: 'Earthquakes', vietnameseSub: 'Động đất (có nhắc trong bài)' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Storms. Trong đoạn cuối liệt kê các thảm họa: "floods, droughts, earthquakes and forest fires". Không hề có "storms" (bão tố) được nhắc đến.'
    },
    {
      id: 'ts2_rt4',
      number: 19,
      section: 'reading_tony',
      question: 'What makes poor people difficult to find houses in cities of Indonesia?',
      vietnameseTranslation: 'Điều gì khiến người nghèo gặp nhiều khó khăn khi tìm nhà ở các thành phố của Indonesia?',
      options: [
        { key: 'A', text: 'Lack of housing', vietnameseSub: 'Thiếu nhà ở' },
        { key: 'B', text: 'Lack of financial support from banks', vietnameseSub: 'Thiếu sự hỗ trợ tài chính / vốn vay từ các ngân hàng' },
        { key: 'C', text: 'Lack of electricity or running water', vietnameseSub: 'Thiếu điện hoặc nước sạch' },
        { key: 'D', text: 'Lack of trees', vietnameseSub: 'Thiếu cây xanh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Lack of financial support from banks. Trong đoạn 3 nêu rõ: "...landlords do not want to rent their property to poor people, and banks do not want to lend them money to buy homes" (các ngân hàng không muốn cho người nghèo vay tiền để mua nhà).'
    },
    {
      id: 'ts2_rt5',
      number: 20,
      section: 'reading_tony',
      question: 'What can be the title for the passage?',
      vietnameseTranslation: 'Nhan đề nào sau đây là phù hợp nhất cho đoạn văn?',
      options: [
        { key: 'A', text: 'Indonesian houses', vietnameseSub: 'Những ngôi nhà ở Indonesia' },
        { key: 'B', text: 'Indonesian culture', vietnameseSub: 'Văn hóa Indonesia' },
        { key: 'C', text: 'Indonesian housing problems', vietnameseSub: 'Những vấn đề nan giải về nhà ở tại Indonesia' },
        { key: 'D', text: 'Indonesian lifestyle', vietnameseSub: 'Phong cách sống của người Indonesia' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Indonesian housing problems. Toàn bộ bài đọc tập trung phân tích các khó khăn về nhà ở tại Indonesia: cạn kiệt gỗ xây nhà, nhà sàn tạm bợ thiếu tiện nghi ở nông thôn, chung cư chật chội mất điện và thiếu vốn vay ở thành thị, cùng thiên tai tàn phá nhà cửa.'
    }
  ],

  // IV. READING CLOZE TEST: PASSAGE C (10 câu - Questions 21-30)
  readingPassageCTitle: 'STUDENT-TEACHER RELATIONSHIPS IN THE USA',
  readingPassageCTag: '10 câu điền từ vào đoạn văn (Câu 21 - 30)',
  readingAnnaPassage: `The relationship between students and teachers is (21) ______ formal in the USA than in many other countries, especially at the college level. American college students do not (22) ______ when their teacher enters the room. Students are generally (23) ______ to ask questions in class, to stop in the professor's office for extra help, and to phone if they are (24) ______ and need information. (25) ______ teachers allow students to enter class late or leave early, if necessary. (26) ______ the lack of formality, students are still expected to be (27) ______ to their teacher and fellow classmates. When students want to ask questions, they usually (28) ______ a hand and wait to be (29) ______ on. When the teacher or a student is speaking to the class, it is rude to begin whispering to another classmate. When a test is being given, talking to a classmate is not only rude but also risky. Most American teachers consider that students who are talking to each other during a test are (30) ______.`,

  readingAnnaTranslation: `MỐI QUAN HỆ THẦY TRÒ VÀ NỀN NẾP LỚP HỌC TẠI HOA KỲ
Mối quan hệ giữa sinh viên và giảng viên ở Hoa Kỳ ít trang trọng hơn (21. less formal) so với nhiều quốc gia khác trên thế giới, đặc biệt là ở bậc đại học. Sinh viên đại học Mỹ không đứng dậy (22. stand up) khi giáo viên bước vào phòng học. Sinh viên nhìn chung được khuyến khích (23. encouraged) thoải mái đặt câu hỏi trong giờ học, ghé văn phòng của giáo sư để nhờ hướng dẫn thêm, và gọi điện thoại nếu họ vắng mặt (24. absent) cần nắm bắt thông tin bài giảng. Hầu hết (25. Most) các giảng viên đều cho phép sinh viên vào lớp muộn hoặc về sớm nếu có lý do cần thiết. Mặc dù (26. Despite) sự thiếu tính nghi thức này, sinh viên vẫn luôn được kỳ vọng phải cư xử lịch sự (27. polite) với giáo viên và các bạn cùng lớp. Khi sinh viên muốn đặt câu hỏi, họ thường giơ tay (28. raise a hand) và trật tự đợi được gọi tên (29. called on). Khi giáo viên hoặc một sinh viên đang phát biểu trước cả lớp, việc bắt đầu thì thầm to nhỏ với bạn bên cạnh bị coi là hành vi thô lỗ. Khi đang làm bài kiểm tra, nói chuyện với bạn cùng lớp không chỉ bất lịch sự mà còn rất mạo hiểm. Hầu hết các giáo viên Mỹ đều coi những sinh viên nói chuyện với nhau trong giờ kiểm tra là hành vi đang gian lận thi cử (30. cheating).`,

  readingAnnaQuestions: [
    {
      id: 'ts2_ra1',
      number: 21,
      section: 'reading_anna',
      question: 'Vị trí (21): The relationship between students and teachers is (21) ______ formal in the USA than in many other countries...',
      vietnameseTranslation: 'Mối quan hệ giữa thầy và trò ở Mỹ ít trang trọng hơn so với nhiều quốc gia khác...',
      options: [
        { key: 'A', text: 'much', vietnameseSub: 'nhiều' },
        { key: 'B', text: 'most', vietnameseSub: 'nhất' },
        { key: 'C', text: 'a little', vietnameseSub: 'một chút' },
        { key: 'D', text: 'less', vietnameseSub: 'ít hơn (less formal than)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. less. Cấu trúc so sánh hơn kém với tính từ dài: "less + adj + than" (ít trang trọng hơn). Đoạn văn sau đó giải thích sinh viên không cần đứng dậy khi thầy vào lớp.'
    },
    {
      id: 'ts2_ra2',
      number: 22,
      section: 'reading_anna',
      question: 'Vị trí (22): American college students do not (22) ______ when their teacher enters the room.',
      vietnameseTranslation: 'Sinh viên đại học Mỹ không đứng dậy khi giáo viên bước vào lớp học.',
      options: [
        { key: 'A', text: 'sit up', vietnameseSub: 'ngồi thẳng lưng' },
        { key: 'B', text: 'stand up', vietnameseSub: 'đứng dậy chào' },
        { key: 'C', text: 'go up', vietnameseSub: 'đi lên' },
        { key: 'D', text: 'stay up', vietnameseSub: 'thức khuya' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. stand up. Cụm động từ "stand up" nghĩa là đứng dậy (đứng lên chào giáo viên khi bước vào phòng học).'
    },
    {
      id: 'ts2_ra3',
      number: 23,
      section: 'reading_anna',
      question: 'Vị trí (23): Students are generally (23) ______ to ask questions in class...',
      vietnameseTranslation: 'Sinh viên nhìn chung được khuyến khích đặt câu hỏi trong lớp...',
      options: [
        { key: 'A', text: 'encouraged', vietnameseSub: 'được khuyến khích (thể bị động be encouraged to V)' },
        { key: 'B', text: 'encouraging', vietnameseSub: 'mang tính khích lệ' },
        { key: 'C', text: 'to encourage', vietnameseSub: 'dạng to-V' },
        { key: 'D', text: 'encourage', vietnameseSub: 'nguyên mẫu' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. encouraged. Cấu trúc câu bị động: S + be + PII + to V -> "are generally encouraged to ask" (được khuyến khích đặt câu hỏi).'
    },
    {
      id: 'ts2_ra4',
      number: 24,
      section: 'reading_anna',
      question: 'Vị trí (24): ...and to phone if they are (24) ______ and need information.',
      vietnameseTranslation: '...và gọi điện nếu họ vắng mặt ở lớp và cần thông tin bài học.',
      options: [
        { key: 'A', text: 'wanted', vietnameseSub: 'bị truy nã / được muốn' },
        { key: 'B', text: 'present', vietnameseSub: 'có mặt' },
        { key: 'C', text: 'absent', vietnameseSub: 'vắng mặt, nghỉ học' },
        { key: 'D', text: 'healthy', vietnameseSub: 'khỏe mạnh' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. absent. Khi sinh viên nghỉ học, vắng mặt ("absent"), họ có thể gọi điện thoại cho giáo sư để hỏi thông tin bài học cần thiết.'
    },
    {
      id: 'ts2_ra5',
      number: 25,
      section: 'reading_anna',
      question: 'Vị trí (25): (25) ______ teachers allow students to enter class late or leave early, if necessary.',
      vietnameseTranslation: 'Hầu hết các giáo viên đều cho phép sinh viên vào lớp muộn hoặc về sớm nếu cần.',
      options: [
        { key: 'A', text: 'Most', vietnameseSub: 'Hầu hết (Most + danh từ số nhiều)' },
        { key: 'B', text: 'Most of', vietnameseSub: 'sai ngữ pháp vì không có the/tính từ sở hữu' },
        { key: 'C', text: 'Many of', vietnameseSub: 'sai vì thiếu the' },
        { key: 'D', text: 'Much of', vietnameseSub: 'dùng cho danh từ không đếm được' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Most. Quy tắc lượng từ: "Most + N (số nhiều)" mang nghĩa đa số/hầu hết (Most teachers). Cụm "Most of" chỉ dùng khi đứng trước mạo từ xác định "the" hoặc đại từ chỉ định/sở hữu.'
    },
    {
      id: 'ts2_ra6',
      number: 26,
      section: 'reading_anna',
      question: 'Vị trí (26): (26) ______ the lack of formality, students are still expected to be polite...',
      vietnameseTranslation: 'Mặc dù thiếu tính nghi thức trang trọng, sinh viên vẫn được kỳ vọng phải cư xử lịch sự...',
      options: [
        { key: 'A', text: 'Though', vietnameseSub: 'đi với mệnh đề S + V' },
        { key: 'B', text: 'Although', vietnameseSub: 'đi với mệnh đề S + V' },
        { key: 'C', text: 'In spite to', vietnameseSub: 'sai giới từ (phải là in spite of)' },
        { key: 'D', text: 'Despite', vietnameseSub: 'mặc dù + cụm danh từ' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Despite. Phía sau là cụm danh từ "the lack of formality" (sự thiếu vắng tính trang trọng), vì vậy liên từ phù hợp bắt buộc là "Despite" (Despite + Noun phrase).'
    },
    {
      id: 'ts2_ra7',
      number: 27,
      section: 'reading_anna',
      question: 'Vị trí (27): ...students are still expected to be (27) ______ to their teacher and fellow classmates.',
      vietnameseTranslation: '...sinh viên vẫn luôn được yêu cầu phải cư xử lịch sự với thầy cô và các bạn cùng lớp.',
      options: [
        { key: 'A', text: 'impolite', vietnameseSub: 'bất lịch sự' },
        { key: 'B', text: 'rude', vietnameseSub: 'thô lỗ' },
        { key: 'C', text: 'polite', vietnameseSub: 'lịch sự, nhã nhặn' },
        { key: 'D', text: 'kind', vietnameseSub: 'tốt bụng' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. polite. Cấu trúc "be polite to someone" nghĩa là cư xử lịch sự, lễ phép với ai.'
    },
    {
      id: 'ts2_ra8',
      number: 28,
      section: 'reading_anna',
      question: 'Vị trí (28): When students want to ask questions, they usually (28) ______ a hand...',
      vietnameseTranslation: 'Khi sinh viên muốn đặt câu hỏi, họ thường giơ tay...',
      options: [
        { key: 'A', text: 'raise', vietnameseSub: 'giơ lên (raise a hand: giơ tay)' },
        { key: 'B', text: 'hold', vietnameseSub: 'cầm nắm' },
        { key: 'C', text: 'hang', vietnameseSub: 'treo lên' },
        { key: 'D', text: 'rise', vietnameseSub: 'tự mọc lên/nổi lên (nội động từ không có tân ngữ)' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. raise. Ngoại động từ đi với tân ngữ cánh tay: "raise a hand" nghĩa là giơ tay phát biểu. "rise" là nội động từ không có tân ngữ phía sau.'
    },
    {
      id: 'ts2_ra9',
      number: 29,
      section: 'reading_anna',
      question: 'Vị trí (29): ...and wait to be (29) ______ on.',
      vietnameseTranslation: '...và đợi được giáo viên gọi tên phát biểu.',
      options: [
        { key: 'A', text: 'gone', vietnameseSub: 'đã đi' },
        { key: 'B', text: 'called', vietnameseSub: 'gọi (call on: mời phát biểu)' },
        { key: 'C', text: 'invited', vietnameseSub: 'được mời' },
        { key: 'D', text: 'left', vietnameseSub: 'bị bỏ rơi' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. called. Cụm động từ "call on someone" trong lớp học nghĩa là chỉ định, mời ai đó đứng lên trả lời hoặc phát biểu. Dạng bị động: "wait to be called on" (đợi được chỉ định gọi tên).'
    },
    {
      id: 'ts2_ra10',
      number: 30,
      section: 'reading_anna',
      question: 'Vị trí (30): Most American teachers consider that students who are talking to each other during a test are (30) ______.',
      vietnameseTranslation: 'Hầu hết giáo viên Mỹ đều coi những sinh viên nói chuyện với nhau trong giờ làm bài thi là hành vi gian lận.',
      options: [
        { key: 'A', text: 'friendly', vietnameseSub: 'thân thiện' },
        { key: 'B', text: 'obedient', vietnameseSub: 'ngoan ngoãn, vâng lời' },
        { key: 'C', text: 'cheating', vietnameseSub: 'gian lận thi cử' },
        { key: 'D', text: 'playing', vietnameseSub: 'đùa giỡn' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. cheating. Nói chuyện trong giờ thi (during a test) bị các giám thị và giáo viên coi là hành vi gian lận thi cử ("cheating").'
    }
  ],

  // V. WRITING TRANSFORMATIONS (5 câu - Questions 31-35)
  sentenceTransformations: [
    {
      id: 'ts2_w1',
      number: 31,
      originalSentence: 'Although it was raining, they continued the football match.',
      vietnameseTranslation: 'Mặc dù trời mưa, họ vẫn tiếp tục trận đấu bóng đá.',
      prefix: 'In spite of',
      modelAnswer: 'In spite of the rain, they continued the football match.',
      vietnameseModelTranslation: 'Bất chấp cơn mưa, họ vẫn tiếp tục trận thi đấu bóng đá.',
      acceptedAnswers: [
        'the rain, they continued the football match',
        'the rain, they continued the football match.',
        'the rain they continued the football match',
        'the rain they continued the football match.',
        'the bad weather, they continued the football match',
        'the bad weather, they continued the football match.',
        'raining, they continued the football match',
        'raining, they continued the football match.'
      ],
      grammarPoint: 'Cấu trúc chuyển đổi liên từ chỉ sự nhượng bộ: Although + S + V = In spite of + Noun / V-ing.'
    },
    {
      id: 'ts2_w2',
      number: 32,
      originalSentence: '"How many students are there in your class?"',
      vietnameseTranslation: '"Có bao nhiêu sinh viên trong lớp học của bạn?"',
      prefix: 'The man asked me',
      modelAnswer: 'The man asked me how many students there were in my class.',
      vietnameseModelTranslation: 'Người đàn ông đã hỏi tôi có bao nhiêu sinh viên trong lớp của tôi.',
      acceptedAnswers: [
        'how many students there were in my class',
        'how many students there were in my class.',
        'how many students there were in our class',
        'how many students there were in our class.'
      ],
      grammarPoint: 'Cấu trúc câu tường thuật gián tiếp dạng câu hỏi Wh-question: S + asked + O + Wh-word + S + V(lùi thì). Đổi "are there" thành "there were" và "your class" thành "my class".'
    },
    {
      id: 'ts2_w3',
      number: 33,
      originalSentence: 'They sell vegetables in this shop.',
      vietnameseTranslation: 'Họ bán rau củ quả ở cửa hàng này.',
      prefix: 'Vegetables',
      modelAnswer: 'Vegetables are sold in this shop.',
      vietnameseModelTranslation: 'Rau củ quả được bày bán ở cửa hàng này.',
      acceptedAnswers: [
        'are sold in this shop',
        'are sold in this shop.'
      ],
      grammarPoint: 'Cấu trúc câu bị động ở thì Hiện tại đơn: S(số nhiều) + are + PII (sold) + trạng từ nơi chốn.'
    },
    {
      id: 'ts2_w4',
      number: 34,
      originalSentence: 'People believe that regular exercise helps to reduce stress.',
      vietnameseTranslation: 'Mọi người tin rằng việc tập thể dục đều đặn giúp làm giảm căng thẳng.',
      prefix: 'It is believed that',
      modelAnswer: 'It is believed that regular exercise helps to reduce stress.',
      vietnameseModelTranslation: 'Người ta tin rằng việc tập thể dục đều đặn giúp giảm bớt căng thẳng.',
      acceptedAnswers: [
        'regular exercise helps to reduce stress',
        'regular exercise helps to reduce stress.'
      ],
      grammarPoint: 'Cấu trúc câu bị động khách quan (impersonal passive): People believe that + S + V = It is believed that + S + V.'
    },
    {
      id: 'ts2_w5',
      number: 35,
      originalSentence: 'He spent two hours finishing his homework.',
      vietnameseTranslation: 'Cậu ấy đã dành ra hai tiếng đồng hồ để hoàn thành bài tập về nhà.',
      prefix: 'It took',
      modelAnswer: 'It took him two hours to finish his homework.',
      vietnameseModelTranslation: 'Cậu ấy đã mất hai tiếng đồng hồ để hoàn thành bài tập về nhà của mình.',
      acceptedAnswers: [
        'him two hours to finish his homework',
        'him two hours to finish his homework.'
      ],
      grammarPoint: 'Cấu trúc tiêu tốn thời gian ở thì quá khứ: S + spent + time + V-ing = It took + O + time + to-V.'
    }
  ],

  // VI. TỰ LUẬN VIẾT THƯ (Section 2 - 120 từ)
  letterWriting: {
    topic: 'Write a letter (about 120 words) to your friend about sport.',
    vietnameseTranslation: 'Đề bài: Hãy viết một lá thư (khoảng 120 từ) gửi cho bạn của bạn kể về môn thể thao mà bạn yêu thích.',
    requirements: [
      'What is your favourite sport and when did you start playing it? (Môn thể thao bạn yêu thích là gì và bạn bắt đầu chơi từ khi nào?)',
      'Where and how often do you play it? (Bạn chơi ở đâu và tần suất bao nhiêu lần một tuần?)',
      'Why do you enjoy it and invite your friend to join you. (Tại sao bạn thích môn đó và hãy mời bạn mình cùng tham gia).'
    ],
    note: 'Write the body of the letter only. Do NOT write your name, your address and your signature in the letter!',
    targetWordCount: 120,
    sample: `Dear Hoa,

How are you? I'm writing to tell you about my favourite sport, swimming.

I started swimming five years ago when my doctor advised me to do more exercise. Now I go to the city swimming pool three times a week, usually in the early evening after work. I swim for about an hour, and then I relax in the sauna. Swimming keeps me fit, reduces my stress and helps me sleep better. At weekends, I sometimes swim with my friends and we have small races, which is a lot of fun.

Do you play any sports? If you are free next Sunday, why don't you join me at the pool?

Looking forward to hearing from you.

Love,
Minh`,
    sampleTranslation: `Chào Hoa,

Dạo này bạn thế nào rồi? Mình viết thư này để kể cho bạn nghe về môn thể thao yêu thích nhất của mình, đó là môn bơi lội.

Mình bắt đầu học bơi từ năm năm trước khi bác sĩ khuyên mình nên tập thể dục nhiều hơn. Hiện tại mình đi đến hồ bơi thành phố ba lần một tuần, thường là vào đầu giờ tối sau khi tan làm. Mình bơi khoảng một tiếng, sau đó thư giãn trong phòng xông hơi. Bơi lội giúp mình giữ dáng thon gọn, giải tỏa căng thẳng và giúp mình ngủ ngon giấc hơn. Vào các dịp cuối tuần, thỉnh thoảng mình bơi cùng bạn bè và chúng mình tổ chức những cuộc đua nhỏ, rất vui nhộn.

Bạn có chơi môn thể thao nào không? Nếu Chủ nhật tới bạn rảnh rỗi, sao bạn không đến hồ bơi tham gia cùng mình nhỉ?

Rất mong sớm nhận được hồi âm từ bạn.

Thân mến,
Minh`
  },

  // Phần Luyện nói (Speaking Card tương thích giao diện)
  speakingCard: {
    cardNumber: 'Mã đề 02',
    title: 'SPEAKING CARD – Mã đề 02: Talk about education and sports',
    task: 'Talk about your study habits and the importance of physical sports.',
    vietnameseTranslation: 'Hãy nói về thói quen học tập của bạn và tầm quan trọng của thể thao rèn luyện sức khỏe.',
    prompts: [
      'How do you communicate with your teachers and classmates? (Bạn giao tiếp với thầy cô và bạn học như thế nào?)',
      'Which sport do you play to stay healthy? (Bạn chơi môn thể thao nào để giữ gìn sức khỏe?)',
      'What are the physical and mental benefits of regular exercise? (Lợi ích thể chất và tinh thần của việc tập luyện là gì?)'
    ],
    sample: `In my university life, maintaining a good balance between study and physical health is very important. In class, I always respect my teachers and actively participate in group discussions with my classmates. Whenever I have difficulties with assignments, I politely ask my professors for guidance. Besides studying, I swim and cycle regularly. Playing sports helps relieve academic pressure, strengthens my immune system, and brings me clear concentration for my study. A healthy body creates a sharp and successful mind.`,
    sampleTranslation: `Trong đời sống sinh viên đại học, việc duy trì sự cân bằng giữa học tập và sức khỏe thể chất là vô cùng quan trọng. Trên lớp, tôi luôn tôn trọng thầy cô và tích cực tham gia thảo luận nhóm cùng các bạn. Bất cứ khi nào gặp khó khăn trong bài tập, tôi luôn lễ phép nhờ các giáo sư hướng dẫn thêm. Ngoài giờ học, tôi thường xuyên bơi lội và đạp xe. Luyện tập thể thao giúp giải tỏa áp lực thi cử, tăng cường hệ miễn dịch và mang lại sự tập trung sáng suốt cho việc học. Một cơ thể khỏe mạnh sẽ tạo nên một trí tuệ minh mẫn và thành công.`
  },

  // Phần Luyện nghe bổ trợ (để tab Nghe hoạt động chuẩn mực)
  listeningPartA: [
    {
      id: 'ts2_l1',
      number: 1,
      question: 'Where will the friends meet?',
      vietnameseTranslation: 'Những người bạn sẽ hẹn gặp nhau ở đâu?',
      options: [
        { key: 'A', text: 'A (Café with tables and lamps)', vietnameseSub: 'Tại quán cà phê có bàn và đèn' },
        { key: 'B', text: 'B (In front of building entrance)', vietnameseSub: 'Trước lối vào tòa nhà' },
        { key: 'C', text: 'C (People waiting at bus/train)', vietnameseSub: 'Tại điểm chờ xe buýt / tàu lửa' }
      ],
      note: 'Phần Nghe hỗ trợ ôn luyện nhận diện từ khóa kỳ thi.',
      suggestedAnswer: 'A'
    },
    {
      id: 'ts2_l2',
      number: 2,
      question: 'What has the girl forgotten to bring?',
      vietnameseTranslation: 'Cô gái đã quên mang theo món đồ gì?',
      options: [
        { key: 'A', text: 'A (Pen)', vietnameseSub: 'Cây bút' },
        { key: 'B', text: 'B (Keys)', vietnameseSub: 'Chùm chìa khóa' },
        { key: 'C', text: 'C (Papers/documents)', vietnameseSub: 'Tài liệu giấy tờ' }
      ],
      suggestedAnswer: 'B'
    },
    {
      id: 'ts2_l3',
      number: 3,
      question: 'Which TV programme is on at 9 o\'clock tonight?',
      vietnameseTranslation: 'Chương trình truyền hình nào sẽ phát sóng lúc 9 giờ tối nay?',
      options: [
        { key: 'A', text: 'A (Ski jumping)', vietnameseSub: 'Trượt tuyết nhảy xa' },
        { key: 'B', text: 'B (Dolphins/underwater)', vietnameseSub: 'Thế giới cá heo dưới nước' },
        { key: 'C', text: 'C (Cooking, wok)', vietnameseSub: 'Chương trình nấu ăn' }
      ],
      suggestedAnswer: 'B'
    },
    {
      id: 'ts2_l4',
      number: 4,
      question: 'How will the man book tickets for the show?',
      vietnameseTranslation: 'Người đàn ông sẽ đặt vé cho buổi biểu diễn bằng cách nào?',
      options: [
        { key: 'A', text: 'A (Magazine/booklet)', vietnameseSub: 'Tạp chí sách giới thiệu' },
        { key: 'B', text: 'B (Mobile phone)', vietnameseSub: 'Điện thoại di động' },
        { key: 'C', text: 'C (Computer/Internet)', vietnameseSub: 'Máy vi tính qua mạng Internet' }
      ],
      suggestedAnswer: 'C'
    },
    {
      id: 'ts2_l5',
      number: 5,
      question: 'What will the man do this winter?',
      vietnameseTranslation: 'Người đàn ông sẽ làm gì vào mùa đông này?',
      options: [
        { key: 'A', text: 'A (Gardening)', vietnameseSub: 'Làm vườn' },
        { key: 'B', text: 'B (Shopping/supermarket)', vietnameseSub: 'Đi siêu thị mua sắm' },
        { key: 'C', text: 'C (Bricklaying outdoors)', vietnameseSub: 'Xây tường ngoài trời' }
      ],
      suggestedAnswer: 'A'
    }
  ],

  listeningPartB: {
    title: 'INDONESIAN NATURAL DISASTERS AND HOUSING STUDY',
    intro: 'Listen to a short academic talk and fill in each blank with ONE suitable word.',
    vietnameseTranslation: 'Bài tập luyện nghe: Nghe đoạn thuyết trình học thuật và điền một từ thích hợp vào chỗ trống.',
    blanks: [
      {
        blankIndex: 1,
        label: '1. In rural areas, houses are built on (1) _______ to prevent flooding.',
        hint: 'Cọc nhà sàn (ví dụ: stilts)',
        acceptableAnswers: ['stilts', 'stilt']
      },
      {
        blankIndex: 2,
        label: '2. The daily temperature stays between 21 and (2) _______ degrees Celsius.',
        hint: 'Số độ C (ví dụ: 32 / thirty-two)',
        acceptableAnswers: ['32', 'thirty-two', 'thirty two']
      },
      {
        blankIndex: 3,
        label: '3. Floods and forest (3) _______ are frequent natural hazards in the region.',
        hint: 'Hỏa hoạn / cháy rừng (ví dụ: fires)',
        acceptableAnswers: ['fires', 'fire']
      }
    ]
  }
};

const output = `// Dữ liệu ngân hàng câu hỏi Tiếng Anh Đầu Ra
// ĐỀ THI ĐÁNH GIÁ NĂNG LỰC TIẾNG ANH ĐẦU VÀO TRÌNH ĐỘ THẠC SĨ NĂM 2025
// BỘ XÂY DỰNG - TRƯỜNG ĐẠI HỌC XÂY DỰNG MIỀN TRUNG - MÃ ĐỀ 02
// Đầy đủ 100% câu hỏi, đáp án, giải thích chi tiết, bản dịch song ngữ và bài viết mẫu

const EXAM_DATA_THACSI2 = ${JSON.stringify(thacsi2Data, null, 2)};

if (typeof window !== "undefined") {
  window.EXAM_DATA_THACSI2 = EXAM_DATA_THACSI2;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = EXAM_DATA_THACSI2;
}
`;

fs.writeFileSync('data_thacsi2.js', output, 'utf8');
console.log('✅ Đã tạo thành công file data_thacsi2.js! Độ dài:', output.length);
