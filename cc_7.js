//Task 7 
function calculateInvoice(subtotal, taxRate, discount) { //write a function that calc final invoice
    let taxAmount = subtotal * taxRate; //find taxAAmount
    let total = (subtotal + taxAmount) - discount; //find total invoice
    return `Final Invoice: $${total.toFixed(2)}`; //output to two decimals and return
}
console.log(calculateInvoice(100, 0.08, 5)); //logs
console.log(calculateInvoice(500, 0.1, 20));