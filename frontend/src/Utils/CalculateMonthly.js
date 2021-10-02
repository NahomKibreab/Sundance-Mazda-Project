// Function for calculating monthly payments

function calculateMonthly(amount, rate, term) {
  const intrate = rate / 100 / 12;
  const months = term * 12;

  if (intrate === 0) {
    return amount / months;
  }

  const x = Math.pow(1 + intrate, months);
  const monthly = (amount * x * intrate) / (x - 1);

  return Math.round(monthly * 100) / 100;
}

export default calculateMonthly;
