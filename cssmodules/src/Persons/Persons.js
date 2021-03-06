import React from "react";
import Person from "./Person/Person";

const Persons = ({ persons, clicked, changed }) =>
  persons.map((person, index) => {
    return (
      <Person
        click={() => clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(evnt) => changed(evnt, person.id)}
      />
    );
  });

export default Persons;
