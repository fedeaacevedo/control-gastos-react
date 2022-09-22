import React from 'react'

{/* children es el mensaje que le estamos pasando en nuestra condicion */}
const Mensaje = ({children, tipo}) => {
  return (
    <div className={` alerta ${tipo}`}>
        {children}
    </div>
  )
}

export default Mensaje