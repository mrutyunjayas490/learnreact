import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import React, {useState} from 'react';

function App() {
  const [Mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(Mode ==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    <Navbar title='TextUtils' aboutText='About TextUtils' mode={Mode} toggleMode={toggleMode} />

    <div className="container my-3">
    <TextForm heading='Enter your text to analyze'/>
    <About />
    </div>
    </> //it's a stucture called js stucture <>every thing under this is a js file</>
  );// here we return jxs file which is look like a html but it as a javascript 
}

export default App;
