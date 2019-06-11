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

function updateGameMessage(msg) {
    const gameMsg = document.querySelector('.game-msg');
    gameMsg.innerText = msg;
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

// called when one of the houses is clicked
// need access to variable, currentPlayer
function round() {
  const clickedElement = event.target;
  if ((clickedElement.classList.contains("p1-houses")) || (clickedElement.classList.contains("p2-houses"))) {
    var startIndex = parseInt(clickedElement.id);
    console.log(startIndex);
  }
  selectHouse(false);
}

function start() {
  const startbutton = document.querySelector(".start-btn");
  const gameMsg = document.querySelector(".game-msg");
  startbutton.classList.toggle("hide") // hide start button
  updateGameMessage("\n"); // hide game messages
  var currentPlayer = 1; // Player 1 goes first
  updateGameMessage(`Player ${currentPlayer}'s turn.\nPick a house to start.`);
  selectHouse(true);
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