console.log('utils.js is running')

export const square = (x) => x * x

const add = (a, b) => a + b

const subtract = (a, b) => a - b

// export syntax is not an object
// export { add, subtract as default }

// or use export default like this
export default subtract

// or use export default like this
// export default (a, b) => a - b