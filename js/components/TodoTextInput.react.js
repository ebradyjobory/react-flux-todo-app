var React = require('react');

var TodoTextInput = React.createClass({

  getInitialState: function () {
    return {
      value: this.props.value || ''
    }
  },

  _save: function() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function () {
    return(
      <input
        className={this.props.className}
        id={this.props.id}
        placeholer={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    )
  }
});

module.exports = TodoTextInput;