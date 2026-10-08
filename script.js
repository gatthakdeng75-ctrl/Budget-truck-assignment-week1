// SpendWise JavaScript Foundation

// Application variables
let budget = 0;
let expenses = 0;
let remainingBalance = 0;

const appName = "SpendWise";

// Calculate remaining balance
function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}

// Display results
function displayResults() {
    console.log("================================");
    console.log(appName + " Budget Report");
    console.log("================================");

    console.log("Total Budget: $" + budget.toFixed(2));
    console.log("Total Expenses: $" + expenses.toFixed(2));
    console.log("Remaining Balance: $" + remainingBalance.toFixed(2));

    console.log("================================");

    if (remainingBalance > 0) {
        console.log("Status: You have money remaining.");
    } else if (remainingBalance === 0) {
        console.log("Status: Your budget has been fully used.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("================================");

    // Display results on the webpage
    document.getElementById("budgetDisplay").textContent =
        "$" + budget.toFixed(2);

    document.getElementById("expenseDisplay").textContent =
        "$" + expenses.toFixed(2);

    document.getElementById("balanceDisplay").textContent =
        "$" + remainingBalance.toFixed(2);
}

// Start the budget calculator
function startBudgetCalculator() {
    let budgetInput = prompt(
        "Enter your total monthly budget:"
    );

    budget = Number(budgetInput);

    let expenseInput = prompt(
        "Enter your total expenses:"
    );

    expenses = Number(expenseInput);

    // Check that the user entered numbers
    if (isNaN(budget) || isNaN(expenses)) {
        console.log("Error: Please enter valid numbers.");

        alert("Please enter valid numbers for your budget and expenses.");

        return;
    }

    // Calculate remaining balance
    remainingBalance = calculateRemainingBalance(
        budget,
        expenses
    );

    // Display results
    displayResults();
}

// Connect the button to the calculator
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startBudgetCalculator);

// Confirm JavaScript loaded
console.log("SpendWise JavaScript loaded successfully.");
console.log("Click the Start Budget Calculator button to begin.");