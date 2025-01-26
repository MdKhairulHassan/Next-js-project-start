import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='py-[75px] bg-mainbgColor'>
      <Container>
        <div className='text-center'>
          <h1 className='text-[#FEFEFE] font-lato font-bold text-[40px]'>Contact me</h1>
          <p className='font-medium font-lato text-[20px] text-[#707070]'>Cultivating Connections: Reach Out and Connect with Me</p>
        </div>

        <div className='flex justify-between'>
          <div className='w-[49%]'>
          <label className="input flex items-center bg-[#252525] mt-10">
              <input type="text" className="grow" placeholder="Name" />
            </label>
            <label className="input flex items-center bg-[#252525] mt-10">
              <input type="number" className="grow" placeholder="Phone Number" />
            </label>
            <label className="input flex items-center bg-[#252525] mt-10">
              <input type="text" className="grow" placeholder="Timeline" />
            </label>
          </div>
          <div className='w-[49%]'>
          <label className="input flex items-center bg-[#252525] mt-10">
              <input type="email" className="grow" placeholder="Email" />
            </label>
            <select className="select w-full bg-[#252525] text-[#959595] mt-10">
              <option disabled selected >Service of Interest</option>
              <option>Service 1</option>
              <option>Service 2</option>
            </select>
            <textarea className="textarea bg-[#252525] mt-10 w-full h-[150px] mb-[30px]" placeholder="Project Details..."></textarea>
            <Link href={'#'} className="bg-[#E46400] text-white text-[16px] py-[6px] px-[20px] rounded-lg hover:text-menuTextsColor hover:border-2 hover:border-menuTextsColor hover:bg-transparent ml-[495px]">Send
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact