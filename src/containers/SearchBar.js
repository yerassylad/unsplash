import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

const mapStateToProps = state => ({ value: state.searchBar })

const mapDispatchToProps = dispatch => ({ onChange: e => dispatch({type: "CHANGE_SEARCH_TERM", payload: e.target.value})});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
