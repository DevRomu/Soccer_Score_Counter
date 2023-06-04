
///Home Button Functions 
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

///Away Button Functions 
let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayScoreBtnTwo = document.getElementById("away-score-btn-2")
let awayScoreBtnThree = document.getElementById("away-score-btn-3")
let awayStoreEl = document.getElementById("away-score")
let awayScore = 0

/// Scoreboard Home
function scoreBoardOne(){
    homeScore += 1 
    homeStoreEl.textContent = homeScore;
}

function scoreBoardTwo(){ 
     homeScore = homeScore + 2
     homeStoreEl.textContent = homeScore;
}

function scoreBoardThree(){ 
     homeScore = homeScore + 3
     homeStoreEl.textContent = homeScore;
}

/// Scoreboard Away
function scoreBoardOneAway(){
    awayScore += 1
    awayStoreEl.textContent = awayScore;
}

function scoreBoardTwoAway(){
    awayScore = awayScore + 2 
    awayStoreEl.textContent = awayScore; 
}

function scoreBoardThreeAway(){
    awayScore = awayScore + 3
    awayStoreEl.textContent = awayScore;
}