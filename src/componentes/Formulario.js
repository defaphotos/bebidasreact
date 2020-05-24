import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas,guardarConsultar } = useContext(RecetasContext);

  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const obtenerDatosRecetas = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const buscar =(e)=>{
      e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
  }

  return (
    <form className="col-12" onSubmit={buscar}>
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            className="form-control"
            name="nombre"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosRecetas}
          />
        </div>
        <div className="col-md-4">
          <select
            onChange={obtenerDatosRecetas}
            className="form-control"
            name="categoria"
          >
            <option value="">Selecciona Categoría</option>
            {categorias.map((opcion) => {
              return (
                <option key={opcion.strCategory} value={opcion.strCategory}>
                  {opcion.strCategory}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
