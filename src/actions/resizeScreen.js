export default () => {
  return dispatch => {
    dispatch({type: "RESIZE_SCREEN", payload: window.innerWidth});
  }
}
