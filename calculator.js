window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      calculateLoan();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function calculateLoan() {
  let finalAmount = document.getElementById("monthly-payment");
  let principle = parseFloat(document.getElementById("loan-amount").value);
  let years = parseFloat(document.getElementById("loan-years").value);
  let rate = parseFloat(document.getElementById("loan-rate").value);
  let interest = rate / 100 / 12; // need to make interest a decimal, then make it monthly
  let totalPayments = years * 12;

  let monthlyPayment =
    (principle * interest) / (1 - Math.pow(1 + interest, -totalPayments));

  console.log(monthlyPayment);

  monthlyPayment.toFixed(2); //rounding to two decimal points

  finalAmount.innerText = `$${monthlyPayment} per month!`; //final amount displayed in text
}
