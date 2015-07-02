var AppDispatcher = require('../dispatcher/AppDispatcher');

var ToDoActions = {

  create: function(text) {
    AppDispatcher.dispatch({
      actionType: 'create',
      text: text
    });
  }
};

module.exports = ToDoActions;