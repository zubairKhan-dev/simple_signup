// given array
const arr = [
    {id: 4, data: 3},
    {id: 2, data: 4},
    {id: 3, data: 2}
]

// filtering array based on input
const filterArray= (num)=> {
    arr.map((item, index)=> {
        if (item.id== num) {
            return item.data
        }
    })
}

console.log(filterArray(num)) // output