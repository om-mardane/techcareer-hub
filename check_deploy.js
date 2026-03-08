async function check() {
  try {
    const res = await fetch('https://api.render.com/v1/services/srv-d6lsrv450q8c73aa21kg/deploys', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer rnd_GJwjqcdUE1UYkaLTrqKJR1zKs5ey'
      }
    });
    const data = await res.json();
    console.log(JSON.stringify(data.slice(0, 2), null, 2));
  } catch (error) {
    console.error(error);
  }
}
check();
