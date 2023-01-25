import { Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
// import Main from "./components/Main";
import signup from "./components/Signup";
// import Login from "./components/Login";
import "./styles/App.css";
import BannerImage from './assets/milk.jpg';

function App() {
  const navigate = useNavigate();


	return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>E- Pashudhan</h1>
        <p> WE BELIEVE IN QUALITY </p>
          <button onClick={() => navigate("signup")}>
            Sign Up
          </button>
      </div>
    </div>
		// <div className="App">
    //   <center><h1>HOME</h1>
    //   <button className="btn btn-primary" onClick={() => navigate("signup")}>SignUp</button>
    //   </center>
    // </div>
	);
}

export default App; 