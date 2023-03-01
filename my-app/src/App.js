import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
// We can use this JS and put values in the following JSX
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const toggleMode = () =>
  {
     if(mode === 'light')
     {
        setMode('dark');
        document.body.style.backgroundColor = '#074644';
     }
     else
     {
        setMode('light')
        document.body.style.backgroundColor = 'white';
     }
  }
  return (
    //JSX Fragment - Iske andar you can put different outer elements
    //title = "textUtils" - is a prob/ attributes/ properties
    <>
    <Navbar title = "TextConverter" aboutText = "About" mode={mode} toggleMode={toggleMode}/> 
    <div className='container my-3'>
      <TextForm heading="Enter the text below" mode={mode}/>
      {/* <About /> */}
    </div>
 
    </>
  );
} 

export default App;

