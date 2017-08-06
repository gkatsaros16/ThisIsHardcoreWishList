'use strict';

tihcwlApp.controller('TIHCWLController', 
  function TIHCWLController($scope, firebaseGet, $firebaseArray, firebaseAuth) {
    console.log( $scope.Auth.isAuthenticated() );
    let bandListRef = firebaseGet.getBandList();
    let bandList = $firebaseArray(bandListRef);
    $scope.bandList = bandList;
  }
)
