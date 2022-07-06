// import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navigation from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      {/* <div style={{height:"100vh", backgroundColor:"cyan"}}></div>
      <div style={{height:"100vh", backgroundColor:"teal"}}></div> */}
      <Footer children="Muaz Aqdas"/>
    </div>
  );
}

export default App;
