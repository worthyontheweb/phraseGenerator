var quotes = [
    'Quote 1',
    'Quote 2',
    'Quote 3',
    'Quote 4',
    'Quote 5',
    'Quote 6',
    'Quote 7',
    'Quote 8',
    'Quote 9',
    'Quote 10',
]
function newQuote() {var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}