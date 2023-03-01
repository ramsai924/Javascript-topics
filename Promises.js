const prom1 = function(status){
    return new Promise((res, rej) => {
        if(status){
            res('Done 1')
        }else{
            rej('Not done 1')
        }
    })
}

const prom2 = function (status) {
    return new Promise((res, rej) => {
        if (status) {
            res('Done 2')
        } else {
            rej('Not done 2')
        }
    })
}

const prom3 = function (status) {
    return new Promise((res, rej) => {
        if (status) {
            res('Done 3')
        } else {
            rej('Not done 3')
        }
    })
}


//if one fails in middile also others also fail
Promise.all([prom1(true), prom2(false), prom3(true)]).then((res) => {
    console.log('Promise all', res)
}).catch((err) => {
    console.log('promise all err', err)
})

//returns all the promises as objects but
//-if done  { status: 'fullfilled', reason: 'Value'}
//-if fails { status: 'rejected', reason: 'err'} 
Promise.allSettled([prom1(true), prom2(false), prom3(true)]).then((res) => {
    console.log('Promise allSettled', res)
}).catch((err) => {
    console.log('promise allSettled err', err)
})


//return if one of the first fullfilled value
//if all fails retrn error
Promise.any([prom1(false), prom2(true), prom3(true)]).then((res) => {
    console.log('Promise any', res)
}).catch((err) => {
    console.log('promise any err', err)
})

//race
// it only returns first fullfiled value if first is notfulfilled then goes to catch
Promise.race([prom1(true), prom2(false), prom3(false)]).then((res) => {
    console.log('Promise race', res)
}).catch((err) => {
    console.log('promise race err', err)
})