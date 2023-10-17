import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';
import '../styles/navbar.css';

function Footer() {
    const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <>
        {openLinks ?
            <div className='fixed bottom-0 right-0 z-20 w-1/3 md:w-1/5 h-2/5 navbar bg-turquoise bg-opacity-90'>
                <div className="flex flex-col items-center mt-5 grow gap-y-5 3xl:gap-y-16">
                    <button id="arrowUp" className='bg-transparent border-0 cursor-pointer' onClick={toggleNavbar}>
                        <KeyboardArrowUpIcon />
                    </button>
                    <Link to="/"><span className='text-xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>Home</span></Link>
                    <Link to="/about"><span className='text-xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>About</span></Link>
                    {/*<Link to="/"><span className='text-xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green'>Portfolio</span></Link>*/}
                </div>
            </div>
          :
            <div className="fixed bottom-0 left-0 z-20 flex flex-row w-full navbar h-14 xl:h-20 3xl:h-32 bg-turquoise bg-opacity-40">
                <div className="flex items-center justify-between px-6 grow">
                    <Link to="/">
                        <span id="navbarLogo" className='pt-1 text-white cursor-pointer hover:text-pale-green'><Brightness4SharpIcon /></span>
                    </Link>
                    <button id="burger" className='bg-transparent border-0 cursor-pointer' onClick={toggleNavbar}>
                        <ReorderIcon />
                    </button>
                </div>
            </div>
        }
    </>
  );
  }

export default Footer;
