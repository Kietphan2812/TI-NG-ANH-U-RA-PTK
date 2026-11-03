// Script tạo tự động dữ liệu Topic 5: HOUSE AND HOME
// Nguồn: Đề thi và tài liệu ôn tập chuẩn Tiếng Anh Đầu Ra
const fs = require('fs');

const topic5Data = {
  topicId: 'topic5',
  topicTitle: 'TOPIC 5: HOUSE AND HOME',
  topicSubtitle: 'Nhà ở & Nơi sinh sống (Từ vựng 55 vật dụng & loại nhà, Quá khứ hoàn thành, Đọc hiểu Nhà ở Indonesia & Ngôi nhà tròn Ford Duncan)',

  vocabulary: [
    { word: 'accommodation', ipa: '/əˌkɒməˈdeɪʃn/', pos: 'n.', meaning: 'chỗ ăn ở, nơi lưu trú', example: 'The university provides affordable accommodation for all first-year students.' },
    { word: 'block of flats', ipa: '/blɒk əv flæts/', pos: 'n. phr.', meaning: 'tòa chung cư, khu tập thể', example: 'They live in a modern sixteen-storey block of flats near the city center.' },
    { word: 'tent', ipa: '/tent/', pos: 'n.', meaning: 'lều trại', example: 'We pitched our camping tent by the calm lake for the weekend.' },
    { word: 'caravan', ipa: '/ˈkærəvæn/', pos: 'n.', meaning: 'nhà lưu động trên xe', example: 'During the summer holidays, they traveled around the coast in a caravan.' },
    { word: 'bungalow', ipa: '/ˈbʌŋɡələʊ/', pos: 'n.', meaning: 'nhà một tầng, nhà trệt', example: 'My grandparents bought a charming bungalow with a lovely garden.' },
    { word: 'cottage', ipa: '/ˈkɒtɪdʒ/', pos: 'n.', meaning: 'ngôi nhà nhỏ, nhà tranh ở nông thôn', example: 'Ford Duncan lives in a beautiful round cottage surrounded by pine trees.' },
    { word: 'castle', ipa: '/ˈkɑːsl/', pos: 'n.', meaning: 'lâu đài', example: 'The ancient stone castle was built hundreds of years ago by the king.' },
    { word: 'villa', ipa: '/ˈvɪlə/', pos: 'n.', meaning: 'biệt thự', example: 'They rented a spacious seaside villa with a private swimming pool.' },
    { word: 'furniture', ipa: '/ˈfɜːnɪtʃə(r)/', pos: 'n.', meaning: 'đồ đạc nội thất trong nhà', example: 'They bought some elegant wooden furniture for their new living room.' },
    { word: 'balcony', ipa: '/ˈbælkəni/', pos: 'n.', meaning: 'ban công', example: 'We love drinking our morning coffee out on the balcony.' },
    { word: 'housework', ipa: '/ˈhaʊswɜːk/', pos: 'n.', meaning: 'việc nhà', example: 'Sharing the daily housework makes family life much easier.' },
    { word: 'housewife', ipa: '/ˈhaʊswaɪf/', pos: 'n.', meaning: 'bà nội trợ', example: 'She works as a dedicated housewife taking care of her three children.' },
    { word: 'convenient', ipa: '/kənˈviːniənt/', pos: 'adj.', meaning: 'tiện lợi, thuận tiện', example: 'Living close to the metro station is extremely convenient for commuting.' },
    { word: 'dark', ipa: '/dɑːk/', pos: 'adj.', meaning: 'tối tăm, thiếu ánh sáng', example: 'The basement was cold, damp and dark without any windows.' },
    { word: 'noisy', ipa: '/ˈnɔɪzi/', pos: 'adj.', meaning: 'ồn ào, náo nhiệt', example: 'The street outside can be quite noisy during evening rush hours.' },
    { word: 'quiet', ipa: '/ˈkwaɪət/', pos: 'adj.', meaning: 'yên lặng, thanh bình', example: 'The neighbourhood is very quiet and peaceful at night.' },
    { word: 'cramped', ipa: '/kræmpt/', pos: 'adj.', meaning: 'chật hẹp, tù túng', example: 'The family felt cramped living together in that tiny one-room apartment.' },
    { word: 'spacious', ipa: '/ˈspeɪʃəs/', pos: 'adj.', meaning: 'rộng rãi, thoáng đãng', example: 'Their new open-plan dining room is bright and spacious.' },
    { word: 'untidy', ipa: '/ʌnˈtaɪdi/', pos: 'adj.', meaning: 'bừa bộn, lộn xộn', example: 'His study room was untidy with stacks of papers on the floor.' },
    { word: 'antique', ipa: '/ænˈtiːk/', pos: 'adj.', meaning: 'cổ, theo kiểu cổ', example: 'There is a valuable antique clock standing in the hallway.' },
    { word: 'central heating', ipa: '/ˈsentrəl ˈhiːtɪŋ/', pos: 'n. phr.', meaning: 'hệ thống sưởi trung tâm', example: 'The cottage has modern central heating so it stays warm in winter.' },
    { word: 'air conditioner', ipa: '/eə(r) kənˈdɪʃənə(r)/', pos: 'n.', meaning: 'máy điều hòa nhiệt độ', example: 'We turn on the air conditioner when the weather gets stiflingly hot.' },
    { word: 'indoor plant', ipa: '/ˈɪndɔː(r) plɑːnt/', pos: 'n.', meaning: 'cây trồng trong nhà', example: 'Indoor plants purify the air and make the room feel fresh.' },
    { word: 'magazine rack', ipa: '/ˌmæɡəˈziːn ræk/', pos: 'n.', meaning: 'kệ để tạp chí', example: 'She keeps her design magazines neatly organized in the magazine rack.' },
    { word: 'carpet', ipa: '/ˈkɑːpɪt/', pos: 'n.', meaning: 'thảm trải sàn', example: 'A soft grey wool carpet covers the entire bedroom floor.' },
    { word: 'curtain', ipa: '/ˈkɜːtn/', pos: 'n.', meaning: 'rèm cửa', example: 'She drew the curtains to block out the harsh afternoon sun.' },
    { word: 'bulb', ipa: '/bʌlb/', pos: 'n.', meaning: 'bóng đèn', example: 'I replaced the burned-out light bulb with an energy-saving LED one.' },
    { word: 'cushion', ipa: '/ˈkʊʃn/', pos: 'n.', meaning: 'nệm ngồi, gối tựa', example: 'The living room sofa is decorated with colourful velvet cushions.' },
    { word: 'dishwasher', ipa: '/ˈdɪʃwɒʃə(r)/', pos: 'n.', meaning: 'máy rửa bát', example: 'The modern kitchen is well-equipped with an oven and an automatic dishwasher.' },
    { word: 'kitchen sink', ipa: '/ˈkɪtʃɪn sɪŋk/', pos: 'n. phr.', meaning: 'bồn rửa chén bát', example: 'Dirty bowls and cups were piled up in the stainless steel kitchen sink.' },
    { word: 'oven', ipa: '/ˈʌvn/', pos: 'n.', meaning: 'lò nướng', example: 'She baked fresh apple pies in the electric oven this morning.' },
    { word: 'kitchen cabinet', ipa: '/ˈkɪtʃɪn ˈkæbɪnət/', pos: 'n. phr.', meaning: 'tủ bếp', example: 'All the plates, spices and bowls are stored in the wooden kitchen cabinets.' },
    { word: 'kettle', ipa: '/ˈketl/', pos: 'n.', meaning: 'ấm đun nước', example: 'He boiled the kettle on the counter to make a pot of hot green tea.' },
    { word: 'cooker', ipa: '/ˈkʊkə(r)/', pos: 'n.', meaning: 'bếp nấu, nồi nấu', example: 'The kitchen is equipped with a modern gas cooker and an extractor hood.' },
    { word: 'microwave', ipa: '/ˈmaɪkrəweɪv/', pos: 'n.', meaning: 'lò vi sóng', example: 'I warmed up last night\'s leftover soup in the microwave in just two minutes.' },
    { word: 'non-stick pan', ipa: '/ˌnɒn ˈstɪk pæn/', pos: 'n. phr.', meaning: 'chảo chống dính', example: 'Using a quality non-stick pan makes frying eggs quick and effortless.' },
    { word: 'blender', ipa: '/ˈblendə(r)/', pos: 'n.', meaning: 'máy xay sinh tố', example: 'Making fruit smoothies is quick when you use a high-powered blender.' },
    { word: 'wardrobe', ipa: '/ˈwɔːdrəʊb/', pos: 'n.', meaning: 'tủ quần áo', example: 'He hung his shirts, coats and trousers neatly in the tall wooden wardrobe.' },
    { word: 'blanket', ipa: '/ˈblæŋkɪt/', pos: 'n.', meaning: 'chiếc chăn', example: 'She pulled the warm woollen blanket over her shoulders on the chilly night.' },
    { word: 'pillow', ipa: '/ˈpɪləʊ/', pos: 'n.', meaning: 'cái gối đầu', example: 'I prefer sleeping with a soft memory foam pillow for neck support.' },
    { word: 'mattress', ipa: '/ˈmætrəs/', pos: 'n.', meaning: 'tấm nệm, đệm giường', example: 'Doctors recommend replacing mattresses every eight to ten years to avoid back pain.' },
    { word: 'sheet', ipa: '/ʃiːt/', pos: 'n.', meaning: 'ga trải giường', example: 'She changes the cotton bed sheets once a week to keep the bed clean.' },
    { word: 'alarm clock', ipa: '/əˈlɑːm klɒk/', pos: 'n.', meaning: 'đồng hồ báo thức', example: 'My digital alarm clock goes off loudly at five o\'clock every morning.' },
    { word: 'bunk bed', ipa: '/bʌŋk bed/', pos: 'n.', meaning: 'giường tầng', example: 'The two brothers share a sturdy wooden bunk bed in their bedroom.' },
    { word: 'chest of drawers', ipa: '/tʃest əv drɔː(r)z/', pos: 'n.', meaning: 'tủ có ngăn kéo', example: 'She folded her T-shirts and socks and put them into the chest of drawers.' },
    { word: 'bedside table', ipa: '/ˈbedsaɪd ˈteɪbl/', pos: 'n.', meaning: 'bàn để đầu giường', example: 'He placed his reading glasses and a glass of water on the bedside table.' },
    { word: 'towel', ipa: '/ˈtaʊəl/', pos: 'n.', meaning: 'khăn tắm', example: 'White towels can be washed at high temperatures, but coloured ones may fade.' },
    { word: 'face flannel', ipa: '/feɪs ˈflænl/', pos: 'n.', meaning: 'khăn rửa mặt', example: 'Use a soft face flannel and gentle cleanser to wash your face.' },
    { word: 'washbasin', ipa: '/ˈwɒʃbeɪsn/', pos: 'n.', meaning: 'bồn rửa mặt trong phòng tắm', example: 'The white porcelain washbasin is fitted with a chrome mixer tap.' },
    { word: 'bucket', ipa: '/ˈbʌkɪt/', pos: 'n.', meaning: 'cái xô nước', example: 'He filled a plastic bucket with warm water and soap to clean the floor.' },
    { word: 'mug', ipa: '/mʌɡ/', pos: 'n.', meaning: 'cái ca, cốc to có quai', example: 'She enjoyed a large ceramic mug of hot chocolate beside the fireplace.' },
    { word: 'razor', ipa: '/ˈreɪzə(r)/', pos: 'n.', meaning: 'dao cạo râu', example: 'He used a sharp safety razor and shaving foam before going to work.' },
    { word: 'tap', ipa: '/tæp/', pos: 'n.', meaning: 'vòi nước', example: 'Remember to turn off the bathroom tap tightly so water doesn\'t drip.' },
    { word: 'shampoo', ipa: '/ʃæmˈpuː/', pos: 'n.', meaning: 'dầu gội đầu', example: 'This herbal shampoo leaves your hair feeling silky, shiny and clean.' },
    { word: 'hair conditioner', ipa: '/heə(r) kənˈdɪʃənə(r)/', pos: 'n.', meaning: 'dầu xả tóc', example: 'Apply hair conditioner after shampooing to nourish dry hair ends.' }
  ],

  vocabularyQuestions: [
    {
      id: 't5_v1',
      number: 1,
      section: 'vocab',
      question: 'Jimmy had a stomach ache because he ______ all the chocolate in the fridge before.',
      vietnameseTranslation: 'Jimmy bị đau bụng vì trước đó cậu ấy đã ăn hết sạch số sô-cô-la trong tủ lạnh.',
      options: [
        { key: 'A', text: 'was eating', vietnameseSub: 'đang ăn' },
        { key: 'B', text: 'ate', vietnameseSub: 'đã ăn (quá khứ đơn)' },
        { key: 'C', text: 'had eaten', vietnameseSub: 'đã ăn hết trước đó (Quá khứ hoàn thành - đúng)' },
        { key: 'D', text: 'have been eating', vietnameseSub: 'đã và đang ăn' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. had eaten. Hành động "ăn sô-cô-la" xảy ra và hoàn tất trước hành động "bị đau bụng" (had a stomach ache) trong quá khứ, nên ta chia thì Quá khứ hoàn thành (Past Perfect: had + V3/ed).'
    },
    {
      id: 't5_v2',
      number: 2,
      section: 'vocab',
      question: 'Making smoothies is so easy. They are usually prepared in ______ with ice, fruit, milk, yogurt or ice cream.',
      vietnameseTranslation: 'Làm sinh tố thật dễ dàng. Chúng thường được chế biến trong máy xay sinh tố cùng với đá, trái cây, sữa, sữa chua hoặc kem.',
      options: [
        { key: 'A', text: 'cookers', vietnameseSub: 'những cái nồi nấu / bếp nấu' },
        { key: 'B', text: 'blenders', vietnameseSub: 'những chiếc máy xay sinh tố (đúng)' },
        { key: 'C', text: 'ovens', vietnameseSub: 'những chiếc lò nướng' },
        { key: 'D', text: 'microwaves', vietnameseSub: 'những chiếc lò vi sóng' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. blenders. Để làm món sinh tố (smoothies), thiết bị nhà bếp dùng để xay nhuyễn đá và trái cây là máy xay sinh tố (blender).'
    },
    {
      id: 't5_v3',
      number: 3,
      section: 'vocab',
      question: 'When Rosy met Leonardo di Caprio, she was really excited because she ______ any actors before.',
      vietnameseTranslation: 'Khi Rosy gặp Leonardo di Caprio, cô ấy thực sự phấn khích vì trước đó cô chưa từng gặp bất kỳ diễn viên nào.',
      options: [
        { key: 'A', text: 'had never seen', vietnameseSub: 'chưa bao giờ nhìn thấy trước đó (Quá khứ hoàn thành - đúng)' },
        { key: 'B', text: 'have never seen', vietnameseSub: 'hiện tại hoàn thành' },
        { key: 'C', text: 'never saw', vietnameseSub: 'quá khứ đơn' },
        { key: 'D', text: 'has never seen', vietnameseSub: 'hiện tại hoàn thành số ít' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. had never seen. Việc "chưa từng gặp diễn viên nào" kéo dài từ trước cho đến thời điểm cô gặp Leonardo di Caprio trong quá khứ, có từ nhận biết "before" nên chia thì Quá khứ hoàn thành.'
    },
    {
      id: 't5_v4',
      number: 4,
      section: 'vocab',
      question: 'When Sophie arrived at home, her husband ______ dinner.',
      vietnameseTranslation: 'Khi Sophie về đến nhà, chồng cô ấy đã chuẩn bị xong bữa tối rồi.',
      options: [
        { key: 'A', text: 'has already prepared', vietnameseSub: 'hiện tại hoàn thành' },
        { key: 'B', text: 'already prepared', vietnameseSub: 'quá khứ đơn' },
        { key: 'C', text: 'had already prepared', vietnameseSub: 'đã chuẩn bị xong trước đó (Quá khứ hoàn thành - đúng)' },
        { key: 'D', text: 'A & B are correct', vietnameseSub: 'cả A và B đều đúng' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. had already prepared. Người chồng đã nấu xong bữa tối trước thời điểm Sophie về tới nhà (arrived at home), do đó dùng Quá khứ hoàn thành: had already prepared.'
    },
    {
      id: 't5_v5',
      number: 5,
      section: 'vocab',
      question: 'A blind man stuck in a ______ flat with his two sons has demanded the city council provide him with a bigger house.',
      vietnameseTranslation: 'Một người đàn ông khiếm thị bị mắc kẹt trong căn hộ chật hẹp cùng với hai người con trai đã yêu cầu hội đồng thành phố cấp cho ông một ngôi nhà lớn hơn.',
      options: [
        { key: 'A', text: 'cramped', vietnameseSub: 'chật chội, tù túng (đúng)' },
        { key: 'B', text: 'spacious', vietnameseSub: 'rộng rãi' },
        { key: 'C', text: 'quiet', vietnameseSub: 'yên tĩnh' },
        { key: 'D', text: 'noisy', vietnameseSub: 'ồn ào' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. cramped. Vế sau nói người đàn ông yêu cầu một ngôi nhà lớn hơn ("a bigger house"), chứng tỏ căn hộ hiện tại rất chật hẹp, thiếu không gian ("cramped flat").'
    },
    {
      id: 't5_v6',
      number: 6,
      section: 'vocab',
      question: 'Last Friday Martin ______ home from a long journey. His girlfriend was very happy to see him as they ______ to each other for two weeks.',
      vietnameseTranslation: 'Thứ Sáu tuần trước Martin đã trở về nhà sau một chuyến đi dài. Bạn gái anh rất hạnh phúc khi gặp lại anh vì họ đã không nói chuyện với nhau suốt hai tuần.',
      options: [
        { key: 'A', text: 'came/ had talked', vietnameseSub: 'về / đã nói chuyện' },
        { key: 'B', text: 'came/ didn\'t talk', vietnameseSub: 'về / không nói chuyện (quá khứ đơn)' },
        { key: 'C', text: 'came/ hadn\'t talked', vietnameseSub: 'về (QK đơn) / đã không nói chuyện trước đó (QK hoàn thành - đúng)' },
        { key: 'D', text: 'had come/ hadn\'t talked', vietnameseSub: 'cả 2 đều chia QK hoàn thành' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. came/ hadn\'t talked. "Last Friday" chỉ một mốc thời gian xác định trong quá khứ nên mệnh đề đầu chia Quá khứ đơn (came). Việc "không nói chuyện trong hai tuần" diễn ra trước cuộc gặp lại nên chia Quá khứ hoàn thành (hadn\'t talked).'
    },
    {
      id: 't5_v7',
      number: 7,
      section: 'vocab',
      question: 'We currently provide ______ in or close to college for all students in their first, second years.',
      vietnameseTranslation: 'Hiện tại chúng tôi cung cấp chỗ ở bên trong hoặc gần trường cho tất cả sinh viên năm nhất và năm hai.',
      options: [
        { key: 'A', text: 'living room', vietnameseSub: 'phòng khách' },
        { key: 'B', text: 'kettle', vietnameseSub: 'ấm đun nước' },
        { key: 'C', text: 'accommodation', vietnameseSub: 'chỗ ăn ở, phòng trọ ký túc xá (đúng)' },
        { key: 'D', text: 'furniture', vietnameseSub: 'đồ nội thất' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. accommodation. "Provide accommodation" là cụm từ chuẩn chỉ việc nhà trường cung cấp nơi ăn chốn ở / ký túc xá cho sinh viên theo học.'
    },
    {
      id: 't5_v8',
      number: 8,
      section: 'vocab',
      question: 'By the time David finished his studies, he ______ in London for over eight years.',
      vietnameseTranslation: 'Tính đến thời điểm David hoàn tất việc học của mình, anh ấy đã sống ở Luân Đôn được hơn tám năm.',
      options: [
        { key: 'A', text: 'was', vietnameseSub: 'thì quá khứ đơn' },
        { key: 'B', text: 'had been', vietnameseSub: 'đã ở đó (Quá khứ hoàn thành - đúng)' },
        { key: 'C', text: 'has been', vietnameseSub: 'hiện tại hoàn thành' },
        { key: 'D', text: 'A & B are correct', vietnameseSub: 'cả A và B đều đúng' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. had been. Cấu trúc chuẩn: "By the time + S + V2/ed, S + had + V3/ed" (tính đến thời điểm trong quá khứ, một hành động khác đã kéo dài được một khoảng thời gian).'
    },
    {
      id: 't5_v9',
      number: 9,
      section: 'vocab',
      question: 'White ______ will generally be fine in hot temperatures, but coloured ones may fade if you wash in hot water.',
      vietnameseTranslation: 'Khăn tắm màu trắng thường sẽ giặt tốt trong nước nóng, nhưng những chiếc có màu có thể bị phai nếu bạn giặt bằng nước nóng.',
      options: [
        { key: 'A', text: 'razors', vietnameseSub: 'những chiếc dao cạo' },
        { key: 'B', text: 'chest of drawers', vietnameseSub: 'tủ ngăn kéo' },
        { key: 'C', text: 'Wardrobes', vietnameseSub: 'tủ quần áo' },
        { key: 'D', text: 'towels', vietnameseSub: 'những chiếc khăn tắm (đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. towels. Đồ dùng bằng vải vóc cần giặt giũ ("wash in hot water") và phân biệt màu trắng với khăn màu ("coloured ones may fade") chính là khăn tắm (towels).'
    },
    {
      id: 't5_v10',
      number: 10,
      section: 'vocab',
      question: 'Most ______ are comfortable when they\'re new but they should be changed every eight to ten years to avoid getting back pain.',
      vietnameseTranslation: 'Hầu hết các tấm đệm nằm đều rất êm ái khi còn mới nhưng nên được thay thế sau mỗi 8 đến 10 năm để tránh bị đau lưng.',
      options: [
        { key: 'A', text: 'blankets', vietnameseSub: 'những chiếc chăn' },
        { key: 'B', text: 'face flannels', vietnameseSub: 'những chiếc khăn rửa mặt' },
        { key: 'C', text: 'mattresses', vietnameseSub: 'những tấm đệm giường (đúng)' },
        { key: 'D', text: 'Buckets', vietnameseSub: 'những cái xô' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. mattresses. Đệm giường ngủ (mattress) sau nhiều năm sử dụng sẽ bị xẹp, võng và gây ra tình trạng đau lưng ("avoid getting back pain") nên cần thay định kỳ.'
    }
  ],

  readingSignQuestions: [
    {
      id: 't5_s1',
      number: 11,
      section: 'signs',
      signText: 'No parking in front of these gates. 24 hours access required.',
      vietnameseSignTranslation: 'Không đỗ xe trước cổng này. Yêu cầu lối ra vào thông suốt 24/24.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'Don\'t leave your car touching these gates.', vietnameseSub: 'Đừng để xe của bạn chạm vào các cánh cổng này.' },
        { key: 'B', text: 'Don\'t park your car here within 24 hours.', vietnameseSub: 'Đừng đỗ xe của bạn ở đây trong vòng 24 giờ.' },
        { key: 'C', text: 'There is no overnight parking here.', vietnameseSub: 'Không có bãi đỗ xe qua đêm ở đây.' },
        { key: 'D', text: 'Don\'t park your cars here because access is needed at all times.', vietnameseSub: 'Đừng đỗ xe ở đây vì cần lối ra vào mọi lúc (đúng).' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Don\'t park your cars here because access is needed at all times. "24 hours access required" tương đương với "access is needed at all times" (cần lối đi lại liên tục suốt ngày đêm).'
    },
    {
      id: 't5_s2',
      number: 12,
      section: 'signs',
      signText: 'USE THESE DOORS ONLY IN AN EMERGENCY.',
      vietnameseSignTranslation: 'CHỈ SỬ DỤNG CÁC CỬA NÀY TRONG TRƯỜNG HỢP KHẨN CẤP.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'You mustn\'t open these doors in any cases.', vietnameseSub: 'Bạn không được mở cửa này trong bất kỳ trường hợp nào.' },
        { key: 'B', text: 'The door can be used if necessary.', vietnameseSub: 'Cửa có thể được sử dụng khi cần thiết/khẩn cấp (đúng).' },
        { key: 'C', text: 'Only some people can use these doors.', vietnameseSub: 'Chỉ một số người mới được sử dụng các cửa này.' },
        { key: 'D', text: 'These doors are locked all times.', vietnameseSub: 'Các cửa này bị khóa mọi lúc.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. The door can be used if necessary. Cửa thoát hiểm trong tình huống khẩn cấp ("in an emergency") nghĩa là khi cần thiết ("if necessary") thì hoàn toàn có thể mở ra sử dụng.'
    },
    {
      id: 't5_s3',
      number: 13,
      section: 'signs',
      signText: 'Wait for lift door to close before pressing button.',
      vietnameseSignTranslation: 'Chờ cửa thang máy đóng lại hoàn toàn trước khi bấm nút.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'Press the button to close the lift doors.', vietnameseSub: 'Bấm nút để đóng cửa thang máy.' },
        { key: 'B', text: 'Press the button after the doors close.', vietnameseSub: 'Bấm nút sau khi cửa đã đóng lại (đúng).' },
        { key: 'C', text: 'Press the button and the lift will wait.', vietnameseSub: 'Bấm nút và thang máy sẽ chờ.' },
        { key: 'D', text: 'Press the button while waiting for the doors to close.', vietnameseSub: 'Bấm nút trong khi đang đợi cửa đóng.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Press the button after the doors close. Biển báo hướng dẫn "Chờ cửa đóng trước khi bấm nút", tức là bạn bấm nút sau khi cửa đã đóng xong (after the doors close).'
    },
    {
      id: 't5_s4',
      number: 14,
      section: 'signs',
      signText: 'THIS BUILDING HAS 24-HOUR SECURITY CAMERAS IN OPERATION.',
      vietnameseSignTranslation: 'TÒA NHÀ NÀY CÓ CAMERA AN NINH HOẠT ĐỘNG 24/24.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'The cameras are not operating at the moment.', vietnameseSub: 'Các camera hiện tại không hoạt động.' },
        { key: 'B', text: 'This building is only open during the day.', vietnameseSub: 'Tòa nhà này chỉ mở cửa vào ban ngày.' },
        { key: 'C', text: 'There is security in this building day and night.', vietnameseSub: 'Tòa nhà này có an ninh giám sát cả ngày lẫn đêm (đúng).' },
        { key: 'D', text: 'This building is under operation.', vietnameseSub: 'Tòa nhà này đang trong quá trình phẫu thuật/vận hành.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. There is security in this building day and night. "24-hour security cameras in operation" có nghĩa là an ninh giám sát hoạt động liên tục cả ngày lẫn đêm (day and night).'
    },
    {
      id: 't5_s5',
      number: 15,
      section: 'signs',
      signText: 'To: Jim\\nFrom: Tom\\nDid I leave a watch in your house? The problem is it\'s not mine. I borrowed it and I must give it back.',
      vietnameseSignTranslation: 'Gửi: Jim\\nTừ: Tom\\nTớ có để quên đồng hồ ở nhà cậu không? Vấn đề là nó không phải của tớ. Tớ mượn nó và tớ phải đem trả lại.',
      question: 'What does Tom want Jim to do?',
      options: [
        { key: 'A', text: 'Return the watch he borrowed', vietnameseSub: 'Trả lại chiếc đồng hồ anh ấy đã mượn' },
        { key: 'B', text: 'Lend him a watch', vietnameseSub: 'Cho anh ấy mượn một chiếc đồng hồ' },
        { key: 'C', text: 'Look for the borrowed watch', vietnameseSub: 'Tìm giúp chiếc đồng hồ đã mượn xem có ở nhà Jim không (đúng).' },
        { key: 'D', text: 'Inform about the borrowed watch', vietnameseSub: 'Thông báo về chiếc đồng hồ mượn' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Look for the borrowed watch. Tom hỏi "Did I leave a watch in your house?" nhằm nhờ Jim kiểm tra, tìm kiếm quanh nhà xem có thấy chiếc đồng hồ mà Tom đã đi mượn hay không.'
    }
  ],

  readingPassageBTitle: 'INDONESIAN HOUSING & ENVIRONMENTAL CHALLENGES',
  readingPassageBTag: 'Passage B: Reading Comprehension',
  readingTonyPassage: `Indonesia is a group of islands, located between Asia and Australia. It is close to the equator, so it never gets cold. Every day, the temperature is between 21°C and 32°C. Indonesia is covered with tropical rainforests. For many years, Indonesians have used wood to build their homes. Most of the older houses were built completely of wood, with grass roofs. Today, deforestation is a serious problem in Indonesia. People have cut down large areas of forests to clear land for farming, to build wooden houses, and to sell timber abroad. Because of this, wood is now expensive, and many people can no longer afford to build wooden houses.

In rural areas, traditional houses are built on stilts, about two meters above the ground. They protect people from wild animals and seasonal floods during the rainy season. The space underneath the house is often used to keep farm tools or farm animals like chickens and pigs. In contrast, in big cities like Jakarta, housing is very different. Millions of people live in overcrowded blocks of flats or small brick houses built very close together.

Indonesia is also subject to many natural disasters. Floods occur regularly during the monsoon season, while prolonged droughts can cause severe water shortages in dry months. Earthquakes are also frequent because Indonesia lies on the Pacific Ring of Fire. Poor people in the cities find it extremely difficult to obtain decent housing, largely because of the lack of financial support and affordable credit from banks.`,

  readingTonyTranslation: `Indonesia là một quốc đảo nằm giữa châu Á và châu Úc. Nằm gần đường xích đạo nên thời tiết ở đây không bao giờ lạnh. Hằng ngày, nhiệt độ luôn duy trì từ 21°C đến 32°C. Indonesia được bao phủ bởi những khu rừng mưa nhiệt đới. Trong nhiều năm qua, người dân Indonesia đã sử dụng gỗ để xây dựng nhà cửa. Hầu hết các ngôi nhà cổ trước đây đều được làm hoàn toàn bằng gỗ, lợp mái bằng cỏ tranh. Ngày nay, nạn phá rừng là một vấn đề vô cùng nghiêm trọng tại Indonesia. Con người đã chặt phá những vùng rừng rộng lớn để lấy đất canh tác nông nghiệp, lấy gỗ xây nhà và đốn gỗ xuất khẩu ra nước ngoài. Vì lý do này, gỗ hiện nay rất đắt đỏ và nhiều người không còn đủ khả năng xây nhà bằng gỗ nữa.

Ở các vùng nông thôn, những ngôi nhà truyền thống được dựng trên các cột chống (nhà sàn), cách mặt đất khoảng hai mét. Chúng giúp bảo vệ con người khỏi thú dữ và những trận lũ lụt theo mùa vào mùa mưa. Khoảng không gian bên dưới sàn nhà thường được dùng để chứa dụng cụ nông nghiệp hoặc nuôi gia súc, gia cầm như gà và lợn. Trái lại, ở các thành phố lớn như Jakarta, nhà ở lại rất khác biệt. Hàng triệu người phải sống trong các khu chung cư đông đúc, chật chội hoặc trong những ngôi nhà gạch nhỏ xây san sát nhau.

Indonesia cũng thường xuyên phải hứng chịu nhiều thảm họa thiên nhiên. Lũ lụt diễn ra thường xuyên vào mùa gió mùa, trong khi những đợt hạn hán kéo dài có thể gây ra tình trạng thiếu nước ngọt trầm trọng trong các tháng mùa khô. Động đất cũng xảy ra thường xuyên do Indonesia nằm trên Vành đai lửa Thái Bình Dương. Người nghèo ở các đô thị gặp muôn vàn khó khăn khi tìm kiếm một chỗ ở tươm tất, nguyên nhân phần lớn là do thiếu sự hỗ trợ tài chính và các gói vay vốn từ ngân hàng.`,

  readingTonyQuestions: [
    {
      id: 't5_r1',
      number: 16,
      section: 'tony',
      question: 'According to the passage, what causes the shortage of trees in Indonesia?',
      vietnameseTranslation: 'Theo đoạn văn, điều gì gây ra tình trạng khan hiếm cây rừng ở Indonesia?',
      options: [
        { key: 'A', text: 'Clearing land for farming', vietnameseSub: 'Phá rừng lấy đất canh tác' },
        { key: 'B', text: 'Building wooden houses', vietnameseSub: 'Khai thác gỗ xây nhà' },
        { key: 'C', text: 'Smuggling wood', vietnameseSub: 'Khai thác/buôn lậu gỗ ra nước ngoài' },
        { key: 'D', text: 'A, B, C are correct', vietnameseSub: 'Cả A, B, C đều đúng (đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. A, B, C are correct. Đoạn 1 nêu rõ ba nguyên nhân: "clear land for farming, to build wooden houses, and to sell timber abroad" nên cả ba đáp án đều đúng.'
    },
    {
      id: 't5_r2',
      number: 17,
      section: 'tony',
      question: 'What does the word "They" in paragraph 2 refer to?',
      vietnameseTranslation: 'Từ "They" trong đoạn 2 ám chỉ điều gì?',
      options: [
        { key: 'A', text: 'A kind of material', vietnameseSub: 'Một loại vật liệu' },
        { key: 'B', text: 'A part of house', vietnameseSub: 'Một bộ phận của ngôi nhà (các cây cột chống/nhà sàn - đúng)' },
        { key: 'C', text: 'A type of house', vietnameseSub: 'Một kiểu nhà' },
        { key: 'D', text: 'A name of place', vietnameseSub: 'Một địa danh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. A part of house. "They" thay thế cho "stilts" (những chiếc cột chống của nhà sàn) ở câu trước: "built on stilts... They protect people from wild animals...".'
    },
    {
      id: 't5_r3',
      number: 18,
      section: 'tony',
      question: 'What natural disaster is NOT mentioned in the passage?',
      vietnameseTranslation: 'Thảm họa thiên nhiên nào KHÔNG được đề cập trong đoạn văn?',
      options: [
        { key: 'A', text: 'Floods', vietnameseSub: 'Lũ lụt (có đề cập)' },
        { key: 'B', text: 'Droughts', vietnameseSub: 'Hạn hán (có đề cập)' },
        { key: 'C', text: 'Storms', vietnameseSub: 'Bão lốc (không đề cập - đúng)' },
        { key: 'D', text: 'Earthquakes', vietnameseSub: 'Động đất (có đề cập)' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Storms. Đoạn 3 có nhắc đến lũ lụt (Floods), hạn hán (Droughts), và động đất (Earthquakes); bão (Storms) hoàn toàn không được nhắc tới.'
    },
    {
      id: 't5_r4',
      number: 19,
      section: 'tony',
      question: 'What makes poor people difficult to find houses in cities of Indonesia?',
      vietnameseTranslation: 'Điều gì khiến người nghèo khó tìm được nhà ở tại các thành phố của Indonesia?',
      options: [
        { key: 'A', text: 'Lack of housing', vietnameseSub: 'Thiếu nhà ở' },
        { key: 'B', text: 'Lack of financial support from banks', vietnameseSub: 'Thiếu sự hỗ trợ tài chính từ các ngân hàng (đúng)' },
        { key: 'C', text: 'Lack of electricity or running water', vietnameseSub: 'Thiếu điện hoặc nước máy' },
        { key: 'D', text: 'Lack of trees', vietnameseSub: 'Thiếu cây xanh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Lack of financial support from banks. Câu cuối cùng nêu rõ: "...largely because of the lack of financial support and affordable credit from banks."'
    },
    {
      id: 't5_r5',
      number: 20,
      section: 'tony',
      question: 'What can be the best title for the passage?',
      vietnameseTranslation: 'Nhan đề phù hợp nhất cho đoạn văn là gì?',
      options: [
        { key: 'A', text: 'Indonesian houses', vietnameseSub: 'Những ngôi nhà Indonesia' },
        { key: 'B', text: 'Indonesian culture', vietnameseSub: 'Văn hóa Indonesia' },
        { key: 'C', text: 'Indonesian housing problems', vietnameseSub: 'Những vấn đề nhà ở tại Indonesia (đúng)' },
        { key: 'D', text: 'Indonesian lifestyle', vietnameseSub: 'Phong cách sống của người Indonesia' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Indonesian housing problems. Bài đọc bàn luận về nạn khan hiếm gỗ xây nhà, thiên tai lũ lụt đe dọa, chung cư chật hẹp và khó khăn tài chính khi mua nhà của người nghèo.'
    }
  ],

  readingPassageCTitle: 'FORD DUNCAN\'S ROUND COTTAGE',
  readingPassageCTag: 'Passage C: Cloze Test (Điền từ vào chỗ trống)',
  readingAnnaPassage: `Ford Duncan lives in a beautiful round cottage. His parents built it based on the design of a 100-year-old cottage in the same area. Inside, there are two levels. The (1) _______ floor is the largest, containing 3 rooms. The living room has beautiful lake (2) _______. The dining room opens to the terrace, where the family can sit and (3) _______. The kitchen is well-equipped with a (4) _______, an oven and a fridge. Upstairs, there are 2 bedrooms and a (5) _______ home office. Because the house is made of (6) _______, (7) _______ is a danger here. The family found the shape of their new home a little (8) _______ at first. All the rooms are round, so there are no (9) _______. In addition, the ceilings seem quite small (10) _______ to the wide floors. But they all love living in this special house now.`,

  readingAnnaTranslation: `Ford Duncan sống trong một ngôi nhà tranh hình tròn tuyệt đẹp. Cha mẹ anh đã xây dựng nó dựa trên thiết kế của một ngôi nhà tranh 100 năm tuổi trong cùng khu vực. Bên trong có hai tầng. Tầng trệt (1) là tầng rộng nhất, bao gồm 3 phòng. Phòng khách có tầm nhìn (2) ra hồ nước tuyệt đẹp. Phòng ăn mở ra sân hiên, nơi cả gia đình có thể ngồi và thư giãn (3). Nhà bếp được trang bị đầy đủ tiện nghi với máy rửa bát (4), lò nướng và tủ lạnh. Tầng trên có 2 phòng ngủ và một văn phòng làm việc tại nhà ngăn nắp (5). Vì ngôi nhà được làm bằng gỗ (7) nên hỏa hoạn (6) là một mối nguy hiểm ở đây. Ban đầu gia đình cảm thấy hình dáng ngôi nhà mới hơi kỳ lạ (8). Tất cả các phòng đều hình tròn nên không có góc tường (9). Ngoài ra, trần nhà trông khá nhỏ so với (10) diện tích sàn rộng. Nhưng giờ đây tất cả họ đều rất yêu thích cuộc sống trong ngôi nhà đặc biệt này.`,

  readingAnnaQuestions: [
    {
      id: 't5_c1',
      number: 21,
      section: 'anna',
      question: 'Choose the best word for blank (1): "The (1) _______ floor is the largest, containing 3 rooms."',
      options: [
        { key: 'A', text: 'ground', vietnameseSub: 'tầng trệt (ground floor - đúng)' },
        { key: 'B', text: 'fire', vietnameseSub: 'lửa' },
        { key: 'C', text: 'wood', vietnameseSub: 'gỗ' },
        { key: 'D', text: 'view', vietnameseSub: 'tầm nhìn' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. ground. Cụm từ "the ground floor" có nghĩa là tầng trệt (tầng 1 trong hệ thống tiếng Anh Anh).'
    },
    {
      id: 't5_c2',
      number: 22,
      section: 'anna',
      question: 'Choose the best word for blank (2): "The living room has beautiful lake (2) _______."',
      options: [
        { key: 'A', text: 'sightseeing', vietnameseSub: 'việc ngắm cảnh' },
        { key: 'B', text: 'view', vietnameseSub: 'tầm nhìn, cảnh quan (lake view - đúng)' },
        { key: 'C', text: 'fire', vietnameseSub: 'ngọn lửa' },
        { key: 'D', text: 'wood', vietnameseSub: 'gỗ' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. view. Cụm từ "lake view" có nghĩa là tầm nhìn trông ra hồ nước đẹp.'
    },
    {
      id: 't5_c3',
      number: 23,
      section: 'anna',
      question: 'Choose the best word for blank (3): "...where the family can sit and (3) _______."',
      options: [
        { key: 'A', text: 'choose', vietnameseSub: 'lựa chọn' },
        { key: 'B', text: 'stand', vietnameseSub: 'đứng' },
        { key: 'C', text: 'relax', vietnameseSub: 'thư giãn, nghỉ ngơi (đúng)' },
        { key: 'D', text: 'go', vietnameseSub: 'đi' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. relax. Sân hiên ngoài trời là nơi các thành viên gia đình ngồi hóng mát và thư giãn ("sit and relax").'
    },
    {
      id: 't5_c4',
      number: 24,
      section: 'anna',
      question: 'Choose the best word for blank (4): "The kitchen is well-equipped with a (4) _______, an oven and a fridge."',
      options: [
        { key: 'A', text: 'blanket', vietnameseSub: 'chiếc chăn' },
        { key: 'B', text: 'dishwasher', vietnameseSub: 'máy rửa bát (thiết bị nhà bếp - đúng)' },
        { key: 'C', text: 'sofa', vietnameseSub: 'ghế sofa' },
        { key: 'D', text: 'toilet', vietnameseSub: 'nhà vệ sinh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. dishwasher. Trong nhà bếp hiện đại, máy rửa bát (dishwasher) đi liền với lò nướng (oven) và tủ lạnh (fridge).'
    },
    {
      id: 't5_c5',
      number: 25,
      section: 'anna',
      question: 'Choose the best word for blank (5): "Upstairs, there are 2 bedrooms and a (5) _______ home office."',
      options: [
        { key: 'A', text: 'noisy', vietnameseSub: 'ồn ào' },
        { key: 'B', text: 'strange', vietnameseSub: 'lạ lùng' },
        { key: 'C', text: 'well-organized', vietnameseSub: 'gọn gàng, ngăn nắp (đúng)' },
        { key: 'D', text: 'compared', vietnameseSub: 'so sánh' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. well-organized. Một góc làm việc tại nhà ngăn nắp, khoa học được mô tả là "a well-organized home office".'
    },
    {
      id: 't5_c6',
      number: 26,
      section: 'anna',
      question: 'Choose the best word for blank (6): "...(6) _______ is a danger here because it is made of..."',
      options: [
        { key: 'A', text: 'ground', vietnameseSub: 'mặt đất' },
        { key: 'B', text: 'fire', vietnameseSub: 'hỏa hoạn, cháy nhà (đúng)' },
        { key: 'C', text: 'stone', vietnameseSub: 'đá' },
        { key: 'D', text: 'wood', vietnameseSub: 'gỗ' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. fire. Vì ngôi nhà làm bằng gỗ nên nguy cơ hỏa hoạn cháy nhà ("fire") là mối nguy hiểm thường trực.'
    },
    {
      id: 't5_c7',
      number: 27,
      section: 'anna',
      question: 'Choose the best word for blank (7): "...because it is made of (7) _______."',
      options: [
        { key: 'A', text: 'blanket', vietnameseSub: 'chăn' },
        { key: 'B', text: 'wardrobe', vietnameseSub: 'tủ quần áo' },
        { key: 'C', text: 'fire', vietnameseSub: 'lửa' },
        { key: 'D', text: 'wood', vietnameseSub: 'gỗ (vật liệu xây nhà - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. wood. "made of wood" (được làm bằng gỗ, dễ bắt lửa).'
    },
    {
      id: 't5_c8',
      number: 28,
      section: 'anna',
      question: 'Choose the best word for blank (8): "The family found the shape of their new home a little (8) _______ at first."',
      options: [
        { key: 'A', text: 'strange', vietnameseSub: 'kỳ lạ, khác thường (đúng)' },
        { key: 'B', text: 'well-organized', vietnameseSub: 'ngăn nắp' },
        { key: 'C', text: 'noisy', vietnameseSub: 'ồn ào' },
        { key: 'D', text: 'dishwasher', vietnameseSub: 'máy rửa bát' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. strange. "found the shape a little strange at first" (ban đầu cảm thấy hình dáng tròn xoe của ngôi nhà hơi kỳ lạ khác thường).'
    },
    {
      id: 't5_c9',
      number: 29,
      section: 'anna',
      question: 'Choose the best word for blank (9): "All the rooms are round, so there are no (9) _______."',
      options: [
        { key: 'A', text: 'rooms', vietnameseSub: 'phòng' },
        { key: 'B', text: 'floors', vietnameseSub: 'tầng nhà' },
        { key: 'C', text: 'terraces', vietnameseSub: 'sân hiên' },
        { key: 'D', text: 'corners', vietnameseSub: 'các góc tường (đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. corners. Vì các phòng đều có hình tròn nên các bức tường uốn cong và không hề có góc cạnh nhọn ("no corners").'
    },
    {
      id: 't5_c10',
      number: 30,
      section: 'anna',
      question: 'Choose the best word for blank (10): "...the ceilings seem quite small (10) _______ to the wide floors."',
      options: [
        { key: 'A', text: 'compared', vietnameseSub: 'so sánh với (cụm compared to - đúng)' },
        { key: 'B', text: 'well-organized', vietnameseSub: 'ngăn nắp' },
        { key: 'C', text: 'noisy', vietnameseSub: 'ồn ào' },
        { key: 'D', text: 'well-equipped', vietnameseSub: 'tiện nghi' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. compared. Cụm từ cố định "compared to / compared with" có nghĩa là khi so sánh với.'
    }
  ],

  sentenceTransformations: [
    {
      id: 't5_w1',
      number: 31,
      originalSentence: 'They have painted the walls green.',
      vietnameseTranslation: 'Họ đã sơn những bức tường màu xanh lá cây.',
      prefix: 'The walls',
      modelAnswer: 'The walls have been painted green.',
      vietnameseModelTranslation: 'Những bức tường đã được sơn màu xanh lá cây.',
      acceptedAnswers: [
        'have been painted green',
        'have been painted green.'
      ],
      grammarPoint: 'Chuyển đổi câu chủ động sang bị động ở thì Hiện tại hoàn thành: S + have/has + V3/ed + O -> O + have/has been + V3/ed.'
    },
    {
      id: 't5_w2',
      number: 32,
      originalSentence: 'The teacher should buy the supplies for this class.',
      vietnameseTranslation: 'Giáo viên nên mua đồ dùng học tập cho lớp học này.',
      prefix: 'The supplies',
      modelAnswer: 'The supplies for this class should be bought by the teacher.',
      vietnameseModelTranslation: 'Đồ dùng học tập cho lớp học này nên được mua bởi giáo viên.',
      acceptedAnswers: [
        'for this class should be bought by the teacher',
        'for this class should be bought by the teacher.',
        'should be bought for this class by the teacher',
        'should be bought for this class by the teacher.'
      ],
      grammarPoint: 'Chuyển đổi câu bị động với động từ khuyết thiếu (Modal verb): S + should + V_inf + O -> O + should be + V3/ed (+ by S).'
    },
    {
      id: 't5_w3',
      number: 33,
      originalSentence: 'In spite of his age, Mr. Benson runs 7 miles before breakfast.',
      vietnameseTranslation: 'Mặc dù đã cao tuổi, ông Benson vẫn chạy bộ 7 dặm trước bữa ăn sáng.',
      prefix: 'Although',
      modelAnswer: 'Although he is old, Mr. Benson runs 7 miles before breakfast.',
      vietnameseModelTranslation: 'Mặc dù ông ấy đã già, ông Benson vẫn chạy 7 dặm trước bữa sáng.',
      acceptedAnswers: [
        'he is old, Mr. Benson runs 7 miles before breakfast',
        'he is old, Mr. Benson runs 7 miles before breakfast.',
        'Mr. Benson is old, he runs 7 miles before breakfast',
        'Mr. Benson is old, he runs 7 miles before breakfast.',
        'he is elderly, Mr. Benson runs 7 miles before breakfast',
        'he is elderly, Mr. Benson runs 7 miles before breakfast.'
      ],
      grammarPoint: 'Chuyển đổi giữa cụm từ chỉ sự nhượng bộ sang mệnh đề: In spite of + his age / N = Although + S + be + adj (Although he is old).'
    },
    {
      id: 't5_w4',
      number: 34,
      originalSentence: 'It\'s a pity I didn\'t take my doctor\'s advice.',
      vietnameseTranslation: 'Thật tiếc là tôi đã không nghe theo lời khuyên của bác sĩ.',
      prefix: 'I wish',
      modelAnswer: 'I wish I had taken my doctor\'s advice.',
      vietnameseModelTranslation: 'Tôi ước gì mình đã nghe theo lời khuyên của bác sĩ.',
      acceptedAnswers: [
        'I had taken my doctor\'s advice',
        'I had taken my doctor\'s advice.',
        'I had followed my doctor\'s advice',
        'I had followed my doctor\'s advice.'
      ],
      grammarPoint: 'Câu ước muốn trái ngược với quá khứ (Wish in the past): It\'s a pity S + didn\'t V = S + wish + S + had + V3/ed.'
    },
    {
      id: 't5_w5',
      number: 35,
      originalSentence: 'The bread is so stale that we can\'t eat it.',
      vietnameseTranslation: 'Ổ bánh mì bị cũ và ỉu đến mức chúng tôi không thể ăn được.',
      prefix: 'The bread isn\'t',
      modelAnswer: 'The bread isn\'t fresh enough for us to eat.',
      vietnameseModelTranslation: 'Ổ bánh mì không đủ tươi mới để chúng tôi có thể ăn.',
      acceptedAnswers: [
        'fresh enough for us to eat',
        'fresh enough for us to eat.',
        'fresh enough to eat',
        'fresh enough to eat.'
      ],
      grammarPoint: 'Biến đổi cấu trúc "so... that" mang nghĩa tiêu cực sang cấu trúc "not + adj + enough (for sb) to V": S + be + so stale that S can\'t V = S isn\'t fresh enough (for sb) to V.'
    }
  ],

  letterWriting: {
    prompt: 'Write a letter (about 120 words) to your friend about the house you are living in.\\nYour letter should include:\\n- What kind of your house?\\n- What does it look like?\\n- Does it have any special features?',
    vietnamesePrompt: 'Viết một lá thư (khoảng 120 từ) gửi cho bạn của bạn kể về ngôi nhà bạn đang sống.\\nLá thư nên bao gồm:\\n- Đó là kiểu nhà gì?\\n- Ngôi nhà trông như thế nào?\\n- Ngôi nhà có điểm gì đặc biệt không?',
    requiredWordCount: '100 - 140 words',
    sample1: {
      title: 'Bài mẫu 1: Nhà hai tầng ở ngoại ô (Mẫu chuẩn trong giáo trình)',
      content: `Hello Sam,

I'm living in a house in a suburb of Hanoi, a new two-storey brick and concrete one. There are three bedrooms with two bathrooms, a living room, a dining room and a kitchen.

The living room is the most beautiful one with a big sofa, colourful cushions and a modern TV. The kitchen has 2 gas cookers, a specially designed cupboard and a big fridge. The dining room is just a small room next to the kitchen. It has a round wooden table with six leather chairs. All the bedrooms are in the same design with light pink walls, double beds and wardrobes.

I think the outstanding feature of my house is the beautiful garden with a lot of flowers and many fruit trees. I hope that someday you can visit my house.

Love,`
    },
    sample2: {
      title: 'Bài mẫu 2: Ngôi nhà ở Phú Hòa (Phan Tấn Kiệt)',
      content: `Hi Tom,

I'm writing to tell you about the house I'm living in. It is a comfortable one-storey house in Phu Hoa, and I live there happily with my parents and my two older brothers.

The house has three bedrooms, a living room, a kitchen and a clean bathroom. The living room is the biggest room, with a cosy sofa, a TV and a small table. The kitchen is right next to it, where my mother cooks delicious meals every day. My bedroom is small but very quiet and comfortable, with a desk and my computer where I study and practice coding.

The special feature of my house is the lovely garden in front, full of blooming flowers and green fruit trees. It is a peaceful place. I hope you can visit us one day.

Best wishes,
Phan Tan Kiet`
    }
  },

  speakingCard: {
    cardTitle: 'SPEAKING CARD No.5: Talk about your favourite room in your house',
    cardSubtitle: 'Nói về căn phòng yêu thích nhất trong ngôi nhà của bạn',
    questions: [
      { q: 'Which is your favourite room in your house?', vi: 'Căn phòng yêu thích nhất trong nhà bạn là phòng nào?' },
      { q: 'What does it look like?', vi: 'Căn phòng đó trông như thế nào?' },
      { q: 'Why do you like it?', vi: 'Tại sao bạn lại thích căn phòng đó?' },
      { q: 'What changes do you want to make in it?', vi: 'Bạn muốn thực hiện những thay đổi gì trong phòng đó?' }
    ],
    sampleAnswers: [
      {
        speaker: 'Bài mẫu 1 (Theo giáo trình - Phòng ngủ chia sẻ với chị gái)',
        textEn: `Er, let me see… there are 5 rooms in my house, but actually the one I like most is my bedroom. Though it isn't my own bedroom because I have to share it with my sister, whenever I get home, the bedroom is the place where I feel the most comfortable. And as I lie in my bed, I just want to have a safe and sound sleep. It's really a relaxing moment. My bedroom is big enough for a king-sized bed with two bedside tables. There are two desks and chairs for me and my sister to study. We've spent a lot of time decorating our room in a very unique way with our favourite paintings and posters. I find my bedroom very cosy. But actually there are some certain changes I'd like to make in it. Firstly, it's the colour of the room. I would like to change the grey walls to the blue ones. They'll look much more interesting and lovely. And the other change I'd like to make in my room is to have a bookshelf next to the window to put all my souvenirs as well as my books. I'm planning to make my room become a wonderful place.`,
        textVi: `À, để tôi xem nào… nhà tôi có 5 phòng, nhưng thật sự căn phòng tôi thích nhất là phòng ngủ. Dù không phải phòng ngủ riêng vì tôi phải ở chung với chị gái, nhưng mỗi khi về nhà, phòng ngủ là nơi tôi cảm thấy thoải mái nhất. Khi ngả lưng trên giường, tôi chỉ muốn có một giấc ngủ thật ngon và trọn vẹn. Đó thật sự là khoảnh khắc thư giãn. Phòng ngủ của tôi đủ rộng cho một chiếc giường cỡ lớn với hai chiếc bàn cạnh giường. Có hai bàn ghế cho tôi và chị gái học bài. Chúng tôi đã dành nhiều thời gian trang trí phòng theo phong cách rất độc đáo bằng những bức tranh và áp phích yêu thích. Tôi thấy phòng ngủ của mình rất ấm cúng. Nhưng thật ra có một số thay đổi nhất định tôi muốn thực hiện. Trước hết là màu sắc của phòng. Tôi muốn đổi những bức tường màu xám sang màu xanh lam. Chúng sẽ trông thú vị và đáng yêu hơn nhiều. Và thay đổi khác tôi muốn làm là đặt một giá sách cạnh cửa sổ để đựng tất cả quà lưu niệm cũng như sách vở. Tôi dự định biến căn phòng của mình thành một không gian tuyệt vời.`
      },
      {
        speaker: 'Bài mẫu 2 (Theo thông tin bạn Phan Tấn Kiệt - Phú Hòa)',
        textEn: `My favourite room in my house is my bedroom. It is not very big, but it is quiet and comfortable. There is a bed, a wardrobe, and a desk with my computer, where I study, watch YouTube and repair electronic devices. The walls are light in colour and I have some small posters on them. I like it because it is the place where I can relax after a long day at university. However, I would like to make some changes. First, I want to buy a bigger desk and a better chair, so I can work for a long time more comfortably. Second, I want to put a small bookshelf next to the window for my books and tools. I hope my room will become a more useful and wonderful place.`,
        textVi: `Căn phòng yêu thích nhất trong nhà tôi là phòng ngủ. Phòng không quá lớn nhưng rất yên tĩnh và thoải mái. Trong phòng có một chiếc giường, một tủ quần áo và một bàn để máy tính, nơi tôi học bài, xem YouTube và sửa chữa đồ điện tử. Tường phòng có màu sáng và tôi có dán một vài tấm áp phích nhỏ. Tôi thích nó vì đây là nơi tôi có thể thư giãn sau một ngày dài ở trường đại học. Tuy nhiên, tôi muốn thực hiện một vài thay đổi. Đầu tiên, tôi muốn mua một chiếc bàn lớn hơn và một chiếc ghế tốt hơn để có thể ngồi làm việc lâu một cách thoải mái. Thứ hai, tôi muốn đặt một giá sách nhỏ cạnh cửa sổ để đựng sách và dụng cụ. Tôi hy vọng phòng của mình sẽ trở thành một nơi hữu ích và tuyệt vời hơn.`
      }
    ]
  },

  listeningPartA: [
    { number: 1, question: 'Which dish did Mark cook in the competition?', options: ['A: fish', 'B: meat', 'C: vegetables and chicken'], answer: 'B', note: 'Đáp án phán đoán B (meat)' },
    { number: 2, question: 'Where is the girl\'s book now?', options: ['A: on a tray', 'B: in a drawer', 'C: on a café table'], answer: 'A', note: 'Đáp án phán đoán A (on a tray)' },
    { number: 3, question: 'Who lives with Josh in his house?', options: ['A: man, grandmother, woman', 'B: man, grandmother, girl, woman', 'C: man, girl, woman'], answer: 'B', note: 'Đáp án phán đoán B (man, grandmother, girl, woman)' },
    { number: 4, question: 'What will the girl take with her on holiday?', options: ['A: suitcase', 'B: sports bag', 'C: rucksack'], answer: 'C', note: 'Đáp án phán đoán C (rucksack)' },
    { number: 5, question: 'What time will the train to Manchester leave?', options: ['A: 11:30', 'B: 11:45', 'C: 11:50'], answer: 'B', note: 'Đáp án phán đoán B (11:45)' },
    { number: 6, question: 'Where will the friends meet?', options: ['A: café', 'B: notice board', 'C: bus stop'], answer: 'C', note: 'Đáp án phán đoán C (bus stop)' },
    { number: 7, question: 'Which sport will the boy do soon at the centre?', options: ['A: water skiing', 'B: diving', 'C: sailing'], answer: 'A', note: 'Đáp án phán đoán A (water skiing)' }
  ],

  listeningPartB: {
    title: 'SCIENCE WORLD - NEXT WEEK\'S SPECIAL EVENTS (Listen and fill in the missing information)',
    items: [
      { gap: 1, text: 'Electricity workshop – Time of day: ______', answer: 'Morning / Afternoon' },
      { gap: 2, text: 'Talk about space travel by well-known scientist, Saturday evening – From ______', answer: '7.30 (19:30)' },
      { gap: 3, text: 'Ticket for Special Events cost extra: £ ______ Adult; reduced prices for children', answer: '4.50' },
      { gap: 4, text: 'Get tickets direct from Science World on 284311, or from the ______', answer: 'shop / ticket office' },
      { gap: 5, text: 'Newton Café next to the ______ (Snacks available all day).', answer: 'entrance' }
    ],
    note: 'Lưu ý: Các đáp án phần nghe dựa trên ngữ cảnh suy luận tài liệu ôn tập chuẩn do không kèm file audio gốc.'
  }
};

// Ghi ra file data_topic5.js
const fileContent = `// TOPIC 5: HOUSE AND HOME - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC5 = ${JSON.stringify(topic5Data, null, 2)};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC5 = EXAM_DATA_TOPIC5;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC5;
}
`;

fs.writeFileSync('data_topic5.js', fileContent, 'utf8');
console.log('✅ Created data_topic5.js successfully! Length:', fileContent.length);
