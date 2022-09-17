import React from "react";
import notes from "../notes.js";


//render notes dynamically by accessing props from app.jsx
const Note = (props) => (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

export default Note;
