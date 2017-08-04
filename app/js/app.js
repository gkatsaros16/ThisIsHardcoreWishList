'use strict'
var tihcwlApp = angular.module('tihcwlApp', ['ngResource', 'ngRoute', 'angular.filter'])
  .config(function($routeProvider){
    $routeProvider.when('/wishlists',
    {
      templateUrl: 'templates/Wishlists.html',
      controller: 'WishlistsController'
    });
    $routeProvider.otherwise(
    {
      redirectTo: '/wishlists'
    });
  });
