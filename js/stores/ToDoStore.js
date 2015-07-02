var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Firebase = require('firebase');

var _toDoList = {};

var create = function (text) {
  var id = (+new Date()+ Math.floor(Math.random() * 9999999)).toString(36);
  var fb = new Firebase('https://reactnotetaker.firebaseio.com');
  fb.child(id).set(text);
};

var TodoStore = assign({}, EventEmitter.prototype, {

  getAll: function () {
    return _toDoList;
  },

  emitChange: function() {
    this.emit('create');
  }

});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case 'create':
      var text = action.text.trim();
      if (text !== '') {
        create(text);
        TodoStore.emitChange();
      }
      break;

    default:
      // no op
  }

});
module.exports = TodoStore;