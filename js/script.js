/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quotes = [
  { quote: "Music is the mediator between the spiritual and the sensual life.", source: "Ludwig van Beethoven" },

  { quote: "Have no fear of perfection - you'll never reach it.", source: "Salvador Dali"},

  { quote: "Instead of condemning people, let's try to understand them.", source: "Dale Carnegie", citation: "How To Win Friends & Influence People", year: 1936 },

  { quote: "Look always to the inner, to the window of Soul", source: "Harold Klemp", citation: "Love- The Keystone of Life" , year: 2004 },

  { quote: "All children are artists. The problem is how to remain an artist once he grows up.", source: "Pablo Picasso" },

  { quote: "We must learn to be totally responsible for all our actions, our deeds, and our thoughts." , source: "Harold Klemp" , citation: "The Language of Soul" , year: 2004},

  { quote: "Becoming a hero is being your very best everyday. That is a choice you make", source: "Kevin Brown" , citation: "The Hero Effect" , year: 2017 }
];

//Array of background colors
const screenColor = ["#53CBED", "#FFC85A", "#AD3959", "#02CCBA", "#0F2B3D", "#cdac81", "#c3bef0", "#70af85", "#2d6187", "#f56a79", "#008891"];

//Get a random background color from the screenColor array
const randomColor = () => {
  const backColor = Math.floor(Math.random() * screenColor.length);
  return screenColor[backColor];
};

//Get a random object from the quotes array
const getRandomQuote = () => {
  const random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
};

// Display the random quote
const printQuote = () => {
  buttonText();
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  // Check for the citation and year attributes
  if (randomQuote.citation) {
      html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
  }
  html += `</p>`;
  document.querySelector("#quote-box").innerHTML = html;

  // Set a random background color
  document.body.style.backgroundColor = randomColor();

};

// Change the button title from 'Show me a quote' to 'Show another quote' after the initial quote generation
const buttonText = () => {
  document.getElementById("load-quote").innerHTML = "Show another quote";
};

// click event listener for the print quote button

document.getElementById("load-quote").addEventListener("click", printQuote, false);
