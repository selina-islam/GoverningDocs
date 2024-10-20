import React, { useState } from 'react'
import { Container } from '../Common/Container'
import { SectionTitle } from '../Common/SectionTitle'
import { ReveiwCard } from './ReveiwCard';
import { reviews } from "../../lib/dv";
import { Star } from '../Share/Icon';
import { cn } from '../../lib/utils/cn';

export const Reviews = () => {
  const [active, setActive] = useState(1);
const activeReview = reviews [active]

        return (
          <section className="xl:my-[150px] my-[50px] sm:my-20 lg:my-[100px] bg-[#F6F6F6] xl:py-20 py-10 ">
            <Container>
              <SectionTitle gradient="Our Client" className="text-center">
                Reviews From
              </SectionTitle>

              <div className="pt-10 flex flex-col md:flex-row justify-center items-center lg:gap-20 gap-10 xl:gap-[93px]">
                <div className="flex w-full gap-5">
                  <div className="bg-[#E2DED8] W-[5PX] rounded-[50px]">
                    <div className="space-[15px]">
                      {Array.from(
                        Array(3)
                          .keys()
                          .map((el) => (
                            <div
                              key={el}
                              className={cn(
                                "w-[5px] rounded-[20px] h-[92px] transparent",
                                active === el && "bg-gradient-primary"
                              )}
                            />
                          ))
                      )}
                    </div>
                  </div>

                  {/* list */}
                  <div className="space-y-[15px] flex-grow w-full">
                    {reviews.map((review, i) => (
                      <ReveiwCard
                        key={i}
                        active={active === i}
                        onClick={() => setActive(i)}
                        {...review}
                      />
                    ))}
                  </div>
                </div>

                {/* review */}
                <div className="space-y-[30px] w-full">
                  <h1 className="font-bold text-[30px]">
                    {" "}
                    {activeReview.review.title}
                  </h1>
                  <div className="flex justify-start items-center gap-[5px]">
                    {Array.from(
                      Array(activeReview.review.stars)
                        .keys()
                        .map((el) => <Star />)
                    )}
                  </div>
                  <p className="text-base text-accent max-w-[500px]">
                    {activeReview.review.details}
                  </p>
                </div>
              </div>
            </Container>
          </section>
        );
};
