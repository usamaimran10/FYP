import React from 'react';
import './SliderImage.css';


const SliderImage = ({img}) => {
    

    return (
        <div className="SliderImage fade">
            <img src={img} style={{width:"100vw"}} alt="SliderImage"/>
        </div>
    )
}

export default SliderImage;
