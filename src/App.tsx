import React from "react";
import "./App.css";
import GreetProps from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import AnimalList from "./components/AnimalList";

const App = () => {
  const name = "Johan";
  const number = 4;
  const isOnline: string = "Online";

  interface Person {
    name: string;
    age: number;
    location: string;
    id: number;
  }

  interface Name {
    first: string;
    last: string;
    id: number;
  }

  interface pet {
    type: string;
    name: string;
    age: number;
    id: number;
  }

  const petList: pet[] = [
    { type: "cat", name: "Misse", age: 4, id: 1 },
    { type: "dog", name: "Fido", age: 2, id: 2 },
    { type: "bird", name: "Polly", age: 1, id: 3 },
  ];

  // const person: Name = {
  //   first: "Johan",
  //   last: "Johansson",
  //   id: 1
  // };

  const nameList: Name[] = [
    { first: "Johan", last: "Johansson", id: 1 },
    { first: "Kalle", last: "Karlsson", id: 2 },
    { first: "Lisa", last: "Larsson", id: 3 },
  ];

  return (
    <div className="App">
      <GreetProps name={name} messageCount={number} isLoggedIn={isOnline} />
      {/* <Person name={person.name} age={person.age} location={person.location} /> */}
      <PersonList names={nameList} />
      <AnimalList pets={petList} />
    </div>
  );
};

export default App;
