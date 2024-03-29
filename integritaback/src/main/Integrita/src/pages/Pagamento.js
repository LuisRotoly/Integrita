import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import Table from "react-bootstrap/Table";
import { transformarData, pegaLastSegment } from "./helper";
import ModalConfirma from "../componentes/ModalConfirma";
import deletes from "../images/deletes.png";

function Pagamento() {
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaValorTotal, setValorTotal] = useState("");
  const [entradaQuantPilates, setQuantPilates] = useState("0");
  const [entradaQuantAcupuntura, setQuantAcupuntura] = useState("0");
  const [entradaQuantFisioterapia, setQuantFisioterapia] = useState("0");
  const [entradaMesReferencia, setMesReferencia] = useState("");
  const [entradaAnoReferencia, setAnoReferencia] = useState(
    new Date().getFullYear().toString().substr(-2)
  );
  const [entradaDadosMensalidade, setDadosMensalidade] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [getIdMensalidade, setGetIdMensalidade] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    tipo: "",
    voltarPagina: "",
    frase: "",
  });

  function valorTotalHandler(event) {
    setValorTotal(event.target.value);
  }

  function aulasPilatesHandler(event) {
    setQuantPilates(event.target.value);
  }

  function acupunturaHandler(event) {
    setQuantAcupuntura(event.target.value);
  }

  function fisioterapiaHandler(event) {
    setQuantFisioterapia(event.target.value);
  }

  function mesReferenciaHandler(event) {
    setMesReferencia(event.target.value);
  }

  function anoReferenciaHandler(event) {
    setAnoReferencia(event.target.value);
  }

  async function confirmaDeleta(valor) {
    if (valor) {
      try {
        const resposta = await fetch(
          "http://localhost:8080/mensalidade/" + getIdMensalidade,
          {
            method: "DELETE",
          }
        );
        if (!resposta.ok) {
          throw new Error("Algo deu Errado");
        } else {
          setModal({
            isOpen: true,
            tipo: "ok",
            voltarPagina: "",
            frase: "Pagamento removido com sucesso!",
          });
        }
      } catch (e) {
        setModal({ isOpen: true, tipo: "erro", voltarPagina: "" });
      }
    }
    setConfirmDelete(false);
    fetchMensalidade(pegaLastSegment(window.location.pathname));
  }

  async function submitHandler(event) {
    event.preventDefault();
    const dados = {
      codigo: parseInt(pegaLastSegment(window.location.pathname)),
      pilates: parseInt(entradaQuantPilates),
      acupuntura: parseInt(entradaQuantAcupuntura),
      fisioterapia: parseInt(entradaQuantFisioterapia),
      valorTotal: parseInt(entradaValorTotal),
      mesReferencia: entradaMesReferencia,
      anoReferencia: entradaAnoReferencia,
    };
    if (
      entradaValorTotal >= "1" &&
      entradaValorTotal !== "" &&
      entradaMesReferencia !== "" &&
      entradaAnoReferencia !== "" &&
      (entradaQuantAcupuntura !== "0" ||
        entradaQuantPilates !== "0" ||
        entradaQuantFisioterapia !== "0")
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
          setModal({
            isOpen: true,
            tipo: "ok",
            voltarPagina: "",
            frase: "Pagamento cadastrado com sucesso!",
          });
        }
      } catch (e) {
        setModal({ isOpen: true, tipo: "erro", voltarPagina: "" });
      }
      setMesReferencia("");
      setAnoReferencia(new Date().getFullYear().toString().substr(-2));
      setValorTotal("");
      setQuantAcupuntura("0");
      setQuantPilates("0");
      setQuantFisioterapia("0");
      fetchMensalidade(pegaLastSegment(window.location.pathname));
    }
  }

  function modalHandler(idMensalidade) {
    setModal({
      isOpen: true,
      tipo: "certeza?",
      voltarPagina: "",
      frase: "Tem certeza que deseja remover esse pagamento?",
    });
    setGetIdMensalidade(idMensalidade);
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
    fetch("http://localhost:8080/mensalidades/" + lastSegment)
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
          <Table size="sm" className="tamanhoTabelaMensalidade">
            <thead>
              <tr className="tr">
                <th className="pagamentoEscritoDireita">Pilates</th>
                <th className="pagamentoEscritoDireita">Acupuntura</th>
                <th className="pagamentoEscritoDireita">Fisioterapia</th>
                <th className="pagamentoEscritoDireita">Valor Total</th>
                <th className="pagamentoEscritoDireita">Mês Referência</th>
                <th className="pagamentoEscritoDireita">Ano Referência</th>
              </tr>
            </thead>
            <tbody>
              <tr className="linhaTabelaMensalidade">
                <td>
                  <select
                    value={entradaQuantPilates}
                    className="selectPagamento"
                    onChange={aulasPilatesHandler}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <span className="pagamentoEscritoEsquerda">
                    vez(es) na semana
                  </span>
                </td>
                <td>
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
                  <span className="pagamentoEscritoEsquerda">vez(es)</span>
                </td>
                <td>
                  <select
                    value={entradaQuantFisioterapia}
                    className="selectPagamento"
                    onChange={fisioterapiaHandler}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <span className="pagamentoEscritoEsquerda">vez(es)</span>
                </td>
                <td>
                  <input
                    value={entradaValorTotal}
                    className="inputMensalidade"
                    type="number"
                    min="0"
                    onChange={valorTotalHandler}
                  ></input>
                  <span className="pagamentoEscritoEsquerda">Reais</span>
                </td>
                <td>
                  <select
                    value={entradaMesReferencia}
                    className="selectMesReferencia"
                    onChange={mesReferenciaHandler}
                  >
                    <option value="none" hidden></option>
                    <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                    <option value="Abril">Abril</option>
                    <option value="Maio">Maio</option>
                    <option value="Junho">Junho</option>
                    <option value="Julho">Julho</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Setembro">Setembro</option>
                    <option value="Outubro">Outubro</option>
                    <option value="Novembro">Novembro</option>
                    <option value="Dezembro">Dezembro</option>
                  </select>
                </td>
                <td>
                  <input
                    value={entradaAnoReferencia}
                    className="selectAnoPagamento"
                    onChange={anoReferenciaHandler}
                    type="text"
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    maxLength="2"
                  ></input>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="pagamentoBotao">
            <BotaoSimples type="submit" titulo="Confirma"></BotaoSimples>
          </div>
        </form>
      </div>
      <br />
      <Table className="tamanhoColunaPagamento">
        <thead>
          <tr>
            <th className="theadMensalidade">Pilates</th>
            <th className="theadMensalidade">Acupuntura</th>
            <th className="theadMensalidade">Fisioterapia</th>
            <th className="theadMensalidade">Valor Pago</th>
            <th className="theadMensalidade">Data</th>
            <th className="theadMensalidade">Referência</th>
            <th className="theadMensalidade">Deletar</th>
          </tr>
        </thead>
        <tbody>
          {entradaDadosMensalidade.map(
            ({
              idMensalidade,
              pilates,
              acupuntura,
              fisioterapia,
              valorTotal,
              dataAtual,
              mesReferencia,
              anoReferencia,
            }) => (
              <tr className="linhaTabela" key={idMensalidade}>
                <td>{pilates} vez(es) na semana</td>
                <td>{acupuntura} vez(es)</td>
                <td>{fisioterapia} vez(es)</td>
                <td>{valorTotal} Reais</td>
                <td>{transformarData(new Date(dataAtual))}</td>
                <td>
                  {mesReferencia}/{anoReferencia}
                </td>
                <td>
                  <img
                    src={deletes}
                    width="25"
                    height="25"
                    alt="Edit"
                    onClick={(e) => modalHandler(idMensalidade)}
                    className="imagemEnter"
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <ModalConfirma
        confirmaDeleta={confirmaDeleta}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}
export default Pagamento;
