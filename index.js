let homeScoreEl = document.getElementById("home-display");
let awayScoreEl = document.getElementById("away-display");
let homeScore = 0;
let awayScore = 0;
let minutes = 3;
let seconds = 05;
let sec;

if (seconds < 10) {
    sec = "0" + seconds;
}

document.getElementById("game-time-display").innerHTML =
  `${minutes}:${sec}`;
startTimer();

function homePlusOne() {
    homeScore++;
    updateHomeScore(homeScore);
}

function homePlusTwo() {
    homeScore += 2;
    updateHomeScore(homeScore);
}

function homePlusThree() {
    homeScore += 3;
    updateHomeScore(homeScore);
}

function awayPlusOne() {
    awayScore++;
    updateAwayScore(awayScore);
}

function awayPlusTwo() {
    awayScore += 2;
    updateAwayScore(awayScore);
}

function awayPlusThree() {
    awayScore += 3;
    updateAwayScore(awayScore);
}

function updateHomeScore(a) {
    if (a == 0) {
        homeScore = 0;
    } else {
        if (homeScore > awayScore) {
            homeScoreEl.textContent = a;
            homeScoreEl.style.color = "green";
        } else {
            homeScoreEl.textContent = a;
        }
    }
}

function updateAwayScore(a) {
    if (a == 0) {
        awayScore = 0;
    } else {
        if (awayScore >= homeScore) {
            awayScoreEl.textContent = a;
            homeScoreEl.style.color = "#F94F6D";
        } else {
            awayScoreEl.textContent = a;
        }
    }
}

function newGame() {
    homeScore = 0;
    awayScore = 0;
    homeScoreEl.textContent = homeScore;
    awayScoreEl.textContent = awayScore;
    homeScoreEl.style.color = "#F94F6D";
    minutes = 5;
    seconds = 0;
    sec = 0;
    document.getElementById("game-time-display").innerHTML =
  `${minutes}:${sec}`;
}