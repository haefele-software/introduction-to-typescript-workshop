import React from "react";
import axios from "axios";
import CharacterDetails from "./CharacterDetails";
import { ICharacter } from "./ICharacter";

const CharacterList = () => {
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);

  React.useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then(res => {
      let test: ICharacter[] = res.data.results.map(character => {
        let a = {} as ICharacter;
        a.name = character.name;
        a.height = character.height;
        return a;
      });
      setCharacters(test);
    });
  }, []);

  return (
    <div>
      {characters &&
        characters.map(character => <CharacterDetails character={character} />)}
    </div>
  );
};

export default CharacterList;
