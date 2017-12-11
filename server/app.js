module.exports = function (app) {
  var db = require('./model/models.server.js');
  require('./services/user.service.server.js')(app);
  require('./services/website.service.server.js')(app);
  require('./services/page.service.server.js')(app);
  require('./services/widget.service.server.js')(app);
  require('./services/board.service.server.js')(app);
  require('./services/image.service.server.js')(app);
  require('./services/comment.service.server.js')(app);
};

