import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import ReorderIcon from '@mui/icons-material/Reorder';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';
import { AstroInfo } from '../pages/astroInfo';
import '../styles/navbar.css';

function Footer() {
    const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <>
        {openLinks ?
            <div id='buger-open' className="">
                <div className='relative -right-5 top-10'>
                  <button id="burger-open" className='bg-transparent border-0 cursor-pointer' onClick={toggleNavbar}>
                      <MenuOpenIcon />
                  </button>
                </div>
                <div className='relative z-50 flex flex-col rounded-md -right-5 -top-24 bg-turquoise opacity-70'>
                    <Link to="/">
                      <span className='text-xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>Home</span>
                    </Link>
                    <Link to="/about"><span className='text-xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>About</span></Link>
                    <Link to="/"><span className='text-xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>Portfolio</span></Link>
                </div>
            </div>
        
          :
            <div id='burger' className="">
                <button id="burger" className='bg-transparent border-0 cursor-pointer' onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        }
    </>
  );
  }

export default Footer;
