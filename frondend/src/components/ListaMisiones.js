function ListaMisiones({
  misionesFiltradas,
  completarMision,
  rehacerMision,
  eliminarMision,
}) {
  return (
    <section className="bloque">
      <h3>Lista de misiones</h3>

      <div className="lista">
        {misionesFiltradas.map((item) => (
          <div key={item.id} className={`item-mision ${item.estado}`}>
            <div className="estado-circulo"></div>

            <div className="info-tarea">
              <h4>{item.texto}</h4>

              <span className={`etiqueta ${item.prioridad.toLowerCase()}`}>
                {item.prioridad}
              </span>
            </div>

            <div className="lado-derecho">
              <p className="fecha-tarea">
                {item.fecha === "" ? "Sin fecha" : item.fecha}
              </p>

              <div className="acciones">
                {item.estado === "pendiente" ? (
                  <button
                    className="btn-visto"
                    onClick={() => completarMision(item.id)}
                  >
                    ✔
                  </button>
                ) : (
                  <button
                    className="btn-rehacer"
                    onClick={() => rehacerMision(item.id)}
                  >
                    ↩
                  </button>
                )}

                <button
                  className="btn-eliminar"
                  onClick={() => eliminarMision(item.id)}
                >
                  🗑
                </button>
              </div>
            </div>
          </div>
        ))}

        {misionesFiltradas.length === 0 && (
          <p className="mensaje-vacio">No hay misiones para mostrar.</p>
        )}
      </div>
    </section>
  );
}

export default ListaMisiones;