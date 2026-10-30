function quote(product, qty) {
      if (qty < 1) {
    return "Please enter a valid quantity.";
  }
  const prices = { gold: 800, silver: 400 };
         if (prices[product] === undefined) {
           return "Sorry, we don't carry " + product + ".";
     }
const price = prices[product];
  return "That's $" + price * qty;
    }

   module.exports = { quote };