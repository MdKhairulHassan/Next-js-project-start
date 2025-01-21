import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='bg-[#1e1e1e] py-[75px] pb-[120px]'>
      <Container>
        <Flex>
          <div className='w-1/2'>
            <p className='text-bannerTColor font-lato text-[24px] font-semibold'>Hi I am</p>
            <h2 className={'font-lato font-bold text-[28px] text-menuTextsColor'}>Mahmood Fazile</h2>
            <h1 className='font-lato font-extrabold text-[70px] bg-gradient-to-r from-orange-800 via-orange-500 to-red-500 bg-clip-text text-transparent'>UI/UX designer</h1>
            <div className='flex gap-x-5 text-iconColor text-[28px]'>
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
            <div className='flex pt-10 gap-x-5'>
              <Link href={'#'} className="bg-[#E46400] text-white text-[16px] py-[6px] px-[20px] rounded-lg hover:text-menuTextsColor hover:border-2 hover:border-menuTextsColor hover:bg-transparent">Hire Me
              </Link>
              <Link href={'#'} className="bg-[#E46400] text-white text-[16px] py-[6px] px-[20px] rounded-lg hover:text-menuTextsColor hover:border-2 hover:border-menuTextsColor hover:bg-transparent"><IoCloudDownloadOutline className='inline-block'/> Downlead CV
              </Link>
            </div>
            <div className='bg-menuTextsColor bg-opacity-5 mt-10 rounded-lg w-[85%]'>
              <div className='flex gap-x-6 p-[24px]'>
                <div className='font-lato border-r border-menuTextsColor pr-6'>
                  <h5 className='text-menuTHoverColor font-extrabold text-[24px]'>5+</h5>
                  <p className='text-skillTextColor font-bold text-[20px]'>Experiences</p>
                </div>
                <div className='font-lato border-r border-menuTextsColor pr-6'>
                  <h5 className='text-menuTHoverColor font-extrabold text-[24px]'>20+</h5>
                  <p className='text-skillTextColor font-bold text-[20px]'>Project done</p>
                </div>
                <div className='font-lato'>
                  <h5 className='text-menuTHoverColor font-extrabold text-[24px]'>80+</h5>
                  <p className='text-skillTextColor font-bold text-[20px]'>Happy Clients</p>
                </div>
              </div>
            </div>
        </div>
        <div className='w-1/2'>

        </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Banner