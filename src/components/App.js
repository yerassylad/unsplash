import React from 'react';
import SearchBar from '../containers/SearchBar';
import Size from '../containers/Size';

const App = props => {
  return (
    <div>
      <SearchBar />
      <Size images={[1,2,3,4,5,6,7,8,9,10]} />
    </div>
  );
}

export default App;
