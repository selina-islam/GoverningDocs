import React from 'react'
import { Container } from '../Common/Container'
import { Button } from '../Common/Button';

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-28 xl:pt-[142px]">
      <Container className="flex justify-center items-center md:flex-row md:gap-0 md:justify-center gap-5 flex-col-reverse">
        <div className='space-y-5 md:space-y-[29px]'>
          <h1 className="font-space-grotesk text-2xl font-bold md:text-[60px] md:text-4xl lg:text-6xl lg:leading-[76px] max-w[593px] md:leading-[60px]">
            Simplify your real estate document analysis
          </h1>
          <p className="font-semibold lg:text-xl text-base md:text-lg max-w-[450px] xl:max-w-[519px]">
            Streamline, Automate, and Secure Your Business Documents with Ai
            GoverningDocs
          </p>
          <Button>Get Started Today</Button>
        </div>
        <div> <img src="img/hero-side.svg" alt="Hero Img" className='w-auto md:w-[900px] xl:w-[740px]' /></div>
      </Container>
    </section>
  );
};
