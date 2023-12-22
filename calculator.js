const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");

function calculateLoan() {
  let finalAmount = document.getElementById("monthly-payment");
  let principle = parseFloat(loanAmount.value);
  let years = parseFloat(loanYears.value);
  let rate = parseFloat(loanRate.value);
  let interest = rate / 100 / 12; // need to make interest a decimal, then make it monthly
  let totalPayments = years * 12;
  let monthlyPayment =
    (principle * interest) / (1 - Math.pow(1 + interest, -totalPayments));
  let roundedAmount = monthlyPayment.toFixed(2); //rounding to two decimal points

  console.log(monthlyPayment);

  finalAmount.innerText = `$${roundedAmount} per month!`; //final amount displayed in text
  loanAmount.innerText = "";
  loanYears.innerText = "";
  loanRate.innerText = "";
}

const form = document.getElementById("calc-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
      isNaN(parseFloat(loanAmount.value)) ||
      isNaN(parseFloat(loanYears.value)) ||
      isNaN(parseFloat(loanRate.value))
    ) {
      alert("Invalid input! Only use numbers");
      throw new Error("Invalid input! Only use numbers");
    }
    calculateLoan();
  });
}
