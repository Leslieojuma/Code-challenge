function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015; // 1.5%
  const minFee = 10;           // Minimum fee in KES
  const maxFee = 70;           // Maximum fee in KES

  // Calculate raw fee
  let calculatedFee = amountToSend * feePercentage;

  // Apply fee limits
  let transactionFee = Math.min(Math.max(calculatedFee, minFee), maxFee);

  // Calculate total debited
  let totalDebited = amountToSend + transactionFee;

  // Print results
  console.log(`Amount to send: KES ${amountToSend}`);
  console.log(`Transaction fee: KES ${transactionFee.toFixed(2)}`);
  console.log(`Total debited: KES ${totalDebited.toFixed(2)}`);
}

// Prompt the user
let input = prompt("Enter the amount you want to send (in KES):");
let amount = parseFloat(input);

// Validate input
if (amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Please enter a valid positive number.");
}
