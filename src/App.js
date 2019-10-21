import React from 'react';
import Blip from './components/BlipComponent/Blip'
import AppKey from './components/KeyComponent/AppKey';
import {ApplicationRoutes} from './ApplicationRoutes'

function App() {


  return (
    <> 
      <Blip/>
      <AppKey/>
      <ApplicationRoutes />
    </>
  );

  
}

export default App;
