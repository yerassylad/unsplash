import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import sizeMe from 'react-sizeme';
import getImages from '../actions/getImages';
import './style.css'

class ImageListContainer extends Component {
  _getColumns = () => {
    const width = this.props.size.width;
    if (width < 768) return 1;
    if (width < 992 && width >= 768) return 2;
    return 3;
  }

  _spreadImages = () => {
    const images = this.props.i;
    if (!images.length) return null;
    const columnAmount = this._getColumns();
    let spreaderArray = Array.apply(null, new Array(columnAmount)).map(() => []);
    for(let i = 0; i < images.length; i++) {
      spreaderArray[i % spreaderArray.length].push(images[i]);
    }
    return spreaderArray;
  }

  render() {
    const spreadedImages = this._spreadImages();
    const columnAmount = this._getColumns();
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

export default compose(sizeMe({refreshRate: 400}), connect(state => ({images: state.images}), { getImages }))(ImageListContainer);
