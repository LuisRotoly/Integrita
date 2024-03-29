import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import select from "../images/selecionar.png";

function Acompanhamento() {
  const [data, setData] = useState([]);
  const [busca, setBusca] = useState("");
  const [buscainicial, setBuscaInicial] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/paciente/acupunturafisioterapia")
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
        <br />
        <Table className="tamanhoColunaAcomp">
          <thead>
            <tr className="tr">
              <th>Paciente</th>
              <th>Acupuntura</th>
              <th>Fisioterapia</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ codigo, nomePaciente, acupuntura, fisioterapia }) => (
              <tr className="linhaTabela" key={codigo}>
                <td>{nomePaciente}</td>
                <td>
                  {acupuntura && (
                    <Link to={`acompanhamento/acupuntura/${codigo}`}>
                      <img src={select} width="25" height="25" alt="Edit" />
                    </Link>
                  )}
                </td>
                <td>
                  {fisioterapia && (
                    <Link to={`acompanhamento/fisioterapia/${codigo}`}>
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
export default Acompanhamento;
