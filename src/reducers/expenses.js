// Expenses Reducer

const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, // spread operator doesn't change orig array
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,  // return obj with all expenses and
            ...action.updates  // only update the 1 expense
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}
