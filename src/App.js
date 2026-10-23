import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;