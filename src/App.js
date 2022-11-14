import React from "react";
import "./App.css";
import Weather from "./component/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <br />
        <footer>
            Omar Ait Bouziaren
        </footer>
      </div>
    </div>
  );
};
export default App;
