const cards = document.querySelectorAll('.game__card');
const yourName = document.querySelector('.name');
const restart = document.querySelector('.init__img');
const total = document.querySelector('.total');
const button =document.querySelector('.button');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal__window');
const input = document.querySelector('.input');
const totalModal = document.querySelector('.modal__window .total')
const clean = document.querySelector('.clean')
const body = document.querySelector('body')

const dataName = document.querySelectorAll('div[data-name="name"]')
const dataTotal = document.querySelectorAll('div[data-total="total"]')
const dataTime = document.querySelectorAll('div[data-time="time"]')

clean.addEventListener('click', cleanLocalSorage)

function cleanLocalSorage() {
    localStorage.clear()
    updateTable()
}

// optimization

function optimize() {
    overlay.style.display = 'none';
    modal.style.display = 'none';

    cards.forEach(item => item.addEventListener('click', flipCard));
    shuffle()
    closeAllCards()
    
    yourName.removeAttribute("disabled", "disabled")

    count = 0;
    total.textContent = 0;
    array.forEach(item => item.style.opacity = "1")
    array = []
}

input.addEventListener('keydown', function(e) {
    if(e.key == "Enter") {
        optimize()
        writeName()
    }
})

button.addEventListener('click', function() {
    optimize()
    writeName()
})


//restart 
restart.addEventListener('click', function() {
    optimize()

    if (yourName.value == '') {
        yourName.value = yourName.placeholder
    }
    yourName.placeholder = yourName.value
})

function writeName() {
    if (input.value == ''){
        yourName.value = input.placeholder
    } else {
        yourName.value = input.value
        yourName.placeholder = input.value;
    }
}

// close all cards
function closeAllCards () {
    cards.forEach(item => {
        item.classList.remove('flip')
        item.style.opacity = 1
    });
    resetBoard();
}

// count score
let count = 0
function countScore () {
    count += 1
    total.textContent = count
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

cards.forEach(item => item.addEventListener('click', flipCard));


function flipCard() {
    yourName.setAttribute("disabled", "disabled")
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        countScore ()
        return
    }
    secondCard = this;
    checkForMatch();
    countScore ();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatch 
        ? disableCards() 
        : unflipCards();
    }

let array = []

function disableCards() {
        
       firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
       setTimeout(() => {
        array.push(firstCard.querySelector('.front-face'));
        array.push(secondCard.querySelector('.front-face'));
        array.forEach(item => item.style.opacity = "0.5");
        if (array.length == cards.length) {
            showResult()
            addResult()
            closeAllCards()
        }
        resetBoard();
    }, 100);
}

function showResult() {
    overlay.style.display = 'block';
    modal.style.display = 'flex';
    totalModal.textContent = total.textContent;
    input.value = yourName.value
}

function addResult() {
    getDate()
    for (let i = 9; i > 0; i--) {
        localStorage.setItem(`name${i}`, dataName[i-1].textContent)
        localStorage.setItem(`total${i}`, dataTotal[i-1].textContent )
        localStorage.setItem(`data${i}`, dataTime[i-1].textContent )
        dataName[i].textContent = localStorage.getItem(`name${i}`)
        dataTotal[i].textContent = localStorage.getItem(`total${i}`)
        dataTime[i].textContent = localStorage.getItem(`data${i}`) 
    }
        localStorage.setItem(`name0`,  total.textContent);
        localStorage.setItem(`total0`, yourName.value );
        localStorage.setItem(`data0`, getDate() )
        dataTotal[0].textContent = localStorage.getItem(`name0`);
        dataName[0].textContent = localStorage.getItem(`total0`);
        dataTime[0].textContent = localStorage.getItem(`data0`);
}

function updateTable() {
    for (let i = 9; i > 0; i--) {
        dataName[i].textContent = localStorage.getItem(`name${i}`)
        dataTotal[i].textContent = localStorage.getItem(`total${i}`)
        dataTime[i].textContent = localStorage.getItem(`data${i}`) 
    }
        dataTotal[0].textContent = localStorage.getItem(`name0`);
        dataName[0].textContent = localStorage.getItem(`total0`);
        dataTime[0].textContent = localStorage.getItem(`data0`);
}

updateTable()

function getDate() {
    let data = new Date();
    let hour = data.getHours() < 10 ? "0" + data.getHours(): data.getHours();
    let minute = data.getMinutes() < 10 ? "0" + data.getMinutes(): data.getMinutes();
    let second = data.getSeconds() < 10 ? "0" + data.getSeconds(): data.getSeconds();
    let day = data.getDate() < 10 ? "0" + data.getDate(): data.getDate();
    let month = data.getMonth() < 10 ? "0" + (1 + data.getMonth()): 1 + data.getMonth();
    let year = data.getFullYear()

    return currentData = `${hour}:${minute}:${second} ${day}.${month}.${year}`
}

function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// randomizer
function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  }
  let random = shuffle
  random()


