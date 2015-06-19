var example = (
  <div>
    <UIToolkit.Prompt purpose="success" title="Congratulations" content="payment has been successful, you are now the proud owner of a ROBOT" author="Mark" role="Customer Relations" orientation="vertical" />
    <UIToolkit.Prompt purpose="danger" title="Ooops" content="Payment wasn't taken. Please re-enter your card details" author="Mark" role="Customer Relations" orientation="horizontal"/>
  </div>
);

React.render(example, mountNode);
