import moment from 'moment'
import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
  const filters = {
    text: 'e',  // filters out any expense without the letter e
    sortBy: 'date',
    startDate: undefined,  // default value
    endDate: undefined  // default value
  }
  const result = selectExpenses(expenses, filters)
  // should expect the 3rd then 2nd expenses
  // since they both have the letter e
  // and sorted by date
  expect(result).toEqual([ expenses[2], expenses[1] ])
})

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
