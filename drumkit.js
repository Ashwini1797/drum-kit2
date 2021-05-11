var numberOfButtons = 
    document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
  .addEventListener("click", function() {
  
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
}
  
document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});
  
function sound(key) {
  switch (key) {
    case "L":
      var sound1 = new Audio("music/10.mp3");
      sound1.play();
      break;
  
    case "E":
      var sound2 = new Audio("music/2.wav");
      sound2.play();
      break;
  
    case "T":
      var sound3 = new Audio('music/3.wav');
      sound3.play();
      break;
  
    case "S":
      var sound4 = new Audio('music/6.wav');
      sound4.play();
      break;
  
    case "P":
      var sound5 = new Audio('music/5.wav');
      sound5.play();
      break;
  
    case "L":
      var sound6 = new Audio('music/9.wav');
      sound6.play();
      break;
  
    case "A":
      var sound7 = new Audio('music/7.wav');
      sound7.play();
      break;

    case "Y":
        var sound7 = new Audio('music/4.wav');
        sound7.play();
        break;
   
    default: console.log(key);
  }
}
  
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");
  
  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 100);
}