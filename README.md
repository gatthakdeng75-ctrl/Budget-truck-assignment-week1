````markdown
# SpendWise Budget Tracker

## Week 4 Assignment — CSS Grid & Flexbox

SpendWise is a modern Personal Budget & Expense Tracker dashboard.

This project continues the Budget Tracker developed during Weeks 1, 2, and 3.

Week 4 focuses on rebuilding the visual layout using modern CSS Grid and Flexbox techniques.

## Files

### index.html

The HTML file contains the structure of the SpendWise dashboard.

It includes:

- Sidebar navigation
- Dashboard header
- User profile area
- Financial summary cards
- Six expense category cards
- Recent transactions
- Footer

### style.css

The CSS file controls the complete visual layout and responsive design.

It includes:

- CSS Grid
- Flexbox
- CSS custom properties
- Responsive media queries
- Card micro-interactions
- Hover effects
- Keyboard focus effects
- Dark theme support
- Google Fonts
- Responsive dashboard layout

## Dashboard Layout

The dashboard contains:

1. Sidebar Navigation
2. Dashboard Header
3. Financial Summary
4. Food Card
5. Transport Card
6. Rent Card
7. Entertainment Card
8. Savings Card
9. Utilities Card
10. Recent Transactions

## CSS Grid

CSS Grid is used for the main dashboard layout.

The desktop layout uses two columns:

- Sidebar
- Main content

CSS Grid is also used to arrange the six category cards into a three-column layout.

On smaller screens, the dashboard changes to a single-column layout.

## Flexbox

Flexbox is used for:

- Sidebar navigation
- Logo area
- Dashboard header
- Profile section
- Category card content
- Transaction rows
- Buttons and other interface elements

## CSS Custom Properties

The application uses CSS variables defined in `:root`.

Examples include:

- `--brand-color`
- `--accent-color`
- `--surface-color`
- `--background-color`
- `--primary-text`
- `--secondary-text`

These variables create a consistent theme throughout the application.

## Responsive Design

A media query is used below 768px.

The desktop two-column dashboard changes into a single-column layout on smaller screens.

The category cards also change from three columns to one column.

The layout was designed to work on desktop, tablet, and mobile screen sizes.

## Card Micro-interactions

The category cards include subtle hover and focus animations.

When a user hovers over or focuses on a card:

- The card moves slightly upward.
- The shadow becomes stronger.

The animation lasts 200ms and uses CSS `transform` and `box-shadow`.

## Dark Theme

The project includes a dark theme using:

```css
@media (prefers-color-scheme: dark)
````

The dark theme overrides the CSS custom properties defined in `:root`.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts
* Responsive Web Design

## Author

Gatthak Deng

```
```
