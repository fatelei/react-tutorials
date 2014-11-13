var SearchBox = React.createClass({
  getInitialState: function () {
    return {
      value: 'Pro JavaScript'
    };
  },

  render: function () {
    return React.DOM.div({},
      new React.DOM.p({}, 'Search box'),
      new React.DOM.input({
        placeholder: this.props.placeholder,
        value: this.state.value,
        onChange: this.props.onChange
      })
    );
  }
});

React.renderComponent(
  new SearchBox({
    placeholder: 'my text',
    onChange: function (e) {
      alert(e.target.value)
    }
  }),
  document.getElementById('tutorial4')
);