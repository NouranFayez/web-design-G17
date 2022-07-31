

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

console.log(index2)

var newArray = nums.filter(items => items > 10)
var newArray = nums.filter(items => items > 100)

console.log(newArray)

// console.log(nums.reverse())

// console.log(nums.sort())
var test = [true , false ]

var anotherArray = nums.concat(arr , test)

console.log(anotherArray)

var item = nums.find(element => element > 10)



// var ages = [3, 10, 18, 20];

//  ages.find(checkAge);

// function checkAge(age) {
//   return age > 18;
// }
