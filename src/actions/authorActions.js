"use strict";

var Dispatcher = require('../Dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author) {
      var newAuthor = AuthorApi.saveAuthor(author); //Usually use promises or callback from a web API

      //Hey dispatcher, go tell all the stores that an author was just created.
      Dispatcher.dispatch({
        actionType: ActionTypes.CREATE_AUTHOR,
        author: newAuthor
      });
    }
};

module.exports = AuthorActions;
