import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");

      return;
    }
    setMensaje("");
    // Si el presupuesto es valido, cambiamos a true, este cambio de estado nos habilita a usar otro componente en el header
    // para abrir otra vista
    setIsValidPresupuesto(true)
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" style={{ borderRadius: "15px" }} />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
