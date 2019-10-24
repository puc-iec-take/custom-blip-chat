import React,{useState,useEffect} from 'react';
import { BlipChat } from "blip-chat-widget";
import {useSelector,useDispatch} from 'react-redux'

const Blip = (props) =>{
  
  let blipClient = new BlipChat()
  const dispatch = useDispatch();
  const isBuild = useSelector((state)=>state.build)
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
  }
  //FAZ A RECONSTRUÇÃO DO CHAT
  function rebuild(){
    console.log("rebuild")
      stop()
      
      // withStyle()
      // appKey(key)
      // start()

    
  }

  return(
    // cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy
    <> 
      <button onClick={()=>build()}>build</button>
      <button  onClick={()=>rebuild()}>rebuild</button>
      
    </>
  )
}

export default Blip