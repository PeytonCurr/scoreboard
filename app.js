// definitions
let homeScore = 0
let awayScore = 0

function reset() {
    homeScore = 0
    awayScore = 0
    draw()
}

function increaseHome() {
    homeScore += 1;
    draw()
}

function increaseAway() {
    awayScore += 1;
    draw()
}

function draw() {
    let homeCount = document.getElementById(`home-count`)
    homeCount.innerText = homeScore
    let awayCount = document.getElementById(`away-count`)
    awayCount.innerText = awayScore
}