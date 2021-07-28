import React, { useState } from "react";
import firebase from "../util/firebaseConfig";

const Contact = ({ obj }) => {
  const [edit, setEdit] = useState(0);

  const [name, setName] = useState(obj.name);
  const [mobile, setMobile] = useState(obj.mobile);
  const [age, setAge] = useState(obj.age);
  const [city, setCity] = useState(obj.city);

  const handleName = (e) => setName(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleAge = (e) => setAge(e.target.value);

  const submitHandler = () => {
    const child = firebase.database().ref("Demotable").child(obj.id);
    const obj1 = {
      name,
      city,
      mobile,
      age,
    };
    child.update(obj1);
    setEdit(!edit);
  };

  const handleDelete = () => {
    const child = firebase.database().ref("Demotable").child(obj.id);
    child.remove();
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div style={{ border: "solid 1px" }}>
      {!edit ? (
        <>
          <p>
            <b>Name:</b> {obj.name}
          </p>
          <p>
            <b>Age:</b> {obj.age}
          </p>
          <p>
            <b>PhoneNo: </b> {obj.mobile}
          </p>
          <p>
            <b>City: </b>
            {obj.city}{" "}
          </p>
          <p>
            <button onClick={handleDelete}>Delete</button>{" "}
            <button onClick={handleEdit}>Edit</button>
          </p>
        </>
      ) : (
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
          <input
            type="number"
            onChange={handleAge}
            value={age}
            placeholder="Age"
          />
          <br />
          <input
            type="text"
            onChange={handleCity}
            value={city}
            placeholder="City"
          />
          <br />
          <br />
          <button onClick={submitHandler}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
