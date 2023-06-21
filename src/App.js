import './App.css';
import Homepage from './Homepage';
import Calculator from './Calculator';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/calculator-app" className="nav-item">
          Calculator
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/calculator-app" element={<Calculator/>}/>    
      </Routes>
      
    </div>
  );
}

export default App;
