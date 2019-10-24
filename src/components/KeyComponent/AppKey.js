import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

const AppKey = () =>{
    
    const dispatch = useDispatch();

    /**
     * FAZ O ENVIO DA CHAVE PARA O STORE
     */
    function sendKey(){

        let key = document.querySelector("#texto").value
        dispatch({type:'ADD_KEY',key:key})
        

    }

    return(
        <>
            <input type="text" id="texto" placeholder="ENTRE COM SUA APP KEY"/>
            <button onClick={()=>sendKey()}>Enviar</button>
            
        </>
    )
}

export default AppKey
