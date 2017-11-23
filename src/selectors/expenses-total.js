export const getExpensesTotal = (expenses) => expenses
    .reduce((sum, {amount}) => sum + amount, 0);
//{
    // if (expenses.length === 0) {
    //     return 0;
    // } else {
    // const amounts = expenses.map((expense) => expense.amount);
    // return amounts.reduce((sum, amount) => sum + amount, 0);
    //
    // return expenses
    //     .map((expense) => expense.amount)
    //     .reduce((sum, amount) =>  sum + amount,0);
    //
    //return expenses.reduce((sum, {amount}) => sum + amount, 0);
    // }
//};