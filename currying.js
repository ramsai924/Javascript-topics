let multiply = function(x,y){
    console.log(x*y)
}

let mulpiltbytwo = multiply.bind(this, 2)
mulpiltbytwo(3) //6


let add = function(x){
    return function(y){
        console.log(x+y)
    }
}

let addValue = add(5)
addValue(2) //7