var example = (
  <div>
    <UIToolkit.Prompt purpose="success" title="Success" content="This is a great thing" />
    <UIToolkit.Prompt purpose="warning" title="Warning" content="be careful" />
    <UIToolkit.Prompt purpose="info" title="Information" content="You should pay attention" />
    <UIToolkit.Prompt purpose="danger" title="Danger" content="Stranger danger" />
  </div>
);

React.render(example, mountNode);
