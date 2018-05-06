var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

//mongoose.connect("mongodb://localhost/nytimes");
mongoose.connect("mongodb://heroku_c0r3m009:603535matthew@ds019481.mlab.com:19481/heroku_c0r3m009");
//${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}
//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytimes";
//mongoose.Promise = Promise;
//mongoose.connect(MONGODB_URI);
//mongoose.connect("mongodb://heroku_c0r3m009:eet3hd33n589f6mhlq46424mba@ds143221.mlab.com:19481/heroku_c0r3m009");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/saved", function(req, res) {
	Article.find({}).sort([
			["dateSaved", "descending"]
		]).exec(function(err, doc){
		if (err) {
			console.log(err)
		} else {
			console.log("This is the sent doc on get saved");
			console.log(doc);
			res.send(doc);
		}
	})
});

app.post("/saved", function(req, res) {
	var newArticle = new Article({
		title: req.body.title,
		link: req.body.link,
		leadParagraph: req.body.leadParagraph,
		dateSaved: Date.now()
	});

	newArticle.save(function(err, doc){
		if(err){
			console.log(err);
		} else {
			console.log(doc);
		}
	});
});

app.post("/delete", function(req, res) {
	console.log(req.body.id);

	Article.remove({ _id: req.body.id }, function(err){
		if(err){
			console.log(err);
		}
	});
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

