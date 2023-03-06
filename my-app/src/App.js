import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// We can use this JS and put values in the following JSX
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not, Initially set to light
  const [alert, setAlert] = useState(null); // sets alert sets the alert variable which is initially set to null

  const dispAlert = (message, type) => //type is the type of alert that is used, normal, success, warning, danger (check bootstrap)
  { 
    setAlert({ // we made alert as an object having msg and type
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>
  {
     if(mode === 'light')
     {
        setMode('dark');
        document.body.style.backgroundColor = '#074644';
        dispAlert("Dark Mode has been enabled", "success")
        // CHANGING TITLE DYNAMICALLY
        // document.title = 'TextConverter - Dark Mode';       if you want to change the title of the page based on dark and light mode

        // FLASHING TITLE 
        // setInterval(() => {
        //   document.title = 'TextConverter is Amazing';  
        // }, 2000);
        // setInterval(() => {
        //   document.title = 'Download Now!!';  
        // }, 1500);
     }
     else
     {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        dispAlert("Light Mode has been enabled", "success")
     }
  }
  return (
    //JSX Fragment - Iske andar you can put different outer elements
    //title = "textUtils" - is a prob/ attributes/ properties
    <>
    <Navbar title = "TextConverter" aboutText = "About" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert= {alert} />
    <div className='container my-3'>
      <TextForm showAlert = {dispAlert} heading="Enter the text below" mode={mode} />
      {/* <About /> */}
    </div>
 
    </>
  );
} 

export default App;

