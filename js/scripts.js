const maxNames = 2000;

const noMethods = 9;

var allowNonAmericanClubs = true;

// Club names on the left

const clubNamesLeft = ["Fla", "Flu", "São ", "San", "Pal", "Cor", "Athleti", "Atléti", "Cru", "Bota", 
	"Vas", "Gre", "Chape", "Boca ", "River ", "San ", "Peña", "Tigre", "Bangu", "Forta", "Cea", "Vit", "Bah", 
	"Figuei", "Ava", "Crici", "Cuia", "Corin", "Náuti", "Santa", "Spor", "Améri", "Coriti", "Ponte", "Guara", "Grêmi",
	"Bragan", "Confi", "Cruzei", "Flamen", "Flumi", "Vasco", "Interna", "Inter", "Vitó", "Bahi", "Ponte Pre",
	"São Pau"]

// Club names on the left (Non-American)

const clubNamesLeft_NAMER = ["Real ", "Barce", "Manchester ", "Juve", "Lazi", "Arse", "Porto", "Benfi", "Bayern ",
	"Liver", "Chel", "Totten", "Mazem", "Raja ", "Ata", "Paris Saint-", "Olympique ", "Roma", "Sportin", "Shakt",
	"Galata", "Fener", "Dínamo ", "Schalke", "Borussia ", "Mil", "Milan"]

// Club names on the right, starting with consonants

const clubNamesRightConsonant = ["mengo", "minense", "tos", "meiras", "zeiro", "fogo",  "coense", "rol", "rá", "leza", 
	"nacional", "mio", "rense", "rani", "vaí", "cional", "lético", "rinthians", "ntino", "taleza"]

// Club names on the right, starting with vowels

const clubNamesRightVowel = ["inthians", "entude", "ória", "úma", "asco", "afogo", "itiba", "áutico", "abá", 
	"ia", "ória", "antino", "onfiança", "eará"]

// Club names on the right, starting with consonants (Non-American)

const clubNamesRightConsonant_NAMER = ["lona", "nfica", "pool", "sea", "ham", "zembe", "nazionale", "lanta", "saray",
	"bahçe", "ktas", "noord"]

// Club names on the right, starting with vowels (Non-American)

const clubNamesRightVowel_NAMER = ["enham", "enfica", "iktas", "oord", "-Germain"]

// Composite club names

const clubNamesComposite = [" Juniors", " Plate", " Lorenzo", " Paulo", " Mineiro", " Paranaense", 
	" do Rio", " de Natal", " Goianiense", " Paraibano", " de Alagoinhas", "-MG", "-RN", "-PR", 
	"-RJ", "-PB", "-GO", " Cruz", " Del Valle"]

// Composite club names (Non-American)

const clubNamesComposite_NAMER = [" United", " Madrid", " City", " de Munique", " Casablanca", " Dortmund", " Zagreb",
	" Zvezda", " de Madrid"]

// Generic corruptions (can be applied on any side)

const corruptionsGeneric = ["Merda", "Cocô", "Lixo", "Bosta", "Putrefa", "Desgraça", "Caralho", "Porra", "Verme",
	"Discórdia", "Bumbum", "Otário", "Debilóide", "Rouba", "VAR", "Caga", "Mijo", "Xixi", "Urina", "Fezes", "Mia Khalifa",
	"Gorfo", "Cachaça", "Cu", "Corno", "Máfia", "Apito", "Crime", "Assalto", "Pau"]

// Corruptions at the start of the name (prefix)

const corruptionsLeft = ["VAR", "Putref", "Desgraç", "Caralh", "Mij", "Caga", "Roub", "Verm", "Porr", "Bost", "Cocô", "Merd", 
	"Apit", "Crim", "Assalt"]

// Corruptions at the end of the name (suffix)

const corruptionsRight = ["bumbumguloso", "falência", "puta", "mídia", "órfão", "bilau", "piupiu", "pênis", "vagina",
	"bunda", "chupada", "boquete", "fio-terra", "gozo", "esperma", "piroca", "mamador", "lambida", "arrombada",
	"diarreia", "leprosa", "aidética"]

const generateName = () => {

	// Picks two seeds then choose a method of merging
	var corruptedName = "", seed_0 = generateRandomNumber(), seed_1 = generateRandomNumber();
	var  choosenMethodNo = chooseMethod();

	// Check if non-american clubs are allowed through the radio buttons
	if (!allowNonAmericanClubs)
		choosenMethodNo %= 4;
	
	// Produce the result
	switch (choosenMethodNo)
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

		// Cases with Non-America clubs

		case 5: // clubNamesLeft_NAMER + corruptionsGeneric
			corruptedName = getRandomElement(clubNamesLeft_NAMER, seed_0) + getRandomElement(corruptionsGeneric, seed_1);
		break;
		case 6: // clubNamesLeft_NAMER + corruptionsRight
			corruptedName = getRandomElement(clubNamesLeft_NAMER, seed_0) + getRandomElement(corruptionsRight, seed_1);
		break;
		case 7: // corruptionsGeneric + clubNamesRightConsonant_NAMER
		corruptedName = getRandomElement(corruptionsGeneric, seed_0) + getRandomElement(clubNamesRightConsonant_NAMER, seed_1);
		break;
		case 8: // corruptionsLeft + clubNamesRightVowel_NAMER
			corruptedName = getRandomElement(corruptionsLeft, seed_0) + getRandomElement(clubNamesRightVowel_NAMER, seed_1);
		break;
		case 9: // corruptionsGeneric + clubNamesComposite
			corruptedName = getRandomElement(corruptionsGeneric, seed_0) + getRandomElement(clubNamesComposite_NAMER, seed_1);
		break;
	}

	// Edit the values of the readonly input to show the result
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

const changeAllowEuropeanClubs = () => {
	allowNonAmericanClubs = true;
}

const changeDisallowEuropeanClubs = () => {
	allowNonAmericanClubs = false;
}
