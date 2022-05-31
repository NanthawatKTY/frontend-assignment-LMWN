import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import AppHeader from './components/AppHeader';
import HomePage from './pages/HomePage';
import History from './components/History';

function App() {
  return (
    <Router history={History}>
      <div className="App">
        <Link to="/"><AppHeader /></Link>
        <section className='app-section'>
          <div className='app-container'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
            </Routes>
          </div>
        </section>
      </div>
    </Router>
    
  );
}

export default App;