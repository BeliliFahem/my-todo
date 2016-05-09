/**
 * Created by belilif on 08/05/16.
 */

'use strict';

// data (model). Must be in service
var todos = [
    {'id': 1, 'title': 'Do somthing1 :)', 'status':'Active', 'lastModifDate': '08/05/2016', 'idList':'1'},
    {'id': 2, 'title': 'Do somthing2', 'status':'Active', 'lastModifDate': '08/05/2016', 'idList':'1'},
    {'id': 3, 'title': 'Do somthing3', 'status':'Active', 'lastModifDate': '08/05/2016', 'idList':'2'},
    {'id': 4, 'title': 'Do somthing4', 'status':'Active', 'lastModifDate': '08/05/2016', 'idList':'3'}

];

app.service('todoProvider', function () {

    this.getTodos = function () {
        return todos;
    }

    this.createTodo = function (todo) {
        todos.push(todo);
        return todos;
    }

});