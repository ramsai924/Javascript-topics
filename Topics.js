//1.Global execution context where it has code phase and memory phase
//2.How functions can create execution context when it is invoked.

//3.About Hosting
console.log(x0)
getName()

var x0 = 1;
function getName(){
    console.log('Ramsai')
}

//4.About functions in javascript and accessing loca variable
var x1= 1
a()
b()
console.log(x1)

function a(){
    var x1 = 10;
    console.log(x1)
} 
function b() {
    var x1 = 100;
    console.log(x1)
} 

//5.Window object is created when browser opens
console.log(window.x0) //1
console.log(x0) //1
console.log(this.x0) //1

//6.Undefined and not defined
var x2;
console.log(x2) //undefined
console.log(z0) // not-defined

//7. Scope, Scope chain and lexical environment 
//scope chain - is checking value in its local scope if not than goes to parent scope
//lexical environment - Is c() lexically present in lexical envoronment of a(), Than a() lexically 
//                      presnt in its parents lexical env. i.e., Global
//scope - local memeory phase like inside the function

//eg:1
function a1(){
    var b = 10
    c()
    function c(){
        console.log(b) // 10
    }
}
a1()
console.log(b) //undefined
//eg:2
var b1 = 10
function a1() {
    c()
    function c() {
        console.log(b1) // 10 - checked its local space if not, than goes to its parent if not again goes to its and than prints 10
    }
}
a1()
console.log(b0) //undefined

//8.Let and const

console.log(b3) //b3 reference error we are trying to access in temporal dead zone

let b3 = 10;

// let b3 = 100; //err can't use same variable names for let and also for const

const c2 = 10;
c2 = 100 //err we cant re-assign the value to const