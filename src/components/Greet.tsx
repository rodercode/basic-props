interface GreetProps {
  name: string;
}

const GreetProps = (props: GreetProps) => {
  return (
    <div className="greet-props">
      <h2>Welcome {props.name}! You have 10 unread messages</h2>
    </div>
  );
};

export default GreetProps;
