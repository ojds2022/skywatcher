import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/footer.css';

function Footer(props) {
  const [openLinks, setOpenLinks] = useState(false);

  const setShowAstroInfo = props.showAstroInfo;
  const setShowWeatherInfo = props.showWeatherInfo;

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <>
        {openLinks ?
            <div id='buger-open' className="">
                <div className='relative top-12 -right-16'>
                  <button id="burger-open" className='bg-transparent border-0 cursor-pointer' onClick={toggleNavbar}>
                      <CloseIcon />
                  </button>
                </div>
                <div className='relative z-50 flex flex-col w-40 mb-2 rounded-md -right-5 -top-24 bg-light-purple opacity-70'>
                    <span className='px-5 pt-5 pb-2'>
                      <button className='text-2xl text-white md:text-2xl xl:text-3xl 3xl:text-6xl hover:text-pale-green' onClick={() => {setShowAstroInfo(true); setShowWeatherInfo(false);}}>Astronomical Data</button>
                    </span>
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
