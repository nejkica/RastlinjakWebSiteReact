import React, { Component } from 'react';

const Meni = props => {
  const enota = props.seznamHrane.map((trenutniIzbor) => { 
    return (
      <div className='divEnota' key={trenutniIzbor.naslov}>
        <h2>{ trenutniIzbor.naslov }</h2>
        <p>{ trenutniIzbor.opis }</p>
        <p><b>Na voljo: </b>{ trenutniIzbor.naVoljo }</p>
        <img src={ trenutniIzbor.slika } />
      </div>
    );
  });

  return (
    <div id='divVsebina' className='divVsebina'>
      <h1>V ponudbi</h1>
      {enota}
    </div>
  );

};

export default Meni;