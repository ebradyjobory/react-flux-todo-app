var React = require('react');
var ToDoInputText = require('./ToDoInputText.react');
var ToDoActions = require('../actions/ToDoActions');

var Header = React.createClass({

  saveHandler: function (text) {
    if(text.trim()) {
      ToDoActions.create(text);
    }
  },

  render: function () {
    return(
      <header id="header">
        <h1>To Dos</h1>
        <ToDoInputText onSave={this.saveHandler} placeholder="What needs to be done?"/>
      </header>
    )
  }
});

module.exports = Header;