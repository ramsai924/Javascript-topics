//polyfill for bind method

Function.prototype.myBind = function(...args){
    const obj = this
    // console.log(args)
    return function(...args1){
        obj.apply(args[0], [...args.slice(1) ,...args1])
    }
}

let user6 = {
    firstName: 'Raj 2',
    lastName: 'Kumar 2',
}

const fullname1 = function (city, state,pin) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + state + pin)
}

let x = fullname1.myBind(user6, 'Hyd', 'Ts')

console.log(x(' ,500304'))


//pollyfill for call
/// here arguments is (user6, 'Hyd', 'TS 2', ' ,502334') and parameter looks like (user6Obj, ['Hyd', 'TS 2', ' ,502334']) converted to array we used ...args
Function.prototype.myCall = function(obj,...args){

    obj.myfun = this
    obj.myfun(...args)
}

fullname1.myCall(user6, 'Hyd', 'TS 2', ' ,502334')

//pollyfill for apply
/// here arguments is (user6, 'Hyd', 'TS 2', ' ,502334') and parameter looks like (user6Obj, ['Hyd', 'TS 2', ' ,502334']) converted to array we used args

Function.prototype.myApply = function (context, args) {
 
    context['uniqueProp'] = this;
    context['uniqueProp'](...args);
   
}
fullname1.myApply(user6, ['Hyd', 'TS 3', ' ,502334'])