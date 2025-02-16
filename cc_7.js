//Task 7 
function calculateInvoice(subtotal, taxRate, discount) { //write a function that calc final invoice
    let taxAmount = subtotal * taxRate; //find taxAAmount
    let total = (subtotal + taxAmount) - discount; //find total invoice
    return `Final Invoice: $${total.toFixed(2)}`; //output to two decimals and return
}
console.log(calculateInvoice(100, 0.08, 5)); //logs
console.log(calculateInvoice(500, 0.1, 20));

//Tssk 8
let calculateHourlyWage = function(salary, hoursPerWeek) { //declare a function
return `Hourly Wage: $${(salary / (hoursPerWeek * 52)).toFixed(2)}`;
};
    
console.log(calculateHourlyWage(52000, 40)); //logs
console.log(calculateHourlyWage(75000, 35));