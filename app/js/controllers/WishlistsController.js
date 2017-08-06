'use strict';

tihcwlApp.controller('WishListsController',
  function WishListsController($scope, firebaseGet, $firebaseArray, Auth ) {
    let wishListsRef = firebaseGet.getWishLists();
    let allWishLists = $firebaseArray(wishListsRef);
    console.log( $scope.Auth.getUser(), $scope.Auth.isAuthenticated() );
    $scope.wishLists = allWishLists;
  }
)
