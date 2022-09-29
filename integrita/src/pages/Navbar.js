import BotaoMenu from "../componentes/BotaoMenu";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [conteudoAgenda, setConteudoAgenda] = useState("");

  async function chamarAgenda() {
    try {
      const response = await fetch("http://localhost:8080/courses/", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Algo deu Errado");
      }
      const data = await response.json();
      console.log("data",data);
      setConteudoAgenda(
        <div>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      );
    } catch (e) {
      alert("Erro: Não foi possível se conectar ao servidor");
    }
  }

  return (
    <div>
      <div className="centralizado">
        <p className="titulo">Clínica Integrità</p>
        <NavLink to="./agenda">
          <BotaoMenu onClick={chamarAgenda} titulo="Agenda"></BotaoMenu>
        </NavLink>
        <NavLink to="./cadastro">
          <BotaoMenu titulo="Cadastro Paciente"></BotaoMenu>
        </NavLink>
        <NavLink to="./avaliacao">
          <BotaoMenu titulo="Avaliação Acupuntura"></BotaoMenu>
        </NavLink>
        <NavLink to="./mensalidade">
          <BotaoMenu titulo="Mensalidade"></BotaoMenu>
        </NavLink>
        <hr color="#804E4C" size="5" width="100%"></hr>
      </div>
      <div id="conteudo">{conteudoAgenda}</div>
    </div>
  );
}
export default Navbar;
