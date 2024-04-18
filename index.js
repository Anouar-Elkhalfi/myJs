// document.getElementById("count").innerText = 5
// let count = 5+7;
// // console.log(count);
// let firstbatch = 5 ;
// console.log(firstbatch);
// let secondbatch = 9;
// console.log(secondbatch);
// let count = firstbatch + secondbatch
// console.log(count);
// // let myAge = 35;
// console.log(myAge);
// let myAge = 35;
// let humanDogRate = 7;
// let myDogAge = myAge * humanDogRate;
// console.log(myDogAge);
//  let count = 5;
//  count = count + 1;
//  console.log(count);

 // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
// let bonusPoints = 50;
// bonusPoints = bonusPoints + 100;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 25;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 70;
// console.log(bonusPoints);
// function increment(){
//   console.log("the button was clicked");
// }
let countEl = document.getElementById("count-el");
let count = 0;
function increment(){
  count = count + 1;
  countEl.innerText = count;

}

function save(){
  console.log(count)
}
let userName = "Anouar";

let message = "You have tree new notifications";
let messageToUser = message +", "+ userName + "!"
console.log(messageToUser);
