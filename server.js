const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/generate', async (req, res) => {
  const { prompt, apiKey } = req.body;

  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });
  if (!apiKey) return res.status(400).json({ error: 'API key is required' });

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 2048,
        temperature: 0.9
      })
    });

    const data = await response.json();
    console.log('[Groq] status:', response.status);

    if (!response.ok) {
      console.error('[Groq] error:', data.error?.code, data.error?.message?.slice(0, 120));
      const code = data.error?.code || '';
      if (code === 'invalid_api_key' || response.status === 401) {
        return res.status(401).json({ error: 'Invalid API key. Please check your Groq API key in Settings.' });
      }
      if (response.status === 429) {
        return res.status(429).json({ error: 'Rate limited. Please wait a moment and try again.' });
      }
      return res.status(response.status).json({ error: data.error?.message || 'Groq API error' });
    }

    const text = data.choices?.[0]?.message?.content || '';
    console.log('[Groq] success, chars:', text.length);
    res.json({ result: text });
  } catch (err) {
    console.error('[Server error]', err.message);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🎤 SpeakUp is running at http://localhost:${PORT}\n`);
});
