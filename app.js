// Jet de dés sur la TABLE DU DESTIN
var dice = {
	sides : 6,
	roll  : function() {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	}
};

function printNumber(number, text) {
	var diceResult = document.getElementById('diceResult');
	diceResult.innerHTML = (number, text);
}

var button = document.getElementById('destiny');

button.onclick = function() {
	var result = dice.roll();
	switch (result) {
		case 1:
			var resultText = 'Non, et...';
			console.log('dice = ', result);
			break;
		case 2:
		case 3:
			var resultText = 'Non, mais...';
			console.log('dice = ', result);
			break;
		case 4:
		case 5:
			var resultText = 'Oui, mais...';
			console.log('dice = ', result);
			break;
		case 6:
			var resultText = 'Oui, et...';
			console.log('dice = ', result);
			break;
		default:
			var resultText = 'Résultat...';
			console.log('dice = ', result);
	}
	printNumber(result, resultText);
};
