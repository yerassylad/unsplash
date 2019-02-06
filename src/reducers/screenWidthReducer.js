export default (state = 0, action) => {
  if (action.type === "RESIZE_SCREEN") {
    return action.payload;
  }
  return state;
}
