import React from 'react';
import Blip from './components/BlipComponent/Blip'
import AppKey from './components/KeyComponent/AppKey';
import {ApplicationRoutes} from './ApplicationRoutes'
import {useSelector} from 'react-redux'
import Nav from './components/Nav/Nav';

function App() {

  const key = useSelector((store)=>store.key)
  const styles = useSelector((store)=>store.styles)

  return (
    <> 
    <h1>Customização Blip Chat</h1>
    <AppKey/>
      {/* CASO EXISTA UMA APPKEY O BLIP É CHAMADO */}
      {
        key?<Blip/>:""
      }
      <Nav/>
      <ApplicationRoutes />
    </>
  );

  
}

export default App;
