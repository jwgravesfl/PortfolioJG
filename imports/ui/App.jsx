import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import ListExampleSimple from './Navbar';
import SocialMenu from './Menu.jsx';

const buttonStyle = {
  margin: 12,
};

var divLayoutStyle = {
  backgroundColor: 'black',
  width: "100%",
  height: "100%",
  background: 'url(https://www.cowboydr.com/images/testImages/mainBgBlackPattern.jpg) center / cover'
};




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = (event) => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});


  render(){
      let options = {
        sectionClassName:     'section',
        anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
        scrollBar:            false,
        navigation:           true,
        verticalAlign:        false,
        sectionPaddingTop:    '50px',
        sectionPaddingBottom: '50px',
        arrowNavigation:      true
      };




    return (

    <div style={ divLayoutStyle }>
      <MuiThemeProvider>

          <Header>

            <Router>
              <div>
              <AppBar title="" onLeftIconButtonTouchTap={this.handleToggle} style={{backgroundColor: '#', width: '2%'}} />


                <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} docked={false} width={200} open={this.state.open} zDepth={2} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <ListExampleSimple />


        {/*       <a href="#sectionOne"><RaisedButton label="Home" primary={true} style={buttonStyle} onClick={this.handleClose}/></a>
                  <a href="#sectionTwo"><RaisedButton label="Resume" primary={true} style={buttonStyle} onClick={this.handleClose}/></a>
                  <a href="#sectionThree"><RaisedButton label="Projects" primary={true} style={buttonStyle} onClick={this.handleClose}/></a>
                   */}
                </Drawer>
              </div>
            </Router>
          </Header>
          <Footer>
            <SocialMenu />
          </Footer>
          <SectionsContainer {...options}>
            <Section><Page1 /></Section>
            <Section><Page2 /></Section>
            <Section><Page3 /></Section>
          </SectionsContainer>

      </MuiThemeProvider>
    </div>
    )
  }
}
