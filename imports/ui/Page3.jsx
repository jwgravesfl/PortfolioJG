import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import Background from './images/CypressSunset.jpg';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: 'black',
  background: 'url(https://www.cowboydr.com/images/testImages/heatherJjKyaking.jpg) center / cover'
};

const buttonStyle = {
  margin: 12,
};

export default class Page3 extends Component {
  render(){
    return (
      <div style={ sectionStyle }>
        <section>
        <Button bsStyle='success' style={ buttonStyle }>Page 3</Button>
      </section>
      </div>

    )
  }
}
