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
                <li onClick={() => setShowNav(false)}>
            <Link to={"/"} > Player1 vs Player2 </Link>
                </li> 
            <li onClick={() => setShowNav(false)} >
                <Link to={"/Player-vs-Computer"}> Player vs Computer </Link>
               </li>
            <li onClick={restartGame}>Restart</li>
          </div>
    }
        </ul>
      </div>  
    </>  
  )
}

export default TicNav;