import React from "react";
import { ICharacter } from "./ICharacter";

interface Props {
  character: ICharacter;
}

const CharacterDetails: React.FC<Props> = (props): JSX.Element => {
  return <h3>{props.character.name}</h3>;
};

export default CharacterDetails;
