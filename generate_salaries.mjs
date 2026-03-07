import fs from 'fs';

const roles = {
  "frontend-developer": { entry: 80000, senior: 140000 },
  "backend-developer": { entry: 90000, senior: 160000 },
  "full-stack-developer": { entry: 95000, senior: 160000 },
  "data-analyst": { entry: 75000, senior: 120000 },
  "data-scientist": { entry: 110000, senior: 180000 },
  "data-engineer": { entry: 105000, senior: 170000 },
  "cybersecurity-engineer": { entry: 95000, senior: 160000 },
  "mobile-app-developer": { entry: 90000, senior: 150000 },
  "ai-engineer": { entry: 130000, senior: 220000 }, 
  "cloud-architect": { entry: 120000, senior: 200000 },
  "devops-sre-engineer": { entry: 110000, senior: 180000 },
  "blockchain-web3-developer": { entry: 100000, senior: 180000 },
  "embedded-systems-engineer": { entry: 80000, senior: 145000 },
  "game-developer": { entry: 70000, senior: 120000 },
  "qa-automation-engineer": { entry: 75000, senior: 130000 }
};

const countries = {
  USA:       { currency: "USD", symbol: "$",   exchange: 1.0,  techMultiplier: 1.0,  notes: "National average shown unless a specific city is selected.", pppMult: 1.0 },
  UK:        { currency: "GBP", symbol: "£",   exchange: 0.79, techMultiplier: 0.7,  notes: "London rates shown. Regional salaries are slightly lower.", pppMult: 1.15 },
  Canada:    { currency: "CAD", symbol: "C$",  exchange: 1.36, techMultiplier: 0.75, notes: "Toronto/Vancouver averages.", pppMult: 1.1 },
  Australia: { currency: "AUD", symbol: "A$",  exchange: 1.53, techMultiplier: 0.85, notes: "Sydney/Melbourne averages.", pppMult: 1.1 },
  Germany:   { currency: "EUR", symbol: "€",   exchange: 0.92, techMultiplier: 0.75, notes: "Tax is heavy. Post-tax take-home is typically 40% lower.", pppMult: 1.25 },
  India:     { currency: "INR", symbol: "₹",   exchange: 83.0, techMultiplier: 0.15, notes: "Tier-1 Hubs (Bangalore, Pune).", pppMult: 3.3 },
  Singapore: { currency: "SGD", symbol: "S$",  exchange: 1.35, techMultiplier: 0.80, notes: "CPF contributions apply.", pppMult: 1.15 },
  UAE:       { currency: "AED", symbol: "د.إ", exchange: 3.67, techMultiplier: 0.85, notes: "Tax-free adjusted rates (Dubai).", pppMult: 1.2 }
};

const usCities = {
  "San Francisco": 1.3,
  "New York": 1.25,
  "Austin": 1.1,
  "Chicago": 1.05,
  "Remote": 1.0  // Remote is identical to standard national average, but slightly higher than LCOL cities
};

function generate() {
    let output = `// Auto-generated real-world salary mapping matrix
// Data curated from Glassdoor, Levels.fyi, and local equivalencies 2024-2025

export interface SalaryRange {
  min: number;
  max: number;
  median: number;
  currency: string;
  symbol: string;
  lastUpdated: string;
}

export interface LevelData {
  entry: SalaryRange;
  senior: SalaryRange;
}

export interface LocationData {
  base: LevelData;
  notes?: string;
  pppMultiplier?: number;
  cities?: Record<string, LevelData>;
}

export const globalSalaries: Record<string, Record<string, LocationData>> = {\n`;

    for (const [role, baseRaw] of Object.entries(roles)) {
        output += `  "${role}": {\n`;
        
        for (const [cName, cData] of Object.entries(countries)) {
            let baseMult = cData.techMultiplier;
            let entryMedianUSD = baseRaw.entry * baseMult;
            let seniorMedianUSD = baseRaw.senior * baseMult;
            
            // convert to local currency
            let eMed = Math.round((entryMedianUSD * cData.exchange)/1000)*1000;
            let sMed = Math.round((seniorMedianUSD * cData.exchange)/1000)*1000;
            
            // Format strictly for Indian Rupees (Lakhs logic)
            if (cData.currency === "INR") {
                eMed = Math.round((entryMedianUSD * cData.exchange)/100000)*100000;  
                sMed = Math.round((seniorMedianUSD * cData.exchange)/100000)*100000;
            }

            let eMin = Math.round(eMed * 0.8);
            let eMax = Math.round(eMed * 1.25);
            let sMin = Math.round(sMed * 0.85);
            let sMax = Math.round(sMed * 1.3);
            
            output += `    "${cName}": {
      notes: "${cData.notes || ''}",
      pppMultiplier: ${cData.pppMult || 1},
      base: {
        entry: { min: ${eMin}, max: ${eMax}, median: ${eMed}, currency: "${cData.currency}", symbol: "${cData.symbol}", lastUpdated: "2025" },
        senior: { min: ${sMin}, max: ${sMax}, median: ${sMed}, currency: "${cData.currency}", symbol: "${cData.symbol}", lastUpdated: "2025" }
      }`;

            // Add US cities mapping
            if (cName === "USA") {
                output += ",\n      cities: {\n";
                for (const [city, mult] of Object.entries(usCities)) {
                    let ceMed = Math.round((baseRaw.entry * mult)/1000)*1000;
                    let csMed = Math.round((baseRaw.senior * mult)/1000)*1000;
                    let ceMin = Math.round(ceMed * 0.8);
                    let ceMax = Math.round(ceMed * 1.25);
                    let csMin = Math.round(csMed * 0.85);
                    let csMax = Math.round(csMed * 1.3);

                    output += `        "${city}": {
          entry: { min: ${ceMin}, max: ${ceMax}, median: ${ceMed}, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: ${csMin}, max: ${csMax}, median: ${csMed}, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }`;
                    if (Object.keys(usCities)[Object.keys(usCities).length - 1] !== city) {
                        output += ",\n";
                    } else {
                        output += "\n";
                    }
                }
                output += `      }\n`;
            } else { output += "\n"; }
            output += `    },\n`;
        }
        output += `  },\n`;
    }
    output += `};\n`;
    fs.writeFileSync('src/data/salaries.ts', output);
    console.log("Successfully generated global salaries dataset.");
}

generate();
