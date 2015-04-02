var React = require('react');

var GettingStarted = React.createClass({
  render: function () {
    return (
      <section>
        <h2 className="page-header">Getting started</h2>
        <h2 id="setup" className="page-header">Installing UI Toolkit</h2>
        <p className="lead">You can install UI Toolkit using npm.</p>

        <h3>Terminal</h3>
        <div className="highlight">
          <pre>
            <code className="shell">{'$ npm install --save git+ssh://git@github.com:holidayextras/ui-toolkit.git\n'}</code>
          </pre>
        </div>

        <h3>Sample Usage</h3>
        <p>You can then use <a href="#components">UI Toolkit's Custom Components</a> via:</p>
        <div className="highlight">
          <pre>
            <code className="js">{'var Button = require(\'ui-toolkit\').Button;'}</code>
          </pre>
        </div>

        <p>You can use <a href="http://react-bootstrap.github.io/components.html" target="_blank">React's Default Bootstrap Components</a> via:</p>
        <div className="highlight">
          <pre>
            <code className="js">{'var Alert = require(\'ui-toolkit\').BootstrapAlert;'}</code>
          </pre>
        </div>
      </section>
    );
  }
});

module.exports = GettingStarted;
