import type { Language } from "./suttas";

export interface SuttaDetailSection {
  title: { en: string; vi: string };
  emoji: string;
  content: { en: string; vi: string };
}

export interface SuttaDetail {
  id: string;
  sections: SuttaDetailSection[];
  fullText?: { en: string; vi: string };
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
    fullText: {
      en: `**1. The Sending of Ambaṭṭha**

Thus have I heard. At one time the Blessed One was traveling through the Kosalan country with a large community of monks, about five hundred monks, and he arrived at a Kosalan Brahmin village called Icchānaṅgala. There he stayed in the dense jungle of Icchānaṅgala.

At that time the Brahmin Pokkharasāti was living in Ukkaṭṭha — a place teeming with life, with grass, timber, water, and grain — which had been given to him by King Pasenadi of Kosala as a royal gift.

Pokkharasāti heard: "The ascetic Gotama, the Sakyan son who went forth from the Sakyan clan, has been traveling in the Kosalan country and has arrived at Icchānaṅgala. He stays in the dense jungle there. A good report has been spreading about that Master Gotama: 'He is a Blessed One, a perfected one, a fully awakened Buddha, accomplished in knowledge and conduct, holy, a knower of the world, supreme trainer of persons to be tamed, teacher of devas and humans, a Buddha, a Blessed One.'"

So Pokkharasāti summoned his student Ambaṭṭha: "Dear Ambaṭṭha, go to the ascetic Gotama and find out whether or not that Master Gotama really has the qualities attributed to him."

**2. Ambaṭṭha's Rudeness**

Then Ambaṭṭha, together with a group of young students, went by carriage to the dense jungle of Icchānaṅgala. He went as far as the road was passable by carriage, then got down and proceeded on foot into the park.

At that time a number of monks were walking in meditation in the open air. Ambaṭṭha approached them and asked: "Where is Master Gotama staying now? We have come to see him."

Then those monks thought: "This young Brahmin Ambaṭṭha is from a distinguished family and is the student of the distinguished Brahmin Pokkharasāti. The Blessed One would not find it difficult to have a talk with such a young man." So they directed Ambaṭṭha to the Blessed One.

When Ambaṭṭha came before the Blessed One, he exchanged polite greetings, but while doing so, he walked about and stood about, speaking to the seated Blessed One in a disrespectful manner.

The Blessed One said: "Ambaṭṭha, would you behave in this way — walking and standing while talking — to elderly and senior Brahmins, your own teachers and their teachers?"

"No, Master Gotama. A Brahmin should walk when speaking to a walking Brahmin, stand when speaking to a standing Brahmin, sit when speaking to a sitting Brahmin, and lie down when speaking to a reclining Brahmin. But with shaveling ascetics, menials, dark fellows born from Brahmā's feet — with them, I speak just as I am speaking to Master Gotama!"

**3. The Buddha Exposes Ambaṭṭha's Lineage**

"But, Ambaṭṭha, you came here wanting something. Whatever purpose you came for, you should listen attentively. Ambaṭṭha, you are too proud. You have not received the training that a truly educated person should have."

Then the Blessed One asked: "Ambaṭṭha, what is your clan?"

"I am a Kaṇhāyana, Master Gotama."

"If we trace back your family on your mother's and father's side, the Sakyans turn out to be your masters, and you are the offspring of a Sakyan slave-girl. But the Sakyans trace their lineage back to King Okkāka."

Long ago King Okkāka, wanting to divert the succession in favor of the son of his favorite queen, banished his elder children from the kingdom. Being thus banished, they settled beside a lotus pond on the slopes of the Himalayas. There, afraid of contaminating the stock, they cohabited with their own sisters. King Okkāka said: 'They are capable ones (sakyā) indeed!' And that is how the Sakyans got their name.

"Now, King Okkāka had a slave-girl called Disā. She gave birth to a black baby boy. When the boy was born he said: 'Wash me, mother, bathe me! Remove this dirt from me, mother, I shall be of use to you!' And just as in those days people called goblins 'kṇhā' (dark ones), so they said: 'This one spoke as soon as he was born, he is a Kaṇha (dark one) that was born!' And that is the origin of the Kaṇhāyana clan. Thus, Ambaṭṭha, tracing back your family, the Sakyans turn out to be your masters and you are the offspring of their slave-girl."

Hearing this, the young Brahmins around Ambaṭṭha created an uproar: "Ambaṭṭha is of good birth! Ambaṭṭha is well-born! The ascetic Gotama is not!" The Blessed One silenced them by revealing this historical fact.

**4. The Standard of True Nobility**

Then the Blessed One said: "Ambaṭṭha, there are these two ways of reckoning: reckoning by birth and reckoning by wisdom and conduct. Even if a person is of high birth, if they are immoral, they will be criticized by the wise. And if a person is of low birth, if they are virtuous and full of wisdom, they will be praised by the wise."

"It is not by birth that one is an outcast or a Brahmin. It is by action that one is an outcast, by action that one is a Brahmin."

"Consider, Ambaṭṭha: a Khattiya (warrior) who is accomplished in wisdom and conduct — is he superior, or a Brahmin who lacks these qualities?"

"A Khattiya accomplished in wisdom and conduct would be superior, Master Gotama."

"It is not birth, Ambaṭṭha, but wisdom and conduct (vijjā-caraṇa) that make a person truly noble. Whoever — whether Khattiya, Brahmin, Vessa, or Sudda — who has abandoned wrong conduct, who has cultivated the noble eightfold path, who has developed the mind: that one is supreme."

**5. What Is Vijjā-caraṇa (Wisdom and Conduct)?**

"And what, Ambaṭṭha, is conduct? Here a monk is virtuous, restrained by the code of the Pātimokkha, perfect in conduct and resort, seeing danger in the slightest fault. He trains in the precepts he has undertaken. He guards the doors of his senses. He is mindful and clearly comprehending. He is content."

"What is wisdom? Secluded from sense desires, secluded from unwholesome states, a monk enters and dwells in the first jhāna… the second jhāna… the third jhāna… the fourth jhāna. He directs his mind to the knowledge of the destruction of the taints. He understands as it really is: 'This is suffering… This is the origin of suffering… This is the cessation of suffering… This is the way leading to the cessation of suffering.' His mind is liberated. He knows: 'Birth is destroyed, the spiritual life has been lived, what had to be done has been done, there is no more coming back to any state of being.'"

"Such a monk is said to be accomplished in wisdom, accomplished in conduct, accomplished in both wisdom and conduct. And there is no higher or more perfect accomplishment than this."

**6. The Four Failures**

"There are, Ambaṭṭha, four failures regarding this supreme accomplishment:

1. Some ascetic or Brahmin, without attaining this accomplishment, carries a load of branches on his shoulder, goes into the forest, and lives on fallen fruits — he is merely a servant of one who is accomplished.

2. Some, unable to live on fallen fruits, takes a spade and basket, and lives on roots and tubers he digs up.

3. Some, unable to do even that, settles near a village or town, and maintains a fire-offering.

4. Some, unable to do even that, sets up a four-doored alms-hall at a crossroads, thinking: 'Whoever comes — ascetic or Brahmin — I will offer what I can.'

These are the four failures. But the one who is accomplished in wisdom and conduct does not fall into any of these."

**7. Ambaṭṭha's Report to Pokkharasāti**

Ambaṭṭha returned to his teacher Pokkharasāti and told him everything that had happened.

Pokkharasāti was furious: "You rude, impudent boy! You went and picked a quarrel with the ascetic Gotama!" He kicked Ambaṭṭha and immediately set out himself to see the Blessed One.

Arriving at the park, Pokkharasāti sat down beside the Blessed One and asked about the conversation. The Blessed One recounted everything.

Then Pokkharasāti looked at the Blessed One's body and saw the thirty-two marks of a great man. Seeing most of them, but having doubts about two — whether the private parts were enclosed in a sheath, and the tongue — the Blessed One used his psychic powers to resolve these doubts.

**8. Pokkharasāti's Conversion**

Deeply impressed, Pokkharasāti said: "Magnificent, Master Gotama! The Dhamma has been made clear in many ways. I go to Master Gotama for refuge, and to the Dhamma, and to the Saṅgha. May Master Gotama remember me as a lay follower who has gone for refuge for life."

Thus ends the Ambaṭṭha Sutta, the third discourse of the Dīgha Nikāya.`,
      vi: `**1. Việc Phái Ambaṭṭha Đi**

Tôi nghe như vầy. Một thuở nọ, Đức Thế Tôn đang du hành trong xứ Kosala cùng đại chúng Tỳ-kheo khoảng năm trăm vị, và Ngài đến một ngôi làng Bà-la-môn ở Kosala có tên là Icchānaṅgala. Tại đó Ngài trú trong khu rừng rậm Icchānaṅgala.

Lúc bấy giờ, Bà-la-môn Pokkharasāti đang sống ở Ukkaṭṭha — một vùng đất phì nhiêu, đầy cỏ cây, nước và ngũ cốc — được vua Pasenadi xứ Kosala ban tặng.

Pokkharasāti nghe tin: "Sa-môn Gotama, con trai dòng họ Thích-ca, đã xuất gia từ dòng tộc Thích-ca, đang du hành trong xứ Kosala và đã đến Icchānaṅgala. Ngài trú trong khu rừng rậm tại đó. Danh thơm đã lan truyền về Đức Thế Tôn Gotama: 'Ngài là Thế Tôn, bậc A-la-hán, Chánh Đẳng Giác, Minh Hạnh Túc, Thiện Thệ, Thế Gian Giải, Vô Thượng Sĩ, Điều Ngự Trượng Phu, Thiên Nhân Sư, Phật, Thế Tôn.'"

Vậy nên Pokkharasāti gọi đệ tử Ambaṭṭha đến: "Này Ambaṭṭha, hãy đi đến Sa-môn Gotama và tìm hiểu xem liệu Ngài có thật sự có những phẩm chất được gán cho Ngài hay không."

**2. Sự Thô Lỗ Của Ambaṭṭha**

Rồi Ambaṭṭha cùng một nhóm thanh niên Bà-la-môn đi xe đến khu rừng rậm Icchānaṅgala. Họ đi xe đến nơi có thể đi được, rồi xuống xe đi bộ vào khu vườn.

Lúc ấy có một số Tỳ-kheo đang kinh hành ngoài trời. Ambaṭṭha đến gần và hỏi: "Sa-môn Gotama đang ở đâu? Chúng tôi đến để gặp Ngài."

Các Tỳ-kheo nghĩ: "Thanh niên Bà-la-môn Ambaṭṭha này xuất thân danh giá và là đệ tử của Bà-la-môn danh tiếng Pokkharasāti. Đức Thế Tôn sẽ không thấy khó khăn khi nói chuyện với một thanh niên như vậy." Nên họ chỉ đường cho Ambaṭṭha đến gặp Đức Thế Tôn.

Khi Ambaṭṭha đến trước Đức Thế Tôn, ông trao đổi lời chào lịch sự, nhưng trong khi đó lại đi lại và đứng nói chuyện với Đức Thế Tôn đang ngồi một cách thiếu tôn trọng.

Đức Thế Tôn nói: "Ambaṭṭha, ông có cư xử như vậy — đi lại và đứng khi nói chuyện — với các vị Bà-la-môn cao niên, thầy của ông và thầy của thầy ông không?"

"Thưa không, Sa-môn Gotama. Một Bà-la-môn nên đi khi nói với Bà-la-môn đang đi, đứng khi nói với Bà-la-môn đang đứng, ngồi khi nói với Bà-la-môn đang ngồi, và nằm khi nói với Bà-la-môn đang nằm. Nhưng với những Sa-môn đầu trọc, hạ đẳng, kẻ đen sinh từ bàn chân của Phạm Thiên — với những người ấy, tôi nói chuyện y như tôi đang nói với Sa-môn Gotama!"

**3. Đức Phật Phơi Bày Dòng Dõi Ambaṭṭha**

"Nhưng, Ambaṭṭha, ông đến đây vì muốn điều gì đó. Bất cứ mục đích gì ông đến, hãy chú tâm lắng nghe. Ambaṭṭha, ông quá kiêu ngạo. Ông chưa nhận được sự đào tạo mà một người thực sự có giáo dục nên có."

Rồi Đức Thế Tôn hỏi: "Ambaṭṭha, dòng tộc của ông là gì?"

"Tôi thuộc dòng Kaṇhāyana, thưa Sa-môn Gotama."

"Nếu chúng ta truy nguyên dòng họ ông về phía mẹ và phía cha, thì dòng họ Thích-ca hóa ra là chủ nhân của ông, và ông là con cháu của một nữ tỳ nhà Thích-ca."

Xưa kia vua Okkāka, muốn chuyển ngôi kế vị cho con trai của hoàng hậu sủng ái, đã trục xuất các hoàng tử lớn tuổi ra khỏi vương quốc. Bị trục xuất, họ định cư bên cạnh một hồ sen trên sườn núi Hy-mã-lạp-sơn. Ở đó, vì sợ pha tạp dòng giống, họ kết hôn với chị em gái của mình. Vua Okkāka nói: 'Họ thật giỏi giang (sakyā)!' Và đó là cách dòng họ Thích-ca có tên.

"Vua Okkāka có một nữ tỳ tên là Disā. Bà sinh ra một bé trai da đen. Khi đứa bé được sinh ra, nó nói: 'Hãy rửa con, mẹ ơi, tắm cho con! Lau sạch bụi bẩn này khỏi con, mẹ ơi, con sẽ có ích cho mẹ!' Và y như thời đó người ta gọi yêu tinh là 'kaṇha' (kẻ đen), nên họ nói: 'Đứa này vừa sinh ra đã nói, nó là một Kaṇha đã được sinh ra!' Và đó là nguồn gốc của dòng Kaṇhāyana."

Nghe vậy, các thanh niên Bà-la-môn xung quanh Ambaṭṭha gây ồn ào. Đức Thế Tôn im lặng họ bằng cách tiết lộ sự thật lịch sử này.

**4. Tiêu Chuẩn Của Sự Cao Quý Thật Sự**

Rồi Đức Thế Tôn nói: "Ambaṭṭha, có hai cách đánh giá: đánh giá theo dòng dõi và đánh giá theo trí tuệ và đạo hạnh. Dù một người có dòng dõi cao quý, nếu họ vô đạo đức, họ sẽ bị người trí chỉ trích. Và nếu một người có dòng dõi thấp kém, nếu họ đạo đức và đầy trí tuệ, họ sẽ được người trí khen ngợi."

"Không phải do sinh ra mà một người trở thành kẻ bần tiện hay Bà-la-môn. Do hành động mà một người trở thành kẻ bần tiện, do hành động mà một người trở thành Bà-la-môn."

"Hãy xem xét, Ambaṭṭha: một Sát-đế-lợi (chiến sĩ) đạt được minh hạnh túc — vị ấy cao hơn, hay một Bà-la-môn thiếu những phẩm chất này?"

"Một Sát-đế-lợi đạt được minh hạnh túc sẽ cao hơn, thưa Sa-môn Gotama."

"Không phải dòng dõi, Ambaṭṭha, mà trí tuệ và đạo hạnh (vijjā-caraṇa) mới làm cho một người thực sự cao quý. Bất cứ ai — dù là Sát-đế-lợi, Bà-la-môn, Vệ-xá hay Thủ-đà-la — đã từ bỏ tà hạnh, đã tu tập Bát Chánh Đạo, đã phát triển tâm: người ấy là tối thượng."

**5. Minh Hạnh Túc (Vijjā-caraṇa) Là Gì?**

"Và thế nào, Ambaṭṭha, là hạnh? Ở đây một Tỳ-kheo có giới hạnh, thu thúc trong giới bổn Ba-la-đề-mộc-xoa, đầy đủ oai nghi chánh hạnh, thấy sự nguy hiểm trong những lỗi nhỏ nhất. Vị ấy tu tập trong các giới đã thọ nhận. Vị ấy giữ gìn các căn môn. Vị ấy chánh niệm tỉnh giác. Vị ấy tri túc."

"Thế nào là minh? Ly dục, ly bất thiện pháp, Tỳ-kheo chứng và trú Sơ thiền… Nhị thiền… Tam thiền… Tứ thiền. Vị ấy hướng tâm đến trí tuệ về sự đoạn tận các lậu hoặc. Vị ấy biết như thật: 'Đây là Khổ… Đây là Nguyên nhân của Khổ… Đây là sự Diệt khổ… Đây là Con đường dẫn đến Diệt khổ.' Tâm vị ấy được giải thoát. Vị ấy biết: 'Sinh đã tận, Phạm hạnh đã thành, việc cần làm đã làm, không còn trở lại trạng thái này nữa.'"

"Một Tỳ-kheo như vậy được gọi là đầy đủ minh, đầy đủ hạnh, đầy đủ cả minh và hạnh. Và không có sự thành tựu nào cao hơn hay viên mãn hơn điều này."

**6. Bốn Sự Thất Bại**

"Có bốn sự thất bại liên quan đến thành tựu tối thượng này, Ambaṭṭha:

1. Một số Sa-môn hay Bà-la-môn, không đạt được thành tựu này, vác một bó cành cây trên vai, đi vào rừng, và sống bằng trái rụng — vị ấy chỉ là đầy tớ của người đã đạt được.

2. Một số, không thể sống bằng trái rụng, lấy cuốc xẻng và giỏ, sống bằng rễ và củ đào được.

3. Một số, không thể làm điều đó, định cư gần làng mạc hay thị trấn, duy trì lễ cúng lửa.

4. Một số, không thể làm điều đó, dựng một nhà bố thí bốn cửa ở ngã tư, nghĩ rằng: 'Bất cứ ai đến — Sa-môn hay Bà-la-môn — tôi sẽ cúng dường những gì có thể.'

Đây là bốn sự thất bại. Nhưng người đạt được minh hạnh túc không rơi vào bất kỳ điều nào trong số này."

**7. Báo Cáo Của Ambaṭṭha Cho Pokkharasāti**

Ambaṭṭha trở về với thầy mình là Pokkharasāti và kể lại mọi chuyện đã xảy ra.

Pokkharasāti giận dữ: "Thằng nhỏ thô lỗ, hỗn xược! Ngươi đã đi và gây sự với Sa-môn Gotama!" Ông đá Ambaṭṭha và lập tức tự mình đi gặp Đức Thế Tôn.

Đến khu vườn, Pokkharasāti ngồi xuống bên cạnh Đức Thế Tôn và hỏi về cuộc đối thoại. Đức Thế Tôn thuật lại mọi chuyện.

Rồi Pokkharasāti nhìn thân thể Đức Thế Tôn và thấy ba mươi hai tướng tốt của bậc đại nhân. Thấy hầu hết các tướng nhưng còn nghi ngờ về hai tướng — liệu phần kín có được bao bọc trong bao và lưỡi — Đức Thế Tôn dùng thần thông để giải tỏa những nghi ngờ này.

**8. Sự Quy Y Của Pokkharasāti**

Vô cùng cảm phục, Pokkharasāti nói: "Thật vi diệu, Sa-môn Gotama! Chánh Pháp đã được làm sáng tỏ theo nhiều cách. Con xin quy y Sa-môn Gotama, quy y Pháp, và quy y Tăng. Mong Sa-môn Gotama nhận con là cư sĩ đã quy y trọn đời."

Đây là phần kết thúc của Kinh Ambaṭṭha, bài kinh thứ ba trong Trường Bộ Kinh.`,
    },
  },
];

export const getSuttaDetail = (id: string): SuttaDetail | undefined => {
  return suttaDetails.find((d) => d.id === id);
};
