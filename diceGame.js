let playersQty = prompt("how many players?");
parseInt (playersQty);
if (playersQty > 1) {
	goFirst();
}
else {
	console.log("need more players");
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



