import React from 'react';
import {MdPlace} from 'react-icons/md';
import styled from 'styled-components';
import PText from '../PText'

const ItemStyles =styled.div`

padding: 0.7rem;
background-color: yellow;
display: flex;
align-items: center;
gap: 2rem;
border-radius: 8px;
margin-bottom: 2rem;
margin-top: 4rem;
.icon{
    color: white;
    background-color: #04202e;
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

}
svg{
    width: 2rem;
}

`;
export default function ContactInfoItem({
    icon = <MdPlace/>,
    text ='this is an info',
}){

  return (
    <ItemStyles>
        <div className='icon'>
            {icon}
        </div>
        <div className='info'>
            <PText>{text}</PText>
        </div>
    </ItemStyles>
  )
  }
