import React, { useState } from 'react';

function Search(props) {
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(searchText);
    setSearchText('');
  };

  return (
    <div className="row">
      <div className="container ">
        <div className="input">
          <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <input
                id="searchBox"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <label htmlFor="searchBox">Enter a Location</label>
            </div>

            <button
              className="btn-large waves-effect waves-light"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
