import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
// desctructure the first argument
// if doesn't exist destructure an empty object - lecture 93 (section 10)
// define all of the stuffs want to grab -  define as empty string or as per object
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount= 0,
            createdAt = 0 
        } = expenseData;

        const expense = {
            description,
            note,
            amount,
            createdAt
        };

        return database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

