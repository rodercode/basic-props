interface GreetProps {
  name: string;
  messageCount: number;
  isLoggedIn: string;
}

const GreetProps = (props: GreetProps) => {
  return (
    <div className="greet-props">
      <h2>
        Welcome {props.name}! You have {props.messageCount} unread messages and
        login:{props.isLoggedIn}
      </h2>
    </div>
  );
};

export default GreetProps;
