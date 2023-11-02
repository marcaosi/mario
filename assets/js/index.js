const mario = document.getElementById('mario')
const pipe = document.getElementById('pipe')
const gameOver = document.getElementById('game-over')
const scoreSpan = document.getElementById('score')
var score = 0;

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    let gameover = false;
    score++;
    scoreSpan.innerText = new String(score).padStart(6, '0')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        gameover = true
    }

    if(gameover){
        clearInterval(loop)
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/img/game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '50px'

        gameOver.style.display = 'block'
        scoreSpan.classList.add('scoreGameOver')

        score = 0;
    }
    
})

document.addEventListener('keydown', jump)