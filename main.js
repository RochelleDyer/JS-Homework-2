//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavFoods (person3){
    for (let i = 0; i < Object.keys(person3).length; i++){
        if(Array.isArray(Object.values(person3)[i])){
            console.log(`${Object.keys(person3)[i]}: `);
            console.log(Object.values(person3)[i]);
            
    }   else {
            console.log(`${Object.keys(person3)[i]}:`);
            console.log(`${Object.values(person3)[i]}`)
    }
}
} displayFavFoods(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person (fname, age){
    this.fname = fname;
    this.age = age;


// Use an arrow to create the printInfo method

this.printInfo = () => {
    return `Your name is ${fname} and you are ${age} years old.`;
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

this.addAge = () => {
    this.age = ++ age
    return `You just had a birthday, ${fname}!!! Congratulations! You are now ${age} years old!`
    }
}

let rochelle = new Person ('Rochelle', 51);
let don = new Person ('Don', 53)

console.log (rochelle.printInfo())
console.log (don.printInfo())
console.log (rochelle.addAge())
console.log(don.addAge())




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
word = 'javascript'

let wordLength = new Promise ( (resolve, reject) => {
    if (word.length >= 10) {
        resolve (true);
    }else {
        reject (false);
    }
})

wordLength.then ( () => {
    console.log ('Big Word');
}).catch ( () => {
    console.log ('Small Word');
})

console.log(wordLength)