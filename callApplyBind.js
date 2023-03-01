// Type 1
let user1 = {
    firstName: 'ram',
    lastName: 'sai',
    fullname: function(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}
user1.fullname()

let user2 = {
    firstName: 'Raj',
    lastName: 'kumar',
    fullname: function(){ 
        console.log(this.firstName + ' ' + this.lastName)
    }
}
user2.fullname()


//type 2
let user3 = {
    firstName: 'ram 1',
    lastName: 'sai 1',
}

let user4 = {
    firstName: 'Raj 1',
    lastName: 'Kumar 1',
}

const fullname = function (user) {
    console.log(user.firstName + ' ' + user.lastName)
}
fullname(user3)
fullname(user4)

//type 3
let user5 = {
    firstName: 'ram 2',
    lastName: 'sai 2',
}

let user6 = {
    firstName: 'Raj 2',
    lastName: 'Kumar 2',
}

const fullname1 = function(city, state){
    console.log(this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + state)
}

//----call
fullname1.call(user5, 'Hyd', 'TS')
//---apply
fullname1.apply(user6, ['Hyd', 'TS'])
//----bind
const bindFun = fullname1.bind(user5, 'Hyd', 'TS');
console.log(bindFun)
bindFun()