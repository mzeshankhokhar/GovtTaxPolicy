```js
// FinCalc Pro — Default Government Policy Data
// Updated for latest commonly applicable FY 2025-26 / 2026 tax structures
// Verify periodically from official tax authorities before production deployment.

export const DEFAULT_POLICIES = {
  version: '2025-26',
  updatedAt: '2026-05-31',
  source: 'bundled',

  countries: {
    PK: {
      name: 'Pakistan',
      fy: 'FY 2025-26',
      personalAllowance: 0,
      cess: 1,
      slabs: [
        { from: 0,       upTo: 600000,  rate: 0.00, fixedTax: 0 },
        { from: 600000,  upTo: 1200000, rate: 0.01, fixedTax: 0 },
        { from: 1200000, upTo: 2200000, rate: 0.11, fixedTax: 6000 },
        { from: 2200000, upTo: 3200000, rate: 0.23, fixedTax: 116000 },
        { from: 3200000, upTo: 4100000, rate: 0.30, fixedTax: 346000 },
        { from: 4100000, upTo: null,    rate: 0.35, fixedTax: 616000 },
      ],
    },

    IN: {
      name: 'India',
      fy: 'FY 2025-26 (New Regime)',
      personalAllowance: 0,
      cess: 1.04, // 4% Health & Education Cess
      slabs: [
        { from: 0,        upTo: 400000,  rate: 0.00, fixedTax: 0 },
        { from: 400000,   upTo: 800000,  rate: 0.05, fixedTax: 0 },
        { from: 800000,   upTo: 1200000, rate: 0.10, fixedTax: 20000 },
        { from: 1200000,  upTo: 1600000, rate: 0.15, fixedTax: 60000 },
        { from: 1600000,  upTo: 2000000, rate: 0.20, fixedTax: 120000 },
        { from: 2000000,  upTo: 2400000, rate: 0.25, fixedTax: 200000 },
        { from: 2400000,  upTo: null,    rate: 0.30, fixedTax: 300000 },
      ],
    },

    AE: {
      name: 'United Arab Emirates',
      fy: '2025',
      personalAllowance: 0,
      cess: 1,
      slabs: [
        { from: 0, upTo: null, rate: 0.00, fixedTax: 0 },
      ],
    },

    US: {
      name: 'United States',
      fy: 'FY 2025 (Single Filer)',
      personalAllowance: 0,
      cess: 1,
      slabs: [
        { from: 0,       upTo: 11925,   rate: 0.10, fixedTax: 0 },
        { from: 11925,   upTo: 48475,   rate: 0.12, fixedTax: 1192.5 },
        { from: 48475,   upTo: 103350,  rate: 0.22, fixedTax: 5578.5 },
        { from: 103350,  upTo: 197300,  rate: 0.24, fixedTax: 17651.0 },
        { from: 197300,  upTo: 250525,  rate: 0.32, fixedTax: 40199.0 },
        { from: 250525,  upTo: 626350,  rate: 0.35, fixedTax: 57231.0 },
        { from: 626350,  upTo: null,    rate: 0.37, fixedTax: 188769.75 },
      ],
    },

    GB: {
      name: 'United Kingdom',
      fy: 'FY 2025-26',
      personalAllowance: 12570,
      cess: 1,
      slabs: [
        { from: 0,      upTo: 37700,  rate: 0.20, fixedTax: 0 },
        { from: 37700,  upTo: 125140, rate: 0.40, fixedTax: 7540 },
        { from: 125140, upTo: null,   rate: 0.45, fixedTax: 42516 },
      ],
    },
  },

  loanEligibility: {
    foirRatio: 0.50, // 50% FOIR
  },
};
```
