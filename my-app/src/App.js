import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// We can use this JS and put values in the following JSX
function App() {
  return (
    //JSX Fragment - Iske andar you can put different outer elements
    //title = "textUtils" - is a prob/ attributes/ properties
    <>
    <Navbar title = "TextConverter" aboutText = "About"/> 
    <div className='container my-3'>
      <TextForm heading="Enter the text below"/>
      {/* <About /> */}
    </div>
 
    </>
  );
} 

export default App;
