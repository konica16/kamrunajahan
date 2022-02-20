import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';
import {SwitchTransition ,CSSTransition} from 'react-transition-group'
import PText from '../PText';
import styled from 'styled-components';
import {MdArrowBack, MdArrowForward} from 'react-icons/md'
import testimonials from '../../assets/data/testimonials';
const TestimonialStyle = styled.div `
padding : 10rem 0;
text-align : center;
.testimonial-wrapper{
  position : relative;
  max-width : 700px;
  margin: 0 auto;
}
.testimonial-info{
 width : 100%;
 height : fit-content;
 padding: 3rem;
 background-color : yellow;
 border-radius : 12px;
 margin-top: 5rem;
 
}
.testimonial-desc{
  .para{
    text-align : center;
    font-size : 17px;
    margin-left: 60px;
  }
}
.testimonial-name{
  margin-top:4rem ;
  font-family : 'Poppins Bold';
  font-size:14px;
  
}
.testimonial-title{
  font-size: 13px ;
  margin-top: 0.3rem;
}
.arrows{
  margin-top: 2rem ;
  display : flex;
  align-items : center;
  justify-content:center;
  svg{
    width: 30px;
    pointer-events : none;
  }
  .next,
  .prev{
    margin: 0 0.5rem;
    width: fit-content;
    background-color:white ;
    padding: 0.5rem 2rem;
    border-radius:8px ;
    cursor : pointer;
  }

}
.fade-enter{
  opacity:0;
  transform: scale(.96);
}
.fade-enter-active{
  opacity: 1;
  transition: 250ms ease-in opacity;
  transform: scale(1);
  transition-property:opacity,transform;
}
.fade-exit{
  opacity: 1;
  transform: scale(1);
}
.fade-exit-active{
  opacity: 0;
  transform: scale(.96);
  transition: 250ms ease-in opacity;
  transition-property:opacity,transform;
}
`;

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handlePrev(){
    if(activeIndex <= 0){
      setActiveIndex(testimonials.length - 1);
    }else{
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext(){
    if(activeIndex >= testimonials.length -1){
      setActiveIndex(0);
    }else{
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (<TestimonialStyle>
    <div className='testimonial-container'>
      <SectionTitle 
      heading='Testimonials'
      subheading='See what my seniors say about me'
      />
      <div className ='testimonial-wrapper'>
        <SwitchTransition>
          <CSSTransition 
          key={activeSlide.id} timeout={300} classNames="fade"
          >
            <div className='testimonial-info'>
              <div className='testimonial-desc'>
                <PText>
                  {activeSlide.desc}
                </PText>
              </div>
              <h5 className='testimonial-name'>
                {activeSlide.name}
              </h5>
              <p className='testimonial-title'>
                {activeSlide.title}, {activeSlide.org}
              </p>

            </div>
          </CSSTransition>
        </SwitchTransition>

      </div>
      <div className='arrows'>
        <div className='prev'
        onClick={handlePrev}
        role="button"
        tabIndex={0}
        onKeyDown={handlePrev}
        >
          <MdArrowBack/>
        </div>
        <div className='next'
        onClick={handleNext}
        role="button"
        tabIndex={0}
        onKeyDown={handleNext}
        >
          <MdArrowForward/>
        </div>
        


      </div>

    </div>
  </TestimonialStyle>);
}
