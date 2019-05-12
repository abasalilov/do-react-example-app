require("dotenv").config();
var debug = require("debug")("parts-detect");
var cors = require("cors");

var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  api = require("./routes/api"),
  app = express();

app.use();

// view engine setup
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", api);

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log("~~~~~~~~~~~~~~~~~~~~~`err", err);

  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {
      code: err.code
    }
  });
});

app.set("port", process.env.SERVERPORT);

var server = app.listen(app.get("port"), cors(), function() {
  console.log("Express server listening on port " + server.address().port);
  debug("Express server listening on port " + server.address().port);
});

module.exports = app;
