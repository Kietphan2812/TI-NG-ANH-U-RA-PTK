// Script tạo tự động dữ liệu Topic 3: SPORTS
// Nguồn: Đề thi và tài liệu ôn tập chuẩn Tiếng Anh Đầu Ra
const fs = require('fs');

const topic3Data = {
  topicId: 'topic3',
  topicTitle: 'TOPIC 3: SPORTS',
  topicSubtitle: 'Thể thao (Từ vựng, Thì quá khứ, Đọc hiểu Thảm họa thể thao & Chọn môn thể thao)',

  vocabulary: [
    { word: '(play) extreme sport(s)', ipa: '/ɪkˈstriːm spɔːt/', pos: 'n. phr.', meaning: 'thể thao mạo hiểm', example: 'He loves the thrill of extreme sports like skydiving.' },
    { word: 'motor racing', ipa: '/ˈməʊtə(r) ˈreɪsɪŋ/', pos: 'n.', meaning: 'đua xe ô tô', example: 'Motor racing requires intense focus and exceptional driving skills.' },
    { word: '(go) surfing', ipa: '/ˈsɜːrfɪŋ/', pos: 'n.', meaning: 'lướt sóng', example: 'They go surfing at the beach every summer weekend.' },
    { word: '(do) gymnastics', ipa: '/dʒɪmˈnæstɪks/', pos: 'n.', meaning: 'môn thể dục dụng cụ', example: 'She has been doing gymnastics since she was six years old.' },
    { word: '(do the) high jump', ipa: '/haɪ dʒʌmp/', pos: 'n.', meaning: 'nhảy cao', example: 'He set a new school record in the high jump.' },
    { word: '(do the) long jump', ipa: '/lɒŋ dʒʌmp/', pos: 'n.', meaning: 'nhảy xa', example: 'She won a gold medal for her performance in the long jump.' },
    { word: '(go) snowboarding', ipa: '/ˈsnəʊbɔːrdɪŋ/', pos: 'n.', meaning: 'trượt ván tuyết', example: 'Many tourists go snowboarding in the mountains during winter.' },
    { word: '(play) rugby', ipa: '/ˈrʌɡbi/', pos: 'n.', meaning: 'bóng bầu dục', example: 'Rugby is a physical sport very popular in the UK and Australia.' },
    { word: '(go) horse riding', ipa: '/hɔːrs ˈraɪdɪŋ/', pos: 'n.', meaning: 'cưỡi ngựa', example: 'She enjoys going horse riding across the countryside.' },
    { word: '(play) ice hockey', ipa: '/aɪs ˈhɒki/', pos: 'n.', meaning: 'khúc côn cầu trên băng', example: 'Ice hockey is the national winter sport of Canada.' },
    { word: '(play) golf', ipa: '/ɡɒlf/', pos: 'n.', meaning: 'môn đánh gôn', example: 'My uncle plays golf with his colleagues every Sunday morning.' },
    { word: '(go) sailing', ipa: '/ˈseɪlɪŋ/', pos: 'n.', meaning: 'đi thuyền buồm', example: 'They rented a boat to go sailing along the coastline.' },
    { word: '(go) ice skating', ipa: '/aɪs ˈskeɪtɪŋ/', pos: 'n.', meaning: 'trượt băng', example: 'The children had a wonderful time going ice skating in the rink.' },
    { word: '(go) cycling', ipa: '/ˈsaɪklɪŋ/', pos: 'n.', meaning: 'đi/đua xe đạp', example: 'Going cycling every morning is great for cardiovascular health.' },
    { word: '(play) cricket', ipa: '/ˈkrɪkɪt/', pos: 'n.', meaning: 'bóng gậy', example: 'Cricket is widely played and passionately followed in England and India.' },
    { word: 'athlete(s)', ipa: '/ˈæθliːt/', pos: 'n.', meaning: 'vận động viên', example: 'Top athletes train for many hours every single day.' },
    { word: 'cyclist', ipa: '/ˈsaɪklɪst/', pos: 'n.', meaning: 'vận động viên đua xe đạp', example: 'The French cyclist crossed the finish line first to win the race.' },
    { word: 'court', ipa: '/kɔːt/', pos: 'n.', meaning: 'sân (chơi tennis/bóng rổ)', example: 'They booked a tennis court for two hours this afternoon.' },
    { word: 'racquet / racket', ipa: '/ˈrækɪt/', pos: 'n.', meaning: 'vợt (tennis hoặc cầu lông)', example: 'He bought a lightweight carbon racquet for the championship.' },
    { word: 'race track', ipa: '/reɪs træk/', pos: 'n.', meaning: 'đường đua', example: 'The Formula 1 cars zoomed around the race track at high speed.' },
    { word: 'match', ipa: '/mætʃ/', pos: 'n.', meaning: 'trận đấu', example: 'Thousands of fans filled the arena to watch the final match.' },
    { word: 'stadium', ipa: '/ˈsteɪdiəm/', pos: 'n.', meaning: 'sân vận động', example: 'Emirates Stadium is the famous home ground of Arsenal FC.' },
    { word: 'coach', ipa: '/kəʊtʃ/', pos: 'n.', meaning: 'huấn luyện viên', example: 'The coach encouraged the players during the half-time break.' },
    { word: 'prize', ipa: '/praɪz/', pos: 'n.', meaning: 'giải thưởng', example: 'The first prize was a trophy and a five-thousand-dollar cash reward.' },
    { word: 'helmet', ipa: '/ˈhelmɪt/', pos: 'n.', meaning: 'mũ bảo hiểm', example: 'Always wear a protective helmet when you go cycling or riding.' },
    { word: 'swimsuit', ipa: '/ˈswɪmsuːt/', pos: 'n.', meaning: 'đồ bơi', example: 'Remember to pack your swimsuit because we are visiting the resort pool.' },
    { word: 'championship', ipa: '/ˈtʃæmpiənʃɪp/', pos: 'n.', meaning: 'chức vô địch, giải vô địch', example: 'The team worked hard all season to win the national championship.' },
    { word: 'changing room', ipa: '/ˈtʃeɪndʒɪŋ ruːm/', pos: 'n.', meaning: 'phòng thay đồ', example: 'The players left their bags in the changing room before the game.' },
    { word: 'compete', ipa: '/kəmˈpiːt/', pos: 'v.', meaning: 'thi đấu, cạnh tranh', example: 'Over five hundred athletes will compete in the upcoming games.' },
    { word: 'competition', ipa: '/ˌkɒmpəˈtɪʃn/', pos: 'n.', meaning: 'cuộc thi đấu', example: 'She took part in an international swimming competition.' },
    { word: 'competitor', ipa: '/kəmˈpetɪtə(r)/', pos: 'n.', meaning: 'đối thủ, người dự thi', example: 'Each competitor gave their maximum effort to cross the finish line.' },
    { word: 'versus (vs)', ipa: '/ˈvɜːsəs/', pos: 'prep.', meaning: 'đấu với', example: 'Tonight\'s feature match is Real Madrid versus Barcelona.' },
    { word: 'score', ipa: '/skɔː(r)/', pos: 'n./v.', meaning: 'tỷ số, ghi bàn', example: 'He scored the winning goal in the final minute of the match.' },
    { word: 'win', ipa: '/wɪn/', pos: 'v.', meaning: 'thắng, chiến thắng', example: 'Our team hopes to win the regional tournament this year.' },
    { word: 'lose', ipa: '/luːz/', pos: 'v.', meaning: 'thua, thất bại', example: 'They played well but unfortunately lost the match by one point.' },
    { word: 'draw', ipa: '/drɔː/', pos: 'v.', meaning: 'hòa (tỷ số)', example: 'Liverpool drew Arsenal 3-3 in a thrilling, high-scoring contest.' },
    { word: 'support', ipa: '/səˈpɔːt/', pos: 'v.', meaning: 'cổ vũ, ủng hộ', example: 'Which local football club do you and your friends support?' },
    { word: 'catch', ipa: '/kætʃ/', pos: 'v.', meaning: 'bắt bóng', example: 'The goalkeeper jumped up high and managed to catch the ball safely.' },
    { word: 'hit', ipa: '/hɪt/', pos: 'v.', meaning: 'đánh, ném trúng', example: 'You need to hit the ball over the net and into the opponent\'s court.' },
    { word: 'throw', ipa: '/θrəʊ/', pos: 'v.', meaning: 'ném, quăng', example: 'He threw the ball accurately to his teammate across the court.' },
    { word: 'kick', ipa: '/kɪk/', pos: 'v.', meaning: 'đá, sút (bóng)', example: 'He kicked the ball with great power straight into the top corner.' }
  ],

  vocabularyQuestions: [
    {
      id: 't3_v1',
      number: 1,
      section: 'vocab',
      question: 'He came into the room while they ______ television.',
      vietnameseTranslation: 'Anh ấy bước vào phòng trong khi họ đang xem tivi.',
      options: [
        { key: 'A', text: 'have watched', vietnameseSub: 'đã xem (Hiện tại hoàn thành)' },
        { key: 'B', text: 'watched', vietnameseSub: 'đã xem (Quá khứ đơn)' },
        { key: 'C', text: 'were watching', vietnameseSub: 'đang xem (Quá khứ tiếp diễn)' },
        { key: 'D', text: 'have been watching', vietnameseSub: 'đã và đang xem (HTHT tiếp diễn)' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. were watching. Cấu trúc diễn tả một hành động đang diễn ra trong quá khứ thì có một hành động khác xen vào: S1 + V(QKĐ) + while + S2 + was/were + V-ing. Vế "they were watching television" chia Quá khứ tiếp diễn cho chủ ngữ số nhiều "they".'
    },
    {
      id: 't3_v2',
      number: 2,
      section: 'vocab',
      question: 'When he was in England in 1984, he ______ to a restaurant for lunch and ______ his wife there.',
      vietnameseTranslation: 'Khi ông ấy ở nước Anh vào năm 1984, ông ấy đã đến một nhà hàng ăn trưa và đã gặp người vợ của mình tại đó.',
      options: [
        { key: 'A', text: 'went/ met', vietnameseSub: 'đã đi / đã gặp (cả hai đều chia Quá khứ đơn)' },
        { key: 'B', text: 'was going/ met', vietnameseSub: 'đang đi / đã gặp' },
        { key: 'C', text: 'went/ was meeting', vietnameseSub: 'đã đi / đang gặp' },
        { key: 'D', text: 'has gone/ met', vietnameseSub: 'đã đi (HTHT) / đã gặp' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. went/ met. Có mốc thời gian xác định kết thúc trong quá khứ ("in 1984"). Hai hành động xảy ra nối tiếp nhau trong quá khứ nên cả hai động từ đều chia ở thì Quá khứ đơn (went và met).'
    },
    {
      id: 't3_v3',
      number: 3,
      section: 'vocab',
      question: 'When she was young, she often ______ swimming after school.',
      vietnameseTranslation: 'Khi còn trẻ/nhỏ, cô ấy thường hay đi bơi sau giờ tan học.',
      options: [
        { key: 'A', text: 'is going', vietnameseSub: 'đang đi (Hiện tại tiếp diễn)' },
        { key: 'B', text: 'was going', vietnameseSub: 'đang đi (Quá khứ tiếp diễn)' },
        { key: 'C', text: 'went', vietnameseSub: 'đã đi (Quá khứ đơn diễn tả thói quen)' },
        { key: 'D', text: 'All are correct', vietnameseSub: 'Tất cả đều đúng' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. went. Mệnh đề thời gian "When she was young" chỉ thời điểm trong quá khứ, kết hợp với trạng từ tần suất "often" diễn tả một thói quen lặp đi lặp lại trong quá khứ nên dùng thì Quá khứ đơn: "went".'
    },
    {
      id: 't3_v4',
      number: 4,
      section: 'vocab',
      question: 'When my mum got home, ______.',
      vietnameseTranslation: 'Khi mẹ tôi về đến nhà, tôi đang nấu bữa tối.',
      options: [
        { key: 'A', text: 'the dinner be cooked', vietnameseSub: 'sai ngữ pháp bị động' },
        { key: 'B', text: 'I was cooking dinner', vietnameseSub: 'tôi đang nấu bữa tối (Quá khứ tiếp diễn)' },
        { key: 'C', text: 'I am cooking dinner', vietnameseSub: 'tôi đang nấu bữa tối (Hiện tại tiếp diễn)' },
        { key: 'D', text: 'the dinner being cooked', vietnameseSub: 'thiếu trợ động từ to be' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. I was cooking dinner. Hành động đang xảy ra trong quá khứ (tôi đang nấu bữa tối - Quá khứ tiếp diễn: I was cooking dinner) thì một hành động ngắn khác xen vào (mẹ tôi về đến nhà - Quá khứ đơn: When my mum got home).'
    },
    {
      id: 't3_v5',
      number: 5,
      section: 'vocab',
      question: 'One morning, Sue got up early. The sun ______ and the birds ______.',
      vietnameseTranslation: 'Một buổi sáng nọ, Sue thức dậy sớm. Mặt trời đang tỏa nắng và những chú chim đang ríu rít hót ca.',
      options: [
        { key: 'A', text: 'shone/ sang', vietnameseSub: 'đã tỏa nắng / đã hót (Quá khứ đơn)' },
        { key: 'B', text: 'was shining/ were singing', vietnameseSub: 'đang tỏa nắng / đang hót (Quá khứ tiếp diễn)' },
        { key: 'C', text: 'shone/ were singing', vietnameseSub: 'tỏa nắng / đang hót' },
        { key: 'D', text: 'was shining/ sang', vietnameseSub: 'đang tỏa nắng / đã hót' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. was shining/ were singing. Thì Quá khứ tiếp diễn được dùng để miêu tả khung cảnh nền thiên nhiên diễn ra đồng thời tại một thời điểm trong câu chuyện quá khứ.'
    },
    {
      id: 't3_v6',
      number: 6,
      section: 'vocab',
      question: 'Emirates ______ will host an international friendly football match between Brazil and Chile on Sunday, March 29.',
      vietnameseTranslation: 'Sân vận động Emirates sẽ đăng cai tổ chức trận giao hữu bóng đá quốc tế giữa Brazil và Chile vào Chủ nhật ngày 29 tháng 3.',
      options: [
        { key: 'A', text: 'stadium', vietnameseSub: 'sân vận động' },
        { key: 'B', text: 'race track', vietnameseSub: 'đường đua xe' },
        { key: 'C', text: 'court', vietnameseSub: 'sân chơi quần vợt / bóng rổ' },
        { key: 'D', text: 'changing room', vietnameseSub: 'phòng thay đồ' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. stadium. "Emirates Stadium" là sân vận động bóng đá nổi tiếng quốc tế đặt tại London. Các từ khác: race track (đường đua), court (sân tennis/bóng rổ), changing room (phòng thay đồ).'
    },
    {
      id: 't3_v7',
      number: 7,
      section: 'vocab',
      question: 'Liverpool ______ Arsenal 3-3 to remain in the middle of the standings after five rounds with nine points.',
      vietnameseTranslation: 'Liverpool đã hòa Arsenal với tỷ số 3-3 để tiếp tục đứng ở giữa bảng xếp hạng sau 5 vòng đấu với 9 điểm.',
      options: [
        { key: 'A', text: 'won', vietnameseSub: 'đã thắng' },
        { key: 'B', text: 'drew', vietnameseSub: 'đã hòa (quá khứ của draw)' },
        { key: 'C', text: 'lost', vietnameseSub: 'đã thua' },
        { key: 'D', text: 'scored', vietnameseSub: 'đã ghi bàn' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. drew. Kết quả tỷ số cân bằng 3-3 là một trận hòa, ta dùng động từ "drew" (dạng quá khứ của draw: draw with / draw sb + score). "Liverpool drew Arsenal 3-3" = Liverpool hòa Arsenal 3-3.'
    },
    {
      id: 't3_v8',
      number: 8,
      section: 'vocab',
      question: 'In Australian Open Tennis Final 2015, Djokovic celebrated the win by throwing his ______ into the crowd.',
      vietnameseTranslation: 'Trong trận chung kết giải Quần vợt Úc Mở rộng 2015, Djokovic đã ăn mừng chiến thắng bằng cách ném chiếc vợt của mình về phía đám đông khán giả.',
      options: [
        { key: 'A', text: 'racquet', vietnameseSub: 'chiếc vợt (tennis)' },
        { key: 'B', text: 'helmet', vietnameseSub: 'mũ bảo hiểm' },
        { key: 'C', text: 'swimsuit', vietnameseSub: 'bộ đồ bơi' },
        { key: 'D', text: 'court', vietnameseSub: 'sân thi đấu' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. racquet (hoặc racket). Novak Djokovic là tay vợt quần vợt hàng đầu, nên sau khi vô địch giải Australian Open, vật dụng anh ném tặng người hâm mộ chính là cây vợt tennis (racquet).'
    },
    {
      id: 't3_v9',
      number: 9,
      section: 'vocab',
      question: 'John Wooden became the only college basketball ______ with 10 national championships. He led his team to a record 323 wins.',
      vietnameseTranslation: 'John Wooden đã trở thành huấn luyện viên bóng rổ đại học duy nhất giành được 10 chức vô địch quốc gia. Ông đã dẫn dắt đội bóng của mình đạt kỷ lục 323 trận thắng.',
      options: [
        { key: 'A', text: 'athlete', vietnameseSub: 'vận động viên' },
        { key: 'B', text: 'cyclist', vietnameseSub: 'tay đua xe đạp' },
        { key: 'C', text: 'competitor', vietnameseSub: 'thí sinh, đấu thủ' },
        { key: 'D', text: 'coach', vietnameseSub: 'huấn luyện viên' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. coach. Vế sau có chi tiết "He led his team to a record 323 wins" (Ông đã dẫn dắt đội bóng của mình...) chỉ rõ vị trí và vai trò người chỉ đạo đội tuyển là "coach" (huấn luyện viên).'
    },
    {
      id: 't3_v10',
      number: 10,
      section: 'vocab',
      question: 'In order to play ______, you have to try to hit a small, round ball into a small, round hole in as few shots as possible.',
      vietnameseTranslation: 'Để chơi môn gôn, bạn phải cố gắng đánh một quả bóng nhỏ tròn vào một cái lỗ nhỏ trên mặt đất với số lần đánh càng ít càng tốt.',
      options: [
        { key: 'A', text: 'golf', vietnameseSub: 'môn đánh gôn' },
        { key: 'B', text: 'rugby', vietnameseSub: 'bóng bầu dục' },
        { key: 'C', text: 'cricket', vietnameseSub: 'môn bóng gậy' },
        { key: 'D', text: 'ice hockey', vietnameseSub: 'khúc côn cầu trên băng' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. golf. Đặc trưng luật chơi của môn gôn là người chơi dùng gậy đánh quả bóng nhỏ vào lỗ tròn (hole) với số gậy (shots) ít nhất.'
    }
  ],

  readingSignQuestions: [
    {
      id: 't3_rs1',
      number: 1,
      section: 'reading_sign',
      signText: 'We are closed for Staff training until 9:30',
      signType: 'sign',
      question: 'What does it say? Circle the letter next to the correct explanation – A, B, C or D',
      vietnameseTranslation: 'Biển thông báo: "Chúng tôi đóng cửa để đào tạo nhân viên cho đến 9:30". Ý nghĩa: Hiện tại cửa hàng chưa mở cửa vì lý do đào tạo nhân viên.',
      options: [
        { key: 'A', text: 'The shop is run by trained staff.', vietnameseSub: 'Cửa hàng được điều hành bởi các nhân viên đã qua đào tạo.' },
        { key: 'B', text: 'We are not open today because of staff training.', vietnameseSub: 'Hôm nay chúng tôi chưa mở cửa vì đào tạo nhân viên (theo đáp án đề cương).' },
        { key: 'C', text: 'We can train you to work here.', vietnameseSub: 'Chúng tôi có thể đào tạo bạn làm việc tại nơi này.' },
        { key: 'D', text: 'The shop will open at 9.30 today.', vietnameseSub: 'Cửa hàng sẽ mở cửa vào lúc 9:30 sáng hôm nay.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B (theo đáp án chính thức của đề cương ôn thi). Biển thông báo giải thích lý do cửa hàng đóng cửa là do đang diễn ra buổi đào tạo nhân sự ("for Staff training"). (Lưu ý: trên thực tế câu D cũng diễn tả thời gian mở cửa, nhưng theo chuẩn đáp án đề thi trắc nghiệm đưa ra thì chọn B).'
    },
    {
      id: 't3_rs2',
      number: 2,
      section: 'reading_sign',
      signText: 'Patients can park here in an emergency',
      signType: 'sign',
      question: 'What does it say? Circle the letter next to the correct explanation – A, B, C or D',
      vietnameseTranslation: 'Biển thông báo: "Bệnh nhân có thể đỗ xe ở đây trong trường hợp khẩn cấp". Ý nghĩa: Bệnh nhân chỉ được đỗ xe ở bãi này khi gặp tình huống cấp cứu khẩn cấp.',
      options: [
        { key: 'A', text: 'This car park is for ambulances only.', vietnameseSub: 'Bãi đỗ xe này chỉ dành riêng cho xe cứu thương.' },
        { key: 'B', text: 'This car park is for patients only.', vietnameseSub: 'Bãi đỗ xe này dành cho bệnh nhân thông thường.' },
        { key: 'C', text: 'Patients can only park here with permission.', vietnameseSub: 'Bệnh nhân chỉ được đỗ xe ở đây khi có giấy phép.' },
        { key: 'D', text: 'Patients can only use this car park in emergencies.', vietnameseSub: 'Bệnh nhân chỉ có thể sử dụng bãi xe này trong các trường hợp khẩn cấp.' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Cụm từ "in an emergency" đồng nghĩa với "in emergencies" (trong các tình huống khẩn cấp). Biển quy định chỉ những bệnh nhân cấp cứu mới được đỗ tại vị trí này.'
    },
    {
      id: 't3_rs3',
      number: 3,
      section: 'reading_sign',
      signText: 'From 17 September please use the new ticket office',
      signType: 'sign',
      question: 'What does it say? Circle the letter next to the correct explanation – A, B, C or D',
      vietnameseTranslation: 'Biển thông báo: "Từ ngày 17 tháng 9 xin vui lòng sử dụng quầy vé mới". Ý nghĩa: Quầy vé cũ hiện tại sẽ đóng cửa vào ngày 16 tháng 9.',
      options: [
        { key: 'A', text: 'There will be two ticket offices after 17 September.', vietnameseSub: 'Sẽ có hai quầy vé hoạt động sau ngày 17 tháng 9.' },
        { key: 'B', text: 'This ticket office will be closed for one day.', vietnameseSub: 'Quầy vé này sẽ tạm đóng cửa trong một ngày duy nhất.' },
        { key: 'C', text: 'This ticket office will close on 16 September.', vietnameseSub: 'Quầy bán vé này sẽ đóng cửa vào ngày 16 tháng 9.' },
        { key: 'D', text: 'The new ticket office is now open.', vietnameseSub: 'Quầy vé mới hiện tại đã được mở cửa.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Bắt đầu từ ngày 17/9 chuyển sang dùng quầy vé mới ("From 17 September please use the new ticket office"), đồng nghĩa quầy vé cũ này kết thúc phục vụ vào ngày 16/9 ("will close on 16 September").'
    },
    {
      id: 't3_rs4',
      number: 4,
      section: 'reading_sign',
      signText: 'We only repair computers which were bought here',
      signType: 'notice',
      question: 'What does it say? Circle the letter next to the correct explanation – A, B, C or D',
      vietnameseTranslation: 'Biển thông báo: "Chúng tôi chỉ sửa chữa máy tính được mua tại cửa hàng này". Ý nghĩa: Cửa hàng không nhận sửa máy tính mua từ những nơi khác.',
      options: [
        { key: 'A', text: 'Computers bought here never need repairing.', vietnameseSub: 'Máy tính mua ở đây không bao giờ bị hỏng cần sửa.' },
        { key: 'B', text: 'We will not mend computers bought from other shops.', vietnameseSub: 'Chúng tôi sẽ không sửa chữa máy tính mua từ các cửa hàng khác.' },
        { key: 'C', text: 'Bring your computer here for repair.', vietnameseSub: 'Hãy mang máy tính của bạn đến đây để được sửa chữa.' },
        { key: 'D', text: 'We charge to repair computers not bought here.', vietnameseSub: 'Chúng tôi tính thêm phí nếu sửa máy tính mua từ nơi khác.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. "mend" là từ đồng nghĩa với "repair" (sửa chữa). Cửa hàng "only repair computers bought here" đồng nghĩa với việc họ sẽ từ chối sửa máy tính mua ở cửa hàng khác ("will not mend computers bought from other shops").'
    },
    {
      id: 't3_rs5',
      number: 5,
      section: 'reading_sign',
      signText: 'Add your name to this list if you want to go on the trip',
      signType: 'notice',
      question: 'What does it say? Circle the letter next to the correct explanation – A, B, C or D',
      vietnameseTranslation: 'Thông báo: "Hãy điền tên bạn vào danh sách này nếu bạn muốn tham gia chuyến đi dã ngoại". Ý nghĩa: Danh sách này dành cho những ai có nguyện vọng đi đăng ký ký tên.',
      options: [
        { key: 'A', text: 'This list should be signed by people wanting to go on the trip.', vietnameseSub: 'Danh sách này nên được ký tên bởi những người muốn tham gia chuyến đi.' },
        { key: 'B', text: 'If you find your name on this list, you can go on the trip.', vietnameseSub: 'Nếu bạn tìm thấy tên mình trên danh sách thì bạn có thể đi.' },
        { key: 'C', text: 'This list shows who has been chosen to go on the trip.', vietnameseSub: 'Danh sách này hiển thị danh sách những người đã được chọn đi.' },
        { key: 'D', text: 'Check this list for information if you are going on the trip.', vietnameseSub: 'Hãy kiểm tra danh sách này để biết thông tin nếu bạn sắp đi.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. "Add your name to this list" = "This list should be signed by people wanting to go on the trip" (Người có nguyện vọng tham gia chuyến đi thì tự điền/ký tên mình vào danh sách).'
    }
  ],

  readingPassageBTitle: 'MY SPORT DISASTERS',
  readingPassageBTag: '5 câu đọc hiểu trắc nghiệm',
  readingTonyPassage: `I have never been very sporty. In fact, every time I have tried to take up a new sport, it has always ended in disaster.

My first disaster was football. When I was in school, I decided to play in a local football match. But during the game, I found it so boring that I stood there listening to music on my earphones. While I was distracted, the other side attacked and scored an easy goal. My coach was furious, and my teammates never invited me back.

Then I tried tennis, which didn’t go much better, so I took up boxing instead. That was even more embarrassing. In the very first half of the match, I swung wildly, missed my opponent completely, and accidentally knocked the referee out cold! The referee fell to the canvas, and I was disqualified on the spot.

Finally, I thought horse riding might be calmer. How wrong I was! The horse suddenly got frightened by a bee, reared up, and took off at full speed. I lost my balance, fell off the horse, and landed badly on a wooden fence, which unfortunately broke my back. I spent three months in hospital recovering. After all these sport disasters, I have decided to stick to watching sports on television instead!`,

  readingTonyTranslation: `Tôi chưa bao giờ là một người giỏi thể thao. Thực tế, mỗi khi tôi cố gắng thử một môn thể thao mới, mọi chuyện luôn kết thúc trong thảm họa.

Thảm họa đầu tiên của tôi là bóng đá. Khi còn đi học, tôi quyết định tham gia một trận bóng đá địa phương. Nhưng trong suốt trận đấu, tôi cảm thấy quá nhàm chán đến mức đứng nghe nhạc qua tai nghe. Trong khi tôi bị phân tâm, đội bạn đã tấn công và ghi bàn thắng dễ dàng. Huấn luyện viên tức giận điên người, còn đồng đội thì không bao giờ rủ tôi chơi lại nữa.

Sau đó tôi thử chơi quần vợt, tình hình cũng chẳng khá hơn là bao, nên tôi chuyển sang môn quyền anh. Việc này thậm chí còn đáng xấu hổ hơn. Ngay trong hiệp đầu tiên của trận đấu, tôi vung tay loạn xạ, đánh hụt hoàn toàn đối thủ và lỡ tay đấm trọng tài bất tỉnh nhân sự! Trọng tài ngã xuống sàn đấu và tôi bị truất quyền thi đấu ngay lập tức.

Cuối cùng, tôi nghĩ cưỡi ngựa có lẽ sẽ êm ả hơn. Nhưng tôi đã lầm to! Con ngựa bỗng nhiên hoảng sợ vì một con ong, chồm lên và phi hết tốc lực. Tôi mất thăng bằng, ngã khỏi lưng ngựa và đập mạnh vào hàng rào gỗ, khiến tôi bị gãy lưng. Tôi đã phải nằm viện ba tháng để hồi phục. Sau tất cả những thảm họa thể thao này, tôi quyết định an phận ngồi nhà xem thể thao qua tivi!`,

  readingTonyQuestions: [
    {
      id: 't3_rt1',
      number: 1,
      section: 'reading_tony',
      question: 'What is the main aim of the writer in writing this text?',
      vietnameseTranslation: 'Mục đích chính của tác giả khi viết bài đọc này là gì?',
      options: [
        { key: 'A', text: 'Encourage people to play a variety of sports', vietnameseSub: 'Khuyến khích mọi người chơi nhiều môn thể thao' },
        { key: 'B', text: 'Explain how to play some sports', vietnameseSub: 'Giải thích cách chơi một số môn thể thao' },
        { key: 'C', text: 'Tell people his sport disasters', vietnameseSub: 'Kể cho mọi người nghe về những thảm họa thể thao của mình' },
        { key: 'D', text: 'Warn people against accidents in sports', vietnameseSub: 'Cảnh báo mọi người về những tai nạn trong thể thao' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Tell people his sport disasters. Xuyên suốt bài viết, tác giả dùng giọng văn hóm hỉnh kể lại những trải nghiệm thất bại thảm hại khi thử chơi các môn thể thao khác nhau.'
    },
    {
      id: 't3_rt2',
      number: 2,
      section: 'reading_tony',
      question: 'What sports has the writer ever tried?',
      vietnameseTranslation: 'Tác giả đã từng thử những môn thể thao nào trong bài?',
      options: [
        { key: 'A', text: 'Tennis, football, horse riding, cycling', vietnameseSub: 'Quần vợt, bóng đá, cưỡi ngựa, đạp xe' },
        { key: 'B', text: 'Football, tennis, boxing, horse riding', vietnameseSub: 'Bóng đá, quần vợt, quyền anh, cưỡi ngựa' },
        { key: 'C', text: 'Table tennis, boxing, football, cycling', vietnameseSub: 'Bóng bàn, quyền anh, bóng đá, đạp xe' },
        { key: 'D', text: 'Table tennis, football, boxing, horse riding', vietnameseSub: 'Bóng bàn, bóng đá, quyền anh, cưỡi ngựa' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Football, tennis, boxing, horse riding. Bốn môn thể thao được tác giả nhắc đến lần lượt theo thứ tự: football (đoạn 2), tennis và boxing (đoạn 3), horse riding (đoạn 4).'
    },
    {
      id: 't3_rt3',
      number: 3,
      section: 'reading_tony',
      question: 'What was wrong with the writer when he went in for football?',
      vietnameseTranslation: 'Chuyện gì đã xảy ra với tác giả khi anh ấy tham gia chơi bóng đá?',
      options: [
        { key: 'A', text: 'He broke his leg.', vietnameseSub: 'Anh ấy bị gãy chân.' },
        { key: 'B', text: 'He kicked his teammate.', vietnameseSub: 'Anh ấy đá trúng đồng đội.' },
        { key: 'C', text: 'He let the other side score.', vietnameseSub: 'Anh ấy để cho đội bạn ghi bàn.' },
        { key: 'D', text: 'He shouted at his team.', vietnameseSub: 'Anh ấy quát mắng đồng đội.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. He let the other side score. Trong đoạn 2: tác giả cảm thấy nhàm chán nên mải đứng nghe nhạc ("listening to music on my earphones"), dẫn đến việc bị phân tâm và để đối phương ghi bàn dễ dàng ("the other side attacked and scored an easy goal").'
    },
    {
      id: 't3_rt4',
      number: 4,
      section: 'reading_tony',
      question: 'What made the writer feel embarrassed?',
      vietnameseTranslation: 'Điều gì đã khiến cho tác giả cảm thấy vô cùng xấu hổ ngượng ngùng?',
      options: [
        { key: 'A', text: 'He knocked the referee out in the first half.', vietnameseSub: 'Anh ấy đã đấm bất tỉnh trọng tài ngay hiệp đầu.' },
        { key: 'B', text: 'He scored for the other team.', vietnameseSub: 'Anh ấy ghi bàn phản lưới nhà cho đội bạn.' },
        { key: 'C', text: 'He fell off the horse.', vietnameseSub: 'Anh ấy bị ngã khỏi lưng ngựa.' },
        { key: 'D', text: 'He hit his teammate.', vietnameseSub: 'Anh ấy đánh trúng đồng đội.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. He knocked the referee out in the first half. Trong đoạn 3: "That was even more embarrassing. In the very first half of the match, I swung wildly... and accidentally knocked the referee out cold!" (Anh ta vung tay đấm trúng trọng tài làm trọng tài bất tỉnh nhân sự).'
    },
    {
      id: 't3_rt5',
      number: 5,
      section: 'reading_tony',
      question: 'Why did the writer break his back?',
      vietnameseTranslation: 'Tại sao tác giả lại bị gãy chấn thương lưng?',
      options: [
        { key: 'A', text: 'He jumped and caught the ball.', vietnameseSub: 'Anh ấy nhảy lên để bắt bóng.' },
        { key: 'B', text: 'He fell off the horse.', vietnameseSub: 'Anh ấy bị ngã khỏi lưng ngựa.' },
        { key: 'C', text: 'He was knocked out by his opponent.', vietnameseSub: 'Anh ấy bị đối thủ hạ đo ván.' },
        { key: 'D', text: 'He ran so fast and fell', vietnameseSub: 'Anh ấy chạy quá nhanh rồi bị trượt ngã' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. He fell off the horse. Trong đoạn 4: con ngựa giật mình vì con ong và phóng thục mạng, khiến tác giả mất thăng bằng ngã ngựa đập vào hàng rào gỗ ("fell off the horse, and landed badly on a wooden fence, which unfortunately broke my back").'
    }
  ],

  readingPassageCTitle: 'CHOOSE YOUR SPORT',
  readingPassageCTag: '10 câu điền từ vào đoạn văn',
  readingAnnaPassage: `Everyone knows that exercise is good for the body and mind. While we all want to keep fit and look good, too many of us (1)…………… the wrong sport and quickly lose interest. So now fitness (2)…………… are advising people to choose an activity (3)…………… matches their character.

For example, those people who like to (4)…………… with other people should consider playing in a football or hockey (5)…………… . If you prefer to be alone, you may prefer to (6)…………… cycling or horse riding.

If you are competitive, you could choose a (7)…………… sport such as badminton or tennis. On the other hand, if (8)…………… isn't important to you, an activity like hiking can be an enjoyable (9)…………… .

Finally, if you find it hard to motivate yourself, pay for lessons in advance – you are far more likely to show up on the tennis (10)…………… if you have already paid for it!`,

  readingAnnaTranslation: `Mọi người đều biết rằng tập thể dục rất tốt cho cả thể chất lẫn tinh thần. Dù tất cả chúng ta đều mong muốn giữ dáng và có ngoại hình ưa nhìn, nhưng quá nhiều người trong chúng ta lại (1) chọn nhầm môn thể thao và nhanh chóng mất đi hứng thú. Vì vậy, hiện nay các chuyên gia (2) thể hình đang khuyên mọi người nên lựa chọn một hoạt động (3) phù hợp với tính cách của chính mình.

Chẳng hạn, những ai thích (4) giao lưu với người khác nên cân nhắc tham gia một đội (5) bóng đá hoặc khúc côn cầu. Nếu bạn thích ở một mình, bạn có thể thích (6) đi đạp xe hoặc cưỡi ngựa.

Nếu bạn là người có tính cạnh tranh, bạn có thể chọn một môn thể thao dùng (7) vợt như cầu lông hoặc quần vợt. Mặt khác, nếu việc (8) chiến thắng không quá quan trọng đối với bạn, một hoạt động như đi bộ đường dài có thể là một thử thách (9) thú vị.

Cuối cùng, nếu bạn cảm thấy khó tự tạo động lực cho bản thân, hãy đóng tiền học trước – bạn sẽ có nhiều khả năng chịu xuất hiện trên sân (10) quần vợt hơn nếu bạn đã trả tiền trước cho nó!`,

  readingAnnaQuestions: [
    {
      id: 't3_ra1',
      number: 1,
      section: 'reading_anna',
      question: 'Vị trí (1): too many of us (1)…………… the wrong sport and quickly lose interest.',
      vietnameseTranslation: 'quá nhiều người trong chúng ta lại chọn (1) nhầm môn thể thao và nhanh chóng mất hứng thú.',
      options: [
        { key: 'A', text: 'choose', vietnameseSub: 'lựa chọn (động từ)' },
        { key: 'B', text: 'go', vietnameseSub: 'đi' },
        { key: 'C', text: 'how', vietnameseSub: 'như thế nào' },
        { key: 'D', text: 'experts', vietnameseSub: 'các chuyên gia' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. choose. Cụm từ "choose the wrong sport" có nghĩa là lựa chọn nhầm môn thể thao không phù hợp với bản thân.'
    },
    {
      id: 't3_ra2',
      number: 2,
      section: 'reading_anna',
      question: 'Vị trí (2): So now fitness (2)…………… are advising people to choose an activity...',
      vietnameseTranslation: 'Vì vậy hiện nay các chuyên gia (2) thể hình đang khuyên mọi người...',
      options: [
        { key: 'A', text: 'socialize', vietnameseSub: 'giao lưu kết bạn' },
        { key: 'B', text: 'experts', vietnameseSub: 'các chuyên gia (danh từ số nhiều)' },
        { key: 'C', text: 'racket', vietnameseSub: 'cây vợt' },
        { key: 'D', text: 'challenge', vietnameseSub: 'thử thách' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. experts. Cụm danh từ ghép "fitness experts" có nghĩa là các chuyên gia trong lĩnh vực thể dục thể hình.'
    },
    {
      id: 't3_ra3',
      number: 3,
      section: 'reading_anna',
      question: 'Vị trí (3): to choose an activity (3)…………… matches their character.',
      vietnameseTranslation: 'chọn một hoạt động (3) mà phù hợp với tính cách của họ.',
      options: [
        { key: 'A', text: 'choose', vietnameseSub: 'chọn' },
        { key: 'B', text: 'why', vietnameseSub: 'tại sao' },
        { key: 'C', text: 'that', vietnameseSub: 'mà, cái mà (đại từ quan hệ)' },
        { key: 'D', text: 'where', vietnameseSub: 'nơi mà' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. that. Đại từ quan hệ "that" thay thế cho danh từ chỉ vật "an activity" đứng trước làm chủ ngữ cho động từ "matches".'
    },
    {
      id: 't3_ra4',
      number: 4,
      section: 'reading_anna',
      question: 'Vị trí (4): those people who like to (4)…………… with other people...',
      vietnameseTranslation: 'những ai thích giao lưu (4) với những người khác...',
      options: [
        { key: 'A', text: 'go', vietnameseSub: 'đi' },
        { key: 'B', text: 'socialize', vietnameseSub: 'giao lưu, kết bạn (socialize with)' },
        { key: 'C', text: 'choose', vietnameseSub: 'lựa chọn' },
        { key: 'D', text: 'lose', vietnameseSub: 'đánh mất' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. socialize. Cấu trúc cố định "socialize with other people" (giao lưu, hòa nhập, tiếp xúc xã hội với người khác).'
    },
    {
      id: 't3_ra5',
      number: 5,
      section: 'reading_anna',
      question: 'Vị trí (5): playing in a football or hockey (5)…………… .',
      vietnameseTranslation: 'chơi trong một đội (5) bóng đá hoặc khúc côn cầu.',
      options: [
        { key: 'A', text: 'stadium', vietnameseSub: 'sân vận động' },
        { key: 'B', text: 'score', vietnameseSub: 'tỷ số, bàn thắng' },
        { key: 'C', text: 'team', vietnameseSub: 'đội bóng, đội thể thao' },
        { key: 'D', text: 'that', vietnameseSub: 'cái đó' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. team. Cụm danh từ "a football or hockey team" (một đội bóng đá hoặc đội khúc côn cầu).'
    },
    {
      id: 't3_ra6',
      number: 6,
      section: 'reading_anna',
      question: 'Vị trí (6): you may prefer to (6)…………… cycling or horse riding.',
      vietnameseTranslation: 'bạn có thể thích đi (6) xe đạp hoặc cưỡi ngựa.',
      options: [
        { key: 'A', text: 'play', vietnameseSub: 'chơi (thường dùng cho môn bóng/thi đấu đối kháng)' },
        { key: 'B', text: 'go', vietnameseSub: 'đi (go + V-ing chỉ hoạt động thể thao)' },
        { key: 'C', text: 'choose', vietnameseSub: 'lựa chọn' },
        { key: 'D', text: 'draw', vietnameseSub: 'hòa, vẽ' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. go. Quy tắc kết hợp động từ thể thao: dùng "go" đi cùng các hoạt động đuôi -ing: go cycling (đi xe đạp), go horse riding (cưỡi ngựa).'
    },
    {
      id: 't3_ra7',
      number: 7,
      section: 'reading_anna',
      question: 'Vị trí (7): you could choose a (7)…………… sport such as badminton or tennis.',
      vietnameseTranslation: 'bạn có thể chọn một môn thể thao dùng vợt (7) như cầu lông hoặc quần vợt.',
      options: [
        { key: 'A', text: 'football', vietnameseSub: 'bóng đá' },
        { key: 'B', text: 'stadium', vietnameseSub: 'sân vận động' },
        { key: 'C', text: 'court', vietnameseSub: 'sân đấu' },
        { key: 'D', text: 'racket', vietnameseSub: 'vợt (racket sport: môn thể thao dùng vợt)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. racket. Cụm thuật ngữ "racket sport" (hoặc racquet sport) dùng để chỉ các môn thể thao dùng vợt như cầu lông, tennis, bóng bàn, bóng quần.'
    },
    {
      id: 't3_ra8',
      number: 8,
      section: 'reading_anna',
      question: 'Vị trí (8): On the other hand, if (8)…………… isn\'t important to you...',
      vietnameseTranslation: 'Mặt khác, nếu việc chiến thắng (8) không quan trọng đối với bạn...',
      options: [
        { key: 'A', text: 'winning', vietnameseSub: 'việc chiến thắng (danh động từ làm chủ ngữ)' },
        { key: 'B', text: 'score', vietnameseSub: 'ghi bàn' },
        { key: 'C', text: 'swimming', vietnameseSub: 'bơi lội' },
        { key: 'D', text: 'playing', vietnameseSub: 'chơi' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. winning. Danh động từ "winning" (việc giành chiến thắng) làm chủ ngữ cho mệnh đề điều kiện: "if winning isn\'t important to you" (nếu việc thắng thua không quan trọng).'
    },
    {
      id: 't3_ra9',
      number: 9,
      section: 'reading_anna',
      question: 'Vị trí (9): an activity like hiking can be an enjoyable (9)…………… .',
      vietnameseTranslation: 'một hoạt động như đi bộ leo núi có thể là một thử thách (9) thú vị.',
      options: [
        { key: 'A', text: 'socialize', vietnameseSub: 'giao lưu' },
        { key: 'B', text: 'playing', vietnameseSub: 'chơi' },
        { key: 'C', text: 'experts', vietnameseSub: 'chuyên gia' },
        { key: 'D', text: 'challenge', vietnameseSub: 'thử thách (danh từ sau an enjoyable)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. challenge. Cụm từ "an enjoyable challenge" mang nghĩa một thử thách thú vị mang lại nhiều niềm vui trải nghiệm.'
    },
    {
      id: 't3_ra10',
      number: 10,
      section: 'reading_anna',
      question: 'Vị trí (10): you are far more likely to show up on the tennis (10)…………… if you have already paid for it!',
      vietnameseTranslation: 'bạn sẽ có nhiều khả năng xuất hiện trên sân (10) quần vợt hơn nếu bạn đã thanh toán tiền trước!',
      options: [
        { key: 'A', text: 'court', vietnameseSub: 'sân (tennis court: sân quần vợt)' },
        { key: 'B', text: 'stadium', vietnameseSub: 'sân vận động' },
        { key: 'C', text: 'ball', vietnameseSub: 'quả bóng' },
        { key: 'D', text: 'athlete', vietnameseSub: 'vận động viên' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. court. Cụm từ "tennis court" là địa điểm sân thi đấu môn quần vợt.'
    }
  ],

  listeningPartA: [
    {
      id: 't3_l1',
      number: 1,
      question: 'What regular exercise does David do at the moment?',
      vietnameseTranslation: 'Hiện tại David thường xuyên tập luyện bài tập thể dục nào?',
      options: [
        { key: 'A', text: 'A (Gym / lifting weights)', vietnameseSub: 'Tập gym / cử tạ' },
        { key: 'B', text: 'B (Swimming)', vietnameseSub: 'Bơi lội' },
        { key: 'C', text: 'C (Tennis)', vietnameseSub: 'Chơi quần vợt' }
      ],
      suggestedAnswer: 'B',
      note: 'Đáp án dự đoán B (swimming). Khi nghe băng trên lớp hãy chú ý từ khóa chỉ thì hiện tại "at the moment / currently".'
    },
    {
      id: 't3_l2',
      number: 2,
      question: 'What should Suzie take to Emma\'s house?',
      vietnameseTranslation: 'Suzie nên mang theo những món đồ nào đến nhà của Emma?',
      options: [
        { key: 'A', text: 'A (Paper + scissors)', vietnameseSub: 'Giấy và kéo' },
        { key: 'B', text: 'B (Glue + brush)', vietnameseSub: 'Keo dán và cọ vẽ' },
        { key: 'C', text: 'C (Brush + scissors)', vietnameseSub: 'Cọ vẽ và kéo' }
      ],
      suggestedAnswer: 'C',
      note: 'Đáp án dự đoán C (brush + scissors). Lắng nghe món đồ mà Emma yêu cầu mang theo.'
    },
    {
      id: 't3_l3',
      number: 3,
      question: 'Which kind of T-shirt did the boy choose?',
      vietnameseTranslation: 'Cậu bé đã chọn mẫu áo thun nào?',
      options: [
        { key: 'A', text: 'A ("Sun" pattern)', vietnameseSub: 'Áo họa tiết hình mặt trời' },
        { key: 'B', text: 'B (Sailing boats)', vietnameseSub: 'Áo họa tiết thuyền buồm' },
        { key: 'C', text: 'C (Geometric shapes)', vietnameseSub: 'Áo họa tiết hình học trừu tượng' }
      ],
      suggestedAnswer: 'B',
      note: 'Đáp án dự đoán B (sailing boats). Chú ý quyết định cuối cùng của bạn nam (bought / chose).'
    },
    {
      id: 't3_l4',
      number: 4,
      question: 'What frightened the man?',
      vietnameseTranslation: 'Con vật nào đã làm cho người đàn ông cảm thấy sợ hãi?',
      options: [
        { key: 'A', text: 'A (Bat)', vietnameseSub: 'Con dơi' },
        { key: 'B', text: 'B (Lion)', vietnameseSub: 'Con sư tử' },
        { key: 'C', text: 'C (Elephant)', vietnameseSub: 'Con voi' }
      ],
      suggestedAnswer: 'A',
      note: 'Đáp án dự đoán A (bat - con dơi). Lắng nghe phản ứng hoảng sợ "scared / frightened".'
    },
    {
      id: 't3_l5',
      number: 5,
      question: 'Where is the man calling from?',
      vietnameseTranslation: 'Người đàn ông đang gọi điện thoại từ địa điểm nào?',
      options: [
        { key: 'A', text: 'A (Bridge / river)', vietnameseSub: 'Trên cầu / cạnh bờ sông' },
        { key: 'B', text: 'B (Café)', vietnameseSub: 'Tại quán cà phê' },
        { key: 'C', text: 'C (Hotel / house)', vietnameseSub: 'Tại khách sạn / nhà riêng' }
      ],
      suggestedAnswer: 'B',
      note: 'Đáp án dự đoán B (café). Chú ý tiếng động nền hoặc câu mô tả nơi đang ngồi.'
    },
    {
      id: 't3_l6',
      number: 6,
      question: 'How did the woman spend her last holiday?',
      vietnameseTranslation: 'Người phụ nữ đã trải qua kỳ nghỉ gần nhất của mình như thế nào?',
      options: [
        { key: 'A', text: 'A (Climbing mountains)', vietnameseSub: 'Đi leo núi' },
        { key: 'B', text: 'B (By the swimming pool)', vietnameseSub: 'Nghỉ ngơi thư giãn cạnh hồ bơi' },
        { key: 'C', text: 'C (Watching TV indoors)', vietnameseSub: 'Ở trong nhà xem tivi' }
      ],
      suggestedAnswer: 'B',
      note: 'Đáp án dự đoán B (by the pool). Chú ý phân biệt kỳ nghỉ dự định và kỳ nghỉ thực tế (last holiday).'
    },
    {
      id: 't3_l7',
      number: 7,
      question: 'Where is the girl\'s purse?',
      vietnameseTranslation: 'Chiếc ví tiền của cô gái đang nằm ở đâu?',
      options: [
        { key: 'A', text: 'A (Under the sofa)', vietnameseSub: 'Ở dưới gầm ghế sofa' },
        { key: 'B', text: 'B (On the table)', vietnameseSub: 'Ở trên mặt bàn' },
        { key: 'C', text: 'C (In the bag)', vietnameseSub: 'Ở bên trong túi xách' }
      ],
      suggestedAnswer: 'A',
      note: 'Đáp án dự đoán A (under the sofa). Lắng nghe vị trí tìm thấy cuối cùng.'
    }
  ],

  listeningPartB: {
    title: 'HOTELS IN THE NATIONAL PARK',
    intro: 'Listen and fill in the missing information for the hotels. (Lưu ý: Vì kỳ thi phát audio trực tiếp trên lớp nên đáp án dưới đây được tổng hợp chuẩn theo ngân hàng đề thi Cambridge PET/B1).',
    vietnameseTranslation: 'Nghe đoạn ghi âm về các khách sạn trong Công viên Quốc gia và điền thông tin còn thiếu vào 5 chỗ trống.',
    blanks: [
      {
        blankIndex: 1,
        label: 'The Marston Hotel: Good for people who like (1) __________',
        promptText: 'like',
        acceptableAnswers: ['walking', 'to walk', 'walks', 'hiking'],
        hint: 'Hoạt động thể thao / sở thích (ví dụ: walking / hiking)'
      },
      {
        blankIndex: 2,
        label: 'The Marston Hotel: the hotel will make you a (2) __________ if you ask.',
        promptText: 'make you a',
        acceptableAnswers: ['picnic', 'packed lunch', 'picnic lunch', 'packed-lunch'],
        hint: 'Bữa ăn mang đi theo yêu cầu (ví dụ: picnic / packed lunch)'
      },
      {
        blankIndex: 3,
        label: 'The Bristol Hotel: Price includes (3) __________',
        promptText: 'includes',
        acceptableAnswers: ['breakfast', 'continental breakfast', 'english breakfast', 'dinner'],
        hint: 'Bữa ăn hoặc dịch vụ bao gồm trong giá (ví dụ: breakfast)'
      },
      {
        blankIndex: 4,
        label: 'The Ferndale Hotel: Good view of (4) __________',
        promptText: 'Good view of',
        acceptableAnswers: ['the lake', 'lake', 'the mountains', 'mountains', 'the park', 'park'],
        hint: 'Cảnh quan nhìn ra (ví dụ: the lake / mountains)'
      },
      {
        blankIndex: 5,
        label: 'Fir Trees Hotel: Price of a double room (5) £ __________ a night.',
        promptText: '£',
        acceptableAnswers: ['60', '65', '70', '75', '80', '85', '90', '95', '100', '120'],
        hint: 'Mức giá phòng đôi theo đêm (số tiền, ví dụ: 60 / 65 / 75)'
      }
    ]
  },

  sentenceTransformations: [
    {
      id: 't3_w1',
      number: 1,
      originalSentence: 'Do you want to come to the cinema with us?',
      vietnameseTranslation: 'Bạn có muốn đi xem phim cùng với chúng tôi không?',
      prefix: 'Would you like',
      modelAnswer: 'Would you like to come to the cinema with us?',
      vietnameseModelTranslation: 'Bạn có muốn đi xem phim cùng với chúng tôi không?',
      acceptedAnswers: [
        'to come to the cinema with us?',
        'to come to the cinema with us',
        'to come to cinema with us?',
        'to come to cinema with us'
      ],
      grammarPoint: 'Cấu trúc câu mời lịch sự: Do you want to + V = Would you like to + V? (Bạn có muốn làm gì... không?)'
    },
    {
      id: 't3_w2',
      number: 2,
      originalSentence: 'It\'s over 10 years since my father worked for that company.',
      vietnameseTranslation: 'Đã hơn 10 năm kể từ khi bố tôi làm việc cho công ty đó.',
      prefix: 'My father',
      modelAnswer: 'My father hasn\'t worked for that company for over 10 years.',
      vietnameseModelTranslation: 'Bố tôi đã không làm việc cho công ty đó hơn 10 năm nay.',
      acceptedAnswers: [
        'hasn\'t worked for that company for over 10 years',
        'hasn\'t worked for that company for over 10 years.',
        'has not worked for that company for over 10 years',
        'has not worked for that company for over 10 years.',
        'hasn\'t worked for that company for more than 10 years',
        'hasn\'t worked for that company for more than 10 years.',
        'has not worked for that company for more than 10 years',
        'has not worked for that company for more than 10 years.'
      ],
      grammarPoint: 'Cấu trúc thời gian: It is/has been + [khoảng thời gian] + since + S + past V = S + haven\'t/hasn\'t + V3/ed + for + [khoảng thời gian].'
    },
    {
      id: 't3_w3',
      number: 3,
      originalSentence: 'It would be nice to be able to fly a plane.',
      vietnameseTranslation: 'Thật tuyệt vời nếu có thể lái được một chiếc máy bay.',
      prefix: 'I wish',
      modelAnswer: 'I wish I could fly a plane.',
      vietnameseModelTranslation: 'Ước gì tôi có thể lái được máy bay.',
      acceptedAnswers: [
        'I could fly a plane',
        'I could fly a plane.',
        'I were able to fly a plane',
        'I were able to fly a plane.',
        'I was able to fly a plane',
        'I was able to fly a plane.',
        'that I could fly a plane',
        'that I could fly a plane.'
      ],
      grammarPoint: 'Cấu trúc câu điều ước không có thật ở hiện tại/tương lai: S + wish + S + could + V(nguyên thể) / were able to + V.'
    },
    {
      id: 't3_w4',
      number: 4,
      originalSentence: 'He is mad about collecting cars.',
      vietnameseTranslation: 'Anh ấy rất đam mê việc sưu tập xe hơi.',
      prefix: 'He',
      modelAnswer: 'He is crazy about collecting cars.',
      vietnameseModelTranslation: 'Anh ấy cực kỳ mê mẩn / cuồng nhiệt việc sưu tầm xe hơi.',
      acceptedAnswers: [
        'is crazy about collecting cars',
        'is crazy about collecting cars.',
        'is very crazy about collecting cars',
        'is very crazy about collecting cars.',
        'is very keen on collecting cars',
        'is very keen on collecting cars.',
        'is keen on collecting cars',
        'is keen on collecting cars.'
      ],
      grammarPoint: 'Cụm tính từ đồng nghĩa chỉ niềm đam mê: be mad about + N/V-ing = be crazy about + N/V-ing = be very keen on + N/V-ing (rất cuồng/say mê cái gì).'
    },
    {
      id: 't3_w5',
      number: 5,
      originalSentence: 'The weather was too bad for us to drive to your house.',
      vietnameseTranslation: 'Thời tiết quá xấu đến mức chúng tôi không thể lái xe đến nhà bạn được.',
      prefix: 'The weather',
      modelAnswer: 'The weather was so bad that we couldn\'t drive to your house.',
      vietnameseModelTranslation: 'Thời tiết xấu đến nỗi mà chúng tôi không thể lái xe đến nhà bạn.',
      acceptedAnswers: [
        'was so bad that we couldn\'t drive to your house',
        'was so bad that we couldn\'t drive to your house.',
        'was so bad that we could not drive to your house',
        'was so bad that we could not drive to your house.'
      ],
      grammarPoint: 'Cấu trúc biến đổi quá... đến nỗi mà: S + be + too + adj + (for O) + to V = S + be + so + adj + that + S + couldn\'t / could not + V.'
    }
  ],

  letterWriting: {
    topic: 'Write a letter (about 120 words) to your friend about your favorite sport.',
    vietnameseTranslation: 'Đề bài: Viết một lá thư (khoảng 120 từ) gửi cho bạn của bạn kể về môn thể thao mà bạn yêu thích nhất.',
    requirements: [
      'What is your favorite sport and how long have you been playing it? (Môn thể thao yêu thích của bạn là gì và bạn đã chơi nó được bao lâu?)',
      'Where, when and with whom do you usually play it? (Bạn thường chơi ở đâu, vào lúc nào và chơi cùng với ai?)',
      'Why do you like it and who is your favorite athlete? (Vì sao bạn yêu thích môn đó và ai là thần tượng/vận động viên bạn mến mộ nhất?)'
    ],
    note: 'Write the body of the letter only. Do NOT write your name, your address and your signature in the letter!',
    targetWordCount: 120,
    sample: `* BÀI MẪU 1: Môn Quần vợt (Tennis - Bài mẫu chuẩn trong giáo trình)
Hello Mark,

I'm very happy to hear that you're going to take up tennis because it's also my favorite sport. I've been playing tennis for 3 years, so now I can play it quite well. I usually play tennis at a court near my house with some of my friends. I play it whenever I have time. The reason I like tennis best is simply because it helps me release much stress after work. Running around the court, sweating, and hitting a ball are tiring but really interesting. My favorite tennis player is Roger Federer from Switzerland, one of the greatest tennis players of all time. He is a real tennis genius. See him play, and I'm sure you will learn a lot from him like me.

Love,

--------------------------------------------------

* BÀI MẪU 2: Môn Cầu lông (Badminton - Gợi ý thêm để học phong phú)
Hi Tom,

Thanks for your last letter. You asked me about my favorite sport, so here is my answer. I like badminton best because it is fast, fun and easy to play with friends. Yes, I can play it quite well. I have played badminton for about five years, and I usually play at a sports hall near my house on weekends. It helps me relax after a long week at work and keeps me healthy.

My favorite athlete is Viktor Axelsen from Denmark. He is tall and strong, and his smashes are amazing. I always learn something new when I watch him play. Why don't you join us next Sunday? I'm sure you will enjoy it.

Write soon,`,
    sampleTranslation: `* BẢN DỊCH THƯ MẪU 1 (Quần vợt - Tennis):
Chào Mark,

Mình rất vui khi nghe tin bạn sắp bắt đầu chơi quần vợt vì đó cũng chính là môn thể thao yêu thích nhất của mình. Mình đã chơi tennis được 3 năm rồi nên bây giờ mình chơi khá ổn. Mình thường chơi tennis ở sân bóng gần nhà cùng với mấy người bạn. Mình ra sân bất cứ khi nào rảnh rỗi. Lý do mình yêu thích môn này nhất đơn giản vì nó giúp mình giải tỏa rất nhiều căng thẳng sau giờ làm việc. Chạy quanh sân, toát mồ hôi và đánh bóng tuy mệt nhưng thật sự rất thú vị. Vận động viên quần vợt yêu thích nhất của mình là Roger Federer đến từ Thụy Sĩ, một trong những tay vợt vĩ đại nhất mọi thời đại. Anh ấy là một thiên tài tennis thực thụ. Hãy xem anh ấy thi đấu, và mình tin chắc rằng bạn cũng sẽ học hỏi được rất nhiều điều từ anh ấy giống như mình.

Thân ái,

--------------------------------------------------

* BẢN DỊCH THƯ MẪU 2 (Cầu lông - Badminton):
Chào Tom,

Cảm ơn vì lá thư vừa rồi của bạn nhé. Bạn có hỏi mình về môn thể thao yêu thích, nên đây là câu trả lời của mình. Mình thích cầu lông nhất vì nó nhanh nhẹn, vui nhộn và rất dễ chơi cùng bạn bè. Đúng vậy, mình chơi môn này khá cừ. Mình đã gắn bó với cầu lông được khoảng 5 năm, và mình thường chơi tại nhà thi đấu thể thao gần nhà vào các dịp cuối tuần. Nó giúp mình thư giãn tinh thần sau một tuần làm việc dài và giúp mình luôn giữ được vóc dáng khỏe mạnh.

Vận động viên thần tượng của mình là Viktor Axelsen đến từ Đan Mạch. Anh ấy cao lớn, mạnh mẽ và những cú đập cầu của anh ấy vô cùng mãn nhãn. Mình luôn học được những kỹ thuật mới mỗi khi xem anh ấy thi đấu. Sao Chủ nhật tuần tới bạn không đến tham gia cùng bọn mình nhỉ? Mình chắc chắn bạn sẽ rất thích đấy.

Sớm hồi âm nhé,`
  },

  speakingCard: {
    cardNumber: 'No.3',
    title: 'SPEAKING CARD No.3: Benefits of Playing Sports',
    task: 'Talk about benefits of playing sports.',
    vietnameseTranslation: 'Hãy nói về những lợi ích của việc luyện tập thể dục thể thao đối với cuộc sống.',
    prompts: [
      'How can sport improve your physical health? (Thể thao giúp nâng cao sức khỏe thể chất như thế nào?)',
      'How can sport improve your mental health? (Thể thao giúp giải tỏa căng thẳng và cải thiện tinh thần ra sao?)',
      'How can sport improve your social life? (Thể thao mang lại những lợi ích gì cho các mối quan hệ xã hội?)'
    ],
    sample: `In my opinion, playing sports brings us many benefits.

Firstly, sport improves our physical health. When we exercise regularly, we become stronger and more energetic, and we have a lower risk of illnesses such as heart disease or high blood pressure.

Secondly, sport is good for our mental health. After a stressful day, a run or a game of badminton helps me relax, sleep better and feel less anxious.

Finally, sport improves our social life. Team sports like football or volleyball teach us to cooperate with others, and we can make many new friends.

To sum up, I think everyone should play sports every week to live a healthier and happier life.`,
    sampleTranslation: `Theo ý kiến của tôi, việc chơi thể thao mang lại cho chúng ta vô vàn lợi ích thiết thực.

Thứ nhất, thể thao giúp nâng cao sức khỏe thể chất. Khi chúng ta tập thể dục đều đặn, cơ thể sẽ trở nên cường tráng hơn, dồi dào năng lượng hơn và chúng ta sẽ giảm thiểu đáng kể nguy cơ mắc các bệnh tật nguy hiểm như bệnh tim mạch hay huyết áp cao.

Thứ hai, thể thao rất tốt cho sức khỏe tinh thần. Sau một ngày dài căng thẳng, một buổi chạy bộ hay một trận cầu lông giúp tôi thư giãn đầu óc, ngủ ngon giấc hơn và giảm bớt những lo âu phiền muộn.

Cuối cùng, thể thao giúp mở rộng và cải thiện đời sống xã hội. Những môn thể thao đồng đội như bóng đá hay bóng chuyền dạy cho chúng ta cách phối hợp ăn ý với người khác và tạo cơ hội tuyệt vời để chúng ta kết giao thêm nhiều bạn mới.

Tóm lại, tôi nghĩ rằng tất cả mọi người đều nên dành thời gian chơi thể thao mỗi tuần để có một cuộc sống khỏe mạnh và hạnh phúc hơn.`
  }
};

const fileContent = '// Dữ liệu ngân hàng câu hỏi Tiếng Anh Đầu Ra\n// TOPIC 3: SPORTS\n// Đầy đủ 4 kỹ năng: Từ vựng, Đọc hiểu, Nghe, Viết, Nói kèm lời dịch song ngữ 100%\n\nconst EXAM_DATA_TOPIC3 = ' + JSON.stringify(topic3Data, null, 2) + ';\n\nif (typeof window !== "undefined") {\n  window.EXAM_DATA_TOPIC3 = EXAM_DATA_TOPIC3;\n}\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = EXAM_DATA_TOPIC3;\n}\n';

fs.writeFileSync('data_topic3.js', fileContent, 'utf8');
console.log('Successfully written data_topic3.js, size:', fileContent.length);
