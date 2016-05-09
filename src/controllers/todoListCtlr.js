/**
 * Created by belilif on 07/05/16.
 */
'use strict';

app
    .controller('todoLists', function ($scope, todoListProvider) {
        $scope.todoLists = todoListProvider.getTodoLists()
    })

    .controller('todoListCreate', function ($scope) {

    })

    .controller('todoListDelete', function ($scope) {

    });
