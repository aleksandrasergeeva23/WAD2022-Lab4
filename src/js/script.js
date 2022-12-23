let userName = "Andrew"
let userAge = 21
let userPets = ["Cat" , "Dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 2.4
var everyDaySpendingPerPet = 6
var daysSurvived = 0

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)



while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    
    console.log(name);
    let nameLength = name.length;

    for (i = 0; i < nameLength; i++) {
        console.log(name[i]);
    }
}

function httpCode(n) {
    return (n < 100) ? "Not a valid code" :
     (n < 200) ? "Informational" :
      (n < 300) ? "Success" : 
      (n < 400) ? "Redirection" : 
      (n < 500) ? "Client Error" :
       (n < 600) ? "Server Error" : 
       "Not a valid code"

}

function compareVariables(var1, var2) {
    console.log("var1= " + var1);
    console.log("var2= " + var2);

    if (var1 === var2) {
        console.log("the two variables have the same value and type");
    } else if (var1 == var2) {
        console.log("the two variables have the same value but not the same type");
        console.log("the type of " + var1 + " is " + typeof var1);
        console.log("the type of " + var2 + " is " + typeof var2);
    } else {
        console.log("the two variables do not have the same value nor the same type");
    }
}

function fibonacci(n) {
    let n1 = 0,
        n2 = 1,
        nextNumber;
    
    console.log('Fibonacci Sequence:');
    console.log(n1); // print 0
    console.log(n2); // print 1

nextNumber = n1 + n2;

while (nextNumber <= n) {

    // print the next number
    console.log(nextNumber);

    // calculate the next number
    n1 = n2;
    n2 = nextNumber;
    nextNumber = n1 + n2;
}
}

fibonacci(5);



// Do it yourself task 
let courses = ["WAD", "SoftwareEngineering", "WebSecurity", "OOP"];
let i = 0;

for (;;) {
console.log(courses[i]);
i++;
if (i === courses.length) break;
}

// Sarah for example
console.log(nameVertical("Sarah"))
console.log(compareVariables (12, "12"))
console.log(httpCode(121))