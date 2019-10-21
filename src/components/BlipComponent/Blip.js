import React,{useState,useEffect} from 'react';
import { BlipChat } from "blip-chat-widget";

const Blip = () =>{
  
  let blipClient = new BlipChat()
  let tempKey = ""
  // let tempKey = "cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy"
  
  const [key,setKey] = useState(tempKey);

  function start(){
    blipClient.build()
  }

  function toogle(){
    blipClient.toogleChat();
  }

  function appKey(){
    blipClient.withAppKey(key)
  }
  
  function withStyle(){
    blipClient.withCustomStyle(`.blip-chat-bot-status{ color:red }`)
  }

  function stop(){
    blipClient.destroy();
  }

  function mudarChat(){
    
    appKey();
    start()

  }

  function teste(){
    setKey("cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy");
  }

  return(
    
    <>
      {
        mudarChat()
      }
    </>
  )
}

export default Blip