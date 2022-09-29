import React from "react";
import { Route, Switch } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Cadastro from "./pages/Cadastro";
import Avaliacao from "./pages/Avaliacao";
import Mensalidade from "./pages/Mensalidade";
import NovoCadastro from "./pages/NovoCadastro";
import EditarCadastro from "./pages/EditarCadastro";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/agenda">
          <Agenda />
        </Route>
        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
        <Route exact path="/avaliacao">
          <Avaliacao />
        </Route>
        <Route exact path="/mensalidade">
          <Mensalidade />
        </Route>
        <Route exact path="/cadastro/novo">
          <NovoCadastro />
        </Route>
        <Route exact path="/cadastro/editar">
          <EditarCadastro />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
