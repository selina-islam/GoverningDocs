import React, { useState } from 'react'
import { Container } from '../Common/Container'
import { SectionTitle } from '../Common/SectionTitle'
import { FawCard } from './FawCard';
import { faq } from "../../lib/dv";

export const Faq = () => {
  const [active, setActive] = useState(true);
  const handlechange = (index) => {
    active === index ? setActive(-1) : setActive(index)
  };

  return (
    <section className="mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] relative">
      <Container className=" max-w-[982px] relative z-10">
        <SectionTitle gradient="Asked Questions">Frequently</SectionTitle>

        <div className="pt-10">
          {faq.map((faq, i) => (
            <FawCard key={i} {...faq} onClick={()=> handlechange(i)} isActive={active ===i} />
          ))}
        </div>
      </Container>

      <img src="/img/faq-bg-line.svg" alt="Faq bg" className='absolute h-[1713px] !w-[590px] -top-[115px] 2xl:-left-[23.8%] z-0' />
    </section>
  );
}
