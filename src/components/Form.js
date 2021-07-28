import React, { useState } from "react";
import firebase from "../util/firebaseConfig";

const Form = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleAge = (e) => setAge(e.target.value);

  const submitHandler = () => {
    const tab = firebase.database().ref("Demotable");
    const obj = {
      name,
      city,
      mobile,
      age,
    };
    tab.push(obj);
    setName("");
    setCity("");
    setAge("");
    setMobile("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleName}
        value={name}
        placeholder="Name"
      />
      <br />
      <input
        type="number"
        onChange={handleMobile}
        value={mobile}
        placeholder="Mobile no."
      />
      <br />
      <input type="number" onChange={handleAge} value={age} placeholder="Age" />
      <br />
      <input
        type="text"
        onChange={handleCity}
        value={city}
        placeholder="City"
      />
      <br />
      <br />
      <button onClick={submitHandler}>Submit</button>
      <br />
      <br />
    </div>
  );
};

export default Form;
