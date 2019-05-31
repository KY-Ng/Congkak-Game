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