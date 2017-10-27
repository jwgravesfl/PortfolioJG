import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcons } from 'react-social-icons';

const footerStyle = {
   textAlign: 'center',
};

export default class SocialMenu extends React.Component {




  render() {
    var urls = [
'https://github.com/jwgravesfl',
'https://codepen.io/jwgraves/',
'https://www.linkedin.com/in/jwgravesfl/',
'https://www.meetup.com/members/216199479/'
];
    return (
      <div>




<SocialIcons urls={urls} style={ footerStyle }/>
      </div>
    );
  }
}
