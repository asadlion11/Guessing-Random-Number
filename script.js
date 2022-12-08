const minNumber = 1;
const maxNumber = 10
var correct = 0;
var notCorrect = 0;
for(let i =1; i<=3; i++){
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    let guessNumber = Number(prompt('Enter your guess number between 1-10'));
    if(guessNumber === randomNumber){
        alert('Matched')
        correct +=1;
    }
    else{
        alert('Not Match, Try again')
        notCorrect +=1;
    }
}
alert('Matched: ' + correct + '\nNot Matched: ' + notCorrect);
if(correct >=2){
    alert('Congrats You won :)')
}
else{
    alert('Sorry You lose :(')
}