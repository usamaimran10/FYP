import React from 'react'
import './Item.css';

const Item = (props) => {
    return (
        <div className="item">
            <div class="categories">
            <img class="box" src={props.number} alt="Card cap"/>
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
    )
}

export default Item