function Player(name) {
  this.name = name;
  this.houses = [7, 7, 7, 7, 7, 7, 7];
  this.score = 0;

  this.getMarbleInHouse = function(index) {
    const self = this;
    return self.houses[index]
  }

  this.totalMarbleInHouses = function() {
    const self = this;
    var totalMarble = 0;
    for (var i = 0; i < self.houses.length; i++) {
      totalMarble += self.houses[i];
    }
    return totalMarble;
  }
}

// TODO: a function to register players
// function registerPlayer() {}
  // console.log("Player 1 will start first.");
  //TODO: get players names from browser window
// return a list (array) of players

// players = registerPlayer()
// game(players[0], players[1])
function game(p1, p2) {
  // get total no of marbles in houses
  var totalMarble = p1.totalMarbleInHouses() + p2.totalMarbleInHouses();
  console.log(totalMarble);
  // continue loop if there are still marbles to be play
  while (totalMarble > 0) {
    // p1's turns
    // round(p1, p2, p1)

    // p2's turns
    // round(p2, p1, p2)

    // test loop
    totalMarble -= 10;
    console.log(`current no. of marbles: ${totalMarble}`);
    // real excecution
    //totalMarble = p1.totalMarbleInHouses() + p2.totalMarbleInHouses();
  }
  // game ends
  // count players' scores and announce the results!
  console.log(`Scores:\n${p1.name} : ${p1.score}\t${p2.name} : ${p2.score}`);
  if (p1.score > p2.score) {
    console.log(`${p1.name} wins!`);
  } else if (p1.score < p2.score) {
    console.log(`${p2.name} wins!`);
  } else {
    console.log(`It's a draw!`);
  }
}

// round(p1, p2, p1, default=0)
// round(p1, p2, p1, stopIndex), use when marble stopped on non empty houses (own house)
// round(p1, p2, p2, stopIndex), use when marble stopped on non empty houses (opponent's house)
function round(currentPlayer, opponentPlayer, startSide, startIndex=None) {
  // if startIndex == None, choose one house to start
  // else, start
  // putting 1 marble into each house and storage (own) until finishes
  // check where the distribution of marble stops
  // if the last house has more than 1 marble (last marble distrbuted)
    // if own house, move the last marble and all marbles in opposite house into own storage
    // else (in opponent's house), stop and change turns
  // else pick up all marbles in that house and distributed again
}


// update number shown in players' houses based on player.houses
// might need a function that specify which house to update (the number)
//   as looping over everything every time number in a house is updated
//   is kind of waste
function showNumInHouses(player) {
  var classname = (players.indexOf(player) === 0) ? ".p1-houses" : ".p2-houses";
  const houses = document.querySelectorAll(classname);
  for (var i = 0; i < houses.length; i++) {
    houses[i].innerText = player.houses[i];
    // console.log(houses[i].innerText);
  }
}

function updateCircleofHouse(player) {
  console.log('hi');
}