import React, { useState } from 'react';
import BotaoMenu from "./componentes/BotaoMenu";

function App() {
  const [conteudoAgenda, setConteudoAgenda] = useState('');
  const [conteudoCadastro, setConteudoCadastro] = useState('');
  const [conteudoAvaliacao, setConteudoAvaliacao] = useState('');
  const [conteudoMensalidade, setConteudoMensalidade] = useState('');

  function chamarAgenda(){
    console.log("Agenda");
    //TODO: chamar rota do backend e no retorno mandar resultado no setConteudoAgenda
    setConteudoAgenda('updated');
  }

  function chamarCadastro(){
    console.log("Cadastro Paciente");
  }

  function chamarAvaliacao(){
    console.log("Avaliação Acupuntura");
  }

  function chamarMensalidade(){
    console.log("Mensalidade");
  }

  return (
    <div>
      <div className="centralizado">
        <p className="titulo">Clínica Integrità</p>
        <BotaoMenu onClick={chamarAgenda} titulo="Agenda"></BotaoMenu>
        <BotaoMenu onClick={chamarCadastro} titulo="Cadastro Paciente"></BotaoMenu>
        <BotaoMenu onClick={chamarAvaliacao} titulo="Avaliação Acupuntura"></BotaoMenu>
        <BotaoMenu onClick={chamarMensalidade} titulo="Mensalidade"></BotaoMenu>
      </div>
      <div id="conteudo">{conteudoAgenda}</div>
    </div>
  );
}

export default App;
