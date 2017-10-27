import React, { Component } from 'react';

var divStyle = {
  width: "100%",
  height:  "100%",
};

var sectionStyle = {
  textAlign: "center",
  height: '90vh',
  width: 'auto',
};

export default class Page2Middle extends Component {
  render(){
    return (
      <div style={ divStyle }>
        <section style={ sectionStyle }>
          <a href="https://www.cowboydr.com/images/testImages/JGravesResume.pdf" target="_blank"><img src = "https://www.cowboydr.com/images/testImages/Resume.jpg" /></a>
      </section>
      </div>

    )
  }
}
