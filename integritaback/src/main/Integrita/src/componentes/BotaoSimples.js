import './BotaoSimples.css';

function BotaoSimples(props){

    return <button onClick={props.onClick} value={props.titulo} className='botao_simples'>{props.titulo}</button>;
}
export default BotaoSimples;