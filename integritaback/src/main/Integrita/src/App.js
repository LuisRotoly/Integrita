import React from "react";
import { Route, Switch } from "react-router-dom";
import Agendas from "./pages/Agendas";
import Cadastro from "./pages/Cadastro";
import Avaliacao from "./pages/Avaliacao";
import Mensalidade from "./pages/Mensalidade";
import NovoCadastro from "./pages/NovoCadastro";
import EditarCadastro from "./pages/EditarCadastro";
import AvaliacaoAcupuntura from "./pages/AvaliacaoAcupuntura";
import AvaliacaoPilates from "./pages/AvaliacaoPilates";
import Pagamento from "./pages/Pagamento";
import Acompanhamento from "./pages/Acompanhamento";
import AcompanhamentoPaciente from "./pages/AcompanhamentoPaciente";
import Navbar from "./pages/Navbar";
import Relatorio from "./pages/Relatorio"

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
          <Agendas />
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
        <Route exact path="/mensalidade">
          <Mensalidade />
        </Route>
        <Route path="/mensalidade/:codigo">
          <Pagamento />
        </Route>
        <Route exact path="/acompanhamento">
          <Acompanhamento />
        </Route>
        <Route path="/acompanhamento/:codigo">
          <AcompanhamentoPaciente />
        </Route>
        <Route path="/relatorio">
          <Relatorio />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
