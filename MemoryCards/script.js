// Requirements

// User should be able to start a new game.
// Clicking a card should reveal what’s underneath it. The game should keep track and display the number of times cards have been turned over.
// Users should only be able to see at most two cards at a time.
// Clicking on two matching cards should be a “match” — those cards should stay face up. (Make sure this works only if you click on two different cards — clicking the same card twice shouldn’t count as a match!)
// When clicking two cards that are not a match, they should stay turned over for at least 1 second before they flip over again
// (Bonus) Store the lowest-scoring game in local storage, so that players can see a record of the best game played.
// You can find a 30 second video demo of a possible solution here

// Only use vanilla JavaScript only: no frameworks/third-party libraries.

// How to Submit: Email a link to your memory game and a link to the GitHub repository for your game to admissions@rithmschool.com.
// init listeners
  // wait for DOM to load
  // suppress reload clears everything - event.preventDefault() when hitting 'new game'
var first, second;
    cards = document.querySelectorAll('.card'), 
    facesF = document.querySelectorAll('.front'),
    facesB = document.querySelectorAll('.back'),
    turns = 0;
    flipped = document.querySelectorAll('.flipped');


window.onload = function(){
  // Shuffle function assigns flexbox order based on Math.random * cards.length;
  shuffle();

  // hover over card -> if class=back && flipped=false then shrink to 95%
  facesB.forEach(a => a.addEventListener('mouseover', function(){
    event.target.style.transform = 'scale(.95)';
    }
  ));

  facesB.forEach(a => a.addEventListener('mouseout', function(){
    event.target.style.transform = 'scale(1)';
    }
  ));

// onclick -> if class!==matched THEN class=back goes transparent, class=front goes visible, hand.push(frontImgFileName)
  facesB.forEach(a=> a.addEventListener("click", flip));

// New Game Button shuffles new game
document.getElementById('newgame').addEventListener('click', function(){
  cleared();
  faceDown();
  shuffle();
  turns = 0;
  document.getElementById('counter').innerHTML = turns.toString();
});
  function shuffle(){
    cards.forEach(card =>{
      card.lastChild.style.opacity = '1';
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
      })
  }

function cleared(){
  first = undefined;
  second = undefined;
}


function faceDown(){
  let flipt = document.querySelectorAll('.flipped');
    flipt.forEach(function(a){
      if(a.classList.contains('card')){
        // add timer so that player can see the second card before flipping over
        setTimeout(function(){a.lastChild.style.opacity = '1'},1000);
      }});
    flipt.forEach(c => c.classList.remove('flipped'));
    };


  function flip(){ // ** PROBLEM ** can quickly click on three cards, need to see no more than two
    if (!event.target.parentElement.classList.contains('flipped') || second === undefined){
      event.target.style.opacity = '0';
      event.target.parentElement.classList.add('flipped');
      turns += 1;
      document.getElementById('counter').innerHTML = turns.toString();
    }
    if(first === undefined){
      first = event.target.parentElement;
    }
    if (event.target.parentElement === first){
        return; 
      }
    second = event.target.parentElement;
    first.dataset.framework === second.dataset.framework ? [first, second].forEach(s => s.classList.remove('card')) : faceDown();
    cleared();
    }
  }    