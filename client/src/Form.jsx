import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");

  const [list, setList] = useState([]);

  const addList = () => {
    axios
      .post("http://localhost:4000/post", {
        name: name,
        age: age,
        country: country,
      })
      .then(() => {
        setList([
          ...list,
          {
            name: name,
            age: age,
            country: country,
          },
        ]);
      });
  };

  return (
    <>
      <h1>Input form</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
      />
      <br />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="country"
      />
      <br />
      <button onClick={addList}>Add Employee</button>
    </>
  );
}

export default Form;
