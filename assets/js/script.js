const cursor = document.querySelector('.cursor');
const audio = document.getElementById('audio_play'); 

// audio
function play() { 
    if (audio.paused) { 
        audio.play(); 
    } else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 

// cursor
window.addEventListener("mousemove", trackMovement);

function trackMovement(e) {
    e.preventDefault();
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
}

// image toggle
$("header div").click(function() {

    let musicButton = $(this).children("img");
    musicButton.attr("src", function(index, attr){
      if (attr.match('play')) {
        return attr.replace("play", "paused");
      }
      else {
        return attr.replace("paused", "play");
      }
    });
  });