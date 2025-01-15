//4

document.addEventListener("DOMContentLoaded", () => {
    const timeInput = document.getElementById("timeInput");
    const ouptput = document.getElementById("output");
    let timerId;

    timeInput.addEventListener('input', () => {
        const time = parseInt(timeInput.value);

        clearTimeout(timerId);
        if (isNaN(time) || time <= 0){
            ouptput.textContent = 'Enter correct numbers';
            return;
        }

        ouptput.textContent = `Timer is launched. time: ${time}s`;
        timerId = setTimeout(() => {
            ouptput.textContent = 'Time out. heres your message';
        }, time*1000)
    })
})

//3
function startgame(){
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    const gameDuration = 10000;
    let gameInterval;


    function createTarget() {
        const target = document.createElement('div');
        target.className = 'target';

        const maxX = gameArea.clientWidth - 50;
        const maxY = gameArea.clientHeight - 50;
        target.style.left = `${Math.random() * maxX}px`;
        target.style.top = `${Math.random() * maxY}px`;

        target.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = `points: ${score}`
            target.remove();
        });

        gameArea.appendChild(target);

        setTimeout(() => target.remove(), 2000);
    }

    gameInterval = setInterval(createTarget, 1000);

    setTimeout(() => {
        clearInterval(gameInterval);
        gameArea.innerHTML = '';
        scoreDisplay.textContent = `Game finnished, your points: ${score}`;
    }, gameDuration);
}
startgame()

//1

const timerone = document.getElementById('timer');
let count = 0;

const messages = ["Hello!", "How are you?", "Welcome!", "Have a great day!", "Goodbye!"];

const intervalId = setInterval(() => {
    count++;
    timerone.textContent = count;

    if (count <= messages.length) {
        console.log(messages[count - 1]);
    } else {
        console.log("No more messages!");
    }

    if (count >= 5) {
        clearInterval(intervalId);
        console.log("Timer stopped.");
    }
}, 1000);

// 2
const timertwo = document.getElementById('timertwo');
let counter = 0;

const interval = setInterval(() =>{
    counter++;
    timertwo.textContent = counter;
}, 1000)

const boxes = [
    document.getElementById('box1'),
    document.getElementById('box2'),
    document.getElementById('box3')
];

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

setInterval(() => {
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColor();
    });
}, 1000);

