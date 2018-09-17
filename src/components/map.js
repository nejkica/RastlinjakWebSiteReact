import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const TekstMap = ({ text }) => <div className='mapNapis'>{text}</div>;

const Naslov = ({ naslov }) => <h1>{naslov}</h1>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 46.058179,
      lng: 14.509908
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id='divMap' className='divMap'>
        <div className='divZemljevidTekst'>
          <Naslov 
              naslov={'Kje nas najdete'}
          />
          <p>Proti glavni stavbi Železniške postaje Ljubljana sledite 1. tiru do konca, tam nas boste našli na levi strani. Naslov: Rastlinjak Cafe, Trg OF 6, 1000 Ljubljana</p>
        </div>
        <div className='divZemljevid'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC0odHRLyK-D_zNK7kAxYTF9b3GAQPZpcQ' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <TekstMap
              lat={46.05827}
              lng={14.509908}
              text={'X'}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;