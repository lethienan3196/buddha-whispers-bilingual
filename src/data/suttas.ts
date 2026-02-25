export type Language = "en" | "vi";

export interface Sutta {
  id: string;
  paliTitle: string;
  collection: string;
  title: {
    en: string;
    vi: string;
  };
  summary: {
    en: string;
    vi: string;
  };
  keyTeaching: {
    en: string;
    vi: string;
  };
}

export const suttas: Sutta[] = [
  {
    id: "dn22",
    paliTitle: "Mahāsatipaṭṭhāna Sutta",
    collection: "Dīgha Nikāya",
    title: {
      en: "The Great Discourse on the Foundations of Mindfulness",
      vi: "Đại Kinh Niệm Xứ",
    },
    summary: {
      en: "The Buddha describes the four foundations of mindfulness — contemplation of body, feelings, mind, and mental phenomena — as the direct path for the purification of beings, for overcoming sorrow and lamentation, and for the realization of Nibbāna.",
      vi: "Đức Phật mô tả bốn nền tảng của chánh niệm — quán thân, thọ, tâm và pháp — là con đường trực tiếp để thanh tịnh chúng sinh, vượt qua sầu bi khổ ưu, và chứng ngộ Niết-bàn.",
    },
    keyTeaching: {
      en: "Four Foundations of Mindfulness",
      vi: "Tứ Niệm Xứ",
    },
  },
  {
    id: "mn2",
    paliTitle: "Sabbāsava Sutta",
    collection: "Majjhima Nikāya",
    title: {
      en: "All the Taints",
      vi: "Kinh Tất Cả Lậu Hoặc",
    },
    summary: {
      en: "The Buddha teaches seven methods for removing mental taints (āsavas): by seeing, by restraining, by using, by enduring, by avoiding, by removing, and by developing. Each method addresses different aspects of defilement.",
      vi: "Đức Phật dạy bảy phương pháp đoạn trừ lậu hoặc: do thấy, do phòng hộ, do thọ dụng, do kham nhẫn, do tránh né, do trừ diệt, và do tu tập. Mỗi phương pháp giải quyết các khía cạnh khác nhau của phiền não.",
    },
    keyTeaching: {
      en: "Seven methods to abandon taints",
      vi: "Bảy phương pháp đoạn trừ lậu hoặc",
    },
  },
  {
    id: "sn56.11",
    paliTitle: "Dhammacakkappavattana Sutta",
    collection: "Saṃyutta Nikāya",
    title: {
      en: "Setting the Wheel of Dhamma in Motion",
      vi: "Kinh Chuyển Pháp Luân",
    },
    summary: {
      en: "The Buddha's first discourse after enlightenment, delivered to the five ascetics. He teaches the Middle Way, avoiding the extremes of self-indulgence and self-mortification, and reveals the Four Noble Truths and the Noble Eightfold Path.",
      vi: "Bài pháp đầu tiên của Đức Phật sau khi giác ngộ, thuyết cho năm vị khổ hạnh. Ngài dạy Trung Đạo, tránh hai cực đoan hưởng thụ và khổ hạnh, và khai thị Tứ Diệu Đế cùng Bát Chánh Đạo.",
    },
    keyTeaching: {
      en: "Four Noble Truths & Noble Eightfold Path",
      vi: "Tứ Diệu Đế và Bát Chánh Đạo",
    },
  },
  {
    id: "mn10",
    paliTitle: "Satipaṭṭhāna Sutta",
    collection: "Majjhima Nikāya",
    title: {
      en: "The Foundations of Mindfulness",
      vi: "Kinh Niệm Xứ",
    },
    summary: {
      en: "A concise version of the great discourse on mindfulness. The Buddha explains how to practice contemplation of the body, feelings, mind-states, and mental objects as the direct path to liberation.",
      vi: "Phiên bản ngắn gọn của đại kinh về chánh niệm. Đức Phật giải thích cách thực hành quán thân, thọ, tâm và pháp như con đường trực tiếp đến giải thoát.",
    },
    keyTeaching: {
      en: "Mindfulness practice",
      vi: "Thực hành chánh niệm",
    },
  },
  {
    id: "sn22.59",
    paliTitle: "Anattalakkhaṇa Sutta",
    collection: "Saṃyutta Nikāya",
    title: {
      en: "The Discourse on the Not-Self Characteristic",
      vi: "Kinh Vô Ngã Tướng",
    },
    summary: {
      en: "The Buddha's second discourse, teaching that the five aggregates (form, feeling, perception, formations, consciousness) are not-self. Whatever is impermanent is suffering, and what is suffering is not-self.",
      vi: "Bài pháp thứ hai của Đức Phật, dạy rằng năm uẩn (sắc, thọ, tưởng, hành, thức) đều là vô ngã. Cái gì vô thường thì khổ, cái gì khổ thì vô ngã.",
    },
    keyTeaching: {
      en: "Anattā (Not-self)",
      vi: "Vô Ngã (Anattā)",
    },
  },
  {
    id: "mn118",
    paliTitle: "Ānāpānasati Sutta",
    collection: "Majjhima Nikāya",
    title: {
      en: "Mindfulness of Breathing",
      vi: "Kinh Quán Niệm Hơi Thở",
    },
    summary: {
      en: "The Buddha teaches sixteen steps of mindfulness of breathing, organized into four tetrads corresponding to the four foundations of mindfulness. This practice leads to the fulfillment of the seven factors of enlightenment.",
      vi: "Đức Phật dạy mười sáu bước quán niệm hơi thở, chia thành bốn nhóm bốn tương ứng với bốn niệm xứ. Pháp tu này dẫn đến viên mãn bảy yếu tố giác ngộ.",
    },
    keyTeaching: {
      en: "Sixteen steps of breath meditation",
      vi: "Mười sáu bước thiền hơi thở",
    },
  },
  {
    id: "dn16",
    paliTitle: "Mahāparinibbāna Sutta",
    collection: "Dīgha Nikāya",
    title: {
      en: "The Great Discourse on the Final Nibbāna",
      vi: "Đại Kinh Bát-Niết-Bàn",
    },
    summary: {
      en: "The longest sutta in the Pāli Canon, describing the last days and passing away of the Buddha. It contains his final teachings, including the famous last words: 'All conditioned things are impermanent. Strive with diligence.'",
      vi: "Bài kinh dài nhất trong Kinh tạng Pāli, mô tả những ngày cuối cùng và sự viên tịch của Đức Phật. Kinh chứa đựng những lời dạy cuối cùng, bao gồm lời di huấn: 'Các pháp hữu vi đều vô thường. Hãy tinh tấn tu tập.'",
    },
    keyTeaching: {
      en: "Impermanence and diligent practice",
      vi: "Vô thường và tinh tấn tu tập",
    },
  },
  {
    id: "mn21",
    paliTitle: "Kakacūpama Sutta",
    collection: "Majjhima Nikāya",
    title: {
      en: "The Simile of the Saw",
      vi: "Kinh Ví Dụ Cái Cưa",
    },
    summary: {
      en: "The Buddha uses the powerful simile of a saw to teach patience: even if bandits were to cut you limb by limb with a two-handled saw, one who gave rise to ill-will would not be fulfilling the teaching. One should pervade the whole world with loving-kindness.",
      vi: "Đức Phật dùng ví dụ mạnh mẽ về cái cưa để dạy nhẫn nhục: dù cho kẻ cướp có cưa tay chân bằng cưa hai tay, ai khởi tâm sân hận thì không thực hành đúng lời dạy. Hãy tràn ngập từ bi khắp thế gian.",
    },
    keyTeaching: {
      en: "Patience and loving-kindness",
      vi: "Nhẫn nhục và tâm từ",
    },
  },
  {
    id: "sn35.28",
    paliTitle: "Ādittapariyāya Sutta",
    collection: "Saṃyutta Nikāya",
    title: {
      en: "The Fire Sermon",
      vi: "Kinh Lửa Cháy",
    },
    summary: {
      en: "The Buddha declares that all the sense bases are burning — burning with the fire of passion, aversion, and delusion. Through disenchantment with the senses, a noble disciple becomes dispassionate and is liberated.",
      vi: "Đức Phật tuyên bố tất cả các căn đều đang cháy — cháy với lửa tham, sân, si. Qua sự nhàm chán với các căn, vị đệ tử bậc thánh trở nên ly tham và được giải thoát.",
    },
    keyTeaching: {
      en: "Disenchantment with sense experience",
      vi: "Nhàm chán các trần cảnh",
    },
  },
  {
    id: "mn7",
    paliTitle: "Vatthūpama Sutta",
    collection: "Majjhima Nikāya",
    title: {
      en: "The Simile of the Cloth",
      vi: "Kinh Ví Dụ Tấm Vải",
    },
    summary: {
      en: "Just as a dirty cloth cannot be dyed to a beautiful color, a mind defiled by impurities cannot attain liberation. The Buddha lists sixteen impurities of mind and teaches how to cleanse the mind through practice.",
      vi: "Giống như tấm vải dơ không thể nhuộm thành màu đẹp, tâm bị ô nhiễm bởi phiền não không thể đạt giải thoát. Đức Phật liệt kê mười sáu cấu uế của tâm và dạy cách thanh lọc tâm qua tu tập.",
    },
    keyTeaching: {
      en: "Purification of the mind",
      vi: "Thanh tịnh hóa tâm",
    },
  },
  {
    id: "dhp",
    paliTitle: "Dhammapada",
    collection: "Khuddaka Nikāya",
    title: {
      en: "The Path of Dhamma",
      vi: "Kinh Pháp Cú",
    },
    summary: {
      en: "A collection of 423 verses in 26 chapters, the Dhammapada is among the most beloved Buddhist texts. It covers essential teachings on the mind, heedfulness, happiness, anger, self-mastery, and the path to Nibbāna in memorable verse form.",
      vi: "Tập hợp 423 bài kệ trong 26 phẩm, Pháp Cú là một trong những kinh điển Phật giáo được yêu thích nhất. Kinh bao gồm các giáo lý thiết yếu về tâm, không phóng dật, hạnh phúc, sân hận, tự chủ, và con đường đến Niết-bàn dưới dạng kệ tụng.",
    },
    keyTeaching: {
      en: "Verses on essential Dhamma",
      vi: "Kệ về Chánh Pháp thiết yếu",
    },
  },
  {
    id: "sn12.2",
    paliTitle: "Paṭiccasamuppāda Sutta",
    collection: "Saṃyutta Nikāya",
    title: {
      en: "Dependent Origination",
      vi: "Kinh Duyên Khởi",
    },
    summary: {
      en: "The Buddha explains the twelve links of dependent origination: from ignorance arise formations, from formations arises consciousness, and so on through the chain to aging and death. Understanding this chain in both directions leads to liberation.",
      vi: "Đức Phật giải thích mười hai mắt xích duyên khởi: từ vô minh sinh hành, từ hành sinh thức, và tiếp tục qua chuỗi đến già chết. Hiểu chuỗi này theo cả hai chiều dẫn đến giải thoát.",
    },
    keyTeaching: {
      en: "Twelve links of dependent origination",
      vi: "Mười hai nhân duyên",
    },
  },
  {
    id: "dn3",
    paliTitle: "Ambaṭṭha Sutta",
    collection: "Dīgha Nikāya",
    title: {
      en: "About Ambaṭṭha",
      vi: "Kinh Am-ba-tha",
    },
    summary: {
      en: "The Buddha challenges the idea that a person's worth is determined by birth or caste. True nobility comes from ethical behavior and mental development — wisdom and conduct (vijjā-caraṇa) — not from ancestry.",
      vi: "Đức Phật thách thức quan niệm rằng giá trị con người được quyết định bởi dòng dõi hay giai cấp. Sự cao quý thật sự đến từ đạo đức và tu tập tâm linh — minh hạnh túc (vijjā-caraṇa) — chứ không phải từ tổ tiên.",
    },
    keyTeaching: {
      en: "True nobility through wisdom & conduct",
      vi: "Cao quý thật sự qua minh hạnh túc",
    },
  },
];

export const collections = [
  { id: "all", label: { en: "All Collections", vi: "Tất Cả" } },
  { id: "Dīgha Nikāya", label: { en: "Dīgha Nikāya", vi: "Trường Bộ Kinh" } },
  { id: "Majjhima Nikāya", label: { en: "Majjhima Nikāya", vi: "Trung Bộ Kinh" } },
  { id: "Saṃyutta Nikāya", label: { en: "Saṃyutta Nikāya", vi: "Tương Ưng Bộ Kinh" } },
  { id: "Khuddaka Nikāya", label: { en: "Khuddaka Nikāya", vi: "Tiểu Bộ Kinh" } },
];
