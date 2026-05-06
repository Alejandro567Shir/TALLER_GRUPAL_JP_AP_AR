function FormMision({
  mision,
  setMision,
  prioridad,
  setPrioridad,
  fecha,
  setFecha,
  agregarMision,
}) {
  return (
    <section className="bloque">
      <h3>Agregar nueva misión</h3>

      <form className="formulario">
        <div className="campo">
          <label>Misión</label>
          <input
            type="text"
            placeholder="¿Qué quieres completar hoy?"
            value={mision}
            onChange={(e) => setMision(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Prioridad</label>
          <select
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>

        <div className="campo">
          <label>Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <button type="button" className="btn" onClick={agregarMision}>
          + Agregar misión
        </button>
      </form>
    </section>
  );
}

export default FormMision;