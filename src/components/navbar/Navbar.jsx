import './navbar.scss';
import './Junk.txt';
import ThemeToggle from "../../utils/ThemeTogggle";

const Places = [
  "about",
  "who",
  "works",
]

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="">
          <h3>Fatuous Nerd</h3>
        </a>
        <ul>
          <li id="about" ><a href="#who">About Me</a></li>
          <li id="port" ><a href="#works">Works</a></li>
          <li id="port" ><a href="#contact">Contact Me</a></li>
        <ThemeToggle/>
        </ul>
      </nav>
    </>
  )
}

export default Navbar