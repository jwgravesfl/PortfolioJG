import React, { Component } from 'react';
// import Background from './images/CypressSunset.jpg';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: 'black',
  backgroundImage: "url('/images/CypressSunset.jpg')"
};

export default class Page1 extends Component {
  render(){
    return (
      <div style={ sectionStyle }>
        <h1>Page1</h1>
      </div>

    )
  }
}
