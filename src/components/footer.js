import React from 'react'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';

function Footer() {
    return (
        <div className="absolute bottom-0 left-0 z-20 flex flex-col justify-center w-full h-14 xl:h-20 3xl:h-32 bg-light-purple bg-opacity-70">
            <div id="socialMedia" className="pt-2 text-center text-white cursor-pointer">
                <span className='hover:text-pale-green'><InstagramIcon /></span>
                <span className='hover:text-pale-green'><TwitterIcon /></span>
                <span className='hover:text-pale-green'><FacebookIcon /></span>
                <span className='hover:text-pale-green'><LinkedInIcon /></span>
            </div>
            <p className='text-sm text-center text-white xl:text-lg 3xl:text-3xl'> &copy; 2023 skywatcher.com </p>
        </div>
      );
  }

export default Footer;
