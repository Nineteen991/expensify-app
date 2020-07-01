import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
// yarn add moment react-dates react-addons-shallow-compare
// airbnb react-dates

const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    // from regex101.com
    // 1+ digits, 0-1 decimal points, 0-2 digits
    // if no amount(in order to delete) or amount
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {  // prevent the date from being deleted; has to have date
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      // Set error state if no description or amount
      this.setState(() => ({ error: "Please enter both desc and amount" }))
    } else {
      // Clear the console.error
      this.setState(() => ({ error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100, // amount, base 10
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <div>
        { this.state.error && <p>{ this.state.error }</p>}
        <form onSubmit={ this.onSubmit }>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={ this.state.description }
            onChange={ this.onDescriptionChange }
          />
          <input
            type="text"
            placeholder="Amount"
            value={ this.state.amount }
            onChange={ this.onAmountChange }
          />
          <SingleDatePicker
            date={ this.state.createdAt }
            onDateChange={ this.onDateChange }
            focused={ this.state.calendarFocused }
            onFocusChange={ this.onFocusChange }
            numberOfMonths={ 1 } // how many months are displayed on calendar
            isOutsideRange={() => false} // pick any day past => future
          />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={ this.state.note }
            onChange={ this.onNoteChange }
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
