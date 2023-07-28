import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={LoginPage} />
        <Route exact path='/home' Component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;
