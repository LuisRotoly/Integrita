import './BotaoMenu.css';

function BotaoMenu(props){

    return <button value={props.titulo} className='botao_menu'>{props.titulo}</button>;
}
export default BotaoMenu;