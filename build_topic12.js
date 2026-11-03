// Script tạo tự động dữ liệu Topic 12: TECHNOLOGY
// Nguồn: Đề thi và tài liệu ôn tập chuẩn Tiếng Anh Đầu Ra
const fs = require('fs');

const topic12Data = {
  topicId: 'topic12',
  topicTitle: 'TOPIC 12: TECHNOLOGY',
  topicSubtitle: 'Công nghệ & Thiết bị hiện đại (Câu điều kiện loại 3, Câu ước Wish quá khứ, Đọc hiểu Công nghệ trong kinh doanh & Tương lai máy tính, Phát minh điện thoại thông minh)',

  vocabulary: [
    { word: 'data', ipa: '/ˈdeɪtə/', pos: 'n.', meaning: 'dữ liệu điện tử, thông tin máy tính', example: 'Always back up critical database files regularly so you do not lose important data.' },
    { word: 'dial', ipa: '/ˈdaɪəl/', pos: 'v.', meaning: 'quay số, bấm phím gọi điện thoại', example: 'Smartphones allow users to dial emergency numbers directly without unlocking the screen.' },
    { word: 'software', ipa: '/ˈsɒftweə(r)/', pos: 'n.', meaning: 'phần mềm máy tính', example: 'BKAV is one of the pioneering computer antivirus software programs created in Vietnam.' },
    { word: 'antivirus', ipa: '/ˌæntiˈvaɪrəs/', pos: 'n./adj.', meaning: 'chương trình phòng chống virus', example: 'Installing a dependable antivirus shield prevents malware from infiltrating your PC.' },
    { word: 'hardware', ipa: '/ˈhɑːdweə(r)/', pos: 'n.', meaning: 'phần cứng máy tính (ổ cứng, RAM, chip)', example: 'Modern graphical games require upgrading your system hardware and graphics card.' },
    { word: 'engaged', ipa: '/ɪnˈɡeɪdʒd/', pos: 'adj.', meaning: 'máy bận, đường dây đang có cuộc gọi', example: 'I tried phoning the customer service line several times, but the number was engaged.' },
    { word: 'operate', ipa: '/ˈɒpəreɪt/', pos: 'v.', meaning: 'vận hành, điều khiển máy móc', example: 'Never operate high-voltage electrical equipment when barefoot or wearing wet sandals.' },
    { word: 'barefoot', ipa: '/ˈbeəfʊt/', pos: 'adj./adv.', meaning: 'chân trần, không đi giày dép', example: 'Walking barefoot around electrical power generators poses an electrocution hazard.' },
    { word: 'manually', ipa: '/ˈmænjuəli/', pos: 'adv.', meaning: 'bằng tay, thao tác thủ công', example: 'In the past, bank clerks recorded accounts manually in bulky paper ledgers.' },
    { word: 'withdraw', ipa: '/wɪðˈdrɔː/', pos: 'v.', meaning: 'rút tiền (từ tài khoản, cây ATM)', example: 'Automated Teller Machines permit account holders to withdraw cash at any hour.' },
    { word: 'plastic money', ipa: '/ˌplæstɪk ˈmʌni/', pos: 'n. phr.', meaning: 'tiền nhựa (thẻ tín dụng, thẻ ATM)', example: 'The surge of electronic plastic money simplifies international shopping transactions.' },
    { word: 'search for', ipa: '/sɜːtʃ fɔː(r)/', pos: 'v. phr.', meaning: 'tìm kiếm thông tin', example: 'University researchers spend countless hours online searching for academic references.' },
    { word: 'key in', ipa: '/kiː ɪn/', pos: 'phrasal v.', meaning: 'nhập dữ liệu bằng bàn phím', example: 'Students use word processors to key in their graduation theses and coding projects.' },
    { word: 'instant messaging', ipa: '/ˌɪnstənt ˈmesɪdʒɪŋ/', pos: 'n. phr.', meaning: 'dịch vụ nhắn tin nhanh tức thời', example: 'Instant messaging apps allow project teams to coordinate their tasks effortlessly.' },
    { word: 'battery', ipa: '/ˈbætəri/', pos: 'n.', meaning: 'pin sạc (máy tính, điện thoại)', example: 'Modern ultrabooks pack energy-dense lithium batteries that last all day.' },
    { word: 'interact', ipa: '/ˌɪntərˈækt/', pos: 'v.', meaning: 'tương tác (interact with)', example: 'Future neural headsets will let humans interact with artificial intelligence via thought.' },
    { word: 'touchpad', ipa: '/ˈtʌtʃpæd/', pos: 'n.', meaning: 'bàn rê cảm ứng trên máy tính xách tay', example: 'Laptop touchpads support multi-finger gestures for smooth document navigation.' },
    { word: 'analyze', ipa: '/ˈænəlaɪz/', pos: 'v.', meaning: 'phân tích dữ liệu, xử lý thuật toán', example: 'Data scientists use machine learning models to analyze complex business metrics.' },
    { word: 'cut off', ipa: '/kʌt ɒf/', pos: 'phrasal v.', meaning: 'ngắt kết nối, cắt nguồn cung cấp', example: 'The power utility threatened to cut off electricity if overdue bills remained unpaid.' },
    { word: 'hold on', ipa: '/həʊld ɒn/', pos: 'phrasal v.', meaning: 'giữ máy chờ điện thoại', example: 'Please hold on for a moment while I transfer your call to the technical department.' },
    { word: 'smartphone', ipa: '/ˈsmɑːtfəʊn/', pos: 'n.', meaning: 'điện thoại di động thông minh', example: 'A multifunctional smartphone combines a telephone, camera, digital wallet, and mini-computer.' },
    { word: 'invention', ipa: '/ɪnˈvenʃn/', pos: 'n.', meaning: 'phát minh công nghệ mang tính đột phá', example: 'The invention of the global internet revolutionized worldwide trade and human connection.' }
  ],

  vocabularyQuestions: [
    {
      id: 't12_v1',
      number: 1,
      section: 'vocab',
      question: 'If you are not careful, your computer might catch a virus and lose ______.',
      vietnameseTranslation: 'Nếu bạn không cẩn thận, máy tính của bạn có thể bị nhiễm virus và bị mất toàn bộ dữ liệu.',
      options: [
        { key: 'A', text: 'data', vietnameseSub: 'dữ liệu (đúng)' },
        { key: 'B', text: 'keyboard', vietnameseSub: 'bàn phím' },
        { key: 'C', text: 'mouse', vietnameseSub: 'con chuột máy tính' },
        { key: 'D', text: 'machine', vietnameseSub: 'cỗ máy' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. data. Khi máy tính bị nhiễm virus, nguy cơ lớn nhất là bị xóa hoặc mã hóa mất sạch dữ liệu quan trọng ("lose data").'
    },
    {
      id: 't12_v2',
      number: 2,
      section: 'vocab',
      question: 'If there is an emergency, you can ______ an emergency number (911) without having to unlock the phone.',
      vietnameseTranslation: 'Nếu có trường hợp khẩn cấp, bạn có thể bấm quay số khẩn cấp (911) mà không cần phải mở khóa điện thoại.',
      options: [
        { key: 'A', text: 'print', vietnameseSub: 'in ấn' },
        { key: 'B', text: 'dial', vietnameseSub: 'quay số, bấm gọi (đúng)' },
        { key: 'C', text: 'download', vietnameseSub: 'tải xuống' },
        { key: 'D', text: 'invent', vietnameseSub: 'phát minh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. dial. Động từ "dial an emergency number" nghĩa là bấm phím quay số điện thoại khẩn cấp.'
    },
    {
      id: 't12_v3',
      number: 3,
      section: 'vocab',
      question: 'If I had remembered their address, I ______ them a thank-you card.',
      vietnameseTranslation: 'Nếu tôi nhớ được địa chỉ của họ, tôi đã gửi cho họ một tấm thiệp cảm ơn rồi.',
      options: [
        { key: 'A', text: 'will send', vietnameseSub: 'điều kiện loại 1' },
        { key: 'B', text: 'would send', vietnameseSub: 'điều kiện loại 2' },
        { key: 'C', text: 'would have sended', vietnameseSub: 'sai dạng quá khứ phân từ của send' },
        { key: 'D', text: 'would have sent', vietnameseSub: 'would have + V3 (điều kiện loại 3 - đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. would have sent. Mệnh đề If chia ở quá khứ hoàn thành "had remembered", diễn tả giả định trái với quá khứ (điều kiện loại 3) -> Mệnh đề chính dùng "would have + V3" (would have sent).'
    },
    {
      id: 't12_v4',
      number: 4,
      section: 'vocab',
      question: 'Nguyễn Tử Quảng is the author of one of the first Vietnamese antivirus ______ – BKAV.',
      vietnameseTranslation: 'Nguyễn Tử Quảng là tác giả của một trong những phần mềm diệt virus đầu tiên của Việt Nam – BKAV.',
      options: [
        { key: 'A', text: 'hardware', vietnameseSub: 'phần cứng máy tính' },
        { key: 'B', text: 'software', vietnameseSub: 'phần mềm (antivirus software - đúng)' },
        { key: 'C', text: 'equipment', vietnameseSub: 'trang thiết bị' },
        { key: 'D', text: 'electronics', vietnameseSub: 'đồ điện tử' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. software. Cụm danh từ "antivirus software" (phần mềm diệt virus) chỉ chương trình phần mềm máy tính như BKAV.'
    },
    {
      id: 't12_v5',
      number: 5,
      section: 'vocab',
      question: 'If you ______ to the course regularly, they ______ you an IT certificate last year.',
      vietnameseTranslation: 'Nếu năm ngoái bạn đi học khóa đào tạo đều đặn, họ đã cấp cho bạn chứng chỉ Công nghệ thông tin rồi.',
      options: [
        { key: 'A', text: 'go / gave', vietnameseSub: 'sai thì' },
        { key: 'B', text: 'go / give', vietnameseSub: 'điều kiện loại 1' },
        { key: 'C', text: 'had gone / would have given', vietnameseSub: 'điều kiện loại 3 cho sự việc năm ngoái (đúng)' },
        { key: 'D', text: 'went / would give', vietnameseSub: 'điều kiện loại 2' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. had gone / would have given. Dấu hiệu thời gian trong quá khứ "last year" -> Câu điều kiện loại 3: If + had + V3 (had gone), S + would have + V3 (would have given).'
    },
    {
      id: 't12_v6',
      number: 6,
      section: 'vocab',
      question: 'They would have cut off the electricity last month if the bills ______.',
      vietnameseTranslation: 'Tháng trước họ đã cắt nguồn điện nếu như các hóa đơn không được thanh toán kịp thời.',
      options: [
        { key: 'A', text: 'had not be paid', vietnameseSub: 'sai ngữ pháp' },
        { key: 'B', text: 'had not been paid', vietnameseSub: 'thể bị động quá khứ hoàn thành (đúng)' },
        { key: 'C', text: 'had not been pay', vietnameseSub: 'chưa chia V3' },
        { key: 'D', text: 'had not paid', vietnameseSub: 'thể chủ động (hóa đơn không tự trả tiền)' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. had not been paid. Mệnh đề chính có "would have cut off" (điều kiện loại 3). Chủ ngữ "the bills" (hóa đơn) cần chia thể bị động: "had not been + V3/ed" (had not been paid).'
    },
    {
      id: 't12_v7',
      number: 7,
      section: 'vocab',
      question: 'I wish I ______ my address book when I went on holiday last summer.',
      vietnameseTranslation: 'Tôi ước gì mình đã không bỏ quên cuốn sổ ghi địa chỉ khi đi nghỉ mát vào mùa hè năm ngoái.',
      options: [
        { key: 'A', text: 'didn\'t forget', vietnameseSub: 'ước ở hiện tại' },
        { key: 'B', text: 'had not been forgotten', vietnameseSub: 'thể bị động' },
        { key: 'C', text: 'hadn\'t forgotten', vietnameseSub: 'quá khứ hoàn thành (ước cho quá khứ - đúng)' },
        { key: 'D', text: 'have not forgotten', vietnameseSub: 'hiện tại hoàn thành' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. hadn\'t forgotten. Diễn tả sự tiếc nuối cho một hành động xảy ra trong quá khứ ("when I went on holiday last summer"): S + wish + S + had(n\'t) + V3/ed.'
    },
    {
      id: 't12_v8',
      number: 8,
      section: 'vocab',
      question: 'I tried to call you, but your phone was ______ all the time.',
      vietnameseTranslation: 'Tôi đã cố gắng gọi cho bạn, nhưng số điện thoại của bạn lúc nào cũng bận máy.',
      options: [
        { key: 'A', text: 'hold on', vietnameseSub: 'giữ máy' },
        { key: 'B', text: 'engaged', vietnameseSub: 'máy bận, đường dây đang bận (đúng)' },
        { key: 'C', text: 'hang up', vietnameseSub: 'gác máy' },
        { key: 'D', text: 'connecting', vietnameseSub: 'đang kết nối' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. engaged. Trong giao tiếp điện thoại, tính từ "engaged" mang nghĩa là đường dây máy bận (the phone line was engaged / busy).'
    },
    {
      id: 't12_v9',
      number: 9,
      section: 'vocab',
      question: 'I\'ve met the man standing next to the printer before. I wish I ______ his name.',
      vietnameseTranslation: 'Tôi đã từng gặp người đàn ông đứng cạnh máy in trước đây rồi. Ước gì bây giờ tôi có thể nhớ được tên của ông ấy.',
      options: [
        { key: 'A', text: 'could remember', vietnameseSub: 'ước có khả năng ở hiện tại (could + V - đúng)' },
        { key: 'B', text: 'can remember', vietnameseSub: 'chưa lùi thì' },
        { key: 'C', text: 'remember', vietnameseSub: 'hiện tại đơn' },
        { key: 'D', text: 'will remember', vietnameseSub: 'tương lai đơn' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. could remember. Câu ước một khả năng ở thời điểm hiện tại: S + wish + S + could + V-inf.'
    },
    {
      id: 't12_v10',
      number: 10,
      section: 'vocab',
      question: 'Do not ______ the equipment when barefoot or wearing open sandals.',
      vietnameseTranslation: 'Tuyệt đối không vận hành thiết bị máy móc khi đang đi chân đất hoặc mang dép hở ngón.',
      options: [
        { key: 'A', text: 'download', vietnameseSub: 'tải xuống' },
        { key: 'B', text: 'print', vietnameseSub: 'in ấn' },
        { key: 'C', text: 'access', vietnameseSub: 'truy cập' },
        { key: 'D', text: 'operate', vietnameseSub: 'vận hành thiết bị (đúng)' },
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. operate. Quy tắc an toàn lao động điện tử: "operate the equipment" nghĩa là vận hành, bấm khởi động thiết bị máy móc.'
    }
  ],

  readingSignQuestions: [
    {
      id: 't12_s1',
      number: 11,
      section: 'signs',
      signText: 'It is forbidden to move computers from this room without permission from manager.',
      vietnameseSignTranslation: 'Nghiêm cấm di chuyển máy tính ra khỏi phòng này mà không có sự cho phép của quản lý.',
      question: 'What does it say?',
      options: [
        { key: 'A', text: 'You mustn\'t take the computers out of this room without asking the manager.', vietnameseSub: 'Bạn không được phép mang máy tính ra khỏi phòng này mà không hỏi xin quản lý (đúng).' },
        { key: 'B', text: 'You should check with the manager before using the computers in this room.', vietnameseSub: 'Bạn nên hỏi quản lý trước khi sử dụng máy tính trong phòng.' },
        { key: 'C', text: 'You must ask the manager for permission to use the computers into this room.', vietnameseSub: 'Bạn phải xin phép để mang máy tính vào phòng này.' },
        { key: 'D', text: 'You are allowed to move computers to manager\'s room.', vietnameseSub: 'Bạn được phép chuyển máy tính vào phòng quản lý.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. You mustn\'t take the computers out of this room without asking the manager. "It is forbidden to move computers... without permission" đồng nghĩa với "mustn\'t take the computers out... without asking".'
    },
    {
      id: 't12_s2',
      number: 12,
      section: 'signs',
      signText: 'From: Nina\nTo: Friends\nI\'m having my computer repaired, so I won\'t be able to receive e-mails for five days.\nPhone me 237702.\nNina',
      vietnameseSignTranslation: 'Người gửi: Nina\nNgười nhận: Các bạn\nMình đang đem máy tính đi sửa, vì vậy mình sẽ không thể nhận được thư điện tử trong 5 ngày tới.\nHãy gọi điện cho mình theo số 237702 nhé.\nNina',
      question: 'What does it say?',
      options: [
        { key: 'A', text: 'Nina is having problem with her computer, please call her to help her.', vietnameseSub: 'Nina đang gặp trục trặc máy tính, hãy gọi để giúp đỡ cô ấy.' },
        { key: 'B', text: 'Nina is doing a short course to learn how to repair her computer.', vietnameseSub: 'Nina đang tham gia một khóa học ngắn hạn để tự sửa máy tính.' },
        { key: 'C', text: 'Nina is mending her computer herself, so she can send e-mails.', vietnameseSub: 'Nina đang tự tay sửa máy tính của mình.' },
        { key: 'D', text: 'Nina\'s friends can\'t get in touch with her by e-mail for five days.', vietnameseSub: 'Bạn bè của Nina không thể liên lạc với cô ấy qua email trong 5 ngày tới (đúng).' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. Nina\'s friends can\'t get in touch with her by e-mail for five days. Thông điệp "won\'t be able to receive e-mails for five days" có nghĩa là bạn bè không thể gửi thư liên lạc qua email được trong thời gian này.'
    },
    {
      id: 't12_s3',
      number: 13,
      section: 'signs',
      signText: 'Exit – THIS DOOR MAY ONLY BE USED BY STAFF AFTER 5 PM.',
      vietnameseSignTranslation: 'Lối thoát – CỬA NÀY CHỈ ĐƯỢC PHÉP SỬ DỤNG BỞI NHÂN VIÊN SAU 5 GIỜ CHIỀU.',
      question: 'What does it say?',
      options: [
        { key: 'A', text: 'You must ask a member of staff to unlock this door.', vietnameseSub: 'Bạn phải nhờ một nhân viên mở khóa cánh cửa này.' },
        { key: 'B', text: 'Staff must leave the building by 5 p.m.', vietnameseSub: 'Nhân viên bắt buộc phải rời khỏi tòa nhà trước 5 giờ chiều.' },
        { key: 'C', text: 'You may use this door in the evening if you are staff here.', vietnameseSub: 'Bạn có thể sử dụng cánh cửa này vào buổi tối nếu bạn là nhân viên ở đây (đúng).' },
        { key: 'D', text: 'The door may be locked by a staff inside', vietnameseSub: 'Cánh cửa có thể bị khóa bởi nhân viên bên trong.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. You may use this door in the evening if you are staff here. "AFTER 5 PM" là khoảng thời gian buổi tối, và cửa "MAY ONLY BE USED BY STAFF" chỉ dành riêng cho nhân viên.'
    },
    {
      id: 't12_s4',
      number: 14,
      section: 'signs',
      signText: 'From: Mark\nTo: Ben\nYou left your laptop in my car. My brother will bring it to your house tomorrow.',
      vietnameseSignTranslation: 'Người gửi: Mark\nNgười nhận: Ben\nCậu để quên laptop ở trong xe của tớ. Ngày mai anh trai tớ sẽ mang nó trả tận nhà cho cậu nhé.',
      question: 'What does it say?',
      options: [
        { key: 'A', text: 'Mark borrowed Ben\'s laptop.', vietnameseSub: 'Mark đã mượn máy tính của Ben.' },
        { key: 'B', text: 'Mark\'s brother will return the laptop to Ben.', vietnameseSub: 'Anh trai của Mark sẽ đem trả lại chiếc laptop cho Ben (đúng).' },
        { key: 'C', text: 'Mark wants to use Ben\'s laptop on a journey.', vietnameseSub: 'Mark muốn sử dụng laptop của Ben trong chuyến đi.' },
        { key: 'D', text: 'Mark and his brother will go to Ben\'s house tomorrow.', vietnameseSub: 'Cả Mark và anh trai sẽ cùng đến nhà Ben vào ngày mai.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Mark\'s brother will return the laptop to Ben. Mark thông báo: "My brother will bring it to your house tomorrow" (anh trai tớ sẽ đem laptop trả qua nhà cậu).'
    },
    {
      id: 't12_s5',
      number: 15,
      section: 'signs',
      signText: 'PHOTOCOPYING – Serve yourself. Count number of copies. Pay assistant at till on way out.',
      vietnameseSignTranslation: 'DỊCH VỤ PHOTOCOPY – Khách tự phục vụ. Tự đếm số lượng bản in. Thanh toán cho nhân viên tại quầy thu ngân lúc ra về.',
      question: 'What does it say?',
      options: [
        { key: 'A', text: 'Do your photocopying and pay for it when you leave.', vietnameseSub: 'Tự photocopy và thanh toán tiền khi bạn ra về (đúng).' },
        { key: 'B', text: 'Put your money in the photocopier before you start to use it.', vietnameseSub: 'Bỏ tiền vào máy photocopy trước khi bấm nút sử dụng.' },
        { key: 'C', text: 'Tell an assistant how many photocopies you need.', vietnameseSub: 'Báo với nhân viên số lượng bản copy bạn cần in.' },
        { key: 'D', text: 'Pay in advance before you do your photocopying.', vietnameseSub: 'Phải trả tiền trước khi tiến hành photo.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Do your photocopying and pay for it when you leave. Khách tự photo ("Serve yourself") và thanh toán tại quầy khi rời khỏi quán ("Pay assistant at till on way out").'
    }
  ],

  readingPassageBTitle: 'HOW TECHNOLOGY REVOLUTIONIZES MODERN BUSINESS AND TRADE',
  readingPassageBTag: 'Passage B: Reading Comprehension',
  readingTonyPassage: `The world business and trade have become very fast, easier and more reliable because of the development and improvement of technology. You can now do business with a person who is very far from you without any difficulties. It has become easier to book railway tickets, bus tickets and even flights at the comfort of your home without having to move. The introduction of ATMs has made it very possible to withdraw money at anytime of the day. Also it has become easy to advertise through the internet and thereby promoting the business in a faster way.
Banks now fill data in the computer instead of doing it manually as they used to do in the old days. This makes it easier to find the name of the customer, address, email address, birth date, phone numbers and even the location. Also the clients can get a very quick access at their account balances by logging in to the bank's website. With the rise of computer technology, credit cards and other plastic money, it is very useful especially when one does not have cash at hand or when one is ordering online products. Communication between partners has been made easier, for example, the internet has brought email and chatting facilities. Instead of sending letters to respective destinations, it is very easy to send an email to many people at the same time.`,
  readingTonyTranslation: `Nền thương mại và hoạt động kinh doanh toàn cầu đã trở nên vô cùng nhanh chóng, thuận tiện và đáng tin cậy hơn nhờ vào sự tiến bộ vượt bậc của công nghệ. Giờ đây bạn có thể hợp tác kinh doanh với một đối tác ở cách xa nửa vòng trái đất mà không gặp phải bất kỳ trở ngại nào. Việc đặt vé tàu hỏa, vé xe khách và thậm chí vé máy bay đã trở nên hết sức dễ dàng ngay tại ngôi nhà tiện nghi của bạn mà chẳng cần phải đi lại. Sự ra đời của các cây ATM tự động đã giúp việc rút tiền mặt vào bất kỳ thời điểm nào trong ngày trở thành hiện thực. Thêm vào đó, việc quảng cáo tiếp thị qua mạng Internet đã mở ra phương thức xúc tiến thương mại thần tốc.
Các ngân hàng hiện nay lưu trữ dữ liệu hoàn toàn trên hệ thống máy tính thay vì phải ghi chép bằng sổ sách thủ công như những ngày xa xưa. Điều này giúp tra cứu tên tuổi khách hàng, địa chỉ, hòm thư điện tử, ngày sinh, số điện thoại và cả nơi cư trú một cách nhanh chóng. Khách hàng cũng có thể tra cứu số dư tài khoản ngay tức khắc bằng cách đăng nhập vào cổng thông tin điện tử của ngân hàng. Với sự phát triển của công nghệ máy tính, thẻ tín dụng và các loại tiền nhựa, chúng cực kỳ hữu ích khi bạn không có sẵn tiền mặt trong ví hoặc khi đặt mua hàng trực tuyến. Việc kết nối trao đổi giữa các đối tác kinh doanh cũng trở nên thông suốt hơn, đơn cử như Internet đã mang đến thư điện tử và các ứng dụng trò chuyện tức thì. Thay vì phải gửi những bức thư bưu điện riêng lẻ tới từng địa chỉ, giờ đây chỉ cần một cú nhấp chuột là có thể gửi email tới hàng loạt người cùng một lúc.`,

  readingTonyQuestions: [
    {
      id: 't12_r1',
      number: 16,
      section: 'passageB',
      question: 'What is the writer\'s main aim in writing the text?',
      options: [
        { key: 'A', text: 'To explain how technology has greatly improved business and trade.', vietnameseSub: 'Để giải thích công nghệ đã cải thiện vượt bậc thương mại và kinh doanh như thế nào (đúng).' },
        { key: 'B', text: 'To explain how to do business online.', vietnameseSub: 'Để giải thích cách thức tiến hành kinh doanh qua mạng.' },
        { key: 'C', text: 'To explain how to advertise through the internet.', vietnameseSub: 'Để hướng dẫn cách chạy quảng cáo trên mạng.' },
        { key: 'D', text: 'To explain how to make money transfer.', vietnameseSub: 'Để hướng dẫn cách chuyển khoản tiền bạc.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. To explain how technology has greatly improved business and trade. Câu mở đầu khẳng định luận điểm chính: "The world business and trade have become very fast, easier and more reliable because of the development and improvement of technology" và toàn bài đưa ra các dẫn chứng chứng minh.'
    },
    {
      id: 't12_r2',
      number: 17,
      section: 'passageB',
      question: 'What field is NOT mentioned in the passage?',
      options: [
        { key: 'A', text: 'Finance', vietnameseSub: 'Tài chính - Ngân hàng (có nhắc: Banks, ATMs, credit cards)' },
        { key: 'B', text: 'Marketing', vietnameseSub: 'Tiếp thị - Quảng cáo (có nhắc: advertise through the internet)' },
        { key: 'C', text: 'Education', vietnameseSub: 'Giáo dục - Đào tạo (hoàn toàn không được nhắc đến - đúng)' },
        { key: 'D', text: 'Communication', vietnameseSub: 'Truyền thông - Giao tiếp (có nhắc: email, chatting)' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. Education. Bài viết liệt kê ngân hàng tài chính (Finance), quảng cáo tiếp thị (Marketing), và trao đổi thông tin (Communication), nhưng hoàn toàn KHÔNG đề cập đến lĩnh vực Giáo dục (Education).'
    },
    {
      id: 't12_r3',
      number: 18,
      section: 'passageB',
      question: 'What does the word “manually” refer to?',
      options: [
        { key: 'A', text: 'By a machine', vietnameseSub: 'Bằng một cỗ máy' },
        { key: 'B', text: 'By hand', vietnameseSub: 'Bằng tay, thủ công (đúng)' },
        { key: 'C', text: 'By technology', vietnameseSub: 'Bằng công nghệ' },
        { key: 'D', text: 'By electricity', vietnameseSub: 'Bằng điện năng' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. By hand. Trạng từ "manually" đối lập với máy tính điện tử, nghĩa là làm việc thủ công bằng tay (by hand) như thời xưa.'
    },
    {
      id: 't12_r4',
      number: 19,
      section: 'passageB',
      question: 'What are examples of technology listed in the passage?',
      options: [
        { key: 'A', text: 'ATMs', vietnameseSub: 'Cây rút tiền tự động ATM' },
        { key: 'B', text: 'Computer', vietnameseSub: 'Máy vi tính' },
        { key: 'C', text: 'Internet', vietnameseSub: 'Mạng toàn cầu Internet' },
        { key: 'D', text: 'All are correct.', vietnameseSub: 'Tất cả các ví dụ trên đều đúng (đúng)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. All are correct. Cả ba phát minh công nghệ: ATMs, Computer và Internet đều được nêu cụ thể trong các đoạn văn.'
    },
    {
      id: 't12_r5',
      number: 20,
      section: 'passageB',
      question: 'What does the writer say about email?',
      options: [
        { key: 'A', text: 'It can be sent to many destinations.', vietnameseSub: 'Nó có thể gửi đồng thời tới nhiều người/điểm đến (đúng).' },
        { key: 'B', text: 'It won\'t be sent to wrong addresses.', vietnameseSub: 'Nó sẽ không bao giờ bị gửi nhầm địa chỉ.' },
        { key: 'C', text: 'It is easy to find through computer.', vietnameseSub: 'Nó rất dễ tìm kiếm trên máy tính.' },
        { key: 'D', text: 'It is suitable for all ages', vietnameseSub: 'Nó phù hợp cho mọi lứa tuổi.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. It can be sent to many destinations. Câu cuối cùng của bài nêu rõ ưu điểm của email: "it is very easy to send an email to many people at the same time".'
    }
  ],

  readingPassageCTitle: 'LAPTOPS AND THE FUTURE OF COMPUTING',
  readingPassageCTag: 'Passage C: Cloze Test',
  readingAnnaPassage: `I couldn't imagine a world without laptops. I use mine at home every day and it's also my main (1)______ to the outside world. And since it's so (2)______ it goes everywhere with me.
As an engineering student I need to do lots of research. As a result, I spend hours online (3)______ for information, and later I key in my assignments. Although I stay in most evenings, I'm never lonely because of all the ways I can keep in touch with friends: (4)______, instant messaging, Skype and Facebook.
Wonderful though laptops are, (5)______ moves on and that is why they could be even better. For instance, they can't always be connected to main (6)______ and for that reason more powerful (7)______ are needed.
Perhaps one day we'll be (8)______ with our laptops just by thinking, rather than through a (9)______ touchpad or mouse. Then we could store our thoughts, (10)______ them or even send them to other people.`,
  readingAnnaTranslation: `Tôi không thể nào hình dung nổi một thế giới thiếu vắng những chiếc máy tính xách tay. Tôi sử dụng chiếc laptop của mình ở nhà mỗi ngày và nó cũng là cầu nối chủ yếu đưa tôi đến với thế giới bên ngoài. Và bởi vì nó rất nhỏ gọn, nó luôn đồng hành cùng tôi trên mọi nẻo đường.
Là một sinh viên ngành kỹ thuật, tôi cần phải thực hiện rất nhiều nghiên cứu học tập. Hệ quả là tôi dành hàng giờ đồng hồ lướt mạng để tìm kiếm thông tin, rồi sau đó gõ bàn phím hoàn thành các bài tập lớn. Dù phần lớn các buổi tối tôi đều ở trong phòng, tôi chẳng bao giờ cảm thấy cô đơn nhờ có đủ mọi phương thức để giữ liên lạc với bạn bè: thư điện tử, tin nhắn nhanh tức thời, Skype và Facebook.
Dù laptop ngày nay đã vô cùng tuyệt vời, dòng chảy công nghệ vẫn luôn không ngừng tiến bước, và đó là lý do vì sao chúng sẽ còn phát triển ưu việt hơn nữa. Ví dụ, laptop không thể lúc nào cũng cắm vào nguồn điện lưới, và vì lý do đó những viên pin dung lượng bền bỉ hơn là điều rất cần thiết.
Có lẽ một ngày nào đó chúng ta sẽ tương tác với chiếc máy tính xách tay chỉ bằng suy nghĩ của não bộ, thay vì phải gõ qua bàn phím, bàn rê chuột cảm ứng hay con chuột quang. Khi đó chúng ta có thể lưu giữ dòng suy nghĩ, phân tích chúng hoặc thậm chí chia sẻ trực tiếp cho những người khác.`,

  readingAnnaQuestions: [
    {
      id: 't12_c1',
      number: 21,
      section: 'cloze',
      question: 'Choose the best word for blank (1):',
      options: [
        { key: 'A', text: 'connection', vietnameseSub: 'cầu nối, sự kết nối (main connection to the outside world - đúng)' },
        { key: 'B', text: 'connecting', vietnameseSub: 'dạng phân từ' },
        { key: 'C', text: 'connected', vietnameseSub: 'tính từ được kết nối' },
        { key: 'D', text: 'connective', vietnameseSub: 'có tính liên kết' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. connection. Cụm danh từ sau tính từ sở hữu và tính từ miêu tả: "my main connection to the outside world" (cầu nối liên lạc chính của tôi với thế giới bên ngoài).'
    },
    {
      id: 't12_c2',
      number: 22,
      section: 'cloze',
      question: 'Choose the best word for blank (2):',
      options: [
        { key: 'A', text: 'big', vietnameseSub: 'to lớn' },
        { key: 'B', text: 'heavy', vietnameseSub: 'nặng nề' },
        { key: 'C', text: 'small', vietnameseSub: 'nhỏ gọn, tiện lợi (đúng)' },
        { key: 'D', text: 'large', vietnameseSub: 'rộng lớn' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. small. Để giải thích lý do "it goes everywhere with me" (có thể mang đi khắp mọi nơi) thì chiếc máy tính xách tay phải nhỏ gọn ("so small").'
    },
    {
      id: 't12_c3',
      number: 23,
      section: 'cloze',
      question: 'Choose the best word for blank (3):',
      options: [
        { key: 'A', text: 'playing', vietnameseSub: 'chơi đùa' },
        { key: 'B', text: 'searching', vietnameseSub: 'tìm kiếm (searching for information - đúng)' },
        { key: 'C', text: 'to play', vietnameseSub: 'dạng to-infinitive' },
        { key: 'D', text: 'to search', vietnameseSub: 'dạng to-infinitive' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. searching. Cấu trúc: spend time doing something: "spend hours online searching for information" (dành hàng giờ tìm kiếm thông tin).'
    },
    {
      id: 't12_c4',
      number: 24,
      section: 'cloze',
      question: 'Choose the best word for blank (4):',
      options: [
        { key: 'A', text: 'letter', vietnameseSub: 'thư viết tay' },
        { key: 'B', text: 'fax', vietnameseSub: 'bản fax' },
        { key: 'C', text: 'email', vietnameseSub: 'thư điện tử email (đúng)' },
        { key: 'D', text: 'note', vietnameseSub: 'mảnh giấy ghi chú' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. email. Trong chuỗi liệt kê các công cụ liên lạc kỹ thuật số trực tuyến cùng với "instant messaging, Skype and Facebook", chỉ có "email" là thích hợp.'
    },
    {
      id: 't12_c5',
      number: 25,
      section: 'cloze',
      question: 'Choose the best word for blank (5):',
      options: [
        { key: 'A', text: 'technology', vietnameseSub: 'công nghệ (technology moves on - đúng)' },
        { key: 'B', text: 'technique', vietnameseSub: 'kỹ thuật cá nhân' },
        { key: 'C', text: 'advantage', vietnameseSub: 'lợi thế' },
        { key: 'D', text: 'machine', vietnameseSub: 'cỗ máy' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. technology. Thành ngữ chỉ sự phát triển không ngừng: "technology moves on" (công nghệ luôn tiến về phía trước).'
    },
    {
      id: 't12_c6',
      number: 26,
      section: 'cloze',
      question: 'Choose the best word for blank (6):',
      options: [
        { key: 'A', text: 'technology', vietnameseSub: 'công nghệ' },
        { key: 'B', text: 'batteries', vietnameseSub: 'pin' },
        { key: 'C', text: 'electricity', vietnameseSub: 'nguồn điện lưới (main electricity - đúng)' },
        { key: 'D', text: 'machine', vietnameseSub: 'máy móc' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. electricity. Cụm danh từ "main electricity" (nguồn điện lưới dân dụng cắm trực tiếp từ ổ cắm).'
    },
    {
      id: 't12_c7',
      number: 27,
      section: 'cloze',
      question: 'Choose the best word for blank (7):',
      options: [
        { key: 'A', text: 'technology', vietnameseSub: 'công nghệ' },
        { key: 'B', text: 'batteries', vietnameseSub: 'những viên pin sạc (powerful batteries - đúng)' },
        { key: 'C', text: 'electricity', vietnameseSub: 'điện năng' },
        { key: 'D', text: 'computer', vietnameseSub: 'máy vi tính' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. batteries. Khi không thể cắm vào nguồn điện lưới, máy tính xách tay cần những viên pin mạnh mẽ hơn: "more powerful batteries are needed".'
    },
    {
      id: 't12_c8',
      number: 28,
      section: 'cloze',
      question: 'Choose the best word for blank (8):',
      options: [
        { key: 'A', text: 'interacting', vietnameseSub: 'đang tương tác (we\'ll be interacting with - đúng)' },
        { key: 'B', text: 'interacte', vietnameseSub: 'sai chính tả' },
        { key: 'C', text: 'interaction', vietnameseSub: 'danh từ' },
        { key: 'D', text: 'interacted', vietnameseSub: 'quá khứ phân từ' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. interacting. Thì Tương lai tiếp diễn: "we\'ll be interacting with our laptops" (chúng ta sẽ tương tác với máy tính).'
    },
    {
      id: 't12_c9',
      number: 29,
      section: 'cloze',
      question: 'Choose the best word for blank (9):',
      options: [
        { key: 'A', text: 'disk', vietnameseSub: 'đĩa từ' },
        { key: 'B', text: 'USB', vietnameseSub: 'thẻ nhớ USB' },
        { key: 'C', text: 'keyboard', vietnameseSub: 'bàn phím máy tính (keyboard, touchpad or mouse - đúng)' },
        { key: 'D', text: 'email', vietnameseSub: 'thư điện tử' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. keyboard. Bộ ba thiết bị nhập liệu quen thuộc của máy tính xách tay: bàn phím, bàn rê cảm ứng và chuột ("keyboard, touchpad or mouse").'
    },
    {
      id: 't12_c10',
      number: 30,
      section: 'cloze',
      question: 'Choose the best word for blank (10):',
      options: [
        { key: 'A', text: 'look for', vietnameseSub: 'tìm kiếm' },
        { key: 'B', text: 'work', vietnameseSub: 'làm việc' },
        { key: 'C', text: 'find out', vietnameseSub: 'phát hiện ra' },
        { key: 'D', text: 'analyze', vietnameseSub: 'phân tích (analyze them - đúng)' },
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. analyze. Chuỗi hành động xử lý suy nghĩ của máy tính tương lai: lưu trữ suy nghĩ, phân tích suy nghĩ ("store our thoughts, analyze them or send them").'
    }
  ],

  sentenceTransformations: [
    {
      id: 't12_w1',
      number: 31,
      originalSentence: 'In spite of the bad weather, we will have a picnic this weekend.',
      vietnameseTranslation: 'Bất chấp thời tiết xấu, chúng tôi vẫn sẽ có một chuyến dã ngoại vào cuối tuần này.',
      prefix: 'Though',
      modelAnswer: 'Though the weather is bad, we will have a picnic this weekend.',
      vietnameseModelTranslation: 'Mặc dù thời tiết xấu, chúng tôi vẫn sẽ tổ chức chuyến đi dã ngoại vào cuối tuần này.',
      acceptedAnswers: [
        'the weather is bad, we will have a picnic this weekend.',
        'the weather is bad, we will have a picnic this weekend',
        'the weather may be bad, we will have a picnic this weekend.',
        'the weather may be bad, we will have a picnic this weekend'
      ],
      grammarPoint: 'Chuyển đổi từ In spite of + Noun phrase sang Though + S + V: In spite of the bad weather = Though the weather is bad.'
    },
    {
      id: 't12_w2',
      number: 32,
      originalSentence: 'He was driving very fast because he didn\'t know the road was icy.',
      vietnameseTranslation: 'Anh ấy đã lái xe rất nhanh bởi vì anh ấy không biết rằng mặt đường bị đóng băng trơn trượt.',
      prefix: 'If he had known',
      modelAnswer: 'If he had known the road was icy, he wouldn\'t have been driving so fast.',
      vietnameseModelTranslation: 'Nếu anh ấy biết mặt đường bị đóng băng, anh ấy đã không lái xe nhanh như vậy.',
      acceptedAnswers: [
        'the road was icy, he wouldn\'t have been driving so fast.',
        'the road was icy, he wouldn\'t have been driving so fast',
        'the road was icy, he wouldn\'t have driven so fast.',
        'the road was icy, he wouldn\'t have driven so fast',
        'the road was icy, he would not have driven so fast.',
        'the road was icy, he would not have driven so fast'
      ],
      grammarPoint: 'Câu điều kiện loại 3 cho tình huống trong quá khứ: If + S + had + V3/ed, S + would(n\'t) + have + V3/ed.'
    },
    {
      id: 't12_w3',
      number: 33,
      originalSentence: 'I haven\'t seen her since we left school.',
      vietnameseTranslation: 'Tôi đã không gặp lại cô ấy kể từ khi chúng tôi ra trường.',
      prefix: 'The last time I',
      modelAnswer: 'The last time I saw her was when we left school.',
      vietnameseModelTranslation: 'Lần cuối cùng tôi nhìn thấy cô ấy là khi chúng tôi rời khỏi mái trường.',
      acceptedAnswers: [
        'saw her was when we left school.',
        'saw her was when we left school',
        'saw her was since we left school.',
        'saw her was since we left school'
      ],
      grammarPoint: 'Chuyển từ Hiện tại hoàn thành phủ định S + haven\'t + V3 + since... sang The last time I saw her was when...'
    },
    {
      id: 't12_w4',
      number: 34,
      originalSentence: 'Summer is much hotter than winter.',
      vietnameseTranslation: 'Mùa hè nóng hơn nhiều so với mùa đông.',
      prefix: 'Winter',
      modelAnswer: 'Winter is much colder than summer.',
      vietnameseModelTranslation: 'Mùa đông lạnh hơn nhiều so với mùa hè.',
      acceptedAnswers: [
        'is much colder than summer.',
        'is much colder than summer',
        'is not as hot as summer.',
        'is not as hot as summer'
      ],
      grammarPoint: 'Chuyển đổi cặp tính từ đối lập trong so sánh hơn: A is hotter than B = B is colder than A.'
    },
    {
      id: 't12_w5',
      number: 35,
      originalSentence: '"Don\'t walk on the grass", the gardener said to us.',
      vietnameseTranslation: '“Không được giẫm lên cỏ”, người làm vườn nói với chúng tôi.',
      prefix: 'The gardener told',
      modelAnswer: 'The gardener told us not to walk on the grass.',
      vietnameseModelTranslation: 'Người làm vườn đã bảo chúng tôi không được giẫm lên cỏ.',
      acceptedAnswers: [
        'us not to walk on the grass.',
        'us not to walk on the grass'
      ],
      grammarPoint: 'Chuyển đổi câu mệnh lệnh phủ định trực tiếp sang gián tiếp: S + told + O + not to V.'
    }
  ],

  letterWriting: {
    prompt: 'Write a letter (about 120 words) to your friend/colleague/parents/relatives about an important invention that you think has positively influenced your life.\\nYour letter should include:\\n- What is the invention?\\n- What are its advantages?\\n- Why is it important to you?\\nNOTE: Write the body of the letter only. Do NOT write your name, your address and your signature in the letter!',
    vietnamesePrompt: 'Viết một lá thư (khoảng 120 từ) gửi cho bạn bè/đồng nghiệp/bố mẹ/người thân về một phát minh quan trọng mà bạn cho rằng đã tác động tích cực đến cuộc sống của bạn.\\nNội dung lá thư cần bao gồm:\\n- Đó là phát minh nào?\\n- Những ưu điểm nổi bật của nó là gì?\\n- Vì sao nó lại quan trọng đối với cá nhân bạn?\\nLƯU Ý: Chỉ viết phần thân lá thư. Không ghi họ tên, địa chỉ hoặc chữ ký cá nhân!',
    requiredWordCount: '100 - 140 words',
    sample1: {
      title: 'Bài mẫu 1: Chiếc điện thoại thông minh Smartphone (Tài liệu giáo trình)',
      content: `Dear Lan,

I want to tell you about an invention that has positively changed my life: the smartphone. I use it every day for many purposes such as studying, working and entertainment.

It has a lot of advantages. First, I can look up information, translate words and learn English online anywhere I go. Second, I can message or video call my family and friends for free. Besides, it is small and light, so I can carry it everywhere. I also use it to listen to music, take photos and pay bills.

For me, the smartphone is very important because it saves my time and money, and it keeps me close to the people I love. I can't imagine my life without it!

Write back soon.

Love,`
    },
    sample2: {
      title: 'Bài mẫu 2: Máy tính xách tay trong học tập CNTT (Phan Tấn Kiệt)',
      content: `Dear Tom,

How are you doing? Today I would like to write about an invention that has profoundly transformed my life: the personal laptop. As an Information Technology student at Mien Trung University of Civil Engineering, it is an indispensable tool in my everyday routine.

The laptop offers immense benefits. Firstly, it allows me to write computer programs, compile software, and research technical documentation from anywhere. Secondly, its portable design and robust battery enable seamless remote collaboration with classmates on group software projects. Furthermore, I use it to hone my English listening skills and unwind with relaxing music after long lectures.

To me, this device is not just a gadget, but a gateway to endless knowledge and my future engineering career.

Warm regards,`
    }
  },

  speakingCard: {
    cardTitle: 'SPEAKING CARD – No.12: Talk about the advantages of using the Internet',
    cardSubtitle: 'Nói về những lợi ích của việc sử dụng mạng Internet trong đời sống',
    questions: [
      { q: 'What are advantages of Internet for children?', vi: 'Những lợi ích của mạng Internet đối với trẻ em là gì?' },
      { q: 'What are advantages of Internet for adults?', vi: 'Những lợi ích của mạng Internet đối với người trưởng thành là gì?' },
      { q: 'What does Internet bring you?', vi: 'Mạng Internet đem lại những giá trị gì cho chính bản thân bạn?' }
    ],
    sampleAnswers: [
      {
        speaker: 'Bài mẫu 1 (Theo tài liệu giáo trình)',
        textEn: `There are a number of clear advantages of using the Internet, and it is helpful to people of all ages.
For children, the Internet provides a vast library of knowledge. They can learn many things from storytelling or interactive quiz games online.
For adults, the Internet is also a wonderful resource of information about world news, the environment, politics and economics. They use it to connect with their clients, set up virtual meetings, and transfer documents, even transferring money online. For entrepreneurs, the Internet is a vital means of business. It also provides endless types of entertainment, like the latest movies, music and fashion shows.
For me, I like using the Internet because it is affordable and versatile. Through it I can send e-mails, get the latest news, and download necessary research documents. I mostly learn and practise English online every day.`,
        textVi: `Việc sử dụng mạng Internet mang lại vô số lợi ích rõ ràng và thiết thực cho mọi lứa tuổi trong xã hội.
Đối với trẻ em, Internet mở ra một kho tàng tri thức vô tận. Các em có thể học hỏi thêm nhiều kiến thức bổ ích thông qua những mẩu chuyện kể hoạt hình hoặc các trò chơi đố vui trực tuyến.
Đối với người lớn, Internet là một nguồn thông tin tuyệt vời cập nhật tin tức thời sự toàn cầu, môi trường, chính trị và kinh tế. Họ sử dụng nó để kết nối đối tác khách hàng, thiết lập các cuộc họp trực tuyến, chia sẻ tài liệu và giao dịch chuyển tiền điện tử. Với các doanh nhân, Internet là công cụ kinh doanh sống còn. Nó còn mang đến muôn vàn hình thức giải trí phong phú như xem phim mới, nghe nhạc và theo dõi các chương trình thời trang.
Đối với cá nhân tôi, tôi thích dùng Internet vì nó vừa tiết kiệm chi phí vừa đa năng. Nhờ có mạng, tôi có thể gửi thư điện tử, cập nhật tin tức công nghệ và tải về các tài liệu học tập cần thiết. Tôi chủ yếu dành thời gian để học tập và rèn luyện kỹ năng tiếng Anh trực tuyến mỗi ngày.`
      },
      {
        speaker: 'Bài mẫu 2 (Theo ngữ cảnh sinh viên CNTT - Phan Tấn Kiệt)',
        textEn: `In our digital era, the Internet serves as the backbone of modern society and individual development.
For young learners, online educational platforms spark curiosity with interactive coding tutorials and digital science lessons.
For working professionals, cloud platforms and e-commerce empower cross-border business transactions and instant remote collaboration.
From my own perspective as an IT major at Mien Trung University of Civil Engineering, the Internet is an essential learning laboratory. It grants me immediate access to open-source programming frameworks, online developer communities, and specialized English preparation apps. Without the Internet, pursuing technological innovation in today's interconnected world would be practically impossible.`,
        textVi: `Trong kỷ nguyên số hóa hiện nay, mạng Internet đóng vai trò là xương sống kết nối toàn xã hội và phát triển năng lực mỗi cá nhân.
Đối với thế hệ trẻ nhỏ, các nền tảng giáo dục trực tuyến kích thích niềm đam mê khám phá thông qua các bài học lập trình sinh động và khoa học thực nghiệm.
Đối với người đi làm, điện toán đám mây và thương mại điện tử tạo đòn bẩy cho các giao dịch xuyên biên giới và hợp tác làm việc từ xa tức thời.
Dưới góc nhìn của một sinh viên Công nghệ thông tin tại Trường Đại học Xây dựng Miền Trung, Internet chính là một phòng thí nghiệm học tập không thể thiếu. Nó giúp tôi tiếp cận ngay lập tức với các mã nguồn mở, cộng đồng kỹ sư công nghệ toàn cầu và các ứng dụng ôn luyện tiếng Anh chuyên sâu. Nếu thiếu đi Internet, việc theo đuổi sự sáng tạo công nghệ trong thế giới kết nối hôm nay gần như là điều bất khả thi.`
      }
    ]
  },

  listeningPartA: [
    { number: 1, question: 'Which of Miranda\'s things will Lucy be able to use?', options: ['A: Tennis racket', 'B: Box of tennis balls', 'C: Trainers'], answer: 'A', note: 'Phán đoán đồ vật của Miranda mà Lucy mượn dùng' },
    { number: 2, question: 'What can\'t the woman find?', options: ['A: Scissors', 'B: Paintbrush', 'C: Hammer'], answer: 'A', note: 'Phán đoán dụng cụ người phụ nữ không tìm thấy' },
    { number: 3, question: 'Which ring has the woman lost?', options: ['A: Ring with a large stone and two small stones', 'B: Square stone with small stones around', 'C: Ring with three square stones'], answer: 'A', note: 'Phán đoán chiếc nhẫn người phụ nữ đánh rơi' },
    { number: 4, question: 'What time did the girl arrive?', options: ['A: 07:15', 'B: 07:45', 'C: 08:15'], answer: 'B', note: 'Phán đoán thời gian bạn nữ đến nơi' },
    { number: 5, question: 'What will be on television at 10 o\'clock this evening?', options: ['A: Football match', 'B: Fish / dolphin documentary film', 'C: Live music concert'], answer: 'B', note: 'Phán đoán chương trình phát sóng lúc 10 giờ tối' },
    { number: 6, question: 'Where will the party be?', options: ['A: Inside a dance hall', 'B: Outdoor stage in park', 'C: Family living room'], answer: 'A', note: 'Phán đoán địa điểm tổ chức bữa tiệc' },
    { number: 7, question: 'What did the man buy?', options: ['A: Fresh grapes and carton of juice', 'B: Grapes and box of strawberries', 'C: Strawberries and bottle of juice'], answer: 'A', note: 'Phán đoán món đồ người đàn ông đã mua' }
  ],

  listeningPartB: {
    title: 'HOLIDAYS IN NORTHUMBERLAND (Listen and fill in the missing information)',
    items: [
      { gap: 1, text: 'Useful information – Read Peter Green\'s book called "(1) ______ around Northumberland"', answer: 'Cycling' },
      { gap: 2, text: 'Lots of things to see, for example (2) ______', answer: 'castles' },
      { gap: 3, text: 'Accommodation in flats, hotels... Best time to go is (3) ______', answer: 'May' },
      { gap: 4, text: 'Bike Hire – One week: £35; Two weeks: (4) £ ______', answer: '60' },
      { gap: 5, text: 'Local Event – June: Food Festival; August: International festival of (5) ______', answer: 'music' }
    ],
    note: 'Lưu ý: Các câu hỏi điền từ vào chỗ trống dựa trên bài giới thiệu cẩm nang kỳ nghỉ tại Northumberland.'
  }
};

// Ghi ra file data_topic12.js
const fileContent = `// TOPIC 12: TECHNOLOGY - Dữ liệu đề thi và tài liệu học tập
// Được đồng bộ tự động chuẩn theo giáo trình Đại học Xây dựng Miền Trung
const EXAM_DATA_TOPIC12 = ${JSON.stringify(topic12Data, null, 2)};

if (typeof window !== 'undefined') {
  window.EXAM_DATA_TOPIC12 = EXAM_DATA_TOPIC12;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA_TOPIC12;
}
`;

fs.writeFileSync('data_topic12.js', fileContent, 'utf8');
console.log('✅ Created data_topic12.js successfully! Length:', fileContent.length);
