let quantityOfPlayers;
function playerQuant() {
  let text;
  quantityOfPlayers = document.getElementById("numb").value;
  if (isNaN(quantityOfPlayers) || quantityOfPlayers < 1 || quantityOfPlayers > 4) {
    text = "Gemstone Digital is best played with 1-4 players. Please enter a valid number of players.";
  } else {
    text = quantityOfPlayers + " " + "players";
    console.log("number of players:" + " " + quantityOfPlayers);
    goFirst();
  }
  document.getElementById("demo").innerHTML = text;
}
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
//dice//
let countClicks = 0;
let d4;
let d6;
let d8;
let d10;
let d12;
let d20;
let finalRollTotal; 
function rollDice(){
    d4 = Math.floor(Math.random() * 4) + 1;
    d6 = Math.floor(Math.random() * 6) + 1;
	d8 = Math.floor((Math.random() * 8) + 1);
	d10 = Math.floor((Math.random() * 10) + 1);
	d12 = Math.floor((Math.random() * 12) + 1);
	d20 = Math.floor((Math.random() * 20) + 1);
    let die4 = document.getElementById("dice4");
    let die6 = document.getElementById("dice6");
    let die8 = document.getElementById("dice8");
    let die10 = document.getElementById("dice10");
    let die12 = document.getElementById("dice12");
    let die20 = document.getElementById("dice20");
    let diceTotal = d4 + d6 + d8 + d10 + d12 + d20;
    die4.innerHTML = d4;
    die6.innerHTML = d6;
    die8.innerHTML = d8;
    die10.innerHTML = d10;
    die12.innerHTML = d12;
    die20.innerHTML = d20;
    countClicks++; 
    console.log("clicks:" + " " + countClicks);
    if (countClicks == 7) {
    	//apply bonuses
    	console.log("bonuses under construction");
    }
    else if (countClicks == 8) {
    	document.getElementById("9-1").innerHTML = d4;
    	document.getElementById("9-2").innerHTML = d6;
    	document.getElementById("9-3").innerHTML = d8;
    	document.getElementById("9-4").innerHTML = d10;
    	document.getElementById("9-5").innerHTML = d12;
    	document.getElementById("9-6").innerHTML = d20;
    	finalRollTotal = diceTotal;
    	console.log(finalRollTotal);
    }
}
// function selectDice(whichDice) {
// 	if (countClicks == 0) {
// 		text = "Please roll the dice to begin the game.";
// 	}
// 	else if (countClicks == 1) {
// 		//add data from selected dice to correct cell in column r1
// 		console.log("scored die:" + whichDice);
// 		document.getElementById("2-7").innerHTML = whichDice;
// 	}
// 	else if (countClicks == 2) {
// 		//add data from selected dice to correct cell in column r1
// 		console.log("scored die:" + whichDice);
// 		document.getElementById("3-7").innerHTML = whichDice;
// 	}
// 	else if (countClicks == 3) {
// 		//add data from selected dice to correct cell in column r1
// 		console.log("scored die:" + whichDice);
// 		document.getElementById("3-7").innerHTML = whichDice;
// 	}
// 	else if (countClicks == 4) {
// 		//add data from selected dice to correct cell in column r1
// 		console.log("scored die:" + whichDice);
// 		document.getElementById("4-7").innerHTML = whichDice;
// 	}
// 	else if (countClicks == 5) {
// 		//add data from selected dice to correct cell in column r1
// 		console.log("scored die:" + whichDice);
// 		document.getElementById("5-7").innerHTML = whichDice;
// 	}
// 	else if (countClicks == 6) {
// 		//add data from selected dice to correct cell in column r1
// 		console.log("scored die:" + whichDice);
// 		document.getElementById("6-7").innerHTML = whichDice;
// 	}

// }
//dice//

