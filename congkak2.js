// index 0 ~ 6: p1's houses
// index 7 ~ 13: p2's houses
var houses = initHouses();

function initHouses() {
  var houses = [];
  for (var i = 0; i < 14; i++) {
    houses.push(7);
  }
  return houses;
}

var playersScore = [0, 0];

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

// enabling and disabling the selection of houses
// by changing the value of elements' onclick attribute
function selectHouse(enable) {
  const p1_houses = document.querySelectorAll(".p1-houses");
  const p2_houses = document.querySelectorAll(".p2-houses");
  //var set_value = (enable) ? getClickedHouse : "null";
  var set_value = (enable) ? round : "null";
  for (var i = 0; i < p1_houses.length; i++) {
    p1_houses[i].onclick = set_value;
    p2_houses[i].onclick = set_value;
  }
}

function game() {
  var totalMarble = sum_array(houses);
  var currentPlayer = 1; // Player 1 goes first
  var startIndex;
  // while loop

  console.log(totalMarble);
  updateGameMessage(`Player ${currentPlayer}'s Turn.\nPick a house to start.`);
  // pick 1 house to start
  selectHouse(true);
  console.log(startIndex);
  //startIndex = getClickedHouse(); // add condition for players, p1 or p2
  selectHouse(false);
  // distribute marbles
  var endStatus = distribute(currentPlayer, startIndex);
  // count how many marbles left in houses
  totalMarble = sum_array(houses);
  // check to end turn conditions
  if (endTurn(currentPlayer, endStatus)) {
    // switch player
    (function() {
      currentPlayer = (currentPlayer === 1) ? 2 : 1;
    }())
  }
  // game ends
  // announcement of results
  var msg = `Scores:\nPlayer 1: ${playersScore[0]}\tPlayer 2: ${playersScore[1]}`;
  if (playersScore[0] > playersScore[1]) {
    msg += "\nPlayer 1 wins!";
  } else if (playersScore[0] < playersScore[1]) {
    msg += "\nPlayer 2 wins!";
  } else {
    msg += "\nIt's a draw!";
  }
  updateGameMessage(msg);
}

function distribute(currentPlayer, currentIndex) {
  var marblesInHand = houses[currentIndex];
  houses[currentIndex] = 0;
  console.log(typeof currentIndex);
  console.log("currentIndex:", currentIndex);
  currentIndex = (currentIndex === 13) ? 0 : currentIndex;
  console.log("currentIndex:", currentIndex);
  while (marblesInHand > 0) {
    //console.log(marblesInHand);
    switch (currentPlayer) {
      case 1:
        if ((currentIndex === 6) && (marblesInHand >= 1)) {
          playersScore[0] += 1;
          marblesInHand--;
          currentIndex++;
        } else if (currentIndex === 13) {
          currentIndex = 0;
          updatePlayground();
          continue;
        }
        break;
      case 2:
        if ((currentIndex === 13) && (marblesInHand >= 1)) {
          playersScore[1] += 1;
          marblesInHand--;
          currentIndex = 0;
          updatePlayground();
          continue;
        }
        break;
      default:
        console.log("Nope");
    }
    //currentIndex++;
    houses[currentIndex] += 1;
    //console.log(houses, playersScore);
    updatePlayground();
    marblesInHand--;
  }
  var endIndex = currentIndex;
  console.log(endIndex);
  return [endIndex, houses[endIndex]];
}

function endTurn(currentPlayer ,endStatus) {
  switch (currentPlayer) {
    case 1:
        if (endStatus[0] === 7) {
          return false;
        } else if (endStatus[0] <= 6) {
          return true;
        } else {
          return true;
        }
      break;
    case 2:
      if (endStatus[0] === 0) {
        return false
      } else if (endStatus[0] >= 7) {
        return true;
      } else {
        return true;
      }
      break;
    default:
      console.log("Nope");
  }
}

function updateGameMessage(msg) {
    const gameMsg = document.querySelector('.game-msg');
    gameMsg.innerText = msg;
}

// called when one of the houses is clicked
// need access to variable, currentPlayer
function round() {
  const clickedElement = event.target;
  if ((clickedElement.classList.contains("p1-houses")) || (clickedElement.classList.contains("p2-houses"))) {
    var startIndex = parseInt(clickedElement.id);
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