tihcwlApp.factory('firebasePost', function(){
  var database = firebase.database();

  function updateBandCounter(postRef, uid) {
    postRef.transaction(function(post) {
      if (post) {
        post.starCount++;
      }
      return post;
    });
  }

  return {
    writeWishList: function(bandArray) {
      let userId = firebase.auth().currentUser.uid;
      database.ref('wishLists/' + userId).update(
        bandArray.map(band => ({ name: band.name}))
      )
    },
    writeBandList: function(bandArray) {
      //add logic that compares bandArray to enteries in the DB, if match inc by 1, if no match push and give count 1.
      bandArray.forEach(function(band) {
        database.ref('bandList').push({
          name: band.name,
          count: 1
        })
      });
    }
  }
})

// bandArray.forEach(function(band){
//   database.ref('bandLists').forEach(function(firebaseBand){
//     if (band.name === firebaseBand.name) {
//       database.ref('bandLists').transaction(function(firebaseBand) {
//         firebaseBand.count++;
//         return firebaseBand;
//       });
//     } else {
//       database.ref('bandList').push({
//         name: band.name,
//         count: 1
//       })
//     }
//   })
// })
