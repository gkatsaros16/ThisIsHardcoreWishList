'use strict';

tihcwlApp.controller('WishListsController',
  function WishListsController($scope, firebaseGet, $firebaseArray, auth ) {
    let wishListsRef = firebaseGet.getWishLists();
    let allWishLists = $firebaseArray(wishListsRef);
    console.log( auth );
    $scope.wishLists = allWishLists;
  }
)
