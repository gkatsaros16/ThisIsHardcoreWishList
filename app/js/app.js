'use strict'
var tihcwlApp = angular.module('tihcwlApp', ['ngResource', 'ngRoute', 'angular.filter'])
  .config(function($routeProvider){
    $routeProvider.when('/wishlists',
    {
      templateUrl: 'templates/WishLists.html',
      controller: 'WishListsController'
    });
    $routeProvider.otherwise(
    {
      redirectTo: '/wishlists'
    });
  });
