"use strict"

// window.onload = init;

// function init() {
//     let submitButton = document.getElementById("calculate");
//     submitButton.onclick = selectDayOfWeek;
// }

document.getElementById('calculate').addEventListener('click',function(){
    const loanAmount = parseFloat(document.getElementById('loan-Amount').value); 
    const interestRate = parseFloat(document.getElementById('interest-Rate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;

    const monthlyPayments = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    if(!isNaN(monthlyPayments)) {
        document.getElementById('result').textContent = 'Monthly Mortgage Payment: $' + monthlyPayments.toFixed(2);
    }
    else {
        document.getElementById('result').textContent = 'Please enter valid input';
    }

});