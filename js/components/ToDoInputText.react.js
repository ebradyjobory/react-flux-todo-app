var React = require('react');

var ToDoInputText = React.createClass ({

  getInitialState: function () {
    return {
      value: this.props.value || ''
    };
  },

  _save: function () {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    })
  },

  _change: function (e) {
    this.setState({
      value: e.target.value
    })
  },
  render: function () {
    return(
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onBlur={this._save}
        onChange={this._change}
        autoFocus={true}
      />
    );
  }

});

module.exports = ToDoInputText;