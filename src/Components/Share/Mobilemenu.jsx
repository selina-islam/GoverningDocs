import React from 'react'
import { Logo } from './Logo'
import { navItems } from '../../lib/dv';

export const Mobilemenu = ({ toogolMenus }) => {
  return (
    <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden">
      <div className="flex justify-between items-center pb-5">
        <Logo />
        <button
          className="text-black text-2xl self-end"
          aria-label="Close Menu"
          onClick={toogolMenus}
        >
          &times;
        </button>
      </div>
      <div className="space-y-4">
        {navItems.map(({ link, label }, i) => (
          <a
            href={link}
            key={i}
            className="block text-lg text-accent hover:text-primary transition-colors duration-150"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};
