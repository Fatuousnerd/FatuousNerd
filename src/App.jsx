import './app.scss';
import ScrollUp from "./components/scrollUp/ScrollUp";
import Hero from "./components/hero/Hero";
import Who from "./components/who/Who";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import ThemeProvider from "./utils/ThemeContext"

const App = () => {
  return <>
    <ThemeProvider>
      <div className="main">
        <ScrollUp />
        <Hero />
        <Who />
        <Works />
        <Contact />
      </div>
    </ThemeProvider>
  </>
};

export default App;
