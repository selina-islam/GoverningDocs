import React from 'react'

export const FawCard = ({q, a, onClick, isActive}) => {
        return (
          <div className="shadow-faq rounded-[20px] py-5 px-[30px] bg-white">
            <div className="flex-col justify-between items-center gap-0">
              {/* questions section */}
              <button
                onClick={onClick}
                className="inline-flex justify-between items-center gap-5 w-full"
              >
                <div>
                  <h1 className="font-bold text-lg lg:text-[26px] lg:leading-[36px] text-secondary text-start">
                    {q}
                  </h1>
                </div>

                <div className="text-primary  -rotate-180 mb-">
                  <img src="/img/arrow.png" width="40px" alt="" />
                </div>
              </button>

              {/* answer section */}
              {isActive && (
                <div>
                  <p className="text-accent pt-5 text-sm lg:text-base">{a}</p>
                </div>
              )}
            </div>
          </div>
        );
}
