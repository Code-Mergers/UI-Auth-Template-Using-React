import React from 'react';

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
           <a href={'/card/' + props.url} className="btn btn-outline-primary">{props.button}</a>
          </div>
        </div>
    )
}

export default CardUI;
