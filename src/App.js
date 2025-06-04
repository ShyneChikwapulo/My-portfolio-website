import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800});
  }, []);
  
  return (
    <>
    <Router>
      <Navbar />
      <Home />
    </Router>
    </>

  );
}

export default App;
