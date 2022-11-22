import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import Table from "react-bootstrap/Table";
import imprimir from "../images/imprimir.png";
import { transformarData, pegaLastSegment } from "./helper";
import ModalConfirma from "../componentes/ModalConfirma";

function AcompanhamentoPaciente() {
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaDescricao, setDescricao] = useState("");
  const [entradaDadosAcompanhamento, setDadosAcompanhamento] = useState([]);
  const [modal, setModal] = useState({
    isOpen: false,
    tipo: "",
    voltarPagina: "",
    frase: ""
  });

  useEffect(() => {
    fetchNomePaciente(pegaLastSegment(window.location.pathname));
    fetchAcompanhamento(pegaLastSegment(window.location.pathname));
  }, []);

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
      codigo: parseInt(pegaLastSegment(window.location.pathname)),
      descricao: entradaDescricao,
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
          setModal({ isOpen: true, tipo: "ok", voltarPagina: "", frase:"Acompanhamento cadastrado com sucesso!" });
        }
      } catch (e) {
        setModal({ isOpen: true, tipo: "erro", voltarPagina: "" });
      }
      setDescricao("");
      fetchAcompanhamento(pegaLastSegment(window.location.pathname));
    }
  }

  function descricaoHandler(event) {
    setDescricao(event.target.value);
  }

  return (
    <div>
      <div className="data">Data: {transformarData(new Date())}</div>
      <div className="imprimir">
        <img src={imprimir} width="30" height="30" alt="Edit" />
      </div>
      <div className="centralizado">
        <p className="pagamentoTitulo">Acompanhamento {entradaNome}</p>
        <div className="descricao">
          <label>Descrição:</label>
        </div>
        <textarea
          value={entradaDescricao}
          className="texteAreaObs"
          onChange={descricaoHandler}
        ></textarea>
        <div className="centralizado">
          <BotaoSimples
            onClick={submitHandler}
            titulo="Envia Acompanhamento"
          ></BotaoSimples>
        </div>
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
      <ModalConfirma modal={modal} setModal={setModal} />
    </div>
  );
}
export default AcompanhamentoPaciente;
