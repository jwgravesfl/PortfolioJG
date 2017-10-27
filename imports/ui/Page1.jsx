import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// import Page1Top from './Page1Top';
import EntranceAnimation from './Page1Full';

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: 'black',
//  background: 'url(https://www.cowboydr.com/images/testImages/skywayPierHorizon.jpg) center / cover'
};

var topStyle = {
  width: "100%",
  height: "30%",
  backgroundColor: "",
  textAlign: "center",
};

const bottomStyle = {
  width: "100%",
  height: "30%",
  backgroundColor: "",
  textAlign: "center",
};

const buttonStyle = {
  margin: 12,
};

export default class Page1 extends Component {
  render(){
    return (
      <div style={ sectionStyle }>
          <EntranceAnimation />
      </div>

    )
  }
}
