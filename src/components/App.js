import React, { Component } from 'react';
import { connect } from 'react-redux';
import resizeScreen from '../actions/resizeScreen';
import ImagesListContainer from '../containers/ImageListContainer';

class App extends Component {
  componentDidMount = () => {
    this.props.resizeScreen();
    window.addEventListener('resize', this.props.resizeScreen)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.props.resizeScreen)
  }

  render() { 
    return (
      <div style={{margin: "0 10px"}}>
        <ImagesListContainer />
      </div>
    );
  }
}
 
export default connect(
    state => ({
      width: state.width
    }),
    { resizeScreen }
  )(App);
