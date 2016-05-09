/**
 * Created by belilif on 07/05/16.
 */
'use strict';

/*app.controller('todoIndex', function ($scope) {
 console.log("coucou index");
 $scope.test = 'toto';
 });*/

app
    .controller('todosCtrl', function ($scope, todoProvider) {
        $scope.todos = todoProvider.getTodos();
    })

    .controller('todoCreateCtrl', function ($scope, todoProvider, todoListProvider) {
        // pour préciser dans quelle liste ajouter la _todo
        console.log('todoCreateCtrl');
        $scope.todoLists = todoListProvider.getTodoLists();

        // pour afficher les notes y compris celle ajoutée en live
        $scope.todos = todoProvider.getTodos();

        this.createNewTodo = function (todo) {
            console.log('createNewTodo');
            $scope.todos = todoProvider.createTodo(todo);
        }

    })

    .controller('todoDeleteCtrl', function ($scope) {

    });
