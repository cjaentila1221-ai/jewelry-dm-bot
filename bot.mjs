import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const products = {
  "gold ring": 800,
  "silver ring": 400,
  "gold necklace": 1200,
};

const systemPrompt = `You are a friendly sales assistant for a custom jewelry shop on Instagram.

Products and prices in USD:
${JSON.stringify(products)}

Rules:
- Only quote prices from the list above. Never guess a price.
- If someone asks about an item not on the list, say we don't carry it and suggest something we do have.
- Keep replies short and warm, like an Instagram DM.
- Only mention details that are in the product list. Don't promise custom work, discounts, shipping times, or anything else that isn't listed.`;

const testMessages = [
  "Hi! How much is a platinum ring?",
  "How much for 2 gold rings?",
  "Do you have diamond earrings?",
];

for (const customerMessage of testMessages) {
  const message = await client.messages.create({
    model: "claude-haiku-5-5",
    max_tokens: 300,
    system: systemPrompt,
    messages: [{ role: "user", content: customerMessage }],
  });

  console.log("Customer:", customerMessage);
  console.log("Bot:", message.content[0].text);
  console.log("---");
}