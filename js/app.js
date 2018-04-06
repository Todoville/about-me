'use strict';

console.log('howdy there pardner');

alert('Welcome to my About me! Let\'s have a little fun today and play a quick guessing game!');

var userName = prompt('First, why don\'t you tell me your name?');
alert('Welcome, ' + userName + '!');
var rightAnswers = 0;
console.log('Username is ' + userName);

alert(userName + ', today you\'re going to play a guessing game on everyone\'s favorite subject- Andrew Peacock! Part one consists of 5 statements, 3 of which will be true and 2 of which are false. Have fun and good luck, he\'s a weird one!');
//Question 1

function question1(){

  var squatTruth = prompt('Okay ' + userName + ', your first query- In high school, Andrew could box squat over 800lbs! Answer with T for True or F for False!' ).toUpperCase();

  if (squatTruth === 'T') {
    alert('Congratulations, ' + userName + ', that\'s correct!');
    rightAnswers++;
  } else if (squatTruth === 'F') {
    alert('Oooooooh, tough break ' + userName +', that was true!');
  } else {
    alert('Please just use \'T\' for True or \'F\' for False!');
  }
  console.log(userName + ' answered ' + squatTruth + ' for question one');
  console.log(userName + ' has gotten ' + rightAnswers + ' right answers.');

}

function question2() {

  var mixTape = prompt('Next statement, ' + userName + '! Andrew released a rap mixtape on Soundcloud last year, and one of the tracks went viral in June. \'T\' for True, \'F\' for False!').toUpperCase();

  if (mixTape === 'T') {
    alert('Not quite, sadly Andrew has 0 raps avaiable for you to listen to on Soundcloud');
  } else if (mixTape === 'F') {
    alert('Correct! Next question!');
    rightAnswers++;
  } else {
    alert('Please stick to T and F for True and False!');
  }
  console.log(userName + ' answered ' + mixTape + ' for question two.');
  console.log(userName + ' has gotten ' + rightAnswers + ' right answers.');

}

function question3() {

  var streetFighter = prompt('Andrew has been playing the popular fighting game Street Fighter for years and netted a sponsorship in November 2016! T for True or F for False!').toUpperCase();

  if (streetFighter === 'T') {
    alert('Correct! Nice job paying attention!');
    rightAnswers++;
  } else if (streetFighter === 'F') {
    alert('Ohh, sorry ' + userName + '! Andrew is sponsored by Team Entropy!');
  } else {
    alert('Please stick to T and F for True and False!');
  }
  console.log(userName + ' answered ' + streetFighter + ' for question three.');
  console.log(userName + ' has gotten ' + rightAnswers + ' right answers.');

}

function question4() {

  var bouncer = prompt('Andrew spent multiple years as a bouncer in a Montana bar! T for True or F for False!').toUpperCase();

  if (bouncer === 'T') {
    alert('Correct! He was always a nice guy though.');
    rightAnswers++;
  } else if (bouncer === 'F') {
    alert('Incorrect! Don\'t make Andrew throw you outta here!');
  } else {
    alert('Please stick to T and F for True and False!');
  }
  console.log(userName + ' answered ' + bouncer + ' for question four.');
  console.log(userName + ' has gotten ' + rightAnswers + ' right answers.');

}
//andrew hates dogs but loves cats

//Question 5

function question5() {

  var lovesCats = prompt('Andrew hates dogs but loves cats! T for True or F for False!').toUpperCase();

  if (lovesCats === 'T') {
    alert('Absolutely not! Andrew loves all the fuzzy critters but is particularly partial to canines.');
  } else if (lovesCats === 'F') {
    alert('Correct! Andrew loves em both but is more of a dog person at heart.');
    rightAnswers++;
  } else {
    alert('Please stick to T and F for True and False!');
  }
  console.log(userName + ' answered ' + lovesCats + ' for question five.');
  console.log(userName + ' has gotten ' + rightAnswers + ' right answers.');

}

//Question 6

function question6(){

  var benchCounter = 1;
  var benchPress = 0;
  while((benchPress !== 310) || (benchCounter <= 5 )) {
    // guess my max ever bench number! (question six)
    benchPress = parseInt(prompt('You made it through the true/false section of today\'s quiz, ' + userName + '! Nice work. Now I want you to guess what my highest bench press ever was! You\'ve got four tries to narrow it down!'));

    console.log(userName + ' has guessed ' + benchCounter + ' times.');

    if(benchPress < 310) {
      alert('Too low!');
    } else if(benchPress > 310) {
      alert('Slow down there tiger, I\'m not that buff!');
    } else if(benchPress === 310) {
      alert('Great work! Never quite got to three plates, sadly.');
      rightAnswers++;
      break;
    } else {
      alert('I have no idea what you typed there, please just use numbers!');
    }
    benchCounter++;
    if(benchCounter >=5) {
      alert('Too many tries! The correct answer was 310. Perhaps you\'ll fare better in the final question!');
      break;
    }
  }
  console.log(userName + ' has gotten ' + rightAnswers + ' right answers.');
}

//Question 7

function question7() {

  var fightGuessAttempts = 6;
  var fightingStyles = ['boxing' , 'kickboxing' , 'swordfighting', 'jiu jitsu', 'karate', 'muay thai' ];
  var guessedCorrect;
  var fightGuess;

  while(fightGuessAttempts > 0) {
    fightGuess = prompt('Alright, last question! You\'ve been doing great so far! Here we go: It\'s been a few years, but Andrew used to do a lot of fighting back in the day! Can you guess one of the styles he trained  for MMA?').toLowerCase();
    fightGuessAttempts--;

    guessedCorrect = false;
    for(var i = 0; i < fightingStyles.length; i++) {
      if(fightGuess === fightingStyles[i]) {
        guessedCorrect = true;
      }
    }
    //user has six guesses to get one correct!
    if(guessedCorrect === true) {
      alert('Congratulations! The possible answers were boxing, kickboxing, swordfighting, Jiu Jitsu, Karate, and Muay Thai! Andrew has always loved the cerebral side of fighting and participating in consensual fisticuffs has long been one of his favorite pasttimes. If you\'re not sick of this dude yet, feel free to learn some more on this page!');
      rightAnswers++;
      break;
    } else if(fightGuessAttempts > 0) {
      alert('He never did much of that one! Try again!');
    }
    else if(fightGuessAttempts === 0) {
      alert('The possible answers were boxing, kickboxing, swordfighting, Jiu Jitsu, Karate, and Muay Thai! Andrew has always loved the cerebral side of fighting and participating in consensual fisticuffs has long been one of his favorite pasttimes. If you\'re not sick of this dude yet, feel free to learn some more on this page!');
    }
  }
  console.log(userName + ' has gotten ' + rightAnswers + ' right answers.');
}
question1();
question2();
question3();
question4();
question5();
question6();
question7();


if (rightAnswers > 6) {
  alert('Wow! That\'s a perfect score, ' + userName + '! I\'m not sure if I\'m impressed or creeped out!' + rightAnswers + 'out of 7 correct!');
} else if (rightAnswers > 4) {
  alert('Not bad, ' + userName + ', you got ' + rightAnswers + ' of 7 questions right!');
} else if (rightAnswers >2) {
  alert('Hmmmm, you might need to study a little harder for the next test, ' + userName + ', you only got ' + rightAnswers + ' out of 7 correct!') ;
} else if (rightAnswers < 2) {
  alert('Were you even paying attention, ' + userName + '? You got ' + rightAnswers + ' out of 7 correct. You should try again!');
}
