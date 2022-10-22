import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import Table from "react-bootstrap/Table";
import imprimir from "../images/imprimir.png";

function AcompanhamentoPaciente() {
  const url = window.location.pathname;
  const lastSegment = url.split("/").pop();
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaDescricao, setDescricao] = useState("");
  const [entradaDadosAcompanhamento, setDadosAcompanhamento] = useState([]);
  var data = new Date();

  function transformarData(data) {
    var dia = String(data.getDate()).padStart(2, "0");
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var ano = data.getFullYear();
    var dataAtual = dia + "/" + mes + "/" + ano;
    return dataAtual;
  }

  useEffect(() => {
    fetchNomePaciente(lastSegment);
    fetchAcompanhamento(lastSegment);
  }, [lastSegment]);

  function fetchNomePaciente(lastSegment) {
    fetch("http://localhost:8080/paciente/" + lastSegment)
      .then((resp) => resp.text())
      .then((apiData) => {
        setEntradaNome(apiData);
      });
  }

  function fetchAcompanhamento(lastSegment) {
    fetch("http://localhost:8080/acompanhamento/" + lastSegment)
      .then((resp) => resp.json())
      .then((apiData) => {
        setDadosAcompanhamento(apiData);
      });
  }

  async function submitHandler(event) {
    event.preventDefault();
    const dados = {
      codigo: parseInt(lastSegment),
      descricao: entradaDescricao,
      dataAtual: data
    };
    if (entradaDescricao !== "") {
      try {
        const resposta = await fetch("http://localhost:8080/acompanhamento", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });
        if (!resposta.ok) {
          throw new Error("Algo deu Errado");
        } else {
          alert("Mensalidade cadastrada com sucesso!");
        }
      } catch (e) {
        alert("Erro: Não foi possível se conectar ao servidor");
      }
      setDescricao("");
      setDadosAcompanhamento([dados, ...entradaDadosAcompanhamento]);
    }
  }

  function descricaoHandler(event) {
    setDescricao(event.target.value);
  }

  return (
    <div>
      <div className="data">Data: {transformarData(data)}</div>
      <div className="imprimir"><img src={imprimir} width="30" height="30" alt="Edit" /></div>
      <div className="centralizado">
        <form onSubmit={submitHandler}>
          <p className="pagamentoTitulo">Acompanhamento {entradaNome}</p>
          <div className="descricao">
            <label >Descrição:</label>
          </div>
          <textarea
            value={entradaDescricao}
            className="texteAreaObs"
            onChange={descricaoHandler}
          ></textarea>
          <div className="centralizado">
            <BotaoSimples type="submit" titulo="Envia Acompanhamento"></BotaoSimples>
          </div>
        </form>
        <br />
        <hr className="hrAcompanhamento"></hr>
        <br />
        <p className="acompanhamentoTitulo">Acompanhamentos Anteriores:</p>
        <Table className="tamanhoColunaAcompanhamento">
        <tbody>
        {entradaDadosAcompanhamento.map(
          ({ idAcompanhamento, descricao, dataAtual }) => (
            <tr key={idAcompanhamento}>
                <td className="dataSessao">
                  Data Sessão: {transformarData(new Date(dataAtual))}
                </td>
                <td>
              <textarea
                value={descricao}
                className="texteAreaAcomp"
                readOnly
              ></textarea>
              </td>
            </tr>
          )
        )}
        </tbody>
        </Table>
      </div>
    </div>
  );
}
export default AcompanhamentoPaciente;
