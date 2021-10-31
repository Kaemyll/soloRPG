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

	function printCard(cardValue, cardType, resultText, upside, reverse) {
		var numCard = document.getElementById('numCard');
		var arcaneType = document.getElementById('arcaneType');
		var cardTitle = document.getElementById('cardTitle');
		var up = document.getElementById('upside');
		var rev = document.getElementById('reverse');
		numCard.innerHTML = `Carte n° ${cardValue}`;
		arcaneType.innerHTML = `Type : ${cardType}`;
		cardTitle.innerHTML = `Titre de la carte : ${resultText}`;
		up.innerHTML = `ENDROIT : ${upside}`;
		rev.innerHTML = `ENVERS : ${reverse}`;
	}

	// Tirage de carte de l'ORACLE
	buttonCard.addEventListener('click', function() {
		// console.log('Test du click sur Oracle');
		var result = tarot.tirage();
		console.log(result);
		switch (result) {
			case 1:
				var cardValue = 0;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE FOU';
				var upside = "A l'endroit : Le Commencement - L'Eveil - La Folie";
				var reverse = "A l'envers : L'Indécision - L'Apathie - L'Inertie";
				break;
			case 2:
				var cardValue = 1;
				var cardType = 'Arcane Majeure';
				var resultText = 'Le Magicien';
				var upside = "A l'endroit : L'Intelligence - La Volonté - L'Occulte";
				var reverse = "A l'envers : Sombres Savoirs - Les Maléfices - L'Ignorance";
				break;
			case 3:
				var cardValue = 2;
				var cardType = 'Arcane Majeure';
				var resultText = 'La Papesse';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 4:
				var cardValue = 3;
				var cardType = 'Arcane Majeure';
				var resultText = "L'Impératrice";
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 5:
				var cardValue = 4;
				var cardType = 'Arcane Majeure';
				var resultText = "L'Empereur";
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 6:
				var cardValue = 5;
				var cardType = 'Arcane Majeure';
				var resultText = 'Le Hiérophante';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 7:
				var cardValue = 6;
				var cardType = 'Arcane Majeure';
				var resultText = 'Les Amoureux';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 8:
				var cardValue = 7;
				var cardType = 'Arcane Majeure';
				var resultText = 'Le Chariot';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 9:
				var cardValue = 8;
				var cardType = 'Arcane Majeure';
				var resultText = 'La Force';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 10:
				var cardValue = 9;
				var cardType = 'Arcane Majeure';
				var resultText = "L'Ermite";
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 11:
				var cardValue = 10;
				var cardType = 'Arcane Majeure';
				var resultText = 'La Roue de la Fortune';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 50:
				var cardValue = 49;
				var cardType = "Type d'arcane";
				var resultText = 'Titre de la glace';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			case 78:
				var cardValue = 77;
				var cardType = "Type d'arcane";
				var resultText = 'Titre de la glace';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
			default:
				var cardValue = 'Valeur de la carte';
				var cardType = "Type d'arcane";
				var resultText = 'Titre de la carte';
				var upside = "A l'endroit : symboles";
				var reverse = "A l'envers : symboles";
				break;
		}
		printCard(cardValue, cardType, resultText, upside, reverse);
	});
});
