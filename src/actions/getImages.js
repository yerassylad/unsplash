import unsplash from '../apis/unsplash'

export default () => {
   return async dispatch => {
    try {
      const response = await unsplash.get("photos", {params: {per_page: 100}});
      dispatch({type: "GET_IMAGES_SUCCESS", payload: response.data});
    }
    catch(error) {
      dispatch({type: "GET_IMAGES_ERROR", payload: error.message});
    }
  }
}

