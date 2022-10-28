import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import BotaoSimples from "../componentes/BotaoSimples";

function Relatorio() {
  const [entradaAno, setAno] = useState(new Date().getFullYear());
  const [entradaDadosMensalidade, setDadosMensalidade] = useState([]);
  const meses = [
    "Ano",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const data = [meses, pegaSoma()];

  function pegaSoma() {
    const soma = [entradaAno.toString()];
    for (let i = 0, k = 0; i < entradaDadosMensalidade.length; i++) {
      while (
        entradaDadosMensalidade[k].mes.toUpperCase() !==
        meses[i + 1].toUpperCase()
      ) {
        soma.push(0);
        i = i + 1;
      }
      soma.push(entradaDadosMensalidade[k].soma);
      k++;
    }
    while (soma.length < 13) {
      soma.push(0);
    }
    return soma;
  }

  function trocaAno(entradaAno) {
    setAno(entradaAno);
    fetch("http://localhost:8080/mensalidade/relatorio/" + entradaAno)
      .then((resp) => resp.json())
      .then((apiData) => {
        setDadosMensalidade(apiData);
      });
    pegaSoma();
  }

  const options = {
    title: "Receita Pilates e Acupuntura",
    titleTextStyle: {
      color: "#7A4E4C",
    },
    hAxis: {
      title: "Ano",
      titleTextStyle: {
        color: "#7A4E4C",
      },
      textStyle: {
        color: "#7A4E4C",
      },
    },
    vAxis: {
      gridlines: { color: "#7A4E4C" },
      title: "Valores em Reais",
      titleTextStyle: {
        color: "#7A4E4C",
      },
      textStyle: {
        color: "#7A4E4C",
      },
    },
    backgroundColor: "transparent",
  };

  useEffect(() => {
    fetch("http://localhost:8080/mensalidade/relatorio/" + entradaAno)
      .then((resp) => resp.json())
      .then((apiData) => {
        setDadosMensalidade(apiData);
      });
  }, [entradaAno]);

  return (
    <div>
      <div align="center">
      <p className="formCadastro">Selecione o Ano:</p>
      <BotaoSimples
        titulo="Anterior"
        onClick={(e) => trocaAno(entradaAno - 1)}
      ></BotaoSimples>&nbsp;&nbsp;
      <span className="formCadastro">{entradaAno}</span>
      <BotaoSimples
        titulo="Próximo"
        onClick={(e) => trocaAno(entradaAno + 1)}
      ></BotaoSimples>
      </div>
      <div align="center">
        <Chart
          chartType="ColumnChart"
          width="80%"
          height="500px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}
export default Relatorio;
