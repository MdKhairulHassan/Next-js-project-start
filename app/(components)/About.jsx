import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { FaFigma } from "react-icons/fa";
import { TbBrandAdobeXd, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobePremier } from "react-icons/tb";

const About = () => {
  return (
    <div id='about' className='py-[75px] bg-mainbgColor'>
      <Container>
        <div className='text-center'>
          <h1 className='text-[#FEFEFE] font-lato font-bold text-[40px]'>Contact me</h1>
          <p className='font-medium font-lato text-[20px] text-[#707070]'>Cultivating Connections: Reach Out and Connect with Me</p>
        </div>
        <div className='flex'>
          <div className='w-1/2 relative'>
            <div className='bg-[#ffffff0c] rounded-t-full w-full h-[85%] absolute top-[30%] -translate-y-[18%] z-0'></div>
            <img src="Man-img-2.png" alt="image" className='relative z-10'/>
          </div>
          <div className='w-1/2'>
            <p className='font-lato font-medium text-[20px] text-[#959595] px-10 mt-[120px] text-justify'>A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>
            <div className='pl-[40px] pt-10'>
              <Link href={'#'} className="bg-[#E46400] text-white text-[16px] py-[10px] px-[25px] rounded-lg hover:text-menuTextsColor hover:border-2 hover:border-menuTextsColor hover:bg-transparent"><IoCloudDownloadOutline className='inline-block'/> Downlead CV
              </Link>
            </div>
          </div>
        </div>
        <div className='pt-[100px] flex justify-between'>
          <div className='text-center w-[200px]'>
          <div className="radial-progress text-[#E46400]" style={{ "--value": 100, "--size": "150px", "--thickness": "10px"  }} role="progressbar"><FaFigma className='text-[#959595] text-[50px]'/>
          </div>
            <h5 className='font-lato font-bold text-[30px] text-[#E46400] pt-5'>100%</h5>
            <h6 className='text-[#959595] font-lato font-bold text-[24px]'>Figma</h6>
          </div>
          <div className='text-center w-[200px]'>
          <div className="radial-progress text-[#E46400]" style={{ "--value": 100, "--size": "150px", "--thickness": "10px"  }} role="progressbar"><TbBrandAdobeXd className='text-[#959595] text-[50px]'/>
          </div>
            <h5 className='font-lato font-bold text-[30px] text-[#E46400] pt-5'>100%</h5>
            <h6 className='text-[#959595] font-lato font-bold text-[24px]'>Adobe XD</h6>
          </div>
          <div className='text-center w-[200px]'>
          <div className="radial-progress text-[#E46400]" style={{ "--value": 85, "--size": "150px", "--thickness": "10px"  }} role="progressbar"><TbBrandAdobePhotoshop className='text-[#959595] text-[50px]'/>
          </div>
            <h5 className='font-lato font-bold text-[30px] text-[#E46400] pt-5'>85%</h5>
            <h6 className='text-[#959595] font-lato font-bold text-[24px]'>Adobe Photoshop</h6>
          </div>
          <div className='text-center w-[200px]'>
          <div className="radial-progress text-[#E46400]" style={{ "--value": 60, "--size": "150px", "--thickness": "10px"  }} role="progressbar"><TbBrandAdobeIllustrator className='text-[#959595] text-[50px]'/>
          </div>
            <h5 className='font-lato font-bold text-[30px] text-[#E46400] pt-5'>60%</h5>
            <h6 className='text-[#959595] font-lato font-bold text-[24px]'>Adobe Illustrator</h6>
          </div>
          <div className='text-center w-[200px]'>
          <div className="radial-progress text-[#E46400]" style={{ "--value": 70, "--size": "150px", "--thickness": "10px"  }} role="progressbar"><TbBrandAdobePremier className='text-[#959595] text-[50px]'/>
          </div>
            <h5 className='font-lato font-bold text-[30px] text-[#E46400] pt-5'>70%</h5>
            <h6 className='text-[#959595] font-lato font-bold text-[24px]'>Adobe Premiere</h6>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About