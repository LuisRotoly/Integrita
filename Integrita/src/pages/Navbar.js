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
          <BotaoMenu titulo="Avaliações"></BotaoMenu>
        </Link>
        <Link to="/acompanhamento">
          <BotaoMenu titulo="Acompanhamentos"></BotaoMenu>
        </Link>
        <Link to="/mensalidade">
          <BotaoMenu titulo="Mensalidade"></BotaoMenu>
        </Link>
        <hr className="hrNavbar"></hr>
      </div>
    </div>
  );
}
export default Navbar;
