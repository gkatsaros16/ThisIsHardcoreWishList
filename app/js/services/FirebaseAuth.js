tihcwlApp.factory('firebaseAuth', function(){
  // var userId = firebase.auth().currentUser.uid;
  return {
    // isLoggedIn: function($scope) {
    //   firebase.auth().onAuthStateChanged(function(user) {
    //       if (user) {
    //           $scope.user.authenticated =true;
    //           $scope.$apply()
    //       } else {
    //           $scope.user.authenticated =false;
    //           $scope.$apply()
    //       }
    //   });
    // },

    loginWithFacebook: function() {
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;


      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },
    signOut: function() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
})
