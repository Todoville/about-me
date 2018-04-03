'use strict'

console.log("howdy there pardner");

alert('Welcome to my About me! Let\'s have a little fun today and play a quick guessing game!');

var userName = prompt('First, why don\'t you tell me your name?');
alert('Welcome, ' + userName + '!');

alert(userName + ', today you\'re going to play a quick guessing game on everyone\'s favorite subject- Andrew Peacock! 3 of the following statements will be true and 2 will be false, it\'s your job to guess which is which! Good luck, he\'s a weird one!');

var squatTruth = prompt('Okay ' + userName + ', your first query- In high school, Andrew could box squat over 800lbs! Answer with T for True or F for False!' ).toUpperCase();
if (squatTruth === 'T') {
  alert('Congratulations, ' + userName + ', that\'s correct!');
} else if (squatTruth === 'F') {
  alert('Oooooooh, tough break ' + userName +', that was true!');
} else {
  alert('Please just use \'T\' for True or \'F\' for False!');
}

// var 