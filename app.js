var express         = require('express');
var createError     = require('http-errors');
var cookieParser    = require('cookie-parser');
var sassMiddleware  = require('node-sass-middleware');
var path            = require('path');
var logger          = require('morgan');
var router          = express.Router();

var indexRouter = require('./app/routes/index');

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cookieParser());

app.use(sassMiddleware({
  src: path.join(__dirname, 'assets'),
  dest: path.join(__dirname, 'assets'),
  debug: true,
  outputStyle: 'compressed',
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'assets')));

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

// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});