'use strict';

tihcwlApp.controller('CreateWishListController',
  function CreateWishListController($scope, firebasePost) {
    $scope.wishList = [{}];

    $scope.saveWishList = function(wishList){
      if ($scope.newWishListForm.$valid) {
        firebasePost.writeWishList(wishList)
        firebasePost.writeBandList(wishList)
      }
    };

    $scope.addBand = function(){
      $scope.bands.push({})
    };

    $scope.logedIn = false
    if (firebase.auth().currentUser) {
      $scope.logedIn = true
    }

    $scope.loginWithFacebook = function() {
      FirebaseAuth.loginWithFacebook();
    }

    $scope.signOut = function() {
      FirebaseAuth.signOut();
    }
  }
)
