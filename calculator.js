window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    // setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // update();
      setupIntialValues();
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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let principle = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;
  let monthlyPayment = (principle * rate) / 12 / (1 - Math.pow(1 + rate / 12));

  console.log(principle, years, rate);
  console.log(monthlyPayment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
