/*myApp refers to an HTML element in which the application will run*/
var app = angular.module('myApp', []);
/*create controller - controls the application data, pass in $scope as argument*/
/*myCtrl is a javascript function*/
app.controller('myCtrl', function($scope, $http) {
    /*scope is an object with the available properties and methods*/
    /* EXAMPLE CODE $scope.name="Jimmy";
    $scope.names=[{name:'Jimmy',work:'ISC'},{name:'Randy',work:'ISC'},{name:'Zach',work:'VUMC'}]; */

    $scope.home = true;
    $scope.movies = false;
    $scope.football = false;
    $scope.loadContent = function(tabName) {
        if (tabName == 'home') {
            $scope.home = true;
            $scope.movies = false;
            $scope.football = false;
        }
        else if (tabName == 'movies') {
            $scope.home = false;
            $scope.movies = true;
            $scope.football = false;
        }
        else{
            $scope.home = false;
            $scope.movies = false;
            $scope.football = true;
        }
    }

});
/*create directive - must use camel case when defining and use dashes
with all lowercase in the html*/
app.directive("testDirective", function() {
    return {
        template : "<p>Test directive constructor<p>"
    };
});