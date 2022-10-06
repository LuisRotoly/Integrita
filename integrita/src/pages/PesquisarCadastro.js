import BotaoSimples from "../componentes/BotaoSimples";
import { useState } from "react";
import { Link } from "react-router-dom";

function PesquisarCadastro() {
  const [entradaNome, setEntradaNome] = useState([]);
  const [conteudoPesquisa, setConteudoPesquisa] = useState([]);
  var temPaciente = 0;

  function nomeHandler(event) {
    setEntradaNome(event.target.value);
  }

  async function onCLickHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/paciente", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Algo deu Errado");
      }
      const data = await response.json();
      data.forEach(({ codigo, nomePaciente }) => {
        if (nomePaciente === entradaNome) {
          temPaciente = 1;
          setConteudoPesquisa((arrayAntigo) => {
            return [...arrayAntigo, { codigo, nomePaciente }];
          });
        }
      });
    } catch (e) {
      alert("Erro: Não foi possível se conectar ao servidor");
    }
    if (temPaciente === 0) {
      return alert(
        "Não foi encontrado o cadastro do paciente '" +
          entradaNome +
          "'.Por favor tente novamente!"
      );
    }
  }

  return (
    <div>
      <div className="formCadastro">
        <form onSubmit={onCLickHandler}>
          <input type="text" onChange={nomeHandler}></input>
          <BotaoSimples type="submit" titulo="Pesquisar"></BotaoSimples>
        </form>
      </div>
      <div className="resultadosPesquisa">
        {conteudoPesquisa.map(({ codigo, nomePaciente }) => (
          <div>
            <h4 key={codigo}>
              Paciente: {nomePaciente}
              <Link to={`/cadastro/editar/${codigo}`}>
                <BotaoSimples titulo="Alterar"></BotaoSimples>
              </Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PesquisarCadastro;
