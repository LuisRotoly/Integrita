import { useState, useEffect } from "react";
import BotaoSimples from "../componentes/BotaoSimples";
import { Link,useHistory  } from "react-router-dom";

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
  const [data, setData] = useState([]);
  const history = useHistory();

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
    console.log(event.target.value);
  }
  function enderecoHandler(event) {
    setEntradaEndereco(event.target.value);
  }
  function pilatesHandler(event) {
    setEntradaPilates(event.target.checked);
    console.log(event.target.checked);
  }
  function acupunturaHandler(event) {
    setEntradaAcupuntura(event.target.checked);
    console.log(event.target.checked);
  }
  async function submitHandler(event) {
    event.preventDefault();
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, "0");
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var ano = data.getFullYear();
    var dataAtual = dia + "/" + mes + "/" + ano;
    console.log(entradaPilates);
    console.log(entradaAcupuntura);
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
      dataAtual: dataAtual,
    };
    console.log(JSON.stringify(dados));
    try {
      const resposta = await fetch("http://localhost:8080/editar/"+lastSegment, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resposta.ok) {
        throw new Error("Algo deu Errado");
      }else {
        alert("Paciente editado com sucesso!");
        history.push('/cadastro');
      }
    } catch (e) {
      alert("Erro: Não foi possível se conectar ao servidor");
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/editar/" + lastSegment)
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
        setEntradaNome(apiData.nomePaciente);
        setEntradaCPF(apiData.cpf);
        setEntradaTelefone(apiData.telefone);
        setEntradaIdade(apiData.idade);
        setEntradaProfissao(apiData.profissao);
        setEntradaSexo(apiData.sexo);
        setEntradaEndereco(apiData.endereco);
        setEntradaPilates(apiData.pilates);
        setEntradaAcupuntura(apiData.acupuntura);
      });
  }, [lastSegment]);

  return (
    <div>
      <div className="formCadastro">
        <form onSubmit={submitHandler}>
          <label>Nome: </label>
          <input
          defaultValue={data.nomePaciente}
            type="text"
            onChange={nomeHandler}
          ></input>
          <br />
          <label>CPF: </label>
          <input defaultValue={data.cpf} type="text" onChange={cpfHandler}></input>
          <br />
          <label>Telefone: </label>
          <input
            defaultValue={data.telefone}
            type="text"
            onChange={telefoneHandler}
          ></input>
          <br />
          <label>Idade: </label>
          <input defaultValue={data.idade} type="text" onChange={idadeHandler}></input>
          <br />
          <label>Profissão: </label>
          <input
            defaultValue={data.profissao}
            type="text"
            onChange={profissaoHandler}
          ></input>
          <br />
          <select //não está funcionando o defaultValue 
          defaultValue={data.sexo} onChange={sexoHandler}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <br />
          <label>Endereço: </label>
          <input
            defaultValue={data.endereco}
            type="text"
            onChange={enderecoHandler}
          ></input>
          <br />
          <input
          //não está funcionando a volta do true para o false do checkbox
            defaultChecked={data.pilates}
            type="checkbox"
            onChange={pilatesHandler}
          ></input>
          <label>Pilates</label>
          <br />
          <input
            defaultChecked={data.acupuntura}
            type="checkbox"
            onChange={acupunturaHandler}
          ></input>
          <label>Acupuntura</label>
          <div className="alinharDireita">
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
