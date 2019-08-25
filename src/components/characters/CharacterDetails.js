import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CharacterDetails = props => {
  const { character } = props.location.state;
  const { name, image, status, species, origin, gender } = character;

  return (
    <Fragment>
      <Link className='btn btn-dark' to='/'>
        Go Back
      </Link>

      <div className='card grid-2'>
        <div className='all-center'>
          <img src={image} style={{ width: "100px" }} className='round-img' />
          <h1>{name}</h1>
          {status === "Alive" ? (
            <p className='badge badge-success'>{status}</p>
          ) : (
            <p className='badge badge-danger'>{status}</p>
          )}
        </div>

        <div className='card text-center'>
          <ul>
            <li>
              <strong>Species: </strong> {species}
            </li>
            <li>
              <strong>Gender: </strong> {gender}
            </li>
            <li>
              <strong>Origin: </strong> {origin.name}
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default CharacterDetails;
