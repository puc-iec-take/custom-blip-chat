import React,{useState,useEffect} from 'react';
import { BlipChat } from "blip-chat-widget";
import {useSelector,useDispatch} from 'react-redux'

const Blip = (props) =>{
  
  let blipClient = new BlipChat()
  const key = useSelector((state)=>state.key)
  const style = useSelector((state)=>state.styles)

  function start(){
    blipClient.build()
  }

  function toogle(){
    blipClient.toogleChat();
  }

  function appKey(key){
    blipClient.withAppKey(key)
  }
  
  function withStyle(){
    blipClient.withCustomStyle(style)
  }

  function stop(){
    blipClient.destroy();
  }
  // FAZ A CONSTRUÇÃO BÁSICA DO CHAT
  function build(){
    console.log("build")
    appKey(key)
    withStyle()
    start()
    toogle()
  }
  //FAZ A RECONSTRUÇÃO DO CHAT
  function rebuild(){
  
      // withStyle()
      // appKey(key)
      // start()

    
  }

  return(
    // cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy
    <> 
    {console.log(blipClient)}
      <button onClick={()=>build()}>build</button>
      <button  onClick={()=>stop()}>stop</button>
      
    </>
  )
}

export default Blip