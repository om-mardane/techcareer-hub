const fs = require('fs');
const careers = fs.readFileSync('src/data/careers.ts', 'utf8');
const matches = [...careers.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log("IDs in careers.ts:");
console.log(matches);

const salaries = fs.readFileSync('src/data/salaries.ts', 'utf8');
const salaryMatches = [...salaries.matchAll(/['"]([^'"]+)['"]:\s*\{/g)].map(m => m[1]).filter(id => matches.includes(id));
console.log("Keys in globalSalaries:");
console.log(salaryMatches);

const missing = matches.filter(id => !salaryMatches.includes(id));
console.log("Missing salaries for:");
console.log(missing);
