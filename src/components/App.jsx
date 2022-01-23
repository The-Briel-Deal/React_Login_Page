import React from "react";
import Form from "./Form";
var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Form />}
    </div>
  );
}

export default App;
