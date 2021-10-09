import React from 'react';
import { Link } from "react-router-dom";

const CardUI = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.image} alt="image1" className="card-img-top"/>
            </div>
          <div className="card-body text-dark">
           <h4 className="card-title">{props.title}</h4>
           <p className ="card-text text-secondary">
               {props.text}
           </p>
           <Link className="btn btn-outline-primary" to={'/card/' + props.url}>
           {props.button}
           </Link>
          </div>
        </div>
    )
}

export default CardUI;
