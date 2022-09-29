import BotaoSimples from "../componentes/BotaoSimples";
import { NavLink } from "react-router-dom";

function Cadastro() {
  return (
    <div className="centralizado">
      <NavLink to="./cadastro/novo">
        <BotaoSimples titulo="Novo Paciente"></BotaoSimples>
      </NavLink>
      <NavLink to="./cadastro/editar">
        <BotaoSimples titulo="Editar Paciente"></BotaoSimples>
      </NavLink>
    </div>
  );
}
export default Cadastro;