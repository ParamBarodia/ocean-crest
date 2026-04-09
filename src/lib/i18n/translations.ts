/* eslint-disable @typescript-eslint/no-explicit-any */

const en = {
  nav: { home: "Home", about: "About Us", products: "Products", certificates: "Certificates", contact: "Contact", inquiry: "Get in Touch" },
  hero: { eyebrow: "Your Verified Partner for Indian Commodities", title: "Ocean Crest Exports", subtitle: "A specialized export brand under Sheth & Bhatt's LLP, dedicated to the global distribution of high-quality Indian products with verified supply and lab-tested quality.", cta1: "Explore Products", cta2: "About Us" },
  common: { viewAll: "View All", viewDetails: "View Details", learnMore: "Learn More", sendInquiry: "Send Inquiry", getInTouch: "Get in Touch", requestQuote: "Request Quote" },
  contact: { title: "Send Us Your Inquiry", subtitle: "Fill in the details below and our team will respond within 24 hours.", name: "Full Name", email: "Email", phone: "Phone", company: "Company", country: "Country", product: "Product Interest", quantity: "Estimated Quantity", message: "Message", submit: "Get in Touch", success: "Inquiry Sent Successfully!", successMsg: "Thank you for your interest. Our team will respond within 24 hours." },
};

const hi = {
  nav: { home: "होम", about: "हमारे बारे में", products: "उत्पाद", certificates: "प्रमाणपत्र", contact: "संपर्क", inquiry: "संपर्क करें" },
  hero: { eyebrow: "भारतीय वस्तुओं के लिए आपका सत्यापित साझेदार", title: "Ocean Crest Exports", subtitle: "शेठ एंड भट्ट्स एलएलपी के तहत एक विशेष निर्यात ब्रांड, उच्च गुणवत्ता वाले भारतीय उत्पादों के वैश्विक वितरण के लिए समर्पित।", cta1: "उत्पाद देखें", cta2: "हमारे बारे में" },
  common: { viewAll: "सभी देखें", viewDetails: "विवरण देखें", learnMore: "और जानें", sendInquiry: "पूछताछ भेजें", getInTouch: "संपर्क करें", requestQuote: "कोटेशन अनुरोध" },
  contact: { title: "हमें अपनी पूछताछ भेजें", subtitle: "नीचे विवरण भरें और हमारी टीम 24 घंटे के भीतर जवाब देगी।", name: "पूरा नाम", email: "ईमेल", phone: "फोन", company: "कंपनी", country: "देश", product: "उत्पाद रुचि", quantity: "अनुमानित मात्रा", message: "संदेश", submit: "संपर्क करें", success: "पूछताछ सफलतापूर्वक भेजी गई!", successMsg: "आपकी रुचि के लिए धन्यवाद। हमारी टीम 24 घंटे के भीतर जवाब देगी।" },
};

const ar = {
  nav: { home: "الرئيسية", about: "من نحن", products: "المنتجات", certificates: "الشهادات", contact: "اتصل بنا", inquiry: "تواصل معنا" },
  hero: { eyebrow: "شريكك الموثوق للسلع الهندية", title: "Ocean Crest Exports", subtitle: "علامة تجارية متخصصة في التصدير تحت إدارة Sheth & Bhatt's LLP، مكرسة للتوزيع العالمي للمنتجات الهندية عالية الجودة.", cta1: "استكشف المنتجات", cta2: "من نحن" },
  common: { viewAll: "عرض الكل", viewDetails: "عرض التفاصيل", learnMore: "اعرف المزيد", sendInquiry: "إرسال استفسار", getInTouch: "تواصل معنا", requestQuote: "طلب عرض سعر" },
  contact: { title: "أرسل لنا استفسارك", subtitle: "املأ التفاصيل أدناه وسيرد فريقنا خلال 24 ساعة.", name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "الهاتف", company: "الشركة", country: "الدولة", product: "المنتج المطلوب", quantity: "الكمية المقدرة", message: "الرسالة", submit: "تواصل معنا", success: "تم إرسال الاستفسار بنجاح!", successMsg: "شكراً لاهتمامك. سيرد فريقنا خلال 24 ساعة." },
};

