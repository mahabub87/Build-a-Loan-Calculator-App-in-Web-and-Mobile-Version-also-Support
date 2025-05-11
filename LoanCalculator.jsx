import React, { useState } from 'react';

function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [term, setTerm] = useState(5);

  const monthlyRate = rate / 100 / 12;
  const numPayments = term * 12;
  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - amount;

  return (
    <div className="card-glass w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Loan Calculator</h2>
      <div className="mb-4">
        <label className="block mb-1">Loan Amount (${amount})</label>
        <input type="range" min="1000" max="100000" step="500" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Interest Rate ({rate}%)</label>
        <input type="range" min="1" max="15" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Loan Term ({term} years)</label>
        <input type="range" min="1" max="30" step="1" value={term} onChange={e => setTerm(Number(e.target.value))} />
      </div>
      <div className="mt-6 bg-white bg-opacity-80 p-4 rounded-lg shadow">
        <p><strong>Monthly Payment:</strong> ${monthlyPayment.toFixed(2)}</p>
        <p><strong>Total Interest:</strong> ${totalInterest.toFixed(2)}</p>
        <p><strong>Total Payment:</strong> ${totalPayment.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default LoanCalculator;