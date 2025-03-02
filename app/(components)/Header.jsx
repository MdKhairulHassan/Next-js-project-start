'use client'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Link from 'next/link'

const Header = () => {
  const [header, setHeader] = useState(false);
  const [menu1, setColor1] = useState(false);
  const [menu2, setColor2] = useState(false);
  const [menu3, setColor3] = useState(false);
  const [menu4, setColor4] = useState(false);
  const [menu5, setColor5] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }
    const changeColor1 = () => {
      if(window.scrollY >= 0 && window.scrollY <= 600){
          setColor1(true)
      }else{
          setColor1(false)
      }
  }

    const changeColor2 = () => {
    if(window.scrollY >= 601 && window.scrollY <= 1300){
        setColor2(true)
    }else{
        setColor2(false)
    }
  }
  
    const changeColor3 = () => {
    if(window.scrollY >= 1301 && window.scrollY <= 2500){
        setColor3(true)
    }else{
        setColor3(false)
    }
  }
  
    const changeColor4 = () => {
    if(window.scrollY >= 2501 && window.scrollY <= 4300){
        setColor4(true)
    }else{
        setColor4(false)
    }
  }
  
    const changeColor5 = () => {
    if(window.scrollY >= 4301 && window.scrollY <= 5200){
        setColor5(true)
    }else{
        setColor5(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', changeColor1);
    window.addEventListener('scroll', changeColor2);
    window.addEventListener('scroll', changeColor3);
    window.addEventListener('scroll', changeColor4);
    window.addEventListener('scroll', changeColor5);
    
    return () => {
      window.addEventListener('scroll', scrollHeader);
      window.addEventListener('scroll', changeColor1);
      window.addEventListener('scroll', changeColor2);
      window.addEventListener('scroll', changeColor3);
      window.addEventListener('scroll', changeColor4);
      window.addEventListener('scroll', changeColor5);
    }
  }, [])
  
  return (
    <div className={header ? "fixed w-full z-50 bg-black" : "bg-mainbgColor" }>
    <div className='pt-[10px] '>
      <Container>
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href={'#home'} className={"hover:text-menuTHoverColor" } >Home</Link>
              </li>
              <li>
                <Link href={'#service'} className={"hover:text-menuTHoverColor" }>Services</Link>
              </li>
              <li>
                <Link href={'#about'} className={"hover:text-menuTHoverColor" }>About me</Link>
              </li>
              <li>
                <Link href={'#portfolio'} className={"hover:text-menuTHoverColor" }>Portfolio</Link>
              </li>
              <li>
                <Link href={'#contact'} className={"hover:text-menuTHoverColor" }>Contact me</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <svg width="78" height="23" viewBox="0 0 78 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.87 22C2.29 22 1.79 21.79 1.37 21.37C0.97 20.95 0.77 20.45 0.77 19.87V3.7C0.77 2.7 1.1 1.96 1.76 1.48C2.42 0.979999 3.43 0.729998 4.79 0.729998V18.52H12.89C13.83 18.52 14.54 18.82 15.02 19.42C15.5 20 15.74 20.86 15.74 22H2.87ZM25.5652 22.27C23.9252 22.27 22.4252 21.95 21.0652 21.31C19.7052 20.65 18.6252 19.76 17.8252 18.64C17.0452 17.52 16.6552 16.3 16.6552 14.98V7.99C16.6552 6.67 17.0452 5.46 17.8252 4.36C18.6252 3.24 19.7052 2.36 21.0652 1.72C22.4252 1.06 23.9252 0.729998 25.5652 0.729998C27.2052 0.729998 28.7052 1.06 30.0652 1.72C31.4452 2.36 32.5252 3.24 33.3052 4.36C34.1052 5.46 34.5052 6.67 34.5052 7.99V14.98C34.5052 16.3 34.1052 17.52 33.3052 18.64C32.5252 19.76 31.4452 20.65 30.0652 21.31C28.7052 21.95 27.2052 22.27 25.5652 22.27ZM25.5652 18.76C27.0652 18.76 28.2652 18.41 29.1652 17.71C30.0652 16.99 30.5152 16.06 30.5152 14.92V8.08C30.5152 6.92 30.0652 5.99 29.1652 5.29C28.2652 4.57 27.0652 4.21 25.5652 4.21C24.0852 4.21 22.8952 4.57 21.9952 5.29C21.0952 5.99 20.6452 6.92 20.6452 8.08V14.92C20.6452 16.06 21.0952 16.99 21.9952 17.71C22.8952 18.41 24.0852 18.76 25.5652 18.76ZM46.9522 22.27C45.1722 22.27 43.5822 21.93 42.1822 21.25C40.8022 20.57 39.7222 19.62 38.9422 18.4C38.1622 17.18 37.7722 15.79 37.7722 14.23V8.71C37.7722 7.15 38.1522 5.77 38.9122 4.57C39.6922 3.35 40.7622 2.41 42.1222 1.75C43.4822 1.07 45.0422 0.729998 46.8022 0.729998C48.5622 0.729998 50.1222 0.999999 51.4822 1.54C52.8622 2.06 53.9322 2.79 54.6922 3.73C55.4522 4.67 55.8322 5.75 55.8322 6.97C55.8322 7.71 55.5822 8.29 55.0822 8.71C54.6022 9.13 53.9522 9.34 53.1322 9.34C52.7322 9.34 52.2922 9.28 51.8122 9.16C51.8522 8.68 51.8722 8.21 51.8722 7.75C51.8722 6.69 51.4022 5.83 50.4622 5.17C49.5222 4.51 48.3022 4.18 46.8022 4.18C45.3222 4.18 44.1122 4.6 43.1722 5.44C42.2522 6.28 41.7922 7.37 41.7922 8.71V14.23C41.7922 15.57 42.2722 16.67 43.2322 17.53C44.1922 18.39 45.4322 18.82 46.9522 18.82C48.4322 18.82 49.6322 18.48 50.5522 17.8C51.4922 17.1 51.9622 16.2 51.9622 15.1V14.17H49.3822C48.6222 14.17 48.0022 13.88 47.5222 13.3C47.0422 12.7 46.8022 11.93 46.8022 10.99H54.0922C54.6522 10.99 55.1022 11.16 55.4422 11.5C55.7822 11.84 55.9522 12.29 55.9522 12.85V15.19C55.9522 16.57 55.5722 17.8 54.8122 18.88C54.0522 19.94 52.9822 20.77 51.6022 21.37C50.2422 21.97 48.6922 22.27 46.9522 22.27ZM68.0879 22.27C66.4479 22.27 64.9479 21.95 63.5879 21.31C62.2279 20.65 61.1479 19.76 60.3479 18.64C59.5679 17.52 59.1779 16.3 59.1779 14.98V7.99C59.1779 6.67 59.5679 5.46 60.3479 4.36C61.1479 3.24 62.2279 2.36 63.5879 1.72C64.9479 1.06 66.4479 0.729998 68.0879 0.729998C69.7279 0.729998 71.2279 1.06 72.5879 1.72C73.9679 2.36 75.0479 3.24 75.8279 4.36C76.6279 5.46 77.0279 6.67 77.0279 7.99V14.98C77.0279 16.3 76.6279 17.52 75.8279 18.64C75.0479 19.76 73.9679 20.65 72.5879 21.31C71.2279 21.95 69.7279 22.27 68.0879 22.27ZM68.0879 18.76C69.5879 18.76 70.7879 18.41 71.6879 17.71C72.5879 16.99 73.0379 16.06 73.0379 14.92V8.08C73.0379 6.92 72.5879 5.99 71.6879 5.29C70.7879 4.57 69.5879 4.21 68.0879 4.21C66.6079 4.21 65.4179 4.57 64.5179 5.29C63.6179 5.99 63.1679 6.92 63.1679 8.08V14.92C63.1679 16.06 63.6179 16.99 64.5179 17.71C65.4179 18.41 66.6079 18.76 68.0879 18.76Z" fill="url(#paint0_linear_587_644)"/>
            <defs>
            <linearGradient id="paint0_linear_587_644" x1="-1" y1="9.87097" x2="79" y2="9.87097" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FA6E00"/>
            <stop offset="1" stop-color="#E60026"/>
            </linearGradient>
            </defs>
            </svg>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-x-10 menu-horizontal px-1 text-menuTextsColor font-medium text-[20px] font-robo">
            <li>
              <Link href={'#home'} className={menu1 ? "text-red-700" : "hover:text-menuTHoverColor" } >Home</Link>
            </li>
            <li>
              <Link href={'#service'} className={menu2 ? "text-red-700" : "hover:text-menuTHoverColor" }>Services</Link>
            </li>
            <li>
              <Link href={'#about'} className={menu3 ? "text-red-700" : "hover:text-menuTHoverColor" }>About me</Link>
            </li>
            <li>
              <Link href={'#portfolio'} className={menu4 ? "text-red-700" : "hover:text-menuTHoverColor" }>Portfolio</Link>
            </li>
            <li>
              <Link href={'#contact'} className={menu5 ? "text-red-700" : "hover:text-menuTHoverColor" }>Contact me</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/'} className="bg-[#E46400] text-white text-[16px] py-[6px] px-[20px] rounded-lg hover:text-menuTextsColor hover:border-2 hover:border-menuTextsColor hover:bg-transparent">Hire Me</Link>
       </div>
      </div>
      </Container>
    </div>
    </div>
  )
}

export default Header