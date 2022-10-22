import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import select from "../images/selecionar.png";

function Avaliacao() {
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

  function digitaHandler(event) {
    setBusca(event.target.value);
    if (event.target.value !== "") {
      fetch("http://localhost:8080/editar/listar/" + event.target.value)
        .then((resp) => resp.json())
        .then((apiData) => {
          setData(apiData);
        });
    } else {
      setData(buscainicial);
    }
  }

  return (
    <div>
      <div className="formCadastro">
        Pesquisar:&nbsp;
        <input
          className="inputCadastro"
          type="text"
          value={busca}
          onChange={digitaHandler}
        ></input>
      </div>
      <div>
        <Table className="tamanhoColuna">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Acupuntura</th>
              <th>Pilates</th>
              <th>Avaliar Acupuntura</th>
              <th>Avaliar Pilates</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ codigo, nomePaciente, pilates, acupuntura }) => (
              <tr className="linhaTabela" key={codigo}>
                <td>{nomePaciente}</td>
                <td>
                  <input
                    defaultChecked={acupuntura}
                    disabled
                    type="checkbox"
                  ></input>
                </td>
                <td>
                  <input
                    defaultChecked={pilates}
                    disabled
                    type="checkbox"
                  ></input>
                </td>
                <td>
                  {acupuntura && (
                    <Link to={`avaliacao/acunpuntura/${codigo}`}>
                      <img src={select} width="25" height="25" alt="Edit" />
                    </Link>
                  )}
                </td>
                <td>
                  {pilates && (
                    <Link to={`avaliacao/pilates/${codigo}`}>
                      <img src={select} width="25" height="25" alt="Edit" />
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Avaliacao;
