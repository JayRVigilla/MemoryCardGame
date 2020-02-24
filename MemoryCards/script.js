
// init listeners
  // wait for DOM to load
  // suppress reload clears everything - event.preventDefault() when hitting 'new game'
var first, second;
    cards = document.querySelectorAll('.card'), 
    facesF = document.querySelectorAll('.front'),
    facesB = document.querySelectorAll('.back')
    flipped = document.querySelectorAll('.flipped');


window.onload = function(){
  // Shuffle function assigns flexbox order based on Math.random * cards.length;
  function shuffle(){
    cards.forEach(card =>{
      card.lastChild.style.opacity = '1';
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
      })
  }

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
// ** PROBLEM BUTTON DOESN'T RESTART AND SHUFFLE GAME**
document.addEventListener(document.getElementsByTagName('button'), function(){
  faceDown();
  shuffle();
});

function faceDown(){
  let flipt = document.querySelectorAll('.flipped');
    flipt.forEach(function(a){
      if(a.classList.contains('card')){
        // add timer so that player can see the second card before flipping over
        setTimeout(function(){a.lastChild.style.opacity = '1'},500);
      }});
    flipt.forEach(c => c.classList.remove('flipped'));
    };

  function flip(){
    if (!event.target.parentElement.classList.contains('flipped')){
      event.target.style.opacity = '0';
      event.target.parentElement.classList.add('flipped');
    }
    if(first === undefined){
      first = event.target.parentElement;
    }
    if (event.target.parentElement === first){
        return; 
      }
    second = event.target.parentElement;
    first.dataset.framework === second.dataset.framework ? [first, second].forEach(s => s.classList.remove('card')) : faceDown();
    first = undefined;
    second = undefined;
    }
    if(cards.length === 0){
    alert("Congratulations! You've matched them all!!")
    }  

  // score keeper?
  // timer under condition to start on shuffle and end when cards.length === 0
  
  }    