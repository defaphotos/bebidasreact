import React from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import CategoriasContext from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ListaRecetas from "./componentes/ListaRecetas";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <RecetasProvider>
        <CategoriasContext>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </CategoriasContext>
      </RecetasProvider>
    </ModalProvider>
  );
}

export default App;
