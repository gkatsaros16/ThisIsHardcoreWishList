tihcwlApp.factory('firebaseAuth', function( Auth, $rootScope ){

  return {
    loginWithFacebook: function() {
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        $rootScope.$apply(function () {
          Auth.setUser( result.user );
        });

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        Auth.setUser( null );
      });
    },
    signOut: function() {
      firebase.auth().signOut().then(function() {
        $rootScope.$apply(function () {
          Auth.setUser( null );
        });
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
})
