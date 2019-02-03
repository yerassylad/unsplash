import React from 'react';

const SearchBar = props => {
  const { value, onChange } = props;
  console.log('look here', value);
  return (
  <div>
    <div className="ui fluid attached icon input">
      <input type="text" placeholder="Search a very wide input..." value={value} onChange={onChange} />
      <i className="search icon" />
    </div>
  </div>
  );
}

export default SearchBar;
