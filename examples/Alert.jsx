var example = (
  <div>
    <UIToolkit.Alert purpose="success" title="Success">This <a href="#">link</a> is a great thing</UIToolkit.Alert>
    <UIToolkit.Alert purpose="warning" title="Warning">be careful</UIToolkit.Alert>
    <UIToolkit.Alert purpose="info" title="Information">You should pay attention</UIToolkit.Alert>
    <UIToolkit.Alert purpose="danger" title="Danger">Stranger danger</UIToolkit.Alert>
  </div>
);

React.render(example, mountNode);
