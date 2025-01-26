import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=' bg-[#262626]'>
      <Container>
        <footer className="p-10">
          <div className='flex justify-center'>
            <img src="LOGO.png" alt="logo" />
          </div>
          <div className='flex justify-center pt-10'>
            <div className="navbar-center hidden lg:flex">
          <ul className="gap-x-10 menu-horizontal px-1 text-menuTextsColor font-medium text-[20px] font-robo">
            <li>
              <Link href={'#home'} className={'hover:text-menuTHoverColor'}>Home</Link>
            </li>
            <li>
              <Link href={'#service'} className='hover:text-menuTHoverColor'>Services</Link>
            </li>
            <li>
              <Link href={'#about'} className='hover:text-menuTHoverColor'>About me</Link>
            </li>
            <li>
              <Link href={'#portfolio'} className='hover:text-menuTHoverColor'>Portfolio</Link>
            </li>
            <li>
              <Link href={'#contact'} className='hover:text-menuTHoverColor'>Contact me</Link>
            </li>
          </ul>
        </div>
          </div>
          <div className='flex justify-center'>
          <div className='flex gap-x-5 text-iconColor text-[28px] pt-10'>
              <Link href={'/'}>
              <FaInstagram className='border border-iconBColor p-1 rounded-full' />
              </Link>
              <Link href={'#'}>
              <CiLinkedin className='border border-iconBColor p-1 rounded-full'/>
              </Link>
              <Link href={'#'}>
              <FaDribbble className='border border-iconBColor p-1 rounded-full'/>
              </Link>
              <Link href={'#'}>
              <FaBehance className='border border-iconBColor p-1 rounded-full'/>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center pt-10'>
            <MdOutlineMailOutline className='text-menuTextsColor text-[20px]'/>
            <p className='text-menuTextsColor font-lato font-bold text-[20px] pl-2'>Mahmood.fazile7005@gmail.com</p>
            <FiPhone className='text-menuTextsColor text-[20px] ml-7' />
            <p className='text-menuTextsColor font-lato font-bold text-[20px] pl-2'>+93 729 107 005</p>
          </div>
          <div className='flex justify-center pt-10'>
          <div className='text-center border-t w-[50%] pt-5'>
            <p className='text-[#707070] font-lato font-bold text-[16px]'>Designed by @mahmood.fazile UI/UX designer</p>
            <p className='text-[#707070] font-lato font-bold text-[16px] border-t mt-2 pt-2'>Front-End Develop by ................ Web-Developer</p>
          </div>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Footer