import React from 'react';

var Saved = React.createClass({

	getInitialState: function() {
		return {
			update: false
		};
	},

	handleClick: function(id) {
		this.props.deleteSaved(id);
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
				<h3>Saved Articles</h3>

				<div className="list-group">
					{this.props.saved.map(function(search, i) {
						return (
							<div className="articleResultrow">
								<a href={search.link} key={i} target="_blank" className="list-group-item">	
									<h4>{search.title}</h4> 
										
									<p>{search.leadParagraph}</p>
								</a>
								<button 
									className="btn btn-danger" 
									value={search._id}
									onClick= {() => this.handleClick(search._id)}
								>
									Delete
								</button>
							</div>
						);
					}, this)}
				</div>

			</div>

		);
	}
});

module.exports = Saved;