// function disableButton(btn) {
// 	// document.getElementById(btn).disabled = true;
// 	if ()
// }
function buttonDiceFour(rollValue) {
	console.log("d4: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-1").innerHTML = rollValue;
	}
	else if (countClicks == 2) {
		document.getElementById("3-1").innerHTML = rollValue;
	}
	else if (countClicks == 3) {
		document.getElementById("4-1").innerHTML = rollValue;
	}
	else if (countClicks == 4) {
		document.getElementById("5-1").innerHTML = rollValue;
	}
	else if (countClicks == 5) {
		document.getElementById("6-1").innerHTML = rollValue;
	}
	else if (countClicks == 6) {
		document.getElementById("7-1").innerHTML = rollValue;
	}
	document.getElementById("button4").disabled = true;
}
function buttonDiceSix(rollValue) {
	console.log("d6: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-2").innerHTML = rollValue;
	}
	else if (countClicks == 2) {
		document.getElementById("3-2").innerHTML = rollValue;
	}
	else if (countClicks == 3) {
		document.getElementById("4-2").innerHTML = rollValue;
	}
	else if (countClicks == 4) {
		document.getElementById("5-2").innerHTML = rollValue;
	}
	else if (countClicks == 5) {
		document.getElementById("6-2").innerHTML = rollValue;
	}
	else if (countClicks == 6) {
		document.getElementById("7-2").innerHTML = rollValue;
	}
	document.getElementById("button6").disabled = true;
}
function buttonDiceEight(rollValue) {
	console.log("d8: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-3").innerHTML = rollValue;
	}
	else if (countClicks == 2) {
		document.getElementById("3-3").innerHTML = rollValue;
	}
	else if (countClicks == 3) {
		document.getElementById("4-3").innerHTML = rollValue;
	}
	else if (countClicks == 4) {
		document.getElementById("5-3").innerHTML = rollValue;
	}
	else if (countClicks == 5) {
		document.getElementById("6-3").innerHTML = rollValue;
	}
	else if (countClicks == 6) {
		document.getElementById("7-3").innerHTML = rollValue;
	}
	document.getElementById("button8").disabled = true;
}
function buttonDiceTen(rollValue) {
	console.log("d10: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-4").innerHTML = rollValue;
	}
	else if (countClicks == 2) {
		document.getElementById("3-4").innerHTML = rollValue;
	}
	else if (countClicks == 3) {
		document.getElementById("4-4").innerHTML = rollValue;
	}
	else if (countClicks == 4) {
		document.getElementById("5-4").innerHTML = rollValue;
	}
	else if (countClicks == 5) {
		document.getElementById("6-4").innerHTML = rollValue;
	}
	else if (countClicks == 6) {
		document.getElementById("7-4").innerHTML = rollValue;
	}
	document.getElementById("button10").disabled = true;
}
function buttonDiceTwelve(rollValue) {
	console.log("d12: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-5").innerHTML = rollValue;
	}
	else if (countClicks == 2) {
		document.getElementById("3-5").innerHTML = rollValue;
	}
	else if (countClicks == 3) {
		document.getElementById("4-5").innerHTML = rollValue;
	}
	else if (countClicks == 4) {
		document.getElementById("5-5").innerHTML = rollValue;
	}
	else if (countClicks == 5) {
		document.getElementById("6-5").innerHTML = rollValue;
	}
	else if (countClicks == 6) {
		document.getElementById("7-5").innerHTML = rollValue;
	}
	document.getElementById("button12").disabled = true;
}
function buttonDiceTwenty(rollValue) {
	console.log("d20: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-6").innerHTML = rollValue;
	}
	else if (countClicks == 2) {
		document.getElementById("3-6").innerHTML = rollValue;
	}
	else if (countClicks == 3) {
		document.getElementById("4-6").innerHTML = rollValue;
	}
	else if (countClicks == 4) {
		document.getElementById("5-6").innerHTML = rollValue;
	}
	else if (countClicks == 5) {
		document.getElementById("6-6").innerHTML = rollValue;
	}
	else if (countClicks == 6) {
		document.getElementById("7-6").innerHTML = rollValue;
	}
	document.getElementById("button20").disabled = true;
}

// To set the value of a field with an id value of xyz, you'd use:

// document.getElementById('xyz').value = whatever


