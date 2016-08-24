console.log("javascript running");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");


var UNCUTWIRES = ["blue", "green", "red", "white", "yellow"];
var CUTWIRES = [];
var WIRESNEEDED = [];
var GAMESTATUS = true;
var METALWIRES = document.getElementsByClassName("unCutWires");
var id;
var number = 0;

// GAME START
gameStart();

// FUNCTION TO START THE GAME
function gameStart() {
  if (GAMESTATUS = true) {
  pushWiresNeeded();
  } else {
    document.getElementsbyClass("button").addEventListener("click", restartGame);
  }
}


// FOR LOOP TO DETERMINE ALL WIRES
function pushWiresNeeded() {
  for(var i =0; i < UNCUTWIRES.length; i++) {
    wiresRequiredToCut(UNCUTWIRES[i]);
  }
  clickedWires();
}
console.log("Wires needed:", WIRESNEEDED);
console.log("Wires needed length:", WIRESNEEDED.length);

//DETERMINING WHICH WIRES TO BE CUT AND PUSHING INTO WIRESNEEDED
function wiresRequiredToCut(y) {
  var x = Math.random();
  if (x > 0.5) {
    WIRESNEEDED.push(y);
  }
}

//IDENTIFYING WHICH WIRE WAS CLICKED
function clickedWires() {
  for (var j = 0; j < UNCUTWIRES.length; j++) {
    var METALWIRE = METALWIRES[j];
    METALWIRE.addEventListener("click", identifyWire);
  }
}

function identifyWire(e) {
  var METALWIRES = e.target;
  var id = METALWIRES.id;

  if (id === "blue") {
      document.getElementById("blue").style.backgroundImage = "url('img/cut-blue-wire.png')";
      console.log("Changing blue to cut");

  }   else if (id === "green") {
      console.log("Changing green to cut");

      document.getElementById("green").style.backgroundImage = "url('img/cut-green-wire.png')";
  }  else if (id === "red") {
      document.getElementById("red").style.backgroundImage = "url('img/cut-red-wire.png')";
      console.log("Changing red to cut");

  } else if (id === "white") {
      document.getElementById("white").style.backgroundImage = "url('img/cut-white-wire.png')";
      console.log("Changing white to cut");

  } else if (id === "yellow") {
      document.getElementById("yellow").style.backgroundImage = "url('img/cut-yellow-wire.png')";
      console.log("Changing yellow to cut");
  }
  checkExplosion();
}
});


// CHECKING EXPLOSION
function checkExplosion() {
  console.log(number);
  for(var k = 0; k < number(number); k++) {
    if(id !== WIRESNEEDED[k]) {
      runExplosion();
    } else {
      z = WIRESNEEDED[k]
      CUTWIRES.push(z);
      checkDefuse();
    }
  }
}

function runExplosion() {

}

function checkDefuse() {
  if (CUTWIRES === WIRESNEEDED) {
    GAMESTATUS = FALSE
    alert("YOU HAVE SUCCESSDULLY DEFUSED THE BOMB!!!");
  }
}

function restartGame() {

}
