function FiltrosResumen({ setFiltro, total, pendientes, completadas }) {
  return (
    <section className="bloque">
      <h3>Filtrar misiones</h3>

      <div className="filtros-resumen">
        <div className="filtros">
          <button className="filtro-btn" onClick={() => setFiltro("todas")}>
            Todas
          </button>

          <button className="filtro-btn" onClick={() => setFiltro("pendientes")}>
            Pendientes
          </button>

          <button
            className="filtro-btn"
            onClick={() => setFiltro("completados")}
          >
            Completados
          </button>
        </div>

        <div className="resumen">
          <div className="card-resumen">
            <h4>Total</h4>
            <span>{total}</span>
          </div>

          <div className="card-resumen">
            <h4>Pendientes</h4>
            <span>{pendientes}</span>
          </div>

          <div className="card-resumen">
            <h4>Completados</h4>
            <span>{completadas}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FiltrosResumen;