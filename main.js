const rollButton = document.querySelector('#RolltheDice')
const rollNumber = document.querySelector('#numberOfRolls')
const TotalElement = document.querySelector('#total')
const ShowAllButton = document.querySelector('#ShowAll')
const AllRollsElement = document.querySelector('#AllRolls')


let dieRolls = []
let total = 0


rollButton.addEventListener("click", function () {

    console.log("roll-button")

    let numberOfrolls = rollNumber.value
    console.log(numberOfrolls)

    for (let counter = 0; counter < numberOfrolls; counter += 1) {
        let currentRoll = Math.floor(Math.random() * 6) + 1
        dieRolls.push(currentRoll)
        total = total + currentRoll
    }
    console.log(dieRolls)
    console.log(total)
    TotalElement.innerHTML = total



})
ShowAllButton.addEventListener("click", function () {
    for (let counter = 0; counter < dieRolls.length; counter += 1) {

        let listElement = "<li class='dice'>" + dieRolls[counter] + "</li>"
        AllRollsElement.innerHTML += listElement
    }



})
