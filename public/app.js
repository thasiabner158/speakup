// ================================================================
// SpeakUp — Speech Topic Generator
// ================================================================

// ---- Translations ----
const TRANSLATIONS = {
  en: {
    'header.settings': 'Settings',
    'tab.generator': 'Topic Generator',
    'tab.interview': 'Interview Prep',
    'tab.vocab': 'Learn Vocab',
    'label.category': 'Category',
    'label.difficulty': 'Difficulty',
    'label.qtype': 'Question Type',
    'cat.general': 'General',
    'cat.tech': 'Tech',
    'cat.finance': 'Finance',
    'cat.roast': 'Roast A Popular Thing',
    'cat.defend': 'Defend The Worst Take',
    'cat.millennial': 'Millennial',
    'cat.genz': 'Gen Z',
    'cat.conspiracy': 'Conspiracy Corner',
    'diff.random': 'Random',
    'diff.easy': 'Easy',
    'diff.medium': 'Medium',
    'diff.hard': 'Hard',
    'itype.behavioral': 'Behavioral',
    'itype.technical': 'Technical',
    'itype.situational': 'Situational',
    'itype.consulting': 'Consulting / Case',
    'ph.topic': 'Press generate to get your topic!',
    'ph.interview': 'Press generate to get your interview question!',
    'ph.vocab': 'Press generate to get a vocabulary word!',
    'btn.generate': 'Generate Topic',
    'btn.generateQ': 'Generate Question',
    'btn.generateVocab': 'Get Vocabulary',
    'btn.copy': '📋 Copy',
    'btn.cancel': 'Cancel',
    'btn.save': 'Save',
    'timer.label': 'Timer',
    'timer.start': 'Start',
    'timer.pause': 'Pause',
    'timer.resume': 'Resume',
    'timer.reset': 'Reset',
    'fw.title': 'Speech Frameworks',
    'fw.mece': 'Mutually Exclusive, Collectively Exhaustive',
    'tip.star': 'Use the STAR Framework',
    'tip.vocab': 'How to Practice',
    'star.s': 'Situation',
    'star.sDesc': 'Set the scene and provide context',
    'star.t': 'Task',
    'star.tDesc': 'Describe your responsibility',
    'star.a': 'Action',
    'star.aDesc': 'Explain what you did',
    'star.r': 'Result',
    'star.rDesc': 'Share the outcome',
    'vp.1': 'Read the word and its definition carefully',
    'vp.2': 'Start the 30-second timer',
    'vp.3': 'Speak a sentence out loud using the word',
    'vp.4': 'Try to use it 3 times naturally in speech',
    'settings.title': 'Settings',
    'settings.apiLabel': 'Groq API Key (Free)',
    'settings.hint': 'Stored in your browser only. Never sent to our servers.',
    'settings.getKey': 'Get your FREE Groq API key (no credit card) →',
    'toast.saved': '✅ Settings saved!',
    'toast.noKey': '⚠️ Please enter your Groq API key in Settings (free at console.groq.com)',
    'toast.copied': '📋 Copied to clipboard!',
    'toast.timesUp': '⏰ Time\'s up!',
    'toast.error': 'Error: ',
    'rec.title': '🎙 IELTS Speaking Practice',
    'rec.start': 'Start Recording',
    'rec.stop': 'Stop Recording',
    'rec.submit': 'Submit for IELTS Feedback',
    'rec.analyze': 'Analyze Speech',
    'rec.ph': 'Your speech will appear here as you speak...',
    'rec.noSupport': 'Speech recognition not supported. Please use Chrome or Edge.',
    'rec.noSpeech': 'No speech detected. Please try again.',
    'sample.btn': '✨ Sample Answer',
    'sample.title': 'Sample Answer',
    'sample.loading': 'Generating sample answer...',
    'sample.keyphrases': 'Key Phrases',
    'ielts.overall': 'Overall Band Score',
    'ielts.fc': 'Fluency & Coherence',
    'ielts.gra': 'Grammatical Range & Accuracy',
    'ielts.lr': 'Lexical Resource',
    'ielts.p': 'Pronunciation',
    'ielts.tips': 'Key Improvements',
    'ielts.words': 'words spoken',
    'ielts.errors': 'Grammar Corrections',
    'ielts.upgrades': 'Vocabulary Upgrades',
    'ielts.corrected': 'Band 7–9 Rewrite',
    'ielts.rewritePhrases': 'Useful Phrases & Structures',
    'tab.grammar': 'Learn Grammar',
    'tab.ielts': 'IELTS Practice',
    'ielts.generateQ': 'Generate IELTS Questions',
    'label.ieltsTopic': 'IELTS Topic',
    'ielts.next': 'Next Question →',
    'ielts.prev': '← Prev',
    'ielts.prepNote': '📝 1 minute to prepare — use the timer below',
    'ielts.done': '🎉 Practice complete!',
    'ielts.submitAll': '📊 Submit All & Get Full Feedback',
  },
  vi: {
    'header.settings': 'Cài Đặt',
    'tab.generator': 'Tạo Chủ Đề',
    'tab.interview': 'Luyện Phỏng Vấn',
    'tab.vocab': 'Học Từ Vựng',
    'label.category': 'Danh Mục',
    'label.difficulty': 'Độ Khó',
    'label.qtype': 'Loại Câu Hỏi',
    'cat.general': 'Chung',
    'cat.tech': 'Công Nghệ',
    'cat.finance': 'Tài Chính',
    'cat.roast': 'Chê Một Điều Phổ Biến',
    'cat.defend': 'Bảo Vệ Quan Điểm Tệ Nhất',
    'cat.millennial': 'Thế Hệ Millennial',
    'cat.genz': 'Thế Hệ Gen Z',
    'cat.conspiracy': 'Lý Thuyết Âm Mưu',
    'diff.random': 'Ngẫu Nhiên',
    'diff.easy': 'Dễ',
    'diff.medium': 'Trung Bình',
    'diff.hard': 'Khó',
    'itype.behavioral': 'Hành Vi',
    'itype.technical': 'Kỹ Thuật',
    'itype.situational': 'Tình Huống',
    'itype.consulting': 'Tư Vấn / Case Study',
    'ph.topic': 'Nhấn tạo để nhận chủ đề!',
    'ph.interview': 'Nhấn tạo để nhận câu hỏi phỏng vấn!',
    'ph.vocab': 'Nhấn tạo để nhận từ vựng!',
    'btn.generate': 'Tạo Chủ Đề',
    'btn.generateQ': 'Tạo Câu Hỏi',
    'btn.generateVocab': 'Nhận Từ Vựng',
    'btn.copy': '📋 Sao Chép',
    'btn.cancel': 'Hủy',
    'btn.save': 'Lưu',
    'timer.label': 'Hẹn Giờ',
    'timer.start': 'Bắt Đầu',
    'timer.pause': 'Tạm Dừng',
    'timer.resume': 'Tiếp Tục',
    'timer.reset': 'Đặt Lại',
    'fw.title': 'Cấu Trúc Bài Nói',
    'fw.mece': 'Loại Trừ Lẫn Nhau, Bao Quát Toàn Bộ',
    'tip.star': 'Dùng Cấu Trúc STAR',
    'tip.vocab': 'Cách Luyện Tập',
    'star.s': 'Tình Huống',
    'star.sDesc': 'Đặt bối cảnh và cung cấp ngữ cảnh',
    'star.t': 'Nhiệm Vụ',
    'star.tDesc': 'Mô tả trách nhiệm của bạn',
    'star.a': 'Hành Động',
    'star.aDesc': 'Giải thích những gì bạn đã làm',
    'star.r': 'Kết Quả',
    'star.rDesc': 'Chia sẻ kết quả đạt được',
    'vp.1': 'Đọc từ và định nghĩa cẩn thận',
    'vp.2': 'Bắt đầu hẹn giờ 30 giây',
    'vp.3': 'Nói thành tiếng một câu có dùng từ đó',
    'vp.4': 'Cố gắng dùng từ đó 3 lần tự nhiên',
    'settings.title': 'Cài Đặt',
    'settings.apiLabel': 'Groq API Key (Miễn Phí)',
    'settings.hint': 'Chỉ lưu trong trình duyệt của bạn. Không gửi lên máy chủ.',
    'settings.getKey': 'Lấy Groq API key MIỄN PHÍ (không cần thẻ tín dụng) →',
    'toast.saved': '✅ Đã lưu cài đặt!',
    'toast.noKey': '⚠️ Vui lòng nhập Groq API key trong Cài Đặt (miễn phí tại console.groq.com)',
    'toast.copied': '📋 Đã sao chép!',
    'toast.timesUp': '⏰ Hết giờ!',
    'toast.error': 'Lỗi: ',
    'rec.title': '🎙 Luyện IELTS Speaking',
    'rec.start': 'Bắt Đầu Ghi Âm',
    'rec.stop': 'Dừng Ghi Âm',
    'rec.submit': 'Nộp Bài & Nhận Phản Hồi IELTS',
    'rec.analyze': 'Phân Tích Bài Nói',
    'rec.ph': 'Lời nói của bạn sẽ hiển thị tại đây...',
    'rec.noSupport': 'Trình duyệt không hỗ trợ ghi âm. Vui lòng dùng Chrome hoặc Edge.',
    'rec.noSpeech': 'Không nhận được giọng nói. Vui lòng thử lại.',
    'sample.btn': '✨ Xem Bài Mẫu',
    'sample.title': 'Bài Nói Mẫu',
    'sample.loading': 'Đang tạo bài mẫu...',
    'sample.keyphrases': 'Cụm Từ Hay',
    'ielts.overall': 'Band Score Tổng',
    'ielts.fc': 'Fluency & Coherence',
    'ielts.gra': 'Grammatical Range & Accuracy',
    'ielts.lr': 'Lexical Resource',
    'ielts.p': 'Pronunciation',
    'ielts.tips': 'Cần Cải Thiện',
    'ielts.words': 'từ đã nói',
    'ielts.errors': 'Sửa Lỗi Ngữ Pháp',
    'ielts.upgrades': 'Nâng Cấp Từ Vựng',
    'ielts.corrected': 'Bài Viết Lại Band 7–9',
    'ielts.rewritePhrases': 'Từ / Cụm Từ / Cấu Trúc Hay',
    'tab.grammar': 'Học Ngữ Pháp',
    'tab.ielts': 'Luyện IELTS',
    'ielts.generateQ': 'Tạo Câu Hỏi IELTS',
    'label.ieltsTopic': 'Chủ Đề IELTS',
    'ielts.next': 'Câu Tiếp Theo →',
    'ielts.prev': '← Quay Lại',
    'ielts.prepNote': '📝 Bạn có 1 phút chuẩn bị — dùng timer bên dưới',
    'ielts.done': '🎉 Hoàn thành luyện tập!',
    'ielts.submitAll': '📊 Nộp Bài & Nhận Phản Hồi Toàn Bài',
  }
};

