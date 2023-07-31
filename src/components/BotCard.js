import React from "react";
import './BotCard.css';

function BotCard({image, title, catchphrase, health, damage, armor}){

    const divCardStyle = {
        width: '14rem'
      }

    return(
        <div className="card p-1 m-2 bg-info" style={divCardStyle}>
            <img className="img card-img-top" src={image} alt="Not found"/>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <small className="card-text">{catchphrase}</small>
            </div>
            <div>
                <div>
                    <p>Health: {health}</p>
                    <p>damage: {damage}</p>
                    <p>armor: {armor}</p>
                </div>
            </div>
        </div>
    )
}

export default BotCard;