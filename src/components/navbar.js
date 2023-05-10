import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';
import '../styles/navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar w-full h-14 bg-light-purple bg-opacity-70 absolute top-0 left-0 flex flex-row z-20">
      {openLinks ? 
          <div className="flex items-center justify-between px-6 grow">
              <Link to="/"><span className='text-xl text-white hover:text-pale-green'>Home</span></Link>
              <Link to="/about"><span className='text-xl text-white hover:text-pale-green'>About</span></Link>
              <Link to="/contact"><span className='text-xl text-white hover:text-pale-green'>Contact</span></Link>
              <button className='text-white hover:text-pale-green bg-transparent border-0 cursor-pointer burger' onClick={toggleNavbar}>
                  <ReorderIcon />
              </button>
          </div>
      :
          <div className="flex items-center justify-between px-6 grow">
              <Link to="/">
                  <span className='text-white hover:text-pale-green cursor-pointer pt-1 navbarLogo'><Brightness4SharpIcon /></span>
              </Link>
              <button className='text-white hover:text-pale-green bg-transparent border-0 cursor-pointer burger' onClick={toggleNavbar}>
                  <ReorderIcon />
              </button>
          </div>
      }
    </div>
  );
}

export default Navbar;
