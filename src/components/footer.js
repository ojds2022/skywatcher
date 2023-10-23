import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import ReorderIcon from '@mui/icons-material/Reorder';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';
import { AstroInfo } from '../pages/astroInfo';
import '../styles/footer.css';

function Footer() {
    const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <>
        {openLinks ?
            <div id='buger-open' className="">
                <div className='relative top-20 -right-16'>
                  <button id="burger-open" className='bg-transparent border-0 cursor-pointer' onClick={toggleNavbar}>
                      <CloseIcon />
                  </button>
                </div>
                <div className='relative z-50 flex flex-col w-40 mb-2 rounded-md -right-5 -top-32 bg-light-purple opacity-70'>
                    <Link className='px-5 pt-5 pb-2' to="/">
                      <span className='text-2xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>Astronomical Data</span>
                    </Link>
                    <Link className='pt-2 pb-5 border-t-2 border-white border-dotted' to="/about">
                      <span className='text-2xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>Weather Info</span>
                    </Link>
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
