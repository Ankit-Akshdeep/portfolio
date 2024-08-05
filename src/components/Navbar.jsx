import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/AAAA.png'
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = ()=> setNav(!nav); 

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#202021] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Img" style={{width: '140px', paddingTop:'20px'}}/>
        </div>

        {/* Menu*/ }
            <ul className='hidden md:flex'>
                <li><Link  to="home" smooth={true} duration={500}>
                        Home
                    </Link>
              </li>
                <li><Link  to="About" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li><Link  to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li>
                <li><Link  to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>
                <li><Link  to="contacts" smooth={true} duration={500}>
                        Contact
                    </Link></li>    
            </ul>
       

        {/* Hamburger */ }
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
        </div>

        {/* Mobile menu */ }
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#202021] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="About" smooth={true} duration={500}>
                        About
                    </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contacts" smooth={true} duration={500}>
                        Contact
                    </Link></li>
        </ul>

        {/*Socials*/ }
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160ox] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-[#194fa6]'>
                    <a className='flex justify-between items-center w-full gap-2 text-gray-300'
                     href="https://www.linkedin.com/in/ankit-akshdeep-300387238/"> 
                     LinkedIn <FaLinkedin size={30}/></a>
                </li>

                <li className='w-[160ox] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-[#11151c]'>
                    <a className='flex justify-between items-center w-full gap-2 text-gray-300'
                     href="https://github.com/Ankit-Akshdeep"> 
                     Github <FaGithub size={30}/></a>
                </li>

                <li className='w-[160ox] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-[#ed615c]'>
                    <a className='flex justify-between items-center w-full gap-2 text-gray-300'
                     href="mailto:ankit.25akshdeep@gmail.com"> 
                     Email <HiOutlineMail size={30}/></a>
                </li>

                <li className='w-[160ox] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-[#410442]'>
                    <a className='flex justify-between items-center w-full gap-2 text-gray-300'
                     href="https://github.com/Ankit-Akshdeep/Resume/tree/main"> 
                     Resume <BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>
        </div>
    
    
    </div>
  )
}

export default Navbar
