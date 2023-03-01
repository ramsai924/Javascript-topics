// primitive type :
// -String
// -Number
// -Boolean
// -undefined
// -Null

//non-primitive types:
//-Arrays
//-Objects

let a = 10;
let b = a;
b = b+1
console.log('a', a) //10
console.log('b', b) //11

//----------arrays
let arr1 = [1,2,3]
function fun1(arr, val){
    arr.push(val)
    console.log('arr in fun', arr)
}
fun1(arr1, 4) //we passed memory reference of array
console.log('arr out of fun', arr1)

let arr2 = [1,2,3]

function fun2(arr, val){
    let newArr = arr.map((ar) => ar * 2);
    newArr.push(val)
    console.log(newArr)
}
fun2(arr2, 4)
console.log(arr2)

//--------objects
let obj1 = {value:10}
function fun3(obj,val){
    obj.value = val;
    console.log('value in func : ', obj)
}
fun3(obj1, 20)//we passed memory reference of obj
console.log('value out of func : ', obj1)

let objs = [{ val: 1 }, { val: 2 }, { val: 3 }]

function fun4(arr, val) {
    let newArr = arr.map((ar) => JSON.parse(JSON.stringify(ar)));
    newArr[0].val = val;
    console.log(newArr)
}
fun4(objs, 4)
console.log(objs)