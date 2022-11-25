import "./ModalConfirma.css";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import BotaoSimples from "../componentes/BotaoSimples";
import question from "../images/question.png";
import erro from "../images/erro.png";
import check from "../images/check.png";

function ModalConfirma(props) {
  const { clonarAgendamentos, flagis, confirmaDeleta, modal, setModal } = props;
  const history = useHistory();

  function closeModal() {
    setModal({ ...modal, isOpen: false });
  }

  function backPage() {
    setModal({ ...modal, isOpen: false });
    if (props.modal.voltarPagina !== "") {
      history.push(props.modal.voltarPagina);
    }
  }

  function confirmaDelecao() {
    confirmaDeleta(true);
    setModal({ ...modal, isOpen: false });
  }

  function clone() {
    clonarAgendamentos(true);
    setModal({ ...modal, isOpen: false });
  }

  function remover() {
    setModal({ ...modal, isOpen: false });
    setModal({
      isOpen: true,
      tipo: "certeza?",
      voltarPagina: "",
      frase: "Tem certeza que deseja remover esse agendamento?",
    });
  }

  function handleFlag(flag){
    flagis(flag);
    setModal({ ...modal, isOpen: false });
  }

  return (
    <div>
      {(() => {
        if (props.modal.tipo === "sair?") {
          return (
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modal.isOpen}
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
                    width: "500px",
                    height: "325px",
                    top: "130px",
                    left: "550px",
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
                <img src={question} width="150" height="150" alt="Question" />
                <p></p>
                <p className="title">Tem certeza que deseja sair?</p>
                <div>
                  <BotaoSimples
                    onClick={closeModal}
                    titulo="Cancelar"
                  ></BotaoSimples>
                  <BotaoSimples
                    onClick={backPage}
                    titulo="Confirmar"
                  ></BotaoSimples>
                </div>
              </Modal>
            </div>
          );
        } else if (props.modal.tipo === "erro") {
          return (
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modal.isOpen}
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
                    width: "500px",
                    height: "325px",
                    top: "130px",
                    left: "550px",
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
                <img src={erro} width="150" height="150" alt="Erro" />
                <p></p>
                <p className="title">Erro: Algo deu errado!</p>
                <div className="botaoOk">
                  <BotaoSimples onClick={closeModal} titulo="OK"></BotaoSimples>
                </div>
              </Modal>
            </div>
          );
        } else if (props.modal.tipo === "ok") {
          return (
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modal.isOpen}
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
                    width: "500px",
                    height: "325px",
                    top: "130px",
                    left: "550px",
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
                <img src={check} width="150" height="150" alt="Erro" />
                <p></p>
                <p className="title">{props.modal.frase}</p>
                <div className="botaoOk">
                  <BotaoSimples onClick={backPage} titulo="OK"></BotaoSimples>
                </div>
              </Modal>
            </div>
          );
        } else if (props.modal.tipo === "certeza?") {
          return (
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modal.isOpen}
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
                    width: "500px",
                    height: "360px",
                    top: "130px",
                    left: "550px",
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
                <img src={question} width="150" height="150" alt="Question" />
                <p></p>
                <p className="title">{props.modal.frase}</p>
                <div>
                  <BotaoSimples
                    onClick={closeModal}
                    titulo="Cancelar"
                  ></BotaoSimples>
                  <BotaoSimples
                    onClick={confirmaDelecao}
                    titulo="Confirmar"
                  ></BotaoSimples>
                </div>
              </Modal>
            </div>
          );
        } else if (props.modal.tipo === "agenda") {
          return (
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modal.isOpen}
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
                    width: "500px",
                    height: "510px",
                    top: "130px",
                    left: "550px",
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
                <p className="title">Escolha o que fazer com o agendamento:</p>
                <span className="escritosModal">Paciente compareceu:</span>
                <BotaoSimples
                  onClick={(e)=>handleFlag("OK")}
                  titulo="Ok"
                ></BotaoSimples>
                <p></p>
                <span className="escritosModal">Paciente não compareceu:</span>
                <BotaoSimples
                  onClick={(e)=>handleFlag("Falta")}
                  titulo="Faltou"
                ></BotaoSimples>
                <p></p>
                <span className="escritosModal">Paciente desmarcou:</span>
                <BotaoSimples
                  onClick={(e)=>handleFlag("Desm")}
                  titulo="Desmarcou"
                ></BotaoSimples>
                <p></p>
                <span className="escritosModal">Paciente reposição:</span>
                <BotaoSimples
                  onClick={(e)=>handleFlag("Rep")}
                  titulo="Reposição"
                ></BotaoSimples>
                <p></p>
                <span className="escritosModal">Remover agendamento:</span>
                <BotaoSimples
                  onClick={remover}
                  titulo="Remover"
                ></BotaoSimples>
                <p></p>
                <BotaoSimples
                  onClick={closeModal}
                  titulo="Voltar"
                ></BotaoSimples>
              </Modal>
            </div>
          );
        }else if (props.modal.tipo === "confirma?") {
          return (
            <div>
              <Modal
                ariaHideApp={false}
                isOpen={modal.isOpen}
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
                    width: "500px",
                    height: "360px",
                    top: "130px",
                    left: "550px",
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
                <img src={question} width="150" height="150" alt="Question" />
                <p></p>
                <p className="title">{props.modal.frase}</p>
                <div>
                  <BotaoSimples
                    onClick={closeModal}
                    titulo="Cancelar"
                  ></BotaoSimples>
                  <BotaoSimples
                    onClick={clone}
                    titulo="Confirmar"
                  ></BotaoSimples>
                </div>
              </Modal>
            </div>
          );
        }
      })()}
    </div>
  );
}
export default ModalConfirma;
