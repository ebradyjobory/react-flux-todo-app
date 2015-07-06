var AppDispatcher = require('../dispatcher/AppDispatcher');

var ToDoActions = {

  create: function(text) {
    AppDispatcher.dispatch({
      actionType: 'create',
      text: text
    });
  },

  updateText: function (id, text) {
    AppDispatcher.dispatch({
      actionType: 'update',
      text: text,
      id: id
    });
  },

  toggleComplete: function (todo) {
    var actionType = todo.complete ? 'undoComplete' : 'complete';
    var id = todo.id;
    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  },

  destroyItem: function (id) {
    AppDispatcher.dispatch({
      actionType: 'destroy',
      id: id
    });
  }
};

module.exports = ToDoActions;