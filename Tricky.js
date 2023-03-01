// setTimeout(() => {
//     console.log('Dinner')
// }, 1000)

// setTimeout(() => {
//     console.log('Lunch')
// }, 2000)

// setTimeout(() => {
//     console.log('Break fast')
// }, 3000)


const breakFast = (Timer) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Break fast')
        }, Timer)
    })
}

const lunch = (Timer) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('lunch')
        }, Timer)
    })
}
const dinner = (Timer) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Dinner')
        }, Timer)
    })
}

// breakFast(3000).then((res1) => {
//     console.log(res1)
//     lunch(2000).then((res2) => {
//         console.log(res2)
//         dinner(1000).then((res3) => {
//             console.log(res3)
//         })
//     })
// })

async function runTimer(){
    console.log(await breakFast(3000))
    console.log(await lunch(2000))
    console.log(await dinner(1000))
}

runTimer()