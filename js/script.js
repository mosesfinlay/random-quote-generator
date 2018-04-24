// List of quotes
const quotes = [
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
  },
  {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    source: "Albert Einstein",
  },
  {
    quote: "The coldest winter I ever spent was a summer in San Francisco.",
    source: "Mark Twain",
  },
  {
    quote: "You can do anything, but not everything.",
    source: "David Allen",
    citation: "Making It All Work",
    year: 2009,
  },
  {
    quote: "Art, freedom and creativity will change society faster than politics.",
    source: "Victor Pinchuk",
  },
  {
    quote: "Make it so!",
    source: "Captain Jean Luc Picard",
    citation: "Star Trek: The Next Generation",
  },
];

// Function that picks a random quote from the "quotes" array
function getRandomQuote() {
  return quotes[Math.round(Math.random() * quotes.length)];
}

// Function that prints that prints the quotes to the page
function printQuote() {
  const quote = getRandomQuote();

  // Interpolates the quotes and into the html
  let html = `<p class="quote"> ${quote.quote} </p>
                <p class="source"> ${quote.source}`;

                if (quote.citation) {
                  html += `<span class="citation"> ${quote.citation}</span>`;
                }
                if (quote.year) {
                  html += `<span class="citation"> ${quote.year} </span>`;
                }

                html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = `#${Math.round(Math.random() * 9)}${Math.round(Math.random() * 9)}${Math.round(Math.random() * 9)}`;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
setInterval(function () {
  printQuote();
}, 12000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
