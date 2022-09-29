import BotaoSimples from "../componentes/BotaoSimples";

function NovoCadastro() {
  return (
    <div>
        <form>
            <label for="fname">Nome:</label><input type="text" id="fname" name="fname"></input>
        </form>
      <div className="alinharDireita">
        <BotaoSimples titulo="Cancelar"></BotaoSimples>
        <BotaoSimples titulo="Confirmar"></BotaoSimples>
      </div>
    </div>
  );
}
export default NovoCadastro;
