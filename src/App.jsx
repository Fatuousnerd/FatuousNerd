import Main from "./components/Main";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from "./pages/Portfolio";
import ScrollToSection from "./utils/ScrollToSection";
import Contact from "./pages/Contact";
import Notion from "./pages/Notion";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <ScrollToSection />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<Notion />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
