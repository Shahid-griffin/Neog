let s =20
console.log(s)

let stringValue = "hello! World"
console.log(stringValue)

let firstName = "john"
let secondName = "Doe"
let fullname = firstName+" "+secondName
console.log(fullname)

let x = 50
let y = 22
let sum = x+y
console.log(sum)

let xs;
xs =55;
console.log(xs)

// ***************************
// const

const number=30
console.log(number)

const stringconst = "hello const"
console.log(stringconst);

// no reassign allowed
// stringconst ="jj"  // this will give error

// no variable declarion alone is allowed we have to initilase at the same time 

const  array=[1,2,3,4]
array[0]=10
console.log(array)    // reassign is not allowed but manipulation is 

// same with the object 
const  obj ={
    name : "alice",
    age :"64"
}
obj.name = "bob"
console.log(obj)