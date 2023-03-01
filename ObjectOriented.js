//Object literals
var obj1 = {
    name: 'Ram',
    age: 20,
    fun1: function(){
        console.log(this)
        const infun = () => {
            console.log(this)
        }
        infun()

        function a(){
            console.log(this)
        }
        a()

    },
    fun2:function(){
        console.log(this)
    }
}

// obj1.fun1()

// Object.prototype.fullDetails = function(){
//     console.log('Name is ' + this.name + ' and age is ' + this.age)
// }

// //Classes

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    login(){
        console.log(this)
    }

    logout = () => {
        console.log(this)
    }
}

const user1 = new User('Raj', 25)


class Admin extends User{
    constructor(name,age){
        super(name, age)
        this.role = 'Admin'
    }
}

const admin1 = new Admin('Admin', 10000)
// admin1.login()

//--------classes inheritance

class User1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

User1.prototype.login = function(){
    console.log(this)
}

class Admin1 extends User1 {
    constructor(name, age) {
        super(name, age)
        this.role = 'Admin role'
    }
}

Admin1.prototype = User1.prototype;

const admin2 = new Admin1('Admin', 10000)
// console.log(admin2)

//------functional constructor

function Post(title,id){
    this.title = title;
    this.id = id;
    this.details = function(){
        console.log(this)
    }
}
const post1 = new Post('Test', 1)

function Description(...args){
    console.log(Post)
    Post.apply(this, [...args.slice(0,2)])
    this.color = args[2]
}

const desc1 = new Description('Test 2', 2, 'Red')


//-----showllow and deep copy

let copy1 = {name: 'ram', age: 26}



