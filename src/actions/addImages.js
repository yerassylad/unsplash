import unsplash from '../apis/unsplash'

export default () => {
   return async dispatch => {
    try {
      const response = await unsplash.get("photos", { params: { page: 2 } });
      dispatch({type: "ADD_IMAGES_SUCCESS", payload: response.data});
    }
    catch(error) {
      dispatch({type: "ADD_IMAGES_ERROR", payload: error.message});
    }
  }
}
