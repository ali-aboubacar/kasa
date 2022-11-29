import { useEffect,useState } from "react";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

function DisplayCarousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay,setAutoPlay] = useState(true);
    let timeOut = null;
    useEffect(()=>{
      timeOut = autoPlay  && setTimeout(()=>{
        nextSlide();
      },2500)
    })
    const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };
    return (
        <div className="carousel-component" onMouseEnter={()=>{ setAutoPlay(false); clearTimeout(timeOut) }} onMouseLeave={()=>{setAutoPlay(true)}}>
          <BsChevronLeft size={50} color='#fff' className="previous" onClick={prevSlide}/>
          <BsChevronRight size={50} color='#fff' className="next" onClick={nextSlide}/>
      {slides?.map((slide,index) => {
        return (
          <div key={index} className="carousel-slide">
            {index === current && <img src={slide} alt="preview de l'endroit" />}
          </div>
        );
      })}
        </div>
    );
  }
  
  export default DisplayCarousel;