function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running 
    audio.currentTime=0; //rewind to start so it can be played in succession
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);