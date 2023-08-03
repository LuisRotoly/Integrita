import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import { transformarData, pegaLastSegment } from "./helper";
import ModalConfirma from "../componentes/ModalConfirma";

function AvaliacaoFisioterapia() {
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaQueixa, setQueixa] = useState("");
  const [entradaHDA, setHDA] = useState("");
  const [entradaHDP, setHDP] = useState("");
  const [entradaMedicacoes, setMedicacoes] = useState("");
  const [entradaCervical, setCervical] = useState("");
  const [entradaToracica, setToracica] = useState("");
  const [entradaLombar, setLombar] = useState("");
  const [entradaQuadril, setQuadril] = useState("");
  const [entradaJoelho, setJoelho] = useState("");
  const [entradaOmbro, setOmbro] = useState("");
  const [entradaArticulacoes, setArticulacoes] = useState("");
  const [entradaObservacoes, setObservacoes] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    tipo: "",
    voltarPagina: "",
    frase: "",
  });

  useEffect(() => {
    fetchNomePaciente(pegaLastSegment(window.location.pathname));
    fetchDataAvaliacao(pegaLastSegment(window.location.pathname));
  }, []);

  function fetchNomePaciente(lastSegment) {
    fetch("http://localhost:8080/paciente/" + lastSegment)
      .then((resp) => resp.text())
      .then((apiData) => {
        setEntradaNome(apiData);
      });
  }

  function fetchDataAvaliacao(lastSegment) {
    fetch("http://localhost:8080/avaliacao/fisioterapiaa/" + lastSegment)
      .then((resp) => resp.json())
      .then((apiData) => {
        setQueixa(apiData.queixa);
        setHDA(apiData.hda);
        setHDP(apiData.hdp);
        setMedicacoes(apiData.medicacoes);
        setCervical(apiData.cervical);
        setToracica(apiData.toracica);
        setLombar(apiData.lombar);
        setQuadril(apiData.quadril);
        setJoelho(apiData.joelho);
        setOmbro(apiData.ombro);
        setArticulacoes(apiData.articulacoes);
        setObservacoes(apiData.observacoes);
      });
  }

  function queixaHandler(event) {
    setQueixa(event.target.value);
  }
  function hdaHandler(event) {
    setHDA(event.target.value);
  }
  function hdpHandler(event) {
    setHDP(event.target.value);
  }
  function medicacoesHandler(event) {
    setMedicacoes(event.target.value);
  }
  function cervicalHandler(event) {
    setCervical(event.target.value);
  }
  function toracicaHandler(event) {
    setToracica(event.target.value);
  }
  function lombarHandler(event) {
    setLombar(event.target.value);
  }
  function quadrilHandler(event) {
    setQuadril(event.target.value);
  }
  function joelhoHandler(event) {
    setJoelho(event.target.value);
  }
  function ombroHandler(event) {
    setOmbro(event.target.value);
  }
  function articulacoesHandler(event) {
    setArticulacoes(event.target.value);
  }
  function observacoesHandler(event) {
    setObservacoes(event.target.value);
  }

  function cancelar() {
    setModal({ isOpen: true, tipo: "sair?", voltarPagina: "/avaliacao" });
  }

  async function submitHandler(event) {
    event.preventDefault();
    const dados = {
      codigo: pegaLastSegment(window.location.pathname),
      queixa: entradaQueixa,
      hda: entradaHDA,
      hdp: entradaHDP,
      medicacoes: entradaMedicacoes,
      cervical: entradaCervical,
      toracica: entradaToracica,
      lombar: entradaLombar,
      quadril: entradaQuadril,
      joelho: entradaJoelho,
      ombro: entradaOmbro,
      articulacoes: entradaArticulacoes,
      observacoes: entradaObservacoes,
    };
    try {
      const resposta = await fetch(
        "http://localhost:8080/avaliacao/fisioterapia",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        }
      );
      if (!resposta.ok) {
        throw new Error("Algo deu Errado");
      } else {
        setModal({
          isOpen: true,
          tipo: "ok",
          voltarPagina: "/avaliacao",
          frase: "Avaliação cadastrada com sucesso!",
        });
      }
    } catch (e) {
      setModal({ isOpen: true, tipo: "erro", voltarPagina: "" });
    }
  }

  return (
    <div>
      <div className="data">Data: {transformarData(new Date())}</div>
      <div className="formCadastro">
        <h2 className="fontBold">Ficha de Avaliação Fisioterapia</h2>
        <label className="fontBold">Nome:</label>
        {entradaNome}
        <br />
        <br />
        <h4 className="fontBold">Anamnese</h4>
        <label>Queixa Principal:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          value={entradaQueixa}
          className="inputQueixa"
          type="text"
          onChange={queixaHandler}
        ></input>
        <br />
        <label className="alinharHDAeHDP">HDA:</label>
        <textarea
          value={entradaHDA}
          className="inputAvaliacaoDuasLinhas"
          type="text"
          onChange={hdaHandler}
        ></textarea>
        <br />
        <label className="alinharHDAeHDP">HDP:</label>
        <textarea
          value={entradaHDP}
          className="inputAvaliacaoDuasLinhas"
          type="text"
          onChange={hdpHandler}
        ></textarea>
        <br />
        <label>Medicações:</label>
        <input
          value={entradaMedicacoes}
          className="inputAvaliacao"
          type="text"
          onChange={medicacoesHandler}
        ></input>
        <br />
        <br />
        <h4 className="fontBold">Exame Físico</h4>
        <p className="alinharColuna">Coluna:</p>
        <br />
        <label>Cervical:</label>
        <input
          value={entradaCervical}
          className="inputColuna"
          type="text"
          onChange={cervicalHandler}
        ></input>
        <br />
        <label>Torácica:</label>
        <input
          value={entradaToracica}
          className="inputColuna"
          type="text"
          onChange={toracicaHandler}
        ></input>
        <br />
        <label>Lombar:</label>
        <input
          value={entradaLombar}
          className="inputColuna"
          type="text"
          onChange={lombarHandler}
        ></input>
        <br />
        <label>Quadril:</label>
        <input
          value={entradaQuadril}
          className="inputAvaliacao"
          type="text"
          onChange={quadrilHandler}
        ></input>
        <br />
        <label>Joelho:</label>
        <input
          value={entradaJoelho}
          className="inputAvaliacao"
          type="text"
          onChange={joelhoHandler}
        ></input>
        <br />
        <label>Ombro:</label>
        <input
          value={entradaOmbro}
          className="inputAvaliacao"
          type="text"
          onChange={ombroHandler}
        ></input>
        <br />
        <label>Demais Articulações:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          value={entradaArticulacoes}
          className="inputArt"
          type="text"
          onChange={articulacoesHandler}
        ></input>
        <br />
        <label className="alinharObs">Inspeção Geral / Observações:</label>
        <br />
        <textarea
          value={entradaObservacoes}
          className="texteAreaObs"
          onChange={observacoesHandler}
        ></textarea>
        <br />
        <div>
          <BotaoSimples onClick={cancelar} titulo="Cancelar"></BotaoSimples>
          <BotaoSimples
            onClick={submitHandler}
            titulo="Confirmar"
          ></BotaoSimples>
        </div>
        <br />
      </div>
      <ModalConfirma modal={modal} setModal={setModal} />
    </div>
  );
}
export default AvaliacaoFisioterapia;
