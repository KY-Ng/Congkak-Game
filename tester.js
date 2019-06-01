var tester1 = new Player('test1');
var tester2 = new Player('test2');

//test functions in Player Object
function testPlayerf(player) {
  console.log("Testing getMarbleInHouse ...");
  console.log((player.getMarbleInHouse(1) === 7) ? "Passed!" : "Failed: getMarbleInHouse");

  console.log("Testing totalMarbleInHouses ...");
  console.log((player.totalMarbleInHouses() === 49) ? "Passed" : "Failed: totalMarbleInHouses");

  console.log("Test Completed!");
}

testPlayerf(tester1);

game(tester1, tester2);