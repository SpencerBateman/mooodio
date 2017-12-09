module.exports = function(app) {
  let userModel = require('../model/user/user.model.server');
  let passport = require('passport');
  let bcrypt = require("bcrypt-nodejs");

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/register', register);
  app.post('/api/logout', logout);

  app.get('/api/user', findAllUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.post('/api/user', createUser);

  let LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedIn(req, res) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function localStrategy(usrn, pass, done) {
    userModel.findUserByUsername(usrn).then((user) => {
      if (user.username === usrn && bcrypt.compareSync(pass, user.password)) {
        console.log('sucessfully done');
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
    user.password = bcrypt.hashSync(user.password);
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
    var user = req.body;
    var userId = req.params['userId'];

    userModel
      .updateUser(userId, user)
      .then(function(user) {
        res.json(user);
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
        console.log("then");
        console.log(user);
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
}
