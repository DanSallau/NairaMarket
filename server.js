var express = require('express');
var logger = require('morgan');
var multer = require('multer');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var env =  process.env.NODE_ENV = process.env.NODE_ENV || 'developement';

var app = express();

var path = require('path');

var _dirname = path.resolve(path.dirname());

function compile(str, strPath){
    return sass(str).set('filename',strPath)
}
app.set('views', _dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({dest:'./uploads/'}).single('singleInputFileName'));
app.use(express.static(_dirname + '/public'));
app.get('/partials/:partialPath', function(req,res){
    console.log("the params is", req);
    res.render('partials/' + req.params.partialPath);;
})
app.use(sassMiddleware({
    src: __dirname + '/public',
    compile: compile,
    dest: path.join(__dirname, 'public/stylesheets'),
    debug: true,
    indentedSyntax: true,
    outputStyle: 'compressed',
    prefix: '/stylesheets'
}));
app.get('*', function(req, res){
    res.render('index');
});

var port = process.env.PORT || 3030;


//var db = require('./db');

app.listen(port);
console.log("The port is listening ", port);