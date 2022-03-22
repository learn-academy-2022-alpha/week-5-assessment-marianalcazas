// // ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest


// // --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
describe("takesString",() => {

    it("takes in a string and returns a coded message.", () => {

        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

      expect(takesString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(takesString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(takesString(secretCodeWord3)).toEqual("3cc3ntr1c")
        })
    })

// // b) Create the function that makes the test pass.
// //Pseudocode
// //create a function that called "takesString"
// // The parameter will be a string and it will converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// //create a variable called "stringChangetoArr" to store value
// // use .split method to splits strings into the array. 
// // use .map to iterate over the array 
// // use if/else if/else statement to declare the values
// //return the variable with .join to change the array back to string 

const takesString = (string) => {
let stringChangetoArr = string.split("").map(value => {
if (value === "a"){
    return 4 
} else if (value === "e" || value === "E"){
    return 3
} else if (value === "i"){
    return 1
} else if (value === "o"){   
 return 0
} else {
  return value
}
}) 
return stringChangetoArr.join("")
}


// // --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// // a) Create a test with expects statement using the variable provided.

describe("singleLetter",() => {

    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
       
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]

      expect(singleLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(singleLetter(arrayOfWords2, letterE )).toEqual(["Cherry", "Blueberry", "Peach"])
        })
    })

// b) Create the function that makes the test pass.
//pseudocode
//takes in an array of words and a single letter and returns all the words that contain that particular letter.
//create a function called "singleLetter" that takes in an array and a letter
//create a variable called "bigA" to pass the parameter letter to be also uppercase
// create a variable called "returnWord" that will filter in the array and will return if the value is true using the method .includes?
//return value

const singleLetter = (array, letter) => {
    let bigA = letter.toUpperCase()
    let returnWord = array.filter(value => {
    if (value.includes(letter) === true || value.includes(bigA) === true ) {
        return value
    }
    })
    return returnWord
    }


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("isItFullHouse",() => {

    it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {

       const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
       const hand2 = [5, 5, 3, 3, 4]
       // Expected output: false
      const hand3 = [5, 5, 5, 5, 4]
      // Expected output: false
       
      expect(isItFullHouse(hand1)).toEqual(true)
      expect(singleLetter(hand2)).toEqual(false)
      expect(singleLetter(hand3)).toEqual(false)
        })
    })

// b) Create the function that makes the test pass.
//pseudocode 
//create a function "isItFullHouse"


//Sorry, I tried to do this one but I was not able to quite understand the question.  :/

const isItFullHouse = (array) =>{
         array.sort() 
 if (array[0] ===[1] && array === [2] === array[3] && array[0] !== array[4]){
     return true 
 } else if(array[0] ===[1] && array[2] === array[3] && array[4] !== array[0]){
     return false
 } else {
     return false
 }
}
return isItFullHouse