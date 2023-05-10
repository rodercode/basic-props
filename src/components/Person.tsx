interface Person {
  name: string;
  age: number;
  location: string;
}

const Person = (props: Person) => {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.location}</h2>
    </div>
  );
};
export default Person;