const ur = {
  nav: { home: "ہوم", about: "ہمارے بارے میں", products: "مصنوعات", certificates: "سرٹیفکیٹس", contact: "رابطہ", inquiry: "رابطہ کریں" },
  hero: { eyebrow: "ہندوستانی اجناس کے لیے آپ کا تصدیق شدہ پارٹنر", title: "Ocean Crest Exports", subtitle: "شیٹھ اینڈ بھٹ ایل ایل پی کے تحت ایک مخصوص برآمدی برانڈ، اعلیٰ معیار کی ہندوستانی مصنوعات کی عالمی تقسیم کے لیے وقف ہے۔", cta1: "مصنوعات دیکھیں", cta2: "ہمارے بارے میں" },
  common: { viewAll: "سب دیکھیں", viewDetails: "تفصیلات دیکھیں", learnMore: "مزید جانیں", sendInquiry: "انکوائری بھیجیں", getInTouch: "رابطہ کریں", requestQuote: "قیمت کی درخواست" },
  contact: { title: "ہمیں اپنی انکوائری بھیجیں", subtitle: "نیچے تفصیلات بھریں اور ہماری ٹیم 24 گھنٹوں میں جواب دے گی۔", name: "پورا نام", email: "ای میل", phone: "فون", company: "کمپنی", country: "ملک", product: "مطلوبہ مصنوعات", quantity: "تخمینی مقدار", message: "پیغام", submit: "رابطہ کریں", success: "انکوائری کامیابی سے بھیج دی گئی!", successMsg: "آپ کی دلچسپی کا شکریہ۔ ہماری ٹیم 24 گھنٹوں میں جواب دے گی۔" },
};

const fr = {
  nav: { home: "Accueil", about: "À Propos", products: "Produits", certificates: "Certificats", contact: "Contact", inquiry: "Nous Contacter" },
  hero: { eyebrow: "Votre Partenaire Vérifié pour les Produits Indiens", title: "Ocean Crest Exports", subtitle: "Une marque d'exportation spécialisée sous Sheth & Bhatt's LLP, dédiée à la distribution mondiale de produits indiens de haute qualité.", cta1: "Voir les Produits", cta2: "À Propos" },
  common: { viewAll: "Voir Tout", viewDetails: "Voir Détails", learnMore: "En Savoir Plus", sendInquiry: "Envoyer une Demande", getInTouch: "Nous Contacter", requestQuote: "Demander un Devis" },
  contact: { title: "Envoyez-nous Votre Demande", subtitle: "Remplissez les détails ci-dessous et notre équipe vous répondra sous 24 heures.", name: "Nom Complet", email: "Email", phone: "Téléphone", company: "Entreprise", country: "Pays", product: "Produit d'Intérêt", quantity: "Quantité Estimée", message: "Message", submit: "Nous Contacter", success: "Demande Envoyée avec Succès!", successMsg: "Merci pour votre intérêt. Notre équipe répondra sous 24 heures." },
};

const de = {
  nav: { home: "Startseite", about: "Über Uns", products: "Produkte", certificates: "Zertifikate", contact: "Kontakt", inquiry: "Kontakt" },
  hero: { eyebrow: "Ihr Verifizierter Partner für Indische Waren", title: "Ocean Crest Exports", subtitle: "Eine spezialisierte Exportmarke unter Sheth & Bhatt's LLP, gewidmet dem globalen Vertrieb hochwertiger indischer Produkte.", cta1: "Produkte Ansehen", cta2: "Über Uns" },
  common: { viewAll: "Alle Anzeigen", viewDetails: "Details Ansehen", learnMore: "Mehr Erfahren", sendInquiry: "Anfrage Senden", getInTouch: "Kontakt", requestQuote: "Angebot Anfordern" },
  contact: { title: "Senden Sie Uns Ihre Anfrage", subtitle: "Füllen Sie die Details aus und unser Team antwortet innerhalb von 24 Stunden.", name: "Vollständiger Name", email: "E-Mail", phone: "Telefon", company: "Unternehmen", country: "Land", product: "Produktinteresse", quantity: "Geschätzte Menge", message: "Nachricht", submit: "Kontakt", success: "Anfrage Erfolgreich Gesendet!", successMsg: "Vielen Dank für Ihr Interesse. Unser Team antwortet innerhalb von 24 Stunden." },
};

