const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="br3 pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}></input>
    </div>
  );
};

export default SearchBox;
