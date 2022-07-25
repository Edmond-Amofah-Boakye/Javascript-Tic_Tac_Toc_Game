function gameBoardConfig() {
  if( playerDetails[0].name === "" ||  playerDetails[1].name === ""){
    alert("Enter Valif User Name!!!")
    return
  }

  gameBoard.style.display = "block";
  activePlayerName.textContent = playerDetails[activePlayer].name;
}



function openPlayerConfig(e) {
  openOverlayForm.style.display = "block";
  allOverlayOpen.style.display = "block";
  editedPlayer =  +e.target.dataset.playerid; //editedPlayer =  +e.target.dataset["playerid"]; since dataset is an object
}

function closePlayerConfig() {
  openOverlayForm.style.display = "none";
  allOverlayOpen.style.display = "none"; 
  playerName.value = ""
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); //This is an object blue print which is abuilt in function.
  const enteredValue = formData.get("player-name").trim();


  if (!enteredValue){// enteredValue === ""
    errorMessage.textContent = "Enter A User Name";
    // playerName.classList.add("forminfo-input")
    return;
  }

  const updatedPlayerDataElement = document.querySelector(`.player-${editedPlayer}`);
  updatedPlayerDataElement.children[1].textContent = enteredValue;

  if(editedPlayer === 1){
    playerDetails[0].name = enteredValue;
  }else{
    playerDetails[1].name = enteredValue;
  }

  closePlayerConfig()
  // playerDetails[editedPlayer - 1].name = enteredValue;

} 

function activePlayerSwitch() {
  if(activePlayer === 0){
    activePlayer = 1
  }else{
    activePlayer = 0
  }
}

function gameListConfig(event) {
  event.target.textContent = playerDetails[activePlayer].Symbol
  event.target.classList.add("disabled")

  activePlayerSwitch()

  activePlayerName.textContent = playerDetails[activePlayer].name;
}
