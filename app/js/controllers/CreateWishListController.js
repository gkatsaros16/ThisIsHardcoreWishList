'use strict';

tihcwlApp.controller('CreateWishListController',
  function CreateWishListController($scope, firebasePost, firebaseGet, firebaseAuth) {
    $scope.bands = [{}];

    //firebaseAuth.isLoggedIn($scope);
    // $scope.userHasWishList = firebaseGet.getWishListById(firebase.auth().currentUser.uid)

    $scope.saveWishList = function(wishList, newWishListForm){
      if (newWishListForm.$valid) {
        firebasePost.writeWishList(wishList)
        firebasePost.writeBandList(wishList)
      }
    };

    $scope.addBand = function(){
      $scope.bands.push({})
    };
  }
)
