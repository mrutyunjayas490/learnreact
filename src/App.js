import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'

function App() {
  return (
    <>
    <Navbar title='TextUtils' aboutText='About TextUtils'/>

    <div className="container my-3">
    <TextForm heading='Enter your text to analyze'/>
    </div>
    </> //it's a stucture called js stucture <>every thing under this is a js file</>
  );// here we return jxs file which is look like a html but it as a javascript 
}

export default App;
