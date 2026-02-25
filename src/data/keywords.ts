export interface Keyword {
  id: string;
  pali: string;
  term: { en: string; vi: string };
  definition: { en: string; vi: string };
  analogy: { en: string; vi: string };
  relatedSuttaIds: string[];
  emoji: string;
}

export const keywords: Keyword[] = [
  {
    id: "varna",
    pali: "Vaṇṇa",
    term: { en: "Caste (Varna)", vi: "Giai Cấp (Varna)" },
    definition: {
      en: "The social class system in ancient India that determined a person's status by birth. The Buddha rejected this, teaching that true worth comes from one's actions and character, not ancestry.",
      vi: "Hệ thống giai cấp xã hội ở Ấn Độ cổ đại quyết định địa vị của một người theo sự sinh ra. Đức Phật bác bỏ điều này, dạy rằng giá trị thật sự đến từ hành động và nhân cách, không phải dòng dõi.",
    },
    analogy: {
      en: "Think of it as an \"exclusive social club\" you are born into. The Buddha argues that what matters is your \"membership\" in the club of good character.",
      vi: "Hãy coi đây như một \"câu lạc bộ xã hội độc quyền\" mà bạn được sinh ra trong đó. Đức Phật lập luận rằng điều quan trọng là \"tư cách thành viên\" trong câu lạc bộ của những người có nhân cách tốt.",
    },
    relatedSuttaIds: ["dn3"],
    emoji: "👑",
  },
  {
    id: "vijja-carana",
    pali: "Vijjā-caraṇa",
    term: { en: "Wisdom and Conduct", vi: "Minh Hạnh Túc" },
    definition: {
      en: "The combination of knowledge/insight (vijjā) and ethical behavior/practice (caraṇa). Together they form the basis of true spiritual perfection.",
      vi: "Sự kết hợp giữa trí tuệ/tuệ giác (minh) và đạo đức/hạnh (hạnh). Cùng nhau chúng tạo nên nền tảng của sự viên mãn tâm linh thực sự.",
    },
    analogy: {
      en: "Like having both a \"map\" (wisdom) and the \"energy to walk\" (conduct). One is useless without the other; together, they lead to the highest goal.",
      vi: "Giống như việc có cả \"bản đồ\" (trí tuệ) và \"sức lực để đi\" (đạo đức). Thiếu một trong hai thì đều vô dụng; có cả hai mới dẫn đến mục tiêu cao nhất.",
    },
    relatedSuttaIds: ["dn3"],
    emoji: "🧭",
  },
  {
    id: "gotta",
    pali: "Gotta",
    term: { en: "Lineage", vi: "Dòng Dõi" },
    definition: {
      en: "One's family line or clan. The Buddha questioned whether having a famous or \"pure\" family tree actually makes a person wiser or more virtuous.",
      vi: "Dòng họ hoặc gia tộc của một người. Đức Phật đặt câu hỏi liệu việc có một gia phả nổi tiếng hay \"thuần chủng\" có thực sự làm một người trở nên khôn ngoan hay đức hạnh hơn không.",
    },
    analogy: {
      en: "Similar to a \"family tree.\" A beautiful tree doesn't guarantee its fruit is sweet — only the quality of the soil and care determines the fruit.",
      vi: "Tương tự như một \"gia phả.\" Một cái cây đẹp không đảm bảo quả của nó ngọt — chỉ có chất lượng đất và sự chăm sóc mới quyết định quả.",
    },
    relatedSuttaIds: ["dn3"],
    emoji: "🌳",
  },
  {
    id: "satipatthana",
    pali: "Satipaṭṭhāna",
    term: { en: "Foundations of Mindfulness", vi: "Niệm Xứ" },
    definition: {
      en: "The four bases of mindfulness: contemplation of body, feelings, mind, and mental phenomena. This is described as the direct path to liberation.",
      vi: "Bốn nền tảng của chánh niệm: quán thân, thọ, tâm và pháp. Đây được mô tả là con đường trực tiếp đến giải thoát.",
    },
    analogy: {
      en: "Like four security cameras watching different areas of your inner world — body sensations, emotions, thoughts, and mental patterns.",
      vi: "Giống như bốn camera an ninh theo dõi các khu vực khác nhau của thế giới nội tâm — cảm giác thân, cảm xúc, suy nghĩ, và các mô hình tâm lý.",
    },
    relatedSuttaIds: ["dn22", "mn10"],
    emoji: "🔍",
  },
  {
    id: "ariya-sacca",
    pali: "Ariya Sacca",
    term: { en: "Four Noble Truths", vi: "Tứ Diệu Đế" },
    definition: {
      en: "The Buddha's core teaching: (1) suffering exists, (2) it has a cause (craving), (3) it can end, and (4) there is a path to its end (the Noble Eightfold Path).",
      vi: "Giáo lý cốt lõi của Đức Phật: (1) khổ tồn tại, (2) khổ có nguyên nhân (tham ái), (3) khổ có thể diệt, và (4) có con đường diệt khổ (Bát Chánh Đạo).",
    },
    analogy: {
      en: "Like a doctor's diagnosis: identify the illness (suffering), find its cause (craving), confirm a cure exists (cessation), and prescribe the treatment (the path).",
      vi: "Giống như chẩn đoán của bác sĩ: xác định bệnh (khổ), tìm nguyên nhân (tham ái), xác nhận có thuốc chữa (diệt), và kê đơn điều trị (đạo).",
    },
    relatedSuttaIds: ["sn56.11"],
    emoji: "💎",
  },
  {
    id: "anatta",
    pali: "Anattā",
    term: { en: "Not-Self", vi: "Vô Ngã" },
    definition: {
      en: "The teaching that none of the five aggregates (form, feeling, perception, formations, consciousness) constitute a permanent, unchanging self.",
      vi: "Giáo lý rằng không có uẩn nào trong năm uẩn (sắc, thọ, tưởng, hành, thức) tạo thành một cái ngã thường hằng, bất biến.",
    },
    analogy: {
      en: "Like a chariot that exists only as an assembly of parts — wheels, axle, frame. Remove the parts and there is no \"chariot\" left. Similarly, the \"self\" is a label for a collection of processes.",
      vi: "Giống như chiếc xe chỉ tồn tại như một tập hợp các bộ phận — bánh xe, trục, khung. Tháo rời các bộ phận thì không còn \"chiếc xe\" nào. Tương tự, \"cái tôi\" chỉ là nhãn hiệu cho một tập hợp các quá trình.",
    },
    relatedSuttaIds: ["sn22.59"],
    emoji: "🫧",
  },
  {
    id: "anapanasati",
    pali: "Ānāpānasati",
    term: { en: "Mindfulness of Breathing", vi: "Quán Niệm Hơi Thở" },
    definition: {
      en: "A meditation practice consisting of sixteen steps organized in four tetrads, using the breath as the primary object of attention to develop concentration and insight.",
      vi: "Một phương pháp thiền gồm mười sáu bước chia thành bốn nhóm bốn, sử dụng hơi thở làm đối tượng chú ý chính để phát triển định và tuệ.",
    },
    analogy: {
      en: "Your breath is like an anchor for a ship — it keeps your wandering mind steady in the present moment, no matter how rough the mental seas.",
      vi: "Hơi thở giống như chiếc neo cho con tàu — nó giữ tâm lang thang của bạn ổn định trong khoảnh khắc hiện tại, bất kể biển tâm có sóng gió thế nào.",
    },
    relatedSuttaIds: ["mn118"],
    emoji: "🌬️",
  },
  {
    id: "paticca-samuppada",
    pali: "Paṭiccasamuppāda",
    term: { en: "Dependent Origination", vi: "Duyên Khởi" },
    definition: {
      en: "The twelve-link chain showing how suffering arises and ceases through interdependent conditions: from ignorance to aging and death.",
      vi: "Chuỗi mười hai mắt xích cho thấy cách khổ sinh và diệt qua các điều kiện phụ thuộc lẫn nhau: từ vô minh đến già chết.",
    },
    analogy: {
      en: "Like a row of dominoes — push the first one (ignorance), and they all fall in sequence. But remove one domino from the chain, and the cascade stops.",
      vi: "Giống như một hàng domino — đẩy quân đầu tiên (vô minh), và tất cả đổ theo trình tự. Nhưng bỏ một quân domino ra khỏi chuỗi, và sự sụp đổ dừng lại.",
    },
    relatedSuttaIds: ["sn12.2"],
    emoji: "🔗",
  },
  {
    id: "asava",
    pali: "Āsava",
    term: { en: "Mental Taints", vi: "Lậu Hoặc" },
    definition: {
      en: "Deep-rooted mental defilements or \"outflows\" — typically sensual desire, desire for existence, and ignorance — that keep beings trapped in the cycle of rebirth.",
      vi: "Những phiền não sâu gốc hay \"dòng chảy\" — thường là dục lậu, hữu lậu, và vô minh lậu — giữ chúng sinh trong vòng luân hồi.",
    },
    analogy: {
      en: "Like invisible leaks in a boat — you may not notice them, but they slowly fill your vessel with water until it sinks. The seven methods in the Sabbāsava Sutta are like seven different repair techniques.",
      vi: "Giống như những lỗ rò rỉ vô hình trong thuyền — bạn có thể không nhận ra, nhưng chúng từ từ làm ngập thuyền cho đến khi chìm. Bảy phương pháp trong Kinh Tất Cả Lậu Hoặc giống như bảy kỹ thuật sửa chữa khác nhau.",
    },
    relatedSuttaIds: ["mn2"],
    emoji: "💧",
  },
  {
    id: "metta",
    pali: "Mettā",
    term: { en: "Loving-Kindness", vi: "Tâm Từ" },
    definition: {
      en: "Boundless goodwill and benevolence toward all beings without exception. The Buddha taught that even under extreme provocation, one should maintain loving-kindness.",
      vi: "Thiện chí và lòng nhân từ vô hạn đối với tất cả chúng sinh không ngoại lệ. Đức Phật dạy rằng ngay cả khi bị khiêu khích cùng cực, vẫn nên giữ tâm từ.",
    },
    analogy: {
      en: "Like the sun that shines equally on all — the beautiful garden and the garbage dump alike. Mettā doesn't pick favorites.",
      vi: "Giống như mặt trời chiếu sáng bình đẳng lên tất cả — khu vườn đẹp và bãi rác như nhau. Tâm từ không thiên vị.",
    },
    relatedSuttaIds: ["mn21"],
    emoji: "☀️",
  },
];
