'use strict'
var tihcwlApp = angular.module('tihcwlApp', ['ngResource', 'ngRoute', 'firebase', 'angular.filter'])
  .config(function($routeProvider){

    // Universal resolves
    var rootResolve = {
      auth: function ($firebaseAuth, $q, Auth ) {
        var dfd = $q.defer();
        $firebaseAuth().$waitForSignIn().then(function( _authedUser ) {
            Auth.setUser( _authedUser );
            dfd.resolve();
        }).catch( function () {
          dfd.reject();
        });
        return dfd.promise;
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
  }).controller( 'AppController', function ( $rootScope, Auth ) {
    $rootScope.Auth = Auth;
  });

tihcwlApp.service('Auth', ['$firebaseAuth',
  function() {

    var svc = {};
    svc.currentUser = null;
    svc.getUser = function () { 
      return svc.currentUser;
    }; 
    svc.setUser = function ( user ) {
      svc.currentUser = user;
    };
    svc.isAuthenticated = function() {
      return !!this.getUser()
    };
      
    return svc;
  }
]);