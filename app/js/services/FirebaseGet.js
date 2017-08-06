tihcwlApp.factory('firebaseGet', function(){
  // var userId = firebase.auth().currentUser.uid;
  return {
    getWishLists: function() {
      return firebase.database().ref().child("wishLists");
    },
    getBandList: function() {
      return firebase.database().ref().child("bandList");
    }
  }
})
