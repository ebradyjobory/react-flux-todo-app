var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoItem = require('./TodoItem.react');

var MainSection = React.createClass({

  render: function () {
    return(
      <div>
        <p>{this.props.allTodos}</p>
      </div>
    )
  }
});

module.exports = MainSection;

