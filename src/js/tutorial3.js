var SearchBox = React.createClass({
	getInitialState: function () {
		return {
			value: 'Pro JavaScript'
		}
	},

	render: function () {
		return React.DOM.div({},
			new React.DOM.p({}, 'Search box'),
			new React.DOM.input({
				placeholder: this.props.placeholder,
				value: this.state.value
			})
		);
	}
});

React.renderComponent(
	new SearchBox({
		placeholder: 'my text'
	}),
	document.getElementById('tutorial3')
);