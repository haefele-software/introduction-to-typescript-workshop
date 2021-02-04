import React from "react";
import { render } from "react-dom";
import CharacterList from "./src/CharacterList";

export default function App() {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CharacterList />
    </div>
  );
}

render(<App />, document.getElementById("root"));