// ---- State ----
const state = {
  lang: localStorage.getItem('speakup_lang') || 'en',
  apiKey: localStorage.getItem('speakup_api_key') || '',
  timers: {
    gen: { sec: 60,  initial: 60,  interval: null, running: false },
    int: { sec: 120, initial: 120, interval: null, running: false },
    voc: { sec: 30,  initial: 30,  interval: null, running: false },
    mock: { sec: 60, initial: 60,  interval: null, running: false },
  },
  lastResults: { topic: '', interview: '', vocab: '', mock: '', grammar: '' },
};

const ieltsTest = { questions: [], current: 0, answers: {}, samples: {} };

// ---- Helpers ----
const $ = id => document.getElementById(id);
function t(key) { return (TRANSLATIONS[state.lang] || {})[key] || TRANSLATIONS.en[key] || key; }
function escHtml(s) { const d = document.createElement('div'); d.appendChild(document.createTextNode(s)); return d.innerHTML; }
function fmtTime(s) { return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }

let toastTimer;
function showToast(msg, type = '') {
  const el = $('toast');
  el.textContent = msg;
  el.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

function setLoading(on) {
  $('loadingOverlay').classList.toggle('active', on);
}

// ---- i18n ----
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  $('langLabel').textContent = state.lang === 'en' ? '🇬🇧 EN' : '🇻🇳 VI';
  document.documentElement.setAttribute('data-lang', state.lang);
}

// ---- Tabs ----
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(el =>
    el.classList.toggle('active', el.dataset.tab === tab));
  document.querySelectorAll('.tab-content').forEach(el =>
    el.classList.toggle('active', el.id === `tab-${tab}`));
}

// ---- Timers ----
function setupTimer(id, displayId, startId, resetId) {
  const tm = state.timers[id];
  const display  = $(displayId);
  const startBtn = $(startId);
  const resetBtn = $(resetId);
  const setRow   = $(`${id}TimerSet`);
  const minInput = $(`${id}TimerMin`);
  const secInput = $(`${id}TimerSec`);

  function readInputSec() {
    const m = Math.max(0, parseInt(minInput?.value) || 0);
    const s = Math.max(0, Math.min(59, parseInt(secInput?.value) || 0));
    return Math.max(1, m * 60 + s);
  }

  function refresh() {
    display.textContent = fmtTime(tm.sec);
    display.classList.toggle('running', tm.running && tm.sec > 10);
    display.classList.toggle('danger',  tm.running && tm.sec <= 10);
    if (setRow) setRow.style.display = tm.running ? 'none' : 'flex';
  }

  // Live-update display as user types
  [minInput, secInput].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('input', () => {
      if (!tm.running) { tm.sec = readInputSec(); tm.initial = tm.sec; refresh(); }
    });
  });

  startBtn.addEventListener('click', () => {
    if (tm.running) {
      clearInterval(tm.interval);
      tm.running = false;
      startBtn.textContent = t('timer.start');
      startBtn.classList.remove('is-running');
    } else {
      if (tm.sec === 0) { tm.initial = readInputSec(); tm.sec = tm.initial; }
      tm.running = true;
      startBtn.textContent = t('timer.pause');
      startBtn.classList.add('is-running');
      tm.interval = setInterval(() => {
        tm.sec--;
        refresh();
        if (tm.sec <= 0) {
          clearInterval(tm.interval);
          tm.running = false;
          startBtn.textContent = t('timer.start');
          startBtn.classList.remove('is-running');
          display.classList.remove('running', 'danger');
          showToast(t('toast.timesUp'), 'ok');
        }
      }, 1000);
    }
    refresh();
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(tm.interval);
    tm.running = false;
    tm.initial = readInputSec();
    tm.sec = tm.initial;
    startBtn.textContent = t('timer.start');
    startBtn.classList.remove('is-running');
    refresh();
  });

  refresh();
}

// ---- API ----
async function callAPI(prompt) {
  if (!state.apiKey) { showToast(t('toast.noKey'), 'err'); return null; }
  for (let attempt = 0; attempt <= 2; attempt++) {
    if (attempt > 0) {
      showToast('Rate limited — retrying in 5s…', 'ok');
      await new Promise(r => setTimeout(r, 5000));
    }
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, apiKey: state.apiKey })
      });
      const data = await res.json();
      if (res.status === 429) {
        setLoading(false);
        if (attempt >= 2) { showToast(t('toast.error') + (data.error || 'Rate limited'), 'err'); return null; }
        continue;
      }
      if (!res.ok) throw new Error(data.error || 'API error');
      return data.result;
    } catch (err) {
      showToast(t('toast.error') + err.message, 'err');
      return null;
    } finally {
      setLoading(false);
    }
  }
  return null;
}

// ---- Prompts ----
const CAT_EN = {
  // IELTS topics
  education: 'education', work_career: 'work and career', hometown: 'hometown',
  family_friends: 'family and friends', daily_routine: 'daily routine', hobbies: 'hobbies',
  travel: 'travel', technology: 'technology', social_media: 'social media',
  health_fitness: 'health and fitness', food: 'food', environment: 'the environment',
  shopping: 'shopping', music: 'music', movies: 'movies', books: 'books', art: 'art',
  fashion: 'fashion', sports: 'sports', transportation: 'transportation', sleep: 'sleep',
  stress: 'stress', time_management: 'time management', festivals: 'festivals and holidays',
  childhood: 'childhood memories', communication: 'communication', animals: 'animals and pets',
  housing: 'housing and accommodation', future_plans: 'future plans', success: 'success',
  happiness: 'happiness', culture: 'culture', tourism: 'tourism',
  public_transport: 'public transport', climate_change: 'climate change',
  smartphones: 'smartphones', online_learning: 'online learning', advertising: 'advertising',
  celebrities: 'celebrities', news: 'news', internet: 'the internet',
  city_vs_country: 'city vs countryside',
  // Fun topics
  general: 'general topics', finance: 'finance & money',
  roast: 'roasting/mocking something popular', defend: 'defending an unpopular opinion',
  millennial: 'millennial culture & experiences', genz: 'Gen Z culture & trends',
  conspiracy: 'fun & absurd conspiracy theories',
};
const CAT_VI = {
  // IELTS topics
  education: 'giáo dục', work_career: 'công việc và sự nghiệp', hometown: 'quê hương',
  family_friends: 'gia đình và bạn bè', daily_routine: 'thói quen hàng ngày', hobbies: 'sở thích',
  travel: 'du lịch', technology: 'công nghệ', social_media: 'mạng xã hội',
  health_fitness: 'sức khỏe và thể dục', food: 'ẩm thực', environment: 'môi trường',
  shopping: 'mua sắm', music: 'âm nhạc', movies: 'phim ảnh', books: 'sách', art: 'nghệ thuật',
  fashion: 'thời trang', sports: 'thể thao', transportation: 'phương tiện giao thông',
  sleep: 'giấc ngủ', stress: 'căng thẳng', time_management: 'quản lý thời gian',
  festivals: 'lễ hội và kỳ nghỉ', childhood: 'ký ức tuổi thơ', communication: 'giao tiếp',
  animals: 'động vật và thú cưng', housing: 'nhà ở', future_plans: 'kế hoạch tương lai',
  success: 'thành công', happiness: 'hạnh phúc', culture: 'văn hóa', tourism: 'du lịch quốc tế',
  public_transport: 'giao thông công cộng', climate_change: 'biến đổi khí hậu',
  smartphones: 'điện thoại thông minh', online_learning: 'học trực tuyến',
  advertising: 'quảng cáo', celebrities: 'người nổi tiếng', news: 'tin tức',
  internet: 'internet', city_vs_country: 'thành phố vs nông thôn',
  // Fun topics
  general: 'chủ đề chung', finance: 'tài chính & tiền bạc',
  roast: 'chê bai một điều phổ biến', defend: 'bảo vệ quan điểm không phổ biến',
  millennial: 'văn hóa thế hệ millennial', genz: 'văn hóa thế hệ Gen Z',
  conspiracy: 'thuyết âm mưu vui và phi lý',
};
const DIFF_EN = { random: 'random difficulty', easy: 'easy', medium: 'medium', hard: 'challenging' };
const DIFF_VI = { random: 'ngẫu nhiên', easy: 'dễ', medium: 'trung bình', hard: 'khó' };
const ITYPE_EN = { behavioral: 'behavioral', technical: 'technical', situational: 'situational', consulting: 'consulting/case-study' };
const ITYPE_VI = { behavioral: 'hành vi', technical: 'kỹ thuật', situational: 'tình huống', consulting: 'tư vấn/case study' };

const FUN_CATS = new Set(['general','finance','roast','defend','millennial','genz','conspiracy']);

