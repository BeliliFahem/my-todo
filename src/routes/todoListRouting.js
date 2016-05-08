/**
 * Created by belilif on 08/05/16.
 */
'use strict';

app.config(function ($routeProvider) {
    $routeProvider.when('/todoLists/', {
        controller:'todoLists',
        templateUrl:'../../../MyToDo/views/todo-list/todoList.html'
    })
});