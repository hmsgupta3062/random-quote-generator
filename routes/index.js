const express = require('express');
const router = express.Router();
const fetchQuote = require('../controllers/fetch').fetchQuote;

/* GET home page. */
router.get('/', function (req, res, next) {
    fetchQuote().then((quote) => {
        res.render('index', {quote: quote});
    });
});

module.exports = router;
