import React from 'react'
import { FiUsers } from "react-icons/fi";
import Container from './Container'

const Service = () => {
  return (
    <div id='service' className='py-[75px] bg-mainbgColor'>
      <Container>
        <div className='text-center'>
          <h1 className='text-[#FEFEFE] font-lato font-bold text-[40px]'>Services</h1>
          <p className='font-medium font-lato text-[20px] text-[#707070]'>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
        </div>
        <div className='flex flex-wrap pt-[50px] justify-between gap-y-8'>
          <div className='w-[32%] bg-[#222222] text-center rounded-2xl p-[34px]'>
            <FiUsers  className='ml-[122px] text-[#FD6F00] w-[70px] h-[70px]'/>
            <h4 className='text-[#FD6F00] font-lato font-bold text-[24px]'>App Design</h4>
            <p className='text-[#4b4b4b] font-lato font-medium text-[20px]'>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className='w-[32%] bg-[#222222] text-center rounded-2xl p-[34px]'>
            <FiUsers  className='ml-[122px] text-[#FD6F00] w-[70px] h-[70px]'/>
            <h4 className='text-[#FD6F00] font-lato font-bold text-[24px]'>App Design</h4>
            <p className='text-[#4b4b4b] font-lato font-medium text-[20px]'>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className='w-[32%] bg-[#222222] text-center rounded-2xl p-[34px]'>
            <FiUsers  className='ml-[122px] text-[#FD6F00] w-[70px] h-[70px]'/>
            <h4 className='text-[#FD6F00] font-lato font-bold text-[24px]'>App Design</h4>
            <p className='text-[#4b4b4b] font-lato font-medium text-[20px]'>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className='w-[32%] bg-[#222222] text-center rounded-2xl p-[34px]'>
            <FiUsers  className='ml-[122px] text-[#FD6F00] w-[70px] h-[70px]'/>
            <h4 className='text-[#FD6F00] font-lato font-bold text-[24px]'>App Design</h4>
            <p className='text-[#4b4b4b] font-lato font-medium text-[20px]'>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className='w-[32%] bg-[#222222] text-center rounded-2xl p-[34px]'>
            <FiUsers  className='ml-[122px] text-[#FD6F00] w-[70px] h-[70px]'/>
            <h4 className='text-[#FD6F00] font-lato font-bold text-[24px]'>App Design</h4>
            <p className='text-[#4b4b4b] font-lato font-medium text-[20px]'>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className='w-[32%] bg-[#222222] text-center rounded-2xl p-[34px]'>
            <FiUsers  className='ml-[122px] text-[#FD6F00] w-[70px] h-[70px]'/>
            <h4 className='text-[#FD6F00] font-lato font-bold text-[24px]'>App Design</h4>
            <p className='text-[#4b4b4b] font-lato font-medium text-[20px]'>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Service