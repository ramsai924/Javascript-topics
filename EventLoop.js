//--------------example 1
// console.log('------example-1--------');

// console.log('A called')

// setTimeout(() => {
//     console.log('2S Timer called')
// }, 2000)

// console.log('B called')

//----------------example 2
// console.log('-----example 2--------')

// console.log('X called')

// setTimeout(() => {
//     console.log('O timer called')
// }, 0)
// setTimeout(() => {
//     console.log('1s timer called')
// }, 1000)

// console.log('Y called')

//---------------example 3

console.log('P called')

fetch('https://jsonplaceholder.typicode.com/users').then(() => {
    console.log('Api called')
})

const promiseFun = new Promise((res, rej) => {
    res('Promise called')
})

promiseFun.then((res) => {
    console.log(res)
})

setTimeout(() => {
    console.log('2s timer called')
}, 2000)

console.log('Q called')