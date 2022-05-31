import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import AppHeader from './components/AppHeader';
import Home from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"><AppHeader /></Link>
        <section className='app-section'>
          <div className='app-container'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/search' element={<SearchPage />} />
            </Routes>
          </div>
        </section>
      </div>
    </Router>
    
  );
}

export default App;