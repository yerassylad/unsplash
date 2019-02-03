import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
  searchBar: searchBarReducer,
  images: imagesReducer
});
