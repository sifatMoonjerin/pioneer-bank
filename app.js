document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});

document.getElementById("deposit-btn").addEventListener("click", () => {
  var amount = parseFloat(document.getElementById("deposit-input").value);
  document.getElementById("deposit-input").value = "";
  if (amount != NaN && amount > 0) {
    transactionUpdate(amount, "deposit-amount");
    transactionUpdate(amount, "balance-amount");
  } else {
    alert("Invalid Input");
  }
});

document.getElementById("withdraw-btn").addEventListener("click", () => {
  var amount = parseFloat(document.getElementById("withdraw-input").value);
  document.getElementById("withdraw-input").value = "";
  if (
    amount > parseFloat(document.getElementById("balance-amount").innerText)
  ) {
    alert("We don't loan!!!");
  } else if (amount != NaN && amount > 0) {
    transactionUpdate(amount, "withdraw-amount");
    transactionUpdate(-1 * amount, "balance-amount");
  } else {
    alert("Invalid Input");
  }
});

function transactionUpdate(newAmount, targetId) {
  document.getElementById(targetId).innerText =
    parseFloat(document.getElementById(targetId).innerText) + newAmount;
}
