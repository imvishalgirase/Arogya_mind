const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
  try {
    const genAI = new GoogleGenerativeAI('AIzaSyCoG-jTghmLigH2ZyuLOQMobYD55JX2oWI');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const formattedHistory = [
      { role: 'model', parts: [{ text: 'I noticed you logged that you are feeling sad.' }] }
    ];
    const chat = model.startChat({ history: formattedHistory });
    await chat.sendMessage('yes');
    console.log('SUCCESS');
  } catch (err) {
    console.error('ERROR:', err);
  }
}
test();
