import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate} from '../actions/filters'

export class ExpenseListFilters extends React.Component{
    state={
        calendarFocused: null
    };
    onDatesChange=({startDate, endDate})=>{
        // this.props.dispatch(setStartDate(startDate));
        // this.props.dispatch(setEndDate(endDate));
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    };
    onTextChange=(e) => {
        //console.log(e.target.value);
        //this.props.dispatch(setTextFilter(e.target.value));
        this.props.setTextFilter(e.target.value);
    };
    onSortChange=(e) => {
        //console.log(e.target.value);
        switch (e.target.value) {
            case 'date':
                //return this.props.dispatch(sortByDate());
                return this.props.sortByDate();
            case 'amount':
                //return this.props.dispatch(sortByAmount());
                return this.props.sortByAmount();
        }
    };
    render(){
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}/>
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput ={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({filters: state.filters});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate:() => dispatch(sortByDate()),
    sortByAmount:() => dispatch(sortByAmount()),
    setStartDate:(startDate) => dispatch(setStartDate(startDate)),
    setEndDate:(endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);