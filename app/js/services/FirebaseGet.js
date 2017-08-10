tihcwlApp.factory('firebaseGet', function(){
  // var userId = firebase.auth().currentUser.uid;
  return {
    getWishLists: function() {
      return firebase.database().ref().child("wishLists");
    },
    getWishListById: function(userId) {
      return firebase.database().ref().child("wishLists").child(userId);
    },
    getBandList: function() {
      return firebase.database().ref().child("bandList");
    },
    getBandListbyId: function(bandId) {
      return firebase.database().ref().child("bandList").child(bandId);
    }
  }
})
