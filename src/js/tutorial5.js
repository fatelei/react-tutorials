var SearchBox = React.createClass({
  getInitialState: function () {
    return {
      value: 'Pro JavaScript'
    };
  },

  onInputChange: function (e) {
    this.setState({
      value: e.target.value
    });
    this.props.onChange(e);
  },

  render: function () {
    return React.DOM.div({},
      new React.DOM.p({}, 'Search box'),
      new React.DOM.input({
        placeholder: this.props.placeholder,
        value: this.state.value,
        onChange: this.onInputChange
      })
    );
  }
});

var globalValue = '';

var render = function () {
  React.renderComponent(
    new React.DOM.div({},
      new SearchBox({
        placeholder: 'my text',
        onChange: function (e) {
          globalValue = e.target.value;
          render();
        }
      }),
      new React.DOM.p({}, globalValue)
    ),
    document.getElementById('tutorial5')
  );
};

render();