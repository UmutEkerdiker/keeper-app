import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  // Capture the change event and the field that changed, save the values into newNote.
  function createNote(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function expand() {
    setIsClicked(true);
  }

  return (
    <div>
      {/* When form is submitted, trigger onAdd prop and pass newNote value, then set the note area empty. */}
      <form
        className="create-note"
        onSubmit={(event) => {
          props.onAdd(newNote);
          // Prevent page from refreshing when form is submitted.
          event.preventDefault();
          setNewNote({ title: "", content: "" });
        }}
      >
        {/* Set value fields for title and content input to have consistent values within the App */}
        {isClicked && (
          <input
            onChange={createNote}
            value={newNote.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          onChange={createNote}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
        />
        <Zoom in={isClicked}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
