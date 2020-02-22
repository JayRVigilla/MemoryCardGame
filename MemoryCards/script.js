
// init listeners
  // wait for DOM to load
  // suppress reload clears everything - event.preventDefault() when hitting 'new game'
var first, second;
    cards = document.querySelectorAll('.card'), 
    facesF = document.querySelectorAll('.front'),
    facesB = document.querySelectorAll('.back');
window.onload = function(){

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




  function flip(){
    if (event.target.parentElement.className !== 'flipped'){
      event.target.style.opacity = '0';
      event.target.parentElement.classList.add('flipped');
    };
    if(first === undefined){
      first = event.target.parentElement;
      alert('first assigned');
    }else{
      second = event.target.parentElement;
      alert('second assigned');
      if(first.dataset.framework === second.dataset.framework){
        // remove card class, clear first and second
        first.classList.remove('card');
        second.classList.remove('card');
        alert("got there");
      }else{
        faceDown();
      }
      first = undefined;
      second = undefined;
    }
  }

  function faceDown(){
    let flipt = document.querySelectorAll('.flipped');
    
    // **2-20 problem** not trigering alert when mismatched cards nor making the back class opaque. 
    flipt.forEach(function(x){
      if(x.classList.contains('cards')){
        alert('black it out');
        x.childNodes[1].style.opacity = '1'
      }
      });
  }  

  
  }