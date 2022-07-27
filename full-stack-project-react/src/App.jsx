import './App.scss';
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Form from './components/Form/Form';
import Location from './components/Location/Location';
import LocationList from './components/LocationList/LocationList';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Places from './pages/Places/Places';


function App() {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/places" element={ <Places />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
