import React, { useState } from 'react';
import "./TicNav.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const TicNav = () => {
    const [showNav, setShowNav] = useState(false);

    function openMenu () {
        setShowNav(true);
        
    }

  return (
    <>
    <div className="ticNav">
        <ul>
          <li id="ticMenu">{showNav ? <IoMdClose onClick={()=> setShowNav(false)}/>   :   <IoMdMenu onClick={openMenu}/>}</li>
    {showNav && 
          <div className='navLink'>
            {/* <li > <Link to={"/Player1 vs Player2"}>Player1 vs Player2</Link> </li> */}
                <Link to={"/Player1 vs Player2"}>
            <li > Player1 vs Player2 </li>
                </Link> 
                <Link to={"/Player vs Computer"}>
            <li > Player vs Computer</li>
                </Link>
            <li>Restart</li>
          </div>
    }
        </ul>
      </div>  
    </>  
  )
}

export default TicNav;