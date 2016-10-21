//Create an array of objects to hold quotes

var quotes = [
	
	{
		quote: "You can do anything but not everything.",
		source: "David Allen",
		citation: "Making it all work",
		year: "2009",
		tags: ["business", "life"]
	},
	
	{
		quote: "There are people who have money, and people who are rich.",
		source: "Coco Chanel",
		year: "1952",
		tags: ["life"]
	},

	{
		quote: "Every strike brings me close to the next homerun",
		source: "Babe Ruth",
		citation: "At the ballpark",
		year: "1915",
		tags: ["sports"]
	},
	
	{
		quote: "Whether you think you can or you think you can't, you're right",
		source: "Henry Ford",
		citation: "Making the car",
		year: "1905",
		tags: ["business", "inspiration"]

	},
	
	{
		quote: "I am not a product of my circumstance. I am a product of my decisions",
		source: "Stephen Covey",
		year: "1964",
		tags: ["inspiration", "life"]
	},

	{
		quote: "You can never cross the ocean until you have courage to lose sight of the shore",
		source: "Christopher Columbus",
		tags: ["inspiration", "life"]
	},
];

//create an array to store quotes used
var quotesUsed = [0];

function getRandomNumber(min, max){

	//get a random number between zero and the highest index in quotes array
	return Math.floor(Math.random() * (max - min)) + min;
};

//This function gets a random object from the quotes array
function getRandomQuote(){
	
	//generate a random #
	var randomNumber = getRandomNumber(0, quotes.length);

	// check if randomNumber is present in quotesUsed array, and if all quotes have been used once
	while (quotesUsed.includes(randomNumber) && quotesUsed.length !== quotes.length){
		//generate a new randomNumber
		randomNumber = getRandomNumber(0, quotes.length);
	}
	
	//if all quotes have not been used, add the randomNumber to quotesUsed array
	if (quotesUsed.length !== quotes.length){
		quotesUsed.push(randomNumber);
	}
	
	//return random array item in quotes array
	return quotes[randomNumber];
};

//This function takes the random quote object from the getRandomQuote function and build up a string based on the properties of the object
function printQuote(){
	var selectedQuote = getRandomQuote();

	var quoteString = '<p class="quote"> ';
		quoteString += selectedQuote.quote;
		quoteString += ' </p>';
		quoteString += '<p class="source"> '
		quoteString += selectedQuote.source;
	
	//check for empty citation property and don't add citation block if citation property empty
	if (selectedQuote.citation !== undefined){ 
		quoteString += ' <span class="citation"> ';
		quoteString += selectedQuote.citation;
		quoteString += ' </span>';
	};

	//check for empty year property and don't add year block if citation property empty
	if (selectedQuote.year !== undefined){
		quoteString += ' <span class="year"> ';
		quoteString += selectedQuote.year;
		quoteString += ' </span>'
	};
		quoteString += ' </p>';

		document.getElementById('quote-box').innerHTML = quoteString;
};

//This function stores a random color and adds the random color to background property of body
function randomBackgroundColor(){
	var randomColorValue = "rgb(" + getRandomNumber(0, 256) + "," + getRandomNumber(0, 256) + "," + getRandomNumber(0, 256) + ")";
	
	document.body.style.background = randomColorValue;
};

//store quote button
var quoteButton = document.getElementById('loadQuote');

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
quoteButton.addEventListener("click", printQuote, false);

//change background color of page when quote changes
quoteButton.addEventListener("click", randomBackgroundColor, false);





	










