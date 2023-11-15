import React,{useState,useEffect, useReducer} from 'react';
import './Carousel.css';
import SliderImage from './SliderImage/SliderImage';
import Slider from './Slider/Slider';



const Carousel = () => {


    const [IndexNumber,setIndexNumber] = useState(1);
    const [childrenLength,setChildrenLength] = useState(0)

    const plusSlide =(n) => {
        setIndexNumber(IndexNumber + n);
    }

    useEffect(()=>{
        if (IndexNumber > childrenLength) {setIndexNumber(1)}
        if (IndexNumber < 1) {setIndexNumber(childrenLength)}
    },[IndexNumber,plusSlide])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexNumber(IndexNumber => IndexNumber + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="Carousel">
            <Slider IndexNumber={IndexNumber} setChildrenLength={setChildrenLength} childrenLength={childrenLength}>
                <SliderImage 
                img="HOME1.jpg" 
                
                />
                
                <SliderImage 
                img="HOME2.jpg" 
                
                />
                
                <SliderImage 
                img="HOME3.jpg" 
                
                />
            </Slider>
            <p>{IndexNumber}</p>
            <a className="prev" onClick={()=>plusSlide(-1)}>&#10094;</a>
            <a className="next" onClick={()=>plusSlide(1)}>&#10095;</a>
            
        </div>
    )
}

export default Carousel
