import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {

    const newExpense = {
        id: '4',
        description: 'New Expense',
        note: '',
        amount: 1000,
        createdAt: moment().valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2], newExpense ]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'New Description'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('New Description');
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'New Description'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});