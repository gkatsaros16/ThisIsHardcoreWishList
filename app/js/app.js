'use strict'
var tihcwlApp = angular.module('tihcwlApp', ['ngResource', 'ngRoute', 'firebase', 'angular.filter'])
  .config(function($routeProvider){

    // Universal resolves
    var rootResolve = {
      auth: function (Auth) {
        return Auth.$waitForSignIn();
      }
    }, 
    modWhen = {
      when: function(path, route) {
        route.resolve = (route.resolve) ? route.resolve : {};
        angular.extend(route.resolve, rootResolve);
        $routeProvider.when(path, route);
        return this;
      }
    },
    customProvider = angular.extend( {}, $routeProvider, modWhen );

    customProvider.when('/wishLists',
    {
      templateUrl: 'templates/WishLists.html',
      controller: 'WishListsController'
    });
    customProvider.when('/createWishList',
    {
      templateUrl: 'templates/CreateWishList.html',
      controller: 'CreateWishListController'
    });
    customProvider.when('/TIHCWL',
    {
      templateUrl: 'templates/TIHCWL.html',
      controller: 'TIHCWLController'
    });
    customProvider.otherwise(
    {
      redirectTo: '/TIHCWL'
    });
  });

tihcwlApp.factory('Auth', ['$firebaseAuth',
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);