import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {

  const [allNotes, setAllNotes] = useState([]);

  // Set allNotes array with the previous notes
  // and the newNote that's passed over here from CreateArea component.
  function addNote(newNote) {
    setAllNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

  }

  //Filter allNotes array and exclude the clicked item by matching it's id.
  function deleteNote(id) {
    setAllNotes((prevNotes) => {
      return allNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

 return (
  <div>
    <Header />
    <CreateArea onAdd={addNote}/>
    {/* map the allNotes array, assign keys and id's and render each item in the array */}
    {allNotes.map((foundNote, index) => (
      <Note
        key={index}
        id={index}
        title={foundNote.title}
        content={foundNote.content}
        onDelete={deleteNote}
      />
    ))}
    <Footer />
  </div>
);
} 

export default App;
