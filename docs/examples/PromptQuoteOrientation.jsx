var example = (
  <div>
    <UIToolkit.Prompt purpose="success" title="Congratulations" author="Mark" role="Customer Relations" orientation="vertical">payment has been successful, you are now the proud owner of a ROBOT</UIToolkit.Prompt>
    <UIToolkit.Prompt purpose="danger" title="Ooops" author="Mark" role="Customer Relations" orientation="horizontal">Payment wasnt taken. Please re-enter your card details</UIToolkit.Prompt>
  </div>
);

React.render(example, mountNode);
