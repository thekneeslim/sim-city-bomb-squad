console.log("javascript running");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

var UNCUTWIRES = ["blue", "green", "red", "white", "yellow"];
var CUTWIRES = [];
var WIRESNEEDED = [];
var GAMESTATUS = true;
var METALWIRES = document.getElementsByClassName("unCutWires");

// GAME START
gameStart();

// FUNCTION TO START THE GAME
function gameStart() {
  pushWiresNeeded();
  clickedWires();
}


// FOR LOOP TO DETERMINE ALL WIRES
function pushWiresNeeded() {
  for(var i =0; i < UNCUTWIRES.length; i++) {
    wiresRequiredToCut(UNCUTWIRES[i]);
    console.log(WIRESNEEDED)
  }
}

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
    var METALWIRES = METALWIRES[j];
    METALWIRES.addEventListener("click", identifyWire);
  }
}

function identifyWire(e) {
  var METALWIRES = e.target;
  var id = METALWIRES.id;

  if (id === "uncutBlue") {
    document.getElementById("uncutBlue").style.backgroundImage = "url('img/cut-blue-wire.png')";
    console.log("Changing blue to cut");

  }   else if (id === "uncutGreen") {
      console.log("Changing green to cut");

      document.getElementById("uncutGreen").style.backgroundImage = "url('img/cut-green-wire.png')";
  }  else if (id === "uncutRed") {
      document.getElementById("uncutRed").style.backgroundImage = "url('img/cut-red-wire.png')";
      console.log("Changing red to cut");

  } else if (id === "uncutWhite") {
      document.getElementById("uncutWhite").style.backgroundImage = "url('img/cut-white-wire.png')";
      console.log("Changing white to cut");

  } else if (id === "uncutYellow") {
      document.getElementById("uncutYellow").style.backgroundImage = "url('img/cut-yellow-wire.png')";
      console.log("Changing yellow to cut");
  }
  console.log(METALWIRES.textContent);
}
