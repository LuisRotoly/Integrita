import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import select from "../images/selecionar.png";
import BotaoSimples from "../componentes/BotaoSimples";

function Mensalidade() {
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
      <div className="relatorio">
        <Link to={"/relatorio"}>
          <BotaoSimples type="button" titulo="Relatório"></BotaoSimples>
        </Link>
      </div>
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
              <th>Pilates</th>
              <th>Acupuntura</th>
              <th>Status</th>
              <th>Lançar Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({ codigo, nomePaciente, pilates, acupuntura, ativo }) => (
                <tr className="linhaTabela" key={codigo}>
                  <td>{nomePaciente}</td>
                  <td>
                    <input
                      defaultChecked={pilates}
                      disabled
                      type="checkbox"
                    ></input>
                  </td>
                  <td>
                    <input
                      defaultChecked={acupuntura}
                      disabled
                      type="checkbox"
                    ></input>
                  </td>
                  <td>
                    {ativo ? (
                      <h6 style={{ color: "green" }}>Ativo</h6>
                    ) : (
                      <h6 style={{ color: "red" }}>Desativado</h6>
                    )}
                  </td>
                  <td>
                    {ativo && (
                      <Link to={`mensalidade/${codigo}`}>
                        <img src={select} width="25" height="25" alt="Edit" />
                      </Link>
                    )}
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
export default Mensalidade;
