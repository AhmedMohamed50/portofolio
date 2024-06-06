import logo from '../assests/images/img2.webp';
// eslint-disable-next-line
import React, { useState } from 'react';
import './Meals.css';

// import ProfilePicture from '../assests/images/avatar.webp';


function Courses() {


    return (
        <div className="meals">
            <h2>My Meals</h2>
            <div className="meal-list">
                <div className="meal-card">
                    <img src={logo} className='meal-image' alt="meal" />
                    <h3>My Best Rating Meal</h3>
                    <p>Rating: 4.5/5</p>
                    <button>Order Meal</button>
                </div>

                <div className="meal-card">
                    <img src={logo} className='meal-image' alt="meal" />
                    <h3>My Best Rating Meal</h3>
                    <p>Rating: 4.5/5</p>
                    <button>Order Meal</button>
                </div>

                <div className="meal-card">
                    <img src={logo} className='meal-image' alt="meal" />
                    <h3>My Best Rating Meal</h3>
                    <p>Rating: 4.5/5</p>
                    <button>Order Meal</button>
                </div>
            </div>
        </div>
        
    );
}

export default Courses;
