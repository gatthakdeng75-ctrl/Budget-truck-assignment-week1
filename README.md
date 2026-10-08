````markdown
# SpendWise Budget Tracker

## Project Description

SpendWise is a personal budget and expense tracking application.

The project helps users enter their monthly budget and total expenses and then calculates the amount of money remaining.

This project is being developed progressively using HTML, CSS, and JavaScript.

## Files

The project contains the following files:

- `index.html` - Provides the structure of the SpendWise application.
- `style.css` - Provides the visual styling and dashboard layout.
- `script.js` - Adds JavaScript functionality, user input, calculations, and functions.
- `README.md` - Explains the project and the JavaScript concepts used.

## JavaScript Concepts Implemented

The JavaScript foundation of SpendWise demonstrates:

- Variables
- Constants
- Strings
- Numbers
- User input
- Number conversion
- Functions
- Function parameters
- Return values
- Conditional statements
- Calculations
- Console output
- DOM manipulation
- Event listeners

## Variables

Variables are used to store important budgeting information.

For example:

```javascript
let budget = 0;
let expenses = 0;
let remainingBalance = 0;
````

The `budget` variable stores the user's total budget.

The `expenses` variable stores the user's total expenses.

The `remainingBalance` variable stores the result of the budget calculation.

A constant is also used to store the application name:

```javascript
const appName = "SpendWise";
```

## User Input

SpendWise collects information from the user using JavaScript's `prompt()` function.

For example:

```javascript
let budgetInput = prompt(
    "Enter your total monthly budget:"
);
```

The user's input is initially returned as text.

The `Number()` function converts the input into a number so that calculations can be performed.

```javascript
budget = Number(budgetInput);
```

The same process is used to collect the user's expenses.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting expenses from the budget.

The calculation is placed inside a reusable function:

```javascript
function calculateRemainingBalance(
    budgetAmount,
    expenseAmount
) {
    return budgetAmount - expenseAmount;
}
```

The function receives the budget and expenses as parameters and returns the remaining balance.

## Functions

Functions help organize the JavaScript code into reusable sections.

SpendWise uses functions including:

```javascript
calculateRemainingBalance()
```

This function calculates the remaining budget.

```javascript
displayResults()
```

This function displays the calculated information in the browser console and on the webpage.

```javascript
startBudgetCalculator()
```

This function collects user input, validates the information, performs the calculation, and displays the results.

Using functions makes the application easier to understand, maintain, and expand.

## Console Output

The application displays clearly labeled results in the browser console.

Example:

```text
================================
SpendWise Budget Report
================================
Total Budget: $1000.00
Total Expenses: $650.00
Remaining Balance: $350.00
================================
Status: You have money remaining.
================================
```

## How to Run the Project

1. Open the SpendWise folder in VS Code.
2. Make sure all four files are present.
3. Open `index.html` in a web browser.
4. Open the browser Developer Tools.
5. Select the Console tab.
6. Click the **Start Budget Calculator** button.
7. Enter your budget when prompted.
8. Enter your expenses when prompted.
9. Check the calculated results on the webpage and in the console.

## Testing

Example test:

```text
Budget: 1000
Expenses: 650
Remaining Balance: 350
```

Expected result:

```text
Total Budget: $1000.00
Total Expenses: $650.00
Remaining Balance: $350.00
```

Another test:

```text
Budget: 500
Expenses: 500
Remaining Balance: 0
```

Expected status:

```text
Your budget has been fully used.
```

If expenses are greater than the budget:

```text
Budget: 500
Expenses: 650
Remaining Balance: -150
```

Expected status:

```text
You have exceeded your budget.
```

## Author

Gatthak Deng

```
```
