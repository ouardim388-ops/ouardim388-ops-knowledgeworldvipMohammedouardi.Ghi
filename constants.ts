import { Language, Series, MusicData, BrainstormTopic, ArtGalleryItem, Gift } from './types';

export const SERIES_DATA: Series[] = [
  { id: 'general_culture', name: { [Language.EN]: 'General Culture', [Language.FR]: 'Culture Générale', [Language.AR]: 'الثقافة العامة' }, icon: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60' },
  { id: 'mathematics', name: { [Language.EN]: 'Mathematics', [Language.FR]: 'Mathématiques', [Language.AR]: 'الرياضيات' }, icon: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&q=60' },
  { id: 'physics', name: { [Language.EN]: 'Physics', [Language.FR]: 'Physique', [Language.AR]: 'الفيزياء' }, icon: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?auto=format&fit=crop&w=800&q=60' },
  { id: 'animals', name: { [Language.EN]: 'Animals', [Language.FR]: 'Animaux', [Language.AR]: 'الحيوانات' }, icon: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=60' },
  { id: 'movies', name: { [Language.EN]: 'Movies', [Language.FR]: 'Films', [Language.AR]: 'الأفلام' }, icon: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=60' },
  { id: 'geography', name: { [Language.EN]: 'Geography', [Language.FR]: 'Géographie', [Language.AR]: 'الجغرافيا' }, icon: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60' },
  { id: 'history', name: { [Language.EN]: 'History', [Language.FR]: 'Histoire', [Language.AR]: 'التاريخ' }, icon: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60' },
  { id: 'technology', name: { [Language.EN]: 'Technology', [Language.FR]: 'Technologie', [Language.AR]: 'التكنولوجيا' }, icon: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60' },
  { id: 'literature_art', name: { [Language.EN]: 'Literature & Art', [Language.FR]: 'Art & Littérature', [Language.AR]: 'الأدب والفن' }, icon: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=60' },
  { id: 'sports', name: { [Language.EN]: 'Sports', [Language.FR]: 'Sports', [Language.AR]: 'الرياضة' }, icon: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=60' },
  { id: 'brainstorming', name: { [Language.EN]: 'Brainstorming', [Language.FR]: 'Remue-méninges', [Language.AR]: 'تبادل الأفكار' }, icon: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=60' },
  { id: 'art_gallery', name: { [Language.EN]: 'AI Art Gallery', [Language.FR]: "Galerie d'Art IA", [Language.AR]: 'معرض الفنون' }, icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAwIDIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2dvbGQtZ3JhZCcgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI0ZGRDcwMCcvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI0I4ODYwQicvPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD0nZ2xvdyc+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMy41JyByZXN1bHQ9J2NvbG9yZWRCbHVyJy8+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPSdjb2xvcmVkQmx1cicvPjxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYycvPjwvZmVNZXJnZT48L2ZpbHRlcj48L2RlZnM+PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTAwIDEwMCknIGZpbHRlcj0ndXJsKCNnbG9wKSc+PHBhdGggZD0nTTc1IDI1IEMgNzUgNTAsIDUwIDc1LCAyNSA3NSBDIDAgNzUsIC0yNSA1MCwgLTI1IDI1IEMgLTI1IDAsIDAgLTI1LCAyNSAtMjUgQyA1MCAtMjUsIDc1IDAsIDc1IDI1IFogTS01MCAtMjUgTCA1MCAtNzUgTCA2MCAtNjUgTCAtNDAgLTE1IFonIHN0cm9rZT0ndXJsKCNnb2xkLWdyYWQpJyBzdHJva2Utd2lkdGg9JzYnIGZpbGw9J25vbmUnLz48Y2lyY2xlIGN4PSc0NScgY3k9JzAnIHI9JzEwJyBmaWxsPSd1cmwoI2dvbGQtZ3JhZCknLz48Y2lyY2xlIGN4PScxNScgY3k9JzM1JyByPScxMCcgZmlsbD0ndXJsKCNnb2xkLWdyYWQpJy8+PGNpcmNsZSBjeD0nLTUnIGN5PSctNScgcj0nMTAnIGZpbGw9J3VybCgjZ29sZC1ncmFkJy8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAiIHRvPSIzNjAiIGR1cj0iMzBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz48L2c+PC9zdmc+' },
  { id: 'tic_tac_toe', name: { [Language.EN]: 'X O', [Language.FR]: 'Morpion', [Language.AR]: 'إكس أو' }, icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAwIDIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2dvbGQtZ3JhZCcgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI0ZGRDcwMCcvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI0I4ODYwQicvPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD0nZ2xvdyc+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMy41JyByZXN1bHQ9J2NvbG9yZWRCbHVyJy8+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPSdjb2xvcmVkQmx1cicvPjxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYycvPjwvZmVNZXJnZT48L2ZpbHRlcj48L2RlZnM+PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTAwIDEwMCknIGZpbHRlcj0ndXJsKCNnbG9wKScgc3Ryb2tlPSd1cmwoI2dvbGQtZ3JhZCknIHN0cm9rZS13aWR0aD0nOCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJz48cGF0aCBkPSdNLTMwIC04MCBWIDgwIE0zMCAtODAgViA4MCBNLTgwIC0zMCBIIDgwIE0tODAgMzAgSCA4MCc+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgdmFsdWVzPSIxOzEuMDI7MSIgZHVyPSI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9nPjwvc3ZnPg==' },
];

export const UI_TEXT = {
  [Language.EN]: {
    appName: 'Knowledge World VIP',
    selectLanguage: 'Select Language',
    back: 'Back',
    score: 'Score',
    question: 'Question',
    finalScore: 'Final Score',
    correctAnswers: 'Correct',
    wrongAnswers: 'Wrong',
    playAgain: 'Play Again',
    didYouKnow: "Did you know?",
    combo: "COMBO",
    musicPlaylist: "Music Playlist",
    arabic: "Arabic",
    french: "French",
    english: "English",
    yourTurn: "Your Turn!",
    aiTurn: "AI is thinking...",
    youWin: "You Win!",
    youLose: "AI Wins!",
    draw: "It's a Draw!",
    challenge: "Challenge",
    wins: "Wins",
    giftShop: "Gift Shop",
    sendTo: "Send to",
    send: "Send",
    notEnoughCoins: "Not enough coins!",
    youSent: "You sent",
    to: "to",
    questionLoadError: "Failed to load questions. Please check your internet connection and try again.",
    chooseAvatar: "Choose Your Avatar",
    girls: "Girls",
    kids: "Kids",
    youth: "Youth",
    men: "Men",
    createAccount: "Create Your Account",
    name: "Name",
    email: "Email (Gmail)",
    continue: "Continue",
  },
  [Language.FR]: {
    appName: 'Monde du Savoir VIP',
    selectLanguage: 'Choisir la langue',
    back: 'Retour',
    score: 'Score',
    question: 'Question',
    finalScore: 'Score Final',
    correctAnswers: 'Correct',
    wrongAnswers: 'Incorrect',
    playAgain: 'Rejouer',
    didYouKnow: "Le saviez-vous?",
    combo: "COMBO",
    musicPlaylist: "Playlist Musicale",
    arabic: "Arabe",
    french: "Français",
    english: "Anglais",
    yourTurn: "À votre tour!",
    aiTurn: "L'IA réfléchit...",
    youWin: "Vous avez gagné!",
    youLose: "L'IA gagne!",
    draw: "Égalité!",
    challenge: "Défi",
    wins: "Victoires",
    giftShop: "Boutique Cadeaux",
    sendTo: "Envoyer à",
    send: "Envoyer",
    notEnoughCoins: "Pièces insuffisantes !",
    youSent: "Vous avez envoyé",
    to: "à",
    questionLoadError: "Échec du chargement des questions. Veuillez vérifier votre connexion Internet et réessayer.",
    chooseAvatar: "Choisissez votre avatar",
    girls: "Filles",
    kids: "Enfants",
    youth: "Jeunes",
    men: "Hommes",
    createAccount: "Créez votre compte",
    name: "Nom",
    email: "E-mail (Gmail)",
    continue: "Continuer",
  },
  [Language.AR]: {
    appName: 'عالم المعرفة VIP',
    selectLanguage: 'اختر اللغة',
    back: 'رجوع',
    score: 'النقاط',
    question: 'سؤال',
    finalScore: 'النتيجة النهائية',
    correctAnswers: 'صحيحة',
    wrongAnswers: 'خاطئة',
    playAgain: 'إلعب مرة أخرى',
    didYouKnow: "هل تعلم؟",
    combo: "كومبو",
    musicPlaylist: "قائمة الموسيقى",
    arabic: "العربية",
    french: "الفرنسية",
    english: "الإنجليزية",
    yourTurn: "دورك!",
    aiTurn: "الخصم يفكر...",
    youWin: "لقد فزت!",
    youLose: "فاز الخصم!",
    draw: "تعادل!",
    challenge: "تحدي",
    wins: "انتصارات",
    giftShop: "متجر الهدايا",
    sendTo: "إرسال إلى",
    send: "إرسال",
    notEnoughCoins: "ليس لديك عملات كافية!",
    youSent: "لقد أرسلت",
    to: "إلى",
    questionLoadError: "فشل تحميل الأسئلة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
    chooseAvatar: "اختر صورتك الرمزية",
    girls: "بنات",
    kids: "أطفال",
    youth: "شباب",
    men: "رجال",
    createAccount: "أنشئ حسابك",
    name: "الاسم",
    email: "البريد الإلكتروني (Gmail)",
    continue: "متابعة",
  },
};

export const LOADING_TIPS = {
  [Language.EN]: [
    "The human brain contains about 86 billion neurons.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A single cloud can weigh more than 1 million pounds.",
    "Octopuses have three hearts."
  ],
  [Language.FR]: [
    "Le cerveau humain contient environ 86 milliards de neurones.",
    "La Tour Eiffel peut être plus haute de 15 cm en été.",
    "Un seul nuage peut peser plus de 450 000 kilogrammes.",
    "Les pieuvres ont trois cœurs."
  ],
  [Language.AR]: [
    "يحتوي دماغ الإنسان على حوالي 86 مليار خلية عصبية.",
    "يمكن أن يكون برج إيفل أطول بمقدار 15 سم خلال فصل الصيف.",
    "يمكن أن تزن سحابة واحدة أكثر من مليون رطل.",
    "الأخطبوطات لها ثلاثة قلوب."
  ]
};

export const RESULTS_TITLES = {
  [Language.EN]: {
    genius: "Genius!",
    expert: "Expert!",
    pro: "Pro!",
    gettingThere: "Getting There!",
    novice: "Novice"
  },
  [Language.FR]: {
    genius: "Génie!",
    expert: "Expert!",
    pro: "Pro!",
    gettingThere: "En Progrès!",
    novice: "Novice"
  },
  [Language.AR]: {
    genius: "عبقري!",
    expert: "خبير!",
    pro: "محترف!",
    gettingThere: "في تقدم!",
    novice: "مبتدئ"
  }
};


const PLACEHOLDER_AUDIO = "data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBvciBsYXVuY2ggYWViZXNjgg==";

export const MUSIC_DATA: MusicData = {
  [Language.AR]: [
    { title: "المعلم", artist: "سعد لمجرد", src: PLACEHOLDER_AUDIO },
    { title: "غلطانة", artist: "سعد لمجرد", src: PLACEHOLDER_AUDIO },
    { title: "مزيان واعر", artist: "الدوزي", src: PLACEHOLDER_AUDIO },
    { title: "حتى لقيت لي تبغيني", artist: "حاتم عمور", src: PLACEHOLDER_AUDIO },
    { title: "سلام", artist: "أسماء لمنور", src: PLACEHOLDER_AUDIO },
    { title: "يا بنات", artist: "نانسي عجرم", src: PLACEHOLDER_AUDIO },
    { title: "بالبنط العريض", artist: "حسين الجسمي", src: PLACEHOLDER_AUDIO },
    { title: "3 دقات", artist: "أبو و يسرا", src: PLACEHOLDER_AUDIO },
    { title: "انت باغية واحد", artist: "سعد لمجرد", src: PLACEHOLDER_AUDIO },
    { title: "عندو الزين", artist: "أسماء لمنور", src: PLACEHOLDER_AUDIO },
    { title: "مكتوبة ليك", artist: "شيرين عبد الوهاب", src: PLACEHOLDER_AUDIO },
    { title: "الغزالة رايقة", artist: "محمد أسامة", src: PLACEHOLDER_AUDIO },
    { title: "تعالى أدلعك", artist: "بهاء سلطان", src: PLACEHOLDER_AUDIO },
    { title: "سيدي", artist: "جميلة البداوي", src: PLACEHOLDER_AUDIO },
    { title: "ماشي ساهل", artist: "سعد لمجرد", src: PLACEHOLDER_AUDIO },
    { title: "حبيبي", artist: "محمد رمضان", src: PLACEHOLDER_AUDIO },
    { title: "كازابلانكا", artist: "سعد لمجرد", src: PLACEHOLDER_AUDIO },
    { title: "قولي متى", artist: "شيرين عبد الوهاب", src: PLACEHOLDER_AUDIO },
    { title: "بشرة خير", artist: "حسين الجسمي", src: PLACEHOLDER_AUDIO },
    { title: "إنساي", artist: "محمد رمضان وسعد لمجرد", src: PLACEHOLDER_AUDIO },
  ],
  [Language.FR]: [
    { title: "Djadja", artist: "Aya Nakamura", src: PLACEHOLDER_AUDIO },
    { title: "Copines", artist: "Aya Nakamura", src: PLACEHOLDER_AUDIO },
    { title: "La Vie en Rose", artist: "Edith Piaf", src: PLACEHOLDER_AUDIO },
    { title: "Formidable", artist: "Stromae", src: PLACEHOLDER_AUDIO },
    { title: "Alors on Danse", artist: "Stromae", src: PLACEHOLDER_AUDIO },
    { title: "Dernière Danse", artist: "Indila", src: PLACEHOLDER_AUDIO },
    { title: "Sapés comme jamais", artist: "Maître Gims", src: PLACEHOLDER_AUDIO },
    { title: "Bella", artist: "Maître Gims", src: PLACEHOLDER_AUDIO },
    { title: "Le Coach", artist: "Soprano", src: PLACEHOLDER_AUDIO },
    { title: "Cosmo", artist: "Soprano", src: PLACEHOLDER_AUDIO },
    { title: "Angela", artist: "Hatik", src: PLACEHOLDER_AUDIO },
    { title: "Ne reviens pas", artist: "Gradur ft. Heuss L'enfoiré", src: PLACEHOLDER_AUDIO },
    { title: "Bande organisée", artist: "13 Organisé", src: PLACEHOLDER_AUDIO },
    { title: "Au DD", artist: "PNL", src: PLACEHOLDER_AUDIO },
    { title: "Réseaux", artist: "Niska", src: PLACEHOLDER_AUDIO },
    { title: "Moulaga", artist: "Heuss l'Enfoiré", src: PLACEHOLDER_AUDIO },
    { title: "Macarena", artist: "Damso", src: PLACEHOLDER_AUDIO },
    { title: "Je te le donne", artist: "Vitaa & Slimane", src: PLACEHOLDER_AUDIO },
    { title: "Amour Censure", artist: "Hoshi", src: PLACEHOLDER_AUDIO },
    { title: "Balance ton quoi", artist: "Angèle", src: PLACEHOLDER_AUDIO },
  ],
  [Language.EN]: [
    { title: "Blinding Lights", artist: "The Weeknd", src: PLACEHOLDER_AUDIO },
    { title: "Shape of You", artist: "Ed Sheeran", src: PLACEHOLDER_AUDIO },
    { title: "Dance Monkey", artist: "Tones and I", src: PLACEHOLDER_AUDIO },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", src: PLACEHOLDER_AUDIO },
    { title: "Shallow", artist: "Lady Gaga, Bradley Cooper", src: PLACEHOLDER_AUDIO },
    { title: "Old Town Road", artist: "Lil Nas X ft. Billy Ray Cyrus", src: PLACEHOLDER_AUDIO },
    { title: "Someone You Loved", artist: "Lewis Capaldi", src: PLACEHOLDER_AUDIO },
    { title: "Rolling in the Deep", artist: "Adele", src: PLACEHOLDER_AUDIO },
    { title: "Happy", artist: "Pharrell Williams", src: PLACEHOLDER_AUDIO },
    { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", src: PLACEHOLDER_AUDIO },
    { title: "Watermelon Sugar", artist: "Harry Styles", src: PLACEHOLDER_AUDIO },
    { title: "Levitating", artist: "Dua Lipa", src: PLACEHOLDER_AUDIO },
    { title: "Good 4 U", artist: "Olivia Rodrigo", src: PLACEHOLDER_AUDIO },
    { title: "Stay", artist: "The Kid LAROI, Justin Bieber", src: PLACEHOLDER_AUDIO },
    { title: "As It Was", artist: "Harry Styles", src: PLACEHOLDER_AUDIO },
    { title: "Bad Habits", artist: "Ed Sheeran", src: PLACEHOLDER_AUDIO },
    { title: "Heat Waves", artist: "Glass Animals", src: PLACEHOLDER_AUDIO },
    { title: "Drivers License", artist: "Olivia Rodrigo", src: PLACEHOLDER_AUDIO },
    { title: "Truth Hurts", artist: "Lizzo", src: PLACEHOLDER_AUDIO },
    { title: "Savage Love", artist: "Jawsh 685, Jason Derulo", src: PLACEHOLDER_AUDIO },
  ],
};

export const GIFT_DATA: Gift[] = [
  { id: 'rose', name: { [Language.EN]: 'Rose', [Language.FR]: 'Rose', [Language.AR]: 'وردة' }, icon: '🌹', price: 10 },
  { id: 'heart', name: { [Language.EN]: 'Heart', [Language.FR]: 'Cœur', [Language.AR]: 'قلب' }, icon: '💖', price: 20 },
  { id: 'ring', name: { [Language.EN]: 'Ring', [Language.FR]: 'Bague', [Language.AR]: 'خاتم' }, icon: '💍', price: 50 },
  { id: 'necklace', name: { [Language.EN]: 'Necklace', [Language.FR]: 'Collier', [Language.AR]: 'قلادة' }, icon: '💎', price: 100 },
  { id: 'crown', name: { [Language.EN]: 'Crown', [Language.FR]: 'Couronne', [Language.AR]: 'تاج' }, icon: '👑', price: 250 },
];

export const BRAINSTORM_TOPICS: BrainstormTopic[] = [
  {
    id: 'topic_time_travel',
    title: {
      [Language.EN]: 'If you could travel in time, which era would you visit and why?',
      [Language.FR]: 'Si vous pouviez voyager dans le temps, quelle époque visiteriez-vous et pourquoi ?',
      [Language.AR]: 'لو كان بإمكانك السفر عبر الزمن، إلى أي حقبة ستذهب ولماذا؟'
    }
  },
    {
    id: 'topic_superpower',
    title: {
      [Language.EN]: 'If you could have any superpower, what would it be and how would you use it?',
      [Language.FR]: 'Si vous pouviez avoir un super-pouvoir, lequel serait-ce et comment l\'utiliseriez-vous ?',
      [Language.AR]: 'لو كان بإمكانك امتلاك قوة خارقة، ماذا ستكون وكيف ستخدمها؟'
    }
  }
];

export const ART_GALLERY_DATA: ArtGalleryItem[] = [
    {
        id: 'art_gc',
        seriesId: 'general_culture',
        title: { [Language.EN]: 'Echoes of Erudition', [Language.FR]: 'Échos d\'Érudition', [Language.AR]: 'أصداء المعرفة' },
        description: { [Language.EN]: 'A digital tapestry weaving together threads of history, science, and art, this piece visualizes the vast, interconnected web of human knowledge.', [Language.FR]: 'Telle une tapisserie numérique, cette œuvre entrelace les fils de l\'histoire, de la science et de l\'art, visualisant le vaste réseau interconnecté du savoir humain.', [Language.AR]: 'نسيج رقمي يجمع خيوط التاريخ والعلوم والفن، تصور هذه القطعة الشبكة الواسعة والمترابطة للمعرفة الإنسانية.' },
        imageUrl: 'https://images.unsplash.com/photo-1558005530-5396b7a5a81a?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_math',
        seriesId: 'mathematics',
        title: { [Language.EN]: 'The Mandelbrot Dream', [Language.FR]: 'Le Rêve de Mandelbrot', [Language.AR]: 'حلم ماندلبروت' },
        description: { [Language.EN]: 'The universe is rendered as a complex fractal, revealing the inherent mathematical beauty in chaos. Each swirl is a formula, each color a different dimension of numerical truth.', [Language.FR]: 'L\'univers est rendu comme une fractale complexe, révélant la beauté mathématique inhérente au chaos. Chaque tourbillon est une formule, chaque couleur une dimension différente de la vérité numérique.', [Language.AR]: 'يتم تصوير الكون على أنه كسيري معقد، مما يكشف عن الجمال الرياضي الكامن في الفوضى. كل دوامة هي صيغة، وكل لون هو بُعد مختلف للحقيقة العددية.' },
        imageUrl: 'https://images.unsplash.com/photo-1524121410213-1a6c1a85b985?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_physics',
        seriesId: 'physics',
        title: { [Language.EN]: 'Stardust Sonata', [Language.FR]: 'Sonate d\'Poussière d\'Étoiles', [Language.AR]: 'سوناتة غبار النجوم' },
        description: { [Language.EN]: 'A nebula is reimagined as a cosmic orchestra, where stars are born from the crescendo of gravitational forces and matter dances to the rhythm of the cosmos.', [Language.FR]: 'Une nébuleuse est réinventée en orchestre cosmique, où les étoiles naissent du crescendo des forces gravitationnelles et où la matière danse au rythme du cosmos.', [Language.AR]: 'إعادة تصور سديم كأوركسترا كونية، حيث تولد النجوم من تزايد قوى الجاذبية وتتراقص المادة على إيقاع الكون.' },
        imageUrl: 'https://images.unsplash.com/photo-1539736933938-88390d4a7c5c?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_animals',
        seriesId: 'animals',
        title: { [Language.EN]: 'The Primal Gaze', [Language.FR]: 'Le Regard Primitif', [Language.AR]: 'النظرة البدائية' },
        description: { [Language.EN]: 'The soul of the wilderness is captured in the intense gaze of its apex predator. The image explores the raw, untamed spirit that connects all living creatures.', [Language.FR]: 'L\'âme de la nature sauvage est capturée dans le regard intense de son prédateur suprême. L\'image explore l\'esprit brut et indompté qui relie toutes les créatures vivantes.', [Language.AR]: 'تم التقاط روح البرية في النظرة الحادة للمفترس الأعلى. تستكشف الصورة الروح الخام غير المروضة التي تربط جميع الكائنات الحية.' },
        imageUrl: 'https://images.unsplash.com/photo-1540272017381-824a73d01443?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_movies',
        seriesId: 'movies',
        title: { [Language.EN]: 'Neon Noir', [Language.FR]: 'Néon Noir', [Language.AR]: 'نيون نوير' },
        description: { [Language.EN]: 'A rain-slicked city street, bathed in the glow of neon signs, becomes a cinematic set. This piece evokes the mood and atmosphere of classic film noir, updated for a digital age.', [Language.FR]: 'Une rue de ville sous la pluie, baignée dans la lueur des enseignes au néon, devient un décor de cinéma. Cette œuvre évoque l\'ambiance et l\'atmosphère du film noir classique, mis à jour pour l\'ère numérique.', [Language.AR]: 'شارع مدينة ممطر، مغمور بوهج لافتات النيون، يصبح موقعًا سينمائيًا. تستحضر هذه القطعة مزاج وأجواء أفلام النوار الكلاسيكية، محدثة للعصر الرقمي.' },
        imageUrl: 'https://images.unsplash.com/photo-1517036033027-7c156f663b6a?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_geography',
        seriesId: 'geography',
        title: { [Language.EN]: 'Terra Firma', [Language.FR]: 'Terra Firma', [Language.AR]: 'الأرض الصلبة' },
        description: { [Language.EN]: 'The planet\'s raw power is sculpted into towering peaks and serene valleys. This artwork is a meditation on the geological forces that shape our world, painting a portrait of Earth itself.', [Language.FR]: 'La puissance brute de la planète est sculptée en pics imposants et en vallées sereines. Cette œuvre est une méditation sur les forces géologiques qui façonnent notre monde, peignant un portrait de la Terre elle-même.', [Language.AR]: 'قوة الكوكب الخام منحوتة في قمم شاهقة ووديان هادئة. هذا العمل الفني هو تأمل في القوى الجيولوجية التي تشكل عالمنا، ويرسم صورة للأرض نفسها.' },
        imageUrl: 'https://images.unsplash.com/photo-1506904221051-b97da4381765?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_history',
        seriesId: 'history',
        title: { [Language.EN]: 'Ozymandias Protocol', [Language.FR]: 'Protocole Ozymandias', [Language.AR]: 'بروتوكول أوزيماندياس' },
        description: { [Language.EN]: 'Ancient ruins are overlaid with faint, holographic data streams, representing the ghosts of a fallen empire. It\'s a reflection on time, memory, and the inevitable decay of all civilizations.', [Language.FR]: 'Des ruines antiques sont superposées de faibles flux de données holographiques, représentant les fantômes d\'un empire déchu. C\'est une réflexion sur le temps, la mémoire et la décadence inévitable de toutes les civilisations.', [Language.AR]: 'تتداخل الأنقاض القديمة مع تيارات بيانات هولوغرافية باهتة، تمثل أشباح إمبراطورية سقطت. إنه انعكاس للزمن والذاكرة والتحلل الحتمي لجميع الحضارات.' },
        imageUrl: 'https://images.unsplash.com/photo-1513038334468-b6b9a888c6a2?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_technology',
        seriesId: 'technology',
        title: { [Language.EN]: 'Synaptic Cityscape', [Language.FR]: 'Paysage Urbain Synaptique', [Language.AR]: 'مشهد مدينة تشابكي' },
        description: { [Language.EN]: 'A metropolis at night is transformed into a sprawling neural network. The lights of buildings and traffic become firing synapses, illustrating the collective consciousness of a modern city.', [Language.FR]: 'Une métropole nocturne se transforme en un vaste réseau de neurones. Les lumières des bâtiments et de la circulation deviennent des synapses en action, illustrant la conscience collective d\'une ville moderne.', [Language.AR]: 'تتحول حاضرة ليلية إلى شبكة عصبية مترامية الأطراف. تصبح أضواء المباني وحركة المرور نقاط تشابك عصبية متقدة، مما يوضح الوعي الجماعي لمدينة حديثة.' },
        imageUrl: 'https://images.unsplash.com/photo-1542777649544-2436e2f17a94?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_lit_art',
        seriesId: 'literature_art',
        title: { [Language.EN]: 'The Muse\'s Medium', [Language.FR]: 'Le Médium de la Muse', [Language.AR]: 'وسيط الإلهام' },
        description: { [Language.EN]: 'This piece captures the chaotic yet beautiful mess of creation. Paint, brushes, and words merge into a single form, suggesting that all art, whether written or visual, stems from the same universal source of inspiration.', [Language.FR]: 'Cette pièce capture le désordre chaotique mais magnifique de la création. Peinture, pinceaux et mots fusionnent en une seule forme, suggérant que tout art, qu\'il soit écrit ou visuel, provient de la même source universelle d\'inspiration.', [Language.AR]: 'تلتقط هذه القطعة الفوضى الخلاقة والجميلة في آن واحد. يندمج الطلاء والفرش والكلمات في شكل واحد، مما يوحي بأن كل الفن، سواء كان مكتوبًا أو مرئيًا، ينبع من نفس المصدر العالمي للإلهام.' },
        imageUrl: 'https://images.unsplash.com/photo-1517406935116-864c48ac912b?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 'art_sports',
        seriesId: 'sports',
        title: { [Language.EN]: 'Kinetic Soul', [Language.FR]: 'Âme Cinétique', [Language.AR]: 'الروح الحركية' },
        description: { [Language.EN]: 'Human potential in motion. The image freezes a moment of peak physical exertion, transforming it into a sculpture of muscle, will, and determination. It celebrates the body as the ultimate instrument of performance.', [Language.FR]: 'Le potentiel humain en mouvement. L\'image fige un moment d\'effort physique maximal, le transformant en une sculpture de muscle, de volonté et de détermination. Elle célèbre le corps comme l\'instrument ultime de la performance.', [Language.AR]: 'الإمكانات البشرية في حالة حركة. تجمد الصورة لحظة من الجهد البدني الأقصى، وتحولها إلى تمثال من العضلات والإرادة والتصميم. إنها تحتفي بالجسد كأداة أداء مطلقة.' },
        imageUrl: 'https://images.unsplash.com/photo-1483900424361-53c8f3a393c0?auto=format&fit=crop&w=800&q=60'
    },
];

export const AVATAR_DATA = {
  girls: [
    'https://images.unsplash.com/photo-1594744803329-e58b314e3980?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1545912452-85756a3a9738?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1552699645-3930a4a4081d?auto=format&fit=crop&w=150&q=80',
  ],
  kids: [
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1534723991139-6b7132b814dc?auto=format&fit=crop&w=150&q=80',
  ],
  youth: [
    'https://images.unsplash.com/photo-1550757750-4ce187a65014?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=150&q=80',
  ],
  men: [
    'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&q=80',
  ],
};