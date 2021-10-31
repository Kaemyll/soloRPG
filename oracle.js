window.addEventListener('load', () => {
	var tarot = {
		sides  : 78,
		tirage : function() {
			var randomCard = Math.floor(Math.random() * this.sides) + 1;
			return randomCard;
		}
	};
	console.log('tirage de carte à sec = ', tarot.tirage()); // TEST

	var buttonCard = document.getElementById('oracle');
	console.log('buttonCard est défini = ', buttonCard); // TEST

	function printCard(card, textCard) {
		var cardResult = document.getElementById('cardResult');
		cardResult.innerHTML = (card, textCard);
	}

	// Tirage de carte de l'ORACLE
	buttonCard.addEventListener('click', function() {
		// console.log('Test du click sur Oracle');
		var result = tarot.tirage();
		console.log(result);
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
		printCard(result, resultText);
	});
});
