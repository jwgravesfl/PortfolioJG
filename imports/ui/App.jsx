import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import AccountsWrapper from './AccountsWrapper';
import Menu from './Menu';

const buttonStyle = {
  margin: 12,
};

var sectionStyle = {
  backgroundColor: 'Orange',

};


export default class App extends Component {
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

    <div style={ sectionStyle }>
      <MuiThemeProvider>

          <Header>

            <AppBar
              title="J. Graves Portfolio"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              showMenuIconButton={false}
              style={{backgroundColor: 'blue'}}>

                <a href="#sectionOne"><RaisedButton label="Section One" primary={true} style={buttonStyle} /></a>
                <a href="#sectionTwo"><RaisedButton label="Section Two" primary={true} style={buttonStyle} /></a>
                <a href="#sectionThree"><RaisedButton label="Section Three" primary={true} style={buttonStyle} /></a>

              <AccountsWrapper />
            </AppBar>
          </Header>
          <Footer>
            <a href="" className="opa">Dcoumentation</a>
            <a href="">Example Source</a>
            <a href="">About</a>
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
