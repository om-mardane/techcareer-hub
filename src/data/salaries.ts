// Auto-generated real-world salary mapping matrix
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

export const globalSalaries: Record<string, Record<string, LocationData>> = {
  "frontend-developer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 64000, max: 100000, median: 80000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 119000, max: 182000, median: 140000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 83200, max: 130000, median: 104000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 154700, max: 236600, median: 182000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 80000, max: 125000, median: 100000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 148750, max: 227500, median: 175000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 70400, max: 110000, median: 88000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 130900, max: 200200, median: 154000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 67200, max: 105000, median: 84000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 124950, max: 191100, median: 147000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 64000, max: 100000, median: 80000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 119000, max: 182000, median: 140000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 35200, max: 55000, median: 44000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 65450, max: 100100, median: 77000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 65600, max: 102500, median: 82000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 121550, max: 185900, median: 143000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 83200, max: 130000, median: 104000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 154700, max: 236600, median: 182000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 44000, max: 68750, median: 55000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 82450, max: 126100, median: 97000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 800000, max: 1250000, median: 1000000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1445000, max: 2210000, median: 1700000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 68800, max: 107500, median: 86000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 128350, max: 196300, median: 151000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 200000, max: 312500, median: 250000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 371450, max: 568100, median: 437000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "backend-developer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 72000, max: 112500, median: 90000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 136000, max: 208000, median: 160000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 93600, max: 146250, median: 117000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 176800, max: 270400, median: 208000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 90400, max: 141250, median: 113000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 170000, max: 260000, median: 200000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 79200, max: 123750, median: 99000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 149600, max: 228800, median: 176000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 76000, max: 118750, median: 95000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 142800, max: 218400, median: 168000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 72000, max: 112500, median: 90000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 136000, max: 208000, median: 160000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 40000, max: 62500, median: 50000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 74800, max: 114400, median: 88000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 73600, max: 115000, median: 92000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 138550, max: 211900, median: 163000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 93600, max: 146250, median: 117000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 176800, max: 270400, median: 208000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 49600, max: 77500, median: 62000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 93500, max: 143000, median: 110000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 880000, max: 1375000, median: 1100000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1700000, max: 2600000, median: 2000000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 77600, max: 121250, median: 97000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 147050, max: 224900, median: 173000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 224800, max: 351250, median: 281000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 424150, max: 648700, median: 499000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "full-stack-developer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 76000, max: 118750, median: 95000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 136000, max: 208000, median: 160000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 99200, max: 155000, median: 124000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 176800, max: 270400, median: 208000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 95200, max: 148750, median: 119000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 170000, max: 260000, median: 200000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 84000, max: 131250, median: 105000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 149600, max: 228800, median: 176000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 80000, max: 125000, median: 100000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 142800, max: 218400, median: 168000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 76000, max: 118750, median: 95000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 136000, max: 208000, median: 160000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 42400, max: 66250, median: 53000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 74800, max: 114400, median: 88000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 77600, max: 121250, median: 97000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 138550, max: 211900, median: 163000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 99200, max: 155000, median: 124000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 176800, max: 270400, median: 208000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 52800, max: 82500, median: 66000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 93500, max: 143000, median: 110000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 960000, max: 1500000, median: 1200000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1700000, max: 2600000, median: 2000000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 82400, max: 128750, median: 103000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 147050, max: 224900, median: 173000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 236800, max: 370000, median: 296000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 424150, max: 648700, median: 499000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "data-analyst": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 60000, max: 93750, median: 75000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 102000, max: 156000, median: 120000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 78400, max: 122500, median: 98000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 132600, max: 202800, median: 156000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 75200, max: 117500, median: 94000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 127500, max: 195000, median: 150000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 66400, max: 103750, median: 83000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 112200, max: 171600, median: 132000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 63200, max: 98750, median: 79000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 107100, max: 163800, median: 126000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 60000, max: 93750, median: 75000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 102000, max: 156000, median: 120000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 32800, max: 51250, median: 41000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 56100, max: 85800, median: 66000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 61600, max: 96250, median: 77000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 103700, max: 158600, median: 122000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 78400, max: 122500, median: 98000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 132600, max: 202800, median: 156000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 41600, max: 65000, median: 52000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 70550, max: 107900, median: 83000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 720000, max: 1125000, median: 900000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1275000, max: 1950000, median: 1500000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 64800, max: 101250, median: 81000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 110500, max: 169000, median: 130000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 187200, max: 292500, median: 234000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 317900, max: 486200, median: 374000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "data-scientist": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 88000, max: 137500, median: 110000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 153000, max: 234000, median: 180000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 114400, max: 178750, median: 143000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 198900, max: 304200, median: 234000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 110400, max: 172500, median: 138000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 191250, max: 292500, median: 225000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 96800, max: 151250, median: 121000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 168300, max: 257400, median: 198000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 92800, max: 145000, median: 116000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 160650, max: 245700, median: 189000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 88000, max: 137500, median: 110000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 153000, max: 234000, median: 180000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 48800, max: 76250, median: 61000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 85000, max: 130000, median: 100000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 89600, max: 140000, median: 112000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 156400, max: 239200, median: 184000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 114400, max: 178750, median: 143000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 198900, max: 304200, median: 234000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 60800, max: 95000, median: 76000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 105400, max: 161200, median: 124000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 1120000, max: 1750000, median: 1400000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1870000, max: 2860000, median: 2200000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 95200, max: 148750, median: 119000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 164900, max: 252200, median: 194000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 274400, max: 428750, median: 343000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 477700, max: 730600, median: 562000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "data-engineer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 84000, max: 131250, median: 105000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 144500, max: 221000, median: 170000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 109600, max: 171250, median: 137000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 187850, max: 287300, median: 221000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 104800, max: 163750, median: 131000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 181050, max: 276900, median: 213000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 92800, max: 145000, median: 116000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 158950, max: 243100, median: 187000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 88000, max: 137500, median: 110000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 152150, max: 232700, median: 179000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 84000, max: 131250, median: 105000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 144500, max: 221000, median: 170000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 46400, max: 72500, median: 58000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 79900, max: 122200, median: 94000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 85600, max: 133750, median: 107000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 147050, max: 224900, median: 173000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 109600, max: 171250, median: 137000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 187850, max: 287300, median: 221000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 57600, max: 90000, median: 72000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 99450, max: 152100, median: 117000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 1040000, max: 1625000, median: 1300000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1785000, max: 2730000, median: 2100000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 90400, max: 141250, median: 113000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 156400, max: 239200, median: 184000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 262400, max: 410000, median: 328000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 450500, max: 689000, median: 530000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "cybersecurity-engineer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 76000, max: 118750, median: 95000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 136000, max: 208000, median: 160000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 99200, max: 155000, median: 124000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 176800, max: 270400, median: 208000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 95200, max: 148750, median: 119000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 170000, max: 260000, median: 200000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 84000, max: 131250, median: 105000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 149600, max: 228800, median: 176000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 80000, max: 125000, median: 100000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 142800, max: 218400, median: 168000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 76000, max: 118750, median: 95000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 136000, max: 208000, median: 160000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 42400, max: 66250, median: 53000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 74800, max: 114400, median: 88000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 77600, max: 121250, median: 97000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 138550, max: 211900, median: 163000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 99200, max: 155000, median: 124000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 176800, max: 270400, median: 208000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 52800, max: 82500, median: 66000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 93500, max: 143000, median: 110000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 960000, max: 1500000, median: 1200000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1700000, max: 2600000, median: 2000000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 82400, max: 128750, median: 103000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 147050, max: 224900, median: 173000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 236800, max: 370000, median: 296000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 424150, max: 648700, median: 499000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "mobile-app-developer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 72000, max: 112500, median: 90000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 127500, max: 195000, median: 150000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 93600, max: 146250, median: 117000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 165750, max: 253500, median: 195000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 90400, max: 141250, median: 113000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 159800, max: 244400, median: 188000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 79200, max: 123750, median: 99000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 140250, max: 214500, median: 165000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 76000, max: 118750, median: 95000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 134300, max: 205400, median: 158000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 72000, max: 112500, median: 90000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 127500, max: 195000, median: 150000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 40000, max: 62500, median: 50000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 70550, max: 107900, median: 83000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 73600, max: 115000, median: 92000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 130050, max: 198900, median: 153000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 93600, max: 146250, median: 117000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 165750, max: 253500, median: 195000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 49600, max: 77500, median: 62000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 88400, max: 135200, median: 104000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 880000, max: 1375000, median: 1100000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1615000, max: 2470000, median: 1900000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 77600, max: 121250, median: 97000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 137700, max: 210600, median: 162000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 224800, max: 351250, median: 281000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 397800, max: 608400, median: 468000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "ai-engineer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 104000, max: 162500, median: 130000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 187000, max: 286000, median: 220000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 135200, max: 211250, median: 169000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 243100, max: 371800, median: 286000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 130400, max: 203750, median: 163000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 233750, max: 357500, median: 275000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 114400, max: 178750, median: 143000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 205700, max: 314600, median: 242000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 109600, max: 171250, median: 137000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 196350, max: 300300, median: 231000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 104000, max: 162500, median: 130000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 187000, max: 286000, median: 220000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 57600, max: 90000, median: 72000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 103700, max: 158600, median: 122000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 106400, max: 166250, median: 133000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 190400, max: 291200, median: 224000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 135200, max: 211250, median: 169000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 243100, max: 371800, median: 286000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 72000, max: 112500, median: 90000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 129200, max: 197600, median: 152000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 1280000, max: 2000000, median: 1600000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 2295000, max: 3510000, median: 2700000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 112000, max: 175000, median: 140000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 202300, max: 309400, median: 238000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 324800, max: 507500, median: 406000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 583100, max: 891800, median: 686000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "cloud-architect": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 96000, max: 150000, median: 120000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 170000, max: 260000, median: 200000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 124800, max: 195000, median: 156000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 221000, max: 338000, median: 260000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 120000, max: 187500, median: 150000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 212500, max: 325000, median: 250000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 105600, max: 165000, median: 132000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 187000, max: 286000, median: 220000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 100800, max: 157500, median: 126000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 178500, max: 273000, median: 210000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 96000, max: 150000, median: 120000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 170000, max: 260000, median: 200000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 52800, max: 82500, median: 66000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 94350, max: 144300, median: 111000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 97600, max: 152500, median: 122000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 173400, max: 265200, median: 204000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 124800, max: 195000, median: 156000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 221000, max: 338000, median: 260000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 66400, max: 103750, median: 83000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 117300, max: 179400, median: 138000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 1200000, max: 1875000, median: 1500000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 2125000, max: 3250000, median: 2500000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 104000, max: 162500, median: 130000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 183600, max: 280800, median: 216000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 299200, max: 467500, median: 374000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 530400, max: 811200, median: 624000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "devops-sre-engineer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 88000, max: 137500, median: 110000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 153000, max: 234000, median: 180000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 114400, max: 178750, median: 143000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 198900, max: 304200, median: 234000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 110400, max: 172500, median: 138000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 191250, max: 292500, median: 225000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 96800, max: 151250, median: 121000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 168300, max: 257400, median: 198000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 92800, max: 145000, median: 116000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 160650, max: 245700, median: 189000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 88000, max: 137500, median: 110000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 153000, max: 234000, median: 180000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 48800, max: 76250, median: 61000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 85000, max: 130000, median: 100000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 89600, max: 140000, median: 112000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 156400, max: 239200, median: 184000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 114400, max: 178750, median: 143000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 198900, max: 304200, median: 234000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 60800, max: 95000, median: 76000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 105400, max: 161200, median: 124000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 1120000, max: 1750000, median: 1400000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1870000, max: 2860000, median: 2200000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 95200, max: 148750, median: 119000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 164900, max: 252200, median: 194000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 274400, max: 428750, median: 343000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 477700, max: 730600, median: 562000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "blockchain-web3-developer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 80000, max: 125000, median: 100000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 153000, max: 234000, median: 180000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 104000, max: 162500, median: 130000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 198900, max: 304200, median: 234000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 100000, max: 156250, median: 125000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 191250, max: 292500, median: 225000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 88000, max: 137500, median: 110000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 168300, max: 257400, median: 198000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 84000, max: 131250, median: 105000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 160650, max: 245700, median: 189000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 80000, max: 125000, median: 100000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 153000, max: 234000, median: 180000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 44000, max: 68750, median: 55000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 85000, max: 130000, median: 100000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 81600, max: 127500, median: 102000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 156400, max: 239200, median: 184000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 104000, max: 162500, median: 130000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 198900, max: 304200, median: 234000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 55200, max: 86250, median: 69000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 105400, max: 161200, median: 124000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 960000, max: 1500000, median: 1200000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1870000, max: 2860000, median: 2200000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 86400, max: 135000, median: 108000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 164900, max: 252200, median: 194000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 249600, max: 390000, median: 312000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 477700, max: 730600, median: 562000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "embedded-systems-engineer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 64000, max: 100000, median: 80000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 123250, max: 188500, median: 145000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 83200, max: 130000, median: 104000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 160650, max: 245700, median: 189000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 80000, max: 125000, median: 100000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 153850, max: 235300, median: 181000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 70400, max: 110000, median: 88000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 136000, max: 208000, median: 160000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 67200, max: 105000, median: 84000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 129200, max: 197600, median: 152000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 64000, max: 100000, median: 80000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 123250, max: 188500, median: 145000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 35200, max: 55000, median: 44000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 68000, max: 104000, median: 80000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 65600, max: 102500, median: 82000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 125800, max: 192400, median: 148000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 83200, max: 130000, median: 104000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 160650, max: 245700, median: 189000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 44000, max: 68750, median: 55000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 85000, max: 130000, median: 100000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 800000, max: 1250000, median: 1000000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1530000, max: 2340000, median: 1800000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 68800, max: 107500, median: 86000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 133450, max: 204100, median: 157000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 200000, max: 312500, median: 250000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 384200, max: 587600, median: 452000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "game-developer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 56000, max: 87500, median: 70000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 102000, max: 156000, median: 120000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 72800, max: 113750, median: 91000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 132600, max: 202800, median: 156000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 70400, max: 110000, median: 88000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 127500, max: 195000, median: 150000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 61600, max: 96250, median: 77000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 112200, max: 171600, median: 132000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 59200, max: 92500, median: 74000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 107100, max: 163800, median: 126000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 56000, max: 87500, median: 70000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 102000, max: 156000, median: 120000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 31200, max: 48750, median: 39000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 56100, max: 85800, median: 66000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 56800, max: 88750, median: 71000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 103700, max: 158600, median: 122000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 72800, max: 113750, median: 91000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 132600, max: 202800, median: 156000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 38400, max: 60000, median: 48000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 70550, max: 107900, median: 83000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 720000, max: 1125000, median: 900000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1275000, max: 1950000, median: 1500000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 60800, max: 95000, median: 76000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 110500, max: 169000, median: 130000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 174400, max: 272500, median: 218000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 317900, max: 486200, median: 374000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
  "qa-automation-engineer": {
    "USA": {
      notes: "National average shown unless a specific city is selected.",
      pppMultiplier: 1,
      base: {
        entry: { min: 60000, max: 93750, median: 75000, currency: "USD", symbol: "$", lastUpdated: "2025" },
        senior: { min: 110500, max: 169000, median: 130000, currency: "USD", symbol: "$", lastUpdated: "2025" }
      },
      cities: {
        "San Francisco": {
          entry: { min: 78400, max: 122500, median: 98000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 143650, max: 219700, median: 169000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "New York": {
          entry: { min: 75200, max: 117500, median: 94000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 138550, max: 211900, median: 163000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Austin": {
          entry: { min: 66400, max: 103750, median: 83000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 121550, max: 185900, median: 143000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Chicago": {
          entry: { min: 63200, max: 98750, median: 79000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 116450, max: 178100, median: 137000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        },
        "Remote": {
          entry: { min: 60000, max: 93750, median: 75000, currency: "USD", symbol: "$", lastUpdated: "2025" },
          senior: { min: 110500, max: 169000, median: 130000, currency: "USD", symbol: "$", lastUpdated: "2025" }
        }
      }
    },
    "UK": {
      notes: "London rates shown. Regional salaries are slightly lower.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 32800, max: 51250, median: 41000, currency: "GBP", symbol: "£", lastUpdated: "2025" },
        senior: { min: 61200, max: 93600, median: 72000, currency: "GBP", symbol: "£", lastUpdated: "2025" }
      }
    },
    "Canada": {
      notes: "Toronto/Vancouver averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 61600, max: 96250, median: 77000, currency: "CAD", symbol: "C$", lastUpdated: "2025" },
        senior: { min: 113050, max: 172900, median: 133000, currency: "CAD", symbol: "C$", lastUpdated: "2025" }
      }
    },
    "Australia": {
      notes: "Sydney/Melbourne averages.",
      pppMultiplier: 1.1,
      base: {
        entry: { min: 78400, max: 122500, median: 98000, currency: "AUD", symbol: "A$", lastUpdated: "2025" },
        senior: { min: 143650, max: 219700, median: 169000, currency: "AUD", symbol: "A$", lastUpdated: "2025" }
      }
    },
    "Germany": {
      notes: "Tax is heavy. Post-tax take-home is typically 40% lower.",
      pppMultiplier: 1.25,
      base: {
        entry: { min: 41600, max: 65000, median: 52000, currency: "EUR", symbol: "€", lastUpdated: "2025" },
        senior: { min: 76500, max: 117000, median: 90000, currency: "EUR", symbol: "€", lastUpdated: "2025" }
      }
    },
    "India": {
      notes: "Tier-1 Hubs (Bangalore, Pune).",
      pppMultiplier: 3.3,
      base: {
        entry: { min: 720000, max: 1125000, median: 900000, currency: "INR", symbol: "₹", lastUpdated: "2025" },
        senior: { min: 1360000, max: 2080000, median: 1600000, currency: "INR", symbol: "₹", lastUpdated: "2025" }
      }
    },
    "Singapore": {
      notes: "CPF contributions apply.",
      pppMultiplier: 1.15,
      base: {
        entry: { min: 64800, max: 101250, median: 81000, currency: "SGD", symbol: "S$", lastUpdated: "2025" },
        senior: { min: 119000, max: 182000, median: 140000, currency: "SGD", symbol: "S$", lastUpdated: "2025" }
      }
    },
    "UAE": {
      notes: "Tax-free adjusted rates (Dubai).",
      pppMultiplier: 1.2,
      base: {
        entry: { min: 187200, max: 292500, median: 234000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" },
        senior: { min: 345100, max: 527800, median: 406000, currency: "AED", symbol: "د.إ", lastUpdated: "2025" }
      }
    },
  },
};
