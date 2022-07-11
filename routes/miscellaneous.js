// import the required packages
const express = require('express');

const router = express.Router();

/* redirect all the incoming requests to the '/' */
router.use('/', function(req, res, next) {
  res.status(300).redirect('/');
});

module.exports = router;
