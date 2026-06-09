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
    'ielts.rewritePhrases': 'Useful Phrases from Rewrite',
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
    'ielts.rewritePhrases': 'Cụm Từ Hay Từ Bài Viết Lại',
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
  },
  lastResults: { topic: '', interview: '', vocab: '' },
};

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
  setLoading(true);
  try {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, apiKey: state.apiKey })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'API error');
    return data.result;
  } catch (err) {
    showToast(t('toast.error') + err.message, 'err');
    return null;
  } finally {
    setLoading(false);
  }
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

  const contextMap = { gen: state.lastResults.topic, int: state.lastResults.interview, voc: state.lastResults.vocab };
  const context = contextMap[tabId] || '';
  const wordCount = transcript.trim().split(/\s+/).length;

  const prompt = state.lang === 'vi'
    ? `Bạn là giám khảo IELTS chuyên nghiệp. Phân tích KỸ bài nói sau theo 4 tiêu chí IELTS Speaking.${context ? `\nChủ đề: "${context}"` : ''}\nBài nói (${wordCount} từ): "${transcript}"\n\nCung cấp nhận xét CHI TIẾT, trích dẫn câu cụ thể từ bài nói. Trả về JSON hợp lệ (không markdown):\n{"overall":6.5,"FC":{"band":7,"feedback":"nhận xét chi tiết về fluency, coherence, discourse markers — trích câu cụ thể","tips":["gợi ý cụ thể 1","gợi ý cụ thể 2"]},"GRA":{"band":6,"feedback":"nhận xét tổng về grammar","errors":[{"original":"câu sai trích từ bài","corrected":"câu đã sửa","note":"giải thích ngắn"}],"tips":["gợi ý grammar"]},"LR":{"band":6,"feedback":"nhận xét tổng về từ vựng","upgrades":[{"weak":"từ yếu đã dùng","better":"từ mạnh hơn","context":"ngữ cảnh dùng"}],"tips":["gợi ý từ vựng"]},"P":{"band":6,"feedback":"nhận xét về phát âm dựa trên cấu trúc câu","tips":["gợi ý phát âm"]},"overallTips":["cải thiện quan trọng nhất 1","cải thiện quan trọng nhất 2"],"correctedVersion":"Viết lại TOÀN BỘ bài nói ở trình độ Band 7-9 bằng tiếng Anh, tối thiểu 200 từ, giữ nguyên ý chính nhưng dùng từ vựng cao cấp, cấu trúc ngữ pháp phức tạp (relative clauses, conditionals, passive voice), discourse markers tự nhiên và ví dụ cụ thể","rewritePhrases":["cụm từ hay 1 từ bài viết lại","cụm từ hay 2","cụm từ hay 3","cụm từ hay 4","cụm từ hay 5"]}\nBand theo thang IELTS 1-9 (có thể dùng 0.5). errors tối đa 3. upgrades tối đa 3.`
    : `You are a professional IELTS examiner. Analyze this speaking response IN DETAIL across all 4 IELTS Speaking criteria.${context ? `\nTopic: "${context}"` : ''}\nResponse (${wordCount} words): "${transcript}"\n\nProvide SPECIFIC feedback quoting actual sentences. Return valid JSON only (no markdown):\n{"overall":6.5,"FC":{"band":7,"feedback":"detailed feedback on fluency, coherence, discourse markers — quote specific parts","tips":["actionable tip 1","actionable tip 2"]},"GRA":{"band":6,"feedback":"overall grammar assessment","errors":[{"original":"exact sentence from response","corrected":"corrected version","note":"brief explanation"}],"tips":["specific grammar tip"]},"LR":{"band":6,"feedback":"overall vocabulary assessment","upgrades":[{"weak":"weak word used","better":"stronger alternative","context":"brief context"}],"tips":["specific vocab tip"]},"P":{"band":6,"feedback":"pronunciation notes based on word complexity and patterns","tips":["specific pronunciation tip"]},"overallTips":["most important improvement 1","most important improvement 2"],"correctedVersion":"Full Band 7-9 rewrite of AT LEAST 200 words keeping the same ideas but with sophisticated vocabulary, complex grammar (relative clauses, conditionals, passive voice, mixed tenses), natural discourse markers, and concrete examples","rewritePhrases":["useful phrase 1 from rewrite","useful phrase 2","useful phrase 3","useful phrase 4","useful phrase 5"]}\nBands: IELTS 1-9 scale (0.5 increments). Max 3 errors, max 3 upgrades.`;

  const btn = $(`${tabId}AnalyzeBtn`);
  btn.disabled = true;
  const result = await callAPI(prompt);
  btn.disabled = false;
  if (!result) return;

  try {
    const score = JSON.parse(result.replace(/```json\s*|\s*```/g, '').trim());
    score.wordCount = wordCount;
    renderIeltsCard(tabId, score);
  } catch {
    showToast(t('toast.error') + 'Could not parse IELTS score', 'err');
  }
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
    ${s.correctedVersion ? `
    <div class="ielts-corrected">
      <div class="ielts-corrected-title">✏️ ${t('ielts.corrected')}</div>
      <div class="ielts-corrected-text">${escHtml(s.correctedVersion)}</div>
      ${s.rewritePhrases?.length ? `
      <div class="ielts-rw-phrases-title">${t('ielts.rewritePhrases')}</div>
      <div class="ielts-rw-phrases">${s.rewritePhrases.map(p => `<span class="ielts-rw-phrase">${escHtml(p)}</span>`).join('')}</div>` : ''}
    </div>` : ''}
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

  const contextMap = { gen: state.lastResults.topic, int: state.lastResults.interview, voc: state.lastResults.vocab };
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

// ---- Init ----
function init() {
  applyI18n();

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

  // Sample answer buttons
  $('genShowSample').addEventListener('click', () => toggleSampleAnswer('gen'));
  $('intShowSample').addEventListener('click', () => toggleSampleAnswer('int'));
  $('vocShowSample').addEventListener('click', () => toggleSampleAnswer('voc'));

  // Generators
  $('btnGenerateTopic').addEventListener('click', generateTopic);
  $('btnGenerateInterview').addEventListener('click', generateInterview);
  $('btnGenerateVocab').addEventListener('click', generateVocab);

  // Copy buttons
  $('copyTopic').addEventListener('click', () => copyText(state.lastResults.topic));
  $('copyInterview').addEventListener('click', () => copyText(state.lastResults.interview));
  $('copyVocab').addEventListener('click', () => copyText(state.lastResults.vocab));

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
