import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import Table from "react-bootstrap/Table";

function Pagamento() {
  const url = window.location.pathname;
  const lastSegment = url.split("/").pop();
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaValorTotal, setValorTotal] = useState("");
  const [entradaQuantPilates, setQuantPilates] = useState("");
  const [entradaQuantAcupuntura, setQuantAcupuntura] = useState("");
  const [entradaDadosMensalidade, setDadosMensalidade] = useState("");
  var datas = new Date();
  var dia = String(datas.getDate()).padStart(2, "0");
  var mes = String(datas.getMonth() + 1).padStart(2, "0");
  var ano = datas.getFullYear();
  const dataAtual = dia + "/" + mes + "/" + ano;

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
      codigo: lastSegment,
      quantidadePilates: entradaQuantPilates,
      quantidadeAcupuntura: entradaQuantAcupuntura,
      valorTotal: entradaValorTotal,
      dataAtual: dataAtual,
    };
    console.log(dados);
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
  }

  useEffect(() => {
    fetchNomePaciente(lastSegment);
    fetchMensalidade(lastSegment);
  }, [lastSegment]);

  function fetchNomePaciente(lastSegment) {
    fetch("http://localhost:8080/editar/" + lastSegment)
      .then((resp) => resp.json())
      .then((apiData) => {
        setEntradaNome(apiData.nomePaciente);
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
          <select className="selectPagamento" onChange={aulasPilatesHandler}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <label className="pagamentoEscritoEsquerda">vezes na semana</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="pagamentoEscritoDireita">Acupuntura:</label>
          <select className="selectPagamento" onChange={acupunturaHandler}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label className="pagamentoEscritoEsquerda">vezes</label>
          <label className="pagamentoEscritoDireita">Valor Total:</label>
          <input
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
          {/*entradaDadosMensalidade.map(
            ({ index, pilates, acupuntura, valorPago, data }) => (
              <tr className="linhaTabela" key={index}>
                <td>{pilates}</td>
                <td>{acupuntura}</td>
                <td>{valorPago}</td>
                <td>{data}</td>
              </tr>
            )
            )*/}
        </tbody>
      </Table>
    </div>
  );
}
export default Pagamento;
