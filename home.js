const _price=99.99;
//_price=55;// we cnnot change cont once assigned



showMessage(_price);
//var _newProce=20;//you dont error even in the browser if you assign it like this but this is not correct way to assign
//var _newProce=20;//you dont error even in the browser if you assign it like this but this is not correct way to assign
let _newprice=21;//in here browser will throw error saying coonot access before initlization so thsi is correct



// The topic variable inside the if block resets the value of topic.
// With the let keyword, we can scope a variable to any code block. Using let protects
// the value of the global variable:
var topic = "JavaScript"
if (topic) {
 let topic = "React"
 console.log('block', topic) // React
}
console.log('global', topic) // JavaScript
// The value of topic is not reset outside of the block.

console.log(`${_price}, ${topic} , ${_newprice}`)

//Arrow function
// Old
var lordify = function(firstName) {
    return `${firstName}`
   }

   console.log(lordify("Praween"));

   // Old
var lordify = function(firstName, land) {
    return `${firstName} of ${land}`
   }

console.log( lordify("Dale", "Maryland") ) // Dale of Maryland
console.log( lordify("Daryle", "Culpeper") ) // Daryle of Culpeper

//new approach to define function
var lordify1=firstName =>`${firstName}`
console.log(lordify1('Kumar'))
var lordify2=(firstName , lastName)=>`${firstName},${lastName}`
console.log(lordify2("praween","kumar"))

// New
var _lordify = (firstName, land) => {

    if (!firstName) {
    throw new Error('A firstName is required to lordify')
    }
   
    if (!land) {
    throw new Error('A lord must have a land')
    }
   
    return `${firstName} of ${land}`
   }
 console.log( _lordify("Kelly", "Sonoma") ) // Kelly of Sonoma
//console.log( _lordify("Dave") ) // ! JAVASCRIPT ERROR

const add =(x=5,y=10)=>console.log(x+y);

var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
   }
   var {bread, toppings} = sandwich
   console.log(bread, toppings) // dutch crunch tun


   var lordify=regperson=>{
       console.log(`${regperson.firstName} of praween`)
   }

   var regperson={
       firstName:"kumar",
       lastName:"jha"
   }

   lordify(regperson)

