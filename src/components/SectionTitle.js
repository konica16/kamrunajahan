import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
text-align: center;
p{
    font-family: 'Poppins Regular';
    font-size: 2rem;
}
h2{
    font-family: "Poppins Bold";
    font-size: 4rem;
    margin-top: 1.5rem;
    text-transform: uppercase;
}
@media only screen and (max-width: 768px) {
    p{
        font-size: 1.2rem;
    }
    h2{
        font-size: 3.6rem;
    }
    
}
`;

export default function SectionTitle(
    {
        subheading ='this is subheading ',
        heading ='this is heading',
    })
     {
    
  return (
  <SectionTitleStyle className='section-title'>
      <p>{subheading}</p>
      <h2>{heading}</h2>

  </SectionTitleStyle>
  );
}