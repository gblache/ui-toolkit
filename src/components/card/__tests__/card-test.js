/** @jsx React.DOM */

var CardComponent = require('../code/views/cardView.jsx');

describe('CardComponent', function() {

  it('is an element', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    assert.ok(TestUtils.isElement(<CardComponent image={img} title='title' />));
  });

});
