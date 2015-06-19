var React = require('react');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    orientation: React.PropTypes.oneOf(['default', 'horizontal', 'vertical'])
  },

  render: function() {
    if(this.props.author) {
      return require('../templates/promptQuoteTemplate.jsx')(this.props);
    }
    return require('../templates/promptTemplate.jsx')(this.props);
  }
});
