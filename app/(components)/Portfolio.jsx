import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div id='portfolio' className='py-[75px] bg-mainbgColor'>
      <Container>

      <div className='text-center'>
          <h1 className='text-[#FEFEFE] font-lato font-bold text-[40px]'>Portfolio</h1>
      </div>
        
      <div className='pl-[40px] pt-10 flex justify-center gap-x-5'>
        <Link href={'#'} className="bg-[#2e2e2e] text-[#C6C6C6] text-[16px] py-[10px] px-[25px] rounded-lg hover:text-white hover:bg-[#E46400]">ALL
        </Link>
        <Link href={'#'} className="bg-[#2e2e2e] text-[#C6C6C6] text-[16px] py-[10px] px-[25px] rounded-lg hover:text-white hover:bg-[#E46400]">Website design
        </Link>
        <Link href={'#'} className="bg-[#2e2e2e] text-[#C6C6C6] text-[16px] py-[10px] px-[25px] rounded-lg hover:text-white hover:bg-[#E46400]">App mobile design
        </Link>
        <Link href={'#'} className="bg-[#2e2e2e] text-[#C6C6C6] text-[16px] py-[10px] px-[25px] rounded-lg hover:text-white hover:bg-[#E46400]">App desktop
        </Link>
        <Link href={'#'} className="bg-[#2e2e2e] text-[#C6C6C6] text-[16px] py-[10px] px-[25px] rounded-lg hover:text-white hover:bg-[#E46400]">Braiding
        </Link>
        </div>
        
        <div className='pt-20 flex flex-wrap justify-between gap-y-10'>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio2.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio3.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio2.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio3.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio3.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
          <div className="card w-[32.5%] shadow-xl">
            <div>
              <img src="portfolio2.png" alt="image" className='w-full h-full'/>
             </div>
             <div className="bg-[#252525] rounded-b-xl px-[20px] py-[20px]">
               <div className="flex justify-between">
               <h2 className="font-lato font-bold text-[16px] text-[#C6C6C6]">Name Project</h2>
               <h2 className="font-lato font-bold text-[16px] text-[#959595]">Categories</h2>
               </div>
             </div>
           </div>
        </div>

      </Container>
    </div>
  )
}

export default Portfolio