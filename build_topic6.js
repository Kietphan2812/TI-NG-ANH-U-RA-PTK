// Script tạo tự động dữ liệu Topic 6: SHOPPING
// Nguồn: Đề thi và tài liệu ôn tập chuẩn Tiếng Anh Đầu Ra
const fs = require('fs');

const topic6Data = {
  topicId: 'topic6',
  topicTitle: 'TOPIC 6: SHOPPING',
  topicSubtitle: 'Mua sắm & Tiêu dùng (Từ vựng 35 cửa hàng & dịch vụ, Danh động từ & Động từ nguyên mẫu, Đọc hiểu Brussels & Black Friday)',

  vocabulary: [
    { word: 'baker\'s', ipa: '/ˈbeɪkə(r)z/', pos: 'n.', meaning: 'cửa hàng bánh mì, tiệm bánh', example: 'I bought some fresh loaves of bread and croissants from the baker\'s.' },
    { word: 'butcher\'s', ipa: '/ˈbʊtʃə(r)z/', pos: 'n.', meaning: 'cửa hàng bán thịt', example: 'You can buy high-quality organic beef at the local butcher\'s.' },
    { word: 'chemist\'s', ipa: '/ˈkemɪsts/', pos: 'n.', meaning: 'hiệu thuốc, cửa hàng dược phẩm', example: 'She went to the chemist\'s to pick up her prescribed allergy medicine.' },
    { word: 'greengrocer\'s', ipa: '/ˈɡriːnɡrəʊsə(r)z/', pos: 'n.', meaning: 'cửa hàng rau củ quả tươi', example: 'We purchase fresh vegetables, apples and bananas at the greengrocer\'s.' },
    { word: 'newsagent\'s', ipa: '/ˈnjuːzeɪdʒənts/', pos: 'n.', meaning: 'quầy bán báo và tạp chí', example: 'My father buys his morning newspaper and lottery tickets at the newsagent\'s.' },
    { word: 'department store', ipa: '/dɪˈpɑːtmənt stɔː(r)/', pos: 'n.', meaning: 'cửa hàng bách hóa lớn', example: 'The multi-storey department store sells everything from clothing to home appliances.' },
    { word: 'boutique', ipa: '/buːˈtiːk/', pos: 'n.', meaning: 'cửa hàng thời trang, quà tặng nhỏ', example: 'She found an exquisite designer dress in a fashionable boutique.' },
    { word: 'advertise', ipa: '/ˈædvətaɪz/', pos: 'v.', meaning: 'quảng cáo sản phẩm', example: 'Companies spend millions to advertise their new smartphones on social media.' },
    { word: 'advertisement', ipa: '/ədˈvɜːtɪsmənt/', pos: 'n.', meaning: 'bài quảng cáo, mẩu tin quảng cáo', example: 'I saw an interesting job advertisement in the Sunday newspaper.' },
    { word: 'brand', ipa: '/brænd/', pos: 'n.', meaning: 'nhãn hàng, thương hiệu', example: 'Nike and Apple are among the most valuable global brands today.' },
    { word: 'label', ipa: '/ˈleɪbl/', pos: 'n.', meaning: 'nhãn mác, tem nhãn', example: 'Always check the care label on clothing before washing.' },
    { word: 'customer', ipa: '/ˈkʌstəmə(r)/', pos: 'n.', meaning: 'khách hàng', example: 'The friendly supermarket aims to provide excellent service to every customer.' },
    { word: 'shop assistant', ipa: '/ʃɒp əˈsɪstənt/', pos: 'n.', meaning: 'nhân viên bán hàng', example: 'The shop assistant politely helped me find the correct shoe size.' },
    { word: 'shoplifter', ipa: '/ˈʃɒplɪftə(r)/', pos: 'n.', meaning: 'kẻ ăn cắp vặt trong cửa hàng', example: 'Security guards detained a shoplifter trying to conceal expensive perfume.' },
    { word: 'escalator', ipa: '/ˈeskəleɪtə(r)/', pos: 'n.', meaning: 'thang cuốn', example: 'Take the moving escalator up to the third floor to visit the food court.' },
    { word: 'lift', ipa: '/lɪft/', pos: 'n.', meaning: 'thang máy', example: 'The lift is temporarily under repair, so please use the stairs.' },
    { word: 'checkout', ipa: '/ˈtʃekaʊt/', pos: 'n.', meaning: 'quầy thanh toán tiền', example: 'There was a long line of shoppers waiting patiently at the checkout.' },
    { word: 'cashier', ipa: '/kæˈʃɪə(r)/', pos: 'n.', meaning: 'nhân viên thu ngân', example: 'The cashier scanned each grocery item and handed me my receipt.' },
    { word: 'price', ipa: '/praɪs/', pos: 'n.', meaning: 'mức giá, giá cả', example: 'I bought this technical programming book at a very reasonable price.' },
    { word: 'bargain', ipa: '/ˈbɑːɡən/', pos: 'n./v.', meaning: 'món hời / mặc cả trả giá', example: 'Getting this laptop at half price was an absolute bargain!' },
    { word: 'receipt', ipa: '/rɪˈsiːt/', pos: 'n.', meaning: 'biên lai, hóa đơn mua hàng', example: 'Please keep your purchase receipt in case you wish to exchange the item.' },
    { word: 'deposit', ipa: '/dɪˈpɒzɪt/', pos: 'n./v.', meaning: 'tiền đặt cọc / đặt cọc', example: 'We paid a twenty percent deposit to reserve the conference room.' },
    { word: 'rent', ipa: '/rent/', pos: 'v.', meaning: 'thuê, cho thuê', example: 'He decided to rent an apartment near the university during the semester.' },
    { word: 'for sale', ipa: '/fə(r) seɪl/', pos: 'idiom', meaning: 'để bán, có sẵn để mua', example: 'There are many second-hand monitors and keyboards for sale here.' },
    { word: 'try on', ipa: '/traɪ ɒn/', pos: 'v. phr.', meaning: 'thử quần áo, giày dép', example: 'You should go to the fitting room and try on that jacket before purchasing.' },
    { word: 'reduce', ipa: '/rɪˈdjuːs/', pos: 'v.', meaning: 'giảm bớt, hạ giá', example: 'The store reduced the prices of winter coats by up to fifty percent.' },
    { word: 'save', ipa: '/seɪv/', pos: 'v.', meaning: 'tiết kiệm tiền', example: 'Buying groceries during discount promotions helps save a lot of money.' },
    { word: 'complain', ipa: '/kəmˈpleɪn/', pos: 'v.', meaning: 'phàn nàn, khiếu nại', example: 'The customer complained to the manager about the defective charger.' },
    { word: 'return', ipa: '/rɪˈtɜːn/', pos: 'v.', meaning: 'trả lại hàng hóa', example: 'You can return unworn clothes within thirty days for a full refund.' },
    { word: 'change', ipa: '/tʃeɪndʒ/', pos: 'n.', meaning: 'tiền thối, tiền thừa', example: 'The shop assistant called me back because I forgot to take my change.' },
    { word: 'cash', ipa: '/kæʃ/', pos: 'n.', meaning: 'tiền mặt', example: 'Will you be paying in cash or using a debit card today?' },
    { word: 'cheque', ipa: '/tʃek/', pos: 'n.', meaning: 'séc, ngân phiếu', example: 'He wrote a bank cheque to pay for the large shipment of office supplies.' },
    { word: 'credit card', ipa: '/ˈkredɪt kɑːd/', pos: 'n.', meaning: 'thẻ tín dụng', example: 'She tapped her contactless credit card on the payment machine.' },
    { word: 'second-hand', ipa: '/ˈsekənd hænd/', pos: 'adj.', meaning: 'đã qua sử dụng, đồ cũ', example: 'I bought a second-hand bicycle in excellent running condition.' },
    { word: 'reasonable', ipa: '/ˈriːznəbl/', pos: 'adj.', meaning: 'hợp lý, phải chăng', example: 'The restaurant offers delicious traditional meals at very reasonable prices.' }
  ],

  vocabularyQuestions: [
    {
      id: 't6_v1',
      number: 1,
      section: 'vocab',
      question: 'Mike agreed ______ that old car.',
      vietnameseTranslation: 'Mike đã đồng ý mua chiếc xe ô tô cũ đó.',
      options: [
        { key: 'A', text: 'buy', vietnameseSub: 'mua (nguyên mẫu không to)' },
        { key: 'B', text: 'buying', vietnameseSub: 'dạng V-ing' },
        { key: 'C', text: 'to buy', vietnameseSub: 'mua (to-V sau agree - đúng)' },
        { key: 'D', text: 'bought', vietnameseSub: 'quá khứ' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. to buy. Cấu trúc ngữ pháp: "agree + to V_inf" (đồng ý làm việc gì).'
    },
    {
      id: 't6_v2',
      number: 2,
      section: 'vocab',
      question: '______ English is really interesting and funny.',
      vietnameseTranslation: 'Việc học tiếng Anh thật sự rất thú vị và vui vẻ.',
      options: [
        { key: 'A', text: 'Learn', vietnameseSub: 'nguyên mẫu' },
        { key: 'B', text: 'Learning', vietnameseSub: 'Việc học (Danh động từ V-ing làm chủ ngữ - đúng)' },
        { key: 'C', text: 'Learned', vietnameseSub: 'quá khứ' },
        { key: 'D', text: 'Learns', vietnameseSub: 'ngôi thứ 3 số ít' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Learning. Đứng đầu câu làm chủ ngữ của động từ "is", ta sử dụng Danh động từ (Gerund V-ing): "Learning English".'
    },
    {
      id: 't6_v3',
      number: 3,
      section: 'vocab',
      question: 'The ______ is under repair, you\'ll have to take the stairs.',
      vietnameseTranslation: 'Thang máy đang được sửa chữa, bạn sẽ phải đi cầu thang bộ.',
      options: [
        { key: 'A', text: 'lift', vietnameseSub: 'thang máy (đúng)' },
        { key: 'B', text: 'boutique', vietnameseSub: 'cửa hàng thời trang' },
        { key: 'C', text: 'cashier', vietnameseSub: 'nhân viên thu ngân' },
        { key: 'D', text: 'checkout', vietnameseSub: 'quầy thanh toán' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. lift. Vế sau nói "bạn sẽ phải đi cầu thang bộ" (take the stairs), chứng tỏ thang máy (lift) đang bị hỏng hoặc đang bảo trì sửa chữa ("under repair").'
    },
    {
      id: 't6_v4',
      number: 4,
      section: 'vocab',
      question: 'I forgot ______ the change before leaving the shop, so the shop assistant called me and gave it to me.',
      vietnameseTranslation: 'Tôi đã quên lấy tiền thối trước khi rời khỏi cửa hàng, vì thế nhân viên bán hàng đã gọi tôi lại và đưa nó cho tôi.',
      options: [
        { key: 'A', text: 'taking', vietnameseSub: 'đã lấy (quên việc đã làm)' },
        { key: 'B', text: 'take', vietnameseSub: 'nguyên mẫu' },
        { key: 'C', text: 'have taken', vietnameseSub: 'hoàn thành' },
        { key: 'D', text: 'to take', vietnameseSub: 'lấy (quên phải làm việc gì - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. to take. Cấu trúc phân biệt: "forget + to V" (quên phải làm một nhiệm vụ/hành động cần làm) >< "forget + V-ing" (quên một ký ức/hành động đã từng xảy ra trong quá khứ).'
    },
    {
      id: 't6_v5',
      number: 5,
      section: 'vocab',
      question: 'When you go ______ you just look around the shop but not buy anything.',
      vietnameseTranslation: 'Khi bạn đi ngắm hàng qua cửa kính, bạn chỉ nhìn quanh các cửa hàng chứ không mua bất cứ thứ gì.',
      options: [
        { key: 'A', text: 'for rent', vietnameseSub: 'cho thuê' },
        { key: 'B', text: 'window shopping', vietnameseSub: 'ngắm hàng qua tủ kính / dạo phố xem đồ (đúng)' },
        { key: 'C', text: 'heavily discounted', vietnameseSub: 'giảm giá sâu' },
        { key: 'D', text: 'for sale', vietnameseSub: 'để bán' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. window shopping. Cụm từ cố định: "go window shopping" có nghĩa là đi dạo xem đồ trưng bày ở các cửa hàng mà không có ý định mua.'
    },
    {
      id: 't6_v6',
      number: 6,
      section: 'vocab',
      question: 'She forgot ______ the credit card to her husband; she thought she had lost it.',
      vietnameseTranslation: 'Cô ấy đã quên mất rằng mình đã đưa thẻ tín dụng cho chồng; cô ấy cứ nghĩ là mình đã làm mất nó.',
      options: [
        { key: 'A', text: 'giving', vietnameseSub: 'đã đưa (quên việc mình đã làm trong quá khứ - đúng)' },
        { key: 'B', text: 'to give', vietnameseSub: 'phải đưa' },
        { key: 'C', text: 'gave', vietnameseSub: 'quá khứ' },
        { key: 'D', text: 'to have given', vietnameseSub: 'sai dạng' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. giving. Cô ấy thực tế đã đưa thẻ cho chồng rồi, nhưng sau đó quên bẵng đi việc mình đã làm việc đó (forget + V-ing: quên đã làm gì).'
    },
    {
      id: 't6_v7',
      number: 7,
      section: 'vocab',
      question: 'Go to the changing room and ______ this nice dress, baby.',
      vietnameseTranslation: 'Hãy vào phòng thay đồ và mặc thử chiếc váy xinh xắn này đi con.',
      options: [
        { key: 'A', text: 'rent', vietnameseSub: 'thuê' },
        { key: 'B', text: 'complain', vietnameseSub: 'phàn nàn' },
        { key: 'C', text: 'try on', vietnameseSub: 'thử quần áo (đúng)' },
        { key: 'D', text: 'save', vietnameseSub: 'tiết kiệm' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. try on. Cụm động từ "try on" có nghĩa là mặc thử / đi thử quần áo, giày dép trong phòng thử đồ ("changing room").'
    },
    {
      id: 't6_v8',
      number: 8,
      section: 'vocab',
      question: 'The child stopped ______ and turned on the TV.',
      vietnameseTranslation: 'Đứa trẻ đã dừng việc học bài lại và bật tivi lên.',
      options: [
        { key: 'A', text: 'study', vietnameseSub: 'nguyên mẫu' },
        { key: 'B', text: 'to study', vietnameseSub: 'dừng lại để học' },
        { key: 'C', text: 'studying', vietnameseSub: 'dừng hẳn việc đang học bài (đúng)' },
        { key: 'D', text: 'studied', vietnameseSub: 'quá khứ' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. studying. Cấu trúc phân biệt: "stop + V-ing" (ngừng hẳn hành động đang làm) >< "stop + to V" (dừng việc đang làm lại để làm một việc khác). Ở đây đứa trẻ ngừng việc học để bật TV.'
    },
    {
      id: 't6_v9',
      number: 9,
      section: 'vocab',
      question: 'I\'ve bought this book at a good ______; it\'s very cheap.',
      vietnameseTranslation: 'Tôi đã mua được cuốn sách này với một mức giá rất hời; nó rất rẻ.',
      options: [
        { key: 'A', text: 'price', vietnameseSub: 'mức giá (cụm at a good price - đúng)' },
        { key: 'B', text: 'label', vietnameseSub: 'nhãn tem' },
        { key: 'C', text: 'reduce', vietnameseSub: 'giảm giá' },
        { key: 'D', text: 'brand', vietnameseSub: 'nhãn hiệu' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. price. Cụm từ cố định: "at a good price" có nghĩa là mua được với giá tốt, giá rẻ phải chăng.'
    },
    {
      id: 't6_v10',
      number: 10,
      section: 'vocab',
      question: 'He is really sorry for ______ at her yesterday.',
      vietnameseTranslation: 'Anh ấy thật sự xin lỗi vì đã quát tháo cô ấy ngày hôm qua.',
      options: [
        { key: 'A', text: 'shout', vietnameseSub: 'nguyên mẫu' },
        { key: 'B', text: 'to shout', vietnameseSub: 'to-V' },
        { key: 'C', text: 'shouted', vietnameseSub: 'quá khứ' },
        { key: 'D', text: 'shouting', vietnameseSub: 'quát tháo (V-ing sau giới từ for - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. shouting. Sau giới từ "for", động từ bắt buộc chia ở dạng danh động từ V-ing: "be sorry for + V-ing" (xin lỗi vì đã làm điều gì).'
    }
  ],

  readingSignQuestions: [
    {
      id: 't6_s1',
      number: 11,
      section: 'signs',
      signText: 'Discount Day next Friday! Hundreds of our most popular products will be reduced for one day only! Don\'t miss it!',
      vietnameseSignTranslation: 'Ngày Giảm Giá vào Thứ Sáu tới! Hàng trăm sản phẩm được yêu thích nhất của chúng tôi sẽ được giảm giá duy nhất trong một ngày! Đừng bỏ lỡ!',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'This shop will sell everything cheaper on Friday.', vietnameseSub: 'Cửa hàng này sẽ bán tất cả mọi thứ rẻ hơn vào thứ Sáu.' },
        { key: 'B', text: 'Many items will be discounted on Friday.', vietnameseSub: 'Nhiều mặt hàng sẽ được giảm giá vào thứ Sáu (đúng).' },
        { key: 'C', text: 'The shop\'s most popular products will cost less after Friday.', vietnameseSub: 'Các sản phẩm phổ biến nhất sẽ giảm giá sau thứ Sáu.' },
        { key: 'D', text: 'Many item will be bought on Friday.', vietnameseSub: 'Nhiều mặt hàng sẽ được mua vào thứ Sáu.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Many items will be discounted on Friday. "Hundreds of our most popular products will be reduced" đồng nghĩa với "Many items will be discounted" (rất nhiều mặt hàng sẽ được giảm giá).'
    },
    {
      id: 't6_s2',
      number: 12,
      section: 'signs',
      signText: 'There is no longer a delivery charge on orders of pizza.',
      vietnameseSignTranslation: 'Không còn áp dụng phí giao hàng đối với các đơn đặt bánh pizza.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'A free pizza will be given with every order.', vietnameseSub: 'Một chiếc bánh pizza miễn phí sẽ được tặng kèm mỗi đơn.' },
        { key: 'B', text: 'You don\'t have to pay for a pizza delivery.', vietnameseSub: 'Bạn không phải trả phí cho việc giao bánh pizza (đúng).' },
        { key: 'C', text: 'This restaurant does not deliver some orders of pizza.', vietnameseSub: 'Nhà hàng này không giao một số đơn hàng pizza.' },
        { key: 'D', text: 'You can\'t buy pizza at this restaurant.', vietnameseSub: 'Bạn không thể mua pizza ở nhà hàng này.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. You don\'t have to pay for a pizza delivery. "no longer a delivery charge" nghĩa là miễn phí giao hàng, khách hàng không cần phải trả tiền phí vận chuyển.'
    },
    {
      id: 't6_s3',
      number: 13,
      section: 'signs',
      signText: 'Please show your staff discount card before you pay for your goods.',
      vietnameseSignTranslation: 'Vui lòng xuất trình thẻ giảm giá nhân viên trước khi thanh toán tiền hàng.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'This shop gives a discount to some people.', vietnameseSub: 'Cửa hàng này giảm giá cho một số đối tượng nhất định (nhân viên có thẻ - đúng).' },
        { key: 'B', text: 'Discounts are not allowed for staff.', vietnameseSub: 'Giảm giá không được áp dụng cho nhân viên.' },
        { key: 'C', text: 'Staff will always ask you for your discount card.', vietnameseSub: 'Nhân viên sẽ luôn luôn đòi xem thẻ giảm giá của bạn.' },
        { key: 'D', text: 'You have to pay more.', vietnameseSub: 'Bạn phải trả nhiều tiền hơn.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. This shop gives a discount to some people. Cửa hàng có chính sách giảm giá cho một nhóm người nhất định (những người là nhân viên có thẻ nhân viên: "staff discount card").'
    },
    {
      id: 't6_s4',
      number: 14,
      section: 'signs',
      signText: 'FOR SALE. Laptop computer 1 year old. In good condition. Suitable for computer games. Phone or email Nick.',
      vietnameseSignTranslation: 'CẦN BÁN. Máy tính xách tay dùng 1 năm. Tình trạng tốt. Thích hợp chơi game máy tính. Gọi điện hoặc gửi email cho Nick.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'The laptop computer is almost old.', vietnameseSub: 'Máy tính xách tay gần như đã quá cũ.' },
        { key: 'B', text: 'The laptop computer is not very new but still works well.', vietnameseSub: 'Máy tính không còn quá mới nhưng vẫn hoạt động rất tốt (đúng).' },
        { key: 'C', text: 'The laptop computer is not good for computer games.', vietnameseSub: 'Máy tính xách tay không phù hợp để chơi game.' },
        { key: 'D', text: 'The laptop computer is over 2 years old.', vietnameseSub: 'Máy tính xách tay đã dùng hơn 2 năm.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. The laptop computer is not very new but still works well. Máy đã dùng 1 năm ("1 year old" -> không còn mới tinh) nhưng vẫn trong tình trạng tốt ("In good condition" -> still works well).'
    },
    {
      id: 't6_s5',
      number: 15,
      section: 'signs',
      signText: 'Special offer! Buy two dresses and get the second one half price.',
      vietnameseSignTranslation: 'Ưu đãi đặc biệt! Mua hai chiếc váy và nhận chiếc thứ hai với nửa giá.',
      question: 'Look at the text in the question. What does it say?',
      options: [
        { key: 'A', text: 'If you buy two dresses, you will have a 50% discount on both of them.', vietnameseSub: 'Nếu mua hai váy, bạn sẽ được giảm 50% trên cả hai chiếc.' },
        { key: 'B', text: 'If you buy two dresses, we will give you 50% off your next dress.', vietnameseSub: 'Nếu mua hai váy, bạn được giảm 50% cho chiếc váy mua lần tới.' },
        { key: 'C', text: 'If you buy two dresses, we will give you 50% off one of them.', vietnameseSub: 'Nếu mua hai váy, chúng tôi sẽ giảm giá 50% cho một trong hai chiếc (đúng).' },
        { key: 'D', text: 'If you buy two dresses, we will give you one.', vietnameseSub: 'Nếu mua hai váy, chúng tôi tặng bạn một chiếc.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. If you buy two dresses, we will give you 50% off one of them. "get the second one half price" nghĩa là chiếc thứ hai được giảm 50% giá (half price = 50% off one of them).'
    }
  ],

  readingPassageBTitle: 'BRUSSELS: THE CAPITAL OF THE EUROPEAN UNION',
  readingPassageBTag: 'Passage B: Reading Comprehension',
  readingTonyPassage: `Brussels, the capital of Belgium, is one of the most international cities in Europe. It is often referred to as "the capital of the European Union" because the European Parliament and the headquarters of the European Commission are located there. Diplomats, civil servants and business executives from all over the world live and work in the city. Brussels is an officially bilingual city, where both French and Dutch are spoken and recognized on official street signs and documents.

At the heart of the city lies the Grand Place (or Grand Palace), a breathtaking historic center surrounded by opulent 17th-century guildhalls and the magnificent Town Hall. It is considered one of the most beautiful public squares in the world and attracts millions of tourists each year.

Just a few steps from the historic square is Butcher's Street (Rue des Bouchers), famous for its vibrant pedestrian walkways lined with traditional seafood and grill restaurants, often called "the stomach of Brussels". In addition to its diplomatic institutions and tourism, Brussels boasts a strong manufacturing industry, with key sectors including metal, electrical equipment, pharmaceutical, and chemical manufacturing.`,

  readingTonyTranslation: `Brussels, thủ đô của nước Bỉ, là một trong những thành phố mang tính quốc tế nhất ở châu Âu. Nơi đây thường được gọi là "thủ đô của Liên minh châu Âu" vì Nghị viện châu Âu và trụ sở của Ủy ban châu Âu được đặt tại đây. Các nhà ngoại giao, công chức và giám đốc doanh nghiệp từ khắp nơi trên thế giới đang sinh sống và làm việc tại thành phố này. Brussels là một thành phố song ngữ chính thức, nơi cả tiếng Pháp và tiếng Hà Lan đều được sử dụng và công nhận trên các biển hiệu và văn bản hành chính.

Nằm ở trung tâm thành phố là Quảng trường Lớn (Grand Place), một trung tâm lịch sử tráng lệ được bao quanh bởi các tòa nhà phường hội từ thế kỷ 17 nguy nga và Tòa thị chính lộng lẫy. Nơi đây được coi là một trong những quảng trường công cộng đẹp nhất thế giới và thu hút hàng triệu du khách mỗi năm.

Chỉ cách quảng trường lịch sử vài bước chân là Phố Đồ Tể (Butcher's Street), nổi tiếng với những lối đi bộ sôi động san sát các nhà hàng hải sản và đồ nướng truyền thống, thường được gọi là "cái dạ dày của Brussels". Ngoài các cơ quan ngoại giao và ngành du lịch, Brussels còn tự hào có ngành công nghiệp sản xuất vững mạnh, với các lĩnh vực chủ chốt bao gồm luyện kim, thiết bị điện, dược phẩm và sản xuất hóa chất.`,

  readingTonyQuestions: [
    {
      id: 't6_r1',
      number: 16,
      section: 'tony',
      question: 'Why is Brussels called \'the capital of the EU\'?',
      vietnameseTranslation: 'Tại sao Brussels được gọi là "thủ đô của Liên minh châu Âu"?',
      options: [
        { key: 'A', text: 'Because the headquarters of NATO are there.', vietnameseSub: 'Vì trụ sở NATO đặt ở đó.' },
        { key: 'B', text: 'Because the European Parliament is there.', vietnameseSub: 'Vì Nghị viện châu Âu đặt tại đó (đúng).' },
        { key: 'C', text: 'Because many multinational companies are there.', vietnameseSub: 'Vì nhiều công ty đa quốc gia đặt trụ sở ở đó.' },
        { key: 'D', text: 'Because it is a cultural center.', vietnameseSub: 'Vì đó là một trung tâm văn hóa.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Because the European Parliament is there. Đoạn 1 nêu: "...capital of the European Union because the European Parliament and the headquarters of the European Commission are located there."'
    },
    {
      id: 't6_r2',
      number: 17,
      section: 'tony',
      question: 'What are the official languages in Brussels?',
      vietnameseTranslation: 'Những ngôn ngữ chính thức tại Brussels là gì?',
      options: [
        { key: 'A', text: 'French and German', vietnameseSub: 'Tiếng Pháp và tiếng Đức' },
        { key: 'B', text: 'English and French', vietnameseSub: 'Tiếng Anh và tiếng Pháp' },
        { key: 'C', text: 'French and Dutch', vietnameseSub: 'Tiếng Pháp và tiếng Hà Lan (đúng)' },
        { key: 'D', text: 'French and Spanish', vietnameseSub: 'Tiếng Pháp và tiếng Tây Ban Nha' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. French and Dutch. Đoạn 1 chỉ rõ: "Brussels is an officially bilingual city, where both French and Dutch are spoken..."'
    },
    {
      id: 't6_r3',
      number: 18,
      section: 'tony',
      question: 'What is Grand Palace?',
      vietnameseTranslation: 'Grand Palace (Grand Place) là gì?',
      options: [
        { key: 'A', text: 'a shop', vietnameseSub: 'một cửa hàng' },
        { key: 'B', text: 'a bar', vietnameseSub: 'một quán bar' },
        { key: 'C', text: 'a restaurant', vietnameseSub: 'một nhà hàng' },
        { key: 'D', text: 'a historic center', vietnameseSub: 'một trung tâm lịch sử (quảng trường lịch sử - đúng)' },
        ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. a historic center. Đoạn 2 nêu rõ: "Grand Place (or Grand Palace), a breathtaking historic center surrounded by opulent 17th-century guildhalls..."'
    },
    {
      id: 't6_r4',
      number: 19,
      section: 'tony',
      question: 'What can you find in Butcher\'s Street?',
      vietnameseTranslation: 'Bạn có thể tìm thấy điều gì ở Phố Đồ Tể (Butcher\'s Street)?',
      options: [
        { key: 'A', text: 'restaurants', vietnameseSub: 'các nhà hàng (đúng)' },
        { key: 'B', text: 'cafés', vietnameseSub: 'các quán cà phê' },
        { key: 'C', text: 'bars', vietnameseSub: 'các quán bar' },
        { key: 'D', text: 'shops', vietnameseSub: 'các cửa hàng' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. restaurants. Đoạn 3 khẳng định: "Butcher\'s Street (Rue des Bouchers), famous for its vibrant pedestrian walkways lined with traditional seafood and grill restaurants..."'
    },
    {
      id: 't6_r5',
      number: 20,
      section: 'tony',
      question: 'Which of the following is TRUE about manufacturing industries in Brussels?',
      vietnameseTranslation: 'Điều nào sau đây là ĐÚNG về các ngành sản xuất tại Brussels?',
      options: [
        { key: 'A', text: 'sports, banking, pharmaceutical, and chemical', vietnameseSub: 'thể thao, ngân hàng, dược phẩm và hóa chất' },
        { key: 'B', text: 'metal, electrical, pharmaceutical, and chemical', vietnameseSub: 'luyện kim, điện, dược phẩm và hóa chất (đúng)' },
        { key: 'C', text: 'metal, tourism, pharmaceutical, and chemical', vietnameseSub: 'luyện kim, du lịch, dược phẩm và hóa chất' },
        { key: 'D', text: 'metal, electrical, banking, and tourism', vietnameseSub: 'luyện kim, điện, ngân hàng và du lịch' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. metal, electrical, pharmaceutical, and chemical. Câu cuối cùng của bài đọc chỉ rõ: "...with key sectors including metal, electrical equipment, pharmaceutical, and chemical manufacturing."'
    }
  ],

  readingPassageCTitle: 'THE PHENOMENON OF BLACK FRIDAY',
  readingPassageCTag: 'Passage C: Cloze Test (Điền từ vào chỗ trống)',
  readingAnnaPassage: `Black Friday is widely recognized as one of the busiest (1) _______ days of the entire year. To kick off the holiday season, many retail stores have special (2) _______ to draw more shoppers into their premises. During this peak period, roads and store parking lots are extremely (3) _______, with popular shopping malls practically overflowing with eager (4) _______ every year. While some ordinary citizens may view the hectic day after Thanksgiving (5) _______ because of traffic congestion and aggressive crowds, commercial retailers have a very different (6) _______. For business owners, this event represents the single best opportunity to (7) _______ their profit earnings for the fiscal year. Even if consumer sales were relatively (8) _______ in earlier seasons, the frantic shopping period (9) _______ Thanksgiving and Christmas can transform their annual financial results. It remains the essential retail (10) _______ that defines modern consumer culture.`,

  readingAnnaTranslation: `Thứ Sáu Đen (Black Friday) được công nhận rộng rãi là một trong những ngày mua sắm (1) bận rộn nhất trong cả năm. Để mở màn mùa lễ hội, nhiều cửa hàng bán lẻ tung ra các đợt giảm giá (2) đặc biệt để thu hút thêm nhiều người mua sắm đến cửa tiệm. Trong khoảng thời gian cao điểm này, các tuyến đường và bãi đỗ xe của cửa hàng đều vô cùng đông đúc (3), với các trung tâm mua sắm nổi tiếng gần như tràn ngập những khách hàng (4) háo hức mỗi năm. Trong khi một số người dân có thể nhìn nhận ngày sau Lễ Tạ Ơn một cách tiêu cực (5) vì ùn tắc giao thông và đám đông xô đẩy, thì các nhà bán lẻ lại có một góc nhìn / quan điểm (6) hoàn toàn khác biệt. Đối với các chủ doanh nghiệp, sự kiện này đại diện cho cơ hội tốt nhất để cải thiện (7) doanh thu lợi nhuận trong năm tài chính. Ngay cả khi doanh số bán hàng khá chậm chạp (8) trong các mùa trước, giai đoạn mua sắm nhộn nhịp giữa (9) Lễ Tạ Ơn và Giáng Sinh có thể thay đổi hoàn toàn kết quả tài chính cả năm. Đó vẫn là hoạt động (10) bán lẻ thiết yếu định hình nên văn hóa tiêu dùng hiện đại.`,

  readingAnnaQuestions: [
    {
      id: 't6_c1',
      number: 21,
      section: 'anna',
      question: 'Choose the best word for blank (1): "...one of the busiest (1) _______ days of the year."',
      options: [
        { key: 'A', text: 'shopping', vietnameseSub: 'mua sắm (shopping days - đúng)' },
        { key: 'B', text: 'discounts', vietnameseSub: 'giảm giá' },
        { key: 'C', text: 'farming', vietnameseSub: 'làm nông' },
        { key: 'D', text: 'selling', vietnameseSub: 'việc bán' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. shopping. Cụm từ cố định "shopping days" (những ngày mua sắm cao điểm trong năm).'
    },
    {
      id: 't6_c2',
      number: 22,
      section: 'anna',
      question: 'Choose the best word for blank (2): "Many stores have (2) _______ to draw more customers."',
      options: [
        { key: 'A', text: 'sales', vietnameseSub: 'các đợt hạ giá, xả hàng (have sales - đúng)' },
        { key: 'B', text: 'discounts', vietnameseSub: 'mức giảm giá' },
        { key: 'C', text: 'goods', vietnameseSub: 'hàng hóa' },
        { key: 'D', text: 'receipts', vietnameseSub: 'biên lai' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. sales. Cụm từ "have sales" có nghĩa là tổ chức các chương trình bán hàng đại hạ giá.'
    },
    {
      id: 't6_c3',
      number: 23,
      section: 'anna',
      question: 'Choose the best word for blank (3): "...parking lots are (3) _______..."',
      options: [
        { key: 'A', text: 'peaceful', vietnameseSub: 'bình yên' },
        { key: 'B', text: 'quiet', vietnameseSub: 'yên ắng' },
        { key: 'C', text: 'slow', vietnameseSub: 'chậm chạp' },
        { key: 'D', text: 'crowded', vietnameseSub: 'đông nghịt, chật kín (đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. crowded. Vào ngày Black Friday, bãi đỗ xe luôn trong tình trạng đông nghẹt xe cộ ("crowded").'
    },
    {
      id: 't6_c4',
      number: 24,
      section: 'anna',
      question: 'Choose the best word for blank (4): "...overflowing with (4) _______ every year."',
      options: [
        { key: 'A', text: 'customers', vietnameseSub: 'những khách hàng mua sắm (đúng)' },
        { key: 'B', text: 'workers', vietnameseSub: 'công nhân' },
        { key: 'C', text: 'engineers', vietnameseSub: 'kỹ sư' },
        { key: 'D', text: 'passengers', vietnameseSub: 'hành khách' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. customers. Trung tâm thương mại tràn ngập khách hàng đến săn hàng giảm giá ("overflowing with customers").'
    },
    {
      id: 't6_c5',
      number: 25,
      section: 'anna',
      question: 'Choose the best word for blank (5): "...may see the day after Thanksgiving (5) _______..."',
      options: [
        { key: 'A', text: 'positively', vietnameseSub: 'một cách tích cực' },
        { key: 'B', text: 'negatively', vietnameseSub: 'một cách tiêu cực, ngán ngẩm (đúng)' },
        { key: 'C', text: 'slowly', vietnameseSub: 'chậm chạp' },
        { key: 'D', text: 'quickly', vietnameseSub: 'nhanh chóng' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. negatively. Vế câu nói về cảnh kẹt xe và chen chúc nên nhiều người nhìn nhận ngày này một cách tiêu cực ("negatively").'
    },
    {
      id: 't6_c6',
      number: 26,
      section: 'anna',
      question: 'Choose the best word for blank (6): "...retailers have a very different (6) _______."',
      options: [
        { key: 'A', text: 'idea', vietnameseSub: 'ý tưởng' },
        { key: 'B', text: 'chance', vietnameseSub: 'cơ hội' },
        { key: 'C', text: 'opinion', vietnameseSub: 'quan điểm, cách nhìn nhận (đúng)' },
        { key: 'D', text: 'discount', vietnameseSub: 'giảm giá' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. opinion. "have a different opinion" (có một quan điểm, ý kiến hoàn toàn khác biệt so với người đi đường).'
    },
    {
      id: 't6_c7',
      number: 27,
      section: 'anna',
      question: 'Choose the best word for blank (7): "...best opportunity to (7) _______ earnings for the year."',
      options: [
        { key: 'A', text: 'improve', vietnameseSub: 'cải thiện, gia tăng (đúng)' },
        { key: 'B', text: 'develop', vietnameseSub: 'phát triển' },
        { key: 'C', text: 'decrease', vietnameseSub: 'sụt giảm' },
        { key: 'D', text: 'get down', vietnameseSub: 'đi xuống' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. improve. "improve earnings" (cải thiện doanh số và lợi nhuận cho cả năm tài chính).'
    },
    {
      id: 't6_c8',
      number: 28,
      section: 'anna',
      question: 'Choose the best word for blank (8): "If sales were (8) _______ in other seasons..."',
      options: [
        { key: 'A', text: 'good', vietnameseSub: 'tốt' },
        { key: 'B', text: 'fast', vietnameseSub: 'nhanh' },
        { key: 'C', text: 'slow', vietnameseSub: 'chậm chạp, ế ẩm (đúng)' },
        { key: 'D', text: 'reasonable', vietnameseSub: 'hợp lý' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. slow. "sales were slow" là cụm từ thương mại chỉ tình hình buôn bán ế ẩm, doanh số chậm.'
    },
    {
      id: 't6_c9',
      number: 29,
      section: 'anna',
      question: 'Choose the best preposition for blank (9): "...between Thanksgiving and Christmas."',
      options: [
        { key: 'A', text: 'between', vietnameseSub: 'ở giữa (cấu trúc between A and B - đúng)' },
        { key: 'B', text: 'from', vietnameseSub: 'từ' },
        { key: 'C', text: 'for', vietnameseSub: 'cho' },
        { key: 'D', text: 'to', vietnameseSub: 'đến' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. between. Cấu trúc ngữ pháp chuẩn đi với "and": "between Thanksgiving and Christmas" (ở giữa Lễ Tạ Ơn và Lễ Giáng Sinh).'
    },
    {
      id: 't6_c10',
      number: 30,
      section: 'anna',
      question: 'Choose the best word for blank (10): "...last shopping (10) _______ of the season."',
      options: [
        { key: 'A', text: 'solution', vietnameseSub: 'giải pháp' },
        { key: 'B', text: 'activity', vietnameseSub: 'hoạt động mua sắm (đúng)' },
        { key: 'C', text: 'problem', vietnameseSub: 'vấn đề' },
        { key: 'D', text: 'chance', vietnameseSub: 'cơ hội' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. activity. Cụm từ "shopping activity" có nghĩa là hoạt động mua bán tiêu dùng.'
    }
  ],

  sentenceTransformations: [
    {
      id: 't6_w1',
      number: 31,
      originalSentence: 'He prefers going to the cinema to renting a DVD.',
      vietnameseTranslation: 'Anh ấy thích đi xem phim ở rạp hơn là thuê một đĩa DVD.',
      prefix: 'He would rather',
      modelAnswer: 'He would rather go to the cinema than rent a DVD.',
      vietnameseModelTranslation: 'Anh ấy thà đi rạp chiếu phim còn hơn là thuê đĩa DVD.',
      acceptedAnswers: [
        'go to the cinema than rent a DVD',
        'go to the cinema than rent a DVD.',
        'go to the cinema rather than rent a DVD',
        'go to the cinema rather than rent a DVD.'
      ],
      grammarPoint: 'Cấu trúc tương đương biểu thị sở thích: S + prefer + V-ing + to + V-ing = S + would rather + V_inf + than + V_inf (thích làm việc này hơn việc kia).'
    },
    {
      id: 't6_w2',
      number: 32,
      originalSentence: 'It is very tiring to stand in a long queue at the checkout.',
      vietnameseTranslation: 'Thật là mệt mỏi khi phải đứng xếp hàng dài ở quầy thanh toán.',
      prefix: 'Standing in a long queue',
      modelAnswer: 'Standing in a long queue at the checkout is very tiring.',
      vietnameseModelTranslation: 'Đứng xếp hàng dài ở quầy thanh toán là điều rất mệt mỏi.',
      acceptedAnswers: [
        'at the checkout is very tiring',
        'at the checkout is very tiring.'
      ],
      grammarPoint: 'Biến đổi cấu trúc chủ ngữ giả It sang Danh động từ (Gerund V-ing) đứng đầu câu làm chủ ngữ: It is + adj + to V = V-ing + is + adj.'
    },
    {
      id: 't6_w3',
      number: 33,
      originalSentence: 'She said to us, "Do exercise regularly".',
      vietnameseTranslation: 'Cô ấy nói với chúng tôi: "Hãy tập thể dục đều đặn".',
      prefix: 'She told us',
      modelAnswer: 'She told us to do exercise regularly.',
      vietnameseModelTranslation: 'Cô ấy bảo chúng tôi hãy tập thể dục đều đặn.',
      acceptedAnswers: [
        'to do exercise regularly',
        'to do exercise regularly.'
      ],
      grammarPoint: 'Chuyển câu mệnh lệnh trực tiếp sang gián tiếp: S + said to + O: "V..." -> S + told + O + to V.'
    },
    {
      id: 't6_w4',
      number: 34,
      originalSentence: 'He didn\'t hurry, so he missed the train.',
      vietnameseTranslation: 'Anh ấy đã không khẩn trương, vì thế anh ấy đã bị nhỡ chuyến tàu.',
      prefix: 'If',
      modelAnswer: 'If he had hurried, he wouldn\'t have missed the train.',
      vietnameseModelTranslation: 'Nếu anh ấy khẩn trương hơn thì anh ấy đã không bị lỡ chuyến tàu.',
      acceptedAnswers: [
        'he had hurried, he wouldn\'t have missed the train',
        'he had hurried, he wouldn\'t have missed the train.',
        'he had hurried, he would not have missed the train',
        'he had hurried, he would not have missed the train.'
      ],
      grammarPoint: 'Câu điều kiện loại 3 (trái ngược với thực tế trong quá khứ): If + S + had + V3/ed, S + would(n\'t) have + V3/ed.'
    },
    {
      id: 't6_w5',
      number: 35,
      originalSentence: 'Although he took a taxi, John arrived late for the concert.',
      vietnameseTranslation: 'Mặc dù đã đi taxi, John vẫn đến muộn buổi hòa nhạc.',
      prefix: 'In spite',
      modelAnswer: 'In spite of taking a taxi, John arrived late for the concert.',
      vietnameseModelTranslation: 'Mặc dù bắt taxi, John vẫn đến muộn buổi hòa nhạc.',
      acceptedAnswers: [
        'of taking a taxi, John arrived late for the concert',
        'of taking a taxi, John arrived late for the concert.',
        'of having taken a taxi, John arrived late for the concert',
        'of having taken a taxi, John arrived late for the concert.'
      ],
      grammarPoint: 'Chuyển đổi từ mệnh đề nhượng bộ sang cụm từ nhượng bộ cùng chủ ngữ: Although + S + V = In spite of + V-ing.'
    }
  ],

  letterWriting: {
    prompt: 'Write a letter (about 120 words) to your friend about your favourite shopping centre in your city.\\nYour letter should include:\\n- Where do you often go shopping?\\n- How and when do you often get there?\\n- What does this place have?',
    vietnamesePrompt: 'Viết một lá thư (khoảng 120 từ) gửi cho bạn của bạn kể về trung tâm mua sắm yêu thích nhất trong thành phố.\\nLá thư nên bao gồm:\\n- Bạn thường đi mua sắm ở đâu?\\n- Bạn đến đó bằng phương tiện gì và vào thời gian nào?\\n- Nơi đó có những dịch vụ / tiện ích gì?',
    requiredWordCount: '100 - 140 words',
    sample1: {
      title: 'Bài mẫu 1: Vincom Mega Mall (Mẫu chuẩn giáo trình)',
      content: `Dear Jill,

How are you? In your last letter you asked me about my favourite shopping centre in my city. Now I'll tell you about it, VinCom Mega Mall Times City on Minh Khai street.

I usually go there with my family at the weekend. It's quite near our house, so we can get there by motorbike or taxi. This is a really big place having a lot of facilities like a cinema, an aquarium, restaurants, shops, etc. I love it because it is very nice, clean and convenient. We can buy whatever we like here even though it could be quite expensive. It's great for families to spend time together. Besides shopping we can join games or eat many good foods.

When you go to Hanoi, I will take you there. Hope to see you soon!

Love,`
    },
    sample2: {
      title: 'Bài mẫu 2: Trung tâm mua sắm hiện đại (Phan Tấn Kiệt)',
      content: `Dear Tom,

How are you? You asked me about my favourite shopping centre, so I'll tell you about it. I often go to a big shopping mall in my city.

It is not far from my house, so I usually go there by motorbike at the weekend, with my family or my close friends. The mall has a large supermarket, many modern clothes shops, a cinema, a busy food court and an exciting game zone. I like it because it is clean, cool and very comfortable with air-conditioners, and the prices are stable. We can buy what we need, then watch a good movie or enjoy delicious local food together. It is a wonderful place to relax after a busy week of studying.

When you visit my city, I will take you there.

Best wishes,
Phan Tan Kiet`
    }
  },

  speakingCard: {
    cardTitle: 'SPEAKING CARD No.6: Advantages of shopping in supermarkets or shopping malls',
    cardSubtitle: 'Nói về những lợi ích của việc mua sắm tại siêu thị hoặc trung tâm thương mại',
    questions: [
      { q: 'How are prices at supermarkets compared to small markets?', vi: 'Giá cả tại siêu thị so với chợ nhỏ như thế nào? (Stable prices)' },
      { q: 'What do you think about the quality of the goods there?', vi: 'Bạn nghĩ gì về chất lượng hàng hóa ở đó? (High quality of goods)' },
      { q: 'How is the shopping atmosphere in malls?', vi: 'Không khí mua sắm ở các trung tâm thương mại ra sao? (Good atmosphere)' },
      { q: 'What leisure activities can you do after shopping?', vi: 'Bạn có thể tham gia những hoạt động giải trí nào sau khi mua sắm?' }
    ],
    sampleAnswers: [
      {
        speaker: 'Bài mẫu 1 (Theo giáo trình chuẩn)',
        textEn: `As I've said I like shopping and at least once a week I go to the supermarket to buy food and other things for my family. You can see there are more and more supermarkets and shopping malls. Not only I but many people often go there for shopping because of many benefits they bring about. I think the prices at the supermarkets or shopping malls may be a bit high, but they are stable. They cannot go up so quickly like in small shops or markets. This is very important these days, especially on special occasions like Valentine's, Christmas, Tet holiday, etc. On those days if you buy flowers or presents in supermarkets it must be cheaper than in small shops. Moreover, I think the quality of products in supermarkets or shopping malls is often good, so I don't have to worry about it. I can know the origin of all products I buy. This is more difficult if you buy something in markets. One more advantage of shopping in supermarkets is the good atmosphere we have when shopping there. I feel relaxed with air-conditioners and nice decoration in supermarkets or shopping malls. Not like in small markets, we have to be in crowds with heat and dust. Finally shopping malls are also places to entertain and relax with our family. After shopping we can choose other activities to join with our family like playing games or watching movies, etc. That's why I often go to supermarkets when I have to buy anything.`,
        textVi: `Như tôi đã nói, tôi rất thích mua sắm và ít nhất mỗi tuần một lần tôi đến siêu thị mua thực phẩm và đồ dùng cho gia đình. Bạn thấy đấy, ngày càng có nhiều siêu thị và trung tâm thương mại. Không chỉ tôi mà rất nhiều người thường đến đó mua sắm vì những lợi ích tuyệt vời mà chúng mang lại. Tôi nghĩ giá cả ở siêu thị hay trung tâm thương mại có thể hơi cao một chút, nhưng rất ổn định. Giá không tăng vọt nhanh chóng như ở các cửa hàng nhỏ hay chợ cóc. Điều này rất quan trọng trong thời buổi hiện nay, đặc biệt vào các dịp lễ tết như Valentine, Giáng sinh, Tết cổ truyền... Vào những ngày đó, nếu mua hoa hay quà tặng trong siêu thị chắc chắn sẽ rẻ hơn mua ở ngoài. Hơn nữa, tôi nghĩ chất lượng sản phẩm trong siêu thị rất tốt nên tôi không phải lo lắng. Tôi có thể biết rõ nguồn gốc xuất xứ của các món đồ mình mua. Điều này khó hơn nhiều nếu mua ở chợ. Một ưu điểm nữa là bầu không khí mua sắm rất dễ chịu. Tôi cảm thấy thư thái với điều hòa mát mẻ và cách trang trí đẹp mắt, không phải chen chúc trong nắng nóng và khói bụi ở chợ. Cuối cùng, trung tâm thương mại còn là nơi giải trí cùng gia đình như chơi game hay xem phim. Đó là lý do tại sao tôi thường chọn siêu thị mỗi khi cần mua sắm.`
      },
      {
        speaker: 'Bài mẫu 2 (Phiên bản cô đọng, dễ nhớ)',
        textEn: `I think shopping in supermarkets and shopping malls has many clear advantages. Firstly, the prices are very stable. They may be a little higher than in small street markets, but they do not fluctuate unexpectedly, so I can plan my budget easily. Secondly, the quality of the goods is consistently high. I can easily check the labels, expiry dates and origins of products, so I feel safe when buying food. Finally, the shopping atmosphere is fantastic. It is always clean, cool and comfortable with air-conditioners, and I can also meet friends, eat at the food court or watch a movie after shopping. That is why I prefer shopping in supermarkets and modern malls.`,
        textVi: `Tôi nghĩ mua sắm ở siêu thị và trung tâm thương mại có rất nhiều ưu điểm rõ ràng. Thứ nhất, giá cả rất ổn định. Chúng có thể cao hơn một chút so với các chợ cóc ngoài phố, nhưng không bị dao động bất ngờ, giúp tôi dễ dàng lên kế hoạch chi tiêu. Thứ hai, chất lượng hàng hóa luôn được đảm bảo cao. Tôi có thể dễ dàng kiểm tra tem nhãn, hạn sử dụng và nguồn gốc xuất xứ của sản phẩm, nên tôi cảm thấy an tâm khi mua thực phẩm. Cuối cùng, bầu không khí mua sắm vô cùng tuyệt vời. Nơi đây luôn sạch sẽ, mát mẻ và tiện nghi với máy điều hòa, đồng thời tôi có thể gặp gỡ bạn bè, ăn uống ở khu ẩm thực hoặc xem phim sau khi mua sắm. Đó là lý do tại sao tôi thích mua sắm ở siêu thị và trung tâm thương mại hiện đại hơn.`
      }
    ]
  },

  listeningPartA: [
    { number: 1, question: 'What can\'t the woman find?', options: ['A: knife', 'B: paintbrush', 'C: hammer'], answer: 'B', note: 'Đáp án phán đoán B (paintbrush)' },
    { number: 2, question: 'What is the weather forecast for tomorrow?', options: ['A: rainy', 'B: sunny', 'C: sunny with clouds'], answer: 'A', note: 'Đáp án phán đoán A (rainy)' },
    { number: 3, question: 'What did the boy buy?', options: ['A: juice and bread', 'B: juice, bread and tomatoes', 'C: newspaper, juice and bread'], answer: 'B', note: 'Đáp án phán đoán B (juice, bread and tomatoes)' },
    { number: 4, question: 'Which present has the girl bought her mother?', options: ['A: earrings', 'B: photo book', 'C: pen'], answer: 'C', note: 'Đáp án phán đoán C (pen)' },
    { number: 5, question: 'Which TV programme will they watch together?', options: ['A: music show', 'B: basketball', 'C: animals'], answer: 'A', note: 'Đáp án phán đoán A (music show)' },
    { number: 6, question: 'What time is the swimming lesson today?', options: ['A: 4:30', 'B: 5:00', 'C: 5:30'], answer: 'B', note: 'Đáp án phán đoán B' },
    { number: 7, question: 'Which subject does the boy like best?', options: ['A: computers', 'B: geography', 'C: sports'], answer: 'C', note: 'Đáp án phán đoán C (sports)' }
  ],

  listeningPartB: {
    title: 'GLASGOW TOUR & TRAVEL (Listen and fill in the missing information)',
    items: [
      { gap: 1, text: 'Arrival by car: City center car park is ______ Leave car at hotel.', answer: 'expensive' },
      { gap: 2, text: '“Discovering Glasgow” tour bus: Departs from George ______ every 30 minutes.', answer: 'Square' },
      { gap: 3, text: 'Buy tickets from ______', answer: 'the driver' },
      { gap: 4, text: 'Walking: Welcome Centre for information – free ______ available.', answer: 'maps' },
      { gap: 5, text: 'Merchant City area – shops selling ______ and clothes.', answer: 'books' }
    ],
    note: 'Lưu ý: Các đáp án phần nghe dựa trên tài liệu ôn tập chuẩn do không kèm file audio gốc.'
  }
};

// Ghi ra file data_topic6.js
const fileContent = `// TOPIC 6: SHOPPING - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC6 = ${JSON.stringify(topic6Data, null, 2)};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC6 = EXAM_DATA_TOPIC6;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC6;
}
`;

fs.writeFileSync('data_topic6.js', fileContent, 'utf8');
console.log('✅ Created data_topic6.js successfully! Length:', fileContent.length);
