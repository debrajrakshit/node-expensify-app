const selectExpensesTotal = (expenses) => {
    // collect amounts from expenses
    const expensesValues = expenses.map((expense) => expense.amount);
    // sum up
    const getExpenseTotal = (accumulator, currentValue) => accumulator + currentValue;
    // return sum
    return expenses.length > 0 ? expensesValues.reduce(getExpenseTotal) : 0;
};

export default selectExpensesTotal;