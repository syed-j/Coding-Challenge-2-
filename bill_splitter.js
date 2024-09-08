// Coding Challenge 2

const bill = 300;
const tip = bill >= 100 ? 50 : 20;
const total = bill + tip;

console.log(`The tip is $${tip}`);
console.log(`The total value of the bill including the tip is $${total}`);

function calculateTip(bills) {
    return bills >= 100 ? 50 : 20;
}

const bills = 100;
const tips = calculateTip(bills);

console.log(`The tip for a bill of $${bills} is $${tips}`);