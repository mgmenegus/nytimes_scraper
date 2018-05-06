import React from 'react';

var Search = React.createClass({

	getInitialState: function() {
		return {
			search: "",
			start: "",
			end: ""
		};
	},

	handleSubmit: function(event) {
		event.preventDefault();
		console.log("handleSubmit ran");
		this.props.setSearch(this.state.search);
		this.props.setStart(this.state.start);
		this.props.setEnd(this.state.end);
		this.setState({
			search: "",
			start: "",
			end: ""
		});

	},

	handleSearch: function(event) {
		this.setState({ search: event.target.value });
	},

	handleStart: function(event) {
		this.setState({ start: event.target.value });
	},

	handleEnd: function(event) {
		this.setState({ end: event.target.value });
	},

	render: function() {

		return (
				<div className="container">
					<h3>Search Parameters</h3>

					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label for="searchTermInput">Search Term:</label>
							<input 
								type="text" 
								className="form-control" 
								id="searchTermInput" 
								onChange={this.handleSearch} 
								placeholder="Example Search" 
								value={this.state.search}
								required 
							/>

							<label for="startDateInput">Start Date:</label>
							<input 
								type="text" 
								className="form-control" 
								id="startDateInput" 
								onChange={this.handleStart} 
								placeholder="Year" 
								value={this.state.start}
								required 
							/>

							<label for="endDateInput">End Date:</label>
							<input 
								type="text" 
								className="form-control" 
								id="endDateInput" 
								onChange={this.handleEnd} 
								placeholder="Year" 
								value={this.state.end}
								required 
							/>

							<button className="btn btn-default">Submit</button>
						</div>
					</form>
				</div>
		);

	}
});

module.exports = Search;