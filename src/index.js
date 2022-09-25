//1. Create a new React app.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";


//create root to inject react code into index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

//render app.jsx
root.render(
    <App />
);
