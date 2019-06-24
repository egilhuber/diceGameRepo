for (i = 0; i < 6; i ++) {
	let whichDie = prompt("which die would you like to use?");
	parseInt (whichDie);
	rollActiveDie(whichDie);
	function rollActiveDie (activeDie) {
	console.log(Math.floor((Math.random() * activeDie) + 1));
	}
}
/////////////////////////////////////////////////////////////////////////
console.log("round 1");
roundOne();
function roundOne (all) {
	let d4 = Math.floor((Math.random() * 4) + 1);
	console.log("d4:" + d4);
	let d6 = Math.floor((Math.random() * 6) + 1);
	console.log("d6:" + d6);
	let d8 = Math.floor((Math.random() * 8) + 1);
	console.log("d8:" + d8);
	let d10 = Math.floor((Math.random() * 10) + 1);
	console.log("d10:" + d10);
	let d12 = Math.floor((Math.random() * 12) + 1);
	console.log("d12:" + d12);
	let d20 = Math.floor((Math.random() * 20) + 1);
	console.log("d20:" + d20);
}
/////////////////////////////////////////////////////////////////////////