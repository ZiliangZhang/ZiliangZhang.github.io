angular.module('ngRouteExample', ['ngRoute'])
.controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    }).
    when('/experience', {
        templateUrl: 'experience.html',
        controller: 'HomeController'
    }).
    when('/cv', {
        templateUrl: 'cv.html',
        controller: 'HomeController'
    }).
    otherwise({
        redirectTo: '/home'
    });
});

angular.module('myApp', ['ngAnimate']);
