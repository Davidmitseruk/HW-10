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
