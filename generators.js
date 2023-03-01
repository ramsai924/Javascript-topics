function* generate(){
    yield 1
    yield 2
    yield 3
}

const generateobj1 = generate()
// console.log(generateobj1)
console.log(generateobj1.next())
// console.log(generateobj1.next())
// console.log(generateobj1.next())
// console.log(generateobj1.next())

//type 2

function* generate2() {
    let id = 1;
    while(true){
        yield id;
        id++
    }
}

const generateobj2 = generate2()
// while (generateobj2.next().done === false){
//      console.log(generateobj2.next())
//     if (generateobj2.next().value == 10){
//         generateobj2.return(10)
//     }
//  }