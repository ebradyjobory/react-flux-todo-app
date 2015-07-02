var React = require('react');
var List = require('./List.react');

var ToDoList = React.createClass({
  render: function () {
    return (
      <List list={this.props.list}/>
    )
  }
});

module.exports = ToDoList;

