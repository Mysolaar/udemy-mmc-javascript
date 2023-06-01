const currentDay = document.querySelector('.current-day');
const funFact = document.querySelector('.fun-fact');

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
	'Przeciętnie w ciągu dnia na całym świecie 12 noworodków jest wydawanych ze szpitala nie tym rodzicom, co trzeba.',
	'Sernik został wymyślony w starożytnej Grecji. Podawano go sportowcom podczas Igrzysk Olimpijskich.',
	'Bardziej prawdopodobne jest, że przeżyjesz katastrofę lotniczą, niż że klikniesz w reklamę bannerową w internecie.'
];

const day = new Date();
currentDay.textContent = day.toLocaleString('pl', { weekday: "long" });

const showRandomFact = () => {
	const number = Math.floor(Math.random() * facts.length);
	// console.log(number)
	funFact.textContent = facts[number]
};

showRandomFact();
