import React from 'react';
import Blip from './components/BlipComponent/Blip'
import AppKey from './components/KeyComponent/AppKey';
import {ApplicationRoutes} from './ApplicationRoutes'
import {useSelector} from 'react-redux'
import StyleComponent from './components/StyleComponent/StyleComponent';

function App() {

  const key = useSelector((store)=>store.key)
  const styles = useSelector((store)=>store.styles)
  const build = useSelector((store)=>store.build) 

  return (
    <> 
      O Blip chat {build?" foi ":" não foi "} iniciado
      {/* CASO EXISTA UMA APPKEY O BLIP É CHAMADO */}
      {
        key?<Blip chave={key} style={styles}/>:""
      }
      {console.log(1)}
      <AppKey/>
      <StyleComponent/>
      <ApplicationRoutes />
    </>
  );

  
}

export default App;
