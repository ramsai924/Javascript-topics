let obj = {
    firstname: 'Ram',
    lastName: 'sai',
    get getFullName(){
        return `${this.firstname} ${this.lastName}`
    },
    set setFullName(value){
        let arr = value.split(' ')
        this.firstname = arr[0];
        this.lastName = arr[1]
    }
}

obj.setFullName = 'Raj Kumar'

console.log(obj.getFullName)