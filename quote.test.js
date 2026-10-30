const test = require("node:test");
const assert = require("node:assert");
const { quote } = require("./quote.js");

test("quotes gold correctly", () => {
  assert.strictEqual(quote("gold", 2), "That's $1600");
});

test("refuses products we don't sell", () => {
  assert.strictEqual(quote("diamond", 1), "Sorry, we don't carry diamond.");
});

test("rejects a negative quantity", () => {
  assert.strictEqual(quote("gold", -1), "Please enter a valid quantity.");
});