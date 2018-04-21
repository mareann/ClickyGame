import React from "react";
import "./ClickyCard.css";


//const spanStyle = {
//  color: 'red'
//};


const ClickyCard = (props) => (
    <div className="card">
        <div className="img-container">
         {/* {<span style={spanStyle}> {props.id}</span>} */}
            <img alt={props.name} src={props.image} onClick={() => props.shuffleCards(props.id)} />
        </div>
        <div className="content">
          <strong>Click me, I'm {props.name}!</strong>
        </div>
  </div>
);

export default ClickyCard;
