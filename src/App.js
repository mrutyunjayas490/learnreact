import './App.css';
//import About from './components/About.js';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/

function App() {
  const [Mode, setMode] = useState('light'); // Light mode by default
  const [alert, setAlert] = useState(null); // State for alert

  // Function to show alerts
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Function to toggle between Light and Dark mode
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'; // Set dark background
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Set light background
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/*<Router>*/}
        <Navbar title='TextUtils' aboutText='About TextUtils' mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* About Page Route */}
            {/* <Route exact path="/About" element={<About />} />

            {/* Home Page Route */}
            {/* <Route exact path="/" element={ */}
              <TextForm showAlert={showAlert} heading='Enter your text to analyze' mode={Mode} />
            {/* } />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
