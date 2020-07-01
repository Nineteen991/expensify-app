const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

test('should add 2 numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('what comes back from genGreeting is correct', () => {
  const result = generateGreeting('Chubie')
  expect(result).toBe('Hello Chubie')
})

test('should gen greeting for no name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous')
})
