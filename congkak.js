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
    // round(p1, p2)

    // p2's turns
    // round(p2, p1)

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