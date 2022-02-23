import React from 'react';
import { MdLocalPhone,MdEmail } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle'
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
const ContactMeStyle = styled.div`


padding: 10rem 0;
.contactme-section-wrapper{
  display: flex;
  gap: 5rem;
  margin-top: 7rem;
  justify-content: space-between;
  position: relative;
  
}
.contactme-section-wrapper::after{
  position: absolute;
  content: '';
  width: 2px;
  height: 50%;
  background-color: gray;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
}
.left{
  width: 100%;
  max-width: 500px;
  
  
    
}
.right{
  max-width: 500px;
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .contactme-section-wrapper{
    flex-direction: column;
  }
  .contactme-section-wrapper::after{
    display: none;
  }
  .left, .right{
    max-width: 100%;
  }
  .right{
    padding: 4rem 2rem 2rem 2rem;
  }
  
}

`;

export default function ContactMe() {
  return (<ContactMeStyle>
    <div className='container'>
      <SectionTitle 
      heading='Get in Touch'
      subheading='I can be totally stalked online.Give me a shout-out.'
      />
      <div className='contactme-section-wrapper'>
        <div className='left'>
          <ContactInfoItem icon={<MdLocalPhone/>} 
          text="+8801708358718" />
          <ContactInfoItem icon={<MdEmail/>}
          text='jahankamruna0016@gmail.com' />
          <ContactInfoItem text='Dhaka , Bangladesh'/>

        </div>
        <div className='right'>
          <ContactForm/>
        </div>
      </div>
    </div>
  </ContactMeStyle>);
}
