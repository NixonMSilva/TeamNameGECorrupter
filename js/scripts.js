const maxNames = 2000;

const noMethods = 4;

const clubNamesLeft = ["Fla", "Flu", "São", "San", "Pal", "Cor", "Athleti", "Atléti", "Cru", "Bota", 
	"Vas", "Real ", "Barce", "Manchester ", "Juve", "Inter", "Gre", "Lazi", "Porto", "Benfi", "Bayern ",
	"Chape", "Boca ", "River ", "San ", "Peña", "Liver", "Chel", "Totten", "Mazem", "Raja ", "Tigre",
	"Bangu", "Forta", "Cea", "Vit", "Bah", "Ata", "Figuei", "Ava", "Crici", "Cuia", "Corin", "Náuti",
	"Santa", "Spor", "Améri", "Coriti", "Ponte ", "Guara"]

const clubNamesRightConsonant = ["mengo", "minense", "tos", "meiras", "zeiro", "fogo", "lona", "ca", 
	"coense", "rol", "pool", "sea", "ham", "be", "entude", "rá", "leza", "ia", "ória", "nacional", "mio",
	"lanta", "rense", "bá", "ni"]

const clubNamesRightVowel = ["inthians", "entude", "ória", "úma", "í", "asco", "afogo", "itiba", "áutico"]

const clubNamesComposite = [" United", " Madrid", " City", " de Munique", " Casablanca", " Juniors", " Plate",
	" Lorenzo", " Paulo", " Mineiro", " Paranaense", " do Rio", " de Natal", " Goianiense", " Dortmund", " Zagreb", 
	" Zvezda", " de Madrid", " Paraibano", " de Alagoinhas", "-MG", "-RN", "-PR", "-RJ", "-PB", "-GO", " Cruz"]

const corruptionsGeneric = ["Merda", "Cocô", "Lixo", "Bosta", "Putrefa", "Desgraça", "Caralho", "Porra", "Verme",
	"Discórdia", "Bumbum", "Otário", "Debilóide", "Rouba", "VAR", "Caga", "Mijo", "Xixi", "Urina", "Fezes", "Mia Khalifa",
	"Gorfo", "Cachaça", "Cu"]

const corruptionsLeft = ["VAR", "Putref", "Desgraç", "Caralh", "Mij", "Cag", "Roub", "Verm", "Porr", "Bost", "Coc", "Merd" ]

const corruptionsRight = ["bumbumguloso", "falência", "puta", "mídia", "órfão", "bilau", "piupiu", "pênis", "vagina",
	"bunda", "chupada", "boquete", "fio-terra"]

const generateName = () => {
	var corruptedName = "", seed_0 = generateRandomNumber(), seed_1 = generateRandomNumber();
	switch (chooseMethod())
	{
		case 0:	// clubNamesLeft + corruptionsGeneric
			corruptedName = getRandomElement(clubNamesLeft, seed_0) + getRandomElement(corruptionsGeneric, seed_1);
		break;
		case 1: // clubNamesLeft + corruptionsRight
			corruptedName = getRandomElement(clubNamesLeft, seed_0) + getRandomElement(corruptionsRight, seed_1);
		break;
		case 2: // corruptionsGeneric + clubNamesRightConsonant
			corruptedName = getRandomElement(corruptionsGeneric, seed_0) + getRandomElement(clubNamesRightConsonant, seed_1);
		break;
		case 3: // corruptionsLeft + clubNamesRightVowel
			corruptedName = getRandomElement(corruptionsLeft, seed_0) + getRandomElement(clubNamesRightVowel, seed_1);
		break;
		case 4: // corruptionsGeneric + clubNamesComposite
			corruptedName = getRandomElement(corruptionsGeneric, seed_0) + getRandomElement(clubNamesComposite, seed_1);
		break;
	}
	document.getElementById("result").value = corruptedName;
};

const generateRandomNumber = () => {
	return Math.floor((Math.random() * maxNames)) + 1;
};

const getRandomElement = (arr, number) => {
	return arr[number % arr.length];
};

const chooseMethod = () => {
	return Math.floor((Math.random() * (noMethods + 1)));
}
