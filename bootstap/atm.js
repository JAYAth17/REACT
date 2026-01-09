let balance = 5000;

function atm() {
    let choice = prompt(
        "ATM Menu:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit"
    );

    switch (choice) {
        case "1":
            alert("Your balance is ₹" + balance);
            atm();
            break;

        case "2":
            let deposit = parseInt(prompt("Enter deposit amount:"));
            if (deposit > 0) {
                balance += deposit;
                alert("Deposited successfully!\nNew Balance: ₹" + balance);
            } else {
                alert("Invalid amount");
            }
            atm();
            break;

        case "3":
            let withdraw = parseInt(prompt("Enter withdrawal amount:"));
            if (withdraw > 0 && withdraw <= balance) {
                balance -= withdraw;
                alert("Please collect cash\nRemaining Balance: ₹" + balance);
            } else {
                alert("Insufficient balance or invalid amount");
            }
            atm();
            break;

        case "4":
            alert("Thank you for using ATM");
            break;

        default:
            alert("Invalid option");
            atm();
    }
}

atm();