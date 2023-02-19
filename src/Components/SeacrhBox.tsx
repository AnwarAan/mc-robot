import React from "react";

interface ISearchProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchProps) => {
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
