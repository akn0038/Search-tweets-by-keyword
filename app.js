var React = require('react');
var TweetsApp = require('./components/TweetsApp.react');
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

React.render(
  <TweetsApp tweets={initialState}/>,
  document.getElementById('react-app')
);