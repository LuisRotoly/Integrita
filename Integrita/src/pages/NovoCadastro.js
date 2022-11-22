import { useState } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import InputMask from "react-input-mask";
import { transformarData } from "./helper";
import ModalConfirma from "../componentes/ModalConfirma";

function NovoCadastro() {
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaCPF, setEntradaCPF] = useState("");
  const [entradaTelefone, setEntradaTelefone] = useState("");
  const [entradaIdade, setEntradaIdade] = useState("");
  const [entradaProfissao, setEntradaProfissao] = useState("");
  const [entradaSexo, setEntradaSexo] = useState("M");
  const [entradaEndereco, setEntradaEndereco] = useState("");
  const [entradaPilates, setEntradaPilates] = useState("false");
  const [entradaAcupuntura, setEntradaAcupuntura] = useState("false");
  const [entradaAtivo, setAtivo] = useState("false");
  const [modal, setModal] = useState({ isOpen: false, tipo: "" , voltarPagina: "", frase:""});

  function nomeHandler(event) {
    setEntradaNome(event.target.value);
  }
  function cpfHandler(event) {
    setEntradaCPF(event.target.value);
  }
  function telefoneHandler(event) {
    setEntradaTelefone(event.target.value);
  }
  function idadeHandler(event) {
    setEntradaIdade(event.target.value);
  }
  function profissaoHandler(event) {
    setEntradaProfissao(event.target.value);
  }
  function sexoHandler(event) {
    setEntradaSexo(event.target.value);
  }
  function enderecoHandler(event) {
    setEntradaEndereco(event.target.value);
  }
  function pilatesHandler(event) {
    setEntradaPilates(event.target.checked);
  }
  function acupunturaHandler(event) {
    setEntradaAcupuntura(event.target.checked);
  }
  function ativoHandler(event) {
    setAtivo(event.target.checked);
  }

  function cancelar(){
    setModal({ isOpen: true, tipo: "sair?", voltarPagina:"/cadastro" });
  }

  async function submitHandler(event) {
    event.preventDefault();
    const dados = {
      nomePaciente: entradaNome,
      cpf: entradaCPF,
      telefone: entradaTelefone,
      idade: entradaIdade,
      profissao: entradaProfissao,
      sexo: entradaSexo,
      endereco: entradaEndereco,
      pilates: entradaPilates,
      acupuntura: entradaAcupuntura,
      ativo: entradaAtivo,
    };
    try {
      const resposta = await fetch("http://localhost:8080/paciente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resposta.ok) {
        throw new Error("Algo deu Errado");
      } else {
        setModal({ isOpen: true, tipo: "ok", voltarPagina:"/cadastro", frase:"Paciente cadastrado com sucesso!" });
      }
    } catch (e) {
      setModal({ isOpen: true, tipo: "erro", voltarPagina:"" });
    }
  }

  return (
    <div>
      <div className="data">Data: {transformarData(new Date())}</div>
      <div className="formCadastro">
          <label>Nome: </label>
          <input
            className="inputCadastro"
            type="text"
            onChange={nomeHandler}
          ></input>
          <br />
          <label>CPF: </label>
          <InputMask
            className="inputCadastro"
            mask="999.999.999-99"
            maskChar=""
            type="text"
            onChange={cpfHandler}
          ></InputMask>
          <br />
          <label>Telefone: </label>
          <InputMask
            className="inputCadastro"
            mask="(99)999999999"
            maskChar=""
            type="text"
            onChange={telefoneHandler}
          ></InputMask>
          <br />
          <label>Data Nasc.: </label>
          <InputMask
            className="inputCadastro"
            mask="99/99/9999"
            maskChar=""
            type="text"
            onChange={idadeHandler}
          ></InputMask>
          <br />
          <label>Profissão: </label>
          <input
            className="inputCadastro"
            type="text"
            onChange={profissaoHandler}
          ></input>
          <br />
          <select onChange={sexoHandler}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <br />
          <label>Endereço: </label>
          <input
            className="inputCadastro"
            type="text"
            onChange={enderecoHandler}
          ></input>
          <br />
          <input type="checkbox" onChange={pilatesHandler}></input>&nbsp;
          <label>Pilates</label>
          <br />
          <input type="checkbox" onChange={acupunturaHandler}></input>&nbsp;
          <label>Acupuntura</label>
          <br />
          <input type="checkbox" onChange={ativoHandler}></input>&nbsp;
          <label>Paciente Ativo</label>
          <div>
            <BotaoSimples onClick={cancelar} titulo="Cancelar"></BotaoSimples>
            <BotaoSimples onClick={submitHandler} titulo="Confirmar"></BotaoSimples>
          </div>
      </div>
      <ModalConfirma modal={modal} setModal={setModal} />
    </div>
  );
}
export default NovoCadastro;
