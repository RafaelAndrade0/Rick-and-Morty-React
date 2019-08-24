import React from "react";
import CharacterItem from "./CharacterItem";

const Characters = () => {
  const characters = [
    {
      id: 1,
      name: "Rick Sanchez",
      img_url: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      id: 2,
      name: "Morty Smith",
      img_url: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      id: 3,
      name: "Jerry Smith",
      img_url: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
  ];

  return (
    <div style={userStyle}>
      {characters.map(character => {
        return <CharacterItem key={character.id} character={character} />;
      })}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1em"
};

export default Characters;