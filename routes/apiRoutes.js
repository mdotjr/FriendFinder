// LOAD DATA
var friendsData = require("../data/friends.js");

// ROUTING
module.exports = function(app) {
  // input a GET route that displays JSON of all friends
app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // ...the JSON is pushed to the appropriate JavaScript array
    app.post('/api/friends', function(req, res) {
    // grab new user's score to compare with friend in friendData array
    var newUserScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var mostMatched = 0;

    //runs through all current friends
    for(var i=0; i<friendsData.length; i++){
      var scoresDiff = 0;

      //run through scores to compare friends
      for(var p=0; p<newUserScores.length; p++){
        scoresDiff += (Math.abs(parseInt(friendsData[i].scores[p]) - parseInt(newUserScores[p])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find mostmatched
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[mostMatched]){
        mostMatched = i;
      }
    }
    //return mostMatched data
    var connection = friendsData[mostMatched];
    res.json(connection);
  
    //pushes new submission into the friendsData array
    friendsData.push(req.body);
  });
};


  
  