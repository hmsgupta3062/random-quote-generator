// import the required packages
const express = require('express');
const fetchQuote = require('../controllers/fetch').fetchQuote;

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    fetchQuote().then((quote) => {
        res.render('index', {quote: quote});
    });
});

module.exports = router;
