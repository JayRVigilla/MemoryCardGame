
// init listeners
  // wait for DOM to load
  // suppress reload clears everything - event.preventDefault() when hitting 'new game'
var first, second;
    cards = document.querySelectorAll('.card'), 
    facesF = document.querySelectorAll('.front'),
    facesB = document.querySelectorAll('.back'),
    flipt = document.querySelectorAll('.flipped');


window.onload = function(){

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
document.addEventListener(document.getElementById('newgame'), shuffle);

// ** PROBLEM ** Match test not working since moving cards out of 4 div rows with 4 div cards inside
  function flip(){
    if (event.target.parentElement.className !== 'flipped'){
      event.target.style.opacity = '0';
      event.target.parentElement.classList.add('flipped');
    };
    if(first === undefined){
      first = event.target;
    }else{
      if (event.target === first){
        return;
      }
      second = event.target;
      // MATCH!!!
      if(first.dataset.framework === second.dataset.framework){
        // remove card class, clear first and second
        first.classList.remove('card');
        second.classList.remove('card');
        // ** all matched test not triggering **
        // if(flipt.length === 16){
        //   alert("Congratulations! You've matched them all!!")
        //   } 
      // Mismatch :( flip cards back over     
      }else{
        faceDown();
      }
      first = undefined;
      second = undefined;
    }
    if(cards.length === 0){
    alert("Congratulations! You've matched them all!!")
    }  
  }

  function faceDown(){
    flipt.forEach(function(x){
      if(x.classList.contains('card')){
        alert('boobs');
        // add timer so that player can see the second card before flipping over
        x.childNodes[1].style.opacity = '1';
      }
      });
  }  

  // Shuffle function assigns flexbox order based on Math.random * cards.length;
  function shuffle(){
    cards.forEach(card=>{
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
    }
      )
  }
  // score keeper?
  // timer under condition to start on shuffle and end when cards.length === 0
  
  }