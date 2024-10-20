import React from "react";
import { Container } from "../Common/Container";
import { SectionTitle } from '../Common/SectionTitle'
import { partners } from "../../lib/dv";

export const Partner = () => {
  return (
    <section className="px-2.5">
      <Container className="bg-[#E6F9FD] max-w-[1276px] py-[50px] px-3 rounded-[20px]  ">
        <SectionTitle className='text-center' gradient="Partners">Our</SectionTitle>

        <div className="pt-10 flex justify-center items-center flex-wrap gap-x-[30px] gap-y-7">
          {partners.map(({ src, alt }, i) => (
            <div key={i} className="w-[274px] bg-white border border-[#D6D6D6] rounded-x h-[101px] flex justify-center items-center">
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