function buildTopicPrompt(category, difficulty) {
  const isIelts = !FUN_CATS.has(category);
  if (state.lang === 'vi') {
    if (isIelts) {
      return `Tạo một câu hỏi luyện nói thực tế và thú vị về chủ đề "${CAT_VI[category] || category}" theo phong cách đề thi IELTS/TOEIC/VSTEP Speaking. Độ khó: ${DIFF_VI[difficulty] || difficulty}.\nCó thể là dạng: câu hỏi cá nhân (Part 1), mô tả trải nghiệm/người/địa điểm (Part 2 với bullet points), hoặc thảo luận quan điểm (Part 3).\nCâu hỏi phải thực tế, gần gũi cuộc sống, giúp người học nói được nhiều và học được nhiều từ đó.\nChỉ trả về câu hỏi bằng tiếng Anh, không giải thích thêm.`;
    }
    return `Tạo một chủ đề diễn thuyết sáng tạo về ${CAT_VI[category] || category}. Độ khó: ${DIFF_VI[difficulty] || difficulty}. Một câu rõ ràng. Chỉ trả về chủ đề, không giải thích.`;
  }
  if (isIelts) {
    return `Generate a realistic and interesting speaking practice question about "${CAT_EN[category] || category}" in the style of IELTS/TOEIC/VSTEP Speaking tests. Difficulty: ${DIFF_EN[difficulty] || difficulty}.\nIt can be: a personal question (Part 1 style), a describe/talk-about prompt with bullet cues (Part 2 style), or an opinion/discussion question (Part 3 style).\nThe question must be practical, relatable, thought-provoking, and help learners expand their ideas naturally.\nReturn ONLY the question in English — no numbering, no label, no explanation.`;
  }
  return `Generate a creative and engaging impromptu speech topic about ${CAT_EN[category] || category}. Difficulty: ${DIFF_EN[difficulty] || difficulty}. Single clear sentence or question. Return ONLY the topic — no explanations, no numbering.`;
}

function buildInterviewPrompt(type, difficulty) {
  if (state.lang === 'vi') {
    return `Tạo một câu hỏi phỏng vấn kiểu ${ITYPE_VI[type] || type}, mức độ ${DIFF_VI[difficulty] || difficulty}. Chỉ trả về câu hỏi, không có giải thích. Viết bằng tiếng Việt.`;
  }
  return `Generate a ${DIFF_EN[difficulty] || difficulty} ${ITYPE_EN[type] || type} interview question. Return ONLY the question — no numbering, no explanation.`;
}

function buildVocabPrompt(difficulty) {
  if (state.lang === 'vi') {
    return `Tạo một từ tiếng Anh hữu ích cho luyện nói, mức độ ${DIFF_VI[difficulty] || difficulty}. Trả về JSON hợp lệ (không có markdown) với các key: "word" (từ tiếng Anh), "phonetic" (phiên âm IPA), "pos" (part of speech viết tắt như noun, verb...), "definition_en" (định nghĩa tiếng Anh ngắn gọn), "definition_vi" (dịch nghĩa tiếng Việt), "example" (câu ví dụ tiếng Anh dùng từ đó).`;
  }
  return `Generate a ${difficulty}-level English vocabulary word useful for speech practice. Return valid JSON only — no markdown fences — with keys: "word", "phonetic" (IPA), "pos" (part of speech), "definition" (short definition), "example" (example sentence using the word).`;
}

// ---- Generators ----
async function generateTopic() {
  const cat  = $('topicCategory').value;
  const diff = $('topicDifficulty').value;
  const btn  = $('btnGenerateTopic');
  btn.disabled = true;
  const result = await callAPI(buildTopicPrompt(cat, diff));
  btn.disabled = false;
  if (!result) return;
  state.lastResults.topic = result.trim();
  $('topicResult').innerHTML = `<p class="result-text">${escHtml(state.lastResults.topic)}</p>`;
  $('topicActions').style.display = 'flex';
  resetSamplePanel('gen');
}

async function generateInterview() {
  const type = $('interviewType').value;
  const diff = $('interviewDifficulty').value;
  const btn  = $('btnGenerateInterview');
  btn.disabled = true;
  const result = await callAPI(buildInterviewPrompt(type, diff));
  btn.disabled = false;
  if (!result) return;
  state.lastResults.interview = result.trim();
  $('interviewResult').innerHTML = `<p class="result-text">${escHtml(state.lastResults.interview)}</p>`;
  $('interviewActions').style.display = 'flex';
  resetSamplePanel('int');
}

// ---- Grammar ----
const GRAMMAR_TOPICS = {
  tenses:       'Tenses (Present Perfect vs Past Simple, Present Perfect Continuous)',
  conditionals: 'Conditionals (Type 0, 1, 2, 3 and Mixed)',
  passive:      'Passive Voice',
  relative:     'Relative Clauses (defining and non-defining)',
  modals:       'Modal Verbs (must/should/might/could/would)',
  comparatives: 'Comparatives and Superlatives',
  articles:     'Articles (a / an / the / zero article)',
  prepositions: 'Prepositions (time, place, direction)',
  discourse:    'Discourse Markers and Linking Words',
  reported:     'Reported Speech',
  gerunds:      'Gerunds vs Infinitives',
  noun_clauses: 'Complex Sentences and Noun Clauses',
};

function buildGrammarPrompt(topic, skill) {
  const topicName = GRAMMAR_TOPICS[topic] || topic;
  const skillFocus = skill === 'both' ? 'both IELTS Speaking and Writing'
    : skill === 'speaking' ? 'IELTS Speaking'
    : 'IELTS Writing Task 1 & 2';

  if (state.lang === 'vi') {
    return `Bạn là giáo viên ngữ pháp IELTS chuyên nghiệp. Dạy chủ đề ngữ pháp: "${topicName}" với trọng tâm ${skill === 'both' ? 'cả Speaking và Writing IELTS' : skill === 'speaking' ? 'IELTS Speaking' : 'IELTS Writing'}.

Trả về JSON hợp lệ (không markdown, không text ngoài JSON):
{"topic":"Tên chủ đề ngữ pháp","rule":"Giải thích quy tắc rõ ràng 2-3 câu (tiếng Anh + ghi chú tiếng Việt nếu cần)","whenToUse":{"speaking":"Dùng khi nào trong IELTS Speaking (1-2 câu tiếng Việt)","writing":"Dùng khi nào trong IELTS Writing (1-2 câu tiếng Việt)"},"mistakes":[{"wrong":"Câu/cụm sai thường gặp của người Việt","correct":"Bản đúng","note":"Lý do sai (tiếng Việt)"},{"wrong":"...","correct":"...","note":"..."}],"bandExamples":[{"band":"5-6","example":"Câu ví dụ Band 5-6"},{"band":"7-8","example":"Câu ví dụ Band 7-8, phức tạp hơn"},{"band":"9","example":"Câu ví dụ Band 9, chuẩn bản xứ"}],"exercise":"Bài tập ngắn: điền vào chỗ trống hoặc sửa lỗi (1-2 câu — không đưa đáp án)"}`;
  }

  return `You are an expert IELTS grammar teacher. Teach the grammar topic: "${topicName}" focused on ${skillFocus}.

Return ONLY valid JSON (no markdown, no extra text):
{"topic":"Grammar topic name","rule":"Clear rule in 2-3 sentences with structure explanation","whenToUse":{"speaking":"How/when to use in IELTS Speaking (1-2 sentences)","writing":"How/when to use in IELTS Writing (1-2 sentences)"},"mistakes":[{"wrong":"Common wrong example learners make","correct":"Corrected version","note":"Why it is wrong"},{"wrong":"...","correct":"...","note":"..."}],"bandExamples":[{"band":"5-6","example":"A simpler Band 5-6 level sentence"},{"band":"7-8","example":"A more sophisticated Band 7-8 sentence"},{"band":"9","example":"A Band 9 near-native sentence"}],"exercise":"Short fill-in-the-blank or error-correction exercise (1-2 sentences, no answer given)"}`;
}

function renderGrammarCard(g) {
  const skill = $('grammarSkill').value;
  let whenHTML = '';
  if (g.whenToUse) {
    if (skill !== 'writing') whenHTML += `<div class="gram-skill-box"><span class="gram-skill-tag speaking">Speaking</span> ${escHtml(g.whenToUse.speaking || '')}</div>`;
    if (skill !== 'speaking') whenHTML += `<div class="gram-skill-box"><span class="gram-skill-tag writing">Writing</span> ${escHtml(g.whenToUse.writing || '')}</div>`;
  }
  const mistakesHTML = (g.mistakes || []).map(m => `
    <div class="gram-mistake-item">
      <div class="gram-wrong">✗ ${escHtml(m.wrong || '')}</div>
      <div class="gram-right">✓ ${escHtml(m.correct || '')}</div>
      ${m.note ? `<div class="gram-note">${escHtml(m.note)}</div>` : ''}
    </div>`).join('');
  const bandsHTML = (g.bandExamples || []).map(b => `
    <div class="gram-band-item">
      <span class="gram-band-tag">Band ${escHtml(b.band || '')}</span>
      <span class="gram-band-text">"${escHtml(b.example || '')}"</span>
    </div>`).join('');
  $('grammarResult').innerHTML = `
    <div class="gram-card">
      <div class="gram-topic-title">📖 ${escHtml(g.topic || '')}</div>
      <div class="gram-section-label">📌 ${state.lang === 'vi' ? 'Quy Tắc' : 'Rule'}</div>
      <div class="gram-rule">${escHtml(g.rule || '')}</div>
      ${whenHTML ? `<div class="gram-section-label">💬 ${state.lang === 'vi' ? 'Khi Nào Dùng' : 'When to Use'}</div><div class="gram-when-wrap">${whenHTML}</div>` : ''}
      ${mistakesHTML ? `<div class="gram-section-label">❌ ${state.lang === 'vi' ? 'Lỗi Thường Gặp' : 'Common Mistakes'}</div>${mistakesHTML}` : ''}
      ${bandsHTML ? `<div class="gram-section-label">⭐ ${state.lang === 'vi' ? 'Ví Dụ Theo Band' : 'Band Examples'}</div>${bandsHTML}` : ''}
      ${g.exercise ? `<div class="gram-section-label">✏️ ${state.lang === 'vi' ? 'Bài Tập' : 'Practice Exercise'}</div><div class="gram-exercise"><div class="gram-exercise-label">${state.lang === 'vi' ? 'Thử làm:' : 'Try this:'}</div>${escHtml(g.exercise)}</div>` : ''}
    </div>`;
}

