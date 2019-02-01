import React from 'react';

const SearchBar = props => {
  const { value, onChange } = props;
  console.log('look here', value);
  return (
  <div className="ui fluid icon input">
    <input type="text" placeholder="Search a very wide input..." value={value} onChange={onChange} />
    <i className="search icon" />
  </div>
  );
}

export default SearchBar;
