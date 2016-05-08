/**
 * Created by belilif on 07/05/16.
 */
'use strict';

// data (model). Must be in service
var todos = [
    {'id':1, 'title':'Do somthing1', 'lastModifDate':'08/05/2016'},
    {'id':2, 'title':'Do somthing2', 'lastModifDate':'08/05/2016'},
    {'id':3, 'title':'Do somthing3', 'lastModifDate':'08/05/2016'},
    {'id':3, 'title':'Do somthing4', 'lastModifDate':'08/05/2016'}

];

app.controller('todoIndex', function ($scope) {
    console.log("coucou index");
    $scope.test = 'toto';
});

app.controller('todoList', function ($scope) {
    $scope.todos = todos;
});

app.controller('todoCreate', function ($scope) {

});

app.controller('todoDelete', function ($scope) {

});
