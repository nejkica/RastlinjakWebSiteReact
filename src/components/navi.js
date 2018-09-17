import React, { Component } from 'react';

const Navi = props => {
  const enota = props.gumbi.map((trenutniIzbor) => { 
    // const vsebina = document.getElementsByClassName(trenutniIzbor.pojdiNa);
    return (
      <div className='divGumb' key={trenutniIzbor.imeGumba}>
        <a href={trenutniIzbor.pojdiNa}>{trenutniIzbor.imeGumba}</a>
      </div>
    );
  });

  return (
    <div className='divNavi'>
      {enota}
    </div>
  );

};

export default Navi;