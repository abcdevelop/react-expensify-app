// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    //console.log('running', action);
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => (id !== action.id));
        case 'EDIT_EXPENSE':
            //return {  ...state.filter(({id}) => (id === action.id)),
            //          ...action.updates
            //}
            return state.map((expense)=>{
                    if(expense.id===action.id){
                        return {
                            ...expense,
                            ...action.updates
                        }
                    }else{
                        return expense
                    }
                }
            );
        default:
            return state;
    }
};
