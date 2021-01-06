const playBtn = document.querySelector('.playBtn');
const rwdBtn = document.querySelector('.rwdBtn')
const anim = document.querySelector('.imgAnimation');
const stopBtn = document.querySelector('.stopBtn')
let fwd = false;
let rwd = false;
let paused = false;

playBtn.addEventListener('click', () => {
    if (!fwd) {
        anim.classList.add('playFwd');
        anim.classList.remove('playRwd');
        fwd = true;
    } else {
        anim.classList.remove('playFwd');
        fwd = false;
    }
});

rwdBtn.addEventListener('click', () => {
    if (!rwd) {
        anim.classList.add('playRwd');
        anim.classList.remove('playFwd');
        rwd = true;
    } else {
        anim.classList.remove('playRwd');
        rwd = false;
    }
});

stopBtn.addEventListener('click', () => {
    if (!paused){
        anim.classList.add('pause');
        stopBtn.classList.add('pause');
        paused = true;
    } else {
        anim.classList.remove('pause');
        stopBtn.classList.remove('pause');
        paused = false;
    }
});

