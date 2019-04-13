// Computes Mortgage Formula
function calculateMortgage() {
    let principal = document.getElementById('amount-text').value;
    let ratePercent = (document.getElementById('rate-text').value / 100);
    let rate = (ratePercent / 12);
    let years = document.getElementById('period-amount').value;
    let numOfPayments  = years * 12;
    
    // Checks for empty values
    if (principal == "" || rate == "") {
        alert("Please enter valid value in each text field");
    } else {
        let monthlyPayments = (principal) * ((rate)*(Math.pow((1 + rate), numOfPayments))) / ((Math.pow((1 + rate), numOfPayments)) - 1);
        let totalCost = monthlyPayments * numOfPayments
        document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
        document.getElementById('payments').textContent = `$${monthlyPayments.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
    
    }
}

// Add event listener for Calculate Button
document.getElementById('calc-btn').addEventListener('click', calculateMortgage);

