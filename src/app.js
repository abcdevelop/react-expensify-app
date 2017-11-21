import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });
//
// store.dispatch(addExpense({description: 'Water bill', amount: 500, createdAt: 2000}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 40000, createdAt: 3000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 1000}));


// store.dispatch(setTextFilter('water'));
//
// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000);

// const expenseOther = store.dispatch(addExpense({description: 'The', amount: 500, createdAt:10}));
// const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt:1000}));
// const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt:-1000}));
//
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500} ));
//
// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);
ReactDOM.render(jsx, document.getElementById('app'));

