async function deploy() {
  try {
    const response = await fetch('https://api.render.com/v1/services', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer rnd_GJwjqcdUE1UYkaLTrqKJR1zKs5ey',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'web_service',
        name: 'techcareer-hub',
        ownerId: 'tea-d6lr0vhaae7s73f63lh0',
        repo: 'https://github.com/om-mardane/techcareer-hub',
        autoDeploy: 'yes',
        serviceDetails: {
          env: 'docker',
          plan: 'free',
          region: 'oregon'
        }
      })
    });
    
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Deployment error:', error);
  }
}

deploy();
