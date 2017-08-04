'use strict';

tihcwlApp.controller('WishListsController',
  function WishListsController($scope, $firebaseArray) {
    let wishListRef = firebase.database().ref().child("wishLists");
    let allWishLists = $firebaseArray(wishListRef);
    $scope.wishLists = allWishLists;
  }
)