const es = {
  nav: { home: "Inicio", about: "Sobre Nosotros", products: "Productos", certificates: "Certificados", contact: "Contacto", inquiry: "Contactar" },
  hero: { eyebrow: "Su Socio Verificado para Productos Indios", title: "Ocean Crest Exports", subtitle: "Una marca de exportación especializada bajo Sheth & Bhatt's LLP, dedicada a la distribución global de productos indios de alta calidad.", cta1: "Ver Productos", cta2: "Sobre Nosotros" },
  common: { viewAll: "Ver Todos", viewDetails: "Ver Detalles", learnMore: "Más Información", sendInquiry: "Enviar Consulta", getInTouch: "Contactar", requestQuote: "Solicitar Cotización" },
  contact: { title: "Envíenos su Consulta", subtitle: "Complete los detalles y nuestro equipo le responderá dentro de 24 horas.", name: "Nombre Completo", email: "Correo Electrónico", phone: "Teléfono", company: "Empresa", country: "País", product: "Producto de Interés", quantity: "Cantidad Estimada", message: "Mensaje", submit: "Contactar", success: "¡Consulta Enviada con Éxito!", successMsg: "Gracias por su interés. Nuestro equipo responderá dentro de 24 horas." },
};

const ru = {
  nav: { home: "Главная", about: "О Нас", products: "Продукция", certificates: "Сертификаты", contact: "Контакты", inquiry: "Связаться" },
  hero: { eyebrow: "Ваш Проверенный Партнер по Индийским Товарам", title: "Ocean Crest Exports", subtitle: "Специализированный экспортный бренд под управлением Sheth & Bhatt's LLP, посвященный глобальной дистрибуции высококачественных индийских товаров.", cta1: "Смотреть Продукцию", cta2: "О Нас" },
  common: { viewAll: "Показать Все", viewDetails: "Подробнее", learnMore: "Узнать Больше", sendInquiry: "Отправить Запрос", getInTouch: "Связаться", requestQuote: "Запросить Цену" },
  contact: { title: "Отправьте Нам Ваш Запрос", subtitle: "Заполните детали, и наша команда ответит в течение 24 часов.", name: "Полное Имя", email: "Электронная Почта", phone: "Телефон", company: "Компания", country: "Страна", product: "Интересующий Продукт", quantity: "Примерное Количество", message: "Сообщение", submit: "Связаться", success: "Запрос Успешно Отправлен!", successMsg: "Спасибо за ваш интерес. Наша команда ответит в течение 24 часов." },
};

const zh = {
  nav: { home: "首页", about: "关于我们", products: "产品", certificates: "证书", contact: "联系", inquiry: "联系我们" },
  hero: { eyebrow: "您值得信赖的印度商品合作伙伴", title: "Ocean Crest Exports", subtitle: "Sheth & Bhatt's LLP旗下的专业出口品牌，致力于高品质印度产品的全球分销。", cta1: "查看产品", cta2: "关于我们" },
  common: { viewAll: "查看全部", viewDetails: "查看详情", learnMore: "了解更多", sendInquiry: "发送询价", getInTouch: "联系我们", requestQuote: "请求报价" },
  contact: { title: "发送您的询价", subtitle: "填写以下信息，我们的团队将在24小时内回复。", name: "全名", email: "邮箱", phone: "电话", company: "公司", country: "国家", product: "感兴趣的产品", quantity: "预估数量", message: "留言", submit: "联系我们", success: "询价发送成功！", successMsg: "感谢您的关注。我们的团队将在24小时内回复。" },
};

