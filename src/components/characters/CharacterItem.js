import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterItem = ({ character }) => {
  const { name, image } = character;

  // const handleCharacter = () => {
  //   console.log(character);
  // };

  return (
    <div className='card text-center'>
      <img src={image} alt='' className='round-img' style={{ width: "60px" }} />
      <h3>{name}</h3>
      <Link
        className='btn btn-dark'
        to={{ pathname: "/details", state: { character } }}
      >
        Details
      </Link>
    </div>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterItem;