async function generateGrammar() {
  const topic = $('grammarTopic').value;
  const skill = $('grammarSkill').value;
  const btn   = $('btnGenerateGrammar');
  btn.disabled = true;
  const raw = await callAPI(buildGrammarPrompt(topic, skill));
  btn.disabled = false;
  if (!raw) return;
  try {
    const g = safeParseIelts(raw);
    if (!g || !g.topic) throw new Error('bad');
    const skillLabel = skill === 'speaking' ? 'IELTS Speaking' : skill === 'writing' ? 'IELTS Writing' : 'IELTS Speaking & Writing';
    state.lastResults.grammar = `Grammar topic: ${g.topic} — practice using this grammar in ${skillLabel}`;
    renderGrammarCard(g);
  } catch(e) {
    $('grammarResult').innerHTML = `<div class="gram-card"><p class="result-text">${escHtml(raw)}</p></div>`;
  }
}

async function generateVocab() {
  const diff = $('vocabDifficulty').value;
  const btn  = $('btnGenerateVocab');
  btn.disabled = true;
  const raw = await callAPI(buildVocabPrompt(diff));
  btn.disabled = false;
  if (!raw) return;

  try {
    const clean = raw.replace(/```json\s*|\s*```/g, '').trim();
    const v = JSON.parse(clean);
    state.lastResults.vocab = `${v.word} — ${v.definition || v.definition_en || ''}`;

    if (state.lang === 'vi') {
      $('vocabResult').innerHTML = `
        <div style="text-align:left;width:100%">
          <div class="vocab-word">${escHtml(v.word || '')}</div>
          <div class="vocab-pos">${escHtml(v.phonetic || '')} · ${escHtml(v.pos || '')}</div>
          <div class="vocab-def">${escHtml(v.definition_en || v.definition || '')}</div>
          ${v.definition_vi ? `<div class="vocab-def-vi">🇻🇳 ${escHtml(v.definition_vi)}</div>` : ''}
          ${v.example ? `<div class="vocab-example">"${escHtml(v.example)}"</div>` : ''}
        </div>`;
    } else {
      $('vocabResult').innerHTML = `
        <div style="text-align:left;width:100%">
          <div class="vocab-word">${escHtml(v.word || '')}</div>
          <div class="vocab-pos">${escHtml(v.phonetic || '')} · ${escHtml(v.pos || '')}</div>
          <div class="vocab-def">${escHtml(v.definition || '')}</div>
          ${v.example ? `<div class="vocab-example">"${escHtml(v.example)}"</div>` : ''}
        </div>`;
    }
    $('vocabActions').style.display = 'flex';
    resetSamplePanel('voc');
  } catch {
    state.lastResults.vocab = raw.trim();
    $('vocabResult').innerHTML = `<p class="result-text">${escHtml(raw.trim())}</p>`;
    $('vocabActions').style.display = 'flex';
    resetSamplePanel('voc');
  }
}

// ---- Copy to Clipboard ----
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(t('toast.copied'), 'ok');
  } catch {
    showToast('Could not copy. Please copy manually.', 'err');
  }
}

// ---- Speech Recording ----
const rec = {
  recognition: null,
  running: false,
  tabId: null,
  finalText: '',
};

function getSpeechLang() { return state.lang === 'vi' ? 'vi-VN' : 'en-US'; }

function setupRecording(tabId) {
  const recordBtn  = $(`${tabId}RecordBtn`);
  const analyzeBtn = $(`${tabId}AnalyzeBtn`);
  const transcript = $(`${tabId}Transcript`);

  // Set placeholder via CSS data attribute
  transcript.setAttribute('data-ph', t('rec.ph'));

  recordBtn.addEventListener('click', () => {
    if (rec.running && rec.tabId === tabId) {
      stopRecording();
    } else {
      startRecording(tabId);
    }
  });

  analyzeBtn.addEventListener('click', () => analyzeSpeech(tabId));
}

function startRecording(tabId) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { showToast(t('rec.noSupport'), 'err'); return; }

  // Stop any existing recording first
  if (rec.running) stopRecording();

  const transcript = $(`${tabId}Transcript`);
  const recordBtn  = $(`${tabId}RecordBtn`);
  const analyzeBtn = $(`${tabId}AnalyzeBtn`);

  rec.finalText = '';
  transcript.textContent = '';
  transcript.classList.add('active');
  analyzeBtn.style.display = 'none';
  $(`${tabId}ScoreCard`).style.display = 'none';

  rec.recognition = new SR();
  rec.recognition.continuous = true;
  rec.recognition.interimResults = true;
  rec.recognition.lang = getSpeechLang();
  rec.tabId = tabId;
  rec.running = true;

  rec.recognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) rec.finalText += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    transcript.textContent = rec.finalText + interim;
    transcript.scrollTop = transcript.scrollHeight;
  };

  rec.recognition.onerror = (e) => {
    if (e.error !== 'no-speech') showToast(t('rec.noSpeech'), 'err');
  };

  // Auto-restart to avoid 1-min browser timeout
  rec.recognition.onend = () => {
    if (rec.running && rec.tabId === tabId) rec.recognition.start();
  };

  rec.recognition.start();
  recordBtn.classList.add('recording');
  recordBtn.querySelector('[data-i18n]').textContent = t('rec.stop');
}

function stopRecording() {
  if (!rec.running) return;
  rec.running = false;
  if (rec.recognition) { rec.recognition.onend = null; rec.recognition.stop(); }

  const tabId = rec.tabId;
  const recordBtn  = $(`${tabId}RecordBtn`);
  const analyzeBtn = $(`${tabId}AnalyzeBtn`);
  const transcript = $(`${tabId}Transcript`);

  recordBtn.classList.remove('recording');
  recordBtn.querySelector('[data-i18n]').textContent = t('rec.start');
  transcript.classList.remove('active');

  if (rec.finalText.trim().length > 5) {
    analyzeBtn.style.display = 'flex';
  }
}

async function analyzeSpeech(tabId) {
  const transcript = rec.finalText.trim();
  if (!transcript) { showToast(t('rec.noSpeech'), 'err'); return; }

  const contextMap = { gen: state.lastResults.topic, int: state.lastResults.interview, voc: state.lastResults.vocab, mock: state.lastResults.mock, gram: state.lastResults.grammar };
  const context = contextMap[tabId] || '';
  const wordCount = transcript.trim().split(/\s+/).length;

  const calibration = state.lang === 'vi'
    ? `CHẤM ĐIỂM NGHIÊM KHẮC: Band 9=bản xứ; Band 7=tốt nhưng lỗi rõ; Band 6=giao tiếp được nhưng hạn chế; Band 5=cơ bản, nhiều lỗi; Band 4=rất yếu. Hầu hết 4.5-6.5. KHÔNG cho 8+. Đếm fillers (um/uh/you know/like) → giảm FC và P nếu nhiều. Nhận xét intonation, nhịp điệu.`
    : `STRICT SCORING: Band 9=near-native; Band 7=good but noticeable errors; Band 6=communicates but clear weaknesses; Band 5=basic frequent errors; Band 4=very limited. Most learners 4.5-6.5. NEVER 8+. Count fillers (um/uh/you know/like) → lower FC and P if heavy. Note intonation and rhythm.`;

  // CALL 1: Scores + feedback + phrases only (no correctedVersion — kept short for reliability)
  const prompt1 = state.lang === 'vi'
    ? `Giám khảo IELTS. ${calibration}\n${context ? `Chủ đề: "${context}"\n` : ''}Bài nói (${wordCount} từ): "${transcript}"\nJSON hợp lệ, không markdown:\n{"overall":6.0,"FC":{"band":6,"feedback":"nhận xét FC cụ thể + fillers + nhịp điệu","tips":["tip1","tip2"]},"GRA":{"band":6,"feedback":"ngữ pháp cụ thể","errors":[{"original":"câu sai","corrected":"câu đúng","note":"lý do"}],"tips":["tip"]},"LR":{"band":6,"feedback":"từ vựng cụ thể","upgrades":[{"weak":"từ yếu","better":"từ mạnh","context":"ngữ cảnh"}],"tips":["tip"]},"P":{"band":6,"feedback":"phát âm + intonation + liệt kê fillers","tips":["tip"]},"overallTips":["cải thiện 1","cải thiện 2"],"rewritePhrases":[{"phrase":"cụm từ hay","meaning":"nghĩa tiếng Việt","note":"ngữ pháp hoặc để trống"}]}`
    : `IELTS examiner. ${calibration}\n${context ? `Topic: "${context}"\n` : ''}Response (${wordCount} words): "${transcript}"\nValid JSON only, no markdown:\n{"overall":6.0,"FC":{"band":6,"feedback":"specific FC feedback + fillers + rhythm","tips":["tip1","tip2"]},"GRA":{"band":6,"feedback":"specific grammar","errors":[{"original":"wrong","corrected":"fixed","note":"reason"}],"tips":["tip"]},"LR":{"band":6,"feedback":"specific vocabulary","upgrades":[{"weak":"weak","better":"stronger","context":"context"}],"tips":["tip"]},"P":{"band":6,"feedback":"pronunciation + intonation + list fillers found","tips":["tip"]},"overallTips":["goal1","goal2"],"rewritePhrases":[{"phrase":"useful phrase","meaning":"Vietnamese meaning","note":"grammar note or empty"}]}`;

  const btn = $(`${tabId}AnalyzeBtn`);
  btn.disabled = true;
  const result = await callAPI(prompt1);
  btn.disabled = false;
  if (!result) return;

  const score = safeParseIelts(result);
  if (!score) { showToast(t('toast.error') + 'Could not parse IELTS score', 'err'); return; }
  score.wordCount = wordCount;
  renderIeltsCard(tabId, score);
  updateStreak();

  // CALL 2: Band 7-9 rewrite as plain text (no JSON → never fails to parse)
  generateAndInsertRewrite(tabId, transcript, context, wordCount);
}

