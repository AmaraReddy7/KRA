console.log("Payment Initiated");
setTimeout(() => {
  console.log("Payment is finished with in two seconds");
}, 2000);

Promise.resolve().then(() => console.log("Your payment done"));

console.log("payment status is done");
