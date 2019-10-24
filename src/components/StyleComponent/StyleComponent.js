import React from 'react'
import {useDispatch} from 'react-redux'

const StyleComponent = () =>{
    
    const dispatch = useDispatch();
    /**
     * FAZ O ENVIO DA CHAVE PARA O STORE
     */
    function fazer(){

        
        dispatch({type:'ADD_STYLE',style:'.blip-chat-bot-status{ color: red; }'})
        dispatch({type:'BUILD',estado:'1'})
        

    }

    return(
        <>
            
            <button onClick={()=>fazer()}>stylar</button>
            
        </>
    )
}

export default StyleComponent
