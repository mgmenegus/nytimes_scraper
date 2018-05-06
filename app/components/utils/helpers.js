var $ = require("jquery");
var axios = require("axios");
var apiKey = "fd55086accba45109946f7f9596171b9";

var helpers = {

	runQuery: function(searchTerm, startDate, endDate) {
		var search = searchTerm;
		var start = startDate;
		var end = endDate;

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		queryURL += '?' + $.param({
  			'api-key': apiKey,
 		  	'q': search,
  			'begin_date': start + "0101",
  			'end_date': end + "1231",
  			'sort': "newest"
  		});

  		return axios.get(queryURL).then(function(response){
  			if(response.data.response.docs){
  				return response.data.response.docs;
  			} else {
  				console.log("Error empty response");
  				return "";
  			}
  		});
  		
	},

	getSaved: function() {
		console.log("getSaved ran");
		
		return axios.get("/saved");
	},

	postSaved: function(post, callback) {
    return axios.post("/saved", {
      title: post.headline.main,
      leadParagraph: post.lead_paragraph,
      link: post.web_url
    })
    .then(function(response){
      console.log(response);

    })
    .catch(function(error){
      console.log(error);
    })

  },

  deleteSaved: function(id) {
    console.log("Helpers js deleteSaved");
    console.log(id);
    
    return axios.post("/delete", {
      id: id
    })
    .then(function(response){
      console.log(response);
      
    })
    .catch(function(error){
      console.log(error);
    })


  }


};

module.exports = helpers;