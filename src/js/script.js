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
    // i = 0;
    // while(i < name.length){
    //     i++
    // }
    for(i = 0; i < name.length; i++){
        return name[i]
    }
}
// Sarah for example
console.log(nameVertical("Sarah"))