import CerrarBtn from '../src/img/cerrar.svg'
const Modal = ({setModal, animarModal, setAnimarModal}) => {
  
  const ocultarModal = () => {
    
    setAnimarModal(false)

    setTimeout( () => {
      setModal(false)
    }, 500)
  }
    return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
                src={CerrarBtn}
                alt='cerrar modal'
                onClick={ocultarModal}
            />
        </div>
         
         <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
          <div className='campo'>
              <label htmlFor='nombre'>Nombre Gasto</label>

              <input 
              id='nombre'
                type='text'
                placeholder='Añade el nuevo gasto'
              />
          </div>

          <div className='campo'>
              <label htmlFor='cantidad'>Cantidad</label>

              <input 
              id='cantidad'
                type='number'
                placeholder='Añade la cantidad del gasto. Ej: $200'
              />
          </div>

          <div className='campo'>
              <label htmlFor='categoria'>Categoria</label>

              <select id='categoria'>
                <option value=''>--SELECCIONE--</option>
              </select>
          </div>
         
         </form>



    </div>
  )
}

export default Modal