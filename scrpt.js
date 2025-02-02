document.addEventListener("DOMContentLoaded", () => {
    const currencies = ["USD", "EUR", "GBP", "INR", "JPY"];
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");

    currencies.forEach(currency => {
        fromCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
        toCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
    });
});

function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from-currency").value;
    let to = document.getElementById("to-currency").value;
    let rate = Math.random() * (1.5 - 0.5) + 0.5; // Mock exchange rate

    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let convertedAmount = (amount * rate).toFixed(2);
    document.getElementById("result").innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
}
