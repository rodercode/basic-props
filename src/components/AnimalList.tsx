type AnimalListProps = {
  pets: {
    type: string;
    name: string;
    age: number;
    id: number;
  }[];
};

const AnimalList = (props: AnimalListProps) => {
  return (
    <div>
      {props.pets.map((pet) => {
        return (
          <h2 key={pet.id}>
            {pet.type} {pet.name}
            {pet.age}
          </h2>
        );
      })}
    </div>
  );
};

export default AnimalList;

