var React = require('react');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var TodoStore = require('../stores/TodoStore');
var FireBase = require('firebase');
var ReactFireMixin = require('reactfire');


var getToDoState = function() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  }
};

var ToDoApp = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function() {
    return getToDoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div>
        <Header />
        <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete}/>
        <Footer allTodos={this.state.allTodos}/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getToDoState());
  }

});

module.exports = ToDoApp;