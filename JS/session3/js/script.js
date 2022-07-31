

// var x = 5

// console.log(typeof x) // string , number , boolean , object

// if(typeof x == "number")console.log('correct')
// else console.log('wrong')


// var result ;
// (x == 5) ? result = "true" : result = false 

// console.log(result)
// console.log(typeof result)
// console.log(typeof(result))
////////////////////////////////////////////////////////////////////////


var arr = ["developer" , "web design" , true , 5 , "Js"]


for(var i = 0 ; i < arr.length ; i++){
    // console.log(arr[i])
}

// console.log(arr)


//////////// Array Methods(function)


arr.forEach((items , ind , newArray)=>{
    // console.log(items )
    // console.log(newArray)
})


//////////find

var nums = [10 , 2, 16, 30 ,1 ,50]

var item = nums.find(element => element > 10)

var item2 = nums.find(element => element > 100)
// console.log(item)
// console.log(item2)

var index = nums.findIndex(item => item > 16)
var index2 = nums.findIndex(item => item > 166)

// console.log(index2)

var newArray = nums.filter(items => items > 10)
var newArray = nums.filter(items => items > 100)

// console.log(newArray)

// console.log(nums.reverse())

// console.log(nums.sort())
var test = [true , false ]

var anotherArray = nums.concat(arr , test)

// console.log(anotherArray)

var item = nums.find(element => element > 10)



// var ages = [3, 10, 18, 20];

//  ages.find(checkAge);

// function checkAge(age) {
//   return age > 18;
// }

///////////////////////////////////////////////////////
// var names = ["ahmed" , "ali"]

// names[0] 
// console.log(names[0].join())
// var start = "a"
// console.log(names[0].startsWith(start))
/////////////////////////////////////////////////////




////////////// object

// var user = [ "tamer" , "fayez"  , 30 , "developer" , true]

var user = {
    firstName : "tamer" ,
    lastName : "fayez" ,
    age : 30,
    job : "developer",
    isMarried : true 
}

user.age = 35 // update 
user.address = ["nasr city" , "october"] // set item


console.log(user)
console.log(user.job) // get item

console.log(user.address.length)

var user2 = {
    firstName : "Marwa" ,
    lastName : "Mohamed" ,
    age : 38,
    job : "instructor",
    isMarried : true 
}

var user3 = {
    firstName : "mai" ,
    lastName : "Mohamed" ,
    age : 40,
    job : "instructor",
    isMarried : true 
}


//// Array of objects


var users = [
    {
        firstName : "tamer" ,
        lastName : "fayez" ,
        age : 30,
        job : "developer",
        isMarried : true 
    } ,
    {
        firstName : "Marwa" ,
        lastName : "Mohamed" ,
        age : 38,
        job : "instructor",
        isMarried : true 
    } ,
    {
        firstName : "mai" ,
        lastName : "Mohamed" ,
        age : 40,
        job : "instructor",
        isMarried : true 
    }

]

var userInfo ={
    firstName : "Omar" ,
    lastName : "Mohamed" ,
    age : 40,
    job : "instructor",
    isMarried : true 
}
users.push({
    firstName : "nada",
    lastName : "ahmed" ,
    age : 40,
    job : "instructor",
    isMarried : true 
 } , userInfo )

 
 users[2].job = "engineer"
 users[4].age = 40


 
 
 console.table(users)

users.forEach((ele , ind , arr)=>{
    console.log(ele.firstName)
})

var ind = users.findIndex(item => item.firstName == "Omar")
console.log(ind)

prompt("1 = add , 2 = edit , 3 = delete")

