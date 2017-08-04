tihcwlApp.factory('firebasePost', function(){
  var database = firebase.database();

  return {
    writeWishList: function(bandArray) {
      database.ref('wishLists/').set({
        // id 
        wishList: bandArray.map(band => ({ name: band.name}))
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
