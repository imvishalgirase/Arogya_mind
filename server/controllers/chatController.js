const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.chat = async (req, res) => {
  try {
    const { mood, message, history = [] } = req.body;
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: `You are 'Arogya AI', an empathetic mental wellness companion. The user currently feels '${mood}'. Converse naturally, smoothly, and warmly.`
    });
    
    // Map existing conversation so AI remembers the context
    const formattedHistory = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    
    // Gemini strictly requires the very first history message to be from the 'user'
    if (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
      formattedHistory.unshift({ role: 'user', parts: [{ text: `Hi! I am currently feeling ${mood}. Let's chat.` }] });
    }
    
    const chat = model.startChat({
      history: formattedHistory,
    });
    
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    
    res.json({ reply: text });
  } catch (err) {
    console.error('Gemini error:', err);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};
