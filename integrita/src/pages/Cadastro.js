import BotaoSimples from "../componentes/BotaoSimples";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import edit from "../images/editIcon.png";

function Cadastro() {
  const [data, setData] = useState([]);
  const [busca, setBusca] = useState("");
  const [buscainicial, setBuscaInicial] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/paciente")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
        setBuscaInicial(apiData);
      });
  }, []);

  function verificarSexo(sexo) {
    if (sexo === "M") {
      return "Masculino";
    } else {
      return "Feminino";
    }
  }

  function digitaHandler(event){
    setBusca(event.target.value);
    if(event.target.value!==''){
      fetch("http://localhost:8080/editar/listar/"+ event.target.value)
        .then((resp) => resp.json())
        .then((apiData) => {
          setData(apiData);
        });
      }else{
        setData(buscainicial);
      }
  }

  return (
    <div>
      <Link to="/cadastro/novo">
        <div className="alinharEsquerda">
          <BotaoSimples titulo="Novo Paciente"></BotaoSimples>
        </div>
      </Link>
      <div className="alinharDireita">Pesquisar:&nbsp;
          <input className="inputCadastro" type="text" value={busca} onChange={digitaHandler}></input>
      </div>
      <div className="alinharTabela">
        <Table size="sm">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Idade</th>
              <th>Profissão</th>
              <th>Sexo</th>
              <th>Endereço</th>
              <th>Pilates</th>
              <th>Acupuntura</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({
                codigo,
                nomePaciente,
                cpf,
                telefone,
                idade,
                profissao,
                sexo,
                endereco,
                pilates,
                acupuntura,
              }) => (
                <tr className="linhaTabela" key={codigo}>
                  <td>{nomePaciente}</td>
                  <td>{cpf}</td>
                  <td>{telefone}</td>
                  <td>{idade}</td>
                  <td>{profissao}</td>
                  <td>{verificarSexo(sexo)}</td>
                  <td>{endereco}</td>
                  <td><input defaultChecked={pilates} disabled type="checkbox"></input></td>
                  <td><input defaultChecked={acupuntura} disabled type="checkbox"></input></td>
                  <td>
                    <Link to={`/cadastro/editar/${codigo}`}>
                      <img src={edit} width="28" height="28" alt="Edit" />
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Cadastro;
