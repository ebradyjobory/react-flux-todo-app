var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _todos = {};

function create(text) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
};

function update(id, update) { // update = {text: text }
  _todos[id] = assign({}, _todos[id], update);
};

function destroy(id) {
  if (_todos[id]) {
    delete _todos[id];
  }
}

var fetchAllData = function () {
  console.log('called')
};

var TodoStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _todos;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  areAllComplete: function () {
    return true;
  },

  removeChangeListener: function (callback) {
    this.on('change', callback);
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
    case 'update':
      var text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
        TodoStore.emitChange();
      }
      break;
    case 'complete':
      var id = action.id;
      update(id, {complete: true});
      TodoStore.emitChange();
      break;
    case 'undoComplete':
      var id = action.id;
      update(id, {complete: false});
      TodoStore.emitChange();
      break;
    case 'destroy':
      var id = action.id;
      destroy(id);
      TodoStore.emitChange();
      break;
    default:
      // no op
  }

});
module.exports = TodoStore;