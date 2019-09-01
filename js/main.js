var transformDom = document.getElementById("transform");
transformDom.style.webkitAnimationPlayState = "paused";
var startDom = document.getElementById("stert");
var flagStart = false;
var scoreDom = document.getElementById("Score");
var score = 0;
var timerDom = document.getElementById("timer");
var seconds = 0;
var repet = "";
var clicksDom = document.getElementById("clicks");
var clicksNum = 10;
var wrongClickDom = document.getElementById("wrongClick");
var wrong = 0;
var wrongSum = 0;
var flagClick = false;
var levelDom = document.getElementById("level");
var level = 1;
var t = 0;
var gradientDom = document.getElementById("gradient");

function clickToStart() {
    if (!flagStart) {
        startDom.innerHTML = "CLICK FOR START!";
    }
}

function down() {
    startDom.innerHTML = "CATCH ME IF YOU CEN!";
}

function startGame() {
    if (!flagStart) {
        flagStart = true;
        if (confirm("redy to start?")) {
            seconds = 10;
            transformDom.style.webkitAnimationPlayState = "running";
            repet = setInterval(() => {
                if (seconds) {
                    timerDom.innerHTML = --seconds;
                } else {
                    stopIt();
                }
            }, 1000);
        }
    }
}

function stopIt() {
    clearInterval(repet);
    flagStart = false;
    gradientDom.style.display = "block";
    gradientDom.innerHTML = `GAME OVER! \n
     your score is ${score - wrongSum}&nbsp &nbsp<i class="far fa-thumbs-down"></i>`;
    setTimeout(() => {
        gradientDom.style.display = "none";
    }, 5000);
    transformDom.style.webkitAnimationDuration = "0s";
    scoreDom.innerHTML = `${score = 0}`;
    clicksDom.innerHTML = `${clicksNum = 10}`;
    levelDom.innerHTML = `${level = 1}`;
    timerDom.innerHTML = `${seconds = 60}`;
    wrongClickDom.innerHTML = `${wrong = 0}`;
    wrongSum = 0;
}

function over() {
    if (flagStart) {
        setTimeout(() => {
            transformDom.style.left = `${Math.random() * 90}%`;
            transformDom.style.top = `${Math.random() * 90}%`;
            t = 300 - (level - 1) * 50;
        }, t);
    }
}

function clickDiv() {
    if (flagStart) {
        scoreDom.innerHTML = `${score += level * 10}`;
        clicksDom.innerHTML = --clicksNum;
        flagClick = true;
    }
    if (!clicksNum) {
        ++level;
        gradientDom.innerHTML = `<b>congratulations you move to level ${level}  <i class="far fa-grin-beam"></i></b>`;
        gradientDom.style.display = "block";
        nextLevel();
    }
}

function wrongClicks() {
    if (flagStart && !flagClick) {
        wrongSum += level;
        wrongClickDom.innerHTML = ++wrong;
    }
    flagClick = false;
}

function nextLevel() {
    setTimeout(() => {
        gradientDom.style.display = "none";
    }, 1000);
    levelDom.innerHTML = `${level}`;
    timerDom.innerHTML = seconds += 11;
    clicksDom.innerHTML = `${clicksNum += 10}`;
    transformDom.setAttribute(`style`,
        `-webkit-animation:rotate ${2 - 0.25 * (level - 1)}s linear infinite;`);
}

