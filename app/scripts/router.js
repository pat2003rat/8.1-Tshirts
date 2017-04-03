var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


var cartContainer = require('./components/cart.jsx');

var AppRouter = Backbone.Router.extend({
  routes: {n
    '': 'index',
    'cart': 'cart'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(cartContainer),
      document.getElementById('app')
    );
  },

  cart: function() {
    ReactDOM.render(
      React.createElement(CartContainer),
      document.getElementById('app')
    )
  }
});

var appRouter = new AppRouter

module.exports = appRouter;
