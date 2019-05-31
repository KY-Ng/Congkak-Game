function Player(name) {
  this.name = name;
  this.houses = [7, 7, 7, 7, 7, 7, 7];
  this.storage = 0;

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

function game() {
  console.log("Player 1 will start first.");

  //TODO: get players names from browser window

  // create Player Object
  var p1 = new Player('kun');
  var p2 = new Player('chan');

  // get total no of marbles in houses

  // continue loop if there are still marbles to be play

    // p1's turns
    // round(p1, p2)

    // p2's turns
    // round(p2, p1)

  // game ends
  // count players' scores
  // and announce the winner!
}