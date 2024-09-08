// Coding Challenge 2

// Step 1 
const bill = 300;
const tip = bill >= 100 ? 50 : 20;
const total = bill + tip;

// Step 2
console.log(`The tip is $${tip}`);
console.log(`The total value of the bill including the tip is $${total}`);

//Step 3
function calculateTip(bills) {
    return bills >= 100 ? 50 : 20;
}

const bills = 100;
const Tips = calculateTip(bills);

console.log(`The tip for a bill of $${bills} is $${Tips}`);

// Step 4
const Bill = [275, 40, 430, 125, 555, 44];
const tips = Bill.map(calculateTip);

const totals = Bill.map((Bill, index) => Bill + tips[index]);

console.log('Bill:', Bill);
console.log('tips:', tips);
console.log('totals:', totals);