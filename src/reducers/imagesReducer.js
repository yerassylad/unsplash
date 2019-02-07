export default (state = [], action) => {
  if (action.type === "GET_IMAGES_SUCCESS") {
    return [...action.payload];
  }
  if (action.type === "ADD_IMAGES_SUCCESS") {
    return [...state, ...action.payload];
  }
  return state;
}
