import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import './App.css';
import './transition.css';


function App() {
  const location = useLocation();
  const [hoveredPage, setHoveredPage] = useState('');

  const handleHover = (page) => {
    setHoveredPage(page);
  };

  return (
    <div className="App">
      <Header onHover={handleHover} />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={hoveredPage === 'portfolio' ? <Portfolio /> : <About />} />
            <Route path="/contact" element={hoveredPage === 'contact' ? <Contact /> : <About />} />
            <Route path="/resume" element={hoveredPage === 'resume' ? <Resume /> : <About />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}