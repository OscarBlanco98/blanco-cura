import React, {useState} from 'react'
import PaletaColores from './paletacolores.jsx'
function RenderCondicional() {
    const[visible, setVisible]=useState(false);
      const showTitulo = function() {
        if (visible === true){
            setVisible(false);
        }else{
            setVisible(true);
        }
      };
  return (
    <div>
      <button onClick={showTitulo}>Paleta de Colores</button>
      {visible ? <PaletaColores/>: ''}
    </div>
  )
}

export default RenderCondicional
