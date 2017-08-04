tihcwlApp.factory('firebaseGet', function(){
  // var userId = firebase.auth().currentUser.uid;
  return {
    getWishList: function() {
        //userID after /wishlists/
        firebase.database().ref('/wishLists').once('value')
        .then(function(snapshot) {
          //wishlist data
        });
    }
  }
})
