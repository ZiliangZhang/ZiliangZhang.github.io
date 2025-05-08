angular.module('ngRouteExample', ['ngRoute'])
.controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    }).
    when('/mylife', {
        templateUrl: 'mylife.html',
        controller: 'HomeController'
    }).
    when('/mycat', {
        templateUrl: 'mycat.html',
        controller: 'HomeController'
    }).
    otherwise({
        redirectTo: '/home'
    });
});

angular.module('myApp', ['ngAnimate']);
