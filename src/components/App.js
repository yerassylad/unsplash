import React from 'react';
import ImagesListContainer from '../containers/ImageListContainer';

const images = [1,2,3,4,5,6,7,8,9,10];

const App = props => {
  return (
    <div>
      <ImagesListContainer i={images} />
    </div>
  );
};

export default App;
