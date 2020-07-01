import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action obj', () => {
  const action = removeExpense({ id: '123abc' })

  // when using {} or [] use .toEqual instead of .toBe
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action obj', () => {
  const action = editExpense('123abc', { note: 'new note value' })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'new note value'
    }
  })
})

test('should setup add expense action obj with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      // because id is randomly generated
      // we'll just expect any str that comes back
      id: expect.any(String)
    }
  })
})

test('should setup add expense action obj with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
