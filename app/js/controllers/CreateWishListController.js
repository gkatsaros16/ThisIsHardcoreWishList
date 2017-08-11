'use strict';

tihcwlApp.controller('CreateWishListController',
  function CreateWishListController($scope, firebasePost, firebaseGet, firebaseAuth, Auth, $firebaseArray) {
    let currentUserRef = Auth.currentUser.uid
    let userWishListRef = firebaseGet.getWishListById(currentUserRef)
    $scope.currentUserWishList = $firebaseArray(userWishListRef)

    $scope.bands = $scope.currentUserWishList || [{}];

    //firebaseAuth.isLoggedIn($scope);
    // $scope.userHasWishList = firebaseGet.getWishListById(firebase.auth().currentUser.uid)

    $scope.saveWishList = function(wishList, newWishListForm){
      if (newWishListForm.$valid) {
        firebasePost.writeWishList(wishList)
        firebasePost.writeBandList(wishList)
      }
    };

    $scope.currentUserWishList = $firebaseArray(userWishListRef)

    $scope.addBand = function(){
      $scope.bands.push({})
    };
  }
)
