import React from "react";

function PromoFood(props){
    return (
        <>
            <div className='card'>
                <img className='product--image' src={props.url} alt="" />
                <h4>{props.name}</h4>
                <p>{props.type}</p>
                <p>
                  <img className='icon-in-food' src="./src/assets/icon-rate.png" alt="icon-rate" /> {props.rate}
                  <img className='icon-in-food' src="./src/assets/icon-clock.png" alt="icon-clock" /> {props.time}
                  <img className='icon-in-food' src="./src/assets/icon-dot.png" alt="icon-dot" /> {props.km}
                </p>
              </div>
        </>
    )
}
export default PromoFood;