// import logo from './logo.svg';
import './App.css';
import Meals from './Meals';
import Profile from './Profile';
// import Qualifications from './Qualifications';


function App() {
  return (
    <div className="app">
      <Profile />
      {/* <Qualifications /> */}
      <Meals />
    </div>
  );
}

export default App;

