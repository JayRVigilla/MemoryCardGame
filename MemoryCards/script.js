// init listeners
  // wait for DOM to load
  // suppress reload clears everything - event.preventDefault() when hitting 'new game'
window.onload = function(){

var ext = 'my-icons-collection/png/',  

    deck = [ext+'001-cleaver.png', ext+'002-chef.png', ext+'003-spatula.png', ext+'004-oven.png', ext+'006-cook.png', 
    ext+'007-apron.png', ext+'011-cold.png', ext+'012-kitchen-1.png', ext+'001-cleaver.png', ext+'002-chef.png', ext+'003-spatula.png', 
    ext+'004-oven.png', ext+'006-cook.png', ext+'007-apron.png', ext+'011-cold.png', ext+'012-kitchen-1.png'];

function shuffleNewGame() {
    // function to shuffle deck and 'deal'/itterate face values into class=front
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    var facesF = document.querySelectorAll(".front"),
        facesB = document.querySelectorAll(".back");
        facesF.forEach((a,i) =>{
          a.src = deck[i];
        });
        // if class=back then back is visible
        facesB.forEach(a => {
          a.style.opacity = "1";
        });
    // flipped === undefined for all 'cards'/divs
    }

function select(){
  // hover over card -> if class=back && flipped=false then shrink to 85%
  document.getElementsByClassName('back').style.
}
  

// flip()
    // onclick -> if class!==matched THEN class=back goes transparent, class=front goes visible, hand.push(frontImgFileName)

//  check() - checks cards for match
    // var hand = []
    // IF hand.length==2 && hand.every()===false THEN all cards where class!==mathced -> back=visible, hand=[]
    // IF hand.length==2 && hand.every()===true THEN add class MATCHED to the targets in hand
    shuffleNewGame();


  }
