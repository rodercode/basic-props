import React from "react";
import "./App.css";
import GreetProps from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
  }

  const person: Name = {
    first: "Johan",
    last: "Johansson",
  };

  const nameList: Name[] = [
    { first: "Johan", last: "Johansson" },
    { first: "Kalle", last: "Karlsson" },
    { first: "Lisa", last: "Larsson" },
  ];

  return (
    <div className="App">
      <GreetProps name={name} messageCount={number} isLoggedIn={isOnline} />
      {/* <Person name={person.name} age={person.age} location={person.location} /> */}
      <PersonList names={nameList} />
    </div>
  );
};

export default App;
