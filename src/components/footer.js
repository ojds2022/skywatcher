import React from 'react'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';

function Footer() {
    return (
      <div className="w-full h-14 bg-light-purple bg-opacity-70 absolute bottom-0 left-0 flex flex-col justify-center z-20">
          <div className="socialMedia text-white cursor-pointer pt-2">
              <span className='hover:text-pale-green'><InstagramIcon /></span>
              <span className='hover:text-pale-green'><TwitterIcon /></span>
              <span className='hover:text-pale-green'><FacebookIcon /></span>
              <span className='hover:text-pale-green'><LinkedInIcon /></span>
          </div>
          <p className='text-white pb-2'> &copy; 2022 skywatcher.com </p>
      </div>
    );
}

export default Footer;
