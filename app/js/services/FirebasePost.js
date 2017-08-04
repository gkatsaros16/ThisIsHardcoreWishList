tihcwlApp.factory('firebasePost', function(){
  var database = firebase.database();

  return {
    writeWishList: function(bandArray) {
      //TODO: userId from facebook.
      //let userId = userId
      database.ref('wishLists/').set({
        // id
        '131': bandArray.map(band => ({ name: band.name}))
      })
    },

    updateUpcomingShowToPastShow: function(show) {
      var stripedDate = show.date.replace(/\//g, '')

      database.ref('shows/' + stripedDate).update({
        upcomingShow: false
      });
    }
  }
})
