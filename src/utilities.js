function addNumbers(a, b) {
  return a + b;
}

let countriesCollection = [
  'Argentina',
  'Australia',
  'Austria',
  'Belgium',
  'Brazil',
  'Canada',
  'Chile',
  'China',
]

let johnDoe = {
  name: 'John Doe',
  age: 30,
  country: 'United States',
  hobbies: ['music', 'sports']
}

function asyncPrint(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async Hello World');
    }, 1000);
  })
}

module.exports = {
  addNumbers,
  countriesCollection,
  johnDoe,
  asyncPrint,
}

