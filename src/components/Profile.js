import React, { useState } from 'react';
import './Profile.css';
import ProfilePicture from '../assests/images/avatar.webp';


function Profile() {
    const [displayBio, setDisplayBio] = useState(false);

    const toggle = () => {
        setDisplayBio(!displayBio);
        console.log("clicked on");
    };

    return (
        <div className="column">
            <img src={ProfilePicture} className="profile-picture" alt="Profile"/>
            <h2>Ahmed M. AbdelRahim Maree</h2>
            {displayBio ? (
                <div>
                    <h3>I am Computer Engineer</h3>
                    <h4>This is my first react project</h4>
                    <p>I want to learn more about React to work as a front-end developer</p>
                    <button onClick={toggle} className='btn'>Hide</button>
                </div>
            ) : (
                <button onClick={toggle} className='btn'>Show more</button>
            )}
            
        </div>
        
    );
}

export default Profile;
