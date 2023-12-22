it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 10000,
    years: 5,
    rate: 2,
  };
  expect(calculateMonthlyPayment(values)).toEqual("175.28");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 10003,
    years: 5,
    rate: 1,
  };
  expect(calculateMonthlyPayment(values)).toEqual("170.99");
});
