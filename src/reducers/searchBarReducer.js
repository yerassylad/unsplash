export default (state = "", action) => {
  if (action.type === "CHANGE_SEARCH_TERM") {
    return action.payload;
  }
  return state;
}
