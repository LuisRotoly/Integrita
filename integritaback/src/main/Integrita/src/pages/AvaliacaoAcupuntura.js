import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import {transformarData, pegaLastSegment} from './helper';
import ModalConfirma from "../componentes/ModalConfirma";

function AvaliacaoAcupuntura() {
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaQueixa, setQueixa] = useState("");
  const [entradaHDA, setHDA] = useState("");
  const [entradaHDP, setHDP] = useState("");
  const [entradaMedicacoes, setMedicacoes] = useState("");
  const [entradaEmocional, setEmocional] = useState("");
  const [entradaCardio, setCardio] = useState("");
  const [entradaDigestivo, setDigestivo] = useState("");
  const [entradaIntestinal, setIntestinal] = useState("");
  const [entradaUrinario, setUrinario] = useState("");
  const [entradaDermato, setDermato] = useState("");
  const [entradaNeuro, setNeuro] = useState("");
  const [entradaExameFisico, setExameFisico] = useState("");
  const [entradaManchas, setManchas] = useState("");
  const [entradaVascular, setVascular] = useState("");
  const [entradaEscama, setEscama] = useState("");
  const [entradaAlteracoes, setAlteracoes] = useState("");
  const [entradaDor, setDor] = useState("");
  const [entradaOrelha, setOrelha] = useState("N");
  const [entradaSangria, setSangria] = useState("false");
  const [entradaObservacoes, setObservacoes] = useState("");
  const [entradaMaterial, setMaterial] = useState("");
  const [entradaPAC, setPAC] = useState("");
  const [entradaPAE, setPAE] = useState("");
  const [entradaPontos, setPontos] = useState("");
  const [entradaPSN, setPSN] = useState("");
  const [entradaPSE, setPSE] = useState("");
  const [entradaObsGerais, setObsGerais] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    tipo: "",
    voltarPagina: "",
    frase: ""
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
    fetch("http://localhost:8080/avaliacao/acupuntura/" + lastSegment)
      .then((resp) => resp.json())
      .then((apiData) => {
        setQueixa(apiData.queixa);
        setHDA(apiData.hda);
        setHDP(apiData.hdp);
        setMedicacoes(apiData.medicacoes);
        setEmocional(apiData.emocional);
        setCardio(apiData.cardiorespiratorio);
        setDigestivo(apiData.digestivo);
        setIntestinal(apiData.intestinal);
        setUrinario(apiData.urinario);
        setDermato(apiData.dermatologico);
        setNeuro(apiData.neurologico);
        setExameFisico(apiData.exameFisico);
        setManchas(apiData.manchas);
        setVascular(apiData.vascularizacao);
        setEscama(apiData.escamacoes);
        setAlteracoes(apiData.alteracoes);
        setDor(apiData.dor);
        setOrelha(apiData.orelha);
        setSangria(apiData.sangria);
        setObservacoes(apiData.observacoes);
        setMaterial(apiData.material);
        setPAC(apiData.pac);
        setPAE(apiData.pae);
        setPontos(apiData.mtc);
        setPSN(apiData.psn);
        setPSE(apiData.pse);
        setObsGerais(apiData.observacaoGeral);
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
  function emocionalHandler(event) {
    setEmocional(event.target.value);
  }
  function cardioHandler(event) {
    setCardio(event.target.value);
  }
  function digestivoHandler(event) {
    setDigestivo(event.target.value);
  }
  function intestinalHandler(event) {
    setIntestinal(event.target.value);
  }
  function urinarioHandler(event) {
    setUrinario(event.target.value);
  }
  function dermatoHandler(event) {
    setDermato(event.target.value);
  }
  function neuroHandler(event) {
    setNeuro(event.target.value);
  }
  function exameHandler(event) {
    setExameFisico(event.target.value);
  }
  function manchasHandler(event) {
    setManchas(event.target.value);
  }
  function vascularHandler(event) {
    setVascular(event.target.value);
  }
  function escamaHandler(event) {
    setEscama(event.target.value);
  }
  function alteracoesHandler(event) {
    setAlteracoes(event.target.value);
  }
  function dorHandler(event) {
    setDor(event.target.value);
  }
  function orelhaHandler(event) {
    setOrelha(event.target.value);
  }
  function sangriaHandler(event) {
    setSangria(event.target.value);
  }
  function observacoesHandler(event) {
    setObservacoes(event.target.value);
  }
  function materialHandler(event) {
    setMaterial(event.target.value);
  }
  function pacHandler(event) {
    setPAC(event.target.value);
  }
  function paeHandler(event) {
    setPAE(event.target.value);
  }
  function pontosHandler(event) {
    setPontos(event.target.value);
  }
  function psnHandler(event) {
    setPSN(event.target.value);
  }
  function pseHandler(event) {
    setPSE(event.target.value);
  }
  function obsGeraisHandler(event) {
    setObsGerais(event.target.value);
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
      emocional: entradaEmocional,
      cardiorespiratorio: entradaCardio,
      digestivo: entradaDigestivo,
      intestinal: entradaIntestinal,
      urinario: entradaUrinario,
      dermatologico: entradaDermato,
      neurologico: entradaNeuro,
      exameFisico: entradaExameFisico,
      manchas: entradaManchas,
      vascularizacao: entradaVascular,
      escamacoes: entradaEscama,
      alteracoes: entradaAlteracoes,
      dor: entradaDor,
      orelha: entradaOrelha,
      sangria: entradaSangria,
      observacoes: entradaObservacoes,
      material: entradaMaterial,
      pac: entradaPAC,
      pae: entradaPAE,
      mtc: entradaPontos,
      psn: entradaPSN,
      pse: entradaPSE,
      observacaoGeral: entradaObsGerais
    };
    try {
      const resposta = await fetch(
        "http://localhost:8080/avaliacao/acupuntura",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        }
      );
      if (!resposta.ok) {
        throw new Error("Algo deu Errado");
      } else {
        setModal({ isOpen: true, tipo: "ok", voltarPagina: "/avaliacao", frase:"Avaliação cadastrada com sucesso!" });
      }
    } catch (e) {
      setModal({ isOpen: true, tipo: "erro", voltarPagina: "" });
    }
  }

  return (
    <div>
      <div className="data">Data: {transformarData(new Date())}</div>
      <div className="formCadastro">
        <h2 className="fontBold">Ficha de Avaliação Acupuntura</h2>
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
          <h4 className="fontBold">Estado Geral</h4>
          <label>Emocional:</label>
          <input
            value={entradaEmocional}
            className="inputAvaliacao"
            type="text"
            onChange={emocionalHandler}
          ></input>
          <br />
          <label>Cardiorespiratório:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={entradaCardio}
            className="inputCardio"
            type="text"
            onChange={cardioHandler}
          ></input>
          <br />
          <label>Digestivo:</label>
          <input
            value={entradaDigestivo}
            className="inputAvaliacao"
            type="text"
            onChange={digestivoHandler}
          ></input>
          <br />
          <label>Intestinal:</label>
          <input
            value={entradaIntestinal}
            className="inputAvaliacao"
            type="text"
            onChange={intestinalHandler}
          ></input>
          <br />
          <label>Urinário:</label>
          <input
            value={entradaUrinario}
            className="inputAvaliacao"
            type="text"
            onChange={urinarioHandler}
          ></input>
          <br />
          <label>Dermatológico:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={entradaDermato}
            className="inputDermato"
            type="text"
            onChange={dermatoHandler}
          ></input>
          <br />
          <label>Neurológico:</label>&nbsp;
          <input
            value={entradaNeuro}
            className="inputAvaliacao"
            type="text"
            onChange={neuroHandler}
          ></input>
          <br />
          <label>Exame Físico:</label>
          <br />
          <textarea
            value={entradaExameFisico}
            className="texteAreaObs"
            onChange={exameHandler}
          ></textarea>
          <br />
          <br />
          <h4 className="fontBold">Avaliação Auricular</h4>
          <label>1-Inspeção:</label>
          <br />
          <label>Manchas:</label>
          <input
            value={entradaManchas}
            className="inputAvaliacao"
            type="text"
            onChange={manchasHandler}
          ></input>
          <br />
          <label>Vascularização:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={entradaVascular}
            className="inputVasc"
            type="text"
            onChange={vascularHandler}
          ></input>
          <br />
          <label>Escamações:</label>
          <input
            value={entradaEscama}
            className="inputAvaliacao"
            type="text"
            onChange={escamaHandler}
          ></input>
          <br />
          <label>Alterações Morfológicas:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={entradaAlteracoes}
            className="inputAltera"
            type="text"
            onChange={alteracoesHandler}
          ></input>
          <br />
          <label>2-Palpação:</label>
          <br />
          <label>Dor:</label>
          <input
            value={entradaDor}
            className="inputAvaliacao"
            type="text"
            onChange={dorHandler}
          ></input>
          <br />
          <br />
          <h4 className="fontBold">Aplicação:</h4>
          <label>Orelha:</label>
          <select value={entradaOrelha} onChange={orelhaHandler}>
            <option value="N">Nenhuma</option>
            <option value="D">Direita</option>
            <option value="E">Esquerda</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>Sangria:</label>
          <select value={entradaSangria} onChange={sangriaHandler}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
          <br />
          <label>Observações:</label>&nbsp;
          <input
            value={entradaObservacoes}
            className="inputAvaliacao"
            type="text"
            onChange={observacoesHandler}
          ></input>
          <br />
          <label>Material Utilizado:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input
            value={entradaMaterial}
            className="inputMat"
            type="text"
            onChange={materialHandler}
          ></input>
          <br />
          <p>Pontos:</p>
          <label>PAC:</label>
          <input
            value={entradaPAC}
            className="inputAvaliacao"
            type="text"
            onChange={pacHandler}
          ></input>
          <br />
          <label>PAE:</label>
          <input
            value={entradaPAE}
            className="inputAvaliacao"
            type="text"
            onChange={paeHandler}
          ></input>
          <br />
          <label>Pontos MTC:</label>
          <input
            value={entradaPontos}
            className="inputAvaliacao"
            type="text"
            onChange={pontosHandler}
          ></input>
          <br />
          <label>PSN:</label>
          <input
            value={entradaPSN}
            className="inputAvaliacao"
            type="text"
            onChange={psnHandler}
          ></input>
          <br />
          <label>PSE:</label>
          <input
            value={entradaPSE}
            className="inputAvaliacao"
            type="text"
            onChange={pseHandler}
          ></input>
          <br />
          <label>Observações:</label>
          <br />
          <textarea
            value={entradaObsGerais}
            className="texteAreaObs"
            onChange={obsGeraisHandler}
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
export default AvaliacaoAcupuntura;
