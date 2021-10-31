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

	function printCard(cardValue, cardType, resultText, upside, reverse, urlImage) {
		var numCard = document.getElementById('numCard');
		var arcaneType = document.getElementById('arcaneType');
		var cardTitle = document.getElementById('cardTitle');
		var up = document.getElementById('upside');
		var rev = document.getElementById('reverse');
		let elem = document.createElement('img');
		elem.setAttribute('src', urlImage);
		console.log(elem);
		numCard.innerHTML = `Carte n° ${cardValue}`;
		arcaneType.innerHTML = `Type : ${cardType}`;
		cardTitle.innerHTML = `Titre de la carte : ${resultText}`;
		up.innerHTML = `ENDROIT : ${upside}`;
		rev.innerHTML = `ENVERS : ${reverse}`;
		document.getElementById('cardImage').appendChild(elem);
		console.log(cardImage);
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
				var upside = "Le Commencement - L'Eveil - La Folie";
				var reverse = "L'Indécision - L'Apathie - L'Inertie";
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 2:
				var cardValue = 1;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE MAGICIEN';
				var upside = "L'Intelligence - La Volonté - L'Occulte";
				var reverse = "Sombres Savoirs - Les Maléfices - L'Ignorance";
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 3:
				var cardValue = 2;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA PAPESSE';
				var upside = "L'Intuition - La Spiritualité - Le Mystère";
				var reverse = "L'Impulsivité - Le Dogme - Le Pragmatisme";
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 4:
				var cardValue = 3;
				var cardType = 'Arcane Majeure';
				var resultText = "L'IMPERATRICE";
				var upside = 'La Féminité - La Fertilité - La Sagesse';
				var reverse = "La Contrariété - L'Obstination - La Méchanceté";
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 5:
				var cardValue = 4;
				var cardType = 'Arcane Majeure';
				var resultText = "L'EMPEREUR";
				var upside = "Le Paternalisme - L'Enseignement - L'Autorité";
				var reverse = "L'Ambition - La Brutalité - La Domination";
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 6:
				var cardValue = 5;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE HIEROPHANTE';
				var upside = 'La Moralité - La Croyance - La Droiture';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 7:
				var cardValue = 6;
				var cardType = 'Arcane Majeure';
				var resultText = 'LES AMOUREUX';
				var upside = "La Pureté - L'Innocence - La naïveté";
				var reverse = "L'Infidélité - Le Mensonge - La Haine";
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 8:
				var cardValue = 7;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE CHARIOT';
				var upside = 'Le Voyage - -';
				var reverse = 'La Lâcheté - -';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 9:
				var cardValue = 8;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA JUSTICE';
				var upside = "L'Equilibre - La Balance - Le Jugement";
				var reverse = 'La Vengeance - La Passivité - La Cruauté';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 10:
				var cardValue = 9;
				var cardType = 'Arcane Majeure';
				var resultText = "L'ERMITE";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 11:
				var cardValue = 10;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA ROUE DE LA FORTUNE';
				var upside = 'La Destinée - La Chance - ';
				var reverse = 'La Malchance - Le Hasard - Le Chaos';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 12:
				var cardValue = 11;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA FORCE';
				var upside = 'La Fortitude - La Volonté - ';
				var reverse = 'La Brutalité - La Luxure -';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 13:
				var cardValue = 12;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE PENDU';
				var upside = 'La Résilience - - ';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 14:
				var cardValue = 13;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA MORT';
				var upside = 'Le Changement - La Mortalité - La Fin';
				var reverse = 'La Stagnation - La Corruption - La Malédiction';
				var urlImage = './assets/13_LaMort.png';
				break;
			case 15:
				var cardValue = 14;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA TEMPERANCE';
				var upside = 'La Proportionnalité - - ';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 16:
				var cardValue = 15;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE DIABLE';
				var upside = "La Tentation - L'Esclavage - La Souffrance";
				var reverse = 'La Délivrance - - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 17:
				var cardValue = 16;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA TOUR';
				var upside = "L'Humilité";
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 18:
				var cardValue = 17;
				var cardType = 'Arcane Majeure';
				var resultText = "L'ETOILE";
				var upside = "Le Guide - L'Inspiration - ";
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 19:
				var cardValue = 18;
				var cardType = 'Arcane Majeure';
				var resultText = 'LA LUNE';
				var upside = 'La Mutation - Le Symbolisme - La Divination';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 20:
				var cardValue = 19;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE SOLEIL';
				var upside = "L'Illumination - - ";
				var reverse = 'Le Vide - - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 21:
				var cardValue = 20;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE JUGEMENT';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 22:
				var cardValue = 21;
				var cardType = 'Arcane Majeure';
				var resultText = 'LE MONDE';
				var upside = "L'Harmonie - - ";
				var reverse = 'Les Catastrophes - - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 23:
				var cardValue = 22;
				var cardType = 'Arcane Mineure';
				var resultText = "L'As de Bâtons";
				var upside = 'Quête Noble - - ';
				var reverse = 'Fierté Destructrice - - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 24:
				var cardValue = 23;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Deux de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 25:
				var cardValue = 24;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Trois de Bâtons';
				var upside = 'Générosité - - ';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 26:
				var cardValue = 25;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Quatre de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 27:
				var cardValue = 26;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Cinq de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 28:
				var cardValue = 27;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Six de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 29:
				var cardValue = 28;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Sept de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 30:
				var cardValue = 29;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Huit de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 31:
				var cardValue = 30;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Neuf de Bâtons';
				var upside = 'Guérison - Sécurité - Défense';
				var reverse = 'Adversité - Gaspillage - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 32:
				var cardValue = 31;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Dix de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 33:
				var cardValue = 32;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Valet de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 34:
				var cardValue = 33;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Chevalier de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 35:
				var cardValue = 34;
				var cardType = 'Arcane Mineure';
				var resultText = 'La Reine de Bâtons';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 36:
				var cardValue = 35;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Roi de Bâtons';
				var upside = 'Passion - - ';
				var reverse = 'Peur - - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 37:
				var cardValue = 36;
				var cardType = 'Arcane Mineure';
				var resultText = "L'As d'Epées";
				var upside = 'Sacrifice - Combat - Tension';
				var reverse = 'Violence - Guerre - Misère';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 38:
				var cardValue = 37;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Deux d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 39:
				var cardValue = 38;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Trois d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 40:
				var cardValue = 39;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Quatre d'Epées";
				var upside = 'Paix - Survivance - Retraite';
				var reverse = 'Perte - Absence - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 41:
				var cardValue = 40;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Cinq d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 42:
				var cardValue = 41;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Six d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 43:
				var cardValue = 42;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Sept d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 44:
				var cardValue = 43;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Huit d'Epées";
				var upside = 'Emprisonnement - Aveuglement - Légalité';
				var reverse = 'Desespoir - Colère - Tricherie';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 45:
				var cardValue = 44;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Neuf d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 46:
				var cardValue = 45;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Dix d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 47:
				var cardValue = 46;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Valet d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 48:
				var cardValue = 47;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Chevalier d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 49:
				var cardValue = 48;
				var cardType = 'Arcane Mineure';
				var resultText = "La Reine d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 50:
				var cardValue = 49;
				var cardType = 'Arcane Mineure';
				var resultText = "Le Roi d'Epées";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 51:
				var cardValue = 50;
				var cardType = 'Arcane Mineure';
				var resultText = "L'As de Coupes";
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 52:
				var cardValue = 51;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Deux de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 52:
				var cardValue = 51;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Deux de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 53:
				var cardValue = 52;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Trois de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 54:
				var cardValue = 53;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Quatre de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 55:
				var cardValue = 54;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Cinq de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 56:
				var cardValue = 55;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Six de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 57:
				var cardValue = 56;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Sept de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 58:
				var cardValue = 57;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Huit de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 59:
				var cardValue = 58;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Neuf de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 60:
				var cardValue = 59;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Dix de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 61:
				var cardValue = 60;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Valet de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 62:
				var cardValue = 61;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Chevalier de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 63:
				var cardValue = 62;
				var cardType = 'Arcane Mineure';
				var resultText = 'La Reine de Coupes';
				var upside = 'Rêve - Création - Arts';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 64:
				var cardValue = 63;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Roi de Coupes';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 65:
				var cardValue = 64;
				var cardType = 'Arcane Mineure';
				var resultText = "L'As de Pentacles";
				var upside = 'Stabilité - Prospérité - ';
				var reverse = 'Pillage - Auto-satisfaction - ';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 66:
				var cardValue = 65;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Deux de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 67:
				var cardValue = 66;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Trois de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 68:
				var cardValue = 67;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Quatre de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 69:
				var cardValue = 68;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Cinq de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 70:
				var cardValue = 69;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Six de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 71:
				var cardValue = 70;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Sept de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 72:
				var cardValue = 71;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Huit de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				break;
			case 73:
				var cardValue = 72;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Neuf de Pentacles';
				var upside = 'Confort - - ';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
			case 74:
				var cardValue = 73;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Dix de Pentacles';
				var upside = 'Industrie - Fortune - ';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 75:
				var cardValue = 74;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Valet de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 76:
				var cardValue = 75;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Chevalier de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 77:
				var cardValue = 76;
				var cardType = 'Arcane Mineure';
				var resultText = 'La Reine de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			case 78:
				var cardValue = 77;
				var cardType = 'Arcane Mineure';
				var resultText = 'Le Roi de Pentacles';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
			default:
				var cardValue = 'Valeur de la carte';
				var cardType = "Type d'arcane";
				var resultText = 'Titre de la carte';
				var upside = 'symboles';
				var reverse = 'symboles';
				var urlImage = './assets/0_Anthropos.png';
				break;
		}
		printCard(cardValue, cardType, resultText, upside, reverse, urlImage);
	});
});
