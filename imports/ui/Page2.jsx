import React, { Component } from 'react';
import Page2Middle from './Page2Middle.jsx'

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: 'black',
//  background: 'url(https://www.cowboydr.com/images/testImages/CypressSunset.jpg) center / cover'
};

const buttonStyle = {
  margin: 12,
};

export default class Page2 extends Component {
  render(){
    return (
      <div style={ sectionStyle }>
        <section>
        <Page2Middle />
      </section>
      </div>

    )
  }
}
