const drumButton = document.querySelectorAll(".drum");
// const audiow = new Audio("./sounds/tom-1.mp3");

const  w = new Audio("./sounds/tom-1.mp3");
const  a = new Audio("./sounds/tom-2.mp3");
const  s = new Audio("./sounds/tom-3.mp3");
const  d = new Audio("./sounds/tom-4.mp3");
const  j = new Audio("./sounds/snare.mp3");
const  k = new Audio("./sounds/crash.mp3");
const  l = new Audio("./sounds/kick-bass.mp3");

//mouseclick
for (let i = 0; i < drumButton.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function() {
    drumKit(this.innerHTML);
    buttonAnimation(this.innerHTML)
  })
}

// keypress
 document.addEventListener('keypress', function(event) {
  drumKit(event.key);
  buttonAnimation(event.key);
 })



//main logic
 function drumKit (key) {
  switch(key) {
    case 'w':
      w.play();
      w.currentTime=0;
      break;
  
    case 'a':
      a.play();
      a.currentTime=0;
      break;
  
    case 's':
      s.play();
      s.currentTime=0;
      break;
  
    case 'd':
      d.play();
      d.currentTime=0;
      break;
  
    case 'j':
      j.play();
      j.currentTime=0;
      break;
  
    case 'k':
      k.play();
      k.currentTime=0;
      break;
  
    case 'l':
      l.play();
      l.currentTime=0;
      break;
  
    default:
    document.querySelector(".title").innerHTML = "Error!"
    setTimeout(function(){
      document.querySelector(".title").innerHTML = "Drum 🥁 Kit"
    }, 300)
      break;
    }
 }

 function buttonAnimation (currentKey) {
  let animation = document.querySelector(`.${currentKey}`);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed")
  }, 150)
 }