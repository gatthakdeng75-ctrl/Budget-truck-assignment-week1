# SpendWise Budget Tracker

## Project Description

SpendWise is a personal budget and expense tracking application.

This week, the project was improved by adding JavaScript interactivity. Users can now set a budget, add multiple expenses, view expense records, and see their remaining balance updated automatically.

The application uses JavaScript to make decisions, store multiple records, process data, update the webpage, and respond to user actions.

---

## Improvements Made This Week

The following improvements were made to SpendWise:

- Added an interactive budget form.
- Added an interactive expense form.
- Added an expense array.
- Added loops to process expense records.
- Added conditional statements.
- Added dynamic DOM manipulation.
- Added event listeners.
- Added automatic budget calculations.
- Added budget status messages.
- Added dynamic expense records to the dashboard.
- Added input validation.

---

## Conditional Statements

Conditional statements are used to evaluate the user's budget situation.

For example:

```javascript
if (budget === 0) {
    budgetMessage.textContent = "Please set your budget.";
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