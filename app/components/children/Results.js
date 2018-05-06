import React from 'react';

var Results = React.createClass({

	getInitialState: function() {
		return {
			update: false
		};
	},

	handleClick: function(i) {
		var results = this.props.results;
		var articleToSave = results[i];
		this.props.postSaved(articleToSave);
		this.setState({ update: true });
	},

	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.update){
			this.props.getSaved();
			this.setState({ update: false });
		}
	},

	render: function() {

		return (
			<div className="container">
				<h3>Search Results</h3>	
			
				<div className="list-group">
					{this.props.results.map(function(search, i) {
						return (
							<div className="articleResultrow">
								<a href={search.web_url} key={i} target="_blank" className="list-group-item">	
									<h4>{search.headline.main}</h4> 
										
									<p>{search.lead_paragraph}</p>
								</a>
								<button 
									className="btn btn-success" 
									value={i}
									onClick= {() => this.handleClick(i)}
								>
									Save
								</button>
							</div>
						);
					}, this)}
				</div>
			
			</div>
		);
	}
});

module.exports = Results;