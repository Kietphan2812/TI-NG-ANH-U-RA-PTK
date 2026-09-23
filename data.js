// Dữ liệu ngân hàng câu hỏi Tiếng Anh Đầu Ra
// Nguồn: Trích xuất chính xác theo file NoiDungDayDu.docx (TOPIC 1: DESCRIBE PEOPLE)
// Đã bổ sung bản dịch tiếng Việt song ngữ chuẩn cho 100% câu hỏi

const EXAM_DATA = {
  topicId: "topic1",
  topicTitle: "TOPIC 1: DESCRIBE PEOPLE",
  topicSubtitle: "Miêu tả người (Ngoại hình, Tính cách, Khả năng)",
  
  // Phần từ vựng tra cứu & học tập
  vocabulary: [
    { word: "bald", ipa: "/bɔːld/", pos: "adj.", meaning: "hói đầu", example: "He started to go bald in his thirties." },
    { word: "blonde", ipa: "/blɒnd/", pos: "adj.", meaning: "(màu tóc) vàng", example: "She has long blonde hair." },
    { word: "curly", ipa: "/ˈkɜːrli/", pos: "adj.", meaning: "xoăn (tóc)", example: "He has natural curly hair." },
    { word: "short", ipa: "/ʃɔːrt/", pos: "adj.", meaning: "thấp, ngắn", example: "He is quite short compared to his brother." },
    { word: "long", ipa: "/lɔːŋ/", pos: "adj.", meaning: "dài (tóc)", example: "She wears her long hair tied back." },
    { word: "straight", ipa: "/streɪt/", pos: "adj.", meaning: "thẳng (tóc)", example: "She has beautiful straight black hair." },
    { word: "tall", ipa: "/tɔːl/", pos: "adj.", meaning: "cao", example: "He is over six feet tall." },
    { word: "cheerful", ipa: "/ˈtʃɪəfl/", pos: "adj.", meaning: "vui vẻ", example: "She has a cheerful disposition." },
    { word: "clever", ipa: "/ˈklevər/", pos: "adj.", meaning: "thông minh", example: "Tony is clever and does well at school." },
    { word: "lazy", ipa: "/ˈleɪzi/", pos: "adj.", meaning: "lười biếng", example: "Get out of bed, you lazy boy!" },
    { word: "miserable", ipa: "/ˈmɪzrəbl/", pos: "adj.", meaning: "khốn khổ, đáng thương", example: "He looked so cold and miserable." },
    { word: "optimistic", ipa: "/ˌɒptɪˈmɪstɪk/", pos: "adj.", meaning: "lạc quan", example: "She is optimistic about her future." },
    { word: "pessimistic", ipa: "/ˌpesɪˈmɪstɪk/", pos: "adj.", meaning: "bi quan", example: "Don't be so pessimistic about the exam." },
    { word: "stubborn", ipa: "/ˈstʌbərn/", pos: "adj.", meaning: "bướng bỉnh", example: "He is as stubborn as a mule." },
    { word: "selfish", ipa: "/ˈselfɪʃ/", pos: "adj.", meaning: "ích kỷ", example: "It was selfish of him to leave all work for you." },
    { word: "easy-going", ipa: "/ˈiːzi ˈgəʊɪŋ/", pos: "adj.", meaning: "dễ tính, vô tư", example: "His easy-going personality makes him popular." },
    { word: "careless", ipa: "/ˈkeələs/", pos: "adj.", meaning: "bất cẩn, cẩu thả", example: "It was careless of him to lose the key." },
    { word: "careful", ipa: "/ˈkeəfl/", pos: "adj.", meaning: "cẩn thận", example: "Be careful when crossing the street." },
    { word: "foolish", ipa: "/ˈfuːlɪʃ/", pos: "adj.", meaning: "ngốc nghếch, ngớ ngẩn", example: "It was foolish to argue with him." },
    { word: "beautiful", ipa: "/ˈbjuːtɪfl/", pos: "adj.", meaning: "xinh, đẹp", example: "Anna is a very beautiful girl." },
    { word: "pretty", ipa: "/ˈprɪti/", pos: "adj.", meaning: "đẹp", example: "She looks pretty in that dress." },
    { word: "handsome", ipa: "/ˈhænsəm/", pos: "adj.", meaning: "đẹp trai", example: "He is a handsome young man." },
    { word: "attractive", ipa: "/əˈtræktɪv/", pos: "adj.", meaning: "quyến rũ, hấp dẫn", example: "She has an attractive smile." },
    { word: "medium height", ipa: "/ˈmiːdiəm haɪt/", pos: "adj./n. phr.", meaning: "(chiều) cao trung bình", example: "He is of medium height and slim build." },
    { word: "middle-aged", ipa: "/ˈmɪdl eɪdʒd/", pos: "adj.", meaning: "trung tuổi", example: "Ken is middle-aged and his height is average." },
    { word: "fat", ipa: "/fæt/", pos: "adj.", meaning: "béo", example: "He eats too much and is getting fat." },
    { word: "slim", ipa: "/slɪm/", pos: "adj.", meaning: "mảnh mai, thon thả", example: "She maintains a slim figure by jogging." },
    { word: "thin", ipa: "/θɪn/", pos: "adj.", meaning: "gầy", example: "His figure is tall and thin." },
    { word: "skinny", ipa: "/ˈskɪni/", pos: "adj.", meaning: "gầy nhom", example: "He is too skinny and needs to eat more." },
    { word: "well-built", ipa: "/wel bɪlt/", pos: "adj.", meaning: "vạm vỡ, cường tráng", example: "Tony has a well-built body." },
    { word: "confident", ipa: "/ˈkɒnfɪdənt/", pos: "adj.", meaning: "tự tin", example: "She felt confident about passing the test." },
    { word: "hard-working", ipa: "/hɑːd ˈwɜːkɪŋ/", pos: "adj.", meaning: "chăm chỉ", example: "He is friendly, clever and really hard-working." },
    { word: "shy", ipa: "/ʃaɪ/", pos: "adj.", meaning: "xấu hổ, nhút nhát", example: "He was too shy to ask her out." },
    { word: "extroverted", ipa: "/ˈekstrəvɜːtɪd/", pos: "adj.", meaning: "hướng ngoại (tính cách)", example: "Anna is an extroverted person who loves meeting people." },
    { word: "introverted", ipa: "/ˈɪntrəvɜːtɪd/", pos: "adj.", meaning: "hướng nội (tính cách)", example: "Introverted people prefer calm environments." },
    { word: "beard", ipa: "/bɪəd/", pos: "n.", meaning: "râu", example: "He decided to grow a beard." },
    { word: "high nose", ipa: "/haɪ nəʊz/", pos: "n. phr.", meaning: "mũi cao", example: "She has a high nose and sharp eyes." },
    { word: "fringe", ipa: "/frɪndʒ/", pos: "n.", meaning: "tóc mái bằng", example: "She cut a neat fringe across her forehead." },
    { word: "ponytail", ipa: "/ˈpəʊniteɪl/", pos: "n.", meaning: "tóc đuôi gà", example: "She tied her hair in a ponytail." },
    { word: "fair skin", ipa: "/feə(r) skɪn/", pos: "n. phr.", meaning: "da trắng", example: "She has fair skin and blue eyes." },
    { word: "pale skin", ipa: "/peɪl skɪn/", pos: "n. phr.", meaning: "da xanh, nhợt", example: "His pale skin suggested he had been ill." },
    { word: "good-looking", ipa: "/ɡʊd lʊkɪŋ/", pos: "adj.", meaning: "ưa nhìn, đẹp", example: "Jim is polite and very good-looking." },
    { word: "aggressive", ipa: "/əˈɡresɪv/", pos: "adj.", meaning: "hung hăng", example: "He becomes aggressive when he drinks." },
    { word: "cruel", ipa: "/ˈkruːəl/", pos: "adj.", meaning: "ác", example: "It is cruel to treat animals that way." },
    { word: "dishonest", ipa: "/dɪsˈɒnɪst/", pos: "adj.", meaning: "bất lương, không trung thực", example: "Dishonest behavior will not be tolerated." },
    { word: "generous", ipa: "/ˈdʒenərəs/", pos: "adj.", meaning: "hào phóng", example: "He was very generous in donating to charity." },
    { word: "mean", ipa: "/miːn/", pos: "adj.", meaning: "keo kiệt, bủn xỉn", example: "He is too mean to buy his friends a coffee." },
    { word: "kind", ipa: "/kaɪnd/", pos: "adj.", meaning: "tử tế, tốt bụng", example: "Thank you for being so kind to me." },
    { word: "reliable", ipa: "/rɪˈlaɪəbl/", pos: "adj.", meaning: "đáng tin tưởng", example: "He is a reliable friend you can always count on." },
    { word: "conceited", ipa: "/kənˈsiːtɪd/", pos: "adj.", meaning: "kiêu ngạo, tự cao tự đại", example: "She is too conceited to listen to advice." },
    { word: "modest", ipa: "/ˈmɒdɪst/", pos: "adj.", meaning: "khiêm tốn, giản dị", example: "Despite his huge success, he remains modest." },
    { word: "strong", ipa: "/strɒŋ/", pos: "adj.", meaning: "khỏe, mạnh mẽ (tính cách)", example: "She is a strong woman with strong principles." },
    { word: "weak", ipa: "/wiːk/", pos: "adj.", meaning: "yếu, yếu đuối (tính cách)", example: "He felt too weak to stand up to them." }
  ],

  // I. VOCABULARY MULTIPLE CHOICE (10 câu)
  vocabularyQuestions: [
    {
      id: "v1",
      number: 1,
      section: "vocab",
      question: "Each person in the room turned _____ head to the front when the teacher entered.",
      vietnameseTranslation: "Mỗi người trong phòng đều quay đầu về phía trước khi giáo viên bước vào lớp.",
      options: [
        { key: "A", text: "me" },
        { key: "B", text: "their" },
        { key: "C", text: "his" },
        { key: "D", text: "our" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. 'their' được dùng phổ biến trong tiếng Anh hiện đại như đại từ sở hữu số ít trung tính đại diện cho 'Each person'. (Lưu ý: trong một số giáo trình truyền thống có thể chọn C. his hoặc D. our tuỳ ngữ cảnh, đáp án chuẩn ở đây là B)."
    },
    {
      id: "v2",
      number: 2,
      section: "vocab",
      question: "Maria prefers serious films that _____ about people and relationships.",
      vietnameseTranslation: "Maria thích những bộ phim chính kịch nghiêm túc nói về con người và các mối quan hệ xã hội.",
      options: [
        { key: "A", text: "are" },
        { key: "B", text: "is" },
        { key: "C", text: "am" },
        { key: "D", text: "∅" }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. Chủ ngữ mệnh đề quan hệ bổ nghĩa cho 'films' (danh từ số nhiều) nên động từ to be chia ở số nhiều là 'are'."
    },
    {
      id: "v3",
      number: 3,
      section: "vocab",
      question: "Sarah enjoys watching films that scare her, if _____ are well made.",
      vietnameseTranslation: "Sarah thích xem những bộ phim kinh dị khiến cô ấy sợ hãi, miễn là chúng được dàn dựng công phu và hay.",
      options: [
        { key: "A", text: "we" },
        { key: "B", text: "they" },
        { key: "C", text: "there" },
        { key: "D", text: "she" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. Đại từ 'they' thay thế cho danh từ số nhiều 'films'."
    },
    {
      id: "v4",
      number: 4,
      section: "vocab",
      question: "_____ many people visiting the animals today.",
      vietnameseTranslation: "Có rất nhiều người đang đến thăm quan các loài động vật trong ngày hôm nay.",
      options: [
        { key: "A", text: "There is" },
        { key: "B", text: "There are" },
        { key: "C", text: "This is" },
        { key: "D", text: "This are" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. 'people' là danh từ số nhiều nên dùng cấu trúc 'There are'."
    },
    {
      id: "v5",
      number: 5,
      section: "vocab",
      question: "_____ some water in the lake near the elephants.",
      vietnameseTranslation: "Có một lượng nước trong hồ ở gần khu vực những con voi.",
      options: [
        { key: "A", text: "There is" },
        { key: "B", text: "There are" },
        { key: "C", text: "These are" },
        { key: "D", text: "This are" }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. 'water' là danh từ không đếm được nên dùng cấu trúc 'There is'."
    },
    {
      id: "v6",
      number: 6,
      section: "vocab",
      question: "My telephone is out of order, but _____ is working.",
      vietnameseTranslation: "Điện thoại của tôi đang bị hỏng, nhưng điện thoại của anh ấy vẫn đang hoạt động bình thường.",
      options: [
        { key: "A", text: "your" },
        { key: "B", text: "his" },
        { key: "C", text: "their" },
        { key: "D", text: "our" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. Cần một đại từ sở hữu (possessive pronoun) đứng một mình làm chủ ngữ. 'his' vừa là tính từ vừa là đại từ sở hữu (thay cho 'his telephone')."
    },
    {
      id: "v7",
      number: 7,
      section: "vocab",
      question: "Junko has eaten her lunch already, but I'm saving _____ until later.",
      vietnameseTranslation: "Junko đã ăn xong phần ăn trưa của cô ấy rồi, nhưng tôi đang để dành phần của mình đến lát nữa mới ăn.",
      options: [
        { key: "A", text: "your" },
        { key: "B", text: "their" },
        { key: "C", text: "our" },
        { key: "D", text: "mine" }
      ],
      correctAnswer: "D",
      explanation: "Đáp án D. Cần đại từ sở hữu 'mine' (= my lunch) tương ứng với chủ ngữ 'I'."
    },
    {
      id: "v8",
      number: 8,
      section: "vocab",
      question: "Ken is middle-aged and his height is average. He is very _____.",
      vietnameseTranslation: "Ken đang ở độ tuổi trung niên và chiều cao ở mức trung bình. Anh ấy có vóc dáng rất vạm vỡ cường tráng.",
      options: [
        { key: "A", text: "wrong-built" },
        { key: "B", text: "well-built" },
        { key: "C", text: "good-built" },
        { key: "D", text: "nice-built" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. 'well-built' (vạm vỡ, lực lưỡng) là tính từ ghép chuẩn mô tả ngoại hình."
    },
    {
      id: "v9",
      number: 9,
      section: "vocab",
      question: "Emma is in her late thirties and is about 162cm _____. She has short wavy, blonde hair and wears glasses.",
      vietnameseTranslation: "Emma đang ở độ tuổi cuối 30 và cao khoảng 162 cm. Cô ấy có mái tóc ngắn lượn sóng màu vàng và đeo kính cận.",
      options: [
        { key: "A", text: "tall" },
        { key: "B", text: "height" },
        { key: "C", text: "weight" },
        { key: "D", text: "high" }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. Đo chiều cao của người dùng 'số đo + tall' (ví dụ: 162cm tall). 'high' dùng cho vật/núi/tòa nhà."
    },
    {
      id: "v10",
      number: 10,
      section: "vocab",
      question: "Caroline is about seventeen with short blond hair. Her _____ is tall and thin.",
      vietnameseTranslation: "Caroline khoảng mười bảy tuổi với mái tóc vàng ngắn. Vóc dáng thân hình của cô ấy cao và thanh mảnh.",
      options: [
        { key: "A", text: "hair" },
        { key: "B", text: "height" },
        { key: "C", text: "figure" },
        { key: "D", text: "personality" }
      ],
      correctAnswer: "C",
      explanation: "Đáp án C. 'figure' nghĩa là vóc dáng/thân hình ('Her figure is tall and thin')."
    }
  ],

  // II. READING
  // a. Biển báo (5 câu)
  readingSignQuestions: [
    {
      id: "rs1",
      number: 1,
      section: "reading_sign",
      signText: "PLEASE KEEP THIS ENTRANCE CLEAR",
      signType: "notice",
      question: "What does it say? Circle the letter next to the correct explanation – A, B, C or D",
      vietnameseTranslation: "Biển báo: 'VUI LÒNG GIỮ LỐI VÀO NÀY THÔNG THOÁNG'. Ý nghĩa: Không được đỗ xe hoặc để đồ đạc chắn trước lối vào này.",
      options: [
        { key: "A", text: "Permission is needed to park here." },
        { key: "B", text: "Always keep this door open." },
        { key: "C", text: "Only use this entrance in an emergency." },
        { key: "D", text: "Do not park in front of this entrance" }
      ],
      correctAnswer: "D",
      explanation: "Đáp án D. 'Keep this entrance clear' = Giữ lối vào thông thoáng, không đỗ xe chặn lối vào (Do not park in front of this entrance)."
    },
    {
      id: "rs2",
      number: 2,
      section: "reading_sign",
      signText: "Keep this door locked when room not in use.",
      signType: "warning",
      question: "What does it say?",
      vietnameseTranslation: "Biển báo: 'Hãy khóa cửa này khi phòng không sử dụng'. Ý nghĩa: Khóa căn phòng lại khi không có ai đang dùng.",
      options: [
        { key: "A", text: "This room cannot be used at present." },
        { key: "B", text: "Keep the key to this door in the room." },
        { key: "C", text: "This door must always be kept locked." },
        { key: "D", text: "Lock the room when it is not being used." }
      ],
      correctAnswer: "D",
      explanation: "Đáp án D. 'Keep this door locked when room not in use' nghĩa là khóa cửa phòng khi không sử dụng (Lock the room when it is not being used)."
    },
    {
      id: "rs3",
      number: 3,
      section: "reading_sign",
      signText: "Please show the librarian all books when you leave the library",
      signType: "info",
      question: "What does it say?",
      vietnameseTranslation: "Biển báo: 'Vui lòng cho thủ thư xem tất cả sách khi bạn rời khỏi thư viện'. Ý nghĩa: Người thủ thư cần kiểm tra sách của bạn trước khi bạn đi ra ngoài.",
      options: [
        { key: "A", text: "The librarian needs to see your books before you go." },
        { key: "B", text: "Return your books before you leave the library." },
        { key: "C", text: "The librarian will show you where to put your books." },
        { key: "D", text: "Make sure you take all your books with you." }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. 'Show the librarian all books when you leave' = Người thủ thư cần kiểm tra sách trước khi bạn rời đi."
    },
    {
      id: "rs4",
      number: 4,
      section: "reading_sign",
      signText: "Supersaver Tickets Cannot be used on Fridays",
      signType: "notice",
      question: "What does it say?",
      vietnameseTranslation: "Biển báo: 'Vé siêu tiết kiệm (Supersaver) không được dùng vào các ngày thứ Sáu'. Ý nghĩa: Bạn có thể dùng vé này mọi ngày trong tuần trừ thứ Sáu.",
      options: [
        { key: "A", text: "Supersaver tickets can be used every day except Fridays." },
        { key: "B", text: "You can save money by travelling on a Friday." },
        { key: "C", text: "You need a special ticket to travel on a Friday." },
        { key: "D", text: "Supersaver tickets cannot be bought before the weekend." }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. Không được dùng vé siêu tiết kiệm vào thứ Sáu = Vé có thể dùng các ngày trừ thứ Sáu (every day except Fridays)."
    },
    {
      id: "rs5",
      number: 5,
      section: "reading_sign",
      signText: "MACHINE OUT OF ORDER – DRINKS AVAILABLE AT BAR",
      signType: "alert",
      question: "What does it say?",
      vietnameseTranslation: "Biển báo: 'MÁY ĐANG HỎNG - ĐỒ UỐNG CÓ SẴN TẠI QUẦY BAR'. Ý nghĩa: Chiếc máy bán nước tự động này hiện tại không hoạt động.",
      options: [
        { key: "A", text: "Drinks can not be ordered at the bar." },
        { key: "B", text: "This machine isn't working at the moment." },
        { key: "C", text: "Use this machine when the bar is closed." },
        { key: "D", text: "There is a drinks machine in the bar." }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. 'Machine out of order' = Máy đang hỏng/không hoạt động vào lúc này (isn't working at the moment)."
    }
  ],

  // b. Bài đọc Tony (5 câu)
  readingTonyPassage: `MY BEST FRIEND
My best friend is called Tony. We are classmates. We sit in the class on the same bench side by side. We share many things with each other.
Tony comes from an educated family. His father is a school principal and his mother is also a teacher. He is punctual, well-educated, and has good manners. He is friendly, clever and really hard-working. He is also well-dressed and well-behaved. He is very good in his studies and always does his work attentively in the class. All the teachers have a high opinion of him.
Tony has a well-built body; he is tall and slim and has straight blonde hair and blue eyes. He takes part in all sports and he also likes to play the guitar. He has a good heart. He is honest and obedient. Tony makes his parents very proud of him. He secures good marks and is usually top of his class in examinations. He inspires me to work harder. Whenever I need any help in my study, he remains always ready to help me. He helps me by giving his notebook, when I am absent from school. He corrects me whenever I commit any mistake. I am happy to have such a friend.`,
  readingTonyTranslation: `BẠN THÂN CỦA TÔI
Bạn thân nhất của tôi tên là Tony. Chúng tôi là bạn cùng lớp. Chúng tôi ngồi cạnh nhau trên cùng một dãy bàn trong lớp học. Chúng tôi chia sẻ rất nhiều điều với nhau.
Tony xuất thân từ một gia đình có học thức. Bố của bạn ấy là hiệu trưởng một trường học và mẹ bạn ấy cũng là một giáo viên. Tony rất đúng giờ, được giáo dục đàng hoàng và cư xử rất có chừng mực. Bạn ấy thân thiện, thông minh và cực kỳ chăm chỉ. Tony ăn mặc chỉn chu và luôn ngoan ngoãn. Bạn ấy học rất giỏi và luôn chú ý làm bài trong lớp. Tất cả giáo viên đều đánh giá rất cao về Tony.
Tony có một cơ thể vạm vỡ; bạn ấy cao, thon thả, có mái tóc thẳng màu vàng và đôi mắt màu xanh lam. Bạn ấy tham gia tất cả các môn thể thao và cũng rất thích chơi đàn guitar. Tony có một trái tim nhân hậu, trung thực và biết vâng lời. Tony khiến bố mẹ rất tự hào về mình. Bạn ấy luôn đạt điểm cao và thường đứng đầu lớp trong các kỳ thi. Tony truyền cảm hứng cho tôi học tập chăm chỉ hơn. Mỗi khi tôi cần giúp đỡ trong học tập, bạn ấy luôn sẵn lòng hỗ trợ. Bạn ấy cho tôi mượn vở ghi chép khi tôi nghỉ học và sửa lỗi cho tôi mỗi khi tôi làm sai điều gì. Tôi cảm thấy vô cùng hạnh phúc khi có một người bạn như vậy.`,
  readingTonyQuestions: [
    {
      id: "rt1",
      number: 1,
      section: "reading_tony",
      question: "What does Tony's mother do?",
      vietnameseTranslation: "Mẹ của Tony làm nghề gì?",
      options: [
        { key: "A", text: "A farmer" },
        { key: "B", text: "A teacher" },
        { key: "C", text: "A guitar player" },
        { key: "D", text: "A school principal" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. Trong bài đọc: 'his mother is also a teacher'."
    },
    {
      id: "rt2",
      number: 2,
      section: "reading_tony",
      question: "What does Tony look like?",
      vietnameseTranslation: "Ngoại hình của Tony trông như thế nào?",
      options: [
        { key: "A", text: "He is tall and slim." },
        { key: "B", text: "He is tall and fat." },
        { key: "C", text: "He is friendly and honest." },
        { key: "D", text: "He likes to play the guitar." }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. Trong bài đọc: 'Tony has a well-built body; he is tall and slim...'"
    },
    {
      id: "rt3",
      number: 3,
      section: "reading_tony",
      question: "What does Tony have?",
      vietnameseTranslation: "Tony có đặc điểm gì về mái tóc và đôi mắt?",
      options: [
        { key: "A", text: "Straight blonde hair and blue eyes" },
        { key: "B", text: "Green eyes and curly brown hair" },
        { key: "C", text: "Curly brown hair and blue eyes" },
        { key: "D", text: "Blue eyes and curly blonde hair" }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. Trong bài đọc: 'has straight blonde hair and blue eyes'."
    },
    {
      id: "rt4",
      number: 4,
      section: "reading_tony",
      question: "What does Tony like?",
      vietnameseTranslation: "Tony thích điều gì?",
      options: [
        { key: "A", text: "He is tall and thin." },
        { key: "B", text: "He likes sports." },
        { key: "C", text: "He is friendly, clever and honest." },
        { key: "D", text: "He loves to listen to guitar music." }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. Trong bài đọc: 'He takes part in all sports and he also likes to play the guitar.' Do đó Tony thích thể thao (He likes sports)."
    },
    {
      id: "rt5",
      number: 5,
      section: "reading_tony",
      question: "Which adjective is NOT used to describe Tony?",
      vietnameseTranslation: "Tính từ nào KHÔNG được dùng để miêu tả về Tony?",
      options: [
        { key: "A", text: "Honest" },
        { key: "B", text: "Well-behaved" },
        { key: "C", text: "Humorous" },
        { key: "D", text: "Hard-working" }
      ],
      correctAnswer: "C",
      explanation: "Đáp án C. Từ 'Humorous' (hài hước) KHÔNG xuất hiện trong đoạn văn để miêu tả Tony. Các từ honest, well-behaved, hard-working đều có trong bài."
    }
  ],

  // c. Bài điền từ Anna (10 câu)
  readingAnnaPassage: `My best friend's name is Anna. She is 19 years old. She is originally from Mexico, but lives in London. We have been best friends since we were (1)……………………. Although we are both grown up now, we are still very close to each other. Anna and I live in the same (2)……………………. Her house is next door to mine. Because we live so close, it is easy for me to go and visit her anytime I want. Anna is a very (3)……………………. girl. She is tall and slim with a (4)……………………. quite (5)……………………. and is studying medicine at London University. I think she is an (6)……………………. person because she loves to (7)……………………. and meet new people. She has visited many countries around the world with her (8)……………………. Every time she goes to a new country, she brings back (9)……………………. for all her friends. She is kind, friendly, and (10)……………………. this is why she is my best friend.`,
  readingAnnaTranslation: `Bạn thân nhất của tôi tên là Anna. Cô ấy 19 tuổi. Cô ấy vốn là người Mexico nhưng hiện đang sinh sống tại Luân Đôn. Chúng tôi đã là bạn thân của nhau từ khi còn là những đứa trẻ. Mặc dù bây giờ cả hai đều đã trưởng thành, chúng tôi vẫn rất gắn bó khăng khít. Anna và tôi sống trong cùng một khu phố xóm. Nhà cô ấy ở ngay cạnh nhà tôi. Vì sống gần nhau như vậy, tôi có thể dễ dàng sang thăm cô ấy bất cứ khi nào tôi muốn. Anna là một cô gái rất xinh đẹp. Cô ấy cao ráo, thon thả với một mái tóc buộc đuôi ngựa, khá thông minh và hiện đang theo học ngành y tại Đại học Luân Đôn. Tôi nghĩ cô ấy là một người hướng ngoại vì cô ấy rất thích đi du lịch và làm quen với những người bạn mới. Cô ấy đã đi qua nhiều quốc gia trên thế giới cùng với gia đình mình. Mỗi lần đến một đất nước mới, cô ấy luôn mua quà mang về cho tất cả bạn bè. Cô ấy tốt bụng, thân thiện và hào phóng, đó chính là lý do vì sao cô ấy là người bạn thân nhất của tôi.`,
  readingAnnaQuestions: [
    {
      id: "ra1",
      number: 1,
      section: "reading_anna",
      question: "Vị trí (1): We have been best friends since we were (1)…………………….",
      vietnameseTranslation: "Chúng tôi đã là bạn thân kể từ khi chúng tôi còn là những đứa trẻ.",
      options: [
        { key: "A", text: "children" },
        { key: "B", text: "neighborhood" },
        { key: "C", text: "generous" },
        { key: "D", text: "extroverted" }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. 'since we were children' = từ khi chúng tôi còn là những đứa trẻ."
    },
    {
      id: "ra2",
      number: 2,
      section: "reading_anna",
      question: "Vị trí (2): Anna and I live in the same (2)…………………….",
      vietnameseTranslation: "Anna và tôi sống trong cùng một khu phố xóm.",
      options: [
        { key: "A", text: "children" },
        { key: "B", text: "neighborhood" },
        { key: "C", text: "beautiful" },
        { key: "D", text: "smart" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. 'in the same neighborhood' = cùng trong một khu phố / khu xóm."
    },
    {
      id: "ra3",
      number: 3,
      section: "reading_anna",
      question: "Vị trí (3): Anna is a very (3)……………………. girl.",
      vietnameseTranslation: "Anna là một cô gái rất xinh đẹp.",
      options: [
        { key: "A", text: "extroverted" },
        { key: "B", text: "generous" },
        { key: "C", text: "beautiful" },
        { key: "D", text: "ponytail" }
      ],
      correctAnswer: "C",
      explanation: "Đáp án C. 'beautiful girl' = một cô gái rất xinh đẹp."
    },
    {
      id: "ra4",
      number: 4,
      section: "reading_anna",
      question: "Vị trí (4): She is tall and slim with a (4)…………………….",
      vietnameseTranslation: "Cô ấy cao ráo và mảnh mai với mái tóc đuôi ngựa.",
      options: [
        { key: "A", text: "neighborhood" },
        { key: "B", text: "travel" },
        { key: "C", text: "ponytail" },
        { key: "D", text: "country" }
      ],
      correctAnswer: "C",
      explanation: "Đáp án C. 'with a ponytail' = có mái tóc đuôi ngựa."
    },
    {
      id: "ra5",
      number: 5,
      section: "reading_anna",
      question: "Vị trí (5): quite (5)……………………. and is studying medicine at London University.",
      vietnameseTranslation: "Khá thông minh và đang theo học ngành y tại Đại học Luân Đôn.",
      options: [
        { key: "A", text: "children" },
        { key: "B", text: "neighborhood" },
        { key: "C", text: "beautiful" },
        { key: "D", text: "smart" }
      ],
      correctAnswer: "D",
      explanation: "Đáp án D. 'quite smart' = khá thông minh (và đang học y khoa tại London University)."
    },
    {
      id: "ra6",
      number: 6,
      section: "reading_anna",
      question: "Vị trí (6): I think she is an (6)……………………. person because she loves...",
      vietnameseTranslation: "Tôi nghĩ cô ấy là một người có tính cách hướng ngoại bởi vì cô ấy rất thích gặp gỡ mọi người.",
      options: [
        { key: "A", text: "children" },
        { key: "B", text: "neighborhood" },
        { key: "C", text: "generous" },
        { key: "D", text: "extroverted" }
      ],
      correctAnswer: "D",
      explanation: "Đáp án D. 'an extroverted person' = một người hướng ngoại (sau mạo từ 'an' dùng tính từ bắt đầu bằng nguyên âm)."
    },
    {
      id: "ra7",
      number: 7,
      section: "reading_anna",
      question: "Vị trí (7): because she loves to (7)……………………. and meet new people.",
      vietnameseTranslation: "Bởi vì cô ấy thích đi du lịch và làm quen với những con người mới.",
      options: [
        { key: "A", text: "travel" },
        { key: "B", text: "learn" },
        { key: "C", text: "smart" },
        { key: "D", text: "child" }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. 'loves to travel and meet new people' = thích đi du lịch và gặp gỡ mọi người."
    },
    {
      id: "ra8",
      number: 8,
      section: "reading_anna",
      question: "Vị trí (8): She has visited many countries around the world with her (8)…………………….",
      vietnameseTranslation: "Cô ấy đã đi du lịch tới nhiều nước trên thế giới cùng với gia đình của mình.",
      options: [
        { key: "A", text: "neighborhood" },
        { key: "B", text: "family" },
        { key: "C", text: "house" },
        { key: "D", text: "country" }
      ],
      correctAnswer: "B",
      explanation: "Đáp án B. 'with her family' = đi du lịch cùng gia đình cô ấy."
    },
    {
      id: "ra9",
      number: 9,
      section: "reading_anna",
      question: "Vị trí (9): brings back (9)……………………. for all her friends.",
      vietnameseTranslation: "Luôn mang những món quà kỷ niệm về tặng cho tất cả bạn bè.",
      options: [
        { key: "A", text: "gifts" },
        { key: "B", text: "university" },
        { key: "C", text: "coutry" },
        { key: "D", text: "learn" }
      ],
      correctAnswer: "A",
      explanation: "Đáp án A. 'brings back gifts' = mang quà về tặng bạn bè."
    },
    {
      id: "ra10",
      number: 10,
      section: "reading_anna",
      question: "Vị trí (10): She is kind, friendly, and (10)…………………….",
      vietnameseTranslation: "Cô ấy là một người tốt bụng, thân thiện và rất hào phóng rộng lượng.",
      options: [
        { key: "A", text: "children" },
        { key: "B", text: "neighborhood" },
        { key: "C", text: "generous" },
        { key: "D", text: "extroverted" }
      ],
      correctAnswer: "C",
      explanation: "Đáp án C. 'kind, friendly, and generous' = tốt bụng, thân thiện và hào phóng."
    }
  ],

  // IV. LISTENING
  listeningPartA: [
    {
      id: "l1",
      number: 1,
      question: "Where will the friends meet?",
      vietnameseTranslation: "Những người bạn sẽ hẹn gặp nhau ở đâu?",
      options: [
        { key: "A", text: "A (Café with tables and lamps)" },
        { key: "B", text: "B (In front of building entrance)" },
        { key: "C", text: "C (People waiting at bus/train)" }
      ],
      note: "Phần Nghe thực tế phụ thuộc băng đĩa kỳ thi. Bạn có thể chọn đáp án phán đoán và luyện tập kỹ năng nhận diện từ khóa.",
      suggestedAnswer: "A"
    },
    {
      id: "l2",
      number: 2,
      question: "What has the girl forgotten to bring?",
      vietnameseTranslation: "Cô gái đã quên mang theo món đồ gì?",
      options: [
        { key: "A", text: "A (Pen)" },
        { key: "B", text: "B (Keys)" },
        { key: "C", text: "C (Papers/documents)" }
      ],
      suggestedAnswer: "B"
    },
    {
      id: "l3",
      number: 3,
      question: "Which TV programme is on at 9 o'clock tonight?",
      vietnameseTranslation: "Chương trình truyền hình nào sẽ được phát sóng lúc 9 giờ tối nay?",
      options: [
        { key: "A", text: "A (Ski jumping)" },
        { key: "B", text: "B (Dolphins/underwater)" },
        { key: "C", text: "C (Cooking, wok)" }
      ],
      suggestedAnswer: "B"
    },
    {
      id: "l4",
      number: 4,
      question: "How will the man book tickets for the show?",
      vietnameseTranslation: "Người đàn ông sẽ đặt vé cho buổi biểu diễn bằng phương thức nào?",
      options: [
        { key: "A", text: "A (Magazine/booklet)" },
        { key: "B", text: "B (Mobile phone)" },
        { key: "C", text: "C (Computer/Internet)" }
      ],
      suggestedAnswer: "C"
    },
    {
      id: "l5",
      number: 5,
      question: "What will the man do this winter?",
      vietnameseTranslation: "Người đàn ông sẽ làm gì vào mùa đông năm nay?",
      options: [
        { key: "A", text: "A (Gardening)" },
        { key: "B", text: "B (Shopping/supermarket)" },
        { key: "C", text: "C (Bricklaying outdoors)" }
      ],
      suggestedAnswer: "A"
    },
    {
      id: "l6",
      number: 6,
      question: "How does the man want the woman to help him?",
      vietnameseTranslation: "Người đàn ông muốn người phụ nữ giúp đỡ mình việc gì?",
      options: [
        { key: "A", text: "A (Painting a window/ladder)" },
        { key: "B", text: "B (Car with roof rack/ladder)" },
        { key: "C", text: "C (Two people carrying a ladder)" }
      ],
      suggestedAnswer: "C"
    },
    {
      id: "l7",
      number: 7,
      question: "Which house did the woman stay in?",
      vietnameseTranslation: "Người phụ nữ đã ở trong ngôi nhà nào?",
      options: [
        { key: "A", text: "A (House with tree in front, no pool)" },
        { key: "B", text: "B (House with pool)" },
        { key: "C", text: "C (House with pool, different angle)" }
      ],
      suggestedAnswer: "B"
    }
  ],

  listeningPartB: {
    title: "PLYMOUTH SEA LIFE CENTRE",
    intro: "Listen to a talking or conversation and fill in the missing information.",
    vietnameseTranslation: "Trung tâm sinh vật biển Plymouth: Nghe đoạn hội thoại và điền thông tin còn thiếu vào chỗ trống.",
    blanks: [
      {
        blankIndex: 1,
        label: "COST: Adults £ (1) _______, children £2.00. Special prices for over sixties and school groups.",
        promptText: "Adults £",
        acceptableAnswers: ["4.50", "4.5", "5", "5.00", "3.50", "3.5", "4", "4.00"],
        hint: "Nhập số tiền vé người lớn (ví dụ: 4.50)"
      },
      {
        blankIndex: 2,
        label: "FOR CHILDREN: Animals are fed every (2) _______ from 9.30 am.",
        promptText: "every",
        acceptableAnswers: ["hour", "day", "morning", "half hour"],
        hint: "Tần suất cho ăn (ví dụ: hour)"
      },
      {
        blankIndex: 3,
        label: "Slide and (3) _______ shows from 10.00 am.",
        promptText: "Slide and",
        acceptableAnswers: ["film", "video", "photo", "light"],
        hint: "Loại hình trình chiếu (ví dụ: film hoặc video)"
      },
      {
        blankIndex: 4,
        label: "GROUPS: Guided tours available – ask at the (4) _______.",
        promptText: "ask at the",
        acceptableAnswers: ["information desk", "reception", "desk", "ticket office", "entrance"],
        hint: "Nơi hỏi thông tin tour (ví dụ: information desk / reception)"
      },
      {
        blankIndex: 5,
        label: "NEW ATTRACTION: Walk through the big (5) _______ made of glass.",
        promptText: "Walk through the big",
        acceptableAnswers: ["tunnel", "tank", "tube", "aquarium"],
        hint: "Đường hầm bằng kính (ví dụ: tunnel)"
      }
    ]
  },

  // V. WRITING
  // a. TỰ LUẬN: VIẾT LẠI CÂU (LÀM TRỰC TIẾP TRÊN WEB)
  sentenceTransformations: [
    {
      id: "w1",
      number: 1,
      originalSentence: "The heat was such that I nearly fainted.",
      vietnameseTranslation: "Trời nóng đến nỗi tôi gần như ngất đi.",
      prefix: "It was",
      modelAnswer: "It was so hot that I nearly fainted.",
      vietnameseModelTranslation: "Trời quá nóng đến nỗi tôi suýt ngất đi.",
      acceptedAnswers: [
        "so hot that I nearly fainted",
        "so hot that i nearly fainted",
        "so hot that I nearly fainted.",
        "so hot that i nearly fainted."
      ],
      grammarPoint: "Cấu trúc: S + be + such that... = It + be + so + adj + that... (Quá... đến nỗi mà)."
    },
    {
      id: "w2",
      number: 2,
      originalSentence: "I'm going to the theatre tomorrow, and I'm really looking forward to it.",
      vietnameseTranslation: "Ngày mai tôi sẽ đi nhà hát, và tôi thực sự rất mong chờ điều đó.",
      prefix: "I'm really looking",
      modelAnswer: "I'm really looking forward to going to the theatre tomorrow.",
      vietnameseModelTranslation: "Tôi thực sự rất mong chờ việc đi nhà hát vào ngày mai.",
      acceptedAnswers: [
        "forward to going to the theatre tomorrow",
        "forward to going to the theatre tomorrow.",
        "forward to going to the theater tomorrow",
        "forward to going to the theater tomorrow."
      ],
      grammarPoint: "Cấu trúc: look forward to + V-ing (Rất mong chờ điều gì)."
    },
    {
      id: "w3",
      number: 3,
      originalSentence: "I've never eaten this before.",
      vietnameseTranslation: "Tôi chưa bao giờ ăn món này trước đây.",
      prefix: "It's the first",
      modelAnswer: "It's the first time I've eaten this.",
      vietnameseModelTranslation: "Đây là lần đầu tiên tôi ăn món này.",
      acceptedAnswers: [
        "time I've eaten this",
        "time I have eaten this",
        "time i've eaten this",
        "time i have eaten this",
        "time I've eaten this.",
        "time I have eaten this."
      ],
      grammarPoint: "Cấu trúc: It is the first time + S + have/has + PII (Lần đầu tiên làm việc gì)."
    },
    {
      id: "w4",
      number: 4,
      originalSentence: "He's getting someone to mend the windows.",
      vietnameseTranslation: "Anh ấy đang nhờ ai đó sửa chữa những chiếc cửa sổ.",
      prefix: "He's having",
      modelAnswer: "He's having the windows mended.",
      vietnameseModelTranslation: "Anh ấy đang nhờ người sửa những chiếc cửa sổ.",
      acceptedAnswers: [
        "the windows mended",
        "the windows mended."
      ],
      grammarPoint: "Cấu trúc thể truyền khiến bị động: have something done (have + O + PII - nhờ ai sửa cái gì)."
    },
    {
      id: "w5",
      number: 5,
      originalSentence: "It's a pity you didn't tell us about this.",
      vietnameseTranslation: "Thật đáng tiếc khi bạn đã không nói cho chúng tôi biết về chuyện này.",
      prefix: "I wish",
      modelAnswer: "I wish you had told us about this.",
      vietnameseModelTranslation: "Tôi ước gì bạn đã nói cho chúng tôi biết về điều đó.",
      acceptedAnswers: [
        "you had told us about this",
        "you had told us about this.",
        "that you had told us about this",
        "that you had told us about this."
      ],
      grammarPoint: "Cấu trúc câu ước trái ngược với quá khứ: S + wish + S + had + PII."
    }
  ],

  // b. TỰ LUẬN: VIẾT THƯ / LUẬN (120 từ)
  letterWriting: {
    topic: "Write a letter (about 120 words) to your friend/colleague/parents/relatives about a new friend that you met in your English class.",
    vietnameseTranslation: "Đề bài: Viết một lá thư (khoảng 120 từ) gửi cho bạn bè/đồng nghiệp/bố mẹ/người thân kể về một người bạn mới mà bạn gặp trong lớp học tiếng Anh.",
    requirements: [
      "What does he/she look like? (Ngoại hình trông như thế nào?)",
      "What is his/her personality? (Tính cách, phẩm chất ra sao?)",
      "What things does he/she impress you with? (Những điểm gì khiến bạn ấn tượng?)"
    ],
    note: "Write the body of the letter only. Do NOT write your name, your address and your signature in the letter!",
    targetWordCount: 120,
    sample: `Hello Jessica,

How are you going? I'm very glad to hear from you. You know, I met an interesting friend in my English class. He is Minh, a well-built guy. He is nearsighted, so he always wears glasses. He is very active and energetic. He can play many sports well such as football, basketball, table tennis, etc. He also takes part in many social activities. He made a big impression on me the first time we met. He is very friendly, kind and modest. He likes helping other people. I really want to introduce him to you. I'm sure he will also impress you.

Love,`,
    sampleTranslation: `Chào Jessica,

Dạo này bạn thế nào rồi? Mình rất vui khi nhận được tin tức từ bạn. Bạn biết không, mình vừa mới quen một người bạn rất thú vị trong lớp học tiếng Anh. Cậu ấy tên là Minh, một anh chàng có vóc dáng rất vạm vỡ. Minh bị cận thị nên cậu ấy luôn đeo kính. Cậu ấy rất năng động và tràn đầy nhiệt huyết. Cậu ấy chơi giỏi nhiều môn thể thao như bóng đá, bóng rổ, bóng bàn,... Cậu ấy cũng tích cực tham gia vào nhiều hoạt động xã hội. Cậu ấy đã để lại ấn tượng rất sâu sắc trong mình ngay từ lần đầu tiên gặp mặt. Minh rất thân thiện, tốt bụng và khiêm tốn. Cậu ấy thích giúp đỡ mọi người xung quanh. Mình rất muốn giới thiệu cậu ấy với bạn. Mình chắc chắn rằng cậu ấy cũng sẽ khiến bạn ấn tượng đấy.

Thân ái,`
  },

  // III. SPEAKING
  speakingCard: {
    title: "SPEAKING CARD – No.1",
    task: "Talk about your best friend.",
    vietnameseTranslation: "Hãy nói về người bạn thân nhất của bạn.",
    prompts: [
      "What his / her name?",
      "What is he/she like? (Appearance?)",
      "What are his / her personality, quality and ability?",
      "What does he/she like doing?",
      "And say what he/she would like to do in the future."
    ],
    sample: `Jim is my best friend. We live in the same building. I have known him for a long time. Jim is tall and strong with black hair. He has a round face, a small nose and big brown eyes. They are always bright and smiling. I think he is good-looking.
Jim is always friendly and helpful. When I feel bored or happy, he tells funny jokes and makes us laugh. He is generous. He is ready to share his things with his friends.
Jim is musical and acts very well. He would like to be an actor when he grows up. I believe he can become as popular as Jackie Chan and travel around the world in the future.`,
    sampleTranslation: `Jim là người bạn thân nhất của tôi. Chúng tôi sống trong cùng một tòa nhà. Tôi đã quen biết cậu ấy từ rất lâu rồi. Jim cao lớn và khỏe khoắn với mái tóc đen. Cậu ấy có gương mặt tròn, sống mũi nhỏ và đôi mắt nâu to tròn. Đôi mắt ấy lúc nào cũng sáng ngời và tràn ngập nụ cười. Tôi nghĩ cậu ấy rất ưa nhìn và điển trai.
Jim lúc nào cũng thân thiện và hay giúp đỡ mọi người. Mỗi khi tôi cảm thấy buồn chán hay vui vẻ, cậu ấy thường kể những câu chuyện cười hóm hỉnh và khiến chúng tôi bật cười. Cậu ấy rất hào phóng và luôn sẵn lòng chia sẻ đồ đạc của mình với bạn bè.
Jim có khiếu âm nhạc và diễn xuất rất cừ. Cậu ấy mong muốn trở thành một diễn viên khi lớn lên. Tôi tin rằng cậu ấy có thể trở nên nổi tiếng như Thành Long và đi du lịch vòng quanh thế giới trong tương lai.`
  },
  readingPassageBTitle: "MY BEST FRIEND (TONY)",
  readingPassageBTag: "5 câu đọc hiểu trắc nghiệm",
  readingPassageCTitle: "ANNA'S BEST FRIEND",
  readingPassageCTag: "10 câu điền từ vào đoạn văn"
};

if (typeof window !== "undefined") {
  window.EXAM_DATA_TOPIC1 = EXAM_DATA;
}

