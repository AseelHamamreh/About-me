'use strics';

let Q1 = prompt('What is your name?');
alert ('Hello '+Q1 + '! Welcome to my WebSite' );
console.log('your name is: ' + Q1);


let Q2 = prompt('Do you think I am vegeterian?');
let Ans2 = Q2.toLowerCase();
if (Ans2 === 'yes' ||	Ans2 === 'y'){
  alert('No I am not.');
}
else if (Ans2 === 'no' ||	Ans2 === 'n'){
  alert('You are right! I am not.');
}
console.log('Do You think I am vegeterian? your answer was: ' + Ans2);

let Q3 = prompt('Do you think I like Movies?');
let Ans3 = Q3.toLowerCase();
if (Ans3 === 'yes' ||	Ans3 === 'y'){
  alert('You are right I like Movies very much!');
}
else if (Ans3 === 'no' ||	Ans3 === 'n'){
  alert('You are wrong! I like Movies very much!');
}
console.log('Do you think I like Movies? your answer was: ' + Ans3);

let Q4 = prompt('Do you thing I am a student?');
let Ans4 = Q4.toLowerCase();
if (Ans4 === 'yes' ||	Ans4 === 'y'){
  alert('You are right I am a student at LTUC!');
}
else if (Ans4 === 'no' ||	Ans4 === 'n'){
  alert('You are wrong! I am a student at LTUC!');
}
console.log('Do you thing I am a student? your answer was: ' + Ans4);


let Q5 = prompt('Are you interested to know me more?');
let Ans5 = Q5.toLowerCase();
if (Ans5 === 'yes' ||	Ans5 === 'y'){
  alert('I am also interested to know you more!');
}
else if (Ans5 === 'no' ||	Ans5 === 'n'){
  alert('Yes you are!');
}
console.log('Are you interested to know me more? your answer was: '+ Ans5);

alert('Thank you '+ Q1 + ' for answering!!');



