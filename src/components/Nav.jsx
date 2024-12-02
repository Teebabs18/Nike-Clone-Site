import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants'
import { hamburger, close } from '../assets/icons'
import { useState } from 'react'


const Nav = () => {

  const [ShowHamburger, setShowHamburger] = useState(false);

  return (
    <div>
      <header className='padding-x py-8 fixed z-50 w-full bg-black'>
        <nav className="max-container flex justify-between items-center">
            <a href="">
              <img className= 'm-0 w-[129px] h-[29px]'src={headerLogo} alt="Logo" width= {129} height={29} />
            </a>
           
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks && navLinks.map((link) => (
                    <li key={link.label} className='Flex'>
                      <a href={link.href} className='font-montserrat leading-normal text-lg text-white' >
                        {link.label}
                      </a>
                    </li>
                ))}
            </ul>

            <div className="hidden max-lg:block">

              <img src={ShowHamburger? close: hamburger} alt="hamburger icon" width={25} height={25} className='hover:cursor-pointer' onClick={()=> setShowHamburger(!ShowHamburger)} />
            
              {
                ShowHamburger && (
                  <ul className='menu-dropdown'>
                    {navLinks && navLinks.map((link) => (
                        <li key={link.label} className='menu-items'>
                          <a href={link.href} className='font-montserrat leading-normal text-md text-slate-gray' >
                            {link.label}
                          </a>
                        </li>
                    ))}
                </ul>
                )
              }

              
            </div>    

           
        </nav>
      </header>
    </div>
  )
}

export default Nav
