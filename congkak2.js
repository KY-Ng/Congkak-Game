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
    p2_houses[i].innerText = houses[i+7];
  }
  p1_storage.innerText = playersScore[0];
  p2_storage.innerText = playersScore[1];
}

function game() {
  var totalMarble = sum_array(houses);

  // while loop

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

function distribute(currentPlayer, currentIndex, marblesInHand) {
  while (marblesInHand > 0) {
    console.log(marblesInHand);
    houses[currentIndex] += 1;
    switch (currentPlayer) {
      case 1:
        if ((currentIndex === 6) && (marblesInHand >= 1)) {
          playersScore[0] += 1;
          marblesInHand--;
        } else if (currentIndex === 13) {
          currentIndex = -1;
        }
        break;
      case 2:
        if ((currentIndex === 13) && (marblesInHand >= 1)) {
          playersScore[1] += 1;
          marblesInHand--;
          currentIndex = -1;
        }
        break;
      default:
        console.log("Nope");
    }
    console.log(houses, playersScore);
    updatePlayground();
    currentIndex++;
    marblesInHand--;
  }
}

function updateGameMessage(msg) {
    const gameMsg = document.querySelector('.game-msg');
    gameMsg.innerText = msg;
}

// Helper Function
function sum_array(A) {
  var sum = 0;
  for (var i=0; i<A.length; i++) {
    sum += A[i];
  }
  return sum;
}