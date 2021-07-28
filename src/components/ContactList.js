import React, { useState, useEffect } from "react";
import firebase from "../util/firebaseConfig";
import Contact from "./Contact";

const ContactList = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const todoRef = firebase.database().ref("Demotable");
    todoRef.on("value", (snapshot) => {
      const items = snapshot.val();
      const List = [];
      for (let id in items) {
        List.push({ id, ...items[id] });
      }
      console.log(List);
      setData(List);
    });
  }, []);

  return (
    <div>
      {data
        ? data.map((todo, index) => <Contact obj={todo} key={index} />)
        : ""}
    </div>
  );
};

export default ContactList;
