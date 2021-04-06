var express       = require('express');
var createError   = require('http-errors');
var cookieParser  = require('cookie-parser');
var path          = require('path');
var logger        = require('morgan');
var router        = express.Router();

var indexRouter = require('./app/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

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

module.exports = app;