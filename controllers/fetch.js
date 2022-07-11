// import the required packages
const methods = require("./extract");
const dataset = require('../models/data');
const axios = require('axios');

// select a random URL from dataset, fetch it, process it and return it back
exports.fetchQuote = function () {
    const number = Math.floor(Math.random() * 6);
    return axios['get'](dataset[number]['url']).then((data) =>
        eval('methods.' + dataset[number]['parser'] + '(data.data)')
    );
}