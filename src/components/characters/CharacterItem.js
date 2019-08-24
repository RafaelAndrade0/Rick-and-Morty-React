import React from "react";

const CharacterItem = props => {
  const { name, img_url } = props.character;
  return (
    <div className='card text-center'>
      <img
        src={img_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />

      <h3>{name}</h3>
    </div>
  );
};

export default CharacterItem;
