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
      <Footer children="Muaz Aqdas"/>
    </div>
  );
}

export default App;
