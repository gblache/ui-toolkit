var infoImage = {
  src: 'assets/people-info.png',
  alt: 'Outline of a man'
}

var example = (
  <div>
    <UIToolkit.Prompt purpose="info" title="Welcome to the UI Toolkit" content="We hope you find it useful" floatImage={infoImage} />
  </div>
);

React.render(example, mountNode);
