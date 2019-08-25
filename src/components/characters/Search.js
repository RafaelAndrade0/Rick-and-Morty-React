import React, { useState, useContext } from "react";
import RickMortyContext from "../../context/rickmorty/rickMortyContext";
import Alert from "../layout/Alert";

const Search = () => {
  const rickMortyContext = useContext(RickMortyContext);

  const { searchCharacters, clearCharacters } = rickMortyContext;

  const [text, setText] = useState("");

  const [alert, setAlert] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    if (text !== "") {
      searchCharacters(text);
    } else {
      setAlert("You need to type something!");
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };
  return (
    <div>
      {alert && <Alert msg={alert} />}

      <div className='text-right'>
        <input
          type='submit'
          value='Clear'
          className='btn btn-light'
          style={{ margin: "0" }}
          onClick={clearCharacters}
        />
      </div>

      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search Characters...'
          name='search'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
