# Jewelry DM Bot

A small Instagram-style sales bot for a jewelry shop, built with Node.js and the Claude API.

## What it does
- Answers customer questions using a set product list and prices
- Says so when an item isn't sold, instead of guessing a price, and suggests what is available
- Follows written rules so it doesn't promise things the shop doesn't offer

## Bugs I found and fixed
- **Wrong price for products not on the list.** The original `quote()` fell back to the gold price, so a platinum ring was quoted at $800. It now returns a "we don't carry that" message.
- **Hard-coded product name.** The fix always said "platinum," even when the customer asked about diamond. It now uses the real product name.
- **Negative quantities.** Ordering -1 ring returned "That's $-800." I wrote a failing test first, then added a check so the test passes.
- **Invented details.** During testing, the bot told a customer the rings "can be custom made," which wasn't in the product info. I added a rule to the system prompt so it only mentions listed details.

## Run it
1. `npm install`
2. Create a `.env` file with `ANTHROPIC_API_KEY=your-key`
3. `node --env-file=.env bot.mjs`

## Tests
`node --test`