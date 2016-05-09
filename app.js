/**
 * Created by belilif on 07/05/16.
 */
'use strict';

var app = angular.module('mytodo', ['ngRoute']);

app.directive('fastClick', function() {
    return {
        restrict: "A",
    }
});