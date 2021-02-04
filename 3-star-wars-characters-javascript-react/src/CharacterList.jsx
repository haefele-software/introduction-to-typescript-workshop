import React from "react";
import axios from "axios";
import CharacterDetails from "./CharacterDetails";

const CharacterList = () => {
  const [characters, setCharacters] = React.useState(null);

  React.useEffect(async () => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(res => setCharacters(res.data.results));
  }, []);

  return (
    <>
      {characters &&
        characters.map(character => <CharacterDetails name={character.name} />)}
    </>
  );
};

export default CharacterList;
