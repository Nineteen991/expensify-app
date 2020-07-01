// OBJECT DESTRUCTURING

// const person = {
//   name: 'biechu',
//   age: 13,
//   location: {
//     city: 'santa cruz',
//     temp: 75
//   }
// }

// const { name, age } = person

// console.log(`${name} is ${age}`)


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penquin'
//   }
// }

// const { name: publisherName = 'Self-published'} = book.publisher

// console.log(publisherName)


// ARRAY DESTRUCTURING

const address = ['1299 S Juniper St', 'santa cruz', 'ca', '95062']

const [ , , state = 'new york', ] = address

console.log(`You're in ${state}.`)


const item = ['coffee (hot)', '$2', '$2.50', '$2.75']

const [ coffee, , medium ] = item

console.log(`A medium ${coffee} costs ${medium}`)