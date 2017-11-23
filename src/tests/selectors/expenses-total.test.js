import {getExpensesTotal} from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses',()=>{
    const total = getExpensesTotal([]);
   //console.log('total',total);
    expect(total).toBe(0);
});

test('should correctly add up a single expense',()=>{
    const total = getExpensesTotal([expenses[0]]);
    //console.log('total',total);
    expect(total).toBe(195);
});

test('should correctly add up multiple expenses',()=>{
    const total = getExpensesTotal(expenses);
    //console.log('total',total);
    expect(total).toBe(114195);
});