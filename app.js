var scores,roundscore,activepalyer,dice,gameplaying;
init();
function init(){
scores=[0,0,0];
roundscore=0;
activepalyer=0;
gameplaying=true;

/*

document.querySelector('#current-'+activepalyer).textContent=dice;
var x=document.querySelector('#score-'+activepalyer).textContent;

function btn(){

}
btn();
*/
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-2').textContent='0';
document.getElementById('current-2').textContent='0';
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-2-panel').classList.remove('active');
}

document.querySelector('.btn-roll').addEventListener('click',function(){
//Anonymous call else we can use just name of the function(eg:btn) instead of function()
if(gameplaying){
//1.Random Number 

var dice=Math.floor(Math.random()*6 +1)
//2.dispay the result

var diceDom=document.querySelector('.dice');
diceDom.style.display="block";
diceDom.src='dice-'+dice+'.png';

//3.update the round score only if the number is not 1 and then it is next players turn
if(dice!==1){
// add the score
roundscore+=dice;
document.querySelector('#current-'+activepalyer).textContent=roundscore;


}else{
    //next player turn
   nextplayer();

   // document.querySelector('.player-0-panel').classList.remove('active');
  //  document.querySelector('.player-1-panel').classList.add('active');

   
}}


});

document.querySelector('.btn-hold').addEventListener('click', function(){
//1.add current score to global score
if(gameplaying){
scores[activepalyer]+=roundscore;
//2.update the ui
document.querySelector('#score-'+activepalyer).textContent=scores[activepalyer];

//3.check if player one the game
if(scores[activepalyer]>=20){
    document.querySelector('#name-'+activepalyer).textContent='won';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activepalyer+'-panel').classList.add('.winner');
    document.querySelector('.player-'+activepalyer+'-panel').classList.remove('active');
    gameplaying=false;
}
else{
    nextplayer();
}
}
});
function nextplayer(){
   if(activepalyer===0){
    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.add('active');

       activepalyer=1;
   }
   else if(activepalyer===1){
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-2-panel').classList.add('active');

       activepalyer=2;
          }
   else{
    document.querySelector('.player-2-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

       activepalyer=0;
   }
    roundscore=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('current-2').textContent=0;

  // document.querySelector('.player-0-panel').classList.toggle('active');
 //  document.querySelector('.player-1-panel').classList.toggle('active');
//document.querySelector('.player-2-panel').classList.toggle('active');

document.querySelector('.dice').style.display='none';
 

}
document.querySelector('.btn-new').addEventListener('click',function(){
    
init();
});

