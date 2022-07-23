import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Form from './components/Form/Form';
import Location from './components/Location/Location';
import LocationList from './components/LocationList/LocationList';
import {BrowserRouter as Router, Routes, Route} from "react-Router-dom";


function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route Path="/" element
      </Routes>

    </div>
  );
}

export default App;
