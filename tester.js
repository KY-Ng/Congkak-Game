var tester1 = new Player('test1');
var tester2 = new Player('test2');
var players = [tester1, tester2];

//test functions in Player Object
function testPlayerf(player) {
  console.log("Testing getMarbleInHouse ...");
  console.log((player.getMarbleInHouse(1) === 7) ? "Passed!" : "Failed: getMarbleInHouse");

  console.log("Testing totalMarbleInHouses ...");
  console.log((player.totalMarbleInHouses() === 49) ? "Passed" : "Failed: totalMarbleInHouses");

  console.log("Test Completed!");
}

testPlayerf(tester1);

game(players[0], players[1]);

updatePlayground();

//showNumOfMarbles(players[0]);
//showNumOfMarbles(players[1]);

//for (var i = 0; i < 7; i++) {
//    updateHouse(players[1], i)
//}

//updateStorage(players[0])
//updateStorage(players[1])

round(players[0], players[1], players[0], 0);