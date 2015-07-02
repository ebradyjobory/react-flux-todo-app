var React = require('react');
var InputField = require('./InputField.react');
var ToDoList = require('./ToDoList.react');
var TodoStore = require('../stores/TodoStore');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      list: []
    }
  },
  render: function () {
    return(
      <div>
        <InputField />
        <ToDoList list={this.state.list}/>
      </div>
    );
  }
});

module.exports = ToDoApp;