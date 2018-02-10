module.exports = function(app) {
  let userModel = require('../model/user/user.model.server');
  let passport = require('passport');
  let bcrypt = require("bcrypt-nodejs");

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


  app.post('/zack/slack', slackBot);
  app.get('/api/user/search', searchUsers);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/register', register);
  app.post('/api/logout', logout);

  app.get('/api/user', findAllUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);

  function slackBot(req, res) {
    res.send("IT WORKS!")
  }

  let LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function localStrategy(usrn, pass, done) {
    userModel.findUserByUsername(usrn).then((user) => {
      if (user.username === usrn && bcrypt.compareSync(pass, user.password)) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }

  function login(req, res) {
    res.json(req.user);
  }

  function register(req, res) {
    var user = req.body;
    if (user.password) {
      user.password = bcrypt.hashSync(user.password);
    }
    userModel.createUser(user).then((user) => {
      req.login(user, function(err) {
        res.json(user);
      });
    });
  }

  function serializeUser(user, done) {
    done(null, user);
  }


  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function updateUser(req, res) {
    let userId = req.params['userId'];
    let user = req.body;
    userModel.findUserById(userId).then(function(originalUser) {
      if (originalUser['password'] !== user['password']) {
        user['password'] = bcrypt.hashSync(user['password']);
      }
      userModel.updateUser(userId, user).then(function(oldUser) {
        userModel.findUserById(userId).then(function (user) {
          res.json(user)
        });
      });
    });
  }

  function findUserById(req, res) {
    var userId  = req.params['userId'];

    userModel
      .findUserById(userId)
      .then(function(user) {
        res.json(user);
      });
  }

  function createUser(req, res) {
    var user = req.body;

    userModel
      .createUser(user)
      .then(function(user) {
        res.json(user);
      });
  };

  function findAllUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    if (username && password) {
      userModel
        .findUserByCredentials(username, password)
        .then(function(user) {
          res.json(user);
        });
    } else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function(user) {
          res.json(user);
        });
      return;
    }
  }

  function searchUsers(req, res) {
    let searchTerm = req.query['searchTerm'];
    userModel.searchUsers(searchTerm).then(function(users) {
      res.json(users);
    })
  }

  function deleteUser(req, res) {
    let userId = req.params['userId'];
    userModel.deleteUser(userId).then(function(ignore) {
      userModel.findUserById(userId).then(function (err, doc) {
        if (!doc) {
          res.json({});
        }
      });
    });
  }
};
