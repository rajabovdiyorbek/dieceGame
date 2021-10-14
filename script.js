const rollEl = document.querySelector('.btn--roll')
const newEl = document.querySelector('.btn--new')
const holdEl = document.querySelector('.btn--hold')

const diceEl = document.querySelector('.dice')

const score1El = document.getElementById('score--1')
const score2El = document.getElementById('score--0')

const player1El = document.getElementById('name--0')
const player2El = document.getElementById('name--1')

const bgplayer1El = document.querySelector('.player--0')
const bgplayer2El = document.querySelector('.player--1')


diceEl.style = 'display: none'

let activeplayer = 0
let currentScore = 0
let totalScore = [0, 0]
let gameOver = true


rollEl.addEventListener('click', ()=>{
  if (gameOver) {
    diceEl.style = 'display: block'
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    diceEl.src = `dice-${randomNumber1}.png`
    if(randomNumber1 !== 1){
        currentScore += randomNumber1
        document.getElementById(`current--${activeplayer}`).textContent = currentScore
    }
    else{
        switchPlayer()
    }
  }
})

holdEl.addEventListener('click', ()=>{
   if(gameOver) {
    totalScore[activeplayer] += currentScore
    document.getElementById(`score--${activeplayer}`).textContent = totalScore[activeplayer]
    
    if (totalScore[activeplayer] >= 20) {
        gameOver = false
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--acitve')
    } else {
        switchPlayer()
    }
}

})

function switchPlayer() {
    document.getElementById(`current--${activeplayer}`).textContent = 0
    activeplayer = activeplayer === 0 ? 1 : 0
    currentScore = 0
    bgplayer1El.classList.toggle('player--active')
    bgplayer2El.classList.toggle('player--active')
}

newEl.addEventListener('click', ()=>{
    activeplayer = 0
    currentScore = 0
    totalScore = [0, 0]
    gameOver = true
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    // document.getElementById(`current--0}`).textContent = `0`
    // document.getElementById(`current--1}`).textContent = `0`
    score1El.textContent = 0
    score2El.textContent = 0
    diceEl.style = 'display: none'
})







