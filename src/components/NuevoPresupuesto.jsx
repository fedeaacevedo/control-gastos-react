import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('No es un presupuesto valido');
        }else {
            console.log('Es un presupuesto valido');
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
     
        <form className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label>
                    Definir Presupuesto
                </label>
                <input 
                    className="nuevo-presupuesto"
                    type="text"
                    placeholder="Añade tu presupuesto"
                    onChange={ e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value="Añadir" />

            {/* children es el mensaje que le estamos pasando en nuestra condicion */}
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
        </form>

    </div>
  )
}

export default NuevoPresupuesto