function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="logo-box">
          <div className="logo-icono"></div>
          <h1>🎮</h1>
          <h2>Gaming</h2>
          <p>Organiza tu mundo gamer</p>
        </div>

        <nav className="menu">
          <details className="menu-desplegable">
            <summary className="activo">Todas las tareas</summary>

            <div className="submenu">
              <a href="#pendientes">Pendientes</a>
              <a href="#completados">Completados</a>
              <a href="#calendario">Calendario</a>
              <a href="#estadisticas">Estadísticas</a>
              <a href="#ajustes">Ajustes</a>
            </div>
          </details>
        </nav>
      </div>

      <div className="frase">
        <hr className="separador" />
        Cada partida es una nueva oportunidad para mejorar.
      </div>
    </aside>
  );
}

export default Sidebar;