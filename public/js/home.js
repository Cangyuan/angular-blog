var app=angular.module('myApp', ['ui.router']);
app.controller('mycontroller',function($scope){
    $scope.win=1;
    $scope.navChange=function(index){
        $scope.win=index;
    }
})