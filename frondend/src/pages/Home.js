import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FormMision from "../components/FormMision";
import FiltrosResumen from "../components/FiltrosResumen";
import ListaMisiones from "../components/ListaMisiones";
import Footer from "../components/Footer";

function Home() {
  const [misiones, setMisiones] = useState([]);
  const [mision, setMision] = useState("");
  const [prioridad, setPrioridad] = useState("Media");
  const [fecha, setFecha] = useState("");
  const [filtro, setFiltro] = useState("todas");

  const agregarMision = () => {
    if (mision.trim() === "") return;

    const nuevaMision = {
      id: Date.now(),
      texto: mision,
      prioridad: prioridad,
      fecha: fecha,
      estado: "pendiente",
    };

    setMisiones([...misiones, nuevaMision]);
    setMision("");
    setPrioridad("Media");
    setFecha("");
  };

  const completarMision = (id) => {
    setMisiones(
      misiones.map((item) =>
        item.id === id ? { ...item, estado: "completado" } : item
      )
    );
  };

  const rehacerMision = (id) => {
    setMisiones(
      misiones.map((item) =>
        item.id === id ? { ...item, estado: "pendiente" } : item
      )
    );
  };

  const eliminarMision = (id) => {
    setMisiones(misiones.filter((item) => item.id !== id));
  };

  const misionesFiltradas = misiones.filter((item) => {
    if (filtro === "pendientes") return item.estado === "pendiente";
    if (filtro === "completados") return item.estado === "completado";
    return true;
  });

  const total = misiones.length;
  const pendientes = misiones.filter(
    (item) => item.estado === "pendiente"
  ).length;
  const completadas = misiones.filter(
    (item) => item.estado === "completado"
  ).length;

  return (
    <div className="contenedor">
      <Sidebar />

      <main className="principal">
        <Header />

        <FormMision
          mision={mision}
          setMision={setMision}
          prioridad={prioridad}
          setPrioridad={setPrioridad}
          fecha={fecha}
          setFecha={setFecha}
          agregarMision={agregarMision}
        />

        <FiltrosResumen
          setFiltro={setFiltro}
          total={total}
          pendientes={pendientes}
          completadas={completadas}
        />

        <ListaMisiones
          misionesFiltradas={misionesFiltradas}
          completarMision={completarMision}
          rehacerMision={rehacerMision}
          eliminarMision={eliminarMision}
        />

        <Footer />
      </main>
    </div>
  );
}

export default Home;