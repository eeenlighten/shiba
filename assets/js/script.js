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

