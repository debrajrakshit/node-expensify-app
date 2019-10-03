import uuid from 'uuid';

// ADD_EXPENSE
// desctructure the first argument
// if doesn't exist destructure an empty object - lecture 93 (section 10)
// define all of the stuffs want to grab -  define as empty string or as per object
export const addExpense = (
    { 
        description = '',
        note = '',
        amount= 0,
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

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

