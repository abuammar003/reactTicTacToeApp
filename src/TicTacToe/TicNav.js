import React, { useState } from 'react';
import "./TicNav.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const TicNav = () => {
    const [showNav, setShowNav] = useState(false);

    function openMenu () {
        setShowNav(true);
    }

    function restartGame() {
      window.location.reload();
    }

  return (
    <>
    <div className="ticNav">
        <ul>
          <li id="ticMenu">{showNav ? <IoMdClose onClick={()=> setShowNav(false)}/>   :   <IoMdMenu onClick={openMenu}/>}</li>
    {showNav && 
          <div className='navLink'>
                <Link to={"/"}>
            <li onClick={() => setShowNav(false)} > Player1 vs Player2 </li>
                </Link> 
                <Link to={"/Player-vs-Computer"}>
            <li onClick={() => setShowNav(false)} > Player vs Computer</li>
                </Link>
            <li onClick={restartGame}>Restart</li>
          </div>
    }
        </ul>
      </div>  
    </>  
  )
}

export default TicNav;