var React = require('react');

var List = React.createClass({

  render: function () {

    return(
       <li>List</li>
      )
    var list = this.props.list.map(function (item, index) {
      return(
        <li key={index}>{item}</li>
      )
    });
    return(
      <ul>
      {list}
      </ul>
    )
  }

});

module.exports = List;