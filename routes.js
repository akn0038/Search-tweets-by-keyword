var JSX = require('node-jsx').install(),
  React = require('react'),
  TweetsApp = React.createFactory(require('./components/TweetsApp.react')),
  Tweet = require('./models/Tweet');

module.exports = {

  page:  function(req, res) {
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
      res.send(tweets);

    });
  }

}