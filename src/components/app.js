import React, { Component } from 'react';
import Logo from './logo';
import seznamHrane from './seznamZaVsebino';
import Meni from './meni';
import Map from './map';
import Navi from './navi';
import gumbi from './gumbi';

export default class App extends Component {
  
  render() {
    // console.log(seznamHrane);
    return (
      <div className='app'>
        <div className='divLogo'>
          <Logo />
        </div>
        <div className='divOstalo'>
          <Navi gumbi={ gumbi() } />
          <Meni seznamHrane={ seznamHrane() } />
          <Map />
        </div>
      </div>
    );
  }
}
