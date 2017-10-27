import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

var middleStyle = {
  width: "100%",
  height: "35%",
  textAlign: "center",
  color: 'white',
};

const mymove = keyframes`
0%   {top: -10vh; opacity: 0;}
93% {top: 1vh; opacity: 0,}
94% {top: 0vh; opacity: 1,}
95% {top: 1vh; opacity: .5,}
96% {top: 0vh; opacity: 1,}
97% {top: 1vh; opacity: .5,}
98% {top: 0vh; opacity: 1,}
100% {top: 1vh; opacity: .5,}
101% {top: 0vh; opacity: 1,}
`;

const MyName = styled.div`
text-align: center;
font-family: 'Russo One';
color: 'white';
font-variant: small-caps;
font-style: italic;
width: 100%;
height: 40%;
font-size: 8vw;
position: relative;
animation: ${mymove} 6s ease-in-out;
animation-fill-mode: forwards;
padding-top: 7vh;

`;

export default class Page1Middle extends Component {
  render(){
    return (
      <div style={ middleStyle}>
        <MyName>J Graves</MyName>
      </div>

    )
  }
}
