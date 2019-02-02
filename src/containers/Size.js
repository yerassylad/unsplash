import React, { Fragment, Component } from 'react';
import sizeMe from 'react-sizeme';

const Col = props => {
  return <div style={{display: 'inline-block', height: '100vh', backgroundColor: 'green', border: "10px solid black", width: "100px"}}>{JSON.stringify(props.images)}</div>
}

class Size extends Component {
  _renderColumns = () => {
    const {size} = this.props;
    const count = Math.floor(size.width / 330);
    const images = [1,2,3,4,5,6,7,8,9,10];
    let chunkedArray = Array.apply(null, new Array(count)).map(() => []);
    for(let i = 0; i < images.length; i++) {
      chunkedArray[i % chunkedArray.length].push(images[i]);
    }
    return chunkedArray.map((arr, index) => <Col key={index} images={arr} />) 
  }

  render() { 
    return ( <div>{this._renderColumns()}</div> );
  }
}

export default sizeMe({refreshRate: 400})(Size);
