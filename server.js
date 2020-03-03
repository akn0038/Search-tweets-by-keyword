// Require our dependencies
const express = require('express')
const  exphbs = require('express-handlebars')
const  http = require('http')
const  mongoose = require('mongoose')
const mongodb = require('mongodb')
const twitter = require('twitter')
const routes = require('./routes')
const  config = require('./config')
const streamHandler = require('./utils/streamHandler')
const JSX = require('node-jsx').install()
const React = require('react')
const TweetsApp = React.createFactory(require('./components/TweetsApp.react'))
const Tweet = require('./models/Tweet')
const url = require('url')
//NODE_TLS_REJECT_UNAUTHORIZED='0'

const app = express();
const port = process.env.PORT || 3000;
const twit = new twitter(config.twitter);
const server = http.createServer(app).listen(port);
const io = require('socket.io').listen(server)

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.disable('etag');
mongoose.connect('mongodb://localhost/react-tweets',{ useMongoClient: true});


app.get('/', function(req,res) {
  //mongoose.Collection.remove()
  //mongoose.remove({},callback)
  
    res.render('search-page')
});

app.get('/search', async function(req, res) {

  await twit.stream('statuses/filter',{ track: url.parse(req.url,true).query.key}, function(stream){
    streamHandler(stream,io);
  });
  Tweet.getTweets(0,0, function(tweets, pages) {
    var markup = React.renderToString(
      TweetsApp({
        tweets: tweets
      })
    )
    res.render('home', {
      markup: markup, 
      state: JSON.stringify(tweets) 
    })
}) })


app.get('/page/:page/:skip', routes.page);

app.use("/", express.static(__dirname + "/public/"));