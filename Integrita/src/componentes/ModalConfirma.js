import "./ModalConfirma.css";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import BotaoSimples from "../componentes/BotaoSimples";
import question from "../images/question.png";
import erro from "../images/erro.png";
import check from "../images/check.png";

function ModalConfirma(props) {
  const { confirmaDeleta, modal, setModal } = props;
  const history = useHistory();

  function closeModal() {
    setModal({ ...modal, isOpen: false });
  }

  function backPage(){
    setModal({ ...modal, isOpen: false});
    if(props.modal.voltarPagina!== ""){
        history.push(props.modal.voltarPagina);
    }
  }
  
  function confirma(){
    confirmaDeleta(true);
    setModal({ ...modal, isOpen: false});
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
                    <BotaoSimples
                      onClick={closeModal}
                      titulo="OK"
                    ></BotaoSimples>
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
                    <BotaoSimples
                      onClick={backPage}
                      titulo="OK"
                    ></BotaoSimples>
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
                      onClick={confirma}
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
