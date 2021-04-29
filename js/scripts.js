const maxNames = 2000;

const noMethods = 3;

var allowNonAmericanClubs = true;

var name_0 = "", name_1 = ""

const vowels = ['a', 'e', ,'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
	"á", "Á", "é", "É", "í", "Í", "ó", "Ó", "ú", "Ú", "â", "Â",
	"ã", "Ã", "ê", "Ê", "ô", "Ô"]

// Club names (Brazil)

const clubNames = ["Flamengo", "Fluminense", "Vasco", "São Paulo", "Santos", "Palmeiras", "Corinthians",
	"Athlético", "Atlético", "Cruzeiro", "Botafogo", "Grêmio", "Internacional", "Chapecoense", "Ponte Preta",
	"Guarani", "Fortaleza", "Ceará", "Bahia", "Vitória", "Figueirense", "Avaí", "Criciúma", "Juventude",
	"Brasil de Pelotas", "Coritiba", "Paraná", "Confiança", "Bragantino", "América", "América-RN", "Goiás",
	"Atlético-GO", "Vila Nova", "Cuiabá", "São Caetano", "Santa Cruz", "Náutico", "Sport Recife", "Paysandu",
	"Remo", "Atlético Mineiro", "Athétlico Paranaense", "CSA", "CRB"];

// Club names (Foreign)

const clubNamesForeign = ["Peñarol", "Nacional", "River Plate", "Boca Juniors", "Milan", "Internazionale",
	"Juventus", "Roma", "Lazio", "Napoli", "Atalanta", "Paris Saint-Germain", "Olympique de Lyon", "Arsenal", 
	"Chelsea", "Tottenham", "Liverpool", "Manchester United", "Manchester City", "Everton", "Barcelona", 
	"Real Madrid", "Atlético de Madrid", "Sevilla", "Bayern de Munique", "Borussia Dortmund", "Schalke", "Porto", 
	"Befinca", "Sporting", "Braga", "Dínamo Kiev", "Dínamo Zagreb", "Cverna Zvezda", "Olympiakos", "Panathinaikos", 
	"Besiktas", "Fenerbahçe", "Galatasaray", "CSKA Moscou", "Zenit São Petersburgo", "Lokomotiv Moscou", "Ajax", "Feyenoord", 
	"PSV Eindhoven", "Club Brugge", "Young Boys", "Legia Varsóvia", "Shaktar Donetsk", "Mazembe", "Raja Casablanca", "Al-Ahly",
	"Al-Hilal", "Kashima Antlers", "Gamba Osaka", "Yokohama F-Marinos", "Ulsan Hyundai", "Shanghai SIPG", "Guangzhou Evergrande",
	"Seattle Sounders", "Atalanta United", "Toronto", "Los Angeles Galaxy", "Tigres", "América", "Necaxa", "Monterrey",
	"Independiente Del Valle", "EMELEC", "Colo-Colo"]

// Generic corruptions (can be applied on any side)

const corruptionsGeneric = ["Merda", "Cocô", "Lixo", "Bosta", "Putrefa", "Desgraça", "Caralho", "Porra", "Verme",
	"Discórdia", "Bumbum", "Otário", "Debilóide", "Rouba", "Caga", "Mijo", "Xixi", "Urina", "Fezes", "Mia Khalifa",
	"Gorfo", "Cachaça", "Cu", "Corno", "Máfia", "Apito", "Crime", "Assalto", "Pau", "Falência", "Mídia", "Órfão", "Bilau",
	"Piupiu", "Pênis", "Vagina", "Bunda", "Chupada", "Boquete", "Fio-terra", "Gozo", "Esperma", "Pircoa", "Mamador", "Lambida",
	"Arrombada", "Diarreia", "Leprosa", "Aidéica", "Bumbumguloso", "Puta", "Satanás"]

// Acronym corruptions (does not lower case the first character)

const corruptionsAcronyms = ["VAR", "PCC", "AIDS", "HIV", "COVID", "FDP", ""]

const generateName = () => {

	// Dynamic pool of team names and corruptions
	var namePool = [], corruptionPool = [];
	
	// 1 - Left: Team, Right: Corruption | 2 - Left: Corruption, Right: Team 
	var pickOrder = generateRandomNumber(2);

	// 1..10 - Acronym | 11..100 - Generic
	var pickCorruptionType = generateRandomNumber(100);

	// Check to see if the corruption can get lowecased (disabled for acronyms)
	var canChangeToLowerCase = true;

	// Check whether to add or not foreign club names to the generator pool
	if (allowNonAmericanClubs)
	{
		namePool = clubNames;
		namePool.concat(clubNamesForeign);
	}
	else
		namePool = clubNames;

	// Check which type of corruption to pick
	if (pickCorruptionType <= 10)
	{
		corruptionPool = corruptionsAcronyms;
		canChangeToLowerCase = false;
	}
	else
		corruptionPool = corruptionsGeneric;

	switch (pickOrder)
	{
		case 1:	// Left: Team name | Right: Corruption
			name_0 = cropTeamName(getTeamName(namePool), true);
			name_1 = getCorruptionName(corruptionPool);
			if (canChangeToLowerCase)
				name_1 = changeToLowerCase(name_1);
		break;
		case 2:	// Left: Corruption | Right: Team name
			name_0 = getCorruptionName(corruptionPool);
			name_1 = changeToLowerCase(cropTeamName(getTeamName(namePool), false));
		break;
	}

	// Check if the first string last letter can be cropped or not
	if (canParseVowelConsonant(name_0, name_1)) {
		name_0 = parseVowelConsonant(name_0);
	}

	// Merge the two parts of the name
	corruptedName = name_0 + name_1;

	// Edit the values of the readonly input to show the result
	document.getElementById("result").value = corruptedName;
};

const generateRandomNumber = (maxNo) => Math.floor((Math.random() * maxNo)) + 1;

const getRandomElement = (arr, number) => arr[number % arr.length];

const chooseMethod = () => Math.floor((Math.random() * (noMethods + 1)));

const changeAllowEuropeanClubs = () => allowNonAmericanClubs = true;

const changeDisallowEuropeanClubs = () => allowNonAmericanClubs = false;

const canParseVowelConsonant = (stringA, stringB) => {
	// Checks if the last letter of the first string is a vowel
	if (vowels.includes(stringA[stringA.length - 1]))
	{
		// Checks if the first letter of the second string is also vowel
		// if so, trims one letter of the first string
		if (vowels.includes(stringB[0]))		
			return true;
	}
	else 
	{
		// Trim if both are consonants as well
		if (!vowels.includes(stringB[0])) 
			return true;
	}
	return false;
}

const parseVowelConsonant = (string, isFirst) => {
	// Failsafe to not trim small strings (<= 3 length)
	if (string.length <= 3)
		return string;

	if (isFirst)
	{
		return string.slice(1);
	}
	else
	{
		return string.slice(0, string.length - 1);
	}
}

const cropTeamName = (string, isLeft) => {
	// Allow at least 3 characters in the team name
	cropPoint = 2 + generateRandomNumber(string.length - 3);

	// isLeft checks whether to trim from right to left (true)
	// or left to right (false)
	if (isLeft)
		return string.slice(0, cropPoint - 1);
	else
		return string.slice(cropPoint);
}

const changeToLowerCase = (string) => {
	return string.charAt(0).toLowerCase() + string.slice(1);
}

const getTeamName = (arr) => {
	return getRandomElement(arr, generateRandomNumber(maxNames));
}

const getCorruptionName = (arr) => {
	return getTeamName(arr);
}