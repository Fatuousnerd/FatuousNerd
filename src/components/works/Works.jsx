import './works.scss';
import WebDevelopment from "./items/WebDevelopment/WebDevelopment";
import DigitalMarketing from './items/DigitalMarketing/DigitalMarketing';
import Coming from './items/coming/Coming';
import { useState } from "react";
import styled from 'styled-components';

const data = ["Web Development", "Digital Marketing"];

const Li = styled.li`
  &::after{
    content:"${(props)=>props.text}"
  }
`;

const Works = () => {

  const [work, setWork] = useState("Digital Marketing");

  return (
    <div className="works" id="works">
      <div className="wrapper">
        <div className="left">
          <ul>
            {data.map((item) =>(
              <Li key={item} text={item} onClick={()=>setWork(item)}>{item}</Li>
            ))}
          </ul>
        </div>
        <div className="right">
          {work === "Web Development" ? (<Coming/>) : work === "Digital Marketing" ? (<DigitalMarketing/>) : (<WebDevelopment/>)}
        </div>
      </div>
    </div>
  )
};

export default Works