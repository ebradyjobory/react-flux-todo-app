var React = require('react');
var ToDoApp = require('./components/ToDoApp.react');
var ToDoActions = require('./actions/ToDoActions');
var ToDoStore = require('./stores/ToDoStore');


var App = React.createClass({
  render: function () {
    return(
      <div>
        <ToDoApp />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));