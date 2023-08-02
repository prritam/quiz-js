const prompt =require("prompt-sync")();

console.log("Wel-Come to the Quiz");

const ans1 = prompt("what is brain of the computer\n ");
const corr1 ="cpu";
let correctAnswer=0;

if(ans1.toLowerCase() === corr1){
    console.log("Congrats your answer is correct!!");
    correctAnswer++;
}
else{
    console.log("Try again");
}
const ans2 = prompt("what is brain of the computer ");
const corr2 ="cpu";

if(ans2.toLowerCase() === corr2){
    console.log("Congrats your answer is correct!!");
    correctAnswer++;
}
else{
    console.log("Try again");
}
const ans3 = prompt("what is brain of the computer ");
const corr3 ="cpu";

if(ans3.toLowerCase() === corr3){
    console.log("Congrats your answer is correct!!");
    correctAnswer++;
}
else{
    console.log("Try again");
}
console.log(` Your score is: ${correctAnswer}`);