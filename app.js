// Jet de dés sur la TABLE DU DESTIN
var dice = {
	sides : 6,
	roll  : function() {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	}
};
console.log('Jet de dé à sec = ', dice.roll()); // TEST
var tarot = {
	sides  : 78,
	tirage : function() {
		var randomCard = Math.floor(Math.random() * this.sides) + 1;
		return randomCard;
	}
};
console.log('tirage de carte à sec = ', tarot.tirage()); // TEST

var button = document.getElementById('destiny');
console.log('button est défini = ', button); // TEST
var buttonCard = document.getElementById('oracle');
console.log('buttonCard est défini = ', buttonCard); // TEST

function printNumber(number, text) {
	var diceResult = document.getElementById('diceResult');
	diceResult.innerHTML = (number, text);
}
function printCard(card, textCard) {
	var cardResult = document.getElementById('cardResult');
	cardResult.innerHTML = (card, textCard);
}

button.addEventListener('click', function() {
	var result = dice.roll();
	console.log('result du button.onclick = ', result); // TEST
	switch (result) {
		case 1:
			var resultText = 'Non, et...';
			break;
		case 2:
		case 3:
			var resultText = 'Non, mais...';
			break;
		case 4:
		case 5:
			var resultText = 'Oui, mais...';
			break;
		case 6:
			var resultText = 'Oui, et...';
			break;
		default:
			var resultText = 'Résultat...';
	}
	printNumber(result, resultText);
});

// Tirage de carte de l'ORACLE

buttonCard.addEventListener('click', function() {
	console.log('Test du click sur Oracle');
	// var result = tarot.tirage();
	// console.log(result);
	// switch (result) {
	// 	case 1:
	// 		var resultText = 'Non, et...';
	// 		break;
	// 	case 2:
	// 	case 3:
	// 		var resultText = 'Non, mais...';
	// 		break;
	// 	case 4:
	// 	case 5:
	// 		var resultText = 'Oui, mais...';
	// 		break;
	// 	case 6:
	// 		var resultText = 'Oui, et...';
	// 		break;
	// 	default:
	// 		var resultText = 'Résultat...';
	// }
	// printCard(result, resultText);
});
