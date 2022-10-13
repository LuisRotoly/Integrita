import React from "react";
import { Route, Switch } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Cadastro from "./pages/Cadastro";
import Avaliacao from "./pages/Avaliacao";
import Mensalidade from "./pages/Mensalidade";
import NovoCadastro from "./pages/NovoCadastro";
import EditarCadastro from "./pages/EditarCadastro";
import AvaliacaoAcupuntura from "./pages/AvaliacaoAcupuntura";
import AvaliacaoPilates from "./pages/AvaliacaoPilates";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/cadastro/novo">
          <NovoCadastro />
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
        <Route exact path="/avaliacao">
          <Avaliacao />
        </Route>
        <Route path="/avaliacao/acunpuntura/:codigo">
          <AvaliacaoAcupuntura />
        </Route>
        <Route path="/avaliacao/pilates/:codigo">
          <AvaliacaoPilates />
        </Route>
        <Route path="/mensalidade">
          <Mensalidade />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
