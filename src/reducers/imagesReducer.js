const defaultState = [];

export default (state = defaultState, action) => {
  if (action.type === "GET_IMAGES_SUCCESS") {
    return action.payload;
  }
  return state;
}
