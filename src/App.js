import './App.css';
import About from './components/About.js';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import React, {useState} from 'react';

function App() {
  const [Mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode =()=>{
    if(Mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'light';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar title='TextUtils' aboutText='About TextUtils' mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading='Enter your text to analyze' mode={Mode}/>
    <About mode={Mode}/>
    </div>
    </> //it's a stucture called js stucture <>every thing under this is a js file</>
  );// here we return jxs file which is look like a html but it as a javascript 
}

export default App;
