const form = document.getElementById("calc-form");

function setupInitialValues() {
  const values = { amount: 10000, years: 5, rate: 2 };
  const amountCalc = document.getElementById("loan-amount");
  amountCalc = amount.value;
  const yearsCalc = document.getElementById("loan-years");
  yearsCalc = years.value;
  const rateCalc = document.getElementById("loan-rate");
  rateCalc = values.rate;
}

function getCurrentValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function update() {
  const currentValues = getCurrentValues();
  updateMonthly(calculateLoan(currentValues));
}

function calculateLoan(values) {
  let principle = values.amount;
  let years = values.years;
  let rate = values.rate;
  let interest = rate / 100 / 12; // need to make interest a decimal, then make it monthly
  let totalPayments = years * 12;
  let monthlyPayment =
    (principle * interest) /
    (1 - Math.pow(1 + interest, -totalPayments)).toFixed(2); //rounding to two decimal points

  amountCalc.value = "";
  yearsCalc.value = ""; //clearing up form for new loan
  loanCalc.value = "";
}

function updateMonthly(monthly) {
  const monthly = document.getElementById("monthly-payment");
  monthly.innerText = `$${monthly} per month!`;
}

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
