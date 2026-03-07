const http = require('http');
http.get('http://localhost:3000/career/frontend-developer', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const fs = require('fs');
    fs.writeFileSync('output.html', data);
    console.log('Saved to output.html. Size: ' + data.length);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
