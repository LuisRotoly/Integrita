import BotaoSimples from "../componentes/BotaoSimples";
import { Link } from "react-router-dom";

function Cadastro() {
  
  return (
    <div className="centralizado">
      <Link to="./cadastro/novo">
        <BotaoSimples titulo="Novo Paciente"></BotaoSimples>
      </Link>
      <Link to="./cadastro/editar">
        <BotaoSimples titulo="Editar Paciente"></BotaoSimples>
      </Link>
    </div>
  );
}
export default Cadastro;
