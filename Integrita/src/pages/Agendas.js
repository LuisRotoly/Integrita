import { createRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import BotaoSimples from "../componentes/BotaoSimples";
import ptBR from "date-fns/locale/pt-BR";
import ModalConfirma from "../componentes/ModalConfirma";

function Agendas() {
  const calendarRef = createRef();
  const [startDate, setStartDate] = useState(null);
  const [modalInclusaoOpen, setModalInclusaoOpen] = useState(false);
  const [dataAtual, setDataAtual] = useState("");
  const [flag, setFlag] = useState("");
  const [pilates, setPilates] = useState(false);
  const [acupuntura, setAcupuntura] = useState(false);
  const [busca, setBusca] = useState("");
  const [dadosPaciente, setDadosPaciente] = useState([]);
  const [buscaEncontrada, setBuscaEncontrada] = useState(false);
  const [horario, setHorario] = useState([]);
  const [numeroIdAgenda, setNumeroIdAgenda] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    tipo: "",
    voltarPagina: "",
    frase: "",
  });

  /*var gapi = window.gapi;
  var CLIENT_ID =;
  var API_KEY = ;
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  function sign() {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: "Awesome Event!",
            location: "800 Howard St., San Francisco, CA 94103",
            description: "Really great refreshments",
            start: {
              dateTime: "2022-11-18T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2022-11-18T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };
          console.log("oi");
          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });
          console.log("oi2");
          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });
          console.log("oi3");
        });
    });
  }*/

  function onSubmit(event) {
    event.preventDefault();
    //sign();
    if (
      dadosPaciente[0].nomePaciente !== "" &&
      (acupuntura !== false || pilates !== false) &&
      (acupuntura !== true || pilates !== true) &&
      dataAtual !== ""
    ) {
      var calendar = calendarRef.current.getApi();
      if (pilates !== false) {
        calendar.addEvent({
          title: dadosPaciente[0].nomePaciente+" - "+flag,
          date: dataAtual,
          color: "green",
        });
        postHorarioMarcado(
          dadosPaciente[0].codigo,
          dadosPaciente[0].nomePaciente,
          pilates,
          acupuntura,
          flag,
          dataAtual
        );
        setPilates(false);
      } else if (acupuntura !== false) {
        calendar.addEvent({
          title: dadosPaciente[0].nomePaciente+" - "+flag,
          date: dataAtual,
          color: "red",
        });
        setAcupuntura(false);
        postHorarioMarcado(
          dadosPaciente[0].codigo,
          dadosPaciente[0].nomePaciente,
          pilates,
          acupuntura,
          flag,
          dataAtual
        );
      }
      setBusca("");
      setModalInclusaoOpen(false);
      setStartDate(new Date());
      window.location.reload(false);
    }
  }

  async function postHorarioMarcado(
    idPaciente,
    nomePaciente,
    pilates,
    acupuntura,
    flag,
    dataAtual
  ) {
    const dados = {
      codigo: idPaciente,
      nomePaciente: nomePaciente,
      pilates: pilates,
      acupuntura: acupuntura,
      flag: flag,
      data: dataAtual,
    };
    try {
      const resposta = await fetch("http://localhost:8080/agenda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resposta.ok) {
        throw new Error("Algo deu Errado");
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  }

  function openModal() {
    setModalInclusaoOpen(true);
  }

  function closeModal() {
    setModalInclusaoOpen(false);
  }

  function dateHandler(date) {
    var dia = String(date.getDate()).padStart(2, "0");
    var mes = String(date.getMonth() + 1).padStart(2, "0");
    var ano = date.getFullYear();
    var horas =
      String(date.getHours()).padStart(2, "0") +
      ":" +
      String(date.getMinutes()).padStart(2, "0");
    setDataAtual(ano + "-" + mes + "-" + dia + " " + horas);
    setStartDate(date);
  }

  function inputHandler(event) {
    if (event.target.value !== "") {
      fetch("http://localhost:8080/paciente/listarIdNome/" + event.target.value)
        .then((resp) => resp.json())
        .then((apiData) => {
          setDadosPaciente(apiData);
        });
    } else {
      setDadosPaciente([]);
    }
    setBusca(event.target.value);
    setBuscaEncontrada(false);
  }

  function pacienteClicado(nomePaciente, codigo) {
    setBusca(nomePaciente);
    setBuscaEncontrada(true);
    setDadosPaciente([{ nomePaciente, codigo }]);
  }

  useEffect(() => {
    pegaHorarios();
  }, []);

  async function pegaHorarios() {
    const horarioProv = [];
    await fetch("http://localhost:8080/agenda")
      .then((resp) => resp.json())
      .then((apiData) => {
        for (let i = 0; i < apiData.length; i++) {
          if (apiData[i].pilates !== false) {
            horarioProv.push({
              id: apiData[i].idAgenda,
              title: apiData[i].nomePaciente+" - "+apiData[i].flag,
              date: apiData[i].data,
              color: "green",
            });
          } else if (apiData[i].acupuntura !== false) {
            horarioProv.push({
              id: apiData[i].idAgenda,
              title: apiData[i].nomePaciente+" - "+apiData[i].flag,
              date: apiData[i].data,
              color: "red",
            });
          }
        }
        setHorario(horarioProv);
      });
  }

  async function confirmaDeleta(valor) {
    if (valor) {
      try {
        const resposta = await fetch(
          "http://localhost:8080/agenda/" + numeroIdAgenda,
          {
            method: "DELETE",
          }
        );
        if (!resposta.ok) {
          throw new Error("Algo deu Errado");
        } else {
          setModal({
            isOpen: true,
            tipo: "ok",
            voltarPagina: "",
            frase: "Horário removido com sucesso!",
          });
        }
      } catch (e) {
        console.log(e);
        setModal({ isOpen: true, tipo: "erro", voltarPagina: "" });
      }
    }
    pegaHorarios();
  }

  async function flagis(valor) {
    var dados = "";
    try {
      await fetch("http://localhost:8080/agenda/" + numeroIdAgenda)
        .then((resp) => resp.json())
        .then((apiData) => {
          dados = {
            idAgenda: apiData.idAgenda,
            codigo: apiData.codigo,
            nomePaciente: apiData.nomePaciente,
            pilates: apiData.pilates,
            acupuntura: apiData.acupuntura,
            flag: valor,
            data: apiData.data,
          };
        });
      const resposta = await fetch("http://localhost:8080/agenda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resposta.ok) {
        throw new Error("Algo deu Errado");
      } else {
      }
    } catch (e) {
      console.log(e);
    }
    pegaHorarios();
  }

  function onClickEventHandler(info) {
    setModal({ isOpen: true, tipo: "agenda" });
    setNumeroIdAgenda(info.event.id);
  }

  return (
    <div>
      <div className="calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          weekends={false}
          events={horario}
          allDaySlot={false}
          slotMinTime="06:00:00"
          slotMaxTime="21:00:00"
          aspectRatio={2}
          buttonText={{ today: "Hoje" }}
          headerToolbar={{
            start: "clickButton",
            center: "title",
          }}
          customButtons={{
            clickButton: {
              text: "Incluir Novo Atendimento ",
              click: (e) => openModal(),
            },
          }}
          eventClick={function (info) {
            onClickEventHandler(info);
          }}
          locale="pt-br"
        />
      </div>
      <div className="modal">
        <Modal
          ariaHideApp={false}
          isOpen={modalInclusaoOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 1,
            },
            content: {
              textAlign: "center",
              position: "absolute",
              width: "600px",
              height: "435px",
              top: "130px",
              left: "500px",
              right: "500px",
              bottom: "200px",
              border: "1px solid #ccc",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <form onSubmit={onSubmit}>
            <span className="formCadastro">Coloque o nome do Paciente:</span>
            <input
              className="inputCadastro"
              type="text"
              value={busca}
              onChange={inputHandler}
            ></input>
            <div className="dropdown">
              {dadosPaciente
                .filter(() => {
                  return buscaEncontrada !== true;
                })
                .map(({ nomePaciente, codigo }) => (
                  <div
                    onClick={() => pacienteClicado(nomePaciente, codigo)}
                    className="dropdown-row"
                    key={codigo}
                  >
                    {nomePaciente}
                  </div>
                ))}
            </div>
            <p></p>
            <p></p>
            <div className="formModal">
              <span className="formCadastro">Data do atendimento:</span>
              <DatePicker
                className="inputModal"
                selected={startDate}
                onChange={(date) => dateHandler(date)}
                showTimeSelect
                timeIntervals={30}
                minTime={setHours(setMinutes(new Date(), 0), 6)}
                maxTime={setHours(setMinutes(new Date(), 0), 20)}
                dateFormat="dd/MM/yyyy HH:mm"
                timeFormat="HH:mm"
                placeholderText="Selecione a data e hora"
                locale={ptBR}
              />
              <p></p>
              <span className="formCadastro">Pilates:</span>&nbsp;
              <input
                onChange={(e) => setPilates(e.target.checked)}
                type="checkbox"
              ></input>
              <p></p>
              <span className="formCadastro">Acupuntura:</span>&nbsp;
              <input
                onChange={(e) => setAcupuntura(e.target.checked)}
                type="checkbox"
              ></input>
              <div>
                <BotaoSimples
                  onClick={closeModal}
                  titulo="Cancelar"
                ></BotaoSimples>
                <BotaoSimples type="submit" titulo="Confirmar"></BotaoSimples>
              </div>
            </div>
          </form>
        </Modal>
      </div>
      <ModalConfirma
        flagis={flagis}
        confirmaDeleta={confirmaDeleta}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}

export default Agendas;
