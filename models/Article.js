var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  leadParagraph: {
    type: String
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  dateSaved: {
    type: Date,
    required: true
  }
});

ArticleSchema.plugin(uniqueValidator);
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
