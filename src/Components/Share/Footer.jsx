import React from 'react'
import { navItems, SocialIcon } from '../../lib/dv';
import { Container } from "../Common/Container";


export const Footer = () => {
  return (
    <footer className="pt-5 lg:pt-24">
      <Container>
        <div className="flex lg:flex-row text-center flex-col justify-between ite  gap-2.5 py-5">
          <h1 className="font-space-grotesk text-xl sm:text-2xl lg:text-lg xl:text-4xl font-bold">
            Ai GoverningDocs
          </h1>
          <div className="hidden lg:flex jus  items gap-3 xl:gap-4 ">
            {navItems.map(({ label, link },i) => (
              <a href={link} key={i}>
                <p className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150">
                  {label}
                </p>
              </a>
            ))}
          </div>

          <div className="flex  justify-center items-center gap-2">
            {SocialIcon.map(({ img, url }, i) => (
              <a href={url} target="_blank" key={i}>
                <img src={img} alt="Social icon" className="sixe-[35px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-5 md:mt-[50px] lg:mt-[106px] border-t border-transparent footer-border-color">
          <p className="text-lg text-center leading-[18px] text-[#111111] py-5">
            Ai GoverningDocs 2024. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

