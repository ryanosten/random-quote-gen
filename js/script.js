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

// event listener to respond to "Show another quote" button clicks


// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomQuote(){
	
	//get a random number between zero and the highest index in quotes array
	var min = 0;
	var max = quotes.length;
	var randomNumber = Math.floor(Math.random() * (max - min)) + min;

	//return random array item in quotes array

	return quotes[randomNumber];
};

function printQuote(){
	var selectedQuote = getRandomQuote();

	var quoteString = '<p class="quote"> ';
		quoteString += selectedQuote.quote;
		quoteString += ' </p> ';
		quoteString += '<p class="source"> '
		quoteString += selectedQuote.source;
		quoteString += ' <span class="citation"> ';
		quoteString += selectedQuote.citation;
		quoteString += ' </span>';
		quoteString += ' <span class="year"> ';
		quoteString += selectedQuote.year;
		quoteString += ' </span></p>'; 
};



