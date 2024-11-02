import logo from '../assets/satyanshuLogoWhite.png';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-11' src={logo} alt="logo"/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/satyanshu-vishwakarma-865763195/' alt="LinkedIn" target="_blank"><FaLinkedin /></a>
            <a href='https://github.com/SatyanshuVish' target="_blank"><FaGithub /></a>
            <a href='https://x.com/SatyanshuHata' target="_blank"><FaSquareXTwitter /></a>
            <a href='https://www.facebook.com/SatyanshuVishwakarma/' target="_blank"><FaFacebook /></a>
            <a href='mailto:satyanshu.hata@gmail.com/' target="_blank"><TfiEmail /></a>
        </div>
    </nav>
  )
}

export default Navbar;