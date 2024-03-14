var express = require('express');
const { login } = require('../controllers/auth-controller');
const { checkTokenAccess } = require('../authentication-utils/jwt-verfification');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

indexRouter.post("/login", login)



exports.indexRouter = indexRouter;
