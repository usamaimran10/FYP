import React,{useEffect} from 'react';
import './Slider.css';

const Slider = (props) => {

    useEffect(()=>{
        if(props.childrenLength === 0){
            props.setChildrenLength(props.children.length);
        }
    },[]);
    

    return (
        <div className="Slider">
            {props.children[props.IndexNumber-1]}
        </div>
    )
}

export default Slider;
