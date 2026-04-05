async function test() {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyCoG-jTghmLigH2ZyuLOQMobYD55JX2oWI');
    const data = await response.json();
    console.log('API RESPONSE:', JSON.stringify(data).substring(0, 500));
  } catch(e) {}
}
test();
