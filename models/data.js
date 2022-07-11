const quoteData = [{
    url: 'https://dog-api.kinduff.com/api/facts?number=1', parser: 'extract1'
}, {
    url: 'https://uselessfacts.jsph.pl/random.json?language=en', parser: 'extract2'
}, {
    url: 'https://asli-fun-fact-api.herokuapp.com/', parser: 'extract3'
}, {
    url: 'http://numbersapi.com/random/math', parser: 'extract4'
}, {
    url: 'http://numbersapi.com/random/trivia', parser: 'extract4'
}, {
    url: 'http://numbersapi.com/random/year', parser: 'extract4'
}, {
    url: 'http://numbersapi.com/random/date', parser: 'extract4'
}];

module.exports = quoteData
