async function getTextLogs() {
  try {
    const res = await fetch('https://api.render.com/v1/services/srv-d6lsrv450q8c73aa21kg/deploys/dep-d6m41624d50c73cl0jv0/logs?limit=50', {
      headers: {
        'Accept': 'text/plain',
        'Authorization': 'Bearer rnd_GJwjqcdUE1UYkaLTrqKJR1zKs5ey'
      }
    });
    const logs = await res.text();
    console.log(logs.slice(-2000));
  } catch (error) {
    console.error(error);
  }
}
getTextLogs();
