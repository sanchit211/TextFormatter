import './App.css';
import Navbar from './Components.js/Navbar';
import TextForm from './Components.js/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor="#161528";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Navbar heading="Word Counter" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter Text" mode={mode}/>


      </div>
    </>
  );
}

export default App;
