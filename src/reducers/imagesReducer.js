export default (state = [], action) => {
  if (action.type === "GET_IMAGES_SUCCESS") {
    return action.payload;
  }
  return state;
}
