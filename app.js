// import the required packages
const createError = require('http-errors');
const express = require('express');
const path = require('path');

// initialise an express server
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// set the routes
const indexRouter = require('./routes/index');
const miscRouter = require('./routes/miscellaneous');

app.use('/', indexRouter);
app.use('/*', miscRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// run the server
app.listen(process.env.PORT || 3000)
