var React = require('react');
var TodoTextInput = require('./TodoTextInput.react');
var TodoActions = require('../actions/TodoActions.js');
var cx = require('classnames');

var ToDoItem = React.createClass({

  getInitialState: function () {
    return {
      isEditing: false
    }
  },
  render: function () {
    var todo = this.props.todo;
    var input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />;
    }
    return (
      <li
        className={cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
      key={todo.id}>
      <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    )
  },

  _onSave: function(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  _onToggleComplete: function () {
    TodoActions.toggleComplete(this.props.todo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },
  _onDestroyClick: function () {
    TodoActions.destroyItem(this.props.todo.id);
  }
});

module.exports = ToDoItem;

