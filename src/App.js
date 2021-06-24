import React from "react";

let myVar = "et bienvenu";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Bonjour à tous {myVar} </h1>
      </div>
    );
  }
}