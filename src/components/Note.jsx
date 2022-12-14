import React from "react";
import notes from "../notes.js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

//render notes dynamically by accessing props from app.jsx
const Note = (props) => (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    {/* When button is clicked, trigger deleteNote function in App and pass the Id of the item to be deleted */}
    <button
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      <DeleteOutlineIcon />
    </button>
  </div>
);

export default Note;
