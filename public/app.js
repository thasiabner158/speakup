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
    'rec.title': '🎙 Record & Score',
    'rec.start': 'Start Recording',
    'rec.stop': 'Stop Recording',
    'rec.analyze': 'Analyze Speech',
    'rec.ph': 'Your speech will appear here as you speak...',
    'rec.noSupport': 'Speech recognition not supported. Please use Chrome or Edge.',
    'rec.noSpeech': 'No speech detected. Please try again.',
    'score.relevance': 'Relevance',
    'score.structure': 'Structure',
    'score.fluency': 'Fluency',
    'score.strengths': 'Strengths',
    'score.improve': 'Improvements',
    'score.words': 'words',
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
    'rec.title': '🎙 Ghi Âm & Chấm Điểm',
    'rec.start': 'Bắt Đầu Ghi Âm',
    'rec.stop': 'Dừng Ghi Âm',
    'rec.analyze': 'Phân Tích Bài Nói',
    'rec.ph': 'Lời nói của bạn sẽ hiển thị tại đây...',
    'rec.noSupport': 'Trình duyệt không hỗ trợ ghi âm. Vui lòng dùng Chrome hoặc Edge.',
    'rec.noSpeech': 'Không nhận được giọng nói. Vui lòng thử lại.',
    'score.relevance': 'Liên Quan',
    'score.structure': 'Cấu Trúc',
    'score.fluency': 'Lưu Loát',
    'score.strengths': 'Điểm Mạnh',
    'score.improve': 'Cần Cải Thiện',
    'score.words': 'từ',
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
  const display = $(displayId);
  const startBtn = $(startId);
  const resetBtn = $(resetId);

  function refresh() {
    display.textContent = fmtTime(tm.sec);
    display.classList.toggle('running', tm.running && tm.sec > 10);
    display.classList.toggle('danger',  tm.running && tm.sec <= 10);
  }

  startBtn.addEventListener('click', () => {
    if (tm.running) {
      clearInterval(tm.interval);
      tm.running = false;
      startBtn.textContent = t('timer.start');
      startBtn.classList.remove('is-running');
    } else {
      if (tm.sec === 0) tm.sec = tm.initial;
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
  general: 'general topics', tech: 'technology', finance: 'finance & money',
  roast: 'roasting/mocking something popular', defend: 'defending an unpopular opinion',
  millennial: 'millennial culture & experiences', genz: 'Gen Z culture & trends',
  conspiracy: 'fun & absurd conspiracy theories',
};
const CAT_VI = {
  general: 'chủ đề chung', tech: 'công nghệ', finance: 'tài chính & tiền bạc',
  roast: 'chê bai một điều phổ biến', defend: 'bảo vệ quan điểm không phổ biến',
  millennial: 'văn hóa thế hệ millennial', genz: 'văn hóa thế hệ Gen Z',
  conspiracy: 'thuyết âm mưu vui và phi lý',
};
const DIFF_EN = { random: 'random difficulty', easy: 'easy', medium: 'medium', hard: 'challenging' };
const DIFF_VI = { random: 'ngẫu nhiên', easy: 'dễ', medium: 'trung bình', hard: 'khó' };
const ITYPE_EN = { behavioral: 'behavioral', technical: 'technical', situational: 'situational', consulting: 'consulting/case-study' };
const ITYPE_VI = { behavioral: 'hành vi', technical: 'kỹ thuật', situational: 'tình huống', consulting: 'tư vấn/case study' };

function buildTopicPrompt(category, difficulty) {
  if (state.lang === 'vi') {
    return `Tạo một chủ đề diễn thuyết ngẫu hứng thú vị và sáng tạo về ${CAT_VI[category] || category}. Độ khó: ${DIFF_VI[difficulty] || difficulty}. Chủ đề phải là một câu hoặc câu hỏi rõ ràng để người nói có thể diễn thuyết trong 1-2 phút. Chỉ trả về chủ đề, không giải thích thêm. Viết bằng tiếng Việt.`;
  }
  return `Generate a creative and engaging impromptu speech topic about ${CAT_EN[category] || category}. Difficulty: ${DIFF_EN[difficulty] || difficulty}. The topic must be a single clear sentence or question that someone can speak about for 1-2 minutes. Return ONLY the topic — no explanations, no numbering, no prefixes.`;
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
  } catch {
    state.lastResults.vocab = raw.trim();
    $('vocabResult').innerHTML = `<p class="result-text">${escHtml(raw.trim())}</p>`;
    $('vocabActions').style.display = 'flex';
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

  const prompt = state.lang === 'vi'
    ? `Đây là bài nói của học viên.${context ? `\nChủ đề/câu hỏi: "${context}"` : ''}\nBài nói: "${transcript}"\n\nHãy chấm điểm và trả về JSON hợp lệ (không markdown, không giải thích thêm) với đúng các key sau:\n{"overall":8,"relevance":7,"structure":8,"fluency":9,"wordCount":50,"feedback":"nhận xét ngắn 2-3 câu bằng tiếng Việt","strengths":["điểm mạnh 1","điểm mạnh 2"],"improvements":["cần cải thiện 1"]}\nChấm 1-10. Khuyến khích nhưng trung thực.`
    : `Student's speech:${context ? `\nTopic: "${context}"` : ''}\nTranscript: "${transcript}"\n\nScore this speech. Return valid JSON only (no markdown, no extra text):\n{"overall":8,"relevance":7,"structure":8,"fluency":9,"wordCount":50,"feedback":"2-3 encouraging sentences","strengths":["strength 1","strength 2"],"improvements":["area 1"]}\nScore 1-10. Be honest but encouraging.`;

  const btn = $(`${tabId}AnalyzeBtn`);
  btn.disabled = true;
  const result = await callAPI(prompt);
  btn.disabled = false;
  if (!result) return;

  try {
    const score = JSON.parse(result.replace(/```json\s*|\s*```/g, '').trim());
    renderScoreCard(tabId, score);
  } catch {
    showToast(t('toast.error') + 'Could not parse score', 'err');
  }
}

function renderScoreCard(tabId, s) {
  const card = $(`${tabId}ScoreCard`);
  const pct  = (s.overall / 10) * 100;
  const bar  = (val) => {
    const col = val >= 8 ? '#20C997' : val >= 6 ? '#FD7E14' : '#FA5252';
    return `<div class="s-bar"><div style="width:${val*10}%;background:${col}"></div></div>`;
  };

  card.innerHTML = `
    <div class="score-top">
      <div class="score-ring" style="--p:${pct}">
        <div class="score-inner">
          <span class="score-num">${s.overall}</span>
          <span class="score-denom">/10</span>
        </div>
      </div>
      <div class="score-bars">
        <div class="s-bar-row"><span>${t('score.relevance')}</span>${bar(s.relevance)}<span>${s.relevance}</span></div>
        <div class="s-bar-row"><span>${t('score.structure')}</span>${bar(s.structure)}<span>${s.structure}</span></div>
        <div class="s-bar-row"><span>${t('score.fluency')}</span>${bar(s.fluency)}<span>${s.fluency}</span></div>
      </div>
    </div>
    <p class="score-feedback">${escHtml(s.feedback || '')}</p>
    <div class="score-lists">
      <div><strong>✅ ${t('score.strengths')}</strong><ul>${(s.strengths||[]).map(x=>`<li>${escHtml(x)}</li>`).join('')}</ul></div>
      <div><strong>📈 ${t('score.improve')}</strong><ul>${(s.improvements||[]).map(x=>`<li>${escHtml(x)}</li>`).join('')}</ul></div>
    </div>
    ${s.wordCount ? `<p class="score-words">📝 ${s.wordCount} ${t('score.words')}</p>` : ''}
  `;
  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
