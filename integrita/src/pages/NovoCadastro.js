import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import BotaoSimples from "../componentes/BotaoSimples";
import InputMask from "react-input-mask";

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
  const history = useHistory();
  var data = new Date();

  function transformarData(data) {
    var dia = String(data.getDate()).padStart(2, "0");
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var ano = data.getFullYear();
    var dataAtual = dia + "/" + mes + "/" + ano;
    return dataAtual;
  }

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
      dataAtual: data
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
        alert("Novo paciente cadastrado com sucesso!");
        history.push("/cadastro");
      }
    } catch (e) {
      alert("Erro: Não foi possível se conectar ao servidor");
    }
  }

  return (
    <div>
      <div className="data">Data: {transformarData(data)}</div>
      <div className="formCadastro">
        <form onSubmit={submitHandler}>
          <label>Nome: </label>
          <input className="inputCadastro" type="text" onChange={nomeHandler}></input>
          <br />
          <label>CPF: </label>
          <InputMask className="inputCadastro"
            mask="999.999.999-99"
            maskChar=""
            type="text"
            onChange={cpfHandler}
          ></InputMask>
          <br />
          <label>Telefone: </label>
          <InputMask className="inputCadastro"
            mask="(99)999999999"
            maskChar=""
            type="text"
            onChange={telefoneHandler}
          ></InputMask>
          <br />
          <label>Idade: </label>
          <input className="inputCadastro" type="text" onChange={idadeHandler}></input>
          <br />
          <label>Profissão: </label>
          <input className="inputCadastro" type="text" onChange={profissaoHandler}></input>
          <br />
          <select onChange={sexoHandler}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <br />
          <label>Endereço: </label>
          <input className="inputCadastro" type="text" onChange={enderecoHandler}></input>
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
            <Link to={"/cadastro"}>
              <BotaoSimples titulo="Cancelar"></BotaoSimples>
            </Link>
            <BotaoSimples type="submit" titulo="Confirmar"></BotaoSimples>
          </div>
        </form>
      </div>
    </div>
  );
}
export default NovoCadastro;
