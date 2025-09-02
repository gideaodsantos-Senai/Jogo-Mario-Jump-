const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe")


const jump = () => {// "=>" serve como function
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);

}

const loop = setInterval(() => {
    console.log('loop');
})

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
}