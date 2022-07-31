console.log("javascript");

// console.log(20);

/*
hdhfjoj
gnjkbg
gkn
*/

var firstName = "Nouran"
var lastName = 'Ahmed'

var age = 28
// console.log(firstName)
// console.log(age)

// boolean ==> true / false

var isGraduated = true

// console.log(isGraduated)

var t //undefined

// console.log(t)

var a = null

// console.log(a)

// console.log(firstname)

// console.log(age)

lastName = 30

// console.log(lastName)

var a = 3
var b = 5


/////////////////////// Mathematical Operator
// var c = a + b
// var c = a - b
// var c = a * b
// var c = a / b
// console.log(c)

// ++ => increment
var f = 10
// console.log(++f)
// console.log(f++)
// console.log(f)

// -- ==> decrement
// console.log(f--)
// console.log(f)
// console.log(--f)

///////////////////////////// Assignment Operator

var k = 5

// k = k + 5

// console.log(k+=5)

var h = 2

// console.log(h*=10)

/////////////////////////////// unary operator

// console.log(typeof(h))
var s = "lorem"
// console.log(typeof s)


////////////////// Comparison Operator ==> (> , < , >= , <= , == , === , != , !==) ==> return boolean type

var r = 5
var s = 10
var g = 10

// console.log(r > s)
// console.log(r < s)

// console.log(s >= g)
// console.log(s <= g)

var d = 10 // number
var x = "10" // string

// console.log(d == x)  // value ==> true
// console.log(d === x) // value - datatype ==> false

// console.log(d != x) // value == false
// console.log(d !== x) // value - datatype ==> true


// console.log(d = x)

//////////////// logical operator ==> (&& , || , !)


var a = 5
var h = 10
var l = 20

// console.log(a < h) // true
// console.log(a > l) // false

// console.log(a < h && a > l) /// false

// console.log( typeof a == "5")


// console.log(typeof a)

// console.log(a == 20)

// console.log(a < h && a > l && typeof a == "number") /// false

/// && ==> true , true , false , true = false
/// && ==> true , true , true , true = true


// console.log(a < h || a == "20" || typeof a == "string") /// true

/// || ==> false, false , true , false = true
/// || ==> false, false , false , false = false


///////////////////// ternary Operator ==> (condition) ? true .. : false

var firstName = "tamer"
var result


// console.log('hvbnm,bnm');

(firstName == "tamer") ? result = "correct" : result = "wrong"

var age = null;
var age2 // undefined - false

(!age2) ? result = "correct" : result = "wrong" // true


// console.log(result)


var m = "marwa" // true

// console.log(!m)


var n = 3 / "html" // false -- NaN

console.log(!n)


var h = 20
var d = 30
var y = "css"

var k = h + " " + d + " " + y + h + " " + d


// console.log(k)


///////////////////////////////////////////////////

// if/else Statment 

/*
if(condition) {
    true
}
else {
    false
}
*/

var t = 20

if (t == 30 || typeof t == "number") {
    var res = "correct"
    console.log(res)
}
else {
    console.log("wrong")
}

// alert("error in page")


var p = prompt("enter your job")
console.log(p)


// if(p == "doctor") console.log("he is a doctor")
// else if(p == "instructor") console.log("instructor")
// else if(p == "eng") console.log("engineer")
// else if(p == "developer") console.log("developer")
// else console.log("invalid job")



if (p == null) {
    console.log("please enter your Job")
}
else {
    if (p == "doctor") console.log("he is a doctor")
    else if (p == "instructor") console.log("instructor")
    else if (p == "eng") console.log("engineer")
    else if (p == "developer") console.log("developer")
    else console.log("invalid job")
}


// document.write("xcvbnm")



// var degree = prompt("enter your degree")

// > 90 ==> A
// > 80 ==> B
// > 70 ==> C
// > 60 ==> D
// < 60 ==> failed




