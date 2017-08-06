tihcwlApp.factory('firebasePost', function($firebaseArray, firebaseGet){
  var database = firebase.database();

  // function updateBandCounter(postRef, uid) {
  //   postRef.transaction(function(post) {
  //     if (post) {
  //       post.starCount++;
  //     }
  //     return post;
  //   });
  // }

  return {
    writeWishList: function(bandArray) {
      let userId = firebase.auth().currentUser.uid;
      database.ref('wishLists/' + userId).update(
        bandArray.map(band => ({ name: band.name}))
      )
    },
    writeBandList: function(bandArray) {
      let bandListRef = firebaseGet.getBandList();
      let bandList = $firebaseArray(bandListRef);

      bandList.$loaded()
        .then(function(){
          bandList.forEach(function(firebaseBand) {
            bandArray.forEach(function(bandInBandArray) {
              // //logic to increment band count by 1
              // if (bandInBandArray.name === firebaseBand.name) {
              //   bandListRef.update(function(firebaseBand){
              //     firebaseBand.count++;
              //   })
              // }
            })
          })
        });

      // if no match push and give count 1.
      bandArray.forEach(function(band) {
        database.ref('bandList').push({
          name: band.name,
          count: 1
        })
      });
    }
  }
})

// var databaseRef = firebase.database().ref('bandList')
//
// databaseRef.transaction(function(searches) {
//   if (searches) {
//     searches = searches + 1;
//   }
//   return searches;
// });

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
