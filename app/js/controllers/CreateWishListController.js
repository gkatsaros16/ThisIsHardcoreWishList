'use strict';

tihcwlApp.controller('CreateWishListController',
  function CreateWishListController($scope, firebasePost, firebaseAuth) {
    $scope.bands = [{}];

    //firebaseAuth.isLoggedIn($scope);

    $scope.saveWishList = function(wishList){
      if ($scope.newWishListForm.$valid) {
        firebasePost.writeWishList(wishList)
        firebasePost.writeBandList(wishList)
      }
    };

    $scope.addBand = function(){
      $scope.bands.push({})
    };

    $scope.loginWithFacebook = function() {
      firebaseAuth.loginWithFacebook();
    }

    $scope.signOut = function() {
      firebaseAuth.signOut();
    }
  }
)
