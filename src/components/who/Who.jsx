import './who.scss';
import Navbar from '../navbar/Navbar';
import Cube from '../test/Cube';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GitHub, Instagram, Mail, Phone, X } from '@mui/icons-material';

const Who = () => {
  return (
    <>
      <div className="who" id="">
        <div className="bg">
          <div className="circle"></div>
        </div>
        <div className="wrapper">
          <div className="left">
            <div className="holder">
              <img src="./wallpaper8.jfif"/>
            </div>
          </div>
          <div className="right">
            <h1 className="title">
              About Me
            </h1>
            <p>
            I'm a passionate creator, driven by the thrill of turning ideas into reality. 
            With a blend of creativity and technical expertise, 
            I've spent years honing my craft in the digital realm. 
            Whether it's designing a sleek website, crafting compelling 
            content, or orchestrating a successful marketing campaign, 
            I thrive on challenges and love pushing boundaries. 
            My journey has taken me through various industries, 
            allowing me to develop a diverse skill set and a unique perspective. 
            I'm all about innovation, 
            and I'm always on the lookout for the next big thing to dive into.
            </p>
            <p>
            When I'm not behind the screen, 
            you'll find me exploring new places, 
            soaking up inspiration from the world around me. 
            I'm a firm believer in lifelong learning, 
            constantly picking up new skills and insights. 
            Connecting with like-minded individuals and collaborating on exciting projects is what keeps me energized. 
            Life's too short to play it safe, so I'm all in, ready to take on whatever comes next with enthusiasm and a smile.
            </p>
            <a href="">
              <button>
                Contact Me
              </button>
            </a>
          </div>
          <div className="socials">
            <ul>
              <li><a href="https://x.com"><X/></a></li>
              <li><a href="https://instagram.com"><Instagram/></a></li>
              <li><a href="https://github.com"><GitHub/></a></li>
              <li><a href="mailto:calvinkmwaura@gmail.com"><Mail/></a></li>
              <li><a href=""><Phone/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Who