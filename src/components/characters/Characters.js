import React, { useContext, Fragment } from "react";
import CharacterItem from "./CharacterItem";
import RickMortyContext from "../../context/rickmorty/rickMortyContext";
import Loading from "../layout/Loading";

const Characters = () => {
  const rickMortyContext = useContext(RickMortyContext);
  const { characters, loading, noResult, clearCharacters } = rickMortyContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        {noResult && (
          <p className='text-center'>No Results....Try searching again!</p>
        )}

        {characters.length > 0 && (
          <div className='text-right'>
            <input
              type='submit'
              value='Clear'
              className='btn btn-light'
              style={{ margin: "0" }}
              onClick={clearCharacters}
            />
          </div>
        )}

        <div className='grid-3'>
          {characters.map(character => {
            return <CharacterItem key={character.id} character={character} />;
          })}
        </div>
      </Fragment>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1em"
};

export default Characters;
