import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

let name = "Harry";
function App() {
  return (
    <>
    <Navbar title = "Text Utils" aboutText = "about text utils"/>
    <div className = "container">
    <TextForm heading = "Enter the text to analyze"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
