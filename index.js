let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0



function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
    
}
function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
    
}
function increaseguestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function increaseguestScoreTwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function increaseguestScoreThree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

