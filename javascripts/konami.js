// a key map of allowed keys
var allowedKeys = {
  67: 'c',
  69: 'e',
  83: 's',
  66: 'b',
  73: 'i',
  84: 't'
};

// the 'official' Konami Code sequence
var konamiCode = ['e', 'e', 'c', 's', 'b', 'i', 't'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length)
      activateCheats();
  } else
    konamiCodePosition = 0;
});

function activateCheats() {
  document.body.style.backgroundImage = "url('images/james.jpg')";

  var audio = new Audio('audio/barbie.mp3');
  audio.play();

  alert("Throughout this project, Paul and James have constantly made jokes and bits. Here's a picture of James stripping in EECS - Vikram");
}