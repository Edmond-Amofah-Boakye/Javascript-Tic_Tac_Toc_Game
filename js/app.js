let editedPlayer = 0;

let playerDetails = [
    {
        name: "",
        Symbol: "X"
    },
    {
        name: "",
        Symbol: "O"
    }
];

let activePlayer = 0

const editBtnOne = document.getElementById("edit-btn-1");
const editBtnTwo = document.getElementById("edit-btn-2");
const closePlayer = document.getElementById("cancel-btn");
const gameStartBtn = document.getElementById("start-new-game");
const gameListElements = document.querySelectorAll("#list-wrapper li");




const gameBoard = document.getElementById("game-board");
const allOverlayOpen = document.getElementById("allOverlay");
const playerName = document.getElementById("playerName");
const errorMessage = document.getElementById("error-message");
const activePlayerName= document.getElementById("active-player-name");



// const players = document.getElementById("players");

const openOverlayForm = document.querySelector("form");


editBtnOne.addEventListener("click", openPlayerConfig);
editBtnTwo.addEventListener("click", openPlayerConfig);

closePlayer.addEventListener("click", closePlayerConfig);
allOverlayOpen.addEventListener("click", closePlayerConfig);

openOverlayForm.addEventListener("submit", savePlayerConfig);

gameStartBtn.addEventListener("click", gameBoardConfig)

for(const gameListElement of gameListElements){
    gameListElement.addEventListener("click", gameListConfig)
}




