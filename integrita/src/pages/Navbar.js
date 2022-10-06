import BotaoMenu from "../componentes/BotaoMenu";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div>
      <div className="centralizado">
        <p className="titulo">Clínica Integrità</p>
        <Link to="/agenda">
          <BotaoMenu titulo="Agenda"></BotaoMenu>
        </Link>
        <Link to="/cadastro">
          <BotaoMenu titulo="Cadastro Paciente"></BotaoMenu>
        </Link>
        <Link to="/avaliacao">
          <BotaoMenu titulo="Avaliação Acupuntura"></BotaoMenu>
        </Link>
        <Link to="/mensalidade">
          <BotaoMenu titulo="Mensalidade"></BotaoMenu>
        </Link>
        <hr color="#804E4C" size="5" width="100%"></hr>
      </div>
    </div>
  );
}
export default Navbar;
