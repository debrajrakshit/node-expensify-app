import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


// class ExpensesSummary extends React.Component {
//     state = {
//         expenses: selectExpenses()
//     };

//     render() {
//         return 
//     };
// };

export const ExpensesSummary = (props) => {
    const expensesCount = props.expenses.length;
    const expensesTotal = numeral((selectExpensesTotal(props.expenses)) / 100).format('$0,0.00');
    
    return (
        <div>
            <p>Viewing <span className='total-num'>{expensesCount}</span> {expensesCount > 1 ? 'expenses' : 'expense'} totalling {expensesTotal}</p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);