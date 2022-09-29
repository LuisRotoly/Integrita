import './BotaoSimples.css';

function BotaoSimples(props){

    return <button value={props.titulo} className='botao_simples'>{props.titulo}</button>;
}
export default BotaoSimples;