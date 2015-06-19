var ImageComponent = require('../../../image');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function(props) {

  var propClasses = ['size', 'purpose', 'orientation'];
  var classes = getComponentClasses('component-prompt', propClasses, props);

  return (
    <figure className={classNames(classes)}>
      <div>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <ImageComponent {...props.floatImage} />
      </div>
    </figure>
  );
};
