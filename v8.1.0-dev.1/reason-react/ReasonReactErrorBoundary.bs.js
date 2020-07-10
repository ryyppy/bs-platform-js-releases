'use strict';

var React = require("react");

var getErrorBoundary = (function (Component) {
    function ErrorBoundary(props) {
      Component.call(this);
      this.state = {error: undefined};
    };
    ErrorBoundary.prototype = Object.create(Component.prototype);
    ErrorBoundary.prototype.componentDidCatch = function(error, info) {
      this.setState({error: {error: error, info: info}})
    };
    ErrorBoundary.prototype.render = function() {
      return this.state.error != undefined ? this.props.fallback(this.state.error) : this.props.children
    }
    return ErrorBoundary;
  });

var make = getErrorBoundary(React.Component);

exports.make = make;
/* make Not a pure module */
