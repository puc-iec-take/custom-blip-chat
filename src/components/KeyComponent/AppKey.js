import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './style.css'
const AppKey = () =>{
    
    const dispatch = useDispatch();

    /**
     * FAZ O ENVIO DA CHAVE PARA O STORE
     */
    function sendKey(){
        let key = document.querySelector("#appKey").value
        dispatch({type:'ADD_KEY',key:key})
    }

    return(
        <>
            <label for="appKey">Sua Key</label>
            <input onBlur={()=>sendKey()} type="text" id="appKey" placeholder="ENTRE COM SUA APP KEY"/>
        </>
    )
}

export default AppKey
