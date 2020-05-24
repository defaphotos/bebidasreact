import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ModalContext = createContext();
const ModalProvider = (props) => {
  const [idReceta, guardarIdReceta] = useState(null);
    const [informacion,guardarReceta] = useState({});
  useEffect(()=>{
      if(idReceta === null) return;
    const obtenerReceta =async()=>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const respuesta = await axios.get(url);
        guardarReceta(respuesta.data.drinks[0]);
    }
    obtenerReceta();
  },[idReceta])
  return (
    <ModalContext.Provider value={{ guardarIdReceta,informacion,guardarReceta }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
