'use strict'
var tihcwlApp = angular.module('tihcwlApp', ['ngResource', 'ngRoute', 'firebase', 'angular.filter'])
  .config(function($routeProvider){
    $routeProvider.when('/wishLists',
    {
      templateUrl: 'templates/WishLists.html',
      controller: 'WishListsController'
    });
    $routeProvider.when('/createWishList',
    {
      templateUrl: 'templates/CreateWishList.html',
      controller: 'CreateWishListController'
    });
    $routeProvider.otherwise(
    {
      redirectTo: '/wishLists'
    });
  });
