// ========================================
// SpendWise Interactive JavaScript
// ========================================


// ========================================
// 1. APPLICATION DATA
// ========================================

// Store the user's budget.

let budget = 0;


// Store multiple expenses in an array.

let expenses = [];


// ========================================
// 2. GET HTML ELEMENTS
// ========================================

// Budget elements

const budgetDisplay =
    document.getElementById("budgetDisplay");

const expenseDisplay =
    document.getElementById("expenseDisplay");

const balanceDisplay =
    document.getElementById("balanceDisplay");

const budgetMessage =
    document.getElementById("budgetMessage");


// Forms

const budgetForm =
    document.getElementById("budgetForm");

const expenseForm =
    document.getElementById("expenseForm");


// Input fields

const budgetInput =
    document.getElementById("budgetInput");

const expenseName =
    document.getElementById("expenseName");

const expenseAmount =
    document.getElementById("expenseAmount");


// Expense list

const expenseList =
    document.getElementById("expenseList");


// ========================================
// 3. CALCULATE TOTAL EXPENSES
// ========================================

function calculateTotalExpenses() {

    let total = 0;


    // Loop through every expense in the array.

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;
    }


    return total;
}


// ========================================
// 4. CALCULATE REMAINING BALANCE
// ========================================

function calculateRemainingBalance() {

    const totalExpenses =
        calculateTotalExpenses();

    return budget - totalExpenses;
}


// ========================================
// 5. UPDATE DASHBOARD
// ========================================

function updateDashboard() {

    const totalExpenses =
        calculateTotalExpenses();

    const remainingBalance =
        calculateRemainingBalance();


    // Update budget

    budgetDisplay.textContent =
        "$" + budget.toFixed(2);


    // Update expenses

    expenseDisplay.textContent =
        "$" + totalExpenses.toFixed(2);


    // Update remaining balance

    balanceDisplay.textContent =
        "$" + remainingBalance.toFixed(2);


    // ====================================
    // Conditional Statements
    // ====================================

    if (budget === 0) {

        budgetMessage.textContent =
            "Please set your budget.";

    } else if (remainingBalance > 0) {

        budgetMessage.textContent =
            "Good job! You still have money available.";

    } else if (remainingBalance === 0) {

        budgetMessage.textContent =
            "Your budget has been fully used.";

    } else {

        budgetMessage.textContent =
            "Warning: You have exceeded your budget!";
    }


    // Display the expense records.

    displayExpenses();
}


// ========================================
// 6. DISPLAY EXPENSES
// ========================================

function displayExpenses() {

    // Clear the current list.

    expenseList.innerHTML = "";


    // Check if there are no expenses.

    if (expenses.length === 0) {

        expenseList.innerHTML =
            '<p class="empty-message">No expenses added yet.</p>';

        return;
    }


    // Loop through the expenses array.

    for (let i = 0; i < expenses.length; i++) {

        const expense =
            expenses[i];


        // Create a new HTML element.

        const expenseItem =
            document.createElement("div");


        expenseItem.classList.add("expense-item");


        // Add expense information.

        expenseItem.innerHTML = `
            <div>
                <strong>${expense.name}</strong>
                <small>Expense #${i + 1}</small>
            </div>

            <span>
                $${expense.amount.toFixed(2)}
            </span>
        `;


        // Add the expense to the webpage.

        expenseList.appendChild(expenseItem);
    }
}


// ========================================
// 7. HANDLE BUDGET FORM
// ========================================

budgetForm.addEventListener(
    "submit",
    function(event) {

        // Prevent the page from refreshing.

        event.preventDefault();


        // Convert input into a number.

        const enteredBudget =
            Number(budgetInput.value);


        // Validate the budget.

        if (
            enteredBudget <= 0 ||
            isNaN(enteredBudget)
        ) {

            alert(
                "Please enter a valid budget greater than zero."
            );

            return;
        }


        // Store the budget.

        budget = enteredBudget;


        // Update the dashboard.

        updateDashboard();


        // Clear the input.

        budgetInput.value = "";


        console.log(
            "Budget updated to: $" +
            budget.toFixed(2)
        );
    }
);


// ========================================
// 8. HANDLE EXPENSE FORM
// ========================================

expenseForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh.

        event.preventDefault();


        // Get user input.

        const name =
            expenseName.value.trim();

        const amount =
            Number(expenseAmount.value);


        // Validate expense information.

        if (name === "") {

            alert(
                "Please enter an expense name."
            );

            return;
        }


        if (
            amount <= 0 ||
            isNaN(amount)
        ) {

            alert(
                "Please enter a valid expense amount."
            );

            return;
        }


        // Create an expense object.

        const newExpense = {

            name: name,

            amount: amount
        };


        // Add the expense to the array.

        expenses.push(newExpense);


        // Update the dashboard.

        updateDashboard();


        // Clear the form.

        expenseName.value = "";

        expenseAmount.value = "";


        console.log(
            "New expense added:",
            newExpense
        );
    }
);


// ========================================
// 9. INITIAL DASHBOARD
// ========================================

updateDashboard();


console.log(
    "SpendWise interactive JavaScript loaded successfully."
);