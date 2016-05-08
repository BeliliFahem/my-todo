/**
 * Created by belilif on 08/05/16.
 */
'use strict';

app.config(function ($routeProvider) {
    $routeProvider
        .when('/todos/', {
                controller: 'todos',
                templateUrl: '../../../MyToDo/views/todo/todos.html'
        })
        .when('/todo/create', {
                controller: 'todoCreate',
                templateUrl: '../../../MyToDo/views/todo/todoCreate.html'
        })
});