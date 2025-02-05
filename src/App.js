import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light'); //Check whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  var [green,setGreen]=useState(false);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  const toggleMode=()=>{
    if (green) {
      setGreen(false);
      document.body.style.backgroundColor = "white";
      showAlert("Green Mode has been disabled", "success");
    }
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='grey';
        showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    } 
  }

  const greenMode=()=>{
      if(green===true){
          setGreen(false);
          if (mode === "dark") {
          setMode("dark"); // Restore Dark Mode if it was previously active
          document.body.style.backgroundColor = "grey";
          showAlert("Green Mode has been disabled, Dark Mode restored", "success");
        } else {
          setMode("light"); // Restore Light Mode
          document.body.style.backgroundColor = "white";
          showAlert("Green Mode has been disabled", "success");
        }
   }
      else{
        if (mode === "dark") {
          setMode("light");// Turn off Dark Mode
          document.body.style.backgroundColor = "white";
          showAlert("Dark Mode has been disabled", "success");
        }
        setGreen(true);
        document.body.style.backgroundColor = "#32CD32"; // Green background
        showAlert("Green Mode has been enabled", "success");
      }
  }
  return (
    <>  
    <Router>
      <Navbar title="TextUtils By Aikansh" mode={mode} about="About" toggleMode={toggleMode} greenMode={greenMode} green={green}/>
      <Alert alert={alert}/>
      <div className="container my-6">
      <Routes>
          <Route exact path="/about" element={<About green={green} mode={mode} /> }/>
          <Route exact path="/" element={<TextForm green={green} showAlert={showAlert} heading="Enter the text to analyze below :" mode={mode}/>}/>
      </Routes>
      </div>
      </Router>
    </>

  );
}

export default App;
