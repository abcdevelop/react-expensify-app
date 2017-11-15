import moment from 'moment';
import {setTextFilter, sortByAmount, sortByDate,setStartDate,setEndDate} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action object with text value', () => {
    const text='The text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter action object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action object for sortByAmount ', () => {
    const action = sortByAmount();
    expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
});

test('should generate action object for sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({type: 'SORT_BY_DATE'});
});

