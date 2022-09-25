import React, {useState} from "react";

function CreateArea(props) {

    const [newNote, setNewNote] = useState({});

    // Capture the change event and the field that changed, save the values into newNote.
    function createNote(event) {
        const {name, value} = event.target;
        setNewNote((prevValue) => {
            return ({
                ...prevValue,
                [name]: value
            });
        });
    }

  return (
    <div>
    {/* When form is submitted, trigger onAdd prop and pass newNote value, then set the note area empty. */}
      <form onSubmit={(event) => {
            props.onAdd(newNote);
            // Prevent page from refreshing when form is submitted.
            event.preventDefault();
            setNewNote({title: "", content: ""});
        }}>
        {/* Set value fields for title and content input to have consistent values within the App */}
        <input onChange={createNote} value={newNote.title} name="title" placeholder="Title" />
        <textarea onChange={createNote} value={newNote.content} name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
