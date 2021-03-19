// 'use strics';
let score = 0 ;
let Q1 = ('');
function qs0(){
  let Q1 = prompt('What is your name?');
  alert ('Hello '+Q1 + '! Welcome to my WebSite' );
}
qs0();

function qs1(){
  let Q2 = prompt('Do you think I am vegeterian?');
  let Ans2 = Q2.toLowerCase();
  if (Ans2 === 'yes' ||	Ans2 === 'y'){
    alert('No I am not.');
  }
  else if (Ans2 === 'no' ||	Ans2 === 'n'){
    alert('You are right! I am not.');
    score = score +1 ;
  }
}
qs1();

function qs2(){
  let Q3 = prompt('Do you think I like Movies?');
  let Ans3 = Q3.toLowerCase();
  if (Ans3 === 'yes' ||	Ans3 === 'y'){
    alert('You are right I like Movies very much!');
    score = score +1 ;

  }
  else if (Ans3 === 'no' ||	Ans3 === 'n'){
    alert('You are wrong! I like Movies very much!');
  }
}
qs2();

function qs3(){
  let Q4 = prompt('Do you thing I am a student?');
  let Ans4 = Q4.toLowerCase();
  if (Ans4 === 'yes' ||	Ans4 === 'y'){
    alert('You are right I am a student at LTUC!');
    score = score +1 ;
  }
  else if (Ans4 === 'no' ||	Ans4 === 'n'){
    alert('You are wrong! I am a student at LTUC!');
  }
}
qs3();

function qs4(){
  let Q6 = prompt('Do you think I like Sport?');
  let Ans6 = Q6.toLowerCase();
  if (Ans6 === 'yes' ||	Ans6 === 'y'){
    alert('You are right!');
    score = score +1 ;
  }
  else if (Ans6 === 'no' ||	Ans6 === 'n'){
    alert('You are wrong! I like Sport very much!');
  }
}
qs4();

function qs5(){
  let Q5 = prompt('Do you think I Like apple?');
  let Ans5 = Q5.toLowerCase();
  if (Ans5 === 'yes' ||	Ans5 === 'y'){
    alert('That is correct');
    score = score +1 ;

  }
  else if (Ans5 === 'no' ||	Ans5 === 'n'){
    alert('that is incorrect!');
  }
}
qs5();
function qs6(){
  let A5 = Number(prompt('Guess A number from 1 to 100, You have only 4 tries!'));

  for (let i=3 ; i>0 ; i--){
    if (A5 > 30){
      A5 = prompt('You are too high! Guess Again , '+ i + ' tries left!' );
    }
    else if (A5 < 20){
      A5= prompt('You are too law! Guess Again , '+ i + ' tries left!');
    }
    else if (A5 <=24 || Number(A5) >=26 ){
      A5= prompt('You are too close! Guess Again , '+ i + ' tries left!');
    }
    else if (A5 === 25) {
      i = 0;
    }
    else{
      A5= prompt('That is wrong! Guess Again , '+ i + ' tries left!');

    }
  }


  if ( Number(A5) !== 25 ){
    alert('Your chances are over! The answer is 25');
  }
  else{
    alert('You are right! its 25');
    score = score +1 ;

  }
}
qs6();


function qs7(){
  let A1 = [6 , 11 , 1];
  let S1 = prompt('Q1: Guess one of my favorite three numbers, YOU HAVE ONLY 6 CHANCES');

  for (let ii = 5 ; ii > 0 ; ii--){
    if ( Number(S1) === A1 [0] ||Number(S1) === A1 [1] || Number(S1) === A1 [2]) {
      ii=0;
      score = score +1 ;
    }
    else{
      S1 = prompt('Thats not true! TRY AGAIN , ' + ii + ' tries left!');
    }
  }

  if ( Number(S1) === A1 [0] ||Number(S1) === A1 [1] || Number(S1) === A1 [2]){
    alert('You are right! '+ S1 + ' is one of my favorite Numbers');
  }
  else{
    alert('Your Chances are over! the right answers are: ' + A1[0]+ ' ,' + A1 [1]+' ,'+ A1 [2]);
  }


}
qs7();

alert('Thank you '+ Q1 + ' for answering!! your score is ' + score +' /7 ! HAVE A GOOD DAY');
