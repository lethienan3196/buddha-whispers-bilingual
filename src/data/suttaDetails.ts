import type { Language } from "./suttas";

export interface SuttaDetailSection {
  title: { en: string; vi: string };
  emoji: string;
  content: { en: string; vi: string };
}

export interface SuttaDetail {
  id: string;
  sections: SuttaDetailSection[];
}

export const suttaDetails: SuttaDetail[] = [
  {
    id: "dn3",
    sections: [
      {
        title: { en: "The Core Philosophy", vi: "Triết Lý Cốt Lõi" },
        emoji: "🧘",
        content: {
          en: "The Ambaṭṭha Sutta challenges the idea that a person's worth or spiritual status is determined by their birth or social class (caste). It teaches that true nobility and \"supreme perfection\" in wisdom and conduct are achieved only through ethical behavior and mental development, not through ancestry.",
          vi: "Kinh Am-ba-tha (Ambaṭṭha Sutta) thách thức quan niệm rằng giá trị hay địa vị tâm linh của một người được quyết định bởi dòng dõi hay giai cấp xã hội. Kinh dạy rằng sự cao quý thật sự và \"vô thượng minh hạnh túc\" chỉ đạt được thông qua đạo đức và sự tu tập tâm linh, chứ không phải qua tổ tiên.",
        },
      },
      {
        title: { en: "Glossary of Key Terms", vi: "Thuật Ngữ Quan Trọng" },
        emoji: "📖",
        content: {
          en: "• **Caste (Varna):** Think of this as an \"exclusive social club\" you are born into. In the Buddha's time, people believed your birth determined your purity. The Buddha argues that what matters is your \"membership\" in the club of good character.\n\n• **Vijjā-caraṇa (Wisdom and Conduct):** This is like having both a \"map\" (wisdom) and the \"energy to walk\" (conduct). One is useless without the other; together, they lead to the highest goal.\n\n• **Lineage (Gotta):** Similar to a \"family tree.\" The Sutta explores whether having a famous or \"pure\" family tree actually makes a person better or more enlightened.",
          vi: "• **Giai cấp (Varna):** Hãy coi đây như một \"câu lạc bộ xã hội độc quyền\" mà bạn được sinh ra trong đó. Thời đức Phật, người ta tin rằng sự ra đời quyết định sự thanh sạch. Đức Phật lập luận rằng điều quan trọng là \"tư cách thành viên\" trong câu lạc bộ của những người có nhân cách tốt.\n\n• **Minh Hạnh Túc (Vijjā-caraṇa):** Đây giống như việc có cả \"bản đồ\" (trí tuệ/minh) và \"sức lực để đi\" (đạo đức/hạnh). Thiếu một trong hai thì đều vô dụng; có cả hai mới dẫn đến mục tiêu cao nhất.\n\n• **Dòng dõi (Gotta):** Tương tự như một \"gia phả.\" Bản kinh khám phá liệu việc có một gia phả nổi tiếng hay \"thuần chủng\" có thực sự làm một người trở nên tốt đẹp hay giác ngộ hơn không.",
        },
      },
      {
        title: { en: "Step-by-Step Breakdown", vi: "Phân Tích Từng Bước" },
        emoji: "🪜",
        content: {
          en: "• **The Pride of Ambaṭṭha:** A young student named Ambaṭṭha, proud of his high-class (Brahmin) heritage, behaves rudely toward the Buddha, calling his followers \"low-born.\"\n\n• **Exposing the Truth:** The Buddha reveals that Ambaṭṭha's own ancestors were actually descended from a slave woman, proving that \"pure birth\" is often a myth and cannot be the basis for superiority.\n\n• **The Higher Standard:** The Buddha explains that in the spiritual life, questions of birth and social status are irrelevant. True \"perfection\" consists of the moral discipline and meditative insights described in earlier teachings (like Sutta 2).\n\n• **The Four Obstacles:** The Sutta identifies \"leaks\" or failures in the spiritual life, such as a teacher who collects wealth or fame instead of practicing what they preach.\n\n• **The Connection:** By dismantling the ego tied to social status, the mind becomes humble and open enough to develop the Vijjā-caraṇa (wisdom and conduct) necessary for liberation.",
          vi: "• **Sự kiêu ngạo của Ambaṭṭha:** Một thanh niên tên Ambaṭṭha, tự hào về dòng dõi Bà-la-môn cao quý của mình, đã có thái độ thô lỗ với Đức Phật và gọi các đệ tử của Ngài là \"kẻ hạ tiện.\"\n\n• **Phơi bày sự thật:** Đức Phật tiết lộ rằng tổ tiên của chính Ambaṭṭha vốn xuất thân từ một người nữ tỳ, chứng minh rằng \"dòng dõi thuần chủng\" thường chỉ là huyền thoại và không thể là cơ sở cho sự ưu việt.\n\n• **Tiêu chuẩn cao hơn:** Đức Phật giải thích rằng trong đời sống tâm linh, các câu hỏi về sự sinh trưởng và địa vị xã hội là không liên quan. Sự \"viên mãn\" thực sự bao gồm giới hạnh và tuệ giác đã được mô tả trong các bài giảng trước (như Kinh Sa-môn Quả).\n\n• **Bốn chướng ngại:** Kinh chỉ ra những \"lỗ hổng\" hay thất bại trong đời sống tâm linh, ví dụ như một người thầy lo thu góp của cải hay danh tiếng thay vì thực hành những gì mình giảng dạy.\n\n• **Sự kết nối:** Bằng cách phá bỏ cái tôi gắn liền với địa vị xã hội, tâm trí trở nên khiêm nhường và đủ cởi mở để phát triển Minh Hạnh Túc cần thiết cho sự giải thoát.",
        },
      },
      {
        title: { en: "Practical Application", vi: "Ứng Dụng Thực Tế" },
        emoji: "🛠️",
        content: {
          en: "A beginner can apply this by practicing humility and equality. Instead of judging others—or yourself—based on job titles, family background, or education, try to value people based on their actions and kindness. Real \"class\" comes from how you treat others, not where you came from.",
          vi: "Người mới bắt đầu có thể áp dụng bằng cách thực hành sự khiêm tốn và bình đẳng. Thay vì đánh giá người khác—hoặc chính mình—dựa trên chức danh công việc, gia thế hay học vấn, hãy thử coi trọng mọi người dựa trên hành động và lòng tốt của họ. \"Đẳng cấp\" thực sự đến từ cách bạn đối xử với người khác, không phải từ nơi bạn sinh ra.",
        },
      },
    ],
  },
];

export const getSuttaDetail = (id: string): SuttaDetail | undefined => {
  return suttaDetails.find((d) => d.id === id);
};
