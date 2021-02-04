import React from "react";
import ReactDOM from "react-dom";
import CharacterList from "./CharacterList";

export default function App() {
  return (
    <>
      <h1>Star Wars Characters</h1>
      <CharacterList />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
