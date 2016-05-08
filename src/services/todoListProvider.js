/**
 * Created by belilif on 08/05/16.
 */
'use strict'

var todoList = [
    {'id':1, 'name':'To buy'},
    {'id':2, 'name':'For my family'},
    {'id':3, 'name':'Work'},
];

app.service('todoListProvider', function () {
    
    this.getTodoLists = function () {
        return todoList;
    }

});