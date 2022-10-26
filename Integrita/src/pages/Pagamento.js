import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import Table from "react-bootstrap/Table";
import {transformarData, pegaLastSegment} from './helper';

function Pagamento() {
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaValorTotal, setValorTotal] = useState("");
  const [entradaQuantPilates, setQuantPilates] = useState("0");
  const [entradaQuantAcupuntura, setQuantAcupuntura] = useState("0");
  const [entradaDadosMensalidade, setDadosMensalidade] = useState([]);

  function valorTotalHandler(event) {
    setValorTotal(event.target.value);
  }
  function aulasPilatesHandler(event) {
    setQuantPilates(event.target.value);
  }
  function acupunturaHandler(event) {
    setQuantAcupuntura(event.target.value);
  }
  async function submitHandler(event) {
    event.preventDefault();
    const dados = {
      codigo: parseInt(pegaLastSegment(window.location.pathname)),
      pilates: parseInt(entradaQuantPilates),
      acupuntura: parseInt(entradaQuantAcupuntura),
      valorTotal: parseInt(entradaValorTotal)
    };
    if (
      entradaValorTotal >= "1" &&
      entradaValorTotal !== "" &&
      (entradaQuantAcupuntura !== "0" || entradaQuantPilates !== "0")
    ) {
      try {
        const resposta = await fetch("http://localhost:8080/mensalidade", {
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
      setValorTotal("");
      setQuantAcupuntura("0");
      setQuantPilates("0");
      setDadosMensalidade([dados, ...entradaDadosMensalidade]);
    }
  }

  useEffect(() => {
    fetchNomePaciente(pegaLastSegment(window.location.pathname));
    fetchMensalidade(pegaLastSegment(window.location.pathname));
  }, []);

  function fetchNomePaciente(lastSegment) {
    fetch("http://localhost:8080/paciente/" + lastSegment)
      .then((resp) => resp.text())
      .then((apiData) => {
        setEntradaNome(apiData);
      });
  }

  function fetchMensalidade(lastSegment) {
    fetch("http://localhost:8080/mensalidade/" + lastSegment)
      .then((resp) => resp.json())
      .then((apiData) => {
        setDadosMensalidade(apiData);
      });
  }

  return (
    <div>
      <div className="centralizado">
        <form onSubmit={submitHandler}>
          <p className="pagamentoTitulo">Pagamento {entradaNome}</p>
          <label className="pagamentoEscritoDireita">Pilates:</label>
          <select
            value={entradaQuantPilates}
            className="selectPagamento"
            onChange={aulasPilatesHandler}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <label className="pagamentoEscritoEsquerda">vez(es) na semana</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="pagamentoEscritoDireita">Acupuntura:</label>
          <select
            value={entradaQuantAcupuntura}
            className="selectPagamento"
            onChange={acupunturaHandler}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label className="pagamentoEscritoEsquerda">vez(es)</label>
          <label className="pagamentoEscritoDireita">Valor Total:</label>
          <input
            value={entradaValorTotal}
            className="inputMensalidade"
            type="text"
            onChange={valorTotalHandler}
          ></input>
          <label className="pagamentoEscritoEsquerda">R$</label>
          <BotaoSimples type="submit" titulo="Confirma"></BotaoSimples>
        </form>
      </div>
      <br />
      <Table className="tamanhoColuna">
        <thead>
          <tr>
            <th className="theadMensalidade">Pilates</th>
            <th className="theadMensalidade">Acupuntura</th>
            <th className="theadMensalidade">Valor Pago</th>
            <th className="theadMensalidade">Data</th>
          </tr>
        </thead>
        <tbody>
          {entradaDadosMensalidade.map(
            ({ idMensalidade, pilates, acupuntura, valorTotal, dataAtual }) => (
              <tr className="linhaTabela" key={idMensalidade}>
                <td>{pilates} vez(es) na semana</td>
                <td>{acupuntura} vez(es)</td>
                <td>{valorTotal}R$</td>
                <td>{transformarData(new Date(dataAtual))}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}
export default Pagamento;
