import React from 'react'
import { cn } from '../../lib/utils/cn'

export const ReveiwCard = ({name, image, type, active,onClick }) => {
  return (
    <button
    onClick={onClick}
      className={cn("inline-flex justify-normal items-center border-primary rounded-[20px] border w-full lg:w-[400px] xl:w-[491px] py-[1px] px-5 gap-[13px]", active && "bg-gradient-primary")}>
      <img src={image} alt={image} className="rounded-full" />
      <div className={cn("font-semibold text-base text-accent", active && 'text-white')}>
                          <h4>{ name}</h4>
                          <p>{ type}</p>
      </div>
    </button>
  );
}
