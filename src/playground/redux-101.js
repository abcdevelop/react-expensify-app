import {createStore} from 'redux';

//Action generators - function that return action objects

const incrementCount = ({step = 1} = {}) => ({
    type: 'INCREMENT',
    step
});

const decrementCount = ({step = 1} = {}) => ({
    type: 'DECREMENT',
    step
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count }) => ({
    type: 'SET',
    count
});

// Reducers

const countReducer=(state = {count: 0}, action) => {
    console.log('running', action)
    switch (action.type) {
        case 'SET':
            return {
                count: action.count
            };
        case 'INCREMENT':
            return {
                count: state.count + action.step
            };
        case 'DECREMENT':
            return {
                count: state.count - action.step
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);


const subscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(incrementCount({step: 5}));
store.dispatch(incrementCount({step: 1000}));

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({step: 10}));

store.dispatch(setCount({count: 100}));
