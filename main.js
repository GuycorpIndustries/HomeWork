const playBtn = document.querySelector('.playBtn');
const anim = document.querySelector('.imgAnimation')
let fwd = false;

playBtn.addEventListener('click', () => {
    if (!fwd) {
        anim.classList.add('playFwd');
        fwd = true;
    } else {
        anim.classList.remove('playFwd');
        fwd = false;
    }
});
