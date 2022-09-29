import './BotaoMenu.css';

function BotaoMenu(props){
    function clickHandler(event){
        props.onClick(event.target.value);
    }
    return <button value={props.titulo} onClick={clickHandler} className='botao_menu'>{props.titulo}</button>;
}
export default BotaoMenu;