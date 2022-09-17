import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const App = () => (
  <div>
    <Header />
    //map the notes array and render each item in the array
    {notes.map((foundNote) => (
      <Note
        key={foundNote.key}
        title={foundNote.title}
        content={foundNote.content}
      />
    ))}
    <Footer />
  </div>
);

export default App;
