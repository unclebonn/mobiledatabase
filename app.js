var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var { indexRouter } = require('./routes/index');
const { customerRouter } = require('./routes/customer');
var { productRouter } = require("./routes/product")
var models = require("./models/index")
const { default: mongoose } = require('mongoose');
const { cartRouter } = require('./routes/cart');
const { cartDetailRouter } = require('./routes/cart-detail');
const { categoryRouter } = require('./routes/category');

var app = express();

mongoose.connect("mongodb+srv://unclebonn-account:Khoi0938340721@tognotag.2isnhgu.mongodb.net/MobileDatabase", {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => {
    console.log("Kết nối thành công");
  })


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,x-access-token");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("optionsSucessStatus", 200)
  next()
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/customer', customerRouter);
app.use('/api/cart', cartRouter);
app.use('/api/cartdetail', cartDetailRouter)
app.use('/api/product', productRouter)
app.use('/api/category', categoryRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
})



module.exports = app;