async function generateAndInsertRewrite(tabId, transcript, context, wordCount) {
  const targetWords = Math.max(120, Math.round(wordCount * 1.8));
  const prompt = state.lang === 'vi'
    ? `Viết lại câu trả lời IELTS Speaking sau ở mức Band 7-9 (khoảng ${targetWords} từ tiếng Anh). Giữ ý chính của người nói, nâng cấp từ vựng học thuật, cấu trúc ngữ pháp phức tạp (relative clauses, conditionals, discourse markers), thêm ví dụ cụ thể.\n${context ? `Chủ đề: "${context}"\n` : ''}Câu trả lời gốc: "${transcript}"\n\nChỉ viết bài viết lại, không JSON, không giải thích.`
    : `Rewrite this IELTS Speaking response at Band 7-9 level (about ${targetWords} words). Keep the speaker's main ideas. Upgrade vocabulary, use complex grammar (relative clauses, conditionals, passive voice, discourse markers), add specific examples.\n${context ? `Topic: "${context}"\n` : ''}Original: "${transcript}"\n\nOutput only the improved text. No JSON, no explanations.`;

  const rewriteEl = $(`${tabId}RewriteSection`);
  if (!rewriteEl) return;

  const result = await callAPI(prompt);
  if (!result) {
    rewriteEl.innerHTML = `<div class="ielts-corrected-title">✏️ ${t('ielts.corrected')}</div><div class="ielts-rewrite-err">${state.lang === 'vi' ? 'Không thể tạo bản viết lại.' : 'Could not generate rewrite.'}</div>`;
    return;
  }
  rewriteEl.innerHTML = `<div class="ielts-corrected-title">✏️ ${t('ielts.corrected')}</div><div class="ielts-corrected-text">${escHtml(result.trim())}</div>`;
  rewriteEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Walk the raw string char-by-char and escape unescaped " inside JSON string values
function sanitizeJsonStrings(str) {
  let out = '', inStr = false, i = 0;
  while (i < str.length) {
    const ch = str[i];
    if (!inStr) {
      out += ch;
      if (ch === '"') inStr = true;
      i++; continue;
    }
    // inside a string value
    if (ch === '\\') { out += ch + (str[i + 1] || ''); i += 2; continue; }
    if (ch === '\n') { out += '\\n'; i++; continue; }
    if (ch === '\r') { i++; continue; }
    if (ch === '\t') { out += '\\t'; i++; continue; }
    if (ch === '"') {
      // Is this the closing quote? Look at the next non-whitespace character.
      let j = i + 1;
      while (j < str.length && /[ \t\n\r]/.test(str[j])) j++;
      const next = str[j] ?? '';
      if (':,}]"'.includes(next) || j >= str.length) {
        out += ch; inStr = false; // real closing quote
      } else {
        out += '\\"'; // internal quote — escape it
      }
      i++; continue;
    }
    out += ch; i++;
  }
  return out;
}

// Last-resort: pull band numbers directly from raw text
function extractBandsFallback(str) {
  const num = (re) => { const m = str.match(re); return m ? parseFloat(m[1]) : 0; };
  const overall = num(/"overall"\s*:\s*(\d+(?:\.\d+)?)/);
  if (!overall) return null;
  const crit = (key) => ({
    band: num(new RegExp(`"${key}"[\\s\\S]{1,80}?"band"\\s*:\\s*(\\d+(?:\\.\\d+)?)`)),
    feedback: '', tips: [], errors: [], upgrades: []
  });
  return { overall, FC: crit('FC'), GRA: crit('GRA'), LR: crit('LR'), P: crit('P'), overallTips: [] };
}

function safeParseIelts(raw) {
  if (!raw) return null;
  const clean = raw.replace(/```json\s*|\s*```/gi, '').trim();

  // Try 1: direct parse (model output is already valid JSON)
  try { return JSON.parse(clean); } catch {}

  // Try 2: sanitize unescaped quotes/newlines inside strings, then parse
  try { return JSON.parse(sanitizeJsonStrings(clean)); } catch {}

  // Try 3: bracket-match outermost { } then sanitize
  const start = clean.indexOf('{');
  if (start >= 0) {
    let depth = 0, end = -1;
    for (let i = start; i < clean.length; i++) {
      if (clean[i] === '{') depth++;
      else if (clean[i] === '}') { if (--depth === 0) { end = i; break; } }
    }
    if (end > start) {
      const chunk = clean.slice(start, end + 1);
      try { return JSON.parse(chunk); } catch {}
      try { return JSON.parse(sanitizeJsonStrings(chunk)); } catch {}
    }
  }

  // Try 4: just extract band numbers — shows scores even if feedback text is unparseable
  const fallback = extractBandsFallback(clean);
  if (fallback) return fallback;

  console.error('[safeParseIelts] all 4 tries failed. raw:\n', clean);
  return null;
}

function bandColor(b) {
  if (b >= 7.5) return '#059669';
  if (b >= 6)   return '#2563EB';
  if (b >= 5)   return '#D97706';
  return '#DC2626';
}

function renderIeltsCard(tabId, s) {
  const card = $(`${tabId}ScoreCard`);
  const overall = s.overall || 0;
  const desc = overall >= 8 ? 'Expert / Very Good' : overall >= 7 ? 'Good' : overall >= 6 ? 'Competent' : overall >= 5 ? 'Modest' : 'Limited';

  const criterion = (key, label) => {
    const c = s[key] || {};
    const b = c.band || 0;
    const col = bandColor(b);
    const tips = (c.tips || []).map(tip => `<li>${escHtml(tip)}</li>`).join('');

    let extrasHtml = '';
    if (key === 'GRA' && c.errors?.length) {
      extrasHtml += `<div class="ic-section-title">${t('ielts.errors')}</div>`;
      extrasHtml += c.errors.map(e => `
        <div class="ic-correction">
          <div class="ic-wrong">❌ ${escHtml(e.original || '')}</div>
          <div class="ic-right">✅ ${escHtml(e.corrected || '')}</div>
          ${e.note ? `<div class="ic-note">${escHtml(e.note)}</div>` : ''}
        </div>`).join('');
    }
    if (key === 'LR' && c.upgrades?.length) {
      extrasHtml += `<div class="ic-section-title">${t('ielts.upgrades')}</div>`;
      extrasHtml += c.upgrades.map(u => `
        <div class="ic-upgrade">
          <span class="ic-weak">${escHtml(u.weak || '')}</span>
          <span class="ic-arrow">→</span>
          <span class="ic-strong">${escHtml(u.better || '')}</span>
          ${u.context ? `<span class="ic-ctx">${escHtml(u.context)}</span>` : ''}
        </div>`).join('');
    }

    return `
      <div class="ielts-criterion">
        <div class="ic-header">
          <span class="ic-name">${label}</span>
          <span class="ic-band" style="color:${col}">${b}</span>
        </div>
        <div class="ic-bar"><div style="width:${(b/9)*100}%;background:${col}"></div></div>
        <p class="ic-feedback">${escHtml(c.feedback || '')}</p>
        ${extrasHtml}
        ${tips ? `<ul class="ic-tips">${tips}</ul>` : ''}
      </div>`;
  };

  const overallTips = (s.overallTips || []).map(x => `<li>${escHtml(x)}</li>`).join('');

  card.innerHTML = `
    <div class="ielts-overall">
      <div>
        <div class="ielts-band-big" style="color:#fff">${overall}</div>
        <div class="ielts-band-label">${t('ielts.overall')}</div>
      </div>
      <div class="ielts-band-desc">
        <strong>${desc}</strong><br>
        ${s.wordCount ? `📝 ${s.wordCount} ${t('ielts.words')}` : ''}
      </div>
    </div>
    <div class="ielts-grid">
      ${criterion('FC',  t('ielts.fc'))}
      ${criterion('GRA', t('ielts.gra'))}
      ${criterion('LR',  t('ielts.lr'))}
      ${criterion('P',   t('ielts.p'))}
    </div>
    ${overallTips ? `
    <div class="ielts-footer">
      <div class="ielts-footer-title">📈 ${t('ielts.tips')}</div>
      <ul class="ielts-tips-list">${overallTips}</ul>
    </div>` : ''}
    ${s.rewritePhrases?.length ? `
    <div class="ielts-corrected">
      <div class="ielts-rw-phrases-title">${t('ielts.rewritePhrases')}</div>
      <div class="ielts-rw-phrases">${s.rewritePhrases.map(p => {
        const phrase = typeof p === 'string' ? p : (p.phrase || '');
        const meaning = typeof p === 'string' ? '' : (p.meaning || '');
        const note = typeof p === 'string' ? '' : (p.note || '');
        return `<div class="ielts-rw-phrase-item">
          <div class="ielts-rw-phrase">${escHtml(phrase)}</div>
          ${meaning ? `<div class="ielts-rw-meaning">🇻🇳 ${escHtml(meaning)}</div>` : ''}
          ${note ? `<div class="ielts-rw-note">📚 ${escHtml(note)}</div>` : ''}
        </div>`;
      }).join('')}</div>
    </div>` : ''}
    <div class="ielts-corrected ielts-rewrite-loading-wrap" id="${tabId}RewriteSection">
      <div class="ielts-corrected-title">✏️ ${t('ielts.corrected')}</div>
      <div class="ielts-rewrite-loading">⏳ ${state.lang === 'vi' ? 'Đang tạo bản viết lại Band 7–9…' : 'Generating Band 7–9 rewrite…'}</div>
    </div>
  `;
  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- Sample Answer ----
function resetSamplePanel(tabId) {
  $(`${tabId}SampleWrap`).style.display = 'none';
  $(`${tabId}ShowSample`).classList.remove('active');
  $(`${tabId}SampleCard`).innerHTML = '';
}

async function toggleSampleAnswer(tabId) {
  const wrap = $(`${tabId}SampleWrap`);
  const btn  = $(`${tabId}ShowSample`);
  const card = $(`${tabId}SampleCard`);

  if (wrap.style.display !== 'none') {
    wrap.style.display = 'none';
    btn.classList.remove('active');
    return;
  }

  if (card.innerHTML) {
    wrap.style.display = 'block';
    btn.classList.add('active');
    return;
  }

  const contextMap = { gen: state.lastResults.topic, int: state.lastResults.interview, voc: state.lastResults.vocab, mock: state.lastResults.mock, gram: state.lastResults.grammar };
  const context = contextMap[tabId] || '';
  if (!context) { showToast('Generate a topic first!', 'err'); return; }

  const frameworks = ['PREP', 'STAR', 'PPF'];
  const fw = frameworks[Math.floor(Math.random() * frameworks.length)];

  const timerMin = Math.max(0, parseInt($(`${tabId}TimerMin`)?.value) || 0);
  const timerSec = Math.max(0, parseInt($(`${tabId}TimerSec`)?.value) || 0);
  const totalSec = Math.max(15, timerMin * 60 + timerSec);
  const targetWords = Math.round((totalSec / 60) * 130);

  const prompt = state.lang === 'vi'
    ? `Viết bài nói mẫu IELTS Speaking theo cấu trúc ${fw} cho chủ đề: "${context}"\n\nBài nói phải dài khoảng ${targetWords} từ tiếng Anh. Viết đầy đủ, tự nhiên như đang nói thật.\n\nChỉ trả về JSON hợp lệ, không có markdown:\n{"framework":"${fw}","answer":"toàn bộ bài nói ở đây","keyPhrases":["cụm từ hay 1","cụm từ hay 2","cụm từ hay 3"]}`
    : `Write an IELTS Speaking model answer using the ${fw} framework for this topic: "${context}"\n\nThe answer must be approximately ${targetWords} words. Write naturally as if actually speaking — full sentences, connectors, examples.\n\nReturn valid JSON only, no markdown fences:\n{"framework":"${fw}","answer":"the full answer text goes here","keyPhrases":["useful phrase 1","useful phrase 2","useful phrase 3"]}`;

  btn.textContent = t('sample.loading');
  btn.disabled = true;
  const result = await callAPI(prompt);
  btn.disabled = false;
  btn.textContent = t('sample.btn');

  if (!result) return;

  let answerText = '';
  let phrases = '';
  let frameworkLabel = fw;

  try {
    const clean = result.replace(/```json\s*|\s*```/gi, '').trim();
    const data = JSON.parse(clean);
    answerText = data.answer || '';
    frameworkLabel = data.framework || fw;
    phrases = (data.keyPhrases || []).map(p => `<span class="sample-phrase">${escHtml(p)}</span>`).join('');
  } catch {
    // JSON parse failed — extract answer text directly from raw result
    const m = result.match(/"answer"\s*:\s*"([\s\S]*?)(?<!\\)",/);
    answerText = m ? m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"') : result.replace(/```[\s\S]*?```/g, '').trim();
  }

  if (!answerText) { showToast(t('toast.error') + 'Empty response', 'err'); return; }

  const actualWords = answerText.trim().split(/\s+/).filter(Boolean).length;
  card.innerHTML = `
    <div class="sample-header">
      <span class="sample-title">✨ ${t('sample.title')}</span>
      <span class="sample-fw-badge">${escHtml(frameworkLabel)}</span>
    </div>
    <div class="sample-text">${escHtml(answerText)}</div>
    ${phrases ? `<div><div style="font-size:.75rem;font-weight:600;color:#92400E;margin-bottom:5px">${t('sample.keyphrases')}</div><div class="sample-key-phrases">${phrases}</div></div>` : ''}
    <div class="sample-footer">
      <span class="sample-wc">📝 ${actualWords} words</span>
    </div>
  `;
  wrap.style.display = 'block';
  btn.classList.add('active');
  wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- IELTS Mock Practice ----
async function startIeltsMock() {
  const topicKey = $('ieltsMockTopic').value;
  const topicLabel = CAT_EN[topicKey] || topicKey;
  const btn = $('btnStartIeltsMock');

  const prompt = `You are an IELTS Speaking test designer. Create a realistic IELTS Speaking mock test on the topic: "${topicLabel}".

CRITICAL: Every single question in ALL three parts must be directly and clearly about "${topicLabel}". Do NOT drift to unrelated subjects.

PART 1 — 3 short personal questions about the candidate's own experience with "${topicLabel}". Simple, conversational, present/past tense. (e.g. for "Technology": "Do you use a smartphone every day?", "What kind of apps do you use most?", "Did you use technology a lot as a child?")

PART 2 — 1 cue card. Must start with "Describe a [specific thing related to ${topicLabel}]...". Include exactly 3 bullet points starting with "You should say:" and 1 follow-up question at the end.

PART 3 — 3 abstract discussion questions that explore wider societal, cultural, or global aspects of "${topicLabel}". Must be opinion/argument-based and clearly linked to Part 2.

Return valid JSON only (no markdown, no extra text):
{"part1":["q1","q2","q3"],"part2":{"task":"Describe a ...","bullets":["You should say: ...","...","..."],"followup":"... and explain ..."},"part3":["q1","q2","q3"]}`;

  btn.disabled = true;
  const result = await callAPI(prompt);
  btn.disabled = false;
  if (!result) return;

  try {
    const data = JSON.parse(result.replace(/```json\s*|\s*```/gi, '').trim());
    ieltsTest.questions = [];
    for (const q of (data.part1 || [])) {
      ieltsTest.questions.push({ part: 1, text: q, speakSec: 60 });
    }
    if (data.part2) {
      ieltsTest.questions.push({ part: 2, text: data.part2.task || '', bullets: data.part2.bullets || [], followup: data.part2.followup || '', speakSec: 120 });
    }
    for (const q of (data.part3 || [])) {
      ieltsTest.questions.push({ part: 3, text: q, speakSec: 120 });
    }
    ieltsTest.current = 0;
    ieltsTest.answers = {};
    ieltsTest.samples = {};
    $('mockFinalScoreCard').style.display = 'none';
    $('mockFinalAnswers').style.display = 'none';
    $('ieltsMockArea').style.display = 'block';
    showMockQuestion();
    $('ieltsMockArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch {
    showToast(t('toast.error') + 'Could not parse questions', 'err');
  }
}

function showMockQuestion() {
  const q = ieltsTest.questions[ieltsTest.current];
  if (!q) return;
  const idx = ieltsTest.current;
  const total = ieltsTest.questions.length;

  const partColors = { 1: '#6C5CE7', 2: '#FD7E14', 3: '#20C997' };
  const badge = $('mockPartBadge');
  badge.textContent = `Part ${q.part}`;
  badge.style.background = partColors[q.part] || '#6C5CE7';
  $('mockProgress').textContent = `${idx + 1} / ${total}`;
  $('mockQText').textContent = q.text;

  const bulletsEl = $('mockBullets');
  if (q.part === 2 && q.bullets?.length) {
    bulletsEl.innerHTML = `<ul class="mock-bullet-list">${q.bullets.map(b => `<li>${escHtml(b)}</li>`).join('')}</ul>${q.followup ? `<p class="mock-followup">${escHtml(q.followup)}</p>` : ''}`;
    bulletsEl.style.display = 'block';
    $('mockPrepNote').style.display = 'block';
  } else {
    bulletsEl.style.display = 'none';
    $('mockPrepNote').style.display = 'none';
  }

  // Reset timer
  const tm = state.timers.mock;
  clearInterval(tm.interval);
  tm.running = false;
  tm.sec = q.speakSec;
  tm.initial = q.speakSec;
  const disp = $('mockTimerDisplay');
  disp.textContent = fmtTime(tm.sec);
  disp.className = 'timer-display';
  $('mockTimerStart').textContent = t('timer.start');
  $('mockTimerStart').classList.remove('is-running');

  // Set context for IELTS feedback
  state.lastResults.mock = q.text;

  // Restore saved answer or clear
  if (rec.running && rec.tabId === 'mock') stopRecording();
  const savedAnswer = ieltsTest.answers[idx];
  if (savedAnswer) {
    $('mockTranscript').textContent = savedAnswer;
    rec.finalText = savedAnswer;
    $('mockAnalyzeBtn').style.display = 'flex';
  } else {
    rec.finalText = '';
    $('mockTranscript').textContent = '';
    $('mockAnalyzeBtn').style.display = 'none';
  }
  $('mockScoreCard').style.display = 'none';

  // Sample answer — restore cached or clear
  const savedSample = ieltsTest.samples[idx];
  $('mockSampleCard').innerHTML = savedSample || '';
  $('mockSampleWrap').style.display = 'none';
  $('mockShowSample').classList.remove('active');

  $('mockPrevBtn').style.display = idx > 0 ? 'inline-flex' : 'none';
  $('mockNextBtn').textContent = idx < total - 1 ? t('ielts.next') : t('ielts.submitAll');
}

function setupMockTimer() {
  const tm = state.timers.mock;
  const disp = $('mockTimerDisplay');
  const startBtn = $('mockTimerStart');

  startBtn.addEventListener('click', () => {
    if (tm.running) {
      clearInterval(tm.interval);
      tm.running = false;
      startBtn.textContent = t('timer.start');
      startBtn.classList.remove('is-running');
      disp.classList.remove('running', 'danger');
    } else {
      if (tm.sec <= 0) { tm.sec = tm.initial; disp.textContent = fmtTime(tm.sec); }
      tm.running = true;
      startBtn.textContent = t('timer.pause');
      startBtn.classList.add('is-running');
      tm.interval = setInterval(() => {
        tm.sec--;
        disp.textContent = fmtTime(tm.sec);
        disp.classList.toggle('running', tm.sec > 10);
        disp.classList.toggle('danger', tm.sec <= 10 && tm.sec > 0);
        if (tm.sec <= 0) {
          clearInterval(tm.interval);
          tm.running = false;
          startBtn.textContent = t('timer.start');
          startBtn.classList.remove('is-running');
          disp.className = 'timer-display';
          showToast(t('toast.timesUp'), 'ok');
        }
      }, 1000);
    }
  });
}

async function showMockSample() {
  const wrap = $('mockSampleWrap');
  const btn  = $('mockShowSample');
  const card = $('mockSampleCard');

  if (wrap.style.display !== 'none') {
    wrap.style.display = 'none';
    btn.classList.remove('active');
    return;
  }
  if (card.innerHTML) {
    wrap.style.display = 'block';
    btn.classList.add('active');
    return;
  }

  const idx = ieltsTest.current;
  const q   = ieltsTest.questions[idx];
  if (!q) { showToast('Generate questions first!', 'err'); return; }

  // Real IELTS market standards: P1 ~40w, P2 ~200w, P3 ~70w
  const targetWords = q.part === 1 ? 40 : q.part === 2 ? 200 : 70;
  const partCtx = q.part === 2
    ? `This is an IELTS Part 2 long turn cue card. Cover all bullet points: ${(q.bullets || []).join('; ')}.`
    : q.part === 1 ? 'This is an IELTS Part 1 personal question.'
    : 'This is an IELTS Part 3 discussion question requiring abstract/opinion-based thinking.';

  const prompt = state.lang === 'vi'
    ? `Viết câu trả lời mẫu IELTS Speaking cho câu hỏi sau.\n${partCtx}\nCâu hỏi: "${q.text}"\nĐộ dài mục tiêu: khoảng ${targetWords} từ tiếng Anh, tự nhiên như đang nói thật, cấu trúc rõ ràng.\nChỉ trả về JSON hợp lệ (không markdown):\n{"answer":"toàn bộ bài nói","keyPhrases":[{"phrase":"cụm từ hay","meaning":"nghĩa tiếng Việt","note":"giải thích ngữ pháp nếu là cấu trúc, để trống nếu từ vựng thông thường"}]}`
    : `Write an IELTS Speaking model answer for the question below.\n${partCtx}\nQuestion: "${q.text}"\nTarget: approximately ${targetWords} words. Write naturally as if actually speaking — full sentences, discourse markers, examples.\nReturn valid JSON only (no markdown):\n{"answer":"the full answer text","keyPhrases":[{"phrase":"useful phrase or structure","meaning":"Vietnamese meaning","note":"grammar note if it is a structure, empty string if ordinary vocabulary"}]}`;

  btn.textContent = t('sample.loading');
  btn.disabled = true;
  const result = await callAPI(prompt);
  btn.disabled = false;
  btn.textContent = t('sample.btn');
  if (!result) return;

  let answerText = '';
  let phrases = [];
  try {
    const data = JSON.parse(result.replace(/```json\s*|\s*```/gi, '').trim());
    answerText = data.answer || '';
    phrases = data.keyPhrases || [];
  } catch {
    const m = result.match(/"answer"\s*:\s*"([\s\S]*?)(?<!\\)",/);
    answerText = m ? m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"') : result.replace(/```[\s\S]*?```/g, '').trim();
  }
  if (!answerText) { showToast(t('toast.error') + 'Empty response', 'err'); return; }

  const actualWords = answerText.trim().split(/\s+/).filter(Boolean).length;
  const phrasesHtml = phrases.map(p => {
    const ph = typeof p === 'string' ? p : (p.phrase || '');
    const mn = typeof p === 'string' ? '' : (p.meaning || '');
    const nt = typeof p === 'string' ? '' : (p.note || '');
    return `<div class="ielts-rw-phrase-item">
      <div class="ielts-rw-phrase">${escHtml(ph)}</div>
      ${mn ? `<div class="ielts-rw-meaning">🇻🇳 ${escHtml(mn)}</div>` : ''}
      ${nt ? `<div class="ielts-rw-note">📚 ${escHtml(nt)}</div>` : ''}
    </div>`;
  }).join('');

  card.innerHTML = `
    <div class="sample-header">
      <span class="sample-title">✨ ${t('sample.title')}</span>
      <span class="sample-fw-badge">Part ${q.part}</span>
    </div>
    <div class="sample-text">${escHtml(answerText)}</div>
    ${phrasesHtml ? `<div style="padding:10px 14px 14px">
      <div style="font-size:.75rem;font-weight:600;color:#92400E;margin-bottom:6px">${t('ielts.rewritePhrases')}</div>
      <div class="ielts-rw-phrases">${phrasesHtml}</div>
    </div>` : ''}
    <div class="sample-footer"><span class="sample-wc">📝 ${actualWords} words</span></div>
  `;
  ieltsTest.samples[idx] = card.innerHTML;
  wrap.style.display = 'block';
  btn.classList.add('active');
  wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function analyzeFullMock() {
  const topicKey = $('ieltsMockTopic').value;
  const topicLabel = CAT_EN[topicKey] || topicKey;

  const answerCount = Object.keys(ieltsTest.answers).filter(k => ieltsTest.answers[k]?.trim()).length;
  if (answerCount === 0) {
    showToast(state.lang === 'vi' ? 'Hãy ghi âm ít nhất 1 câu trả lời!' : 'Please record at least one answer first!', 'err');
    return;
  }

  // Compact Q&A: max 60 words/answer to keep prompt short
  const trunc = (txt, n) => { const w = txt.trim().split(/\s+/); return w.length > n ? w.slice(0, n).join(' ') + '…' : txt; };
  let qa = '';
  ieltsTest.questions.forEach((q, i) => {
    const ans = ieltsTest.answers[i] ? trunc(ieltsTest.answers[i], 60) : '(no answer)';
    qa += `[P${q.part}] Q: ${q.text}\nA: ${ans}\n`;
  });
  const totalWords = Object.values(ieltsTest.answers).join(' ').trim().split(/\s+/).filter(Boolean).length;

  // Minimal schema — no correctedVersion, no rewritePhrases to keep response small
  const fullJsonNote = 'Output raw JSON only — no markdown, no explanation. Use single quotes inside string values, never double-quote characters.';
  const prompt = state.lang === 'vi'
    ? `Giám khảo IELTS. Chủ đề: "${topicLabel}". Chấm nghiêm: hầu hết 4.5-6.5, KHÔNG cho 8+. Dùng dấu nháy đơn trong giá trị chuỗi JSON, không dùng dấu nháy kép. Đếm fillers (um/uh/you know/like), nhận xét intonation.\n${qa}\n${fullJsonNote}\n{"overall":6.0,"FC":{"band":6.0,"feedback":"FC toàn bài + fillers + nhịp điệu","tips":["tip1","tip2"]},"GRA":{"band":6.0,"feedback":"ngữ pháp","errors":[{"original":"sai","corrected":"đúng","note":"lý do"}],"tips":["tip"]},"LR":{"band":6.0,"feedback":"từ vựng","upgrades":[{"weak":"yếu","better":"mạnh","context":"ngữ cảnh"}],"tips":["tip"]},"P":{"band":6.0,"feedback":"phát âm + intonation + fillers","tips":["tip"]},"overallTips":["mục tiêu 1","mục tiêu 2","mục tiêu 3"]}`
    : `IELTS examiner. Topic: "${topicLabel}". Strict: most 4.5-6.5, NEVER 8+. Use single quotes inside JSON string values, never double-quote chars. Count fillers (um/uh/you know/like), note intonation.\n${qa}\n${fullJsonNote}\n{"overall":6.0,"FC":{"band":6.0,"feedback":"FC all parts + fillers + fluency","tips":["tip1","tip2"]},"GRA":{"band":6.0,"feedback":"grammar","errors":[{"original":"wrong","corrected":"fixed","note":"reason"}],"tips":["tip"]},"LR":{"band":6.0,"feedback":"vocabulary","upgrades":[{"weak":"weak","better":"stronger","context":"context"}],"tips":["tip"]},"P":{"band":6.0,"feedback":"pronunciation + intonation + fillers","tips":["tip"]},"overallTips":["goal 1","goal 2","goal 3"]}`;

  const btn = $('mockNextBtn');
  btn.disabled = true;
  btn.textContent = '⏳ Analyzing...';

  const result = await callAPI(prompt);
  btn.disabled = false;
  btn.textContent = t('ielts.submitAll');

  if (!result) return;
  const score = safeParseIelts(result);
  if (!score) { showToast(t('toast.error') + 'Could not parse IELTS score', 'err'); return; }
  score.wordCount = totalWords;
  renderIeltsCard('mockFinal', score);
  renderFullMockAnswers();
  updateStreak();
  $('mockFinalScoreCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderFullMockAnswers() {
  const el = $('mockFinalAnswers');
  if (!el) return;
  const partColors = { 1: '#6C5CE7', 2: '#FD7E14', 3: '#20C997' };
  const partNames  = { 1: 'Part 1 — Introduction', 2: 'Part 2 — Long Turn', 3: 'Part 3 — Discussion' };
  let html = `<div class="full-mock-answers-title">📋 ${state.lang === 'vi' ? 'Câu trả lời của bạn' : 'Your Answers'}</div>`;
  let lastPart = 0;
  ieltsTest.questions.forEach((q, i) => {
    if (q.part !== lastPart) {
      html += `<div class="full-mock-part-header" style="color:${partColors[q.part]}">${partNames[q.part]}</div>`;
      lastPart = q.part;
    }
    const ans = (ieltsTest.answers[i] || '').trim();
    html += `<div class="full-mock-qa">
      <div class="full-mock-q">Q${i + 1}: ${escHtml(q.text)}</div>
      <div class="full-mock-a${ans ? '' : ' full-mock-a-empty'}">${ans ? escHtml(ans) : (state.lang === 'vi' ? 'Không có câu trả lời' : 'No answer recorded')}</div>
    </div>`;
  });
  el.innerHTML = html;
  el.style.display = 'block';
}

// ---- Settings Modal ----
function openSettings() {
  $('apiKeyInput').value = state.apiKey;
  $('settingsModal').classList.add('open');
}
function closeSettings() {
  $('settingsModal').classList.remove('open');
}
function saveSettings() {
  state.apiKey = $('apiKeyInput').value.trim();
  localStorage.setItem('speakup_api_key', state.apiKey);
  closeSettings();
  showToast(t('toast.saved'), 'ok');
}

// ---- Language Toggle ----
function toggleLang() {
  state.lang = state.lang === 'en' ? 'vi' : 'en';
  localStorage.setItem('speakup_lang', state.lang);
  applyI18n();
  // Refresh timer button labels
  ['gen', 'int', 'voc'].forEach(id => {
    const startBtn = { gen: 'genTimerStart', int: 'intTimerStart', voc: 'vocTimerStart' }[id];
    const resetBtn = { gen: 'genTimerReset', int: 'intTimerReset', voc: 'vocTimerReset' }[id];
    const tm = state.timers[id];
    $(startBtn).textContent = tm.running ? t('timer.pause') : t('timer.start');
    $(resetBtn).textContent = t('timer.reset');
  });
}

// ---- Daily Streak ----
function addPracticeDate(dateStr) {
  let dates = [];
  try { dates = JSON.parse(localStorage.getItem('speakup_practice_dates') || '[]'); } catch(e){}
  if (!dates.includes(dateStr)) {
    dates.push(dateStr);
    const cutoff = new Date(Date.now() - 180 * 86400000).toISOString().slice(0, 10);
    dates = dates.filter(d => d >= cutoff);
    localStorage.setItem('speakup_practice_dates', JSON.stringify(dates));
  }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  addPracticeDate(today);
  const last  = localStorage.getItem('speakup_streak_last') || '';
  let count   = parseInt(localStorage.getItem('speakup_streak_count') || '0');
  if (last === today) { renderStreak(count); return; }
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  count = last === yesterday ? count + 1 : 1;
  localStorage.setItem('speakup_streak_last', today);
  localStorage.setItem('speakup_streak_count', count);
  renderStreak(count);
}

function renderStreak(count) {
  const el = $('streakBadge');
  if (!el) return;
  if (count > 0) {
    el.textContent = `🔥 ${count}`;
    el.title = `${count} day streak! Click to see calendar`;
    el.style.display = 'inline-flex';
  } else {
    el.style.display = 'none';
  }
}

// ---- Practice Calendar ----
let _calMonth = null;

function showCalendar() {
  const existing = document.getElementById('calModalBackdrop');
  if (existing) { existing.remove(); return; }
  _calMonth = new Date();
  const backdrop = document.createElement('div');
  backdrop.className = 'cal-modal-backdrop';
  backdrop.id = 'calModalBackdrop';
  backdrop.innerHTML = `
    <div class="cal-modal">
      <div class="cal-modal-title">📅 ${state.lang === 'vi' ? 'Lịch học của tôi' : 'My Practice Calendar'}</div>
      <div class="cal-nav">
        <button class="cal-nav-btn" id="calPrevBtn">‹</button>
        <span class="cal-month-label" id="calMonthLabel"></span>
        <button class="cal-nav-btn" id="calNextBtn">›</button>
      </div>
      <div class="cal-weekdays">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>
      <div class="cal-days" id="calDaysGrid"></div>
      <div class="cal-stats-row" id="calStatsRow"></div>
      <button class="cal-close-btn" id="calCloseBtn">✕ ${state.lang === 'vi' ? 'Đóng' : 'Close'}</button>
    </div>`;
  document.body.appendChild(backdrop);
  renderCalendar();
  backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });
  document.getElementById('calCloseBtn').addEventListener('click', () => backdrop.remove());
  document.getElementById('calPrevBtn').addEventListener('click', () => {
    _calMonth.setMonth(_calMonth.getMonth() - 1); renderCalendar();
  });
  document.getElementById('calNextBtn').addEventListener('click', () => {
    _calMonth.setMonth(_calMonth.getMonth() + 1); renderCalendar();
  });
}

function renderCalendar() {
  let practicedSet = new Set();
  try { practicedSet = new Set(JSON.parse(localStorage.getItem('speakup_practice_dates') || '[]')); } catch(e){}
  const today  = new Date().toISOString().slice(0, 10);
  const year   = _calMonth.getFullYear();
  const month  = _calMonth.getMonth();
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('calMonthLabel').textContent = `${MONTHS[month]} ${year}`;

  const firstDow   = new Date(year, month, 1).getDay();
  const daysInMon  = new Date(year, month + 1, 0).getDate();
  let practicedThisMonth = 0;
  let html = '';
  for (let i = 0; i < firstDow; i++) html += '<span class="cal-cell"></span>';
  for (let d = 1; d <= daysInMon; d++) {
    const ds       = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const done     = practicedSet.has(ds);
    const isToday  = ds === today;
    const isFuture = ds > today;
    if (done) practicedThisMonth++;
    let cls = 'cal-cell';
    if (done) cls += ' practiced';
    if (isFuture) cls += ' future';
    if (isToday)  cls += ' today-ring';
    html += `<span class="${cls}" title="${ds}">${d}</span>`;
  }
  document.getElementById('calDaysGrid').innerHTML = html;

  const streak    = parseInt(localStorage.getItem('speakup_streak_count') || '0');
  const totalDays = practicedSet.size;
  const isVi      = state.lang === 'vi';
  document.getElementById('calStatsRow').innerHTML = `
    <div class="cal-stat">
      <span class="cal-stat-val">🔥 ${streak}</span>
      <span class="cal-stat-lbl">${isVi ? 'Chuỗi ngày' : 'Day streak'}</span>
    </div>
    <div class="cal-stat">
      <span class="cal-stat-val">📅 ${practicedThisMonth}</span>
      <span class="cal-stat-lbl">${isVi ? 'Tháng này' : 'This month'}</span>
    </div>
    <div class="cal-stat">
      <span class="cal-stat-val">⭐ ${totalDays}</span>
      <span class="cal-stat-lbl">${isVi ? 'Tổng ngày học' : 'Total days'}</span>
    </div>`;
}

function loadStreak() {
  const last  = localStorage.getItem('speakup_streak_last') || '';
  let count   = parseInt(localStorage.getItem('speakup_streak_count') || '0');
  if (count > 0) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const today = new Date().toISOString().slice(0, 10);
    if (last !== today && last !== yesterday) count = 0;
  }
  renderStreak(count);
}

// ---- Init ----
function init() {
  applyI18n();
  loadStreak();

  // Tabs
  document.querySelectorAll('.tab').forEach(tab =>
    tab.addEventListener('click', () => switchTab(tab.dataset.tab)));

  // Timers
  setupTimer('gen', 'genTimerDisplay', 'genTimerStart', 'genTimerReset');
  setupTimer('int', 'intTimerDisplay', 'intTimerStart', 'intTimerReset');
  setupTimer('voc', 'vocTimerDisplay', 'vocTimerStart', 'vocTimerReset');

  // Recording
  setupRecording('gen');
  setupRecording('int');
  setupRecording('voc');
  setupRecording('gram');
  setupRecording('mock');

  // IELTS Mock
  setupMockTimer();
  $('btnStartIeltsMock').addEventListener('click', startIeltsMock);
  $('mockShowSample').addEventListener('click', showMockSample);
  $('mockNextBtn').addEventListener('click', () => {
    const txt = $('mockTranscript').textContent.trim();
    if (txt) ieltsTest.answers[ieltsTest.current] = txt;
    if (ieltsTest.current < ieltsTest.questions.length - 1) {
      ieltsTest.current++;
      showMockQuestion();
      $('ieltsMockArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      analyzeFullMock();
    }
  });
  $('mockPrevBtn').addEventListener('click', () => {
    if (ieltsTest.current > 0) {
      const txt = $('mockTranscript').textContent.trim();
      if (txt) ieltsTest.answers[ieltsTest.current] = txt;
      ieltsTest.current--;
      showMockQuestion();
      $('ieltsMockArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Sample answer buttons
  $('genShowSample').addEventListener('click', () => toggleSampleAnswer('gen'));
  $('intShowSample').addEventListener('click', () => toggleSampleAnswer('int'));
  $('vocShowSample').addEventListener('click', () => toggleSampleAnswer('voc'));

  // Generators
  $('btnGenerateTopic').addEventListener('click', generateTopic);
  $('btnGenerateInterview').addEventListener('click', generateInterview);
  $('btnGenerateVocab').addEventListener('click', generateVocab);
  $('btnGenerateGrammar').addEventListener('click', generateGrammar);

  // Copy buttons
  $('copyTopic').addEventListener('click', () => copyText(state.lastResults.topic));
  $('copyInterview').addEventListener('click', () => copyText(state.lastResults.interview));
  $('copyVocab').addEventListener('click', () => copyText(state.lastResults.vocab));

  // Streak badge → calendar
  $('streakBadge').addEventListener('click', showCalendar);

  // Language
  $('langBtn').addEventListener('click', toggleLang);

  // Settings modal
  $('settingsBtn').addEventListener('click', openSettings);
  $('closeSettings').addEventListener('click', closeSettings);
  $('cancelSettings').addEventListener('click', closeSettings);
  $('saveSettings').addEventListener('click', saveSettings);
  $('settingsModal').addEventListener('click', e => {
    if (e.target === $('settingsModal')) closeSettings();
  });

  // Toggle API key visibility
  $('toggleApiKey').addEventListener('click', () => {
    const inp = $('apiKeyInput');
    const visible = inp.type === 'text';
    inp.type = visible ? 'password' : 'text';
    $('toggleApiKey').textContent = visible ? '👁' : '🙈';
  });

  // Save on Enter in API key field
  $('apiKeyInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveSettings();
  });

  // Prompt for API key on first load
  if (!state.apiKey) {
    setTimeout(() => showToast(t('toast.noKey'), 'err'), 800);
  }
}

document.addEventListener('DOMContentLoaded', init);
