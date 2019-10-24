import React from 'react';
import Blip from './components/BlipComponent/Blip'
import AppKey from './components/KeyComponent/AppKey';
import {ApplicationRoutes} from './ApplicationRoutes'
import {useSelector} from 'react-redux'
import StyleComponent from './components/StyleComponent/StyleComponent';

function App() {

  const key = useSelector((store)=>store.key)
  const styles = useSelector((store)=>store.styles)

  return (
    <> 
      {/* CASO EXISTA UMA APPKEY O BLIP É CHAMADO */}
      {
        key?<Blip/>:""
      }
      <AppKey/>
      <StyleComponent/>
      <ApplicationRoutes />
    </>
  );

  
}

export default App;
