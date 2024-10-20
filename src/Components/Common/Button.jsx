import React from 'react'
import { twMerge } from 'tailwind-merge';
import { cn } from '../../lib/utils/cn';

export const Button = ({children, className}) => {
        return (
          <div>
            <button
              className={cn(
                "py-4 px-[25px] font-bold rounded-full text-white bg-gradient-primary", className
              )}
            >
             {children}
            </button>
          </div>
        );
};
