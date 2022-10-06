import React from "react";
import { Route, Switch } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Cadastro from "./pages/Cadastro";
import Avaliacao from "./pages/Avaliacao";
import Mensalidade from "./pages/Mensalidade";
import NovoCadastro from "./pages/NovoCadastro";
import PesquisarCadastro from "./pages/PesquisarCadastro";
import EditarCadastro from "./pages/EditarCadastro";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/cadastro/novo">
          <NovoCadastro />
        </Route>
        <Route exact path="/cadastro/editar">
          <PesquisarCadastro />
        </Route>
        <Route path="/cadastro/editar/:codigo">
          <EditarCadastro />
        </Route>
        <Route path="/agenda">
          <Agenda />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/avaliacao">
          <Avaliacao />
        </Route>
        <Route path="/mensalidade">
          <Mensalidade />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
