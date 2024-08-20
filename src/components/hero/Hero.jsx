import './hero.scss';
import Navbar from '../navbar/Navbar';
import CursorText from './CursorText';
import HeroSphere from './HeroSphere';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="wrapper">
          <div className="left">
            <CursorText />
          </div>

          <div className="right">
            <HeroSphere />
            <div className="image">
              <img src="./walls/11.jfif"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero