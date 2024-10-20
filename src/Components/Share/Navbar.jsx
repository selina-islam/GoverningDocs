import React, { useState } from 'react'
import { navItems } from '../../lib/dv';
import { Container } from '../Common/Container'
import { Logo } from './Logo'
import { Button } from '../Common/Button';
import { Mobilemenu } from './Mobilemenu';

export const Navbar = () => {
  const [isMenusOpen, setIsMenusOpen] = useState(false);
  const toogolMenus = () => setIsMenusOpen(!isMenusOpen);
  return (
    <nav className="py-5 ">
      <Container>
        <div className="flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 bg-white rounded-full">
          <Logo />
          <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
            {navItems.map(({ label, link },i) => (
              <a href={link} key={i}>
                <p className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150">
                  {label}
                </p>
              </a>
            ))}
            
          </div>

          <div className="flex gap-2 justify-center items-center ">
            <button
              className="lg:hidden block text-accent"
              onClick={toogolMenus}
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
              </div>
            </button>
            <Button className="sm:py-3">Get Started Today</Button>
          </div>
        </div>
        {isMenusOpen && <Mobilemenu toogolMenus={toogolMenus} />}
      </Container>
    </nav>
  );
};

