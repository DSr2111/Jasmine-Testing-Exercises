const form = document.getElementById("calc-form");

if (form) {
  setupInitialValues();
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // if (
    //   isNaN(parseFloat(values.amount)) ||
    //   isNaN(parseFloat(values.years)) ||
    //   isNaN(parseFloat(values.rate))
    // ) {
    //   alert("Invalid input! Only use numbers");
    //   throw new Error("Invalid input! Only use numbers");
    // }
    update();

    // amountCalc.value = "";
    // yearsCalc.value = ""; //clearing up form for new loan
    // loanCalc.value = "";
  });
}

function getCurrentValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function setupInitialValues() {
  const values = { amount: 10000, years: 5, rate: 2 };
  const amountCalc = document.getElementById("loan-amount");
  amountCalc.value = values.amount;
  const yearsCalc = document.getElementById("loan-years");
  yearsCalc.value = values.years;
  const rateCalc = document.getElementById("loan-rate");
  rateCalc.value = values.rate;
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
  return (
    (principle * interest) /
    (1 - Math.pow(1 + interest, -totalPayments)).toFixed(2) //rounding to two decimal points
  );
}

function updateMonthly(monthly) {
  const monthlyCalc = document.getElementById("monthly-payment");
  monthlyCalc.innerText = `$${monthly} per month!`;
}
