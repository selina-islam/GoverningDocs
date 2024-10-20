import React from 'react';
import { ProblemSolutionHeader } from './ProblemSolutionHeader'
import { Container } from '../Common/Container'
import Problemsolutioncard from '../Home/Problemsolutioncard'
import { problemSolutions } from '../../lib/dv'

export const ProblemSolution = () => {
  return (
    <section className="pt-32">
      <Container>
       
          <div className="flex  justify-between items-center">
            <div>
              <ProblemSolutionHeader />
            </div>
            <div className="flex m-0 md:justify-around">
              <img src="public/img/frameone.png" alt="" />
              
              <img src="public/img/frametwo.png" alt="" />
            </div>
          </div>

          {/* problemsolution card */}

          <div className="pt-10 gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
            {problemSolutions.map(({image,title, des1, des2}, i) => (
              <Problemsolutioncard image={ image} title={title} des1={des1} des2={des2} key={i} />
            ))}
          </div>
      
      </Container>
    </section>
  );
};
