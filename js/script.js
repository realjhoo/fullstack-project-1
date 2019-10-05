/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// =-=-=-=-=-=-=-=-= GLOBAL ARRAYS and VARIABLES =-=-=-=-=-=-=-=-=-=-=-=-=-=
let quotes = [
  {
    quote: "I have not yet begun to code",
    source: "Patrick Henry Jones",
    citation: "Twitter",
    year: "1775",
    category: "Things people would have tweeted, if that was a thing"
  },
  {
    quote: "You can't handle the truth",
    source: "Jack Nicholson",
    category: "Things people say in old movies"
  },
  {
    quote: "tenpo suno ni o pona tawa sina",
    source: "Me",
    citation: "Just now... in Toki Pona",
    category: "Things people say at conlang conventions"
  },
  {
    quote: "Beagles unite!",
    source: "Penny Jean the Beagle",
    year: "2017",
    category: "Things my dog would say... if she could talk"
  },
  {
    quote: "You get a car, you get a car, you get a car...",
    source: "Oprah",
    citation: "The Oprah Winfrey Show",
    category: "Things Oprah says when I'm not around"
  },
  {
    quote: "Uh oh!",
    source: "Your Doctor",
    category: "Things your doctor shouldn't say"
  }
];

// make interval visible so timer can be turned off
var interval = false;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function getRandomQuote() {
  // generate a random number between 0 and the length of the array
  let random = Math.floor(Math.random() * quotes.length);

  //use random number to pull a quote
  return quotes[random];
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function printQuote() {
  // declare variables
  let hypertext = "";
  let randomQuote = getRandomQuote();

  // use template literals to drop the values into the string
  hypertext = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;

  // check for existence of citation
  if (randomQuote.citation) {
    // add citation to end of string
    hypertext += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // check for existence of year
  if (randomQuote.year) {
    hypertext += `<span class="year">${randomQuote.year}</span>`;
  }

  // add the category and close the final p tag
  hypertext += `</p><p class="category">Category: ${randomQuote.category}</p>`;

  // jam it into the DOM. Take that, DOM!
  document.getElementById("quote-box").innerHTML = hypertext;
  // change the background color to something still raedable
  changeColor();
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function changeColor() {
  // an array of darkish colors
  colors = [
    "green",
    "red",
    "blue",
    "orange",
    "purple",
    "maroon",
    "steelblue",
    "slategrey",
    "sienna",
    "saddlebrown",
    "midnightblue",
    "mediumblue",
    "black",
    "darkred",
    "darkgreen",
    "navy",
    "chocolate"
  ];
  // generate a random number
  let random = Math.floor(Math.random() * colors.length);
  // use the random number to change the bg color
  document.querySelector("body").style.backgroundColor = colors[random];
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function activateTimer() {
  // get the state of the checkbox
  checked = document.getElementById("chkTimer").checked;
  notChecked = !checked;

  if (checked) {
    // change quote immediately, then change every ten seconds
    printQuote();
    interval = setInterval(printQuote, 10000);
  }

  if (notChecked) {
    clearInterval(interval);
  }
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// eventlistener for checkbox
document.getElementById("chkTimer").addEventListener("click", activateTimer);
