const fwdBtn = document.querySelector('.fwdBtn');
const rwdBtn = document.querySelector('.rwdBtn')
const anim = document.querySelector('.imgAnimation');
const pauseBtn = document.querySelector('.pauseBtn');
const stopBtn = document.querySelector('.stopBtn')
const fwdActive = document.querySelector('.fwdActive')
const rwdActive = document.querySelector('.rwdActive')

let fwd = false;
let rwd = false;
let paused = false;
let stopped = false;
let fwdBtnActive = false;
let rwdBtnActive = false;

fwdBtn.addEventListener('click', () => {
    if (!fwd) {
        anim.classList.add('playFwd');
        anim.classList.remove('playRwd');
        fwdActive.classList.add('fwd');
        rwdActive.classList.remove('rwd');
        fwd = true;
        rwd = false;
        fwdBtnActive = true;
    } else {
        
        fwd = false;
        fwdBtnActive = false;
    }
});

rwdBtn.addEventListener('click', () => {
    if (!rwd) {
        anim.classList.add('playRwd');
        anim.classList.remove('playFwd');
        rwdActive.classList.add('rwd')
        fwdActive.classList.remove('fwd')
        rwd = true;
        fwd = false;
    } else {
        rwd = false;
        rwdBtnActive = false;
    }
});

pauseBtn.addEventListener('click', () => {
    if (!paused){
        anim.classList.add('pause');
        pauseBtn.classList.add('pause');
        paused = true;
    } else {
        anim.classList.remove('pause');
        pauseBtn.classList.remove('pause');
        paused = false;
    }
});

stopBtn.addEventListener('click', () => {
    if (!stopped || rwd || fwd || paused) {
        anim.classList.remove('pause');
        anim.classList.remove('playFwd');
        anim.classList.remove('playRwd');
        pauseBtn.classList.remove('pause');
        fwdActive.classList.remove('fwd');
        rwdActive.classList.remove('rwd');
        stopped = true;
    } else {
        stopped = false;
    }
});

// Slider 

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#nextBtn');
const prev = document.querySelector('#prevBtn');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Image Gallery 

const currentImg = document.querySelector('#currentImg');
const galleryGrid = document.querySelectorAll('.galleryGrid img');
const opacity = 0.6;
// Destructuring Code for 1 line Variables

// const [currentImg, galleryGrid] = [document.querySelector('#currentImg'),document.querySelectorAll('.galleryGrid img')];

//galleryGrid.forEach(img => img.addEventListener('click', (e) => currentImg.src = e.target.src));

galleryGrid[0].style.opacity = opacity

galleryGrid.forEach(img => img.addEventListener('click', galleryClick));

function galleryClick(e) {
    galleryGrid.forEach(img => (img.style.opacity = 1));
    currentImg.src = e.target.src;
    currentImg.classList.add('fadeIn');
    setTimeout(() => currentImg.classList.remove('fadeIn'), 500);
    e.target.style.opacity = opacity;
}


// Product Gallery

const productImgs = document.getElementsByClassName('productImg');
const activeProduct = document.getElementsByClassName('activeProduct');


for (var i=0; i < productImgs.length; i++){
    productImgs[i].addEventListener('mouseover', function () {
       if (activeProduct.length > 0){
            activeProduct[0].classList.remove('activeProduct')
        }

        this.classList.add('activeProduct');
        document.getElementById('productFeature').src = this.src;
    })
}

const buttonLeft = document.getElementById('btnL');
const buttonRight = document.getElementById('btnR');

buttonLeft.addEventListener('click', function(){
    document.getElementById('productImgs').scrollLeft -= 160
})

buttonRight.addEventListener('click', function () {
    document.getElementById('productImgs').scrollLeft += 160
    
})