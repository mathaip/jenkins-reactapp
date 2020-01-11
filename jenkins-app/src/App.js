import React,{Component} from 'react';
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
    </div>
  );

}

export default App;
