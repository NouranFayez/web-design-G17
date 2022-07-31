

/*
switch(variableName){
    case variableValue : code ......
    case variableValue : code ......
    case variableValue : code ......
    default : code ....
}

*/

// var p = prompt("enter your Job")

// switch (p) {
//     case "doc":
//         console.log("doctor")
//         break
//     case "eng":
//         console.log("engineer")
//         break
//     case "dev":
//         console.log("developer")
//         break
//     case "ins":
//         console.log("instructor")
//         break
//     default: console.log('invalid job')
// }


// var isGraduated = 3

// switch (isGraduated) {
//     case "true":
//     case false:
//     case 3:
//         console.log("boolean type = true/false")
//         break
       
//     default: console.log("invalid")
// }


//////////////////////////////////////////////////////

///// 

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

/*
variable 
while(condition){




    increment++;
}

*/

// var i = 1

// while(i<= 10){
//     console.log(i) // 1

//     i++
// }


//////////////////////////

/* 
    for(variable ; condition ; increment){
        code ......
}
*/

// var startNum = 1

// for(var i = startNum ; i <= 10 ; i++  ){
   
//     if(i == 3) continue;
//     else if(i == 8) break;
//     else console.log(i)

// }


//////////////////////////////////////////////


/*
function name(){
    code ....
}

call()
*/

// function sumTwoNumbers(){
//    var nums =  4 + 5
//     return nums

// }

// var result = sumTwoNumbers()

// console.log(result)
///////////////////////////////

// var res ="correct"


function getFullName(){
    var fName = prompt("enter your First Name")
    var LName = prompt("enter your Last Name")
    console.log(res)
    // fullName = fName +" "+LName
   return fName +" "+LName
}

getFullName() //==> firstNme lastName
// getFullName()

// console.log(fullName)
var full = getFullName()

/////////////////////////////////////

function sum(num = "" , num1  = "3", num2 = 0  , num3 ){
    // console.log(num3) // undefined
    for(var i = 0 ; i<=5 ; i++){
        console.log(i)
    }
     return num + num1 + num2 + num3

}

var n = 4
// console.log(sum( n , 5))
// console.log(sum(10 , 20 , 1000))
console.log(sum())
// console.log(sum(200, 300))
// console.log(sum(40 , 50))


// var p = prompt("enter your name" , "nouran")
// var p = prompt()

/////////////////////////////////////////////////////

// var fName = "nouran"
// var lName = "Ahmed"
// var isGraduated = true
// var nationality = "Egyptian"
// var age = 28
// var address = "Nasr city"

var user = ["nouran" , "Ahmed" , true  , "Egyptian" , 28  , "Nasr city"]

var fName = user[0]
console.log(user[0]) /// get item

user[2] = false // update item

user[6] = "developer" // set item

user[user.length] = "html"


//////////////////// Array Methods

user.push(10000000 , "Angular" , true)
user.unshift(9999999 , "Node")
// console.log(user) 
// console.log(user.length) 
////////////////////////////////////



// var courses = ["Angular" ,"html" , "css" , "Bootstrap" , "node"]

// courses.shift()
// courses.pop()


////////////////// splice(startIndex , deletedCount , item/s)

////////// splice(startIndex , Deletedcount) ==>  delete item/s

var courses = ["html" , "css" , "Bootstrap" , "php" , "laravel", "Angular" ]

var x = courses.splice(3 , 2 )

////////// splice(startIndex , 0 , item/s) ==>  add item/s

courses.splice(2 , 0 , true , 45666)


////////// splice(startIndex , deletedCount , item/s) ==>  add/remove item/s
courses.splice(4 , 1 , "web design" , true , 345)


// console.log(courses)
// x.push("js")

// x[3] = [1, 2,34,5]

// console.log(x)


var user = ["nouran" , "Ahmed" , true  , "Egyptian" , 28  , "Nasr city"]



// console.log(user)
// console.log(user.toString())
// console.log(user.join("--"))

// console.log(user.includes("developer"))

if(user.includes('developer') == false)  user.push("developer")
// if(!user.includes('developer'))  user.push("developer")


// console.log(user)







////////////////////////////////////////////////
// function statment
function sum(){
    return 5+6
}
var num = sum()

///// function Expression
var info = function(){
    return "nouran"
}
// console.log(info())

/// Arrow Function
var bio = ()=>{
    return "Ahmed"
}
// console.log(bio())



////////////////////////////////////////////////


var id = [100 ,6 ,12 ,70 ,40 , 30 ]


// console.log(id[0]) // 100
// console.log(id[1]) // 30
// console.log(id[2])
// console.log(id[3])
// console.log(id[4])


for(var i = 0 ; i < id.length ; i++){
    // console.log(id[i])
}


id.forEach((val , i , arr )=>{
    // console.log(val + " index ==> " + i)
})


var n = prompt("enter number")

var index = id.findIndex(ele => ele == n)
// console.log(index)


id.splice(index , 1)

console.log(id);

//////////////////////////////////////////////////

// (n == 40) ? console.log("correct") : console.log("wrong"); 

(n == 40 && typeof n == "number") ? console.log("correct") : console.log("wrong");



















