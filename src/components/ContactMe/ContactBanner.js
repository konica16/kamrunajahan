import React from 'react';
import PText from '../PText'
import Button from '../Button'
import styled from 'styled-components';

const ContactBannerStyles = styled.div `

padding : 10rem 0;

.contactbanner-wrapper{
    background-color : lightskyblue;
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align:center;
    
    
    
    
}
.contactbanner-heading{
    font-size: 4rem;
    
}
.para{
    margin-left : 33rem;

}

@media only screen and (min-width:768px){
    .contactbanner-heading{
        font-size:2.8rem;
    }
}

`;

export default function ContactBanner() {
  return(
       <ContactBannerStyles>
      <div className='container'>
          <div className='contactbanner-wrapper '>
              <PText >
                  Have aproject in mind?
              </PText>
              <h3 className='contactbanner-heading'>
                  Let Me Help You
              </h3>
              
              <Button btnText='Contact Now' btnLink='/contactme'/>

              
          </div>
      </div>
  </ContactBannerStyles>
  );
}
