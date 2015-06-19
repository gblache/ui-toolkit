var ImageComponent = require('../../../image');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function(props) {

  var propClasses = ['size', 'purpose', 'orientation'];
  var classes = getComponentClasses('component-prompt', propClasses, props);

  return (
    <figure className={classNames(classes)}>
      <blockquote>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </blockquote>
      <figcaption>
        <h4>{props.author}</h4>
        <p>{props.role}</p>
        <ImageComponent {...props.floatImage} />
      </figcaption>
    </figure>

  );
};
