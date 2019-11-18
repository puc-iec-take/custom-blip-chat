import React from 'react';
import {useDispatch} from 'react-redux'


const BotName = () =>{

    const dispatch = useDispatch();

    
    function modificarTamanho(tamanho){

        dispatch({type:'ADD_STYLE',
        style:`#blip-chat-header .blip-chat-bot-name {
            font-size: `+tamanho+`px;
        }`})
    }

    return(
        <>
            <input type="number" id='size' placeholder="Tamanho"/>
            <button onClick={()=>modificarTamanho(document.querySelector("#size").value)}>Aplicar</button>
        </>
    )
}

export default BotName
