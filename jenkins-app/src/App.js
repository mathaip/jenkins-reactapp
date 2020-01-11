
import React from 'react';
import BasicInfo from './components/basicInfo'

import logo from './logo.svg';
import './App.css';
import TemperaturePage from './components/temperature'



function App() {
  return (
    <div>
    <AppBody/>
  </div> 
  )
   
}

function AppBody(){
  const [temperature, setTemperature] = React.useState(
    window.localStorage.getItem("temperature") || "0"
  );
  return (
    <div className="App">

     <TemperaturePage
      temperature={temperature}
      setTemperature={setTemperature}
     />
     <BasicInfo/>
    </div>
  );

}

export default App;
