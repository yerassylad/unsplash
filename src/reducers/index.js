import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import imagesReducer from './imagesReducer';
import screenWidthReducer from './screenWidthReducer';

export default combineReducers({
  searchBar: searchBarReducer,
  images: imagesReducer,
  screenWidth: screenWidthReducer
});
