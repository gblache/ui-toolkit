var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose', 'orientation'];
  var classes = getComponentClasses('component-quote', propClasses, this.props);

  return (
      <blockquote className={classNames(classes)}>
        <h4>{this.props.title}</h4>
        <p>{this.props.children}</p>
        <footer>
          {this.props.author}
          <small>{this.props.role}</small>
        </footer>
      </blockquote>
  );
};
