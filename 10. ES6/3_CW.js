// block scope

let a=5
if( true)
{
    let a =55;
    console.log(a)
}
console.log(a)

function printNum(){
    // console.log(a) // if i do this it will give error bc of its searching a in side the fun
    // but if if i change a =555 to a1=555 and then print a1 then my above print will print 5 bc it knows there
    // thi no dec of a in side the block earlier it knows there is a below
    let a=555
    console.log(a)
}
printNum()

//if  i do deconly then print it will give unidentifed

let name1
console.log(name1)
name1="jj"

// ****************************************
onsole.log(name11)
//var 3 wasy of dec a var
var name11 = "kk"

// it will print unidentifed but in the connst case giev error of ref

// here there is a imp concept of HOISTING
// when you dec var with var out interpreter hoist var at the top

console.log(name)

var name ="kk"
// this look like

var name ;

console.log(name)

name=”kk”
// only happen in case of var

