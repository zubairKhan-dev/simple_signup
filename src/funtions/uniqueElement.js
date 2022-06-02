/* program to make array element unique */

const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

export default unique
  
const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30] // user input
const uniqueAges = ages.filter(unique) // output