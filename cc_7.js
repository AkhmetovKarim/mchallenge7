//Task 1
function calculateInvoice(subtotal, taxRate, discount) { //write a function that calc final invoice
    let taxAmount = subtotal * taxRate; //find taxAAmount
    let total = (subtotal + taxAmount) - discount; //find total invoice
    return `Final Invoice: $${total.toFixed(2)}`; //output to two decimals and return
}
console.log(calculateInvoice(100, 0.08, 5)); //logs
console.log(calculateInvoice(500, 0.1, 20));

//Task 2
let calculateHourlyWage = function(salary, hoursPerWeek) { //declare a function
return `Hourly Wage: $${(salary / (hoursPerWeek * 52)).toFixed(2)}`;
};
    
console.log(calculateHourlyWage(52000, 40)); //logs
console.log(calculateHourlyWage(75000, 35));

//Task 3

const calculateLoyaltyDiscount = (amount, years) => { //write an arrow function that applies discount
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};
console.log(calculateLoyaltyDiscount(100, 6)); //logs, text cases
console.log(calculateLoyaltyDiscount(200, 2));