var SearchBox = React.createClass({
  render: function () {
    return React.DOM.div({},
      new React.DOM.p({}, 'Search box'),
      new React.DOM.input({
        placeholder: this.props.placeholder
      })
    );
  }
});

React.renderComponent(
  new SearchBox({
    placeholder: 'my text'
  }),
  document.getElementById('tutorial2')
);