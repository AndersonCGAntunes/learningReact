import React, {useState} from "react"
import './App.css';
import MyBody from './myBody';

function App() {

// useState pode ser tanto string quanto int, bool, array, etc
  const [str, setStr] = useState('Olá, mundo');
  function handleClick() {
    setStr('Olá, planeta');
  }

  return (
    <div className="App">
      <h2>{str}</h2>
      
      <MyBody conteudo=" Body 1"></MyBody>
      <MyBody conteudo=" Body 2"></MyBody>
      <MyBody conteudo=" Body 3"></MyBody>
    </div>
  );
}

export default App;
