const redacted = "<REDACTED>";

// bodies, enemies, etc. Must be singular
const corpses = [
	"Sectoid",
	"Muton",
	"Viper",
	"ADVENT Trooper",
	"spammer",
	"Andromedon"
];

const foods = [
	"Necromorph soup",
	"Chrysallid curry",
	"eggs, bugs 'n' chips",
	"snozzcumber squash",
	"eggnog",
	"fried dough",
	"Southern fried pootis bird",
	"rat stew",
	"a Chrysallid spice bag"
];

const alcohol = [
	"Guinness",
	"whiskey",
	"lambig",
	"cognac",
	"grappa",
	"Weissbier"
];

// I hate npm and yarn
const developmentTools = [
	"npm install",
	"yarn install",
	"Maven",
	"capsule coffee machines",
	"photocopiers",
	"doorknobs"
];

const eldersFavourites = [
    "law firm Argue & Phibbs",
	"distillery Uisce Mhún",
	"coffee chain Starman's Petrol",
	"seafood restaurant Surstrommers",
	"PR firm Meta",
	"furniture shop Tacs-Onn-Chairs",
	"weapons manufacturer IKEA"
];

// how to defeat the Warlock in the most ridiculous manner possible
// because he's easily the funniest to do this to
const prankItems = [
	"a bucket of water balanced above a doorway",
	"a carefully placed banana peel",
	"a rake in a doorway",
	"an anvil to the head",
	"a concrete donkey",
	"an ACME Warlock Magnet",
	"a rocket-propelled boxing glove",
	"a Demopan-approved frying pan to the face",
	"a Psionic Big-Head-Mode gem",
	"three spoons and a copy of the complete works of Aesop",
	"their mastery of Jarate",
	"a truckload of Spycrabs",
	"a pile of Lego under his feet",
];

const music = [
	"Epic Sax Guy",
	"Diggy Diggy Hole",
	"the Trololo guy",
	"the Halo Warthog Run theme",
	"Yakety Sax",
	"Gimme Shelter",
	"Raiders of the Lost Ark",
	"Spike In A Rail from Bastion",
	"anything by Two Steps From Hell",
	"Assault on Precinct 13"
];

const firstEntries = [
	"once prank-called the Warlock, claiming that there was a problem with his AVDIOS PC",
	"has arranged a Blade Runner movie night with the Assassin",
	"won the Le Mans 24-hour on a unicycle",
	"once swapped the Warlock's Disruptor Rifle for a broom mid-combat",
	"once swapped a Berserker's combat drugs for recreational drugs",
	"can win a staring contest with a Basilisk",
	"knows the name and gender of TF2's Pyro",
	`makes their own ${getRandomIndex(alcohol)} behind the Skyranger`,
	"can run the length of Hadrian's Wall in less than two hours",
	"interrogates Sectoids by shoving garlic up their noses",
	`finds ${getRandomIndex(corpses)} corpses very opportune for clearing minefields`,
	"destroyed a Sectopod by injecting it with a dart of Sallo Quad-Limbog and causing it to DROP HEALTH",
	"disposed of a particularly annoying spammer by giving them the Hunter's phone number",
	"taught some Stun Lancers how to levitate as a pre-battle meditation technique",
	"secretly joined XCOM to get back at the Speaker for repeatedly teabagging them in Call of Battle '95",
	"can command Resistence members by staring hard enough in a particular direction",
	"resigned from Black Mesa a week before the Resonance Cascade",
	"can climb the north face of the Eiger using only their teeth",
	"plans to go on a roadtrip through Florence, Venice and Rome with the Assassin after this season",
	"can beat Dark Souls without dying once",
	"once made a Sectopod explode by demanding it evaluate the square root of -1 upon 0",
	`can shake off mind control by mentally playing ${getRandomIndex(music)}`,
	"has inserted Keystone Cops footage into ADVENT training films several times"
	
];

const secondEntries = [
	`their favourite food is ${getRandomIndex(foods)}`,
	"they find ADVENT burgers to be excellent rat bait",
	`9 out of 10 Mutons agree that their ${getRandomIndex(foods)} is to die for`,
	"7 out of 11 Vipers think the resulting footage was hilarious",
	"they are fluent in three different dialects of Parseltongue",
	"the Hunter is secretly terrified of their coffee",
	"the Speaker occasionally wakes up screaming about them covering him in whipped cream",
	`they know 2 facts about ${getRandomIndex(corpses)}s, both of which are wrong`,
	"they once beat a Sectoid to death with a wet fish",
	`they have a strange knack for getting ${getRandomIndex(developmentTools)} to just bloody work the first time`,
	`some time before joining XCOM, they worked at the Elders' favourite ${getRandomIndex(eldersFavourites)}`,
	"their driving caused the Assassin to refuse to get into a car for the rest of her life",
	"they are on first-name terms with the Gman",
	`they once defeated the Warlock with ${getRandomIndex(prankItems)}`,
	"the Thalmor name for them translates as 'F***ing Run!'",
	"they have 11 PHDs in Engineering",
	"the Warlock is in the same guild as them in World of Wololo"
];


function getRandomIndex(entries) {
	return entries[Math.floor(Math.random() * entries.length)];
}

function chooseEntry(operationName, soldierName) {
	
	operationName = operationName || redacted;
	soldierName = soldierName || redacted;
	
	let firstEntry = getRandomIndex(firstEntries);
	let secondEntry = getRandomIndex(secondEntries);
	
	const result = `Some say that our MVP for Operation ${operationName} ${firstEntry}. And that ${secondEntry}. All we know is, they're called ${soldierName}.`;
	console.info(result);
    return result;
}

