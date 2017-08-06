tihcwlApp.factory('firebasePost', function(){
  var database = firebase.database();

  return {
    writeWishList: function(bandArray) {
      let userId = firebase.auth().currentUser.uid;
      database.ref('wishLists/' + userId).update(
        bandArray.map(band => ({ name: band.name}))
      )
    },
    writeBandList: function(bandArray) {
      //get band list of all bands
      //possibly wrong here.
      firebase.database().ref('/bandList').once('value')
        .then(function(snapshot) {
          var show =  snapshot.val()
        });
      //add logic that compares bandArray to enteries in the DB, if match inc by 1.
      database.ref('bandList').update(
        bandArray.map(band => ({ name: band.name}))
      )
    }
  }
})
