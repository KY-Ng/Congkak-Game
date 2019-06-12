console.log(houses);

console.log(playersScore);

updatePlayground();

console.log(sum_array(houses));

//game();

//distribute(1, 0);

//getClickedElement();
//getClickedHouse();

// test round()

//var currentPlayer = 1;
//selectHouse(true);

function printTrue() {
  return true;
}

function testTimeOut(x) {
    setTimeout(()=>{
      var a = printTrue();
      console.log(a);
    }, x)
    console.log("slow!");
}