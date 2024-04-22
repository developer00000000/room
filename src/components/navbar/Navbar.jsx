import {  Link} from 'react-router-dom';
import logo from '../../images/logoImzo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";

const Navbar = () => {
   const [isOpen,setIsOpen]=useState(false)


  return (
    <>
     <header>
     <nav className='container'>
       <div className='nav'>
       <img className='img' src={logo} alt="" />
        <ul className={`${isOpen ? 'show' : 'hide'}`}>
          <img src={logo} alt="" />
          <Link className='navlink'>Kompaniya haqida</Link>
          <Link className='navlink'>Mahsulotlar</Link>
          <Link className='navlink'>Kalkulyator</Link>
          <Link className='navlink'>Yangiliklar</Link>
          <Link className='navlink'>Franshiza</Link>
          <Link className='navlink'>Muddatli to'lov</Link>
          <Link className='navlink'>Shourumlar</Link>
          <div id='blacks ' className="media_one  ">
                   <span><FaInstagram className='black' /></span>
                   <span><PiTelegramLogo className='black'/></span>
                   <span><SlSocialFacebook  className='black'/></span>
                   <span><FiYoutube  className='black'/></span>
                </div>
          <IoMdClose className='burgerBtn close '  onClick={()=>setIsOpen(!isOpen)}/>  
        </ul>
       </div>
        <button className='mainButton'>Bepul o'lchash<LuSeparatorHorizontal /></button>
        <div className='burgerBtn'>
        <RxHamburgerMenu className='open' onClick={()=>setIsOpen(!isOpen)}/>
        </div>
      </nav>
     </header>
    
    </>
  )
}

export default Navbar