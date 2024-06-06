// import logo from '../assests/images/img2.webp';
// eslint-disable-next-line
import React, { useState } from 'react';
import './Meals.css';
import MEALS from "../data/MEALS";

// import ProfilePicture from '../assests/images/avatar.webp';


function Meals() {
    return (
        <div className="meals">
            <h2>My Meals</h2>
            <div className="meal-list">
                {
                    MEALS.map(MEALS => {
                        return <Meal meal={MEALS}/>
                    })
                }
            </div>
        </div>
        
    );
}

const Meal = (props) => {
    const {name,description,price,image} =props.meal;
    return (
    
        <div className="meal-card">
            <img src={image} className='meal-image' alt="meal" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <button>Order Meal</button>
        </div>
    
);}
export default Meals;
