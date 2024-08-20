import './digitalmarketing.scss';
import { thumbnails } from './thumbnailData';
import { items } from './itemData';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";


const DigitalMarketing = () => {

  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(carouselRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  const runSlider = () => {
    //step 1: get DOM
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function () {
      showSlider('next');
    }

    prevDom.onclick = function () {
      showSlider('prev');
    }
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext)
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        next.click();
      }, timeAutoNext)
    }
    console.log("Running");

  };

  useEffect(() => {
    if (isVisible) {
      runSlider();
      console.log("Visible")
    } else{
      console.log("Not");
      
    }
  }, [isVisible]);

  return (
    <>
      {/* <!-- carousel --> */}
      <div className="carousel" id="carousel">
        {/* <!-- list item --> */}
        <div className="list">
          {items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.img} alt={item.title} />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <div className="buttons">
                  <a href={item.links}>
                    <button>SEE MORE</button>
                  </a>
                  {/* <button>SUBSCRIBE</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- list thumnail --> */}
        <div className="thumbnail">
          {thumbnails.map((thumbnail) => (
            <div key={thumbnail.id} className="item">
              <img src={thumbnail.img} alt={thumbnail.title} />
              <div className="content">
                <div className="title">{thumbnail.title}</div>
                <div className="description">{thumbnail.description}</div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- next prev --> */}

        <div className="arrows">
          <button id="prev"> <ChevronLeft/> </button>
          <button id="next"> <ChevronRight/> </button>
        </div>
        {/* <!-- time running --> */}
        <div className="time"></div>
      </div>
    </>
  )
}

export default DigitalMarketing