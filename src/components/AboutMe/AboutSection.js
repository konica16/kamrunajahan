import React from 'react';
import Button from '../Button';
import PText from '../PText';
import SectionTitle from '../SectionTitle';
import AboutImg from "../../assets/Images/7.jpg"
import styled from 'styled-components';

const AboutSectionStyle= styled.div`

padding: 10rem 0;
.about-container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align : left ;
}
.aboutsection-left,
.aboutsection-right{
    flex: 1;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 8rem;

}
.aboutsection-right{
    align-items:left;
    
}

.section-title{
    text-align: left;
    
}
.para{
    margin-top: 2rem;
    margin-right: 0;
}
.aboutsection-buttons{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    
    
    /* border-radius: 50px;
    color: var(--white);
    border: 2px solid linen;
    text-size-adjust: 5px;
    background-color: #1f2235; */
}

@media only screen and (max-width: 950px) {
    .aboutsection-left{
        flex: 3;
    }
    .aboutsection-right{
        flex: 4;
    }
    
}
@media only screen and (max-width: 768px) {
    .about-container{
        flex-direction: column;
        text-align: center;
    }
    .aboutsection-left,
.aboutsection-right{
    width: 100%;

}
.aboutsection-left{
    margin-top: 3rem;
}
.section-title{
    text-align: center;
}
.para{
    margin: 0 auto;
    margin-top: 2rem;
}
.aboutsection-buttons{
    flex-direction: column;
    gap: 0rem;
    .button-wrapper,
    a{
        width: 100%;
        text-align: center;
    }
}
    
}

`;
export default function AboutSection() {
  return (
  <AboutSectionStyle>
     <div className='about-container'>
         <div className='aboutsection-left'>
         <img className='aboutImg' src={AboutImg} alt='Img'></img>
         
             
         </div>
         <div className='aboutsection-right'>
         <SectionTitle 
              subheading ='Why Choose Me'
              heading ='About Me'
             />
             <PText>
                  I am from Dhaka, Bangladesh. 
                  Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in university.I like coding .
                  I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.             

             </PText>
             <div className='aboutsection-buttons'>
                 <Button btnlink="/projects" btnText="Works"  />
                 <Button btnlink="/aboutme" btnText="Read More" outline/>
             </div>
         
             
         </div>

     </div>

  </AboutSectionStyle>
  );
}
