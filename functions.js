//function statement & function declaration
function a(){
    console.log('A called')
}

//function expression : function which is assigned to a variable
const b = function(){
    console.log('B called')
}

//anonymous function : function which is assigned to a variable 
const c = function(){
    console.log('C called')
}

//First class function : function which is passed as a value to function as a argument
function d(){
    console.log('D called')
}

function e(arg){
    arg()
}
e(d)

//arrow function
const f = () => {
    console.log('F called')
}


// document.addEventListener('click', (e) => {
//     e.stopPropagation()
// }, false)