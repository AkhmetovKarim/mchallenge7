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

//Task 4

function calculateShippingCost(weight, location, expedited = false) { //write a function
    let cost = 0;
    if (location === "USA") { 
        cost = 5 + (0.5 * weight); //cost if location is U.S
    } else if (location === "Canada") {
        cost = 10 + (0.7 * weight); //cost if locaiton is Canada
    }
    if (expedited) {
        cost += 10;
    }
    return `Shipping Cost: $${cost.toFixed(2)}`;
}
console.log(calculateShippingCost(10, "USA", true));//logs
console.log(calculateShippingCost(5, "Canada", false));

//Task 5
function calculateLoanInterest(principal, rate, years) { //write a functio that returns total interes
    let interest = principal * rate * years; //formula
    return `Total Interest: $${interest.toFixed(2)}`;
}
console.log(calculateLoanInterest(1000, 0.05, 3)); //logs
console.log(calculateLoanInterest(5000, 0.07, 5));

//Task 6
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
let transactions = [500, 1200, 3000, 800, 2200];// declare an array
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); 

//Task 7
function createBudgetTracker() { //write a function that returns anothe function
    let balance = 0;
    return function (expense) {
        balance -= expense;
    console.log(`Current Balance: -$${Math.abs(balance)}`); //logs
};
}
let budget = createBudgetTracker();
budget(300);
budget(200);

//Task 8
function calculateGrowth(years, revenue) { //write a recursive function that projects reveue growth
    if (years >= 10) { //until year 10
        return revenue;
    }
    return calculateGrowth(years +1, revenue * 1.05); //each year increases by 5 percent
}
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`); //logs
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);