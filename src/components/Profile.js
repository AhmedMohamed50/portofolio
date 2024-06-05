// import logo from './logo.svg';
import './App.css';
import ProfilePicture from '../assests/images/avatar.webp';

function Profile() {
    return (
        <div className="App">
            <img src={ProfilePicture} className="profile-picture" alt="Profile"/>
            <h2>I am Ahmed M. AbdelRahim Maree</h2>
            <h3>I am Computer Engineer</h3>
            <h4>this is my first react project</h4>
        </div>

    );
}

export default Profile;
