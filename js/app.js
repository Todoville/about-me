'use strict'

console.log("howdy there pardner");

alert('Welcome to my About me! Let\'s have a little fun today and play a quick guessing game!');

var userName = prompt('First, why don\'t you tell me your name?');
alert('Welcome, ' + userName + '!');

console.log('Username is ' + userName)

alert(userName + ', today you\'re going to play a quick guessing game on everyone\'s favorite subject- Andrew Peacock! 3 of the following statements will be true and 2 will be false, it\'s your job to guess which is which! Good luck, he\'s a weird one!');

var squatTruth = prompt('Okay ' + userName + ', your first query- In high school, Andrew could box squat over 800lbs! Answer with T for True or F for False!' ).toUpperCase();

if (squatTruth === 'T') {
  alert('Congratulations, ' + userName + ', that\'s correct!');
} else if (squatTruth === 'F') {
  alert('Oooooooh, tough break ' + userName +', that was true!');
} else {
  alert('Please just use \'T\' for True or \'F\' for False!');
}
console.log(userName + ' answered ' + squatTruth + ' for question one')

var mixTape = prompt('Next statement, ' + userName + '! Andrew released a rap mixtape on Soundcloud last year, and one of the tracks went viral in June. \'T\' for True, \'F\' for False!').toUpperCase();

if (mixTape === 'T') {
  alert('Not quite, sadly Andrew has 0 raps avaiable for you to listen to on Soundcloud')
} else if (mixTape === 'F') {
  alert('Correct! Next question!');
} else {
  alert('Please stick to T and F for True and False!');
}
console.log(userName + ' answered ' + mixTape + ' for question two.');

var streetFighter = prompt('Andrew has been playing the popular fighting game Street Fighter for years and netted a sponsorship in November 2016! T for True or F for False!').toUpperCase();

if (streetFighter === 'T') {
  alert('Correct! Nice job paying attention!') 
 }  else if (streetFighter === 'F') {
    alert('Ohh, sorry ' + userName + '! Andrew is sponsored by Team Entropy!');
 }  else {
    alert('Please stick to T and F for True and False!');
 }
 console.log(userName + ' answered ' + streetFighter + ' for question three.');

var bouncer = prompt('Andrew spent multiple years as a bouncer in a Montana bar! T for True or F for False!').toUpperCase();

if (bouncer === 'T') {
  alert('Correct! He was always a nice guy though.');
 } else if (bouncer === 'F') {
  alert('Incorrect! Don\'t make Andrew throw you outta here!');
 } else {
   alert('Please stick to T and F for True and False!');
 }
console.log(userName + ' answered ' + bouncer + ' for question four.');
//andrew hates dogs but loves cats

var lovesCats = prompt('Andrew hates dogs but loves cats! T for True or F for False!').toUpperCase();

if (lovesCats === 'T') {
  alert('Absolutely not! Andrew loves all the fuzzy critters but is particularly partial to canines.');
} else if (lovesCats === 'F') {
  alert('Correct! Andrew loves em both but is more of a dog person at heart.');
} else {
  alert('Please stick to T and F for True and False!');
}
console.log(userName + ' answered ' + lovesCats + ' for question five.')