import React, { Component } from 'react';
import { connect } from 'react-redux';
import getImages from '../actions/getImages';
import addImages from '../actions/addImages';
import getPercentageScrolled from '../utils/scrolledPercantage';
import './style.css'

class ImageListContainer extends Component {
  state = { columnAmount: null }

  componentDidMount = () => {
    this.props.getImages();
    this.setState({columnAmount: this._getColumns()})
    window.addEventListener('scroll', this._getSecondPage);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.screenWidth !== prevProps.screenWidth) {
      this.setState({columnAmount: this._getColumns()});
    }
  }

  _getSecondPage = () => {
    const pctScrolled = getPercentageScrolled();
    if (pctScrolled === 70) {
      this.props.addImages();
    }
  }

  _getColumns = () => {
    const width = this.props.screenWidth;
    if (width < 768) return 1;
    if (width < 992 && width >= 768) return 2;
    return 3;
  }

  _spreadImages = () => {
    const images = this.props.images;
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
    if (!spreadedImages) return <div />;
    const columnClassName = columnAmount === 3 ? "three" : columnAmount === 2 ? "two" : '';
    return (<div className={`wrapper ${columnClassName}`}>{spreadedImages.map(column => {
      return (<div className="column">
        {column.map(image => {
          return (<div className="item">
            <img src={image.urls.regular} alt="" />
          </div>);
        })}
      </div>);
    })}
    </div>);
  };
}

export default connect(state => ({images: state.images, screenWidth: state.screenWidth}), { getImages, addImages })(ImageListContainer);
