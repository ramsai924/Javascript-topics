console.log('block scope')
if(true){
    var a =10; // var a will be attached to window object
    let b=20;
    const c=30

    //here b and c are in block scope when we access c out side this scope we get undefined
}

// console.log(c) //c is not defined
console.log(a)// 10

//----shadowing
console.log('Shadowing')
var x = 100;
let y = 200;
if(true){
    var x = 10
    let y = 20;
    const z = 30
    console.log('inner x', x) // it will be 10 : x is shadowed by 10
    console.log('inner y', y)
}

console.log('outter x', x) // 10 : x is shadowed
console.log('outter y', y) //200 : Y will be in script when we access outside

//--incase of function
var p = 100;
let q = 200
function m(){
    var p = 10;
    let q = 20;
    const r = 30;
    console.log('innner p', p)
}
m()
console.log('ouuter p', p)
console.log('outter r', r)
