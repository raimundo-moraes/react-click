import React from 'react'
import '../hojar-de-estilos/Boton.css'

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <div className='botons'>
      <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>
        {texto}
      </button>
    </div>
  )
}

export default Boton;
