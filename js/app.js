var React = require('react');
var ToDoApp = require('./components/ToDoApp.react');


var App = React.createClass({
  render: function () {
    return(
      <div className="container">
        <ToDoApp />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));