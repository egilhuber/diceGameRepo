//let playersQty = prompt("how many players?");

let quantityOfPlayers;
function playerQuant() {
  let text;

  // Get the value of the input field with id="numb"
  quantityOfPlayers = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(quantityOfPlayers) || quantityOfPlayers < 1 || quantityOfPlayers > 4) {
    text = "Gemstone Digital is best played with 1-4 players. Please enter a valid number of players.";
  } else {
    text = quantityOfPlayers + " " + "players";
    console.log("number of players:" + " " + quantityOfPlayers);
    //call gofirst function here
    goFirst();
  }
  document.getElementById("demo").innerHTML = text;
}


// parseInt (playersQty);
// if (playersQty > 1) {
// 	goFirst();
// }
// else {
// 	console.log("need more players");
// }
function goFirst () {
	console.log("p1 d20 roll:");
	let p1d20 = Math.floor((Math.random() * 20) + 1);
	console.log(p1d20);
	console.log("p2 d20 roll:");
	let p2d20 = Math.floor((Math.random() * 20) + 1);
	console.log(p2d20);
	if (p1d20 > p2d20) {
		console.log("player 1 goes first");
	}
	else {
		console.log("player 2 goes first");
	}
}

function playRound () {


	
}

function selectDice(whichDie) {
	

}

//dice//
function rollDice(){
    let d4 = Math.floor(Math.random() * 4) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;
	let d8 = Math.floor((Math.random() * 8) + 1);
	let d10 = Math.floor((Math.random() * 10) + 1);
	let d12 = Math.floor((Math.random() * 12) + 1);
	let d20 = Math.floor((Math.random() * 20) + 1);
    let die4 = document.getElementById("d4");
    let die6 = document.getElementById("d6");
    let die8 = document.getElementById("d8");
    let die10 = document.getElementById("d10");
    let die12 = document.getElementById("d12");
    let die20 = document.getElementById("d20");
    let diceTotal = d4 + d6 + d8 + d10 + d12 + d20;
    die4.innerHTML = d4;
    die6.innerHTML = d6;
    die8.innerHTML = d8;
    die10.innerHTML = d10;
    die12.innerHTML = d12;
    die20.innerHTML = d20;
}
//dice//


