// Data
const friends = require("../data/friends");


module.exports = function(app) {

  // ROUTING
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // app.post("/api/friends", function(req, res) {
    
  //   let scoreInt = req.body.scores.map(function(meow) {
  //       return parseInt(meow, 10);
  //     });
  //     console.log(scoreInt);
  //   //   friendData.push(scoreInt);
  //     friendData.push(req.body);

  // });

  app.post("/api/friends", function(req, res) {
    let userData = req.body;
    let diff = 0;
    let match = {
      name: '',
      photo: '',
      friendDiff: 100000
    };

    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];

      diff = 0;

      for (let i = 0; i < currentFriend.scores.length; i++) {
        let currentScore = currentFriend.scores[i];
        let userScore = userData.results[i];

        diff += Math.abs(parseInt(currentScore) - parseInt(userScore));
        
      }

      if (diff <=  match.friendDiff) {
        match.name = currentFriend.name;
        match.photo = currentFriend.photo;
        match.diff = currentFriend.diff;
      }
      
    }

res.send(userData);

  });

};