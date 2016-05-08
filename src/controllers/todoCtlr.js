/**
 * Created by belilif on 07/05/16.
 */
'use strict';

app.controller('todoIndex', function ($scope) {
    console.log("coucou index");
    $scope.test = 'toto';
});

app.controller('todos', function ($scope, todoProvider) {
    $scope.todos = todoProvider.getTodos();
});

app.controller('todoCreate', function ($scope) {

});

app.controller('todoDelete', function ($scope) {

});
