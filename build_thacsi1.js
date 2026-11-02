// Script tạo tự động dữ liệu Đề Thạc Sĩ 2025 (Đợt 2) - Mã đề 01
// BỘ XÂY DỰNG - TRƯỜNG ĐẠI HỌC XÂY DỰNG MIỀN TRUNG
const fs = require('fs');

const thacsi1Data = {
  topicId: 'thacsi1',
  topicTitle: 'ĐỀ THI THẠC SĨ 2025 (ĐỢT 2) – MÃ ĐỀ 01',
  topicSubtitle: 'Đánh giá năng lực Ngoại ngữ đầu vào Trình độ Thạc sĩ – ĐH Xây dựng Miền Trung (90 phút)',
  examDurationMinutes: 90,

  // Sổ tay từ vựng học tập chất lượng cao trích xuất từ đề thi
  vocabulary: [
    { word: 'racket', ipa: '/ˈrækɪt/', pos: 'n.', meaning: 'cây vợt (tennis, cầu lông)', example: 'Djokovic celebrated his victory by throwing his racket into the crowd.' },
    { word: 'private detective', ipa: '/ˈpraɪvət dɪˈtektɪv/', pos: 'n. phr.', meaning: 'thám tử tư', example: 'She hired a private detective to uncover the truth about her partner.' },
    { word: 'competitive salary', ipa: '/kəmˈpetətɪv ˈsæləri/', pos: 'n. phr.', meaning: 'mức lương cạnh tranh / hấp dẫn', example: 'The international company offers a competitive salary and great benefits.' },
    { word: 'draw (drew - drawn)', ipa: '/drɔː/', pos: 'v.', meaning: 'hòa (tỷ số trận đấu)', example: 'Liverpool drew Arsenal 3-3 in an exciting match.' },
    { word: 'practise / practice', ipa: '/ˈpræktɪs/', pos: 'v.', meaning: 'luyện tập, rèn luyện', example: 'Do you practise the piano for two hours every day?' },
    { word: 'spouse', ipa: '/spaʊs/', pos: 'n.', meaning: 'vợ hoặc chồng, bạn đời', example: 'Employees are invited to attend the annual party with their spouses.' },
    { word: 'mend', ipa: '/mend/', pos: 'v.', meaning: 'sửa chữa, vá víu (= repair)', example: 'We will not mend computers bought from other shops.' },
    { word: 'out of order', ipa: '/aʊt əv ˈɔːdər/', pos: 'adj. phr.', meaning: 'bị hỏng (máy móc)', example: 'If the ticket machine is out of order, please pay staff on the train.' },
    { word: 'librarian', ipa: '/laɪˈbreəriən/', pos: 'n.', meaning: 'người thủ thư, cán bộ thư viện', example: 'Please show the librarian all books when you leave the library.' },
    { word: 'make redundant', ipa: '/meɪk rɪˈdʌndənt/', pos: 'v. phr.', meaning: 'sa thải vì dư thừa nhân sự', example: 'He was made redundant after working ten years at the company.' },
    { word: 'multinational corporation', ipa: '/ˌmʌltiˈnæʃnəl ˌkɔːpəˈreɪʃn/', pos: 'n. phr.', meaning: 'tập đoàn đa quốc gia', example: 'The company was taken over by a huge multinational corporation.' },
    { word: 'generous salary', ipa: '/ˈdʒenərəs ˈsæləri/', pos: 'n. phr.', meaning: 'mức lương hậu hĩnh', example: 'He previously enjoyed a comfortable job with a generous salary.' },
    { word: 'annual leave', ipa: '/ˈænjuəl liːv/', pos: 'n. phr.', meaning: 'nghỉ phép hàng năm (hưởng lương)', example: 'Full-time employees receive twenty days of annual leave each year.' },
    { word: 'classified ads', ipa: '/ˈklæsɪfaɪd ædz/', pos: 'n. phr.', meaning: 'mục rao vặt (trên báo chí)', example: 'Every morning I searched the Classified Ads for suitable job openings.' },
    { word: 'turn down', ipa: '/tɜːn daʊn/', pos: 'phr. v.', meaning: 'từ chối (lời mời, cơ hội)', example: 'I am so glad I did not turn down my friend’s job offer.' },
    { word: 'partner', ipa: '/ˈpɑːtnər/', pos: 'n.', meaning: 'đối tác, người đồng sáng lập', example: 'My friend and I are now business partners in the best cake shop in town.' },
    { word: 'cottage', ipa: '/ˈkɒtɪdʒ/', pos: 'n.', meaning: 'nhà tranh, nhà nhỏ vùng nông thôn', example: 'Ford Duncan lives in a beautiful round cottage built by his parents.' },
    { word: 'ground floor', ipa: '/ˌɡraʊnd ˈflɔːr/', pos: 'n. phr.', meaning: 'tầng trệt', example: 'The ground floor is the largest level, containing three spacious rooms.' },
    { word: 'terrace', ipa: '/ˈterəs/', pos: 'n.', meaning: 'sân hiên, sân thượng', example: 'The dining room opens to the terrace where the family can relax.' },
    { word: 'well-equipped', ipa: '/ˌwel ɪˈkwɪpt/', pos: 'adj.', meaning: 'được trang bị đầy đủ, tiện nghi', example: 'The modern kitchen is well-equipped with a dishwasher and an oven.' },
    { word: 'dishwasher', ipa: '/ˈdɪʃwɒʃər/', pos: 'n.', meaning: 'máy rửa chén bát', example: 'Put your dirty bowls and plates into the dishwasher after dinner.' },
    { word: 'well-organized', ipa: '/ˌwel ˈɔːɡənaɪzd/', pos: 'adj.', meaning: 'ngăn nắp, có tổ chức', example: 'He keeps a well-organized home office on the second floor.' },
    { word: 'cosy / cozy', ipa: '/ˈkəʊzi/', pos: 'adj.', meaning: 'ấm cúng, thoải mái', example: 'The house has central heating and feels very warm and cosy in winter.' },
    { word: 'corner', ipa: '/ˈkɔːnər/', pos: 'n.', meaning: 'góc tường, góc phố', example: 'Because all the rooms are round, there are no sharp corners in the cottage.' },
    { word: 'compared to', ipa: '/kəmˈpeəd tuː/', pos: 'prep. phr.', meaning: 'so sánh với', example: 'The round ceilings seem quite small compared to the wide floors.' },
    { word: 'be interested in', ipa: '/bi ˈɪntrəstɪd ɪn/', pos: 'v. phr.', meaning: 'thích thú, quan tâm đến', example: 'I am interested in playing card games with my children at the weekend.' },
    { word: 'be used to + V-ing', ipa: '/bi juːst tuː/', pos: 'v. phr.', meaning: 'đã quen với việc gì', example: 'I am used to getting up early at five o\'clock every morning.' }
  ],

  // I. VOCABULARY & GRAMMAR (10 câu - Questions 1-10)
  vocabularyQuestions: [
    {
      id: 'ts1_q1',
      number: 1,
      section: 'vocab',
      question: 'Each person in the room turned ______ head to the front when the teacher entered.',
      vietnameseTranslation: 'Mỗi người trong phòng đều quay đầu về phía trước khi giáo viên bước vào lớp.',
      options: [
        { key: 'A', text: 'me', vietnameseSub: 'tôi (đại từ tân ngữ)' },
        { key: 'B', text: 'their', vietnameseSub: 'của họ (văn nói / hiện đại)' },
        { key: 'C', text: 'his', vietnameseSub: 'của người đó (chuẩn ngữ pháp số ít theo đề thi)' },
        { key: 'D', text: 'our', vietnameseSub: 'của chúng tôi' }
      ],
      correctAnswer: 'C',
      explanation: 'Chính xác, đáp án chuẩn của đề thi là C. his! Vì "Each person" (mỗi người) là chủ ngữ số ít (singular). Theo quy tắc ngữ pháp tiếng Anh học thuật chuẩn mực trong các bài thi đại học/thạc sĩ, khi thay thế cho chủ ngữ số ít chưa rõ giới tính (Each person, Everyone, Somebody...), ta dùng tính từ sở hữu số ít là "his" (hoặc "his or her"). (Trong văn nói giao tiếp thân mật hiện đại người ta hay dùng "their", nhưng trong các đề thi ngữ pháp chuẩn thì "his" là đáp án chính thức chính xác).'
    },
    {
      id: 'ts1_q2',
      number: 2,
      section: 'vocab',
      question: 'She ______ to become a famous fashion designer.',
      vietnameseTranslation: 'Cô ấy muốn trở thành một nhà thiết kế thời trang nổi tiếng.',
      options: [
        { key: 'A', text: 'want', vietnameseSub: 'muốn (nguyên mẫu không chia)' },
        { key: 'B', text: 'is wanting', vietnameseSub: 'đang muốn (tiếp diễn - sai ngữ pháp)' },
        { key: 'C', text: 'wants', vietnameseSub: 'muốn (Hiện tại đơn số ít - đúng)' },
        { key: 'D', text: 'wanting', vietnameseSub: 'dạng V-ing đứng một mình không có to be' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. wants. Động từ "want" là động từ chỉ trạng thái (stative verb) thể hiện mong muốn nên không dùng ở thì tiếp diễn. Với chủ ngữ ngôi thứ 3 số ít "She", động từ chia ở thì Hiện tại đơn bằng cách thêm "s" -> "wants".'
    },
    {
      id: 'ts1_q3',
      number: 3,
      section: 'vocab',
      question: 'In Australian Open Tennis Final 2015, Djokovic celebrated the win by throwing his ______ into the crowd.',
      vietnameseTranslation: 'Trong trận chung kết giải Quần vợt Úc Mở rộng 2015, Djokovic đã ăn mừng chiến thắng bằng cách ném cây vợt của mình vào đám đông khán giả.',
      options: [
        { key: 'A', text: 'racket', vietnameseSub: 'cây vợt tennis / cầu lông' },
        { key: 'B', text: 'helmet', vietnameseSub: 'mũ bảo hiểm' },
        { key: 'C', text: 'swimsuit', vietnameseSub: 'đồ bơi' },
        { key: 'D', text: 'court', vietnameseSub: 'sân bóng tennis' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. racket (cây vợt tennis). Novak Djokovic là vận động viên quần vợt chuyên nghiệp hàng đầu thế giới, sau khi vô địch Australian Open 2015 anh đã ném cây vợt (racket) lên khán đài để ăn mừng cùng cổ động viên.'
    },
    {
      id: 'ts1_q4',
      number: 4,
      section: 'vocab',
      question: 'She thinks that her spouse is cheating and she wants to hire a private ______ to find out the truth.',
      vietnameseTranslation: 'Cô ấy nghĩ rằng người bạn đời của mình đang ngoại tình và cô ấy muốn thuê một thám tử tư để tìm ra sự thật.',
      options: [
        { key: 'A', text: 'physicist', vietnameseSub: 'nhà vật lý học' },
        { key: 'B', text: 'detective', vietnameseSub: 'thám tử (private detective: thám tử tư)' },
        { key: 'C', text: 'psychologist', vietnameseSub: 'nhà tâm lý học' },
        { key: 'D', text: 'explorer', vietnameseSub: 'nhà thám hiểm' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. detective. Cụm từ "private detective" nghĩa là thám tử tư (người được thuê để điều tra bí mật nhằm tìm kiếm chứng cứ).'
    },
    {
      id: 'ts1_q5',
      number: 5,
      section: 'vocab',
      question: '______ the piano for two hours every day?',
      vietnameseTranslation: 'Bạn có luyện tập đàn piano hai tiếng mỗi ngày không?',
      options: [
        { key: 'A', text: 'Do you practise', vietnameseSub: 'Hiện tại đơn câu hỏi đảo trợ động từ Do' },
        { key: 'B', text: 'Are you practising', vietnameseSub: 'Hiện tại tiếp diễn' },
        { key: 'C', text: 'Is you practise', vietnameseSub: 'Sai ngữ pháp to be với you' },
        { key: 'D', text: 'Do you practicing', vietnameseSub: 'Sai cấu trúc Do + V-ing' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. Do you practise. Trạng từ tần suất "every day" (mỗi ngày) chỉ thói quen thường xuyên nên sử dụng thì Hiện tại đơn. Cấu trúc câu hỏi: Do + S + V(nguyên mẫu)? -> Do you practise.'
    },
    {
      id: 'ts1_q6',
      number: 6,
      section: 'vocab',
      question: 'Sarah enjoys watching films that scare her, if ______ are well made.',
      vietnameseTranslation: 'Sarah thích xem những bộ phim làm cô ấy sợ hãi, nếu chúng được sản xuất tốt.',
      options: [
        { key: 'A', text: 'we', vietnameseSub: 'chúng tôi' },
        { key: 'B', text: 'they', vietnameseSub: 'chúng (đại từ thay thế cho films)' },
        { key: 'C', text: 'there', vietnameseSub: 'ở đó / có' },
        { key: 'D', text: 'she', vietnameseSub: 'cô ấy' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. they. Mệnh đề điều kiện "if they are well made" cần đại từ chủ ngữ "they" để thay thế cho danh từ số nhiều "films" ở vế trước.'
    },
    {
      id: 'ts1_q7',
      number: 7,
      section: 'vocab',
      question: 'Liverpool ______ Arsenal 3-3 to remain in the middle of the standings after five rounds with nine points.',
      vietnameseTranslation: 'Liverpool đã hòa Arsenal với tỷ số 3-3 để tiếp tục đứng ở giữa bảng xếp hạng sau năm vòng đấu với 9 điểm.',
      options: [
        { key: 'A', text: 'won', vietnameseSub: 'đã thắng' },
        { key: 'B', text: 'drew', vietnameseSub: 'đã hòa (draw - drew - drawn)' },
        { key: 'C', text: 'lost', vietnameseSub: 'đã thua' },
        { key: 'D', text: 'scored', vietnameseSub: 'đã ghi bàn' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. drew. Tỷ số 3-3 là một kết quả hòa (draw). Ở thì quá khứ đơn, động từ "draw" biến đổi thành "drew": "Liverpool drew Arsenal 3-3" (Liverpool đã hòa Arsenal 3-3).'
    },
    {
      id: 'ts1_q8',
      number: 8,
      section: 'vocab',
      question: 'Timmy and Claire ______ quite well at school at the moment.',
      vietnameseTranslation: 'Timmy và Claire hiện tại đang học tập khá tốt ở trường.',
      options: [
        { key: 'A', text: 'does', vietnameseSub: 'chia số ít' },
        { key: 'B', text: 'do', vietnameseSub: 'Hiện tại đơn' },
        { key: 'C', text: 'are doing', vietnameseSub: 'Hiện tại tiếp diễn số nhiều' },
        { key: 'D', text: 'is doing', vietnameseSub: 'Hiện tại tiếp diễn số ít' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. are doing. Trạng ngữ thời gian "at the moment" (ngay lúc này, thời điểm hiện tại) là dấu hiệu nhận biết của thì Hiện tại tiếp diễn (S + am/is/are + V-ing). Chủ ngữ gồm hai người "Timmy and Claire" (số nhiều) nên dùng "are doing".'
    },
    {
      id: 'ts1_q9',
      number: 9,
      section: 'vocab',
      question: 'Maria prefers serious films that ______ about people and relationships.',
      vietnameseTranslation: 'Maria thích những bộ phim chính kịch nghiêm túc nói về con người và các mối quan hệ.',
      options: [
        { key: 'A', text: 'are', vietnameseSub: 'động từ to be số nhiều' },
        { key: 'B', text: 'is', vietnameseSub: 'động từ to be số ít' },
        { key: 'C', text: 'am', vietnameseSub: 'to be đi với I' },
        { key: 'D', text: 'be', vietnameseSub: 'dạng nguyên mẫu' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. are. Đại từ quan hệ "that" thay thế cho tiền ngữ danh từ số nhiều "serious films", do đó động từ to be trong mệnh đề quan hệ phải chia số nhiều là "are".'
    },
    {
      id: 'ts1_q10',
      number: 10,
      section: 'vocab',
      question: 'English123 centre offers a competitive ______ and a friendly working environment.',
      vietnameseTranslation: 'Trung tâm English123 đưa ra mức lương cạnh tranh và một môi trường làm việc thân thiện.',
      options: [
        { key: 'A', text: 'salary', vietnameseSub: 'tiền lương (competitive salary: lương cạnh tranh)' },
        { key: 'B', text: 'strike', vietnameseSub: 'cuộc bãi công, đình công' },
        { key: 'C', text: 'contract', vietnameseSub: 'hợp đồng' },
        { key: 'D', text: 'application', vietnameseSub: 'đơn xin việc' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. salary. Trong tiếng Anh tuyển dụng, "competitive salary" là cụm từ cố định chỉ mức lương cạnh tranh, hấp dẫn so với mặt bằng chung thị trường.'
    }
  ],

  // II. READING SIGNS & NOTICES (5 câu - Questions 11-15)
  readingSignQuestions: [
    {
      id: 'ts1_rs1',
      number: 11,
      section: 'reading_sign',
      signText: 'We only repair computers which were bought here',
      signType: 'notice',
      question: 'What does it say? Choose the best answer.',
      vietnameseTranslation: 'Biển báo: "Chúng tôi chỉ sửa chữa những máy tính được mua tại đây". Ý nghĩa: Cửa hàng sẽ không sửa máy tính mua từ những nơi khác.',
      options: [
        { key: 'A', text: 'Computers bought here never need repairing.', vietnameseSub: 'Máy tính mua ở đây không bao giờ cần sửa chữa.' },
        { key: 'B', text: 'We will not mend computers bought from other shops.', vietnameseSub: 'Chúng tôi sẽ không sửa chữa máy tính mua từ các cửa hàng khác.' },
        { key: 'C', text: 'Bring your computer here for repair.', vietnameseSub: 'Hãy mang máy tính của bạn đến đây để sửa chữa.' },
        { key: 'D', text: 'We charge to repair computers not bought here.', vietnameseSub: 'Chúng tôi tính phí khi sửa máy tính không mua ở đây.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Động từ "mend" đồng nghĩa với "repair" (sửa chữa). Cửa hàng thông báo chỉ nhận sửa máy tính mua tại cửa hàng này ("bought here"), đồng nghĩa với việc họ sẽ không sửa máy tính mua từ những cửa hàng khác ("We will not mend computers bought from other shops").'
    },
    {
      id: 'ts1_rs2',
      number: 12,
      section: 'reading_sign',
      signText: 'If the ticket machine is out of order,\nplease pay staff on the train.',
      signType: 'warning',
      question: 'What does it say? Choose the best answer.',
      vietnameseTranslation: 'Thông báo: "Nếu máy bán vé tự động bị hỏng, vui lòng thanh toán cho nhân viên trên tàu". Ý nghĩa: Có một chiếc máy bán vé được đặt tại địa điểm này.',
      options: [
        { key: 'A', text: 'You can only buy tickets from a member of staff.', vietnameseSub: 'Bạn chỉ có thể mua vé từ một nhân viên.' },
        { key: 'B', text: 'There is a ticket machine in this place.', vietnameseSub: 'Có một chiếc máy bán vé tại địa điểm này.' },
        { key: 'C', text: 'You must always buy a ticket on the train.', vietnameseSub: 'Bạn luôn luôn phải mua vé trên tàu.' },
        { key: 'D', text: 'Call staff if the ticket machine is out of order.', vietnameseSub: 'Hãy gọi nhân viên nếu máy bán vé bị hỏng.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Câu điều kiện "If the ticket machine is out of order..." (Nếu máy bán vé bị hỏng...) khẳng định ngầm định rằng tại nhà ga/điểm chờ này có trang bị máy bán vé tự động (There is a ticket machine in this place). Hành khách chỉ trả tiền cho nhân viên trên tàu khi máy này bị hỏng.'
    },
    {
      id: 'ts1_rs3',
      number: 13,
      section: 'reading_sign',
      signText: 'Keep this door locked when room not in use.',
      signType: 'notice',
      question: 'What does it say? Choose the best answer.',
      vietnameseTranslation: 'Biển báo: "Hãy khóa cửa này khi phòng không được sử dụng". Ý nghĩa: Khóa căn phòng lại mỗi khi không có ai đang dùng.',
      options: [
        { key: 'A', text: 'This room cannot be used at present.', vietnameseSub: 'Căn phòng này hiện tại không thể sử dụng.' },
        { key: 'B', text: 'Keep the key to this door in the room.', vietnameseSub: 'Hãy để chìa khóa cửa này ở trong phòng.' },
        { key: 'C', text: 'This door must always be kept locked.', vietnameseSub: 'Cửa này luôn luôn phải được khóa.' },
        { key: 'D', text: 'Lock the room when it is not being used.', vietnameseSub: 'Hãy khóa phòng lại khi nó không được sử dụng.' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. "when room not in use" nghĩa là "khi phòng không được sử dụng" = "when it is not being used". Cụm "Keep this door locked" tương đương mệnh lệnh "Lock the room". Do đó đáp án chính xác là D.'
    },
    {
      id: 'ts1_rs4',
      number: 14,
      section: 'reading_sign',
      signText: 'Please show the librarian all books\nwhen you leave the library',
      signType: 'info',
      question: 'What does it say? Choose the best answer.',
      vietnameseTranslation: 'Nội quy: "Vui lòng cho thủ thư xem tất cả sách khi bạn rời khỏi thư viện". Ý nghĩa: Người thủ thư cần kiểm tra sách của bạn trước khi bạn ra ngoài.',
      options: [
        { key: 'A', text: 'The librarian will show you where to put your books.', vietnameseSub: 'Thủ thư sẽ chỉ cho bạn nơi để sách.' },
        { key: 'B', text: 'Return your books before you leave the library.', vietnameseSub: 'Hãy trả lại sách trước khi bạn rời thư viện.' },
        { key: 'C', text: 'The librarian needs to see your books before you go.', vietnameseSub: 'Người thủ thư cần xem sách của bạn trước khi bạn đi.' },
        { key: 'D', text: 'Make sure you take all your books with you.', vietnameseSub: 'Hãy đảm bảo bạn mang theo tất cả sách của mình.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. "show the librarian all books when you leave" nghĩa là bạn phải xuất trình sách cho người quản thư xem = "The librarian needs to see your books before you go".'
    },
    {
      id: 'ts1_rs5',
      number: 15,
      section: 'reading_sign',
      signText: 'Add your name to this list if you want to go on the trip',
      signType: 'notice',
      question: 'What does it say? Choose the best answer.',
      vietnameseTranslation: 'Thông báo: "Hãy điền tên của bạn vào danh sách này nếu bạn muốn tham gia chuyến đi". Ý nghĩa: Những người muốn đi chuyến đi này cần ký tên/ghi danh vào danh sách.',
      options: [
        { key: 'A', text: 'This list should be signed by people wanting to go on the trip.', vietnameseSub: 'Danh sách này nên được ký tên bởi những người muốn đi chuyến đi.' },
        { key: 'B', text: 'If you find your name on this list, you can go on the trip.', vietnameseSub: 'Nếu bạn tìm thấy tên mình trong danh sách này, bạn có thể đi.' },
        { key: 'C', text: 'This list shows who has been chosen to go on the trip.', vietnameseSub: 'Danh sách này cho biết ai đã được chọn để tham gia chuyến đi.' },
        { key: 'D', text: 'Check this list for information if you are going on the trip.', vietnameseSub: 'Hãy kiểm tra danh sách này để lấy thông tin nếu bạn sắp đi.' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. "Add your name to this list" = điền tên, ký tên vào danh sách. "if you want to go on the trip" = nếu muốn tham gia chuyến đi. Tương đương với: "This list should be signed by people wanting to go on the trip".'
    }
  ],

  // III. READING COMPREHENSION: PASSAGE B (5 câu - Questions 16-20)
  readingPassageBTitle: 'CAREER CHANGE: GRAPHIC DESIGNER TO CAKE DESIGNER',
  readingPassageBTag: '5 câu đọc hiểu trắc nghiệm (Câu 16 - 20)',
  readingTonyPassage: `I had been happily working in the same company as a graphics designer for over ten years, so it came as a huge surprise when one day, without warning I was made redundant. In fact, most of the people in my department lost their jobs that day. When the personnel manager gave me the bad news, she explained that the company had been taken over by a big multinational corporation that was demanding a lot of changes.

So, one day I was in a comfortable job with a generous salary and plenty of annual leave and the next day I was unemployed. While it was nice to have time on my hands, I knew I would have to find a job fairly quickly. I soon found out that it wasn't so easy. No one was taking on new staff. Every morning I searched the Classified Ads, but there was nothing suitable, not even part-time positions.

Finally, a friend asked me if I was interested in helping out in her new cake shop. She needed somebody to deal with customers and to help her with the cake designs. At first, she could only pay me by the hour at rather a low hourly rate. To my surprise, I love the work.

I've been a cake designer for three years now. I'm so glad I didn't turn down my friend's job offer. We have so much work and now I'm no longer an employee. My friend and I are now partners in the best cake shop in town.`,

  readingTonyTranslation: `BƯỚC NGOẶT NGHỀ NGHIỆP: TỪ THIẾT KẾ ĐỒ HỌA THÀNH NGHỆ NHÂN LÀM BÁNH
Tôi đã từng làm việc rất vui vẻ tại cùng một công ty với tư cách là một nhà thiết kế đồ họa trong hơn mười năm, vì vậy quả là một cú sốc bất ngờ lớn khi vào một ngày nọ, tôi bị cho nghỉ việc sa thải mà không hề có lời cảnh báo trước. Trên thực tế, phần lớn nhân sự trong phòng ban của tôi đều bị mất việc vào ngày hôm đó. Khi người quản lý nhân sự thông báo tin xấu, cô ấy giải thích rằng công ty vừa bị một tập đoàn đa quốc gia lớn mua lại sáp nhập và họ đang yêu cầu rất nhiều sự thay đổi cải tổ.

Thế là, mới hôm trước tôi còn đang có một công việc thoải mái với mức lương hậu hĩnh và nhiều ngày nghỉ phép hàng năm, thì ngay ngày hôm sau tôi đã trở thành kẻ thất nghiệp. Dù có nhiều thời gian rảnh rỗi cũng thích thật đấy, nhưng tôi biết mình sẽ phải tìm kiếm một công việc mới khá nhanh. Tôi sớm nhận ra rằng điều đó chẳng hề dễ dàng chút nào. Không có công ty nào đang tuyển thêm nhân viên mới. Mỗi buổi sáng tôi đều chăm chú lật tìm mục Rao vặt (Classified Ads), nhưng chẳng có vị trí nào phù hợp, thậm chí không có cả việc làm bán thời gian.

Cuối cùng, một người bạn ngỏ ý hỏi xem tôi có hứng thú phụ giúp tại tiệm bánh mới mở của cô ấy hay không. Cô ấy cần một người biết giao tiếp phục vụ khách hàng và giúp cô ấy thiết kế các mẫu bánh sinh nhật bánh cưới. Ban đầu, cô ấy chỉ có thể trả lương theo giờ cho tôi với mức thù lao khá thấp. Nhưng thật bất ngờ, tôi lại vô cùng yêu thích công việc này.

Tính đến nay, tôi đã là một nhà thiết kế bánh ngọt được ba năm rồi. Tôi thật sự thấy may mắn vì ngày đó đã không từ chối lời mời làm việc của bạn mình. Hiện tại chúng tôi có rất nhiều đơn đặt hàng và tôi không còn là một người làm thuê nữa. Bạn tôi và tôi hiện đã trở thành những người cộng sự đối tác cùng sở hữu tiệm bánh ngon và nổi tiếng nhất trong thị trấn.`,

  readingTonyQuestions: [
    {
      id: 'ts1_rt1',
      number: 16,
      section: 'reading_tony',
      question: "What is the writer's main aim in writing the text?",
      vietnameseTranslation: 'Mục đích chính của tác giả khi viết bài đọc này là gì?',
      options: [
        { key: 'A', text: 'To advise people how to change the job', vietnameseSub: 'Để khuyên mọi người cách thay đổi công việc' },
        { key: 'B', text: 'To talk about his changes in career', vietnameseSub: 'Để kể về những bước ngoặt thay đổi trong sự nghiệp của mình' },
        { key: 'C', text: 'To describe his new job', vietnameseSub: 'Để miêu tả công việc mới của mình' },
        { key: 'D', text: 'To talk about differences between two jobs', vietnameseSub: 'Để nói về sự khác biệt giữa hai công việc' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. To talk about his changes in career. Toàn bộ bài đọc kể lại quá trình từ lúc tác giả làm thiết kế đồ họa 10 năm, bị sa thải đột ngột, vất vả tìm việc và cơ duyên chuyển sang nghề làm bánh để rồi trở thành đối tác tiệm bánh thành công. Trọng tâm là câu chuyện chuyển đổi sự nghiệp cá nhân.'
    },
    {
      id: 'ts1_rt2',
      number: 17,
      section: 'reading_tony',
      question: 'What does the writer say about his past job?',
      vietnameseTranslation: 'Tác giả nói gì về công việc trong quá khứ của mình?',
      options: [
        { key: 'A', text: 'It was a hard job but high salary.', vietnameseSub: 'Đó là công việc vất vả nhưng lương cao.' },
        { key: 'B', text: 'It was a part-time job with low salary.', vietnameseSub: 'Đó là công việc bán thời gian lương thấp.' },
        { key: 'C', text: 'It was an interesting job at a big multinational corporation.', vietnameseSub: 'Đó là công việc thú vị tại tập đoàn đa quốc gia.' },
        { key: 'D', text: 'It was a comfortable job with high salary.', vietnameseSub: 'Đó là một công việc thoải mái với mức lương cao.' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. It was a comfortable job with high salary. Trong đoạn 2, tác giả viết: "So, one day I was in a comfortable job with a generous salary and plenty of annual leave..." ("generous salary" đồng nghĩa với "high salary").'
    },
    {
      id: 'ts1_rt3',
      number: 18,
      section: 'reading_tony',
      question: 'What did the writer do after losing his job?',
      vietnameseTranslation: 'Tác giả đã làm gì sau khi bị mất việc?',
      options: [
        { key: 'A', text: 'He ran his own business.', vietnameseSub: 'Anh ấy tự mở công ty kinh doanh riêng.' },
        { key: 'B', text: 'He asked his friend for a part-time job.', vietnameseSub: 'Anh ấy chủ động xin bạn một việc bán thời gian.' },
        { key: 'C', text: 'He tried to find another job.', vietnameseSub: 'Anh ấy đã cố gắng tìm kiếm một công việc khác.' },
        { key: 'D', text: 'He worked part-time job for Classified Ads.', vietnameseSub: 'Anh ấy làm việc bán thời gian cho mục Rao vặt.' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. He tried to find another job. Trong đoạn 2 tác giả viết: "I knew I would have to find a job fairly quickly... Every morning I searched the Classified Ads, but there was nothing suitable" -> Tác giả tích cực tìm việc làm khác.'
    },
    {
      id: 'ts1_rt4',
      number: 19,
      section: 'reading_tony',
      question: 'What did the writer think about his current job at first?',
      vietnameseTranslation: 'Lúc đầu tác giả nghĩ gì về công việc hiện tại của mình ở tiệm bánh?',
      options: [
        { key: 'A', text: 'He really loved it.', vietnameseSub: 'Anh ấy thực sự rất yêu thích nó.' },
        { key: 'B', text: 'The salary was low.', vietnameseSub: 'Mức lương nhận được là khá thấp.' },
        { key: 'C', text: 'He was so interested.', vietnameseSub: 'Anh ấy rất hứng thú.' },
        { key: 'D', text: 'It was hard.', vietnameseSub: 'Nó rất vất vả khó khăn.' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. The salary was low. Trong đoạn 3 nêu rõ: "At first, she could only pay me by the hour at rather a low hourly rate." (Ban đầu bạn chỉ có thể trả lương theo giờ với mức khá thấp).'
    },
    {
      id: 'ts1_rt5',
      number: 20,
      section: 'reading_tony',
      question: 'What is the current job of the writer?',
      vietnameseTranslation: 'Công việc hiện tại của tác giả là gì?',
      options: [
        { key: 'A', text: 'Graphics designer', vietnameseSub: 'Nhà thiết kế đồ họa (công việc cũ mười năm trước)' },
        { key: 'B', text: 'Cake designer', vietnameseSub: 'Nhà thiết kế bánh ngọt (nghệ nhân tạo hình bánh)' },
        { key: 'C', text: 'Personnel manager', vietnameseSub: 'Quản lý nhân sự' },
        { key: 'D', text: 'Employee at the cake shop', vietnameseSub: 'Nhân viên làm thuê tại tiệm bánh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. Cake designer. Trong đoạn cuối tác giả khẳng định: "I\'ve been a cake designer for three years now... now I\'m no longer an employee. My friend and I are now partners in the best cake shop in town."'
    }
  ],

  // IV. READING CLOZE TEST: PASSAGE C (10 câu - Questions 21-30)
  readingPassageCTitle: "FORD DUNCAN'S ROUND COTTAGE",
  readingPassageCTag: '10 câu điền từ vào đoạn văn (Câu 21 - 30)',
  readingAnnaPassage: `Ford Duncan lives in a beautiful round cottage. His parents built it based on the design of a 100-year-old cottage in the same area. Inside, there are two levels. The (21) ______ floor is the largest, containing 3 rooms. The living room has beautiful lake (22) ______. The dining room opens to the terrace where the family can sit and (23) ______. The kitchen is well-equipped with (24) ______, oven and fridge. Upstairs, the second floor has two king size bedrooms, a (25) ______ home office and a comfortable bathroom. The house also has central heating and it's very cosy, but (26) ______ is a danger here because it is made of (27) ______.

Living in the round cottage brings a few changes to normal life. The family found the shape of their new home a little (28) ______ at first. All the rooms are round, so there are no (29) ______ and the ceilings seem quite small (30) ______ to the floors.`,

  readingAnnaTranslation: `NGÔI NHÀ TRANH HÌNH TRÒN CỦA FORD DUNCAN
Ford Duncan sống trong một ngôi nhà tranh hình tròn tuyệt đẹp. Cha mẹ anh đã xây dựng nó dựa theo thiết kế của một ngôi nhà tranh 100 năm tuổi trong cùng khu vực. Bên trong ngôi nhà có hai tầng. Tầng trệt (21. ground floor) là tầng rộng nhất, bao gồm 3 phòng. Phòng khách có tầm nhìn tuyệt đẹp hướng ra mặt hồ (22. lake view). Phòng ăn mở thông ra sân hiên ngoài trời, nơi cả gia đình có thể ngồi nghỉ ngơi thư giãn (23. relax). Nhà bếp được trang bị tiện nghi với máy rửa chén (24. dishwasher), lò nướng và tủ lạnh. Trên lầu, tầng hai gồm có hai phòng ngủ cỡ lớn, một phòng làm việc tại nhà được bài trí ngăn nắp (25. well-organized) và một phòng tắm tiện nghi thoải mái. Ngôi nhà cũng có hệ thống sưởi ấm trung tâm và rất ấm cúng, tuy nhiên hỏa hoạn cháy nổ (26. fire) lại là một mối nguy hiểm ở đây vì toàn bộ ngôi nhà được xây dựng bằng gỗ (27. wood).

Sống trong một ngôi nhà tranh hình tròn mang lại một số điều khác biệt so với cuộc sống bình thường. Ban đầu, gia đình cảm thấy hình dáng của ngôi nhà mới hơi kỳ lạ một chút (28. strange). Tất cả các phòng đều có hình tròn, vì vậy hoàn toàn không có góc tường (29. corners) nào cả và trần nhà trông có vẻ khá nhỏ khi đem so sánh (30. compared) với diện tích mặt sàn phía dưới.`,

  readingAnnaQuestions: [
    {
      id: 'ts1_ra1',
      number: 21,
      section: 'reading_anna',
      question: 'Vị trí (21): The (21) ______ floor is the largest, containing 3 rooms.',
      vietnameseTranslation: 'Tầng trệt là tầng rộng nhất, bao gồm 3 phòng.',
      options: [
        { key: 'A', text: 'ground', vietnameseSub: 'ground floor: tầng trệt' },
        { key: 'B', text: 'fire', vietnameseSub: 'lửa / hỏa hoạn' },
        { key: 'C', text: 'wood', vietnameseSub: 'gỗ' },
        { key: 'D', text: 'view', vietnameseSub: 'tầm nhìn / cảnh quan' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. ground. Cụm từ cố định chỉ tầng dưới cùng sát mặt đất trong ngôi nhà là "ground floor" (tầng trệt).'
    },
    {
      id: 'ts1_ra2',
      number: 22,
      section: 'reading_anna',
      question: 'Vị trí (22): The living room has beautiful lake (22) ______.',
      vietnameseTranslation: 'Phòng khách có tầm nhìn hướng ra hồ tuyệt đẹp.',
      options: [
        { key: 'A', text: 'sightseeing', vietnameseSub: 'hoạt động tham quan ngắm cảnh' },
        { key: 'B', text: 'view', vietnameseSub: 'tầm nhìn, hướng nhìn (lake view)' },
        { key: 'C', text: 'fire', vietnameseSub: 'ngọn lửa' },
        { key: 'D', text: 'wood', vietnameseSub: 'chất liệu gỗ' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. view. Cụm danh từ "lake view" nghĩa là hướng nhìn ra hồ / cảnh quan hồ nước.'
    },
    {
      id: 'ts1_ra3',
      number: 23,
      section: 'reading_anna',
      question: 'Vị trí (23): The dining room opens to the terrace where the family can sit and (23) ______.',
      vietnameseTranslation: 'Phòng ăn mở ra sân hiên ngoài trời nơi gia đình có thể ngồi và thư giãn.',
      options: [
        { key: 'A', text: 'choose', vietnameseSub: 'chọn lựa' },
        { key: 'B', text: 'stand', vietnameseSub: 'đứng' },
        { key: 'C', text: 'relax', vietnameseSub: 'thư giãn, nghỉ ngơi' },
        { key: 'D', text: 'go', vietnameseSub: 'đi' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. relax. "sit and relax" là cụm diễn đạt tự nhiên quen thuộc: ngồi nghỉ ngơi và thư giãn ở sân hiên.'
    },
    {
      id: 'ts1_ra4',
      number: 24,
      section: 'reading_anna',
      question: 'Vị trí (24): The kitchen is well-equipped with (24) ______, oven and fridge.',
      vietnameseTranslation: 'Nhà bếp được trang bị tiện nghi với máy rửa chén, lò nướng và tủ lạnh.',
      options: [
        { key: 'A', text: 'blanket', vietnameseSub: 'chăn mền' },
        { key: 'B', text: 'dishwasher', vietnameseSub: 'máy rửa bát đĩa' },
        { key: 'C', text: 'sofa', vietnameseSub: 'ghế sofa phòng khách' },
        { key: 'D', text: 'toilet', vietnameseSub: 'bồn cầu vệ sinh' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. dishwasher. Trong nhà bếp (kitchen), thiết bị gia dụng liệt kê cùng "oven" (lò nướng) và "fridge" (tủ lạnh) chính là "dishwasher" (máy rửa chén bát).'
    },
    {
      id: 'ts1_ra5',
      number: 25,
      section: 'reading_anna',
      question: 'Vị trí (25): Upstairs, the second floor has two king size bedrooms, a (25) ______ home office and a comfortable bathroom.',
      vietnameseTranslation: 'Trên lầu hai có hai phòng ngủ cỡ lớn, một phòng làm việc ngăn nắp và phòng tắm tiện nghi.',
      options: [
        { key: 'A', text: 'noisy', vietnameseSub: 'ồn ào' },
        { key: 'B', text: 'strange', vietnameseSub: 'kỳ lạ' },
        { key: 'C', text: 'well-organized', vietnameseSub: 'ngăn nắp, bố trí khoa học' },
        { key: 'D', text: 'compared', vietnameseSub: 'được so sánh' }
      ],
      correctAnswer: 'C',
      explanation: 'Đáp án C. well-organized. Tính từ ghép "well-organized home office" miêu tả phòng làm việc tại nhà được sắp xếp gọn gàng, khoa học.'
    },
    {
      id: 'ts1_ra6',
      number: 26,
      section: 'reading_anna',
      question: "Vị trí (26): The house also has central heating and it's very cosy, but (26) ______ is a danger here...",
      vietnameseTranslation: 'Ngôi nhà có hệ thống sưởi ấm và rất ấm cúng, nhưng hỏa hoạn là một mối nguy hiểm ở đây...',
      options: [
        { key: 'A', text: 'ground', vietnameseSub: 'mặt đất' },
        { key: 'B', text: 'fire', vietnameseSub: 'nguy cơ hỏa hoạn, cháy nổ' },
        { key: 'C', text: 'stone', vietnameseSub: 'đá tảng' },
        { key: 'D', text: 'wood', vietnameseSub: 'gỗ' }
      ],
      correctAnswer: 'B',
      explanation: 'Đáp án B. fire. "fire is a danger" (hỏa hoạn là một mối nguy hiểm tiềm tàng vì ngôi nhà dựng bằng vật liệu gỗ).'
    },
    {
      id: 'ts1_ra7',
      number: 27,
      section: 'reading_anna',
      question: 'Vị trí (27): ...because it is made of (27) ______.',
      vietnameseTranslation: '...bởi vì ngôi nhà được làm từ chất liệu gỗ.',
      options: [
        { key: 'A', text: 'blanket', vietnameseSub: 'chăn len' },
        { key: 'B', text: 'wardrobe', vietnameseSub: 'tủ quần áo' },
        { key: 'C', text: 'fire', vietnameseSub: 'ngọn lửa' },
        { key: 'D', text: 'wood', vietnameseSub: 'gỗ (vật liệu dễ cháy)' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. wood. Cụm từ "made of wood" nghĩa là được làm bằng gỗ, giải thích lý do tại sao hỏa hoạn (fire) lại nguy hiểm.'
    },
    {
      id: 'ts1_ra8',
      number: 28,
      section: 'reading_anna',
      question: 'Vị trí (28): The family found the shape of their new home a little (28) ______ at first.',
      vietnameseTranslation: 'Ban đầu gia đình thấy hình dáng tròn của ngôi nhà mới hơi kỳ lạ một chút.',
      options: [
        { key: 'A', text: 'strange', vietnameseSub: 'kỳ lạ, khác thường' },
        { key: 'B', text: 'well-organized', vietnameseSub: 'ngăn nắp' },
        { key: 'C', text: 'noisy', vietnameseSub: 'ồn ào' },
        { key: 'D', text: 'dishwasher', vietnameseSub: 'máy rửa bát' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. strange. "found the shape of their new home a little strange at first" (lúc đầu cảm thấy hình tròn của căn nhà hơi lạ lẫm so với nhà hộp vuông thông thường).'
    },
    {
      id: 'ts1_ra9',
      number: 29,
      section: 'reading_anna',
      question: 'Vị trí (29): All the rooms are round, so there are no (29) ______...',
      vietnameseTranslation: 'Tất cả các phòng đều hình tròn, vì vậy hoàn toàn không có góc tường nào...',
      options: [
        { key: 'A', text: 'rooms', vietnameseSub: 'căn phòng' },
        { key: 'B', text: 'floors', vietnameseSub: 'tầng lầu' },
        { key: 'C', text: 'terraces', vietnameseSub: 'sân thượng' },
        { key: 'D', text: 'corners', vietnameseSub: 'góc tường, góc phòng' }
      ],
      correctAnswer: 'D',
      explanation: 'Đáp án D. corners. Vì các phòng đều có cấu trúc hình tròn (round) nên không hề có góc tường (corners) nào.'
    },
    {
      id: 'ts1_ra10',
      number: 30,
      section: 'reading_anna',
      question: 'Vị trí (30): ...and the ceilings seem quite small (30) ______ to the floors.',
      vietnameseTranslation: '...và trần nhà dường như khá nhỏ khi so sánh với mặt sàn.',
      options: [
        { key: 'A', text: 'compared', vietnameseSub: 'compared to: so sánh với' },
        { key: 'B', text: 'well-organized', vietnameseSub: 'gọn gàng' },
        { key: 'C', text: 'noisy', vietnameseSub: 'ồn ào' },
        { key: 'D', text: 'well-equipped', vietnameseSub: 'trang bị đầy đủ' }
      ],
      correctAnswer: 'A',
      explanation: 'Đáp án A. compared. Cụm từ cố định so sánh: "(quite small) compared to the floors" = khá nhỏ khi đem so sánh đối chiếu với sàn nhà.'
    }
  ],

  // V. WRITING TRANSFORMATIONS (5 câu - Questions 31-35)
  sentenceTransformations: [
    {
      id: 'ts1_w1',
      number: 31,
      originalSentence: "I'm interested in playing cards with my children at the weekend.",
      vietnameseTranslation: 'Tôi thích chơi bài với các con của mình vào dịp cuối tuần.',
      prefix: 'I enjoy',
      modelAnswer: "I enjoy playing cards with my children at the weekend.",
      vietnameseModelTranslation: 'Tôi thích thú việc chơi bài với các con vào dịp cuối tuần.',
      acceptedAnswers: [
        'playing cards with my children at the weekend',
        'playing cards with my children at the weekend.'
      ],
      grammarPoint: 'Cấu trúc tương đương: be interested in + V-ing = enjoy + V-ing (thích thú / có hứng thú làm việc gì).'
    },
    {
      id: 'ts1_w2',
      number: 32,
      originalSentence: 'I will spend two weeks reading the new book.',
      vietnameseTranslation: 'Tôi sẽ dành hai tuần để đọc cuốn sách mới.',
      prefix: 'It will take',
      modelAnswer: 'It will take me two weeks to read the new book.',
      vietnameseModelTranslation: 'Tôi sẽ mất hai tuần để đọc hết cuốn sách mới này.',
      acceptedAnswers: [
        'me two weeks to read the new book',
        'me two weeks to read the new book.',
        'me two weeks to finish reading the new book',
        'me two weeks to finish reading the new book.'
      ],
      grammarPoint: 'Cấu trúc chuyển đổi thì tương lai: S + will spend + thời gian + V-ing = It will take + tân ngữ (O) + thời gian + to-V.'
    },
    {
      id: 'ts1_w3',
      number: 33,
      originalSentence: "We couldn't go out because the weather was so bad.",
      vietnameseTranslation: 'Chúng tôi không thể ra ngoài vì thời tiết quá xấu.',
      prefix: 'It was such',
      modelAnswer: "It was such bad weather that we couldn't go out.",
      vietnameseModelTranslation: 'Thời tiết xấu đến nỗi mà chúng tôi không thể ra ngoài được.',
      acceptedAnswers: [
        "bad weather that we couldn't go out",
        "bad weather that we couldn't go out.",
        'bad weather that we could not go out',
        'bad weather that we could not go out.'
      ],
      grammarPoint: 'Cấu trúc quá... đến nỗi mà: S + be + so + adj + that... = It was such + (adj) + N + that... (Lưu ý: "weather" là danh từ không đếm được nên không dùng mạo từ a/an).'
    },
    {
      id: 'ts1_w4',
      number: 34,
      originalSentence: "She said to us: 'Don't be late'.",
      vietnameseTranslation: 'Cô ấy nói với chúng tôi: "Đừng đến muộn nhé".',
      prefix: 'She told',
      modelAnswer: 'She told us not to be late.',
      vietnameseModelTranslation: 'Cô ấy bảo chúng tôi đừng đến muộn.',
      acceptedAnswers: [
        'us not to be late',
        'us not to be late.'
      ],
      grammarPoint: 'Cấu trúc câu mệnh lệnh gián tiếp phủ định: S + told + O + not to V (bảo ai đừng làm gì).'
    },
    {
      id: 'ts1_w5',
      number: 35,
      originalSentence: 'I often get up early.',
      vietnameseTranslation: 'Tôi thường thức dậy sớm.',
      prefix: 'I am used',
      modelAnswer: 'I am used to getting up early.',
      vietnameseModelTranslation: 'Tôi đã quen với việc thức dậy sớm.',
      acceptedAnswers: [
        'to getting up early',
        'to getting up early.'
      ],
      grammarPoint: 'Cấu trúc diễn tả thói quen quen thuộc: S + be used to + V-ing (quen với việc làm gì ở hiện tại).'
    }
  ],

  // VI. TỰ LUẬN VIẾT THƯ (Section 2 - 120 từ)
  letterWriting: {
    topic: 'Write a letter (about 120 words) to your friend/colleague/ parents/relatives about your hobbies.',
    vietnameseTranslation: 'Đề bài: Hãy viết một lá thư (khoảng 120 từ) gửi cho bạn bè/đồng nghiệp/bố mẹ/người thân kể về những sở thích của bạn.',
    requirements: [
      'What are they? (Sở thích của bạn là những hoạt động gì?)',
      'How do you spend time on them? (Bạn dành thời gian cho những sở thích đó như thế nào?)'
    ],
    note: 'Write the body of the letter only. Do NOT write your name, your address and your signature in the letter!',
    targetWordCount: 120,
    sample: `Dear Linh,

How are you? I hope you are doing well. I'm writing to tell you about my hobbies, as you asked in your last email.

I have two main hobbies: reading and playing badminton. I love reading novels and self-help books because they relax me and teach me new things. I usually read for about an hour every night before going to bed. On weekends, I play badminton with my colleagues at a sports club near my house. We play for two hours, and it helps me stay healthy and forget the stress from work.

What about you? Do you have any hobbies? Maybe we can play badminton together when you visit me.

Write soon!

Best wishes,
Nam`,
    sampleTranslation: `Chào Linh,

Dạo này bạn thế nào rồi? Mình hy vọng mọi việc của bạn đều diễn ra tốt đẹp. Mình viết thư này để kể cho bạn nghe về những sở thích của mình, như bạn đã hỏi trong email trước.

Mình có hai sở thích chính: đọc sách và chơi cầu lông. Mình rất thích đọc tiểu thuyết và sách kỹ năng sống vì chúng giúp mình thư giãn đầu óc và học thêm được nhiều điều mới mẻ. Mình thường đọc sách khoảng một tiếng mỗi tối trước khi đi ngủ. Vào dịp cuối tuần, mình chơi cầu lông cùng với các đồng nghiệp tại một câu lạc bộ thể thao gần nhà. Chúng mình thường chơi trong hai tiếng, việc này giúp mình rèn luyện sức khỏe và xua tan đi những căng thẳng mệt mỏi trong công việc.

Còn bạn thì sao? Bạn có sở thích gì không? Có lẽ chúng mình có thể cùng chơi cầu lông khi bạn đến thăm mình nhé.

Sớm hồi âm cho mình nha!

Thân ái,
Nam`
  },

  // Phần Luyện nói (Speaking Card tương thích giao diện)
  speakingCard: {
    cardNumber: 'Mã đề 01',
    title: 'SPEAKING CARD – Mã đề 01: Talk about your hobbies and daily routine',
    task: 'Talk about your hobbies and how you spend time on them.',
    vietnameseTranslation: 'Hãy nói về những sở thích của bạn và cách bạn sắp xếp thời gian cho chúng.',
    prompts: [
      'What are your favorite hobbies? (Những sở thích bạn yêu thích là gì?)',
      'When and how often do you do them? (Bạn thực hiện chúng vào khi nào và với tần suất ra sao?)',
      'Why do you enjoy them and what benefits do they bring to your life? (Tại sao bạn thích chúng và chúng mang lại lợi ích gì?)'
    ],
    sample: `In my spare time, I have several hobbies that help me relax and stay positive. My two main hobbies are reading books and cycling. Every evening, I spend thirty minutes reading before going to sleep. It helps broaden my mind and calms my thoughts after a busy working day. On Sunday mornings, I enjoy going cycling around the city park with my best friends. Cycling strengthens my body and keeps me energetic throughout the week. Having healthy hobbies makes life much more enjoyable and balanced.`,
    sampleTranslation: `Trong thời gian rảnh rỗi, tôi có một vài sở thích giúp tôi thư giãn và duy trì năng lượng tích cực. Hai sở thích chính của tôi là đọc sách và đạp xe. Mỗi tối, tôi dành ba mươi phút để đọc sách trước khi đi ngủ. Việc này giúp tôi mở rộng kiến thức và làm dịu tinh thần sau một ngày làm việc bận rộn. Vào mỗi sáng Chủ nhật, tôi thích đi đạp xe quanh công viên thành phố cùng những người bạn thân. Đạp xe giúp rèn luyện cơ thể khỏe khoắn và giữ cho tôi luôn tràn đầy năng lượng suốt cả tuần. Có những sở thích lành mạnh làm cho cuộc sống trở nên thú vị và cân bằng hơn rất nhiều.`
  },

  // Phần Luyện nghe bổ trợ (để tab Nghe hoạt động chuẩn mực)
  listeningPartA: [
    {
      id: 'ts1_l1',
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
      id: 'ts1_l2',
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
      id: 'ts1_l3',
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
      id: 'ts1_l4',
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
      id: 'ts1_l5',
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
    title: 'ACADEMIC ENGLISH LISTENING EXERCISE',
    intro: 'Listen to a short academic conversation and fill in each blank with ONE suitable word.',
    vietnameseTranslation: 'Bài tập luyện nghe: Nghe đoạn hội thoại và điền một từ thích hợp vào chỗ trống.',
    blanks: [
      {
        blankIndex: 1,
        label: '1. The library opens at (1) _______ a.m. on weekdays.',
        hint: 'Thời gian mở cửa (ví dụ: 8 / eight)',
        acceptableAnswers: ['8', 'eight', '8:00', '8.00']
      },
      {
        blankIndex: 2,
        label: '2. Students must present their student (2) _______ card at the entrance.',
        hint: 'Thẻ sinh viên (ví dụ: identity / ID)',
        acceptableAnswers: ['identity', 'ID', 'id']
      },
      {
        blankIndex: 3,
        label: '3. Books can be borrowed for a maximum of (3) _______ weeks.',
        hint: 'Số tuần mượn (ví dụ: two / 2)',
        acceptableAnswers: ['two', '2']
      }
    ]
  }
};

const output = `// Dữ liệu ngân hàng câu hỏi Tiếng Anh Đầu Ra
// ĐỀ THI ĐÁNH GIÁ NĂNG LỰC NGOẠI NGỮ ĐẦU VÀO TRÌNH ĐỘ THẠC SĨ NĂM 2025 – ĐỢT 2
// BỘ XÂY DỰNG - TRƯỜNG ĐẠI HỌC XÂY DỰNG MIỀN TRUNG - MÃ ĐỀ 01
// Đầy đủ 100% câu hỏi, đáp án, giải thích chi tiết, bản dịch song ngữ và bài viết mẫu

const EXAM_DATA_THACSI1 = ${JSON.stringify(thacsi1Data, null, 2)};

if (typeof window !== "undefined") {
  window.EXAM_DATA_THACSI1 = EXAM_DATA_THACSI1;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = EXAM_DATA_THACSI1;
}
`;

fs.writeFileSync('data_thacsi1.js', output, 'utf8');
console.log('✅ Đã tạo thành công file data_thacsi1.js! Độ dài:', output.length);

