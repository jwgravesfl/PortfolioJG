import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Person from 'material-ui/svg-icons/social/person';
import ContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import Build from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AccountsWrapper from './AccountsWrapper';

const ListExampleSimple = () => (

  <div>
    <List>
      <a href="#sectionOne">
        <ListItem primaryText="J. Graves" leftIcon={<Person onClick={this.handleClose}/>} />
      </a>
      <a href="#sectionTwo">
        <ListItem primaryText="Resume" leftIcon={<ActionInfo onClick={this.handleClose}/>} />
      </a>
      <a href="#sectionThree">
        <ListItem primaryText="Portfolio" leftIcon={<Build onClick={this.handleClose}/>} />
      </a>
      <Divider />
      <ListItem>
        <AccountsWrapper />
      </ListItem>
    </List>


  </div>
);

export default ListExampleSimple;
