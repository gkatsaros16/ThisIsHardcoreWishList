tihcwlApp.factory('firebaseAuth', function(){
  var _user = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      _user = user;
    } else {
      _user = null;
    }
  });

  return {
    isAuthenticated: function () {
      return !!_user;
    },
    loginWithFacebook: function() {
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
       user = result.user;


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
