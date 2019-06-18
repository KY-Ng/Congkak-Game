// index 0 ~ 6: p1's houses
// index 7 ~ 13: p2's houses
var houses = initHouses();
var playersScore = [0, 0];
var currentPlayer = 1; // Player 1 goes first
//var currentPlayer = 2; // test Player 2

// TODO: change "currentPlayer" to "player" in all function to avoid confusion
// unless an expression is used to change the value of currentPlayer (global var)

function initHouses() {
  var houses = [];
  for (var i = 0; i < 14; i++) {
    houses.push(7);
  }
  return houses;
}

function updatePlayground() {
  const p1_houses = document.querySelectorAll(".p1-houses");
  const p2_houses = document.querySelectorAll(".p2-houses");
  const p1_storage = document.querySelector(".p1-storage");
  const p2_storage = document.querySelector(".p2-storage");
  for (var i = 0; i < p1_houses.length; i++) {
    p1_houses[i].innerText = houses[i];
    p2_houses[i].innerText = houses[13-i];
  }
  p1_storage.innerText = playersScore[0];
  p2_storage.innerText = playersScore[1];
}

function updateGameMessage(msg) {
    const gameMsg = document.querySelector('.game-msg');
    gameMsg.innerText = msg;
}


function start() {
  const startbutton = document.querySelector(".start-btn");
  const gameMsg = document.querySelector(".game-msg");
  startbutton.classList.toggle("hide") // hide start button
  updateGameMessage("\n"); // hide game messages
  game(currentPlayer);
}

function game(player) {
  if (sum_array(houses) === 0) {
    // game end
    var msg = `Scores:\nPlayer 1: ${playersScore[0]}\tPlayer 2: ${playersScore[1]}`;
    if (playersScore[0] > playersScore[1]) {
      msg += "\nPlayer 1 wins!";
    } else if (playersScore[0] < playersScore[1]) {
      msg += "\nPlayer 2 wins!";
    } else {
      msg += "\nIt's a draw!";
    }
    updateGameMessage(msg);
    selectHouse(false, player);
  } else {
    updateGameMessage(`Player ${player}'s turn.\nPick a non-empty house to start.`);
    selectHouse(true, player);
  }
}

// called when one of the houses is clicked
// need access to variable, currentPlayer
function round() {
  const clickedElement = event.target;
  if ((clickedElement.classList.contains("p1-houses")) || (clickedElement.classList.contains("p2-houses"))) {
    var startIndex = parseInt(clickedElement.id);
    //console.log(startIndex);
  }
  selectHouse(false, currentPlayer);
  currentPlayer = distributionLoop(currentPlayer, startIndex);
  /*
  var endStatus = distribute(currentPlayer, startIndex);
  //console.log(endStatus);
  if (endTurn(endStatus, currentPlayer)) {
  const endIndex = endStatus[1];
  // take away all marbles in opposite house if last marble stop at one of own houses that is empty
  if (houses[endIndex] === 1) {absorbMarble(endIndex, currentPlayer);}
  // switch player
  currentPlayer = (currentPlayer === 1) ? 2 : 1;
  }
  */
  game(currentPlayer);
}

// enabling and disabling the selection of houses
// by changing the value of elements' onclick attribute
function selectHouse(enable, player) {
  var target_houses = (player === 1) ? ".p1-houses" : ".p2-houses";
  const enable_houses = document.querySelectorAll(target_houses);
  //const p2_houses = document.querySelectorAll(".p2-houses");
  if (enable) {
    for (var i = 0; i < enable_houses.length; i++) {
      enable_houses[i].onclick = (enable_houses[i].innerText !== "0") ? round : "null";
    }
  } else {
    for (var i = 0; i < enable_houses.length; i++) {enable_houses[i].onclick = "null";}
  }
}

// if currentPlayer's turn does not end after 1 distribution,
// start distribution again with marbles in current house regardless of who owns that house
function distributionLoop(player, startIndex) {
  console.log(houses, startIndex);
  var endStatus = distribute(player, startIndex)
  //console.log(endStatus);
  const endIndex = endStatus[1];
  console.log(endTurn(endStatus, player));
  if (endTurn(endStatus, player)) {
    // take away all marbles in opposite house if last marble stop at one of own houses that is empty
    if ((houses[endIndex] === 1) && (houses[13-endIndex] !== 0)) {absorbMarble(endIndex, player);}
    console.log(`Player ${player}'s turn ends!'`);
    // switch player
    return (player === 1) ? 2 : 1;
  } else if (!endStatus[0]) {
    console.log("repeat:", player);
    return distributionLoop(player, endIndex);
  } else {
    return player;
  }
}

// distribute every marbles in current house one by one into consequence houses
// add 1 marble into own storage if pass through
function distribute(player, currentIndex) {
  //console.log(currentPlayer, currentIndex);
  var marblesInHand = houses[currentIndex];
  var stop_at_storage = false;
  //console.log(marblesInHand);
  houses[currentIndex] = 0;
  for (var i=0; i<marblesInHand; i++) {
    //console.log(i);
    currentIndex = (currentIndex+1)%14;
    switch (player) {
      case 1:
        if (currentIndex === 7) { // add to storage even when startIndex = 6 (currentIndex is updated at the begining of for loop)
          if (i+1 === marblesInHand) {stop_at_storage = true;} // the last marble is in storage
          playersScore[0]++;
          if (i+1 < marblesInHand) {houses[currentIndex]++;} // add to house next to storage if this is not the last iteration
          i++; // reduce 1 iteration as 1 marble is put in storage
          continue;
        }
        break;
      case 2:
        if (currentIndex === 0) { // add to storage even when startIndex = 13 (currentIndex is updated at the begining of for loop)
          if (i+1 === marblesInHand) {stop_at_storage = true;}
          playersScore[1]++;
          if (i+1 < marblesInHand) {houses[currentIndex]++;} // add to house next to storage if this is not the last iteration
          i++; // reduce 1 iteration as 1 marble is put in storage
          continue;
        }
        break;
    }
    houses[currentIndex]++;
  }
  updatePlayground();
  return [stop_at_storage, currentIndex];
}

// return true when currentPlayer's turn ends
// condition: when the last marble doesn not stop at in storage
function endTurn(endStatus, player) {
  var playerhouseEmpty = false;
  switch (player) {
    case 1:
      playerhouseEmpty = (sum_array(houses.slice(0, 6)) === 0) ? true : false;
      break;
    case 2:
      playerhouseEmpty = (sum_array(houses.slice(7, 13)) === 0) ? true : false;
      break;
  }
  return (playerhouseEmpty || ((!endStatus[0]) && (houses[endStatus[1]] === 1)));
}

function absorbMarble(endIndex, player) {
  switch (player) {
    case 1:
    if (endIndex <= 6) {
      // absorb marbles in opposite house
      playersScore[0] += houses[endIndex] + houses[13-endIndex];
      houses[endIndex] = 0;
      houses[13-endIndex] = 0;
      updatePlayground();
    }
    break;
    case 2:
    if (endIndex >= 7) {
      // absorb marbles in opposite house
      playersScore[1] += houses[endIndex] + houses[13-endIndex];
      houses[endIndex] = 0;
      houses[13-endIndex] = 0;
      updatePlayground();
    }
    break;
  }
}

// Helper Function
function sum_array(A) {
  var sum = 0;
  for (var i=0; i<A.length; i++) {
    sum += A[i];
  }
  return sum;
}

function getClickedElement() {
  document.addEventListener('click', event => {
    //console.log(event.target);
    return event.target;
})}