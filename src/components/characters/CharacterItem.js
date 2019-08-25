import React from "react";
import PropTypes from "prop-types";

const CharacterItem = ({ character }) => {
  const { name, image } = character;
  return (
    <div className='card text-center'>
      <img src={image} alt='' className='round-img' style={{ width: "60px" }} />

      <h3>{name}</h3>
    </div>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterItem;
