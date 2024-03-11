import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Welcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate()
  
  const renderName=(e) => {
     setName(e.target.value)
  }

  const onPlay=()=>{
     const personName = JSON.stringify(name)
     localStorage.setItem('name',personName)
     navigate("/board")
  }

  return (
    <div className="welcome-container">
      <h1 className="react-tiles-heading">React Tiles</h1>
      <div className="name-container">
        <h1 className="name-heading">Enter Your Name</h1>
        <input onChange={renderName} value={name} className="name-input" type="text" />
        <button onClick={onPlay} className="play-btn" type="button">
          Play
        </button>
      </div>
    </div>
  );
};
export default Welcome;
