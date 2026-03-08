async function triggerDeploy() {
  try {
    const res = await fetch('https://api.render.com/v1/services/srv-d6lsrv450q8c73aa21kg/deploys', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer rnd_GJwjqcdUE1UYkaLTrqKJR1zKs5ey',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clearCache: "clear"
      })
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
triggerDeploy();