const it = {
  nav: { home: "Home", about: "Chi Siamo", products: "Prodotti", certificates: "Certificati", contact: "Contatti", inquiry: "Contattaci" },
  hero: { eyebrow: "Il Vostro Partner Verificato per le Merci Indiane", title: "Ocean Crest Exports", subtitle: "Un marchio di esportazione specializzato sotto Sheth & Bhatt's LLP, dedicato alla distribuzione globale di prodotti indiani di alta qualità.", cta1: "Vedi Prodotti", cta2: "Chi Siamo" },
  common: { viewAll: "Vedi Tutti", viewDetails: "Vedi Dettagli", learnMore: "Scopri di Più", sendInquiry: "Invia Richiesta", getInTouch: "Contattaci", requestQuote: "Richiedi Preventivo" },
  contact: { title: "Inviaci la Tua Richiesta", subtitle: "Compila i dettagli e il nostro team ti risponderà entro 24 ore.", name: "Nome Completo", email: "Email", phone: "Telefono", company: "Azienda", country: "Paese", product: "Prodotto di Interesse", quantity: "Quantità Stimata", message: "Messaggio", submit: "Contattaci", success: "Richiesta Inviata con Successo!", successMsg: "Grazie per il tuo interesse. Il nostro team risponderà entro 24 ore." },
};

const ko = {
  nav: { home: "홈", about: "회사 소개", products: "제품", certificates: "인증", contact: "연락처", inquiry: "문의하기" },
  hero: { eyebrow: "인도 상품의 검증된 파트너", title: "Ocean Crest Exports", subtitle: "Sheth & Bhatt's LLP 산하의 전문 수출 브랜드로, 고품질 인도 제품의 글로벌 유통에 전념합니다.", cta1: "제품 보기", cta2: "회사 소개" },
  common: { viewAll: "전체 보기", viewDetails: "상세 보기", learnMore: "더 알아보기", sendInquiry: "문의 보내기", getInTouch: "문의하기", requestQuote: "견적 요청" },
  contact: { title: "문의를 보내주세요", subtitle: "아래 세부 정보를 입력하시면 저희 팀이 24시간 이내에 답변드리겠습니다.", name: "성명", email: "이메일", phone: "전화번호", company: "회사명", country: "국가", product: "관심 제품", quantity: "예상 수량", message: "메시지", submit: "문의하기", success: "문의가 성공적으로 전송되었습니다!", successMsg: "관심을 가져주셔서 감사합니다. 저희 팀이 24시간 이내에 답변드리겠습니다." },
};

const ja = {
  nav: { home: "ホーム", about: "会社概要", products: "製品", certificates: "認証", contact: "お問い合わせ", inquiry: "お問い合わせ" },
  hero: { eyebrow: "インド商品の信頼できるパートナー", title: "Ocean Crest Exports", subtitle: "Sheth & Bhatt's LLP傘下の専門輸出ブランドとして、高品質なインド製品のグローバル流通に取り組んでいます。", cta1: "製品を見る", cta2: "会社概要" },
  common: { viewAll: "すべて見る", viewDetails: "詳細を見る", learnMore: "詳しく見る", sendInquiry: "お問い合わせ", getInTouch: "お問い合わせ", requestQuote: "見積もり依頼" },
  contact: { title: "お問い合わせを送信", subtitle: "以下の詳細をご記入ください。チームが24時間以内にご返答いたします。", name: "氏名", email: "メールアドレス", phone: "電話番号", company: "会社名", country: "国", product: "ご関心の製品", quantity: "推定数量", message: "メッセージ", submit: "お問い合わせ", success: "お問い合わせが正常に送信されました!", successMsg: "ご関心をお寄せいただきありがとうございます。チームが24時間以内にご返答いたします。" },
};

export const translations: Record<string, any> = {
  en, hi, ar, ur, fr, de, es, ru, zh, it, ko, ja,
};

export const localeNames: Record<string, string> = {
  en: "English",
  hi: "हिन्दी",
  ar: "العربية",
  ur: "اردو",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  ru: "Русский",
  zh: "中文",
  it: "Italiano",
  ko: "한국어",
  ja: "日本語",
};

export type Locale = "en" | "hi" | "ar" | "ur" | "fr" | "de" | "es" | "ru" | "zh" | "it" | "ko" | "ja";
