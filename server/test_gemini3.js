const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
  try {
    const fetch = require('node-fetch'); // or use native fetch in node > 18
    const apiKey = 'AIzaSyCoG-jTghmLigH2ZyuLOQMobYD55JX2oWI';
    const response = await global.fetch(https://generativelanguage.googleapis.com/v1beta/models?key= + apiKey);
    const data = await response.json();
    console.log('SUCCESS:', data);
  } catch (err) {
    console.error('ERROR:', err);
  }
}
test();
