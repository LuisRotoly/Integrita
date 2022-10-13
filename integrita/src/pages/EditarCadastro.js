import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";

function EditarCadastro() {
  const url = window.location.pathname;
  const lastSegment = url.split("/").pop();
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaCPF, setEntradaCPF] = useState("");
  const [entradaTelefone, setEntradaTelefone] = useState("");
  const [entradaIdade, setEntradaIdade] = useState("");
  const [entradaProfissao, setEntradaProfissao] = useState("");
  const [entradaSexo, setEntradaSexo] = useState("");
  const [entradaEndereco, setEntradaEndereco] = useState("");
  const [entradaPilates, setEntradaPilates] = useState("");
  const [entradaAcupuntura, setEntradaAcupuntura] = useState("");
  const [entradaAtivo, setAtivo] = useState("");
  const history = useHistory();
  var datas = new Date();
  var dia = String(datas.getDate()).padStart(2, "0");
  var mes = String(datas.getMonth() + 1).padStart(2, "0");
  var ano = datas.getFullYear();
  var dataAtual = dia + "/" + mes + "/" + ano;

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
      codigo: lastSegment,
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
      dataAtual: dataAtual,
    };
    try {
      const resposta = await fetch(
        "http://localhost:8080/editar/" + lastSegment,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        }
      );
      if (!resposta.ok) {
        throw new Error("Algo deu Errado");
      } else {
        alert("Paciente editado com sucesso!");
        history.push("/cadastro");
      }
    } catch (e) {
      alert("Erro: Não foi possível se conectar ao servidor");
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/editar/" + lastSegment)
      .then((resp) => resp.json())
      .then((apiData) => {
        setEntradaNome(apiData.nomePaciente);
        setEntradaCPF(apiData.cpf);
        setEntradaTelefone(apiData.telefone);
        setEntradaIdade(apiData.idade);
        setEntradaProfissao(apiData.profissao);
        setEntradaSexo(apiData.sexo);
        setEntradaEndereco(apiData.endereco);
        setEntradaPilates(apiData.pilates);
        setEntradaAcupuntura(apiData.acupuntura);
        setAtivo(apiData.ativo);
      });
  }, [lastSegment]);

  return (
    <div>
      <div className="data">Data: {dataAtual}</div>
      <div className="formCadastro">
        <form onSubmit={submitHandler}>
          <label>Nome: </label>
          <input
            className="inputCadastro"
            value={entradaNome}
            type="text"
            onChange={nomeHandler}
          ></input>
          <br />
          <label>CPF: </label>
          <InputMask
            className="inputCadastro"
            value={entradaCPF}
            mask="999.999.999-99"
            maskChar=""
            type="text"
            onChange={cpfHandler}
          ></InputMask>
          <br />
          <label>Telefone: </label>
          <InputMask
            className="inputCadastro"
            value={entradaTelefone}
            mask="(99)999999999"
            maskChar=""
            type="text"
            onChange={telefoneHandler}
          ></InputMask>
          <br />
          <label>Idade: </label>
          <input
            className="inputCadastro"
            value={entradaIdade}
            type="text"
            onChange={idadeHandler}
          ></input>
          <br />
          <label>Profissão: </label>
          <input
            className="inputCadastro"
            value={entradaProfissao}
            type="text"
            onChange={profissaoHandler}
          ></input>
          <br />
          <select value={entradaSexo} onChange={sexoHandler}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <br />
          <label>Endereço: </label>
          <input
            className="inputCadastro"
            value={entradaEndereco}
            type="text"
            onChange={enderecoHandler}
          ></input>
          <br />
          <input
            checked={entradaPilates}
            type="checkbox"
            onChange={pilatesHandler}
          ></input>
          &nbsp;
          <label>Pilates</label>
          <br />
          <input
            checked={entradaAcupuntura}
            type="checkbox"
            onChange={acupunturaHandler}
          ></input>
          &nbsp;
          <label>Acupuntura</label>
          <br />
          <input
            checked={entradaAtivo}
            type="checkbox"
            onChange={ativoHandler}
          ></input>
          &nbsp;
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
export default EditarCadastro;
