/**
 * Created by belilif on 07/05/16.
 */
'use strict';

app.controller('todoLists', function ($scope, todoListProvider) {
    $scope.todoLists = todoListProvider.getTodoLists()
});

app.controller('todoListCreate', function ($scope) {

});

app.controller('todoListDelete', function ($scope) {

});
