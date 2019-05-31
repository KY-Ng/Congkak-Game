player1 = new Player('yuya');

//test functions in Player Object
function testPlayerf(player) {
  console.log("Testing getMarbleInHouse ...");
  console.log((player.getMarbleInHouse(1) === 7) ? "Passed!" : "Failed: getMarbleInHouse");

  console.log("Testing totalMarbleInHouses ...");
  console.log((player.totalMarbleInHouses() === 49) ? "Passed" : "Failed: totalMarbleInHouses");
}

testPlayerf(player1);