const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
  try {
    const genAI = new GoogleGenerativeAI('AIzaSyCoG-jTghmLigH2ZyuLOQMobYD55JX2oWI');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = 'Hello';
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log('SUCCESS:', response.text());
  } catch (err) {
    console.error('ERROR:', err);
  }
}
test();
