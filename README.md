# Storecraft

Storecraft is a practical learning workspace for people building independent online stores. It focuses on Shopify setup, product research, responsible dropshipping operations, unit economics, and marketing experiments.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Included

- Seller workspace dashboard with local learning, checklist, and product metrics.
- Original commerce academy courses with step-by-step lessons and browser-local completion.
- Product Lab with saved ideas and a contribution-per-order calculator.
- Store launch checklist with locally saved progress.
- Commerce coach with transparent, rules-based educational guidance using workspace data.
- Marketing brief builder for original creative angles and bounded tests.
- Responsive operator-oriented layout and generated social metadata.

## Integrations and limits

The Shopify button is a placeholder; no store API or credentials are connected. The coach is a local rules-based guide, not a hosted AI model. Product data, course progress, campaign briefs, and checklist state are stored in this browser only. This is an educational tool, not legal, tax, or financial advice. Sellers should verify platform policies, supplier terms, product claims, consumer rules, and tax requirements for their markets.

## Checks

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

## Routes

- `/` workspace overview
- `/academy` and `/academy/[slug]` course catalog and lessons
- `/coach` commerce learning coach
- `/product-lab` product notes and unit economics
- `/store-launch` launch checklist
- `/marketing` campaign brief builder
