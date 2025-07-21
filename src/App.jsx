import Main from "./components/Main";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from "./pages/Portfolio";
import ScrollToSection from "./utils/ScrollToSection";
import Contact from "./pages/Contact";

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
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
