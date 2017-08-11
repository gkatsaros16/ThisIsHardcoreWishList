'use strict';

tihcwlApp.controller('TIHCWLController',
  function TIHCWLController($scope, firebaseGet, $firebaseArray, firebaseAuth) {
    let bandListRef = firebaseGet.getBandList();
    let bandList = $firebaseArray(bandListRef);
    $scope.bandList = bandList;
  }
)
