import React, { Component } from 'react';
import sizeMe from 'react-sizeme';

const Col = props => {
  const {images} = props;
  return (
    <div className="column">
      <div>
        {images.map( image => <div style={{backgroundColor: 'white', paddingBottom: '2rem'}}>{image}</div>)}
      </div>
    </div>
  )
}

class Size extends Component {
  _getColumns = () => {
    const width = this.props.size.width;
    if (width < 768) return 1;
    if (width < 992 && width >= 768) return 2;
    return 3;
  }

  _spreadImages = () => {
    const images = this.props.images;
    const amount = this._getColumns();
    if (images.length) {
      let spreaderArray = Array.apply(null, new Array(amount)).map(() => []);
      for(let i = 0; i < images.length; i++) {
        spreaderArray[i % spreaderArray.length].push(images[i]);
      }
      return spreaderArray
    }
  }

  _renderColumns = () => {
    return this._spreadImages().map((arr, index) => <Col key={index} images={arr} />)
  }

  render() {
    const columns = this._getColumns();
    const columnsClassName = columns === 3 ? "three column" : columns === 2 ? "two column" : ""
    return (
    <div className="ui fluid container">
      <div className="ui padded grid">
        <div className={`${columnsClassName} row`} style={{backgroundColor: 'lightgrey'}}>
          {this._renderColumns()}
        </div>
      </div>
    </div>
  );
  }
}

export default sizeMe({refreshRate: 400})(Size);
