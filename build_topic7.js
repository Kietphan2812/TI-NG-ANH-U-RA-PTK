// Script tạo tự động dữ liệu Topic 7: FOOD AND DRINKS
// Nguồn: Đề thi và tài liệu ôn tập chuẩn Tiếng Anh Đầu Ra
const fs = require('fs');

const topic7Data = {
  topicId: 'topic7',
  topicTitle: 'TOPIC 7: FOOD AND DRINKS',
  topicSubtitle: 'Ẩm thực & Đồ uống (Lượng từ, Danh từ đếm được/không đếm được, Đọc hiểu Thành phố Newcastle & Fresh Bouquets)',

  vocabulary: [
    { word: 'veal', ipa: '/viːl/', pos: 'n.', meaning: 'thịt bê', example: 'Veal is the tender meat from a young calf.' },
    { word: 'beef', ipa: '/biːf/', pos: 'n.', meaning: 'thịt bò', example: 'We bought fresh beef to prepare traditional Vietnamese pho.' },
    { word: 'bacon', ipa: '/ˈbeɪkən/', pos: 'n.', meaning: 'thịt lợn muối xông khói', example: 'He loves having crispy fried bacon and scrambled eggs for breakfast.' },
    { word: 'tuna', ipa: '/ˈtjuːnə/', pos: 'n.', meaning: 'cá ngừ', example: 'She ordered a fresh tuna salad sandwich at the café.' },
    { word: 'flour', ipa: '/ˈflaʊə(r)/', pos: 'n.', meaning: 'bột mì', example: 'I need a two-kilogram bag of wheat flour to bake chocolate biscuits.' },
    { word: 'carton', ipa: '/ˈkɑːtn/', pos: 'n.', meaning: 'hộp giấy (đựng sữa, nước trái cây)', example: 'Could you please pick up two cartons of fresh milk from the store?' },
    { word: 'can', ipa: '/kæn/', pos: 'n.', meaning: 'lon, hộp kim loại', example: 'He cracked open a cold can of sparkling soda after exercising.' },
    { word: 'jug', ipa: '/dʒʌɡ/', pos: 'n.', meaning: 'bình có quai rót', example: 'The waiter placed a tall glass jug of iced water on our table.' },
    { word: 'jar', ipa: '/dʒɑː(r)/', pos: 'n.', meaning: 'lọ thủy tinh, hũ', example: 'My grandmother keeps homemade strawberry jam in a glass jar.' },
    { word: 'bar', ipa: '/bɑː(r)/', pos: 'n.', meaning: 'thanh, thỏi (sô-cô-la, xà phòng)', example: 'She broke off a square from the bar of dark chocolate.' },
    { word: 'salad', ipa: '/ˈsæləd/', pos: 'n.', meaning: 'món rau trộn xà lách', example: 'A fresh salad is a delicious mixture of raw vegetables with dressing.' },
    { word: 'curry', ipa: '/ˈkʌri/', pos: 'n.', meaning: 'món cà ri', example: 'We enjoyed spicy chicken curry served with steamed jasmine rice.' },
    { word: 'soup', ipa: '/suːp/', pos: 'n.', meaning: 'món canh, súp', example: 'A warm bowl of pumpkin soup is comforting on a rainy evening.' },
    { word: 'pasta', ipa: '/ˈpæstə/', pos: 'n.', meaning: 'mì Ý, nui', example: 'Italian pasta served with fresh tomato sauce and cheese is delicious.' },
    { word: 'butter', ipa: '/ˈbʌtə(r)/', pos: 'n.', meaning: 'bơ (làm từ sữa)', example: 'Spread a thin layer of butter on your toasted bread.' },
    { word: 'cheese', ipa: '/tʃiːz/', pos: 'n.', meaning: 'phô mai', example: 'He sprinkled grated parmesan cheese over the hot spaghetti.' },
    { word: 'leftovers', ipa: '/ˈleftəʊvəz/', pos: 'n. pl.', meaning: 'thức ăn thừa còn lại', example: 'Please put the dinner leftovers into plastic containers in the fridge.' },
    { word: 'goose (geese)', ipa: '/ɡuːs/ (/ɡiːs/)', pos: 'n.', meaning: 'con ngỗng (những con ngỗng)', example: 'There are several white geese wandering in the garden pond.' },
    { word: 'recipe', ipa: '/ˈresəpi/', pos: 'n.', meaning: 'công thức nấu ăn', example: 'Follow this traditional recipe to cook a wonderful beef broth.' },
    { word: 'ingredient', ipa: '/ɪnˈɡriːdiənt/', pos: 'n.', meaning: 'nguyên liệu nấu ăn', example: 'Fresh herbs and ginger are essential ingredients in cooking pho.' },
    { word: 'beverage', ipa: '/ˈbevərɪdʒ/', pos: 'n.', meaning: 'đồ uống, thức uống', example: 'The restaurant offers a wide selection of hot and cold beverages.' },
    { word: 'broth', ipa: '/brɒθ/', pos: 'n.', meaning: 'nước dùng, nước xuýt', example: 'Simmer the beef bones for several hours to achieve a clear, sweet broth.' },
    { word: 'slice', ipa: '/slaɪs/', pos: 'v./n.', meaning: 'thái lát mỏng / lát mỏng', example: 'Slice the beef thinly before placing it on top of the cooked noodles.' },
    { word: 'herbs', ipa: '/hɜːbz/', pos: 'n. pl.', meaning: 'rau thơm, rau gia vị', example: 'Pho is traditionally served with fresh basil, cilantro and lime.' },
    { word: 'simmer', ipa: '/ˈsɪmə(r)/', pos: 'v.', meaning: 'ninh nhỏ lửa', example: 'Let the soup simmer gently on the stove so all flavours blend well.' }
  ],

  vocabularyQuestions: [
    {
      id: 't7_v1',
      number: 1,
      section: 'vocab',
      question: 'We\'ve got ______ meat in the fridge.',
      vietnameseTranslation: 'Chúng tôi có rất nhiều thịt trong tủ lạnh.',
      options: [
        { key: 'A', text: 'many', vietnameseSub: 'nhiều (chỉ đi với danh từ đếm được)' },
        { key: 'B', text: 'any', vietnameseSub: 'bất kỳ (dùng trong câu phủ định/nghi vấn)' },
        { key: 'C', text: 'a', vietnameseSub: 'một (đi với danh từ đếm được số ít)' },
        { key: 'D', text: 'a lot of', vietnameseSub: 'nhiều (đi với danh từ không đếm được trong câu khẳng định - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. a lot of. "meat" là danh từ không đếm được. Câu ở thể khẳng định nên dùng "a lot of" (hoặc lots of). Không dùng "many" vì many chỉ đi với danh từ đếm được số nhiều.'
    },
    {
      id: 't7_v2',
      number: 2,
      section: 'vocab',
      question: 'I need a ______ of flour to make biscuits.',
      vietnameseTranslation: 'Tôi cần một túi bột mì để làm bánh quy.',
      options: [
        { key: 'A', text: 'jug', vietnameseSub: 'cái bình có quai' },
        { key: 'B', text: 'bag', vietnameseSub: 'túi, bao (cụm a bag of flour - đúng)' },
        { key: 'C', text: 'can', vietnameseSub: 'lon kim loại' },
        { key: 'D', text: 'carton', vietnameseSub: 'hộp giấy đựng chất lỏng' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. bag. Bột mì dạng hạt mịn thường được đóng gói và đong đếm bằng túi / bao bì: "a bag of flour" (một túi bột mì).'
    },
    {
      id: 't7_v3',
      number: 3,
      section: 'vocab',
      question: 'There isn\'t ______ milk left. I\'ll go to buy some.',
      vietnameseTranslation: 'Không còn giọt sữa nào cả. Tôi sẽ đi mua một ít.',
      options: [
        { key: 'A', text: 'some', vietnameseSub: 'một ít (dùng trong câu khẳng định)' },
        { key: 'B', text: 'any', vietnameseSub: 'chút nào (dùng trong câu phủ định - đúng)' },
        { key: 'C', text: 'many', vietnameseSub: 'nhiều (danh từ đếm được)' },
        { key: 'D', text: 'a lot of', vietnameseSub: 'nhiều' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. any. Trong câu phủ định ("isn\'t") với danh từ không đếm được "milk", ta dùng lượng từ "any" mang nghĩa "không còn chút nào".'
    },
    {
      id: 't7_v4',
      number: 4,
      section: 'vocab',
      question: '______ is meat from a calf.',
      vietnameseTranslation: 'Thịt bê là thịt lấy từ con bê non.',
      options: [
        { key: 'A', text: 'Veal', vietnameseSub: 'Thịt bê (thịt của bò con - đúng)' },
        { key: 'B', text: 'Beef', vietnameseSub: 'Thịt bò (bò trưởng thành)' },
        { key: 'C', text: 'Bacon', vietnameseSub: 'Thịt lợn muối xông khói' },
        { key: 'D', text: 'Tuna', vietnameseSub: 'Cá ngừ' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Veal. "Calf" là con bê (bò con), và thịt của con bê trong tiếng Anh gọi là "veal".'
    },
    {
      id: 't7_v5',
      number: 5,
      section: 'vocab',
      question: 'I\'ve bought ______ new shirt that is on sale.',
      vietnameseTranslation: 'Tôi vừa mua một chiếc áo sơ mi mới đang được giảm giá.',
      options: [
        { key: 'A', text: 'a', vietnameseSub: 'một (mạo từ trước danh từ đếm được số ít - đúng)' },
        { key: 'B', text: 'a lot of', vietnameseSub: 'nhiều' },
        { key: 'C', text: 'some', vietnameseSub: 'một vài' },
        { key: 'D', text: 'any', vietnameseSub: 'bất kỳ' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. a. "new shirt" là cụm danh từ đếm được ở dạng số ít, bắt đầu bằng phụ âm /n/ nên đi với mạo từ "a": "a new shirt".'
    },
    {
      id: 't7_v6',
      number: 6,
      section: 'vocab',
      question: 'Could you buy me some ______ of milk?',
      vietnameseTranslation: 'Bạn có thể mua giúp tôi vài hộp sữa giấy được không?',
      options: [
        { key: 'A', text: 'cans', vietnameseSub: 'những cái lon' },
        { key: 'B', text: 'jars', vietnameseSub: 'những cái lọ thủy tinh' },
        { key: 'C', text: 'cartons', vietnameseSub: 'những hộp giấy (cartons of milk - đúng)' },
        { key: 'D', text: 'bars', vietnameseSub: 'những thanh thỏi' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. cartons. Sữa tươi dạng lỏng đóng hộp giấy tiệt trùng được đong đếm bằng đơn vị "carton": "cartons of milk".'
    },
    {
      id: 't7_v7',
      number: 7,
      section: 'vocab',
      question: 'There are ______ geese in the garden.',
      vietnameseTranslation: 'Có một vài con ngỗng ở trong khu vườn.',
      options: [
        { key: 'A', text: 'a', vietnameseSub: 'một (đi với danh từ số ít)' },
        { key: 'B', text: 'some', vietnameseSub: 'một vài (đi với danh từ số nhiều câu khẳng định - đúng)' },
        { key: 'C', text: 'much', vietnameseSub: 'nhiều (chỉ đi với không đếm được)' },
        { key: 'D', text: 'any', vietnameseSub: 'bất kỳ (câu phủ định/nghi vấn)' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. some. "geese" là dạng số nhiều bất quy tắc của "goose" (những con ngỗng). Trong câu khẳng định ta dùng "some".'
    },
    {
      id: 't7_v8',
      number: 8,
      section: 'vocab',
      question: 'Have you got ______ orange juice?',
      vietnameseTranslation: 'Bạn có nước cam ép không?',
      options: [
        { key: 'A', text: 'many', vietnameseSub: 'nhiều (chỉ đi với đếm được)' },
        { key: 'B', text: 'a lot of', vietnameseSub: 'rất nhiều' },
        { key: 'C', text: 'some', vietnameseSub: 'một ít (dùng trong lời mời)' },
        { key: 'D', text: 'any', vietnameseSub: 'chút nào (câu hỏi thông thường - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. any. Đây là câu hỏi nghi vấn thông thường về sự tồn tại của danh từ không đếm được ("orange juice"), quy tắc chuẩn ta dùng "any".'
    },
    {
      id: 't7_v9',
      number: 9,
      section: 'vocab',
      question: 'There isn\'t ______ butter in my sandwich.',
      vietnameseTranslation: 'Không có chút bơ nào trong chiếc bánh mì kẹp của tôi cả.',
      options: [
        { key: 'A', text: 'a', vietnameseSub: 'một' },
        { key: 'B', text: 'some', vietnameseSub: 'một ít' },
        { key: 'C', text: 'a lot of', vietnameseSub: 'nhiều' },
        { key: 'D', text: 'any', vietnameseSub: 'chút nào (câu phủ định với danh từ không đếm được - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. any. Trong câu phủ định ("isn\'t") đi với danh từ không đếm được "butter", ta dùng đại từ lượng từ "any".'
    },
    {
      id: 't7_v10',
      number: 10,
      section: 'vocab',
      question: '______ is a mixture of raw vegetables.',
      vietnameseTranslation: 'Món salad xà lách là hỗn hợp gồm các loại rau củ sống trộn với nhau.',
      options: [
        { key: 'A', text: 'Curry', vietnameseSub: 'Món cà ri' },
        { key: 'B', text: 'Salad', vietnameseSub: 'Món salad rau trộn sống (đúng)' },
        { key: 'C', text: 'Soup', vietnameseSub: 'Món súp/canh' },
        { key: 'D', text: 'Pasta', vietnameseSub: 'Mì Ý' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Salad. Định nghĩa của món "Salad": món ăn kết hợp các loại rau củ sống ("raw vegetables") cắt nhỏ và trộn cùng nước sốt.'
    }
  ],

  readingSignQuestions: [
    {
      id: 't7_s1',
      number: 11,
      section: 'signs',
      signText: 'Sam, dinner\'s in the oven. Please put the leftovers in the fridge and your dirty dishes in the dishwasher.\\nLove.',
      vietnameseSignTranslation: 'Sam à, bữa tối ở trong lò nướng nhé. Làm ơn hãy cất thức ăn thừa vào tủ lạnh và cho bát đĩa bẩn của con vào máy rửa bát.\\nYêu con.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'Sam should heat up her food before she eats it.', vietnameseSub: 'Sam nên hâm nóng đồ ăn trước khi ăn.' },
        { key: 'B', text: 'Sam should clean up after she\'s eaten.', vietnameseSub: 'Sam nên dọn dẹp sạch sẽ sau khi ăn xong (cất đồ thừa, bỏ bát vào máy rửa - đúng).' },
        { key: 'C', text: 'Sam should take the food out of the fridge and eat it.', vietnameseSub: 'Sam nên lấy thức ăn từ tủ lạnh ra ăn.' },
        { key: 'D', text: 'Sam should take the food out of the oven and put it in the fridge.', vietnameseSub: 'Sam nên lấy đồ ăn trong lò bỏ ngay vào tủ lạnh.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Sam should clean up after she\'s eaten. Lời nhắn dặn Sam ăn xong thì cất thức ăn thừa vào tủ lạnh và xếp bát bẩn vào máy rửa bát, tức là phải dọn dẹp sau bữa ăn (clean up after eating).'
    },
    {
      id: 't7_s2',
      number: 12,
      section: 'signs',
      signText: 'Jeff,\\nI have to work till 9p.m. today. Could you get dinner ready? It\'s in the fridge and just needs warming up.\\nJane',
      vietnameseSignTranslation: 'Jeff,\\nHôm nay em phải làm việc đến 9 giờ tối. Anh có thể chuẩn bị bữa tối được không? Thức ăn ở trong tủ lạnh rồi, chỉ cần hâm nóng lại thôi.\\nJane',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'Jane needs to think about food for dinner.', vietnameseSub: 'Jane cần nghĩ món ăn cho bữa tối.' },
        { key: 'B', text: 'Jeff will buy something for dinner.', vietnameseSub: 'Jeff sẽ đi mua thứ gì đó cho bữa tối.' },
        { key: 'C', text: 'Jeff needs to prepare dinner.', vietnameseSub: 'Jeff cần chuẩn bị bữa tối (hâm nóng thức ăn có sẵn - đúng).' },
        { key: 'D', text: 'Jane needs to cook food when she finishes work.', vietnameseSub: 'Jane cần nấu ăn khi tan làm.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Jeff needs to prepare dinner. Jane nhờ: "Could you get dinner ready? It\'s in the fridge and just needs warming up" (nhờ Jeff chuẩn bị hâm nóng bữa tối).'
    },
    {
      id: 't7_s3',
      number: 13,
      section: 'signs',
      signText: 'Dave, there\'s no milk left. I\'ll get some on my way home. Buy some eggs and tell Mary to make herself a salad.\\nBetty',
      vietnameseSignTranslation: 'Dave, hết sữa rồi. Em sẽ mua một ít trên đường về nhà. Anh hãy mua trứng và bảo Mary tự làm salad nhé.\\nBetty',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'Dave will go to buy some milk.', vietnameseSub: 'Dave sẽ đi mua sữa.' },
        { key: 'B', text: 'There\'s some milk in the fridge.', vietnameseSub: 'Có sữa trong tủ lạnh.' },
        { key: 'C', text: 'Betty will buy some eggs for Mary.', vietnameseSub: 'Betty sẽ mua trứng cho Mary.' },
        { key: 'D', text: 'Mary knows how to make a salad.', vietnameseSub: 'Mary biết cách tự làm món salad (đúng).' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Mary knows how to make a salad. Betty dặn: "tell Mary to make herself a salad" (bảo Mary tự làm món salad mà ăn), điều này hàm ý Mary biết cách làm salad.'
    },
    {
      id: 't7_s4',
      number: 14,
      section: 'signs',
      signText: 'Special offer for two days only!\\nFood items at very, very low prices!',
      vietnameseSignTranslation: 'Ưu đãi đặc biệt chỉ trong 2 ngày!\\nCác mặt hàng thực phẩm ở mức giá cực kỳ, cực kỳ rẻ!',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'All food items are half price.', vietnameseSub: 'Tất cả thực phẩm đều giảm nửa giá.' },
        { key: 'B', text: 'The supermarket doesn\'t offer low price every day.', vietnameseSub: 'Siêu thị không giảm giá rẻ mỗi ngày.' },
        { key: 'C', text: 'Kitchen items are very cheap.', vietnameseSub: 'Đồ dùng nhà bếp rất rẻ.' },
        { key: 'D', text: 'Food will be sold in two days only.', vietnameseSub: 'Chương trình ưu đãi thực phẩm chỉ diễn ra trong 2 ngày (đúng theo đề thi).' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Food will be sold in two days only. Biển ghi rõ: "Special offer for two days only! Food items at very, very low prices!" (khuyến mãi thực phẩm giá rẻ chỉ trong 2 ngày).'
    },
    {
      id: 't7_s5',
      number: 15,
      section: 'signs',
      signText: 'Dear customers,\\nBecause of building work, the supermarket will be closed until further notice.\\nSorry for the inconvenience!',
      vietnameseSignTranslation: 'Kính gửi quý khách hàng,\\nVì lý do thi công sửa chữa, siêu thị sẽ tạm đóng cửa cho đến khi có thông báo mới.\\nRất xin lỗi vì sự bất tiện này!',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'The supermarket will be opened next week.', vietnameseSub: 'Siêu thị sẽ mở cửa vào tuần tới.' },
        { key: 'B', text: 'Customers can go to the supermarket as usual.', vietnameseSub: 'Khách hàng có thể đến siêu thị như bình thường.' },
        { key: 'C', text: 'The supermarket will not be opened again.', vietnameseSub: 'Siêu thị sẽ không bao giờ mở lại.' },
        { key: 'D', text: 'Customers don\'t know when the supermarket will be opened again.', vietnameseSub: 'Khách hàng không biết khi nào siêu thị sẽ mở cửa trở lại (đúng).' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Customers don\'t know when the supermarket will be opened again. Cụm từ "until further notice" có nghĩa là cho đến khi có thông báo mới, tức là chưa xác định được thời gian cụ thể khi nào sẽ mở lại.'
    }
  ],

  readingPassageBTitle: 'THE CITY OF NEWCASTLE UPON TYNE',
  readingPassageBTag: 'Passage B: Reading Comprehension',
  readingTonyPassage: `I was born in Newcastle, a city in the North East of England. Newcastle is on the bank of the River Tyne. It is quite big, with a population of about 2000,000 people. There is a cathedral and a university. There are five bridges over the River Tyne, which link Newcastle to the next town, Gateshead, where there is one of the biggest shopping centers in the world. A few years ago, the main industries were shipbuilding and coalmining, but now the chemical and soap industries are important. I moved to London ten years ago but I often return to Newcastle. I miss the people, who are very friendly, and I miss the beautiful countryside near the city, where there are so many hills and streams.`,

  readingTonyTranslation: `Tôi sinh ra ở Newcastle, một thành phố nằm ở phía Đông Bắc nước Anh. Newcastle nằm bên bờ sông Tyne. Thành phố này khá lớn, với dân số khoảng 2.000.000 người. Ở đây có một nhà thờ lớn và một trường đại học. Có năm cây cầu bắc qua sông Tyne, nối liền Newcastle với thị trấn kế bên là Gateshead, nơi có một trong những trung tâm mua sắm lớn nhất thế giới. Vài năm trước, các ngành công nghiệp chính là đóng tàu và khai thác than đá, nhưng hiện nay các ngành công nghiệp hóa chất và xà phòng mới đóng vai trò quan trọng. Tôi đã chuyển đến London mười năm trước nhưng tôi thường xuyên trở về Newcastle. Tôi nhớ người dân nơi đây rất đỗi thân thiện, và tôi nhớ vùng nông thôn tươi đẹp gần thành phố với biết bao ngọn đồi và dòng suối.`,

  readingTonyQuestions: [
    {
      id: 't7_r1',
      number: 16,
      section: 'tony',
      question: 'Newcastle is ______.',
      vietnameseTranslation: 'Newcastle là ______.',
      options: [
        { key: 'A', text: 'a city in the North of England', vietnameseSub: 'một thành phố ở miền Bắc nước Anh' },
        { key: 'B', text: 'a city near the North East of England', vietnameseSub: 'thành phố gần phía Đông Bắc' },
        { key: 'C', text: 'a city in the North East of England', vietnameseSub: 'một thành phố ở vùng Đông Bắc nước Anh (đúng)' },
        { key: 'D', text: 'a small town in England', vietnameseSub: 'một thị trấn nhỏ ở Anh' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. a city in the North East of England. Câu mở đầu khẳng định: "I was born in Newcastle, a city in the North East of England."'
    },
    {
      id: 't7_r2',
      number: 17,
      section: 'tony',
      question: 'The population of Newcastle is ______.',
      vietnameseTranslation: 'Dân số của Newcastle là ______.',
      options: [
        { key: 'A', text: '200,000 people', vietnameseSub: '200.000 người' },
        { key: 'B', text: 'about 2000,000 people', vietnameseSub: 'khoảng 2.000.000 người (khớp câu chữ bài đọc - đúng)' },
        { key: 'C', text: 'much less than 200,000 people', vietnameseSub: 'ít hơn nhiều 200.000 người' },
        { key: 'D', text: 'much more than 200,00 people', vietnameseSub: 'nhiều hơn' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. about 2000,000 people. Đoạn văn nêu: "...with a population of about 2000,000 people."'
    },
    {
      id: 't7_r3',
      number: 18,
      section: 'tony',
      question: 'Gateshead has one of ______.',
      vietnameseTranslation: 'Gateshead có một trong ______.',
      options: [
        { key: 'A', text: 'the biggest shopping centers', vietnameseSub: 'những trung tâm mua sắm lớn nhất (đúng)' },
        { key: 'B', text: 'the most beautiful country sides', vietnameseSub: 'những miền quê đẹp nhất' },
        { key: 'C', text: 'the largest rivers', vietnameseSub: 'những dòng sông lớn nhất' },
        { key: 'D', text: 'the most important shipbuilding industries', vietnameseSub: 'ngành đóng tàu quan trọng nhất' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. the biggest shopping centers. Bài đọc viết: "...Gateshead, where there is one of the biggest shopping centers in the world."'
    },
    {
      id: 't7_r4',
      number: 19,
      section: 'tony',
      question: 'According to the passage, the writer ______.',
      vietnameseTranslation: 'Theo đoạn văn, tác giả ______.',
      options: [
        { key: 'A', text: 'doesn\'t live in Newcastle any more', vietnameseSub: 'không còn sống ở Newcastle nữa (đã chuyển lên London - đúng)' },
        { key: 'B', text: 'has come back to live in Newcastle', vietnameseSub: 'đã trở lại sống ở Newcastle' },
        { key: 'C', text: 'is still living in Newcastle', vietnameseSub: 'vẫn đang sống ở Newcastle' },
        { key: 'D', text: 'has never returned to Newcastle', vietnameseSub: 'chưa từng quay lại Newcastle' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. doesn\'t live in Newcastle any more. Tác giả nói: "I moved to London ten years ago but I often return to Newcastle" (đã dọn đến London sống 10 năm trước).'
    },
    {
      id: 't7_r5',
      number: 20,
      section: 'tony',
      question: 'Which of the following is not true about Newcastle?',
      vietnameseTranslation: 'Điều nào sau đây là KHÔNG đúng về Newcastle?',
      options: [
        { key: 'A', text: 'It is next to Gateshead', vietnameseSub: 'Nó nằm cạnh Gateshead (đúng trong bài)' },
        { key: 'B', text: 'Its main industry now is shipbuilding', vietnameseSub: 'Ngành công nghiệp chính hiện nay là đóng tàu (sai - đúng theo yêu cầu câu hỏi)' },
        { key: 'C', text: 'It has a cathedral and a university', vietnameseSub: 'Có một nhà thờ lớn và trường đại học (đúng trong bài)' },
        { key: 'D', text: 'It has a lot of people', vietnameseSub: 'Nó có nhiều người (đúng trong bài)' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Its main industry now is shipbuilding. Bài đọc nêu ngành đóng tàu (shipbuilding) là ngành công nghiệp trước đây ("A few years ago, the main industries were shipbuilding... but now chemical and soap industries are important"). Do đó khẳng định B là không đúng sự thật hiện tại.'
    }
  ],

  readingPassageCTitle: 'FRESH BOUQUETS: A BRITISH SUCCESS STORY',
  readingPassageCTag: 'Passage C: Cloze Test (Điền từ vào chỗ trống)',
  readingAnnaPassage: `Fresh Bouquets is a small company, but in the last few years it has become a big (1) _______ story. Entrepreneurs Graham Hodson and Shaun Caulfield (2) _______ the company in 1991. Since then, they have developed a very good (3) _______ for last-minute gifts of flowers. In the last four years, they have increased (4) _______ by over 100% per year, from $40,000 to $6.4 million. At first, Fresh Bouquets grew its own supplies of flowers at its base in south-east England. Soon, the company needed to import (5) _______ from other countries, such as Turkey and Kenya. Their first big (6) _______ was the short life of cut flowers, and this remained the biggest challenge up to the present time. Every day, flowers travel perhaps (7) _______ of kilometers and have to reach the company's 4,500 customers – mainly petrol stations and supermarkets – in top condition. (8) _______, several years ago, the company decided to spend $500,000 a year on information technology for its (9) _______ system. It has continued to invest this amount each year since then. However, all the hard work and investment have produced great results. At the beginning of this year, Fresh Bouquets appeared at number 27 (10) _______ the list of Britain's 100 fastest-growing companies.`,

  readingAnnaTranslation: `Fresh Bouquets là một công ty nhỏ, nhưng trong vài năm qua nó đã trở thành một câu chuyện thành công (1) lớn. Hai doanh nhân Graham Hodson và Shaun Caulfield đã thành lập (2) công ty vào năm 1991. Kể từ đó, họ đã phát triển một thị trường (3) rất tốt cho các món quà tặng hoa tươi vào phút chót. Trong bốn năm qua, họ đã tăng doanh số bán hàng (4) hơn 100% mỗi năm, từ 40.000 đô la lên 6,4 triệu đô la. Ban đầu, Fresh Bouquets tự trồng nguồn cung cấp hoa tại cơ sở của mình ở vùng Đông Nam nước Anh. Chẳng bao lâu sau, công ty cần nhập khẩu hoa tươi (5) từ các quốc gia khác như Thổ Nhĩ Kỳ và Kenya. Vấn đề (6) lớn đầu tiên của họ là vòng đời ngắn ngủi của hoa cắt cành, và đây vẫn là thách thức lớn nhất cho đến tận bây giờ. Hằng ngày, hoa phải vận chuyển có lẽ hàng ngàn (7) cây số và phải đến tay 4.500 khách hàng của công ty – chủ yếu là các trạm xăng và siêu thị – trong điều kiện tươi đẹp nhất. Vì vậy (8), vài năm trước, công ty đã quyết định đầu tư 500.000 đô la mỗi năm cho công nghệ thông tin phục vụ hệ thống phân phối (9) của mình. Công ty vẫn tiếp tục đầu tư số tiền này mỗi năm kể từ đó. Dẫu vậy, mọi sự nỗ lực làm việc và đầu tư đã mang lại những kết quả tuyệt vời. Vào đầu năm nay, Fresh Bouquets đã xuất hiện ở vị trí thứ 27 trên (10) bảng danh sách 100 công ty tăng trưởng nhanh nhất nước Anh.`,

  readingAnnaQuestions: [
    {
      id: 't7_c1',
      number: 21,
      section: 'anna',
      question: 'Choose the best word for blank (1): "...become a big (1) _______ story."',
      options: [
        { key: 'A', text: 'successful', vietnameseSub: 'thành công (tính từ)' },
        { key: 'B', text: 'succeed', vietnameseSub: 'thành công (động từ)' },
        { key: 'C', text: 'success', vietnameseSub: 'sự thành công (cụm success story - đúng)' },
        { key: 'D', text: 'successfully', vietnameseSub: 'một cách thành công (trạng từ)' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. success. Cụm danh từ cố định "a success story" có nghĩa là một câu chuyện thành công, tấm gương thành công vang dội.'
    },
    {
      id: 't7_c2',
      number: 22,
      section: 'anna',
      question: 'Choose the best word for blank (2): "Entrepreneurs Graham and Shaun (2) _______ the company in 1991."',
      options: [
        { key: 'A', text: 'founded', vietnameseSub: 'đã sáng lập, thành lập (quá khứ của found - đúng)' },
        { key: 'B', text: 'found', vietnameseSub: 'tìm thấy' },
        { key: 'C', text: 'founder', vietnameseSub: 'người sáng lập (danh từ)' },
        { key: 'D', text: 'find', vietnameseSub: 'tìm' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. founded. Động từ "found" (sáng lập, thành lập công ty) chia quá khứ đơn có năm "in 1991" là "founded".'
    },
    {
      id: 't7_c3',
      number: 23,
      section: 'anna',
      question: 'Choose the best word for blank (3): "...developed a very good (3) _______ for last-minute gifts of flowers."',
      options: [
        { key: 'A', text: 'shop', vietnameseSub: 'cửa hàng' },
        { key: 'B', text: 'market', vietnameseSub: 'thị trường khách hàng (đúng)' },
        { key: 'C', text: 'supermarket', vietnameseSub: 'siêu thị' },
        { key: 'D', text: 'store', vietnameseSub: 'kho chứa' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. market. Cụm từ "develop a market for sth" có nghĩa là phát triển một phân khúc thị trường khách hàng cho sản phẩm.'
    },
    {
      id: 't7_c4',
      number: 24,
      section: 'anna',
      question: 'Choose the best word for blank (4): "...increased (4) _______ by over 100% per year..."',
      options: [
        { key: 'A', text: 'selling', vietnameseSub: 'việc bán' },
        { key: 'B', text: 'seller', vietnameseSub: 'người bán' },
        { key: 'C', text: 'sales', vietnameseSub: 'doanh số bán hàng (increase sales - đúng)' },
        { key: 'D', text: 'sell', vietnameseSub: 'bán (động từ)' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. sales. "Increase sales" là cụm từ thương mại chỉ việc gia tăng doanh thu / doanh số bán hàng.'
    },
    {
      id: 't7_c5',
      number: 25,
      section: 'anna',
      question: 'Choose the best word for blank (5): "...needed to import (5) _______ from other countries..."',
      options: [
        { key: 'A', text: 'vegetables', vietnameseSub: 'rau củ' },
        { key: 'B', text: 'foods', vietnameseSub: 'thực phẩm' },
        { key: 'C', text: 'fruits', vietnameseSub: 'trái cây' },
        { key: 'D', text: 'flowers', vietnameseSub: 'hoa tươi (công ty kinh doanh hoa - đúng)' },
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. flowers. Fresh Bouquets là công ty kinh doanh hoa tươi ("cut flowers") nên việc họ nhập khẩu hoa từ Thổ Nhĩ Kỳ và Kenya là logic.'
    },
    {
      id: 't7_c6',
      number: 26,
      section: 'anna',
      question: 'Choose the best word for blank (6): "Their first big (6) _______ was the short life of cut flowers..."',
      options: [
        { key: 'A', text: 'work', vietnameseSub: 'công việc' },
        { key: 'B', text: 'problem', vietnameseSub: 'vấn đề, khó khăn (đồng nghĩa với challenge - đúng)' },
        { key: 'C', text: 'change', vietnameseSub: 'sự thay đổi' },
        { key: 'D', text: 'job', vietnameseSub: 'việc làm' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. problem. Vế sau giải thích "this remained the biggest challenge", cho thấy danh từ cần điền ở đây là "problem" (vấn đề khó khăn lớn đầu tiên).'
    },
    {
      id: 't7_c7',
      number: 27,
      section: 'anna',
      question: 'Choose the best word for blank (7): "Every day, flowers travel perhaps (7) _______ of kilometers..."',
      options: [
        { key: 'A', text: 'thousands', vietnameseSub: 'hàng ngàn (cụm thousands of - đúng)' },
        { key: 'B', text: 'one thousand', vietnameseSub: 'một ngàn' },
        { key: 'C', text: 'a thousand', vietnameseSub: 'một ngàn' },
        { key: 'D', text: 'thousand', vietnameseSub: 'ngàn (không đi với of khi có số)' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. thousands. Đi với giới từ "of" chỉ số lượng ước chừng không đếm chính xác: "thousands of kilometers" (hàng ngàn cây số).'
    },
    {
      id: 't7_c8',
      number: 28,
      section: 'anna',
      question: 'Choose the best word for blank (8): "(8) _______, several years ago, the company decided to spend $500,000..."',
      options: [
        { key: 'A', text: 'But', vietnameseSub: 'Nhưng' },
        { key: 'B', text: 'However', vietnameseSub: 'Tuy nhiên' },
        { key: 'C', text: 'So', vietnameseSub: 'Vì vậy, do đó (chỉ mối quan hệ hệ quả - đúng)' },
        { key: 'D', text: 'Or else', vietnameseSub: 'Nếu không thì' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. So. Vì vận chuyển hoa tươi đi xa rất dễ hỏng nên ("So") công ty đã quyết định đầu tư nửa triệu đô vào hệ thống phân phối quản lý.'
    },
    {
      id: 't7_c9',
      number: 29,
      section: 'anna',
      question: 'Choose the best word for blank (9): "...information technology for its (9) _______ system."',
      options: [
        { key: 'A', text: 'distribute', vietnameseSub: 'phân phối (động từ)' },
        { key: 'B', text: 'distribution', vietnameseSub: 'sự phân phối (cụm danh từ distribution system - đúng)' },
        { key: 'C', text: 'distributed', vietnameseSub: 'đã phân phối' },
        { key: 'D', text: 'distributing', vietnameseSub: 'đang phân phối' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. distribution. Cụm danh từ ghép chỉ hệ thống chuỗi cung ứng logistics: "distribution system" (hệ thống phân phối hàng hóa).'
    },
    {
      id: 't7_c10',
      number: 30,
      section: 'anna',
      question: 'Choose the best word for blank (10): "...number 27 (10) _______ the list of Britain\'s 100 fastest-growing companies."',
      options: [
        { key: 'A', text: 'on', vietnameseSub: 'trên (cụm on the list - đúng)' },
        { key: 'B', text: 'at', vietnameseSub: 'tại' },
        { key: 'C', text: 'in', vietnameseSub: 'trong' },
        { key: 'D', text: 'off', vietnameseSub: 'rời khỏi' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. on. Giới từ chuẩn đi với danh sách "the list" là "on the list" (trên danh sách xếp hạng).'
    }
  ],

  sentenceTransformations: [
    {
      id: 't7_w1',
      number: 31,
      originalSentence: 'He can speak English fluently.',
      vietnameseTranslation: 'Anh ấy có thể nói tiếng Anh một cách lưu loát.',
      prefix: 'How',
      modelAnswer: 'How fluently he can speak English!',
      vietnameseModelTranslation: 'Anh ấy nói tiếng Anh mới lưu loát làm sao!',
      acceptedAnswers: [
        'fluently he can speak English!',
        'fluently he can speak English',
        'fluently he speaks English!',
        'fluently he speaks English'
      ],
      grammarPoint: 'Cấu trúc câu cảm thán với How: How + adv + S + V! (How fluently he can speak English!).'
    },
    {
      id: 't7_w2',
      number: 32,
      originalSentence: 'That was an interesting film.',
      vietnameseTranslation: 'Đó là một bộ phim rất thú vị.',
      prefix: 'What',
      modelAnswer: 'What an interesting film (that was)!',
      vietnameseModelTranslation: 'Thật là một bộ phim thú vị!',
      acceptedAnswers: [
        'an interesting film that was!',
        'an interesting film that was',
        'an interesting film!',
        'an interesting film'
      ],
      grammarPoint: 'Cấu trúc câu cảm thán với What: What + a/an + adj + N (count singular) + (S + V)!'
    },
    {
      id: 't7_w3',
      number: 33,
      originalSentence: 'Despite the terrible noise, I kept on studying.',
      vietnameseTranslation: 'Mặc dù có tiếng ồn khủng khiếp, tôi vẫn tiếp tục học bài.',
      prefix: 'Although',
      modelAnswer: 'Although the noise was terrible, I kept on studying.',
      vietnameseModelTranslation: 'Mặc dù tiếng ồn rất kinh khủng, tôi vẫn tiếp tục học.',
      acceptedAnswers: [
        'the noise was terrible, I kept on studying',
        'the noise was terrible, I kept on studying.',
        'it was terribly noisy, I kept on studying',
        'it was terribly noisy, I kept on studying.'
      ],
      grammarPoint: 'Chuyển đổi từ cụm từ nhượng bộ sang mệnh đề nhượng bộ: Despite + the terrible noise (cụm danh từ) = Although + the noise was terrible (mệnh đề S + V).'
    },
    {
      id: 't7_w4',
      number: 34,
      originalSentence: 'The flight was not delayed though it was foggy.',
      vietnameseTranslation: 'Chuyến bay đã không bị hoãn mặc dù trời nhiều sương mù.',
      prefix: 'The flight was not delayed',
      modelAnswer: 'The flight was not delayed in spite of the fog.',
      vietnameseModelTranslation: 'Chuyến bay không bị hoãn bất chấp sương mù.',
      acceptedAnswers: [
        'in spite of the fog',
        'in spite of the fog.',
        'despite the fog',
        'despite the fog.',
        'in spite of the foggy weather',
        'in spite of the foggy weather.'
      ],
      grammarPoint: 'Chuyển đổi từ mệnh đề sang cụm từ nhượng bộ: though it was foggy = in spite of / despite the fog.'
    },
    {
      id: 't7_w5',
      number: 35,
      originalSentence: 'Last Thursday we pointed a new marketing manager.',
      vietnameseTranslation: 'Thứ Năm tuần trước chúng tôi đã bổ nhiệm một giám đốc tiếp thị mới.',
      prefix: 'A new marketing manager',
      modelAnswer: 'A new marketing manager was appointed last Thursday.',
      vietnameseModelTranslation: 'Một giám đốc tiếp thị mới đã được bổ nhiệm vào thứ Năm tuần trước.',
      acceptedAnswers: [
        'was appointed last Thursday',
        'was appointed last Thursday.',
        'was pointed last Thursday',
        'was pointed last Thursday.'
      ],
      grammarPoint: 'Chuyển đổi câu chủ động sang bị động ở thì Quá khứ đơn: S + V2/ed + O -> O + was/were + V3/ed (appointed).'
    }
  ],

  letterWriting: {
    prompt: 'Write a letter (about 120 words) to your friend/colleague/parents/relatives about your favourite food.\\nYour letter should include:\\n- What\'s your favourite food?\\n- Why do you like it?\\n- How is it made?',
    vietnamesePrompt: 'Viết một lá thư (khoảng 120 từ) gửi cho bạn bè/đồng nghiệp/người thân kể về món ăn yêu thích của bạn.\\nLá thư nên bao gồm:\\n- Món ăn yêu thích của bạn là gì?\\n- Tại sao bạn lại thích món ăn đó?\\n- Món ăn đó được chế biến như thế nào?',
    requiredWordCount: '100 - 140 words',
    sample1: {
      title: 'Bài mẫu 1: Món Phở truyền thống (Giáo trình)',
      content: `Hi Alan,

Thanks for your letter. It was great to hear from you. You asked about my favourite food, so here is my answer: it is pho!

I love it because of its rich flavour. The hot broth, soft noodles and tender beef taste wonderful together. Moreover, it is very popular in Vietnam, so I can find it almost everywhere.

It is not difficult to make, but it takes time. First, you boil beef bones for many hours with onions, ginger and spices. Next, you cook the rice noodles and slice the beef. Then you put everything in a bowl and pour the hot broth over it. Finally, add herbs, lime and chilli.

So that is my favourite food. How about you? Write soon and let me know.

All the best,
Lan`
    },
    sample2: {
      title: 'Bài mẫu 2: Ẩm thực quê hương (Phan Tấn Kiệt)',
      content: `Dear Tom,

How are you? You asked me about my favourite food, so I am excited to tell you about it: Vietnamese beef pho!

I love pho because of its unique and delicious flavour. The aromatic hot broth, soft rice noodles and fresh tender beef make every meal satisfying. In addition, it is healthy and gives me energy for a long day of studying programming at university.

Making good pho requires patience. First, beef bones are simmered gently with charred ginger, onions and aromatic spices like star anise and cinnamon for over six hours to create a sweet, clear broth. Then, the fresh noodles and sliced beef are placed in a bowl, and the boiling broth is poured over them. We always serve it with fresh basil, cilantro, lime and hot chilli.

Hope you can try it with me one day!

Best wishes,
Phan Tan Kiet`
    }
  },

  speakingCard: {
    cardTitle: 'SPEAKING CARD No.7: Talk about your favourite traditional food',
    cardSubtitle: 'Nói về món ăn truyền thống yêu thích của bạn',
    questions: [
      { q: 'What is your favourite traditional food?', vi: 'Món ăn truyền thống yêu thích của bạn là gì?' },
      { q: 'How to make it?', vi: 'Món ăn đó được chế biến như thế nào?' },
      { q: 'Can you cook it well?', vi: 'Bạn có biết nấu món đó ngon không?' },
      { q: 'How is it best served?', vi: 'Món ăn đó được phục vụ / thưởng thức ngon nhất như thế nào?' }
    ],
    sampleAnswers: [
      {
        speaker: 'Bài mẫu 1 (Theo tài liệu giáo trình - Món Phở bò)',
        textEn: `My favourite traditional food is pho, a famous noodle soup from Vietnam. I have loved it since I was a child. To make it, you need beef bones, rice noodles, onions, ginger and some spices. First, you simmer the bones for several hours to get a clear and sweet broth. Then you cook the noodles, slice the beef thinly and put them in a bowl. Finally, you pour the hot broth over them and add green onions. I can cook it quite well, although my grandmother's pho is still the best. It is best served hot with fresh herbs, lime and chilli. I often have it for breakfast, and it always makes my day better.`,
        textVi: `Món ăn truyền thống yêu thích của tôi là phở, một món súp mì nổi tiếng của Việt Nam. Tôi đã mê món này từ khi còn là một đứa trẻ. Để làm món này, bạn cần xương bò, bánh phở, hành tây, gừng và một số loại gia vị. Đầu tiên, bạn ninh xương trong vài giờ để có được nước dùng trong và ngọt thanh. Sau đó, bạn chần bánh phở, thái thịt bò thật mỏng và cho vào tô. Cuối cùng, bạn chan nước dùng nóng hổi lên trên và rắc thêm hành lá. Tôi có thể nấu món này khá ngon, mặc dù phở bà nấu vẫn là ngon nhất. Món phở ngon nhất khi được ăn nóng cùng các loại rau thơm tươi, chanh và ớt. Tôi thường ăn phở vào bữa sáng, và nó luôn giúp một ngày mới của tôi trở nên tuyệt vời hơn.`
      },
      {
        speaker: 'Bài mẫu 2 (Phiên bản nói lưu loát của Phan Tấn Kiệt)',
        textEn: `My favourite traditional food is definitely Vietnamese pho. I have enjoyed eating it since I was a young boy in Phu Hoa. To prepare authentic pho, you need quality beef bones, rice noodles, fresh beef slices, onions, ginger and spices like cinnamon and star anise. The key is simmering the beef bones for hours to produce a rich and naturally sweet broth. I can cook simple pho at home, but my mother's homemade bowl is always the most delicious. Pho is best served steaming hot with fresh basil, bean sprouts, a squeeze of fresh lime and sliced chilli. It is not only nourishing but also represents the wonderful culinary culture of Vietnam.`,
        textVi: `Món ăn truyền thống yêu thích nhất của tôi chắc chắn là món phở Việt Nam. Tôi đã rất thích ăn món này từ khi còn là một cậu bé ở Phú Hòa. Để chuẩn bị món phở chuẩn vị, bạn cần xương bò chất lượng, bánh phở, thịt bò thái lát tươi ngon, hành tây, gừng cùng các loại thảo mộc như quế và hoa hồi. Điểm mấu chốt là ninh xương bò trong nhiều giờ để tạo ra nước dùng đậm đà và ngọt thanh tự nhiên. Tôi có thể tự nấu phở đơn giản ở nhà, nhưng tô phở mẹ nấu luôn là ngon nhất. Phở ngon nhất khi được ăn nóng hổi cùng húng quế tươi, giá đỗ, vắt thêm chút chanh và ớt tươi thái lát. Món ăn này không chỉ bổ dưỡng mà còn đại diện cho nét đẹp văn hóa ẩm thực tuyệt vời của Việt Nam.`
      }
    ]
  },

  listeningPartA: [
    { number: 1, question: 'Which T-shirt does the boy decide to buy?', options: ['A: Striped T-shirt', 'B: Plain T-shirt', 'C: Printed T-shirt'], answer: 'B', note: 'Dựa trên ngữ cảnh hội thoại chọn áo phông' },
    { number: 2, question: 'Who will be on the stage next?', options: ['A: A dancer', 'B: A guitarist', 'C: A singer'], answer: 'C', note: 'Phán đoán theo tình huống sân khấu' },
    { number: 3, question: 'What time will the pie be ready?', options: ['A: 4:15', 'B: 4:30', 'C: 4:45'], answer: 'B', note: 'Phán đoán mốc thời gian nướng bánh' },
    { number: 4, question: 'Which photo does the girl dislike?', options: ['A: Photo of the mountain', 'B: Photo of the river', 'C: Photo of the forest'], answer: 'A', note: 'Phán đoán bức ảnh cô gái không thích' },
    { number: 5, question: 'What should the students take on the school trip?', options: ['A: Camera', 'B: Umbrella', 'C: Notebook'], answer: 'B', note: 'Phán đoán đồ dùng mang theo' },
    { number: 6, question: 'Where do the boys decide to go?', options: ['A: Cinema', 'B: Park', 'C: Swimming pool'], answer: 'A', note: 'Phán đoán địa điểm đi chơi' },
    { number: 7, question: 'What has the girl lost?', options: ['A: Watch', 'B: Purse', 'C: Phone'], answer: 'B', note: 'Phán đoán vật dụng đánh mất' }
  ],

  listeningPartB: {
    title: 'CAMPING TRIP (Listen and fill in the missing information)',
    items: [
      { gap: 1, text: 'Coach leaves school at ______ on Monday morning.', answer: '8.30 (08:30)' },
      { gap: 2, text: 'Bring: one bag or case and a ______', answer: 'sleeping bag' },
      { gap: 3, text: 'Bring warm clothes and ______ things.', answer: 'swimming' },
      { gap: 4, text: 'Pocket money to spend on souvenirs and ______', answer: 'snacks' },
      { gap: 5, text: 'Catch a bus outside ______ to Southport.', answer: 'the station' }
    ],
    note: 'Lưu ý: Các đáp án phần nghe dựa trên tài liệu ôn tập chuẩn do không kèm file audio gốc.'
  }
};

// Ghi ra file data_topic7.js
const fileContent = `// TOPIC 7: FOOD AND DRINKS - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC7 = ${JSON.stringify(topic7Data, null, 2)};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC7 = EXAM_DATA_TOPIC7;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC7;
}
`;

fs.writeFileSync('data_topic7.js', fileContent, 'utf8');
console.log('✅ Created data_topic7.js successfully! Length:', fileContent.length);

