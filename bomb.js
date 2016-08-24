console.log("javascript running");

var UNCUTWIRES = ["blue", "green", "red", "white", "yellow"];
var CUTWIRES = [];
var WIRESNEEDED = [];
var GAMESTATUS;
var METALWIRES = document.getElementsByClassName("unCutWires");
var id;

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");


  // GAME START
  if (GAMESTATUS = true) {
    gameStart();
  }

  // FUNCTION TO START THE GAME
  function gameStart() {
    pushWiresNeeded();
  }

  // RESETING GAME
  document.getElementById("reset").addEventListener("click", restartGame());

  function restartGame() {
    //RESET TIMER
    document.getElementById("backImage").style.backgroundImage = "url('img/simcity.jpg')";
    document.getElementById("yellow").style.backgroundImage = "url('img/uncut-yellow-wire.png')";
    document.getElementById("blue").style.backgroundImage = "url('img/uncut-blue-wire.png')";
    document.getElementById("white").style.backgroundImage = "url('img/uncut-white-wire.png')";
    document.getElementById("red").style.backgroundImage = "url('img/uncut-red-wire.png')";
    document.getElementById("green").style.backgroundImage = "url('img/uncut-green-wire.png')";
    GAMESTATUS = true;
  }

  // FOR LOOP TO DETERMINE ALL WIRES
  function pushWiresNeeded() {
    for(var i =0; i < UNCUTWIRES.length; i++) {
      wiresRequiredToCut(UNCUTWIRES[i]);
      clickedWires();
    }
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
    if (GAMESTATUS === true)
    for (var j = 0; j < UNCUTWIRES.length; j++) {
      var METALWIRE = METALWIRES[j];
      METALWIRE.addEventListener("click", identifyWire);
    }
  }

  function identifyWire(e) {
    if (GAMESTATUS = true) {
      var METALWIRES = e.target;
      id = METALWIRES.id;
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
      CUTWIRES.push(id);
      console.log("HELP:", CUTWIRES);
      checkDefuse();
    }
  }

  function runWiresNeeded() {
    for (x=0; x < WIRESNEEDED.length; x++) {
      return WIRESNEEDED[x];
    }
  }

// CHECK DEFUSE
  function checkDefuse() {
    var available = 0;
    if (compareArrays() === true) {
      bombDefused();
    } else {
      for(var m = 0; m<WIRESNEEDED.length; m++) {
        if(WIRESNEEDED[m] === id) {
          available = available + 1;
          return available;
        }
      }
      if (available === 0) {
        runExplosion();
      }
    }
  }

  function compareArrays() {
    var sortedCUTWIRES = CUTWIRES.sort();
    var sortedWIRESNEEDED = WIRESNEEDED.sort();

    if (WIRESNEEDED.length !== CUTWIRES.length) {
      return false;
    }
    for (var i = 0; i < CUTWIRES.length; i++) {
      if (sortedCUTWIRES[i] !== sortedWIRESNEEDED[i]) {
      return false;
      } else {
        return true;
      }
    }
  }

  function bombDefused() {
    document.getElementById("timer").style.color = "green";
    // CLEARTIMEOUT
    alert("YOU HAVE SUCCESSDULLY DEFUSED THE BOMB!!!");
  }
    //   else {
    //   clickedWires();
    // }

    // EXPLOSION CODE
      function runExplosion() {
        document.getElementById("backImage").style.backgroundImage = "url('img/explosion.jpg')";
        GAMESTATUS = false;
        //STOP TIMER
        //PREVENT WIRES FROM BEING CUT
        //CHANGE BACKGROUND

      }

  function warning() {
    alert("You cannot restart the game yet!");
  }

});
