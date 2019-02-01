const defaultState = "";

export default (state = defaultState, action) => {
  if (action.type === "CHANGE_SEARCH_TERM") {
    return action.payload;
  }
  return state;
}
