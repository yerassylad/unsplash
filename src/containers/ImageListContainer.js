import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import sizeMe from 'react-sizeme';
import getImages from '../actions/getImages';
import './style.css'

class ImageListContainer extends Component {
  state = {columnAmount: null, width: 0}

  componentDidMount = () => {
    this._updateWindowDimensions();
    window.addEventListener('resize', this._updateWindowDimensions);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.width !== prevState.width) {
      this.setState({columnAmount: this._getColumns()});
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this._updateWindowDimensions);
  }

  _updateWindowDimensions = () => {
    this.setState({width: window.innerWidth});
  }

  _getColumns = () => {
    const width = this.state.width;
    if (width < 768) return 1;
    if (width < 992 && width >= 768) return 2;
    return 3;
  }

  _spreadImages = () => {
    const images = this.props.i;
    if (!images.length) return null;
    let spreaderArray = Array.apply(null, new Array(this.state.columnAmount)).map(() => []);
    for(let i = 0; i < images.length; i++) {
      spreaderArray[i % spreaderArray.length].push(images[i]);
    }
    return spreaderArray;
  }

  render() {
    const columnAmount = this.state.columnAmount;
    const spreadedImages = this._spreadImages();
    const columnClassName = columnAmount === 3 ? "three" : columnAmount === 2 ? "two" : '';
    return (<div className={`wrapper ${columnClassName}`}>{spreadedImages.map(column => {
      return (<div className="column">
        {column.map(image => {
          return (<div className="item">
            <img src='https://pp.userapi.com/c824700/v824700021/ab807/_dxdmpuBkDQ.jpg' />
          </div>);
        })}
      </div>);
    })}</div>);
  };
}
// sizeMe({refreshRate: 400})

export default connect(state => ({images: state.images}), { getImages })(ImageListContainer);